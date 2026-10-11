#!/usr/bin/env python3
"""Extract VNI-encoded lyric text from the Vietnamese hymnal PDFs.

The PDFs use legacy VNI fonts.  pdfplumber can recover their text layer, but
the characters must be converted to Unicode before they are useful for lyric
proofreading.  Output is an intermediate OCR aid; the score image remains the
source of truth.
"""

from __future__ import annotations

import argparse
import json
import re
import unicodedata
from pathlib import Path

import pdfplumber


VNI_WIN = [
    "AØ", "AÙ", "AÂ", "AÕ", "EØ", "EÙ", "EÂ", "Ì", "Í", "OØ",
    "OÙ", "OÂ", "OÕ", "UØ", "UÙ", "YÙ", "aø", "aù", "aâ", "aõ",
    "eø", "eù", "eâ", "ì", "í", "oø", "où", "oâ", "oõ", "uø",
    "uù", "yù", "AÊ", "aê", "Ñ", "ñ", "Ó", "ó", "UÕ", "uõ",
    "Ô", "ô", "Ö", "ö", "AÏ", "aï", "AÛ", "aû", "AÁ", "aá",
    "AÀ", "aà", "AÅ", "aå", "AÃ", "aã", "AÄ", "aä", "AÉ", "aé",
    "AÈ", "aè", "AÚ", "aú", "AÜ", "aü", "AË", "aë", "EÏ", "eï",
    "EÛ", "eû", "EÕ", "eõ", "EÁ", "eá", "EÀ", "eà", "EÅ", "eå",
    "EÃ", "eã", "EÄ", "eä", "Æ", "æ", "Ò", "ò", "OÏ", "oï",
    "OÛ", "oû", "OÁ", "oá", "OÀ", "oà", "OÅ", "oå", "OÃ", "oã",
    "OÄ", "oä", "ÔÙ", "ôù", "ÔØ", "ôø", "ÔÛ", "ôû", "ÔÕ", "ôõ",
    "ÔÏ", "ôï", "UÏ", "uï", "UÛ", "uû", "ÖÙ", "öù", "ÖØ", "öø",
    "ÖÛ", "öû", "ÖÕ", "öõ", "ÖÏ", "öï", "YØ", "yø", "Î", "î",
    "YÛ", "yû", "YÕ", "yõ", ".",
]

UNICODE = [
    "À", "Á", "Â", "Ã", "È", "É", "Ê", "Ì", "Í", "Ò",
    "Ó", "Ô", "Õ", "Ù", "Ú", "Ý", "à", "á", "â", "ã",
    "è", "é", "ê", "ì", "í", "ò", "ó", "ô", "õ", "ù",
    "ú", "ý", "Ă", "ă", "Đ", "đ", "Ĩ", "ĩ", "Ũ", "ũ",
    "Ơ", "ơ", "Ư", "ư", "Ạ", "ạ", "Ả", "ả", "Ấ", "ấ",
    "Ầ", "ầ", "Ẩ", "ẩ", "Ẫ", "ẫ", "Ậ", "ậ", "Ắ", "ắ",
    "Ằ", "ằ", "Ẳ", "ẳ", "Ẵ", "ẵ", "Ặ", "ặ", "Ẹ", "ẹ",
    "Ẻ", "ẻ", "Ẽ", "ẽ", "Ế", "ế", "Ề", "ề", "Ể", "ể",
    "Ễ", "ễ", "Ệ", "ệ", "Ỉ", "ỉ", "Ị", "ị", "Ọ", "ọ",
    "Ỏ", "ỏ", "Ố", "ố", "Ồ", "ồ", "Ổ", "ổ", "Ỗ", "ỗ",
    "Ộ", "ộ", "Ớ", "ớ", "Ờ", "ờ", "Ở", "ở", "Ỡ", "ỡ",
    "Ợ", "ợ", "Ụ", "ụ", "Ủ", "ủ", "Ứ", "ứ", "Ừ", "ừ",
    "Ử", "ử", "Ữ", "ữ", "Ự", "ự", "Ỳ", "ỳ", "Ỵ", "ỵ",
    "Ỷ", "ỷ", "Ỹ", "ỹ", ".",
]


def vni_to_unicode(value: str) -> str:
    converted = value
    replacement_order = sorted(range(len(VNI_WIN)), key=lambda index: len(VNI_WIN[index]), reverse=True)
    for index in replacement_order:
        source = VNI_WIN[index]
        converted = converted.replace(source, f"\u0000{index}\u0000")
    for index, target in enumerate(UNICODE):
        converted = converted.replace(f"\u0000{index}\u0000", target)
    return unicodedata.normalize("NFC", converted)


def readable_lines(value: str) -> str:
    lines: list[str] = []
    for raw_line in value.splitlines():
        line = re.sub(r"\s+", " ", raw_line).strip()
        letter_count = sum(character.isalpha() for character in line)
        if letter_count < 2:
            continue
        lines.append(line)
    return "\n".join(lines)


def load_hymn_records(data_file: Path, start: int, end: int) -> list[dict]:
    source = data_file.read_text(encoding="utf-8")
    marker = "const hymnData = "
    array_start = source.index(marker) + len(marker)
    array_end = source.rfind("\n];") + 2
    records = json.loads(source[array_start:array_end])
    wanted = {f"vn-tcvn1-{number:03d}" for number in range(start, end + 1)}
    return [record for record in records if record.get("id") in wanted]


def find_pdf(source_root: Path, file_name: str) -> Path:
    matches = list(source_root.rglob(file_name))
    if len(matches) != 1:
        raise RuntimeError(f"Expected one PDF named {file_name!r}, found {len(matches)}")
    return matches[0]


def extract_record(record: dict, source_root: Path) -> dict:
    pdf_path = find_pdf(source_root, record["originalFileName"])
    pages: list[dict] = []
    with pdfplumber.open(pdf_path) as pdf:
        for page_number, page in enumerate(pdf.pages, start=1):
            raw = vni_to_unicode(page.extract_text(x_tolerance=2, y_tolerance=3) or "")
            layout = vni_to_unicode(
                page.extract_text(layout=True, x_tolerance=2, y_tolerance=3) or ""
            )
            pages.append(
                {
                    "page": page_number,
                    "raw": raw,
                    "readable": readable_lines(raw),
                    "layout": layout,
                }
            )
    return {
        "id": record["id"],
        "number": record["number"],
        "title": record["title"],
        "composer": record.get("composer", ""),
        "originalFileName": record["originalFileName"],
        "pdfPath": str(pdf_path),
        "pages": pages,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--data-file", type=Path, required=True)
    parser.add_argument("--source-root", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--start", type=int, default=21)
    parser.add_argument("--end", type=int, default=100)
    args = parser.parse_args()

    records = load_hymn_records(args.data_file, args.start, args.end)
    if len(records) != args.end - args.start + 1:
        raise RuntimeError(f"Expected {args.end - args.start + 1} records, found {len(records)}")
    result = [extract_record(record, args.source_root) for record in records]
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Extracted {len(result)} hymns / {sum(len(item['pages']) for item in result)} pages")
    print(args.output)


if __name__ == "__main__":
    main()
