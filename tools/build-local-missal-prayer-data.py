#!/usr/bin/env python3
"""Build the V25 local Roman Missal prayer catalog from the supplied PDFs.

The generated browser data contains only the five daily proper parts used by
V25.  Readings, prefaces, rubrics, and the Order of Mass remain in their
existing data paths.
"""

from __future__ import annotations

import argparse
import json
import re
import unicodedata
from collections import defaultdict
from pathlib import Path
from typing import Iterable

import pypdfium2 as pdfium


ROOT = Path(__file__).resolve().parents[1]
PDF_DIR = ROOT / "참고자료" / "미사" / "전문"
TMP_DIR = ROOT / "tmp" / "pdfs"
OUTPUT = ROOT / "JS file" / "local_missal_prayer_data.js"

SECTION_KEYS = ("entrance", "collect", "prayer_offerings", "communion", "prayer_after")
MONTHS_EN = {
    name: index
    for index, name in enumerate(
        (
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December",
        ),
        start=1,
    )
}
MONTHS_LA = {
    name: index
    for index, name in enumerate(
        (
            "ianuarii", "februarii", "martii", "aprilis", "maii", "iunii",
            "iulii", "augusti", "septembris", "octobris", "novembris", "decembris",
        ),
        start=1,
    )
}
MONTHS_VN = {
    "giêng": 1,
    "hai": 2,
    "ba": 3,
    "tư": 4,
    "năm": 5,
    "sáu": 6,
    "bảy": 7,
    "tám": 8,
    "chín": 9,
    "mười": 10,
    "mười một": 11,
    "mười hai": 12,
    # The supplied source consistently types these two month names with
    # "mươi" in its December/November date headings.
    "mươi một": 11,
    "mươi hai": 12,
}

HEADINGS = {
    "EN": {
        "entrance": r"Entrance\s+Antiphon",
        "collect": r"Collect",
        "prayer_offerings": r"Prayer\s+over\s+the\s+Offerings",
        "communion": r"Communion\s+Antiphon",
        "prayer_after": r"Prayer\s+after\s+Communion",
    },
    "LA": {
        "entrance": r"Ant\.\s+ad\s+introitum",
        "collect": r"Collecta",
        "prayer_offerings": r"Super\s+oblata",
        "communion": r"Ant\.\s+ad\s+communionem",
        "prayer_after": r"Post\s+communionem",
    },
    "VN": {
        "entrance": r"Ca\s+nhập\s+lễ",
        "collect": r"(?:Lời\s+nguyện\s+nhập\s+lễ|Lời\s+nguyện(?!\s+(?:tiến|hiệp)\s+lễ))",
        "prayer_offerings": r"Lời\s+nguyện\s+tiến\s+lễ",
        "communion": r"Ca\s+hiệp\s+lễ",
        "prayer_after": r"Lời\s+nguyện\s+hiệp\s+lễ",
    },
    "KR": {
        "entrance": r"입당송",
        "collect": r"본기도",
        "prayer_offerings": r"예물\s*기도",
        "communion": r"영성체송",
        "prayer_after": r"영성체\s*후\s*기도",
    },
}

KOREAN_OCR_REPLACEMENTS = {
    "못 백성": "뭇 백성",
    "기빼하게": "기뻐하게",
    "기뽑에": "기쁨에",
    "기뿔을": "기쁨을",
    "기틈을": "기쁨을",
    "어돔의": "어둠의",
    "교회를 빚냈": "교회를 빛냈",
    "성령의 빚으로": "성령의 빛으로",
    "모든 빚의 샘": "모든 빛의 샘",
    "영원한 빚에": "영원한 빛에",
    "민족들의 빚으로": "민족들의 빛으로",
    "옮은 일": "옳은 일",
    "성 벤시오": "성 빈첸시오",
    "무릎을 꿀고": "무릎을 꿇고",
    "깨끗이 씨 주시어": "깨끗이 씻어 주시어",
    "홈 없는 어린양": "흠 없는 어린양",
    "얻드려": "엎드려",
    "성전에서 봉현": "성전에서 봉헌",
    "염성체 후 기도": "영성체 후 기도",
}

