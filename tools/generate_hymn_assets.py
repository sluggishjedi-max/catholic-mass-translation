from __future__ import annotations

import argparse
import difflib
import json
import re
import unicodedata
from pathlib import Path

import gdown
import pypdfium2 as pdfium
from PIL import Image
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
TMP = ROOT / "tmp" / "pdfs"
ASSETS = ROOT / "assets" / "hymns"
HYMN_DATA = ROOT / "JS file" / "hymn_data.js"
REF_HYMN_ROOT = ROOT / "참고자료" / "성가"

KR_CATHOLIC_PDF = REF_HYMN_ROOT / "가톨릭성가_혼성합창본_전체악보_000-528_Full.pdf"
YAHWEH_JIREH_PDF = REF_HYMN_ROOT / "야훼이레 (신판).pdf"
VN_LISTS = [
    ("tcvn1", "Tuyển tập Thánh ca Việt Nam quyển 1", REF_HYMN_ROOT / "Tuyển tập Thánh ca Việt Nam quyển 1"),
    ("tcvn2", "Tuyển tập Thánh ca Việt Nam quyển 2", REF_HYMN_ROOT / "Tuyển tập Thánh ca Việt Nam quyển 2"),
]

QUALITY = 20
KR_SCALE = 1.5
YJ_SCALE = 1.16
VN_SCALE = 1.24

VN_CATEGORY_LABELS = {
    "01 - CA NGUYEN": "Ca Nguyện",
    "02 - THANH VINH": "Thánh Vịnh",
    "03 - NHAP LE": "Nhập Lễ",
    "04 - DANG LE": "Dâng Lễ",
    "05 - HIEP LE": "Hiệp Lễ",
    "07 - THANH THE": "Thánh Thể",
    "08 - THANH TAM": "Thánh Tâm",
    "09 - MUA VONG": "Mùa Vọng",
    "10 - MUA GIANG SINH": "Mùa Giáng Sinh",
    "11 - MUA CHAY": "Mùa Chay",
    "12 - TUAN THANH": "Tuần Thánh",
    "13 - PHUC SINH": "Phục Sinh",
    "14 - CHUA THANH THAN": "Chúa Thánh Thần",
    "15 - HIEP NHAT": "Hiệp Nhất",
    "16 - DUC ME": "Đức Mẹ",
    "17 - CAC THANH": "Các Thánh",
    "18 - THANH HIEN": "Thánh Hiến",
    "19 - XUAN - HON NHAN - CHA ME": "Xuân - Hôn Nhân - Cha Mẹ",
    "20 - CAU HON": "Cầu Hồn",
    "21 - BO LE": "Bộ Lễ",
    "1 - CA NGUYEN": "Ca Nguyện",
    "2 - NHAP LE": "Nhập Lễ",
    "3 - DANG LE": "Dâng Lễ",
    "4 - HIEP LE": "Hiệp Lễ",
    "5 - KET LE": "Kết Lễ",
    "6 - THANH THE THANH TAM": "Thánh Thể và Thánh Tâm",
    "7 - MUA VONG": "Mùa Vọng",
    "8 - GIANG SINH": "Giáng Sinh",
    "9 - MUA CHAY": "Mùa Chay",
    "10 - PHUC SINH": "Phục Sinh",
    "11 - CHUA THANH THAN": "Chúa Thánh Thần",
    "12 - HIEP NHAT": "Hiệp Nhất",
    "13 - DUC ME": "Đức Mẹ",
    "14 - CAC THANH": "Các Thánh",
    "15 - LINH MUC THANH HIEN": "Linh Mục và Thánh Hiến",
    "16 - HON PHOI & CHA ME": "Hôn Phối và Cha Mẹ",
    "17 - XUAN & TRUNG THU": "Xuân và Trung Thu",
    "18 - CAU HON": "Cầu Hồn",
    "19 - LOAN BAO TIN MUNG": "Loan Báo Tin Mừng",
}


