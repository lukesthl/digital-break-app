from __future__ import annotations

import json
import re
import time
import unicodedata
import urllib.parse
import urllib.request
from argparse import ArgumentParser
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from datetime import date
from pathlib import Path

try:
    import fitz
except ImportError as exc:
    raise SystemExit(
        "PyMuPDF is required to parse and render generated PDFs. Install it with: python3 -m pip install PyMuPDF"
    ) from exc


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "apps" / "expo" / "assets" / "problem-sources" / "autocircuits-bank"
PDF_DIR = OUTPUT_DIR / "pdfs"
PNG_DIR = OUTPUT_DIR / "pngs"
MANIFEST_JSON_PATH = OUTPUT_DIR / "manifest.json"
MANIFEST_TS_PATH = OUTPUT_DIR / "manifest.ts"

BASE_URL = "https://www.autocircuits.org"

PARTS = {
    "DC_Random": ["Kirchhoff_Laws", "DC_Req", "DC_Analysis", "DC_Thev_Norton", "DC_MNA", "DC_TwoPort"],
    "AC_Random": ["AC_Zeq", "AC_Analysis", "AC_Thev_Norton", "AC_Power", "AC_Multifreq"],
    "Transients": ["I_order_DC_sources_switches", "LTI_Transient_noIC", "LTI_Transient_ICfromDC", "LTI_Transient"],
    "S_domain": ["LTI_H_s", "LTI_H_s_h_t", "LTI_NaturalFrequencies", "LTI_Bode"],
    "Formulations": ["LTI_StateEquations", "LTI_MNA"],
    "TwoPort": ["DC_TwoPort", "LTI_TwoPort"],
}

CHAPTER_TO_PART = {chapter: part for part, chapters in PARTS.items() for chapter in chapters}
CHAPTERS = list(CHAPTER_TO_PART.keys())
DIFFICULTIES = ["eeasy", "easy", "medium", "hard", "hhard"]
NUMBER_TYPES = ["integer", "rational", "real"]


@dataclass(frozen=True)
class GenerationSpec:
    index: int
    mode: str
    part: str
    chapter: str
    difficulty: str
    number_type: str
    selection: str
    allow_controlled_sources: bool = False
    allow_op_amps: bool = False
    allow_couplings: bool = False


def bool_option(enabled: bool, yes: str, no: str) -> str:
    return yes if enabled else no


def normalize_text(text: str) -> str:
    return (
        unicodedata.normalize("NFKC", text)
        .replace("\ufb01", "fi")
        .replace("\u2212", "-")
        .replace("\u2013", "-")
        .replace("\u2014", "-")
        .replace("\r", "\n")
    )


def clean_line(line: str) -> str:
    return re.sub(r"\s+", " ", normalize_text(line)).strip()


def stable_key(index: int, attempt: int) -> str:
    return f"digitalbreak{index:05d}_{attempt}"