KOREAN_ENTRY_DATE_HINTS = {
    "지극히 거룩하신 예수 성명": "01-03",
    "성 힐라리오 주교": "01-13",
    "성전에서 봉헌되셨듯이": "02-02",
    "성 블라시오 주교": "02-03",
    "성안스가리오 주교": "02-03",
    "루르드의 복되신 동정 마리아": "02-11",
    "성 마르티노 1세": "04-13",
    "과달루페의 복되신 동정 마리아": "12-12",
    "성녀 루치아 동정": "12-13",
}

PRAYER_TERMINATORS = {
    "EN": [
        r"one God, for ever and ever\.",
        r"Through Christ our Lord\.",
        r"Who live and reign for ever and ever\.",
        r"Who lives and reigns for ever and ever\.",
    ],
    "LA": [
        r"Per D[oó]minum\.",
        r"Per Christum(?: D[oó]minum nostrum)?\.",
        r"Qui tecum\.",
        r"Qui vivit et regnat in s[ǽæ]cula s[ǽæ]cul[oó]rum\.",
    ],
    "VN": [
        r"Chúng con cầu xin(?: nhờ[^\n]*)?\.{3,}",
        r"Chúng con cầu xin nhờ Đức Ki-tô[^\n]*",
        r"Người hằng sống và hiển trị muôn đời\.",
        r"Đến muôn thuở muôn đời\.",
    ],
    "KR": [
        r"성부와 성령과[^\n]*",
        r"성자께서는[^\n]*(?:\n[^\n]*){0,2}",
        r"우리 주(?: 예수)? 그리스도를 통하여[^\n]*",
        r"우리 주[^\n]*…+[^\n]*",
    ],
}


def compact(value: str) -> str:
    return re.sub(r"\s+", " ", value or "").strip()


def clean_text(value: str, lang: str) -> str:
    value = unicodedata.normalize("NFC", value or "")
    value = value.replace("\u00ad", "").replace("\x00", "").replace("\ufffe", "")
    value = value.replace("\r\n", "\n").replace("\r", "\n")
    lines: list[str] = []
    for raw in value.splitlines():
        line = re.sub(r"[ \t]+", " ", raw).strip()
        if not line:
            if lines and lines[-1] != "":
                lines.append("")
            continue
        if re.fullmatch(r"\d{3,4}", line):
            continue
        if re.fullmatch(r"\d{3,4}(?:\s+\d{3,4})+", line):
            continue
        if lang == "EN" and re.fullmatch(r"(?:PROPER OF SAINTS|COMMONS)\s*\d*", line):
            continue
        if lang == "EN" and re.fullmatch(r"(?:\d{3,4}\s+)?(?:PROPER OF SAINTS|COMMONS)(?:\s+\d{3,4})?", line):
            continue
        if lang == "LA" and re.fullmatch(
            r"(?:PROPRIUM DE SANCTIS|COMMUNIA|IANUARIUS|FEBRUARIUS|MARTIUS|APRILIS|MAIUS|IUNIUS|IULIUS|AUGUSTUS|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)\s*\d*",
            line,
            re.I,
        ):
            continue
        if lang == "VN" and re.fullmatch(r"M\.LỤC.*", line, re.I):
            continue
        if lang == "KR" and re.fullmatch(r"\d{3,4}\s+(?:성인\s*고유|연중\s*시기|부활\s*시기|성주간)", line):
            continue
        if lang == "KR" and re.fullmatch(r"(?:[일이삼사오육칠팔구십]+월|\d{1,2}월)\s+\d{3,4}[.,]?", line):
            continue
        if lang == "KR" and re.fullmatch(r"\d{2,4}\s+(?:성인|정인)\s*고유", line):
            continue
        lines.append(line)
    while lines and not lines[-1]:
        lines.pop()
    result = "\n".join(lines)
    if lang == "KR":
        for source, replacement in KOREAN_OCR_REPLACEMENTS.items():
            result = result.replace(source, replacement)
    return result