def find_json_array_after(text: str, marker: str) -> list[dict]:
    start = text.index(marker)
    array_start = text.index("[", start)
    depth = 0
    in_string = False
    escape = False
    for index in range(array_start, len(text)):
        char = text[index]
        if in_string:
            if escape:
                escape = False
            elif char == "\\":
                escape = True
            elif char == '"':
                in_string = False
            continue
        if char == '"':
            in_string = True
        elif char == "[":
            depth += 1
        elif char == "]":
            depth -= 1
            if depth == 0:
                return json.loads(text[array_start:index + 1])
    raise ValueError("hymn data array not found")


def load_existing_korean_hymns() -> list[dict]:
    text = HYMN_DATA.read_text(encoding="utf-8")
    entries = find_json_array_after(text, "const hymnData")
    output = []
    for entry in entries:
        if not str(entry.get("id", "")).startswith("kr-catholic-"):
            continue
        number = str(entry.get("number", "")).strip()
        if not re.fullmatch(r"\d{3}", number):
            continue
        if not (1 <= int(number) <= 528):
            continue
        if entry.get("country", "KR") != "KR":
            continue
        output.append(entry)
    if len(output) != 528:
        raise RuntimeError(f"Expected 528 Korean Catholic base hymns, found {len(output)}")
    return output


def slugify(value: str, fallback: str) -> str:
    value = unicodedata.normalize("NFKD", value)
    value = "".join(ch for ch in value if not unicodedata.combining(ch))
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = re.sub(r"-+", "-", value).strip("-")
    return value or fallback


