from __future__ import annotations

import importlib.util
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
GENERATOR_PATH = ROOT / "scripts" / "generate-autocircuits-bank.py"

spec = importlib.util.spec_from_file_location("autocircuits_bank", GENERATOR_PATH)
if spec is None or spec.loader is None:
    raise SystemExit(f"Could not load {GENERATOR_PATH}")

generator = importlib.util.module_from_spec(spec)
sys.modules[spec.name] = generator
spec.loader.exec_module(generator)


def main() -> None:
    entries = []
    for pdf_path in sorted(generator.PDF_DIR.glob("*.pdf")):
        entry_id = pdf_path.stem
        png_path = generator.PNG_DIR / f"{entry_id}-1.png"
        if not png_path.exists():
            generator.render_problem_page(pdf_path, png_path)

        prompt, answers = generator.parse_pdf(pdf_path)
        parts = entry_id.split("_")
        difficulty = parts[-2]
        number_type = parts[-1]

        entries.append({
            "id": entry_id,
            "part": "DC_Random",
            "chapter": "Kirchhoff_Laws",
            "mode": "chapters",
            "difficulty": difficulty,
            "numberType": number_type,
            "allowControlledSources": False,
            "allowOpAmps": False,
            "allowCouplings": False,
            "prompt": prompt,
            "answers": answers,
            "pdf": f"/assets/problem-sources/autocircuits-bank/pdfs/{pdf_path.name}",
            "remotePdf": "",
            "imagePath": f"./pngs/{entry_id}-1.png",
        })

    generator.write_manifests(entries)
    print(f"Wrote {len(entries)} entries")


if __name__ == "__main__":
    main()