def pdf_pages(path: Path, first: int, last: int, lang: str) -> list[dict[str, object]]:
    document = pdfium.PdfDocument(str(path))
    pages: list[dict[str, object]] = []
    try:
        for number in range(first, min(last, len(document)) + 1):
            page = document[number - 1]
            text_page = page.get_textpage()
            text = text_page.get_text_range()
            text_page.close()
            page.close()
            pages.append({"page": number, "text": clean_text(text, lang)})
    finally:
        document.close()
    return pages


def ocr_pages(paths: Iterable[Path]) -> list[dict[str, object]]:
    merged: dict[int, str] = {}
    for path in paths:
        if not path.exists():
            continue
        entries = json.loads(path.read_text(encoding="utf-8"))
        for entry in entries:
            page = int(entry["page"])
            merged[page] = clean_text(str(entry.get("text", "")), "KR")
    return [{"page": page, "text": merged[page]} for page in sorted(merged)]


def page_join(pages: Iterable[dict[str, object]]) -> str:
    return "\n".join(f"\n[[PAGE {entry['page']}]]\n{entry['text']}" for entry in pages)


def source_page(block: str, fallback: int = 0) -> int:
    matches = re.findall(r"\[\[PAGE\s+(\d+)\]\]", block)
    return int(matches[0]) if matches else fallback


def source_page_at(text: str, offset: int, fallback: int = 0) -> int:
    page = fallback
    for match in re.compile(r"\[\[PAGE\s+(\d+)\]\]").finditer(text, 0, max(0, offset)):
        page = int(match.group(1))
    return page


def strip_page_tokens(value: str) -> str:
    return re.sub(r"\[\[PAGE\s+\d+\]\]", "", value).strip()


def heading_matches(block: str, lang: str) -> list[tuple[int, int, str]]:
    matches: list[tuple[int, int, str]] = []
    for key, pattern in HEADINGS[lang].items():
        for match in re.finditer(rf"(?im)^\s*(?:{pattern})(?:[ \t]+[^\n]*)?[ \t]*$", block):
            matches.append((match.start(), match.end(), key))
    return sorted(matches)


def remove_rubric_tail(value: str, lang: str, key: str) -> str:
    value = strip_page_tokens(value)
    rubric_patterns = {
        "EN": [
            r"(?im)^The Gloria in excelsis.*$",
            r"(?im)^The Creed is said.*$",
            r"(?im)^Preface(?:\s|:).*$",
            r"(?im)^The (?:Solemn )?Blessing.*$",
            r"(?im)^A suitable formula.*$",
            r"(?im)^\[In the .*$",
        ],
        "LA": [
            r"(?im)^Dicitur Glória.*$",
            r"(?im)^Dicitur Credo.*$",
            r"(?im)^Præfatio(?:\s|:).*$",
            r"(?im)^Benedictio in fine.*$",
        ],
        "VN": [
            r"(?im)^Ðọc kinh (?:Vinh Danh|Tin Kính).*$",
            r"(?im)^Đọc kinh (?:Vinh Danh|Tin Kính).*$",
            r"(?im)^Kinh Tiền Tụng.*$",
            r"(?im)^(?:Trước|Sau).*Kinh tiền tụng.*$",
            r"(?m)^[A-D]\s*$",
        ],
        "KR": [
            r"(?m)^대영광송.*$",
            r"(?m)^신경.*$",
            r"(?m)^.*감사송.*$",
            r"(?m)^장엄 강복.*$",
        ],
    }
    cut = len(value)
    for pattern in rubric_patterns.get(lang, []):
        match = re.search(pattern, value)
        if match:
            cut = min(cut, match.start())
    if key in {"collect", "prayer_offerings", "prayer_after"}:
        for pattern in PRAYER_TERMINATORS.get(lang, []):
            match = re.search(pattern, value, re.I)
            if match:
                cut = min(cut, match.end())
    value = value[:cut]
    if lang == "EN":
        value = re.sub(r"(?im)^The Gloria in excelsis \(Glory to God in the highest\) is said\.\s*", "", value)
    value = re.sub(r"\n{3,}", "\n\n", value).strip(" \n.;")
    return value


