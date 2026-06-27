from __future__ import annotations

import json
import base64
import random
import re
import socket
import tempfile
import time
import unicodedata
import urllib.parse
import urllib.request
import uuid
from dataclasses import dataclass
from datetime import datetime, timezone
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any

try:
    import fitz
except ImportError as exc:
    raise SystemExit(
        "PyMuPDF is required for the AutoCircuits broker. "
        "Run this with the bundled Python used by the generator, or install it with: python3 -m pip install PyMuPDF"
    ) from exc


BASE_URL = "https://www.autocircuits.org"
DEFAULT_HOST = "0.0.0.0"
DEFAULT_PORT = 8787
GENERATED_DIR = Path(tempfile.gettempdir()) / "digital-break-autocircuits-broker"

PARTS = {
    "DC_Random": ["Kirchhoff_Laws", "DC_Req", "DC_Analysis", "DC_Thev_Norton", "DC_MNA", "DC_TwoPort"],
    "AC_Random": ["AC_Zeq", "AC_Analysis", "AC_Thev_Norton", "AC_Power", "AC_Multifreq"],
    "Transients": ["I_order_DC_sources_switches", "LTI_Transient_noIC", "LTI_Transient_ICfromDC", "LTI_Transient"],
    "S_domain": ["LTI_H_s", "LTI_H_s_h_t", "LTI_NaturalFrequencies", "LTI_Bode"],
    "Formulations": ["LTI_StateEquations", "LTI_MNA"],
    "TwoPort": ["DC_TwoPort", "LTI_TwoPort"],
}
CHAPTER_TO_PART = {chapter: part for part, chapters in PARTS.items() for chapter in chapters}
DIFFICULTIES = {"eeasy", "easy", "medium", "hard", "hhard"}
NUMBER_TYPES = {"integer", "rational", "real"}


def log_event(message: str, request_id: str | None = None) -> None:
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    prefix = f"[{timestamp}]"
    if request_id:
        prefix += f" [{request_id}]"
    print(f"{prefix} {message}", flush=True)


def is_iphone_user_agent(user_agent: str) -> bool:
    lowered = user_agent.lower()
    return "iphone" in lowered or ("mobile" in lowered and "safari" in lowered and "mac os x" in lowered)


def status_label(status: str) -> str:
    return {
        "0": "no circuit available",
        "1": "queued/running",
        "2": "pdf ready",
        "3": "cleanup exception",
        "4": "generating/solving",
        "5": "generation error",
    }.get(status, f"unknown status {status!r}")


@dataclass(frozen=True)
class BrokerRequest:
    mode: str
    part: str
    chapter: str
    difficulty: str
    number_type: str
    allow_controlled_sources: bool
    allow_op_amps: bool
    allow_couplings: bool
    request_nonce: str

    @property
    def selection(self) -> str:
        if self.mode == "shuffle":
            return "Random"
        if self.mode == "parts":
            return self.part
        return self.chapter


def parse_bool(value: str | None) -> bool:
    return str(value or "").lower() in {"1", "true", "yes", "on"}


def clean_line(line: str) -> str:
    normalized = (
        unicodedata.normalize("NFKC", line)
        .replace("\ufb01", "fi")
        .replace("\u2212", "-")
        .replace("\u2013", "-")
        .replace("\u2014", "-")
        .replace("\r", "\n")
    )
    return re.sub(r"\s+", " ", normalized).strip()


def bool_option(enabled: bool, yes: str, no: str) -> str:
    return yes if enabled else no


