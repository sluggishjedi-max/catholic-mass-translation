#!/usr/bin/env python3
"""Build a lightweight OCR title index for image-only Korean Missal pages."""

from __future__ import annotations

import argparse
import io
import json
import multiprocessing as mp
import subprocess
from pathlib import Path

import pypdfium2 as pdfium


def page_chunks(pages: list[int], workers: int) -> list[list[int]]:
    size = max(1, (len(pages) + workers - 1) // workers)
    return [pages[index : index + size] for index in range(0, len(pages), size)]


def parse_page_list(value: str) -> list[int]:
    pages: set[int] = set()
    for part in value.split(","):
        token = part.strip()
        if not token:
            continue
        if "-" in token:
            first_text, last_text = token.split("-", 1)
            first, last = int(first_text), int(last_text)
            pages.update(range(min(first, last), max(first, last) + 1))
        else:
            pages.add(int(token))
    return sorted(pages)


def index_chunk(args: tuple[str, str, str, list[int], float, float]) -> list[dict[str, object]]:
    pdf_path, tesseract_path, tessdata_dir, pages, scale, crop_ratio = args
    document = pdfium.PdfDocument(pdf_path)
    indexed: list[dict[str, object]] = []
    for page_number in pages:
        page = document[page_number - 1]
        image = page.render(scale=scale).to_pil()
        image = image.crop((0, 0, image.width, max(1, int(image.height * crop_ratio))))
        buffer = io.BytesIO()
        image.save(buffer, format="PNG", optimize=True)
        result = subprocess.run(
            [
                tesseract_path,
                "stdin",
                "stdout",
                "-l",
                "kor",
                "--tessdata-dir",
                tessdata_dir,
                "--psm",
                "6",
            ],
            input=buffer.getvalue(),
            stdout=subprocess.PIPE,
            stderr=subprocess.DEVNULL,
            check=False,
        )
        text = result.stdout.decode("utf-8", errors="replace").strip()
        indexed.append({"page": page_number, "text": text})
    document.close()
    return indexed


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("pdf", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--first", type=int, default=125)
    parser.add_argument("--last", type=int, default=966)
    parser.add_argument("--pages", help="Comma-separated pages or ranges; overrides --first/--last")
    parser.add_argument("--workers", type=int, default=min(4, mp.cpu_count()))
    parser.add_argument("--scale", type=float, default=1.1)
    parser.add_argument("--crop-ratio", type=float, default=0.48)
    parser.add_argument("--tesseract", default=r"C:\Program Files\Tesseract-OCR\tesseract.exe")
    parser.add_argument("--tessdata", type=Path, required=True)
    options = parser.parse_args()

    pages = parse_page_list(options.pages) if options.pages else list(range(options.first, options.last + 1))
    chunks = page_chunks(pages, max(1, options.workers))
    worker_args = [
        (
            str(options.pdf),
            options.tesseract,
            str(options.tessdata),
            chunk,
            options.scale,
            options.crop_ratio,
        )
        for chunk in chunks
    ]
    with mp.Pool(processes=len(worker_args)) as pool:
        results = pool.map(index_chunk, worker_args)
    indexed = sorted((item for chunk in results for item in chunk), key=lambda item: int(item["page"]))
    options.output.parent.mkdir(parents=True, exist_ok=True)
    options.output.write_text(json.dumps(indexed, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({"pages": len(indexed), "output": str(options.output)}, ensure_ascii=False))


if __name__ == "__main__":
    mp.freeze_support()
    main()