def form_starts(block: str, lang: str) -> list[int]:
    """Return starts for distinct formulars when a date/page has several Collects."""
    collects = [match for match in heading_matches(block, lang) if match[2] == "collect"]
    if len(collects) <= 1:
        return [0]
    starts = [0]
    for index in range(1, len(collects)):
        previous_collect_end = collects[index - 1][1]
        current_collect_start = collects[index][0]
        between = block[previous_collect_end:current_collect_start]
        terminators = []
        for pattern in PRAYER_TERMINATORS.get(lang, []):
            terminators.extend(re.finditer(pattern, between, re.I))
        if terminators:
            starts.append(previous_collect_end + max(match.end() for match in terminators))
            continue
        # OCR occasionally loses the abbreviated conclusion. A page token or a
        # generous title window is safer than carrying the prior prayer forward.
        page_tokens = list(re.finditer(r"\[\[PAGE\s+\d+\]\]", between))
        if page_tokens:
            starts.append(previous_collect_end + page_tokens[-1].start())
        else:
            starts.append(max(previous_collect_end, current_collect_start - 900))
    return sorted(set(starts))


def parse_form_entries(
    block: str,
    lang: str,
    fallback_title: str,
    fallback_page: int,
    kind: str,
) -> list[dict[str, object]]:
    starts = form_starts(block, lang)
    entries: list[dict[str, object]] = []
    for index, start in enumerate(starts):
        stop = starts[index + 1] if index + 1 < len(starts) else len(block)
        form = block[start:stop]
        entry = {
            "title": title_before_sections(form, lang, fallback_title),
            "page": fallback_page if index == 0 else source_page(form, fallback_page),
            "kind": kind,
            "data": parse_sections(form, lang),
        }
        if valid_entry(entry):
            entries.append(entry)
    return entries


def parse_sections(block: str, lang: str) -> dict[str, str]:
    matches = heading_matches(block, lang)
    data: dict[str, str] = {}
    for index, (_, end, key) in enumerate(matches):
        if key in data:
            continue
        stop = matches[index + 1][0] if index + 1 < len(matches) else len(block)
        value = remove_rubric_tail(block[end:stop], lang, key)
        if value:
            data[key] = value
    return data


def title_before_sections(block: str, lang: str, fallback: str = "") -> str:
    matches = heading_matches(block, lang)
    prefix = block[: matches[0][0]] if matches else block[:1200]
    prefix = strip_page_tokens(prefix)
    candidates: list[str] = []
    for raw in prefix.splitlines():
        line = compact(raw)
        if not line:
            continue
        if re.fullmatch(r"\d+", line):
            continue
        if re.match(r"^(?:Solemnity|Feast|Memorial|Memoria|Festum|Sollemnitas|Lễ|기념일|축일|대축일)$", line, re.I):
            continue
        if re.match(r"^(?:De Communi|Common of|순교자 공통|목자 공통|동정녀 공통|성인 성녀 공통|복되신 동정 마리아 공통)", line, re.I):
            continue
        if lang == "EN" and re.match(r"^(?:From the Common|For (?:a|an|one|several|many|virgin|pope|bishop|pastor)\b|\[In the Dioceses)", line, re.I):
            continue
        if lang == "LA" and re.match(r"^(?:De Communi|pro (?:uno|una|pluribus|papa|episcopo|pastore|virgine|religioso))\b", line, re.I):
            continue
        if lang == "KR" and ("공통" in line or re.fullmatch(r"기념일|선택 기념일|축일|대축일", line)):
            continue
        if lang == "VN" and re.match(
            r"^(?:Lễ (?:nhớ|kính|trọng)|Lấy (?:lễ|Phần)|Xem (?:Phần|phần)|Phần Chung|Hay\b|Hoặc\b)",
            line,
            re.I,
        ):
            continue
        candidates.append(line)
    if not candidates:
        return fallback
    return compact(" ".join(candidates[-4:]))[:320]


