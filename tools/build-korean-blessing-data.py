#!/usr/bin/env python3
"""Build the perpetual Korean blessing dataset from official-source extracts.

Inputs:
* Korean Roman Missal OCR title workbook (PDF pages 125-966)
* Optional clean accessibility extract from the Catholic Hasang app

The general collection of 28 prayers over the people is deliberately excluded
from the web dataset.  Only the prayer assigned to a concrete Lenten
liturgical day is emitted.
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from typing import Any

from openpyxl import load_workbook


LENTEN_PAGES: dict[int, tuple[str, str, bool]] = {
    218: ("lent_0_3", "재의 수요일", False),
    220: ("lent_0_4", "재의 예식 다음 목요일", True),
    222: ("lent_0_5", "재의 예식 다음 금요일", True),
    224: ("lent_0_6", "재의 예식 다음 토요일", True),
    228: ("lent_1_1", "사순 제1주간 월요일", True),
    230: ("lent_1_2", "사순 제1주간 화요일", True),
    232: ("lent_1_3", "사순 제1주간 수요일", True),
    234: ("lent_1_4", "사순 제1주간 목요일", True),
    236: ("lent_1_5", "사순 제1주간 금요일", True),
    238: ("lent_1_6", "사순 제1주간 토요일", True),
    242: ("lent_2_1", "사순 제2주간 월요일", True),
    244: ("lent_2_2", "사순 제2주간 화요일", True),
    246: ("lent_2_3", "사순 제2주간 수요일", True),
    248: ("lent_2_4", "사순 제2주간 목요일", True),
    250: ("lent_2_5", "사순 제2주간 금요일", True),
    252: ("lent_2_6", "사순 제2주간 토요일", True),
    255: ("lent_3_0", "사순 제3주일", False),
    257: ("lent_3_1", "사순 제3주간 월요일", True),
    259: ("lent_3_2", "사순 제3주간 화요일", True),
    261: ("lent_3_3", "사순 제3주간 수요일", True),
    263: ("lent_3_4", "사순 제3주간 목요일", True),
    265: ("lent_3_5", "사순 제3주간 금요일", True),
    267: ("lent_3_6", "사순 제3주간 토요일", True),
    270: ("lent_4_0", "사순 제4주일", False),
    272: ("lent_4_1", "사순 제4주간 월요일", True),
    274: ("lent_4_2", "사순 제4주간 화요일", True),
    276: ("lent_4_3", "사순 제4주간 수요일", True),
    278: ("lent_4_4", "사순 제4주간 목요일", True),
    280: ("lent_4_5", "사순 제4주간 금요일", True),
    282: ("lent_4_6", "사순 제4주간 토요일", True),
    285: ("lent_5_0", "사순 제5주일", False),
    287: ("lent_5_1", "사순 제5주간 월요일", True),
    289: ("lent_5_2", "사순 제5주간 화요일", True),
    291: ("lent_5_3", "사순 제5주간 수요일", True),
    293: ("lent_5_4", "사순 제5주간 목요일", True),
    295: ("lent_5_5", "사순 제5주간 금요일", True),
    297: ("lent_5_6", "사순 제5주간 토요일", True),
}

LINE_FIXES = {
    "하느님.": "하느님,",
    "주님.": "주님,",
    "모든 죄를 인자로이 씨 주시어": "모든 죄를 인자로이 씻어 주시어",
    "어떤 볼의에도": "어떤 불의에도",
    "자야에": "자애에",
    "봉현하게": "봉헌하게",
    "은해를": "은혜를",
    "어듬 속에서": "어둠 속에서",
    "기름을 누리게": "기쁨을 누리게",
    "보후하시어": "보호하시어",
    "언제나 주님께서 일러 주신 길": "언제나 하느님께서 일러 주신 길",
    "( ) 사도의 공로": "아무(와 아무) 사도의 공로",
    "우리주…….": "우리 주 그리스도를 통하여 비나이다.",
    "우리주 …….": "우리 주 그리스도를 통하여 비나이다.",
    "우리 주…….": "우리 주 그리스도를 통하여 비나이다.",
}

VOCATIVE_RE = re.compile(
    r"^(?:(?:전능하신|자비로우신)\s+)?하느님[,.]$|^(?:인자하신\s+)?주님[,.]$"
)

STANDARD_SOLEMN_BLESSING = (
    "전능하신 천주 성부와 ✠ 성자와 성령께서는 "
    "여기 모인 모든 이에게 강복하시어 길이 머물게 하소서."
)

# The connected app left these tabs empty or returned the body of a different
# tab.  These six entries are transcribed from the Korean Roman Missal images
# (PDF pages 410-418).  Keeping the fallback here also makes regeneration
# deterministic when no Android device is connected.
PDF_SOLEMN_BLESSING_FALLBACKS: dict[str, dict[str, Any]] = {
    "epiphany": {
        "label": "주님 공현",
        "group": "seasonal",
        "pdfPages": [410, 411],
        "prayers": [
            "어둠에서 눈부신 빛으로 이 교우들을 불러 주신 하느님께서는 인자로이 복을 내려 주시고 그 마음을 믿음과 희망과 사랑으로 굳건하게 하여 주소서.",
            "오늘 어둠을 밝히는 빛으로 세상에 나타나신 그리스도를 충실히 따르는 이 교우들이 이웃 형제들에게 빛이 되게 하여 주소서.",
            "동방의 박사들이 별의 인도를 받아 빛이신 주 그리스도를 찾아뵙고 기뻐하였듯이 이 교우들도 현세의 여정을 마친 다음 주님을 만나 뵙게 하여 주소서.",
        ],
    },
    "pentecost": {
        "label": "성령 강림",
        "group": "seasonal",
        "pdfPages": [413],
        "prayers": [
            "빛의 아버지이신 하느님께서는 (오늘) 위로자 성령을 보내시어 제자들의 마음을 비추셨으니 이 교우들에게도 강복하시어 기쁨을 주시고 성령의 선물을 가득히 내려 주소서.",
            "제자들 위에 기묘히 불 모양으로 나타나신 성령께서는 이 교우들의 마음을 모든 악에서 깨끗이 씻어 주시고 밝은 빛으로 비추어 주소서.",
            "말이 서로 다른 사람들을 일치시켜 한 신앙을 고백하게 하신 성령께서는 이 교우들이 언제나 같은 신앙 안에 머물게 하시고 그 신앙의 힘으로 마침내 주님을 뵙게 하소서.",
        ],
    },
    "ordinary_2": {
        "label": "연중 시기 2",
        "group": "seasonal",
        "pdfPages": [414],
        "prayers": [
            "사람의 모든 이해를 뛰어넘는 평화를 주시는 하느님께서는 하느님과 성자 우리 주 예수 그리스도의 지식과 사랑으로 이 교우들의 마음과 지성을 밝혀 주소서.",
        ],
    },
    "ordinary_3": {
        "label": "연중 시기 3",
        "group": "seasonal",
        "pdfPages": [414, 415],
        "prayers": [
            "전능하시고 인자하신 하느님께서는 이 교우들에게 강복하시고 구원의 지혜를 내려 주소서.",
            "자연과 계시를 통하여 신앙을 길러 주시고 이 교우들이 꾸준히 선행을 하도록 이끌어 주소서.",
            "이 교우들의 발걸음을 하느님께 향하게 하시고 평화와 사랑의 길로 이끌어 주소서.",
        ],
    },
    "ordinary_6": {
        "label": "연중 시기 6",
        "group": "seasonal",
        "pdfPages": [416],
        "prayers": [
            "하느님께서는 여기 모인 교우들에게 천상 복을 내리시어 하느님의 영광으로 가득 차 언제나 거룩하고 깨끗하게 살게 하시고 진리의 말씀으로 가르치시고 구원의 복음으로 길러 주시어 언제나 이웃 사랑에 힘쓰게 하소서. 우리 주 그리스도를 통하여 비나이다.",
        ],
    },
    "peter_and_paul": {
        "label": "성 베드로와 성 바오로 축일",
        "group": "saints",
        "pdfPages": [417],
        "prayers": [
            "전능하신 하느님께서는 베드로 사도의 신앙 고백을 들으시고 그 굳건한 믿음을 기초로 교회를 세우셨으니 이 교우들에게 강복하소서.",
            "바오로 사도의 지칠 줄 모르는 설교로 이 교우들을 가르치신 하느님께서는 이들도 바오로의 모범을 따라 형제들에게 그리스도를 전하게 하여 주소서.",
            "베드로와 바오로는 십자가와 칼날에 순교하여 영원한 고향에 이르렀으니 이 교우들도 두 사도의 전구로 천상 고향에 이르게 하여 주소서.",
        ],
    },
}


def locate_workbook(root: Path) -> Path:
    matches = sorted(root.rglob("*125-966*.xlsx"))
    if not matches:
        raise FileNotFoundError("한국어 미사경본 OCR 제목색인 xlsx를 찾지 못했습니다.")
    preferred = [path for path in matches if "미사" in path.name and "기도문" not in str(path)]
    return (preferred or matches)[0]


def workbook_pages(path: Path) -> dict[int, str]:
    workbook = load_workbook(path, read_only=True, data_only=True)
    sheet = workbook.worksheets[0]
    pages: dict[int, str] = {}
    for row in sheet.iter_rows(min_row=2, values_only=True):
        if row[0] is None:
            continue
        pages[int(row[0])] = str(row[2] or row[1] or "")
    workbook.close()
    return pages


def clean_ocr_line(value: str) -> str:
    line = re.sub(r"\s+", " ", value).strip(" \t\r\n\"|")
    for before, after in LINE_FIXES.items():
        line = line.replace(before, after)
    line = line.replace("…….", "…")
    return line


def prayer_lines_from_page(page: int, text: str) -> list[str]:
    marker = "을 위한 기도"
    marker_index = text.find(marker)
    if marker_index < 0:
        raise ValueError(f"PDF {page}쪽에서 백성을 위한 기도 표제를 찾지 못했습니다.")
    body = text[marker_index + len(marker) :]
    raw_lines = [clean_ocr_line(line) for line in body.splitlines()]
    raw_lines = [line for line in raw_lines if line]
    start = next((index for index, line in enumerate(raw_lines) if VOCATIVE_RE.match(line)), -1)
    if start < 0:
        raise ValueError(f"PDF {page}쪽에서 기도 시작 문구를 찾지 못했습니다: {raw_lines[:8]}")
    lines = [line for line in raw_lines[start:] if line != "자유로이 바칠 수 있다."]
    cleaned: list[str] = []
    for line in lines:
        if re.fullmatch(r"[\d\s.@%]+", line):
            continue
        cleaned.append(line)
    # Every prayer over the people in this section uses the standard Korean
    # conclusion; the Missal abbreviates it on several pages as "우리 주…….".
    if not any("그리스도를 통하여 비나이다" in line for line in cleaned):
        cleaned.append("우리 주 그리스도를 통하여 비나이다.")
    return cleaned


def build_lenten_prayers(pages: dict[int, str]) -> dict[str, dict[str, Any]]:
    result: dict[str, dict[str, Any]] = {}
    for page, (key, title, optional) in LENTEN_PAGES.items():
        lines = prayer_lines_from_page(page, pages.get(page, ""))
        result[key] = {
            "title": title,
            "pdfPage": page,
            "optional": optional,
            "lines": lines,
        }
    return result


def solemn_lines(prayers: list[str]) -> list[str]:
    lines: list[str] = []
    for prayer in [*prayers, STANDARD_SOLEMN_BLESSING]:
        lines.extend([f"╋ {clean_ocr_line(prayer).rstrip('.') }.", "◎ 아멘."])
    return lines


def clean_hasang_entry_lines(raw_lines: list[Any]) -> list[str]:
    # Accessibility dumps contain adjacent tab labels, and their global
    # de-duplication keeps only the first repeated "아멘".  Retain only the
    # priest's cross-marked prayers and reconstruct each response.
    prayers: list[str] = []
    for raw in raw_lines:
        line = clean_ocr_line(str(raw)).replace("하소서..", "하소서.")
        if not re.match(r"^[╋＋✚+]\s*", line):
            continue
        prayer = re.sub(r"^[╋＋✚+]\s*", "", line).strip()
        prayer = prayer.replace("※", "✠")
        if prayer:
            prayers.append(prayer)
    if not prayers:
        return []
    # The app includes the standard final blessing as its last cross-marked
    # line.  Avoid appending it a second time in solemn_lines().
    if "전능하신 천주 성부" in prayers[-1]:
        prayers.pop()
    return solemn_lines(prayers)


def clean_hasang_blessings(path: Path | None) -> dict[str, dict[str, Any]]:
    result: dict[str, dict[str, Any]] = {}
    if path and path.is_file():
        payload = json.loads(path.read_text(encoding="utf-8"))
        groups = payload.get("solemnBlessings") or {}
        for group_name, entries in groups.items():
            for entry in entries or []:
                key = str(entry.get("key") or "")
                if not key or key in PDF_SOLEMN_BLESSING_FALLBACKS:
                    continue
                lines = clean_hasang_entry_lines(entry.get("lines") or [])
                if not entry.get("availableInApp") or not lines:
                    continue
                result[key] = {
                    "label": str(entry.get("label") or key),
                    "group": group_name,
                    "source": "가톨릭하상 앱 / 한국어 미사경본 대조",
                    "lines": lines,
                }
    for key, fallback in PDF_SOLEMN_BLESSING_FALLBACKS.items():
        result[key] = {
            "label": fallback["label"],
            "group": fallback["group"],
            "pdfPages": fallback["pdfPages"],
            "source": "한국어 미사경본 PDF",
            "lines": solemn_lines(fallback["prayers"]),
        }
    return result


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path.cwd())
    parser.add_argument(
        "--hasang-json",
        type=Path,
        default=Path("tmp/hasang-app/hasang_blessings.json"),
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("JS file/korean_blessing_data.js"),
    )
    args = parser.parse_args()

    workbook = locate_workbook(args.root)
    pages = workbook_pages(workbook)
    data = {
        "version": "2026-07-16-v2",
        "source": {
            "missalWorkbook": workbook.name,
            "missalPdfPages": "215-297, 408-426",
            "hasangApp": "가톨릭하상 > 매일 미사 > 미사통상문 > 마침",
            "generalPrayerCollectionExposed": False,
        },
        "lentenPrayers": build_lenten_prayers(pages),
        "solemnBlessings": clean_hasang_blessings(args.hasang_json),
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    javascript = "globalThis.koreanBlessingData = " + json.dumps(
        data, ensure_ascii=False, indent=2
    ) + ";\n"
    args.output.write_text(javascript, encoding="utf-8")
    print(
        f"완료: {args.output} (전례일 기도 {len(data['lentenPrayers'])}, "
        f"장엄 강복 {len(data['solemnBlessings'])})"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