def rel(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


def save_webp(image: Image.Image, out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    image.convert("RGB").save(out_path, "WEBP", quality=QUALITY, method=6)


def render_pdf_page(pdf: pdfium.PdfDocument, page_index: int, out_path: Path, scale: float) -> None:
    if out_path.exists() and out_path.stat().st_size > 0:
        return
    page = pdf[page_index]
    image = page.render(scale=scale).to_pil()
    save_webp(image, out_path)


def render_single_pdf(pdf_path: Path, out_dir: Path, stem: str, scale: float) -> list[dict]:
    images: list[dict] = []
    try:
        pdf = pdfium.PdfDocument(str(pdf_path))
    except Exception as exc:
        print(f"WARN render open failed: {pdf_path} ({exc})")
        return images
    for index in range(len(pdf)):
        out = out_dir / f"{stem}-{index + 1:02d}.webp"
        try:
            render_pdf_page(pdf, index, out, scale)
            images.append({"src": rel(out), "label": str(index + 1)})
        except Exception as exc:
            print(f"WARN render page failed: {pdf_path} page {index + 1} ({exc})")
    return images


def existing_score_images(out_dir: Path, stem: str) -> list[dict]:
    files = sorted(out_dir.glob(f"{stem}-*.webp"))
    total = len(files)
    return [
        {"src": rel(out), "label": f"{index}/{total}" if total > 1 else "1"}
        for index, out in enumerate(files, start=1)
    ]


def korean_catholic_ranges() -> dict[int, tuple[int, int]]:
    reader = PdfReader(str(KR_CATHOLIC_PDF))
    starts: dict[int, int] = {}
    for index, page in enumerate(reader.pages, start=1):
        text = re.sub(r"\s+", " ", (page.extract_text() or "").strip())
        match = re.match(r"^(\d{3})\s*(?:\|\s*)?(.+)", text)
        if not match:
            continue
        number = int(match.group(1))
        if 1 <= number <= 528 and number not in starts:
            starts[number] = index

    # The source PDF has a few pages whose visible number is not exposed correctly
    # through the text layer. These visual checks keep the song split exact.
    starts.update({
        35: 42,
        197: 246,
        256: 318,
        365: 529,
        366: 530,
        504: 703,
    })

    missing = [number for number in range(1, 529) if number not in starts]
    if missing:
        raise RuntimeError(f"Missing Korean Catholic hymn starts: {missing[:20]}")

    ranges: dict[int, tuple[int, int]] = {}
    for number in range(1, 529):
        start = starts[number]
        end = starts[number + 1] - 1 if number < 528 else 736
        ranges[number] = (start, max(start, end))
    return ranges


def catholic_aliases(number: int, yj_numbers: list[int]) -> list[str]:
    aliases = [
        f"가톨릭성가 {number}",
        f"가톨릭성가 {number:03d}",
        f"가톨릭성가 {number}번",
        f"가톨릭성가 {number:03d}번",
    ]
    for yj_number in yj_numbers:
        aliases.extend([
            f"야훼이레 {yj_number}",
            f"야훼이레 {yj_number:03d}",
            f"야훼이레 {yj_number}번",
            f"야훼이레 {yj_number:03d}번",
            f"YJ {yj_number}",
            f"YJ {yj_number:03d}",
            f"YJ{yj_number:03d}",
        ])
    return list(dict.fromkeys(aliases))


def build_korean_catholic_entries(existing: list[dict], render: bool, catholic_to_yj: dict[int, list[int]] | None = None) -> list[dict]:
    ranges = korean_catholic_ranges()
    pdf = pdfium.PdfDocument(str(KR_CATHOLIC_PDF)) if render else None
    output: list[dict] = []
    catholic_to_yj = catholic_to_yj or {}
    for entry in existing:
        number = int(str(entry.get("number", "0")))
        start, end = ranges[number]
        score_images = []
        for page_number in range(start, end + 1):
            idx = page_number - start + 1
            out = ASSETS / "kr-catholic" / f"{number:03d}-{idx:02d}.webp"
            if pdf is not None:
                render_pdf_page(pdf, page_number - 1, out, KR_SCALE)
            score_images.append({"src": rel(out), "label": f"{idx}/{end - start + 1}"})
        item = dict(entry)
        tags = [tag for tag in item.get("tags", []) if tag]
        item.update({
            "id": f"kr-catholic-{number:03d}",
            "book": "가톨릭성가",
            "tags": ["가톨릭성가", *[tag for tag in tags if tag != "가톨릭성가"]],
            "category": " / ".join(["가톨릭성가", *[tag for tag in tags if tag != "가톨릭성가"]]),
            "searchAliases": catholic_aliases(number, catholic_to_yj.get(number, [])),
            "scoreImages": score_images,
            "scoreNote": "",
            "copyright": item.get("copyright") or "",
        })
        output.append(item)
    return output


def yahweh_section_for_page(page: int) -> str:
    if page < 116:
        return "미사곡"
    if page < 147:
        return "떼제"
    if page < 199:
        return ""
    if page < 635:
        return "생활성가"
    return "부록"


YAHWEH_ALLOWED_BRACKET_TAGS = {
    "대림",
    "성탄",
    "사순",
    "부활",
    "부활/승천",
    "성령",
    "성체",
    "성심",
    "성모",
    "성인",
    "위령",
    "떼제",
}


def normalize_yahweh_tag(value: str) -> str:
    value = re.sub(r"\s+", " ", value or "").strip()
    if not value:
        return ""
    key = value.split(":")[0].strip()
    if key.lower() == "taize":
        return "떼제"
    return key if key in YAHWEH_ALLOWED_BRACKET_TAGS else ""


def strip_yahweh_title_annotations(title: str) -> str:
    title = re.sub(r"\[[^\]]+\]", "", title or "")
    title = re.sub(r"\s+", " ", title).strip()
    # English subtitles are kept in parentheses when they are separated by a dash.
    match = re.match(r"^(.+?)\s+-\s+([A-Za-z][A-Za-z0-9 ',.!?&:-]+)$", title)
    if match:
        return f"{match.group(1).strip()} ({match.group(2).strip()})"
    return title


def extra_yahweh_tags(title: str) -> list[str]:
    tags: list[str] = []
    for tag in re.findall(r"\[([^\]]+)\]", title):
        main = normalize_yahweh_tag(tag)
        if main and main not in tags:
            tags.append(main)
    return tags


def catholic_links_from_yahweh_title(title: str) -> list[int]:
    links: list[int] = []
    for tag in re.findall(r"\[([^\]]+)\]", title or ""):
        for match in re.finditer(r"가톨릭성가\s*(\d{1,3})", tag):
            number = int(match.group(1))
            if 1 <= number <= 528 and number not in links:
                links.append(number)
    return links


def yahweh_link_maps() -> tuple[dict[int, list[int]], dict[int, list[int]]]:
    catholic_to_yj: dict[int, list[int]] = {}
    yj_to_catholic: dict[int, list[int]] = {}
    for number, _start, title in yahweh_starts():
        catholic_numbers = catholic_links_from_yahweh_title(title)
        if catholic_numbers:
            yj_to_catholic[number] = catholic_numbers
            for catholic_number in catholic_numbers:
                catholic_to_yj.setdefault(catholic_number, []).append(number)
    return catholic_to_yj, yj_to_catholic


def yahweh_aliases(number: int, catholic_numbers: list[int]) -> list[str]:
    aliases = [
        f"야훼이레 {number}",
        f"야훼이레 {number:03d}",
        f"야훼이레 {number}번",
        f"야훼이레 {number:03d}번",
        f"YJ {number}",
        f"YJ {number:03d}",
        f"YJ{number:03d}",
    ]
    for catholic_number in catholic_numbers:
        aliases.extend([
            f"가톨릭성가 {catholic_number}",
            f"가톨릭성가 {catholic_number:03d}",
            f"가톨릭성가 {catholic_number}번",
            f"가톨릭성가 {catholic_number:03d}번",
        ])
    return list(dict.fromkeys(aliases))


def yahweh_starts() -> list[tuple[int, int, str]]:
    reader = PdfReader(str(YAHWEH_JIREH_PDF))
    starts: list[tuple[int, int, str]] = []
    for page_index, page in enumerate(reader.pages, start=1):
        text = page.extract_text() or ""
        lines = [re.sub(r"\s+", " ", line).strip() for line in text.splitlines() if line.strip()]
        found = None
        for line in lines[:12]:
            match = re.match(r"^(\d{1,3})\.\s*(.+)", line)
            if match:
                found = (int(match.group(1)), page_index, match.group(2).strip())
                break
        if found:
            starts.append(found)
    return starts


def build_yahweh_entries(render: bool, yj_to_catholic: dict[int, list[int]] | None = None) -> list[dict]:
    starts = yahweh_starts()
    pdf = pdfium.PdfDocument(str(YAHWEH_JIREH_PDF)) if render else None
    output: list[dict] = []
    yj_to_catholic = yj_to_catholic or {}
    for index, (number, start, title) in enumerate(starts):
        next_start = starts[index + 1][1] if index + 1 < len(starts) else 635
        end = max(start, next_start - 1)
        clean_title = strip_yahweh_title_annotations(title)
        tags = ["야훼이레 (신판)", yahweh_section_for_page(start), *extra_yahweh_tags(title)]
        tags = [tag for tag in list(dict.fromkeys(tags)) if tag]
        score_images = []
        for page_number in range(start, end + 1):
            image_index = page_number - start + 1
            out = ASSETS / "kr-yahweh-jireh" / f"{number:03d}-{image_index:02d}.webp"
            if pdf is not None:
                render_pdf_page(pdf, page_number - 1, out, YJ_SCALE)
            score_images.append({"src": rel(out), "label": f"{image_index}/{end - start + 1}"})
        output.append({
            "id": f"kr-yj-{number:03d}",
            "country": "KR",
            "language": "KR",
            "number": f"{number:03d}",
            "title": clean_title,
            "displayTitle": f"{number:03d}. {clean_title}",
            "book": "야훼이레 (신판)",
            "tags": tags,
            "category": " / ".join(tags),
            "lyrics": "",
            "translations": {},
            "firstLine": "",
            "composer": "",
            "lyricist": "",
            "searchAliases": yahweh_aliases(number, yj_to_catholic.get(number, [])),
            "scoreImages": score_images,
            "scoreNote": "",
            "copyright": "",
        })
    return output


def parse_vietnamese_file_name(path: str) -> tuple[str, str]:
    stem = Path(path).stem.strip()
    parts = re.split(r"\s+-\s*", stem)
    if len(parts) >= 2:
        return " - ".join(parts[:-1]).strip(), parts[-1].strip()
    parts = re.split(r"\s+-", stem)
    if len(parts) >= 2:
        return " - ".join(parts[:-1]).strip(), parts[-1].strip()
    return stem, ""


def comparable_vietnamese_name(path: str) -> str:
    title, composer = parse_vietnamese_file_name(path)
    value = unicodedata.normalize("NFKD", f"{title} {composer}".lower())
    value = "".join(ch for ch in value if not unicodedata.combining(ch))
    replacements = {
        "dc ": " ",
        "gm ": " ",
        "kim long": "kimlong",
        "qui": "quy",
    }
    for old, new in replacements.items():
        value = value.replace(old, new)
    value = re.sub(r"[^a-z0-9]+", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def vietnamese_enc_has_pdf_match(enc_item: dict, pdf_by_folder: dict[str, list[dict]]) -> bool:
    folder = enc_item["path"].split("/")[0]
    enc_key = comparable_vietnamese_name(enc_item["path"])
    best = 0.0
    for pdf_item in pdf_by_folder.get(folder, []):
        ratio = difflib.SequenceMatcher(None, enc_key, comparable_vietnamese_name(pdf_item["path"])).ratio()
        best = max(best, ratio)
    return best >= 0.86


def load_vietnamese_items(source_root: Path) -> list[dict]:
    if source_root.is_dir():
        data = []
        for path in sorted(source_root.rglob("*")):
            if not path.is_file() or path.parent == source_root:
                continue
            if path.suffix.lower() not in {".pdf", ".enc"}:
                continue
            data.append({
                "path": path.relative_to(source_root).as_posix(),
                "localPath": str(path),
            })
    else:
        data = json.loads(source_root.read_text(encoding="utf-8"))
    pdf_items = [
        item for item in data
        if item.get("path", "").lower().endswith(".pdf") and "/" in item.get("path", "")
    ]
    enc_items = [
        item for item in data
        if item.get("path", "").lower().endswith(".enc") and "/" in item.get("path", "")
    ]
    pdf_by_folder: dict[str, list[dict]] = {}
    for item in pdf_items:
        pdf_by_folder.setdefault(item["path"].split("/")[0], []).append(item)
    enc_only = [
        item for item in enc_items
        if not vietnamese_enc_has_pdf_match(item, pdf_by_folder)
    ]
    return pdf_items + enc_only


def download_vietnamese_file(item: dict, target: Path, allow_download: bool) -> bool:
    if target.exists() and target.stat().st_size > 0:
        return True
    if not allow_download:
        return False
    target.parent.mkdir(parents=True, exist_ok=True)
    try:
        gdown.download(item["url"], str(target), quiet=True)
        return target.exists() and target.stat().st_size > 0
    except Exception as exc:
        print(f"WARN download failed: {item['path']} ({exc})")
        return False


def build_vietnamese_entries(render: bool, allow_download: bool, only_prefix: str = "") -> list[dict]:
    output: list[dict] = []
    counters = {"tcvn1": 0, "tcvn2": 0}
    for prefix, book, source_root in VN_LISTS:
        if only_prefix and prefix != only_prefix:
            continue
        for item in load_vietnamese_items(source_root):
            counters[prefix] += 1
            number = counters[prefix]
            folder = item["path"].split("/")[0]
            title, composer = parse_vietnamese_file_name(item["path"])
            category = VN_CATEGORY_LABELS.get(folder, re.sub(r"^\d+\s*-\s*", "", folder).title())
            stem = f"{number:03d}-{slugify(title + '-' + composer, str(number))[:56]}"
            is_enc = item["path"].lower().endswith(".enc")
            local_file = Path(item["localPath"]) if item.get("localPath") else TMP / "vn-downloads" / prefix / item["path"]
            ok = local_file.exists() and local_file.stat().st_size > 0
            if not ok:
                ok = download_vietnamese_file(item, local_file, allow_download)
            score_images: list[dict] = []
            score_note = ""
            original_file_size = local_file.stat().st_size if ok and local_file.exists() else 0
            if is_enc:
                if ok:
                    score_note = "ENC 원본을 확인했습니다. 브라우저 표시용 악보 이미지는 별도 변환이 필요합니다."
                else:
                    score_note = "ENC 원본만 제공된 곡입니다. 원본 파일 확인은 대기 중입니다."
            elif ok:
                score_images = render_single_pdf(local_file, ASSETS / f"vn-{prefix}", stem, VN_SCALE) if render else existing_score_images(ASSETS / f"vn-{prefix}", stem)
                if not score_images:
                    score_note = "악보 이미지 생성이 아직 완료되지 않았습니다."
            else:
                score_note = "원본 PDF를 찾지 못해 악보 이미지를 아직 준비하지 못했습니다."
            tags = [book, category]
            output.append({
                "id": f"vn-{prefix}-{number:03d}",
                "country": "VN",
                "language": "VN",
                "number": f"{number:03d}",
                "title": title,
                "displayTitle": f"{number:03d}. {title}",
                "book": book,
                "tags": tags,
                "category": " / ".join(tags),
                "lyrics": "",
                "translations": {},
                "firstLine": title,
                "composer": composer,
                "lyricist": "",
                "sourceFormat": "ENC" if is_enc else "PDF",
                "originalFileName": Path(item["path"]).name,
                "originalFileSize": original_file_size,
                "originalFileAvailable": bool(ok),
                "searchAliases": [
                    f"{prefix.upper()} {number:03d}",
                    f"{prefix.upper()} {number}",
                    f"{prefix.upper()}{number:03d}",
                ],
                "scoreImages": score_images,
                "scoreNote": score_note,
                "copyright": "Ủy ban Thánh nhạc - HĐGMVN",
            })
    return output


def write_hymn_data(entries: list[dict]) -> None:
    body = json.dumps(entries, ensure_ascii=False, indent=2)
    HYMN_DATA.write_text(
        "// Hymn index and compressed per-song score images for V22.1.\n"
        "// Generated by tools/generate_hymn_assets.py.\n"
        "(function attachHymnData(global) {\n"
        f"  const hymnData = {body};\n"
        "  global.hymnData = Array.isArray(global.hymnData) && global.hymnData.length\n"
        "    ? global.hymnData\n"
        "    : hymnData;\n"
        "  global.ordoHymnData = hymnData;\n"
        "})(typeof window !== 'undefined' ? window : globalThis);\n",
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--sections", default="kr,yj,vn", help="Comma-separated sections: kr,yj,vn")
    parser.add_argument("--vn-prefix", choices=["", "tcvn1", "tcvn2"], default="")
    parser.add_argument("--no-render", action="store_true")
    parser.add_argument("--no-download", action="store_true")
    args = parser.parse_args()

    sections = {value.strip().lower() for value in args.sections.split(",") if value.strip()}
    render = not args.no_render
    existing = load_existing_korean_hymns()
    catholic_to_yj, yj_to_catholic = yahweh_link_maps()
    entries: list[dict] = []

    if "kr" in sections:
        print("Building Korean Catholic hymns")
        entries.extend(build_korean_catholic_entries(existing, render, catholic_to_yj))
    else:
        entries.extend(existing)

    if "yj" in sections:
        print("Building Yahweh Jireh hymns")
        entries.extend(build_yahweh_entries(render, yj_to_catholic))

    if "vn" in sections:
        print("Building Vietnamese hymns")
        entries.extend(build_vietnamese_entries(render, allow_download=not args.no_download, only_prefix=args.vn_prefix))

    write_hymn_data(entries)
    print(f"Wrote {len(entries)} hymn entries to {HYMN_DATA}")


if __name__ == "__main__":
    main()