def valid_entry(entry: dict[str, object]) -> bool:
    data = entry.get("data")
    return isinstance(data, dict) and bool(data.get("collect") or len(data) >= 2)


def english_calendar(pages: list[dict[str, object]]) -> dict[str, list[dict[str, object]]]:
    text = page_join(pages)
    month_pattern = "|".join(MONTHS_EN)
    matches = list(re.finditer(rf"(?im)^({month_pattern})\s+(\d{{1,2}})\s*$", text))
    result: dict[str, list[dict[str, object]]] = defaultdict(list)
    for index, match in enumerate(matches):
        block = text[match.end(): matches[index + 1].start() if index + 1 < len(matches) else len(text)]
        date_key = f"{MONTHS_EN[match.group(1)]:02d}-{int(match.group(2)):02d}"
        page = source_page_at(text, match.start(), source_page(block))
        result[date_key].extend(parse_form_entries(
            block, "EN", f"{match.group(1)} {match.group(2)}", page, "proper"
        ))
    return dict(result)


def latin_calendar(pages: list[dict[str, object]]) -> dict[str, list[dict[str, object]]]:
    text = page_join(pages)
    month_pattern = "|".join(MONTHS_LA)
    matches = list(re.finditer(rf"(?i)\bDie\s+(\d{{1,2}})\s+({month_pattern})\b", text))
    result: dict[str, list[dict[str, object]]] = defaultdict(list)
    for index, match in enumerate(matches):
        block = text[match.end(): matches[index + 1].start() if index + 1 < len(matches) else len(text)]
        date_key = f"{MONTHS_LA[match.group(2).lower()]:02d}-{int(match.group(1)):02d}"
        page = source_page_at(text, match.start(), source_page(block))
        result[date_key].extend(parse_form_entries(block, "LA", match.group(0), page, "proper"))
    return dict(result)


def vietnamese_calendar(pages: list[dict[str, object]]) -> dict[str, list[dict[str, object]]]:
    text = page_join(pages)
    month_pattern = "|".join(sorted((re.escape(name) for name in MONTHS_VN), key=len, reverse=True))
    matches = list(re.finditer(
        rf"(?im)^\s*Ngày\s+(\d{{1,2}})\s+tháng\s+({month_pattern})\s*$",
        text,
    ))
    result: dict[str, list[dict[str, object]]] = defaultdict(list)
    for index, match in enumerate(matches):
        block = text[match.end(): matches[index + 1].start() if index + 1 < len(matches) else len(text)]
        month_name = compact(match.group(2)).lower()
        date_key = f"{MONTHS_VN[month_name]:02d}-{int(match.group(1)):02d}"
        page = source_page_at(text, match.start(), source_page(block))
        result[date_key].extend(parse_form_entries(block, "VN", match.group(0), page, "proper"))
    return dict(result)


KOREAN_MONTH_PAGE_RANGES = (
    (1, 655, 663), (2, 664, 678), (3, 679, 693), (4, 694, 700),
    (5, 701, 713), (6, 714, 736), (7, 737, 751), (8, 752, 781),
    (9, 782, 802), (10, 803, 818), (11, 819, 840), (12, 841, 854),
)