def post_form(path: str, fields: dict[str, str], timeout: int = 90) -> str:
    data = urllib.parse.urlencode(fields).encode("utf-8")
    request = urllib.request.Request(
        f"{BASE_URL}/{path}",
        data=data,
        method="POST",
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return response.read().decode("utf-8", "replace")


def get_bytes(url: str, timeout: int = 90) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": "digital-break-offline-generator/1.0"})
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return response.read()


def fetch_remote_pdf(remote_pdf: str, timeout_s: int = 60) -> bytes:
    deadline = time.monotonic() + timeout_s
    last_error: Exception | None = None
    while time.monotonic() < deadline:
        try:
            return get_bytes(remote_pdf)
        except Exception as exc:
            last_error = exc
            time.sleep(1)
    raise RuntimeError(f"Could not download {remote_pdf}") from last_error


def launch_autocircuits(spec: GenerationSpec, attempt: int) -> str:
    payload = {
        "generalOptions_chapter": spec.selection,
        "circuitOptions_type": "numeric",
        "circuitOptions_numberType": spec.number_type,
        "generalOptions_difficulty": spec.difficulty,
        "circuitOptions_allowControlledSources": bool_option(spec.allow_controlled_sources, "AllowCS", "ExcludeCS"),
        "circuitOptions_allowOpAmps": bool_option(spec.allow_op_amps, "AllowOA", "ExcludeOA"),
        "circuitOptions_allowCouplings": bool_option(spec.allow_couplings, "AllowK", "ExcludeK"),
        "circuitOptions_language": "EN",
        "generalOptions_key": stable_key(spec.index, attempt),
    }
    response_text = post_form("launchMatlab.php", {"q": json.dumps(payload, separators=(",", ":"))})
    response = json.loads(response_text)
    pdf_url = response.get("downLoadFile")
    if not pdf_url or not str(pdf_url).lower().endswith(".pdf"):
        raise RuntimeError(f"AutoCircuits did not return a PDF URL for {spec}: {response_text}")
    if response.get("matlabReturnStatus") not in (0, "0", None):
        raise RuntimeError(f"AutoCircuits MATLAB failed for {spec}: {response_text}")
    return str(pdf_url).replace("\\/", "/")


def wait_for_pdf(pdf_url: str, timeout_s: int = 180) -> None:
    basename = Path(urllib.parse.urlparse(pdf_url).path).name
    deadline = time.monotonic() + timeout_s
    last_response = ""
    while time.monotonic() < deadline:
        last_response = post_form("checkFile.php", {"q": basename}, timeout=15).strip()
        if last_response == "2":
            return
        if last_response == "5":
            raise RuntimeError(f"AutoCircuits reported a generation error for {pdf_url}")
        time.sleep(1)
    raise TimeoutError(f"AutoCircuits PDF was not ready: {pdf_url} checkFile={last_response!r}")


def parse_pdf(pdf_path: Path) -> tuple[str, list[dict[str, str]]]:
    with fitz.open(pdf_path) as doc:
        if doc.page_count < 2:
            raise ValueError(f"Expected a 2-page AutoCircuits PDF, got {doc.page_count}: {pdf_path}")
        page1_lines = [clean_line(line) for line in doc[0].get_text("text").splitlines()]
        page2_lines = [clean_line(line) for line in doc[1].get_text("text").splitlines()]

    problem = ""
    data_lines: list[str] = []
    for line in page1_lines:
        if line.lower().startswith("problem:"):
            problem = line.split(":", 1)[1].strip()
        elif line.lower().startswith("data:"):
            data_lines.append(line)

    solution_started = False
    answers: list[dict[str, str]] = []
    for line in page2_lines:
        if line.lower() == "solution":
            solution_started = True
            continue
        if not solution_started or "=" not in line:
            continue
        match = re.match(r"([A-Za-z][A-Za-z0-9_ ]{0,20})\s*=\s*(.+)$", line)
        if not match:
            continue
        name = re.sub(r"\s+", "", match.group(1))
        expected = clean_line(match.group(2))
        if name and expected:
            answers.append({"id": name, "expected": expected})

    prompt = " ".join([problem, *data_lines]).strip()
    if not prompt or not answers:
        raise ValueError(f"Could not parse prompt/answers from {pdf_path}")
    return prompt, answers


def render_problem_page(pdf_path: Path, png_path: Path) -> None:
    png_path.parent.mkdir(parents=True, exist_ok=True)
    with fitz.open(pdf_path) as doc:
        page = doc[0]
        pixmap = page.get_pixmap(matrix=fitz.Matrix(3, 3), alpha=False)
        pixmap.save(png_path)


def part_for_selection(mode: str, selection: str) -> str:
    if mode == "chapters":
        return CHAPTER_TO_PART[selection]
    if selection == "Random":
        return "Random"
    return selection


def chapter_for_selection(mode: str, selection: str, index: int) -> str:
    if mode == "chapters":
        return selection
    if selection == "Random":
        return "Random"
    chapters = PARTS[selection]
    return chapters[index % len(chapters)]


def build_specs(per_difficulty: int) -> list[GenerationSpec]:
    specs: list[GenerationSpec] = []
    index = 0
    for difficulty in DIFFICULTIES:
        for i in range(per_difficulty):
            number_type = NUMBER_TYPES[i % len(NUMBER_TYPES)]
            specs.append(
                GenerationSpec(
                    index=index,
                    mode="chapters",
                    part="DC_Random",
                    chapter="Kirchhoff_Laws",
                    difficulty=difficulty,
                    number_type=number_type,
                    selection="Kirchhoff_Laws",
                )
            )
            index += 1
    return specs


def filename_for_spec(spec: GenerationSpec) -> str:
    safe = re.sub(r"[^A-Za-z0-9_]+", "_", f"{spec.mode}_{spec.selection}_{spec.difficulty}_{spec.number_type}")
    return f"autocircuits_{spec.index:05d}_{safe}.pdf"


def clean_output() -> None:
    for path in [*PDF_DIR.glob("*.pdf"), *PNG_DIR.glob("*.png"), MANIFEST_JSON_PATH, MANIFEST_TS_PATH]:
        if path.exists():
            path.unlink()


def write_manifests(entries: list[dict]) -> None:
    generated_at = date.today().isoformat()
    MANIFEST_JSON_PATH.write_text(json.dumps({"generatedAt": generated_at, "entries": entries}, indent=2) + "\n", encoding="utf-8")

    lines = [
        "/* eslint-disable */",
        'import type { ImageSourcePropType } from "react-native";',
    ]
    for entry in entries:
        lines.append(f"import img_{entry['id']} from {json.dumps(entry['imagePath'])};")
    lines.extend([
        "",
        "export type AutoCircuitsBankEntry = {",
        "  id: string;",
        "  part: string;",
        "  chapter: string;",
        "  mode: string;",
        "  difficulty: string;",
        "  numberType: string;",
        "  allowControlledSources: boolean;",
        "  allowOpAmps: boolean;",
        "  allowCouplings: boolean;",
        "  prompt: string;",
        "  answers: { id: string; expected: string }[];",
        "  pdf: string;",
        "  remotePdf: string;",
        "  image: ImageSourcePropType;",
        "};",
        "",
        f"export const generatedAt = {json.dumps(generated_at)};",
        "export const entries: AutoCircuitsBankEntry[] = [",
    ])
    for entry in entries:
        lines.append("  {")
        lines.append(f"    id: {json.dumps(entry['id'])},")
        lines.append(f"    part: {json.dumps(entry['part'])},")
        lines.append(f"    chapter: {json.dumps(entry['chapter'])},")
        lines.append(f"    mode: {json.dumps(entry['mode'])},")
        lines.append(f"    difficulty: {json.dumps(entry['difficulty'])},")
        lines.append(f"    numberType: {json.dumps(entry['numberType'])},")
        lines.append(f"    allowControlledSources: {json.dumps(entry['allowControlledSources'])},")
        lines.append(f"    allowOpAmps: {json.dumps(entry['allowOpAmps'])},")
        lines.append(f"    allowCouplings: {json.dumps(entry['allowCouplings'])},")
        lines.append(f"    prompt: {json.dumps(entry['prompt'])},")
        lines.append(f"    answers: {json.dumps(entry['answers'])},")
        lines.append(f"    pdf: {json.dumps(entry['pdf'])},")
        lines.append(f"    remotePdf: {json.dumps(entry['remotePdf'])},")
        lines.append(f"    image: img_{entry['id']},")
        lines.append("  },")
    lines.append("];")
    MANIFEST_TS_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")


def parse_args() -> tuple[int, int, float]:
    parser = ArgumentParser(description="Generate the offline AutoCircuits problem bank from real AutoCircuits PDFs.")
    parser.add_argument("--per-difficulty", type=int, default=20, help="Number of samples to generate for each difficulty.")
    parser.add_argument("--workers", type=int, default=6, help="Parallel worker count.")
    parser.add_argument("--delay", type=float, default=0.5, help="Delay between AutoCircuits generations, in seconds.")
    args = parser.parse_args()
    if args.per_difficulty < 1:
        raise SystemExit("--per-difficulty must be at least 1")
    if args.workers < 1:
        raise SystemExit("--workers must be at least 1")
    if args.delay < 0:
        raise SystemExit("--delay cannot be negative")
    return args.per_difficulty, args.workers, args.delay


def generate_entry(spec: GenerationSpec, delay: float) -> dict:
    pdf_name = filename_for_spec(spec)
    pdf_path = PDF_DIR / pdf_name
    entry_id = pdf_path.stem
    png_path = PNG_DIR / f"{entry_id}-1.png"

    for attempt in range(3):
        try:
            print(f"[{spec.index + 1}] {spec.mode} {spec.selection} {spec.difficulty} {spec.number_type}", flush=True)
            remote_pdf = launch_autocircuits(spec, attempt)
            wait_for_pdf(remote_pdf)
            pdf_path.write_bytes(fetch_remote_pdf(remote_pdf))
            prompt, answers = parse_pdf(pdf_path)
            render_problem_page(pdf_path, png_path)
            return {
                "id": entry_id,
                "part": spec.part,
                "chapter": spec.chapter,
                "mode": spec.mode,
                "difficulty": spec.difficulty,
                "numberType": spec.number_type,
                "allowControlledSources": spec.allow_controlled_sources,
                "allowOpAmps": spec.allow_op_amps,
                "allowCouplings": spec.allow_couplings,
                "prompt": prompt,
                "answers": answers,
                "pdf": f"/assets/problem-sources/autocircuits-bank/pdfs/{pdf_name}",
                "remotePdf": remote_pdf,
                "imagePath": f"./pngs/{entry_id}-1.png",
            }
        except Exception as exc:
            print(f"[{spec.index + 1}] attempt {attempt + 1} failed: {exc}", flush=True)
            if attempt >= 2:
                raise
            time.sleep(2)
        finally:
            if delay:
                time.sleep(delay)
    raise RuntimeError(f"Failed to generate {spec}")


def main() -> None:
    per_difficulty, workers, delay = parse_args()
    PDF_DIR.mkdir(parents=True, exist_ok=True)
    PNG_DIR.mkdir(parents=True, exist_ok=True)
    clean_output()
    write_manifests([])

    specs = build_specs(per_difficulty)
    entries: list[dict] = []
    with ThreadPoolExecutor(max_workers=workers) as executor:
        futures = {executor.submit(generate_entry, spec, delay): spec.index for spec in specs}
        results: dict[int, dict] = {}
        for future in as_completed(futures):
            index = futures[future]
            results[index] = future.result()
            write_manifests([results[i] for i in sorted(results)])

    entries = [results[i] for i in sorted(results)]

    write_manifests(entries)


if __name__ == "__main__":
    main()