def post_form(path: str, fields: dict[str, str], timeout: int = 90) -> str:
    data = urllib.parse.urlencode(fields).encode("utf-8")
    request = urllib.request.Request(
        f"{BASE_URL}/{path}",
        data=data,
        method="POST",
        headers={
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "digital-break-autocircuits-broker/1.0",
        },
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return response.read().decode("utf-8", "replace")


def get_bytes(url: str, timeout: int = 90) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": "digital-break-autocircuits-broker/1.0"})
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return response.read()


def build_broker_request(query: dict[str, list[str]]) -> BrokerRequest:
    value = lambda key, fallback: query.get(key, [fallback])[0]
    mode = value("mode", "chapters")
    part = value("part", "DC_Random")
    chapter = value("chapter", "Kirchhoff_Laws")
    difficulty = value("difficulty", "eeasy")
    number_type = value("numberType", "integer")

    if mode not in {"parts", "chapters", "shuffle"}:
        raise ValueError(f"Invalid mode: {mode}")
    if mode == "parts" and part not in PARTS:
        raise ValueError(f"Invalid AutoCircuits part: {part}")
    if mode == "chapters" and chapter not in CHAPTER_TO_PART:
        raise ValueError(f"Invalid AutoCircuits chapter: {chapter}")
    if difficulty not in DIFFICULTIES:
        raise ValueError(f"Invalid AutoCircuits difficulty: {difficulty}")
    if number_type not in NUMBER_TYPES:
        raise ValueError(f"Invalid AutoCircuits number type: {number_type}")

    return BrokerRequest(
        mode=mode,
        part=part,
        chapter=chapter,
        difficulty=difficulty,
        number_type=number_type,
        allow_controlled_sources=parse_bool(value("allowControlledSources", "false")),
        allow_op_amps=parse_bool(value("allowOpAmps", "false")),
        allow_couplings=parse_bool(value("allowCouplings", "false")),
        request_nonce=value("requestNonce", str(time.time_ns())),
    )


def launch_autocircuits(request: BrokerRequest, request_id: str) -> str:
    key_bits = f"{random.randrange(16**12):012x}"
    payload = {
        "generalOptions_chapter": request.selection,
        "circuitOptions_type": "numeric",
        "circuitOptions_numberType": request.number_type,
        "generalOptions_difficulty": request.difficulty,
        "circuitOptions_allowControlledSources": bool_option(
            request.allow_controlled_sources, "AllowCS", "ExcludeCS"
        ),
        "circuitOptions_allowOpAmps": bool_option(request.allow_op_amps, "AllowOA", "ExcludeOA"),
        "circuitOptions_allowCouplings": bool_option(request.allow_couplings, "AllowK", "ExcludeK"),
        "circuitOptions_language": "EN",
        "generalOptions_key": key_bits,
    }
    log_event(
        "Launching AutoCircuits "
        f"selection={request.selection} difficulty={request.difficulty} numberType={request.number_type} key={key_bits}",
        request_id,
    )
    response_text = post_form("launchMatlab.php", {"q": json.dumps(payload, separators=(",", ":"))})
    response = json.loads(response_text)
    pdf_url = str(response.get("downLoadFile") or "").replace("\\/", "/")
    if not pdf_url.lower().endswith(".pdf"):
        raise RuntimeError(f"AutoCircuits did not return a PDF URL: {response_text}")
    if response.get("matlabReturnStatus") not in (0, "0", None):
        raise RuntimeError(f"AutoCircuits MATLAB failed: {response_text}")
    log_event(f"AutoCircuits launched successfully; remote PDF={pdf_url}", request_id)
    return pdf_url


def wait_for_pdf(pdf_url: str, request_id: str, timeout_s: int = 180) -> None:
    basename = Path(urllib.parse.urlparse(pdf_url).path).name
    deadline = time.monotonic() + timeout_s
    last_response = ""
    last_logged_response = ""
    start = time.monotonic()
    log_event(f"Polling checkFile.php for {basename}", request_id)
    while time.monotonic() < deadline:
        check_url = f"{BASE_URL}/checkFile.php?q={urllib.parse.quote(basename)}"
        last_response = get_bytes(check_url, timeout=15).decode("utf-8", "replace").strip()
        if last_response != last_logged_response:
            elapsed = time.monotonic() - start
            log_event(f"AutoCircuits status={last_response} ({status_label(last_response)}) after {elapsed:.1f}s", request_id)
            last_logged_response = last_response
        if last_response == "2":
            log_event(f"PDF is ready after {time.monotonic() - start:.1f}s", request_id)
            return
        if last_response == "5":
            raise RuntimeError(f"AutoCircuits reported a generation error for {pdf_url}")
        time.sleep(1)
    raise TimeoutError(f"AutoCircuits PDF was not ready: {pdf_url} checkFile={last_response!r}")


def fetch_remote_pdf(remote_pdf: str, request_id: str, timeout_s: int = 65) -> bytes:
    deadline = time.monotonic() + timeout_s
    last_error: Exception | None = None
    attempt = 0
    log_event(f"Downloading PDF from {remote_pdf}", request_id)
    while time.monotonic() < deadline:
        attempt += 1
        try:
            data = get_bytes(remote_pdf)
            if data[:4] != b"%PDF":
                raise RuntimeError(f"Downloaded AutoCircuits file is not a PDF: {remote_pdf}")
            log_event(f"Downloaded PDF bytes={len(data)} attempt={attempt}", request_id)
            return data
        except Exception as exc:
            last_error = exc
            log_event(f"PDF download attempt {attempt} failed: {exc}", request_id)
            time.sleep(1)
    raise RuntimeError(f"Could not download AutoCircuits PDF: {remote_pdf}") from last_error


def parse_pdf(pdf_path: Path, request_id: str) -> tuple[str, list[dict[str, str]]]:
    log_event(f"Parsing PDF {pdf_path}", request_id)
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
    if not prompt:
        raise ValueError(f"Could not parse prompt from AutoCircuits PDF: {pdf_path}")
    if not answers:
        raise ValueError(f"Could not parse answers from AutoCircuits PDF: {pdf_path}")
    log_event(f"Parsed prompt chars={len(prompt)} answers={len(answers)}", request_id)
    return prompt, answers


def render_problem_page(pdf_path: Path, png_path: Path, request_id: str) -> None:
    log_event(f"Rendering first PDF page to PNG {png_path}", request_id)
    with fitz.open(pdf_path) as doc:
        pixmap = doc[0].get_pixmap(matrix=fitz.Matrix(3, 3), alpha=False)
        pixmap.save(png_path)
    log_event(f"Rendered PNG bytes={png_path.stat().st_size}", request_id)


def generate_problem(request: BrokerRequest, public_origin: str, request_id: str) -> dict[str, Any]:
    GENERATED_DIR.mkdir(parents=True, exist_ok=True)
    problem_id = f"autocircuits-live-{time.time_ns()}-{random.randrange(10**9)}"
    pdf_path = GENERATED_DIR / f"{problem_id}.pdf"
    png_path = GENERATED_DIR / f"{problem_id}.png"

    started = time.monotonic()
    log_event(
        "Generating problem "
        f"mode={request.mode} part={request.part} chapter={request.chapter} difficulty={request.difficulty} "
        f"numberType={request.number_type} nonce={request.request_nonce}",
        request_id,
    )
    remote_pdf = launch_autocircuits(request, request_id)
    wait_for_pdf(remote_pdf, request_id)
    pdf_bytes = fetch_remote_pdf(remote_pdf, request_id)
    pdf_path.write_bytes(pdf_bytes)
    prompt, answers = parse_pdf(pdf_path, request_id)
    render_problem_page(pdf_path, png_path, request_id)

    if not png_path.exists() or png_path.stat().st_size == 0:
        raise RuntimeError("Rendered AutoCircuits PNG is missing or empty.")

    png_bytes = png_path.read_bytes()
    log_event(
        f"Problem ready id={problem_id} pdfBytes={len(pdf_bytes)} pngBytes={len(png_bytes)} "
        f"total={time.monotonic() - started:.1f}s",
        request_id,
    )

    return {
        "id": problem_id,
        "title": "Solve the circuit",
        "prompt": prompt,
        "answers": answers,
        "pdfBase64": base64.b64encode(pdf_bytes).decode("ascii"),
        "imageBase64": base64.b64encode(png_bytes).decode("ascii"),
        "pdfMimeType": "application/pdf",
        "imageMimeType": "image/png",
        "imageUrl": f"{public_origin}/generated/{png_path.name}",
        "pdfUrl": f"{public_origin}/generated/{pdf_path.name}",
        "remotePdfUrl": remote_pdf,
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "metadata": {
            "mode": request.mode,
            "part": request.part,
            "chapter": request.chapter,
            "difficulty": request.difficulty,
            "numberType": request.number_type,
            "selection": request.selection,
            "allowControlledSources": request.allow_controlled_sources,
            "allowOpAmps": request.allow_op_amps,
            "allowCouplings": request.allow_couplings,
        },
    }


class AutoCircuitsBrokerHandler(BaseHTTPRequestHandler):
    server_version = "DigitalBreakAutoCircuitsBroker/1.0"

    def end_headers(self) -> None:
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Accept")
        self.send_header("Cache-Control", "no-store, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_OPTIONS(self) -> None:
        self.log_request_start("OPTIONS")
        self.send_response(HTTPStatus.NO_CONTENT)
        self.end_headers()

    def do_GET(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        request_id = uuid.uuid4().hex[:8]
        self.current_request_id = request_id
        self.log_request_start("GET", request_id)
        try:
            if parsed.path == "/health":
                log_event("Health check", request_id)
                self.write_json({"ok": True, "generatedDir": str(GENERATED_DIR)})
            elif parsed.path == "/api/problem":
                query = urllib.parse.parse_qs(parsed.query)
                broker_request = build_broker_request(query)
                self.write_json(generate_problem(broker_request, self.public_origin(), request_id))
            elif parsed.path.startswith("/generated/"):
                self.write_generated_file(parsed.path)
            else:
                self.write_error(HTTPStatus.NOT_FOUND, "Not found")
        except ValueError as exc:
            log_event(f"Bad request: {exc}", request_id)
            self.write_error(HTTPStatus.BAD_REQUEST, str(exc))
        except Exception as exc:
            log_event(f"Request failed: {exc}", request_id)
            self.write_error(HTTPStatus.INTERNAL_SERVER_ERROR, str(exc))

    def public_origin(self) -> str:
        host = self.headers.get("Host") or f"localhost:{DEFAULT_PORT}"
        return f"http://{host}"

    def write_json(self, payload: dict[str, Any]) -> None:
        data = json.dumps(payload).encode("utf-8")
        log_event(f"Sending JSON response bytes={len(data)}", getattr(self, "current_request_id", None))
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def write_error(self, status: HTTPStatus, message: str) -> None:
        data = json.dumps({"ok": False, "error": message}).encode("utf-8")
        log_event(f"Sending error status={status.value} bytes={len(data)} message={message}", getattr(self, "current_request_id", None))
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def write_generated_file(self, path: str) -> None:
        name = Path(urllib.parse.unquote(path)).name
        file_path = GENERATED_DIR / name
        if not file_path.exists() or not file_path.is_file():
            self.write_error(HTTPStatus.NOT_FOUND, "Generated file not found")
            return

        content_type = "application/pdf" if file_path.suffix.lower() == ".pdf" else "image/png"
        data = file_path.read_bytes()
        log_event(
            f"Serving generated file name={name} contentType={content_type} bytes={len(data)}",
            getattr(self, "current_request_id", None),
        )
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def log_message(self, format: str, *args: Any) -> None:
        log_event(f"{self.address_string()} {format % args}", getattr(self, "current_request_id", None))

    def log_request_start(self, method: str, request_id: str | None = None) -> None:
        user_agent = self.headers.get("User-Agent", "")
        host = self.headers.get("Host", "")
        client_host, client_port = self.client_address
        device_hint = "iPhone/iOS" if is_iphone_user_agent(user_agent) else "unknown-client"
        local_hint = "local" if client_host in {"127.0.0.1", "::1"} else "network"
        log_event(
            f"{method} {self.path} from {client_host}:{client_port} ({local_hint}, {device_hint}) "
            f"host={host!r} ua={user_agent!r}",
            request_id,
        )


def local_ip_addresses() -> list[str]:
    addresses = {"127.0.0.1"}
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as sock:
            sock.connect(("8.8.8.8", 80))
            addresses.add(sock.getsockname()[0])
    except OSError:
        pass
    return sorted(addresses)


def main() -> None:
    import argparse

    parser = argparse.ArgumentParser(description="Run the Digital Break AutoCircuits broker server.")
    parser.add_argument("--host", default=DEFAULT_HOST)
    parser.add_argument("--port", type=int, default=DEFAULT_PORT)
    args = parser.parse_args()

    server = ThreadingHTTPServer((args.host, args.port), AutoCircuitsBrokerHandler)
    log_event(f"AutoCircuits broker running on http://{args.host}:{args.port}")
    log_event(f"Generated files directory: {GENERATED_DIR}")
    for address in local_ip_addresses():
        label = "iPhone/same-Wi-Fi URL" if address != "127.0.0.1" else "local URL"
        log_event(f"{label}: http://{address}:{args.port}")
    server.serve_forever()


if __name__ == "__main__":
    main()