def korean_month_for_page(page: int) -> int:
    for month, first, last in KOREAN_MONTH_PAGE_RANGES:
        if first <= page <= last:
            return month
    return 0


def normalize_ocr_day(value: int) -> int:
    if value <= 31:
        return value
    return {80: 30, 81: 31, 91: 21}.get(value, max(1, min(31, value % 10)))


def korean_calendar(pages: list[dict[str, object]]) -> tuple[dict[str, list[dict[str, object]]], list[dict[str, object]]]:
    proper_pages = [entry for entry in pages if 655 <= int(entry["page"]) <= 854]
    text = page_join(proper_pages)
    matches = list(re.finditer(r"(?m)^\s*(\d{1,2})월\s*(\d{1,2})일\s*$", text))
    result: dict[str, list[dict[str, object]]] = defaultdict(list)
    all_entries: list[dict[str, object]] = []
    for index, match in enumerate(matches):
        block = text[match.end(): matches[index + 1].start() if index + 1 < len(matches) else len(text)]
        page = source_page_at(text, match.start(), source_page(block))
        month = korean_month_for_page(page) or min(12, max(1, int(match.group(1))))
        day = normalize_ocr_day(int(match.group(2)))
        for entry in parse_form_entries(block, "KR", match.group(0), page, "proper"):
            date_key = f"{month:02d}-{day:02d}"
            searchable = f"{entry['title']} {' '.join(str(value) for value in entry['data'].values())}"
            for hint, corrected_date in KOREAN_ENTRY_DATE_HINTS.items():
                if hint in searchable:
                    date_key = corrected_date
                    break
            result[date_key].append(entry)
            all_entries.append(entry)
    return dict(result), all_entries


KOREAN_EASTER_WEEK_BY_PAGE = {
    861: 2,
    863: 2, 864: 2, 865: 2, 866: 2, 867: 2, 868: 2,
    870: 3,
    872: 3, 873: 3, 874: 3, 875: 3, 876: 3, 877: 3,
    878: 4,
    879: 4, 880: 4, 881: 4, 882: 4, 883: 4, 884: 4,
    885: 5,
    886: 5, 887: 5, 888: 5, 889: 5, 890: 5, 891: 5,
    892: 6,
    894: 6, 895: 6, 896: 6, 905: 6, 906: 6, 908: 6,
    910: 7,
    912: 7, 913: 7, 914: 7, 915: 7, 916: 7, 917: 7,
}


def page_catalog(pages: list[dict[str, object]], lang: str, kind: str) -> list[dict[str, object]]:
    entries: list[dict[str, object]] = []
    for index, page_entry in enumerate(pages):
        page = int(page_entry["page"])
        text = str(page_entry["text"])
        if not re.search(rf"(?im)^\s*(?:{HEADINGS[lang]['collect']})(?:\s|$)", text):
            continue
        combined = f"[[PAGE {page}]]\n{text}"
        if index + 1 < len(pages):
            next_text = str(pages[index + 1]["text"])
            if not re.search(rf"(?im)^\s*(?:{HEADINGS[lang]['collect']})(?:\s|$)", next_text):
                combined += f"\n[[PAGE {pages[index + 1]['page']}]]\n{next_text}"
        page_entries = parse_form_entries(combined, lang, f"{kind} p.{page}", page, kind)
        if lang == "KR" and page in KOREAN_EASTER_WEEK_BY_PAGE:
            easter_week = KOREAN_EASTER_WEEK_BY_PAGE[page]
            for entry in page_entries:
                title = re.sub(
                    r"부활\s+제\s*[0-9?]+\s*주",
                    f"부활 제{easter_week}주",
                    str(entry["title"]),
                )
                easter_titles = list(re.finditer(r"부활 제\d+주(?:일|간)", title))
                entry["title"] = title[easter_titles[-1].start():] if easter_titles else title
        if lang == "KR" and 933 <= page <= 966:
            ordinary_week = page - 932
            for entry in page_entries:
                title = re.sub(
                    r"연중\s+제\s*\d+\s*주(?:일|간)",
                    f"연중 제{ordinary_week}주일",
                    str(entry["title"]),
                )
                ordinary_titles = list(re.finditer(r"연중 제\d+주일", title))
                entry["title"] = title[ordinary_titles[-1].start():] if ordinary_titles else title
        entries.extend(page_entries)
    return entries


def vietnamese_votive(pages: list[dict[str, object]]) -> list[dict[str, object]]:
    text = page_join(pages)
    matches = list(re.finditer(r"(?m)^\s*(\d{1,2})\.\s+([A-ZĐ][A-ZĐÀ-Ỹ0-9 ,\-]+)\s*$", text))
    entries: list[dict[str, object]] = []
    for index, match in enumerate(matches):
        block = text[match.end(): matches[index + 1].start() if index + 1 < len(matches) else len(text)]
        base_title = compact(match.group(2)).title()
        parsed_entries = parse_form_entries(block, "VN", base_title, source_page(block), "votive")
        for form_index, entry in enumerate(parsed_entries):
            entry["title"] = base_title + (f" {chr(65 + form_index)}" if len(parsed_entries) > 1 else "")
            entry["number"] = int(match.group(1))
            entries.append(entry)
    grouped: dict[int, list[dict[str, object]]] = defaultdict(list)
    for entry in entries:
        grouped[int(entry["number"])].append(entry)
    for numbered_entries in grouped.values():
        if len(numbered_entries) <= 1:
            continue
        base_title = re.sub(r"\s+[A-Z]$", "", str(numbered_entries[0]["title"]))
        for index, entry in enumerate(numbered_entries):
            entry["title"] = f"{base_title} {chr(65 + index)}"
    return entries


def source_descriptor(filename: str, pages: str, section: str) -> dict[str, str]:
    return {"file": f"참고자료/미사/전문/{filename}", "pages": pages, "section": section}


def validate_payload(payload: dict[str, object]) -> None:
    languages = payload["languages"]
    minimum_dates = {"KR": 170, "VN": 175, "EN": 195, "LA": 180}
    for lang, minimum in minimum_dates.items():
        language_data = languages[lang]
        if len(language_data["calendar"]) < minimum:
            raise RuntimeError(f"{lang} calendar coverage fell below {minimum} dates")
        entries = [
            entry
            for dated_entries in language_data["calendar"].values()
            for entry in dated_entries
        ] + language_data["catalog"]
        for entry in entries:
            unexpected = set(entry["data"]) - set(SECTION_KEYS)
            if unexpected:
                raise RuntimeError(f"{lang} {entry['title']} contains unexpected sections: {sorted(unexpected)}")
            for section_key, value in entry["data"].items():
                if re.search(rf"(?im)^\s*(?:{'|'.join(HEADINGS[lang].values())})\s*$", value):
                    raise RuntimeError(f"{lang} {entry['title']} {section_key} contains an embedded section heading")
    english_entries = [
        entry
        for dated_entries in languages["EN"]["calendar"].values()
        for entry in dated_entries
    ] + languages["EN"]["catalog"]
    if any("The Gloria in excelsis" in value for entry in english_entries for value in entry["data"].values()):
        raise RuntimeError("English Gloria instruction leaked into local Missal data")
    vietnamese_kinds = {entry["kind"] for entry in languages["VN"]["catalog"]}
    if not {"temporal", "common", "votive"}.issubset(vietnamese_kinds):
        raise RuntimeError("Vietnamese temporal/common/votive coverage is incomplete")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=OUTPUT)
    options = parser.parse_args()

    en_proper_pages = pdf_pages(PDF_DIR / "영어.pdf", 799, 1025, "EN")
    en_common_pages = pdf_pages(PDF_DIR / "영어.pdf", 1030, 1113, "EN")
    la_proper_pages = pdf_pages(PDF_DIR / "라틴어.pdf", 415, 535, "LA")
    la_common_pages = pdf_pages(PDF_DIR / "라틴어.pdf", 536, 593, "LA")
    vn_temporal_pages = pdf_pages(PDF_DIR / "베트남어 (일부).pdf", 689, 1045, "VN")
    vn_proper_pages = pdf_pages(PDF_DIR / "베트남어 (일부).pdf", 1046, 1207, "VN")
    vn_common_pages = pdf_pages(PDF_DIR / "베트남어 (일부).pdf", 1208, 1270, "VN")
    vn_votive_pages = pdf_pages(PDF_DIR / "베트남어 (일부).pdf", 1483, 1508, "VN")
    kr_pages = ocr_pages(
        (
            TMP_DIR / "korean-missal-537-966-full-ocr.json",
            TMP_DIR / "korean-missal-967-1414-full-ocr.json",
        )
    )
    if not kr_pages or int(kr_pages[0]["page"]) > 537:
        raise RuntimeError("Korean full-page OCR is missing; run tools/index-korean-missal-pages.py first")

    kr_calendar, kr_proper_entries = korean_calendar(kr_pages)
    kr_nonproper_pages = [entry for entry in kr_pages if not 653 <= int(entry["page"]) <= 854]
    payload = {
        "schemaVersion": 1,
        "generated": "2026-08-22",
        "sections": list(SECTION_KEYS),
        "languages": {
            "KR": {
                "source": source_descriptor("한국어.pdf", "537-1414", "성주간 이후"),
                "calendar": kr_calendar,
                "catalog": kr_proper_entries + page_catalog(kr_nonproper_pages, "KR", "temporal-common-votive"),
            },
            "VN": {
                "source": source_descriptor(
                    "베트남어 (일부).pdf",
                    "689-1270, 1483-1508",
                    "temporal, PHẦN RIÊNG CÁC THÁNH, PHẦN CHUNG CÁC THÁNH, THÁNH LỄ NGOẠI LỊCH",
                ),
                "calendar": vietnamese_calendar(vn_proper_pages),
                "catalog": (
                    page_catalog(vn_temporal_pages, "VN", "temporal")
                    + page_catalog(vn_common_pages, "VN", "common")
                    + vietnamese_votive(vn_votive_pages)
                ),
            },
            "EN": {
                "source": source_descriptor("영어.pdf", "799-1113", "PROPER OF SAINTS and COMMONS"),
                "calendar": english_calendar(en_proper_pages),
                "catalog": page_catalog(en_common_pages, "EN", "common"),
            },
            "LA": {
                "source": source_descriptor("라틴어.pdf", "415-593", "PROPRIUM DE SANCTIS and COMMUNIA"),
                "calendar": latin_calendar(la_proper_pages),
                "catalog": page_catalog(la_common_pages, "LA", "common"),
            },
        },
        "fallbackLanguages": ["JP"],
    }
    validate_payload(payload)

    options.output.parent.mkdir(parents=True, exist_ok=True)
    banner = (
        "/* Generated by tools/build-local-missal-prayer-data.py.\n"
        " * Local Roman Missal prayers are compared with live parsed sources at runtime.\n"
        " * Do not edit this file by hand.\n"
        " */\n"
    )
    options.output.write_text(
        banner + "globalThis.localMissalPrayerData = " + json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + ";\n",
        encoding="utf-8",
    )
    counts = {
        lang: {
            "dates": len(data["calendar"]),
            "calendarEntries": sum(len(entries) for entries in data["calendar"].values()),
            "catalogEntries": len(data["catalog"]),
        }
        for lang, data in payload["languages"].items()
    }
    print(json.dumps({"output": str(options.output), "bytes": options.output.stat().st_size, "counts": counts}, ensure_ascii=False))


if __name__ == "__main__":
    main()
