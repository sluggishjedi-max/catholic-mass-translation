#!/usr/bin/env python3
"""Rebuild Korean and TCVN2 hymn lyric fields from authoritative sources.

Korean Catholic hymn lyrics come from the GoodNews legacy hymn detail pages.
TCVN2 lyrics come from the VNI-encoded text layer in the checked-in source PDFs.
Yahweh Jireh entries keep their existing lyric text, but receive the same
structured verse/refrain representation as the other Korean hymns.
"""

from __future__ import annotations

import argparse
import concurrent.futures
import difflib
import html
import importlib.util
import json
import re
import unicodedata
from collections import OrderedDict
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable

import pdfplumber
import requests


ROOT = Path(__file__).resolve().parents[1]
KOREAN_DATA = ROOT / "JS file" / "countries" / "korea" / "korea_hymns.js"
VIETNAMESE_DATA = ROOT / "JS file" / "countries" / "vietnam" / "vietnam_hymns.js"
TCVN2_ROOT = ROOT / "참고자료" / "성가" / "Tuyển tập Thánh ca Việt Nam quyển 2"
GOODNEWS_URL = "https://maria.catholic.or.kr/sungga/search/sungga_view.asp?ctxtIndex={}"

KOREAN_MARKER = "[후렴]"
VIETNAMESE_MARKER = "[ĐK]"
PRIVATE_USE = re.compile(r"[\ue000-\uf8ff]")

VIETNAMESE_SCORE_FALLBACKS = {
    "vn-tcvn2-004": (
        "1. Hân hoan lời tụng ca dâng Chúa khúc nhạc huyền mơ, Một bài thơ trìu mến ân tình đượm nét đơn sơ. [ĐK]\n\n"
        "2. Cho con mùa hồng ân yêu mến những ngày và đêm, Tình Ngài như trời sáng soi đường nhịp bước êm đềm. [ĐK]\n\n"
        "3. Con dâng Ngài tình yêu năm tháng đã dần nhạt phai, Tình Ngài như hạ nắng hong nồng lại trái tim này. [ĐK]\n\n"
        "4. Tâm tư một chiều xưa đoan hứa mến Ngài ngàn thu, Nhiều lần phiêu bạt mất trên dòng đời sóng xa đưa. [ĐK]\n\n"
        "5. Cho con lại mùa xuân khi đã lãnh nhận hồng ân, Thề nguyền yêu một Chúa cho vẹn tình khúc tri ân. [ĐK]\n\n"
        "ĐK. Hân hoan lời tụng ca đoàn con dâng Chúa đêm ngày. Hát cho muôn thế hệ hãy ngợi ca hồng ân Thiên Chúa. "
        "Muôn đời Chúa thương con người ôi tình Chúa chẳng nhạt phai. Trái tim thơ trả lại tình ca mến yêu muôn đời."
    ),
    "vn-tcvn2-048": (
        "1. Lời Ngài sáng ngời chiếu soi trần gian. Dìu người lữ hành xuôi bến bình an. Dù rằng đất trời lắm phen điêu tàn. Ai giữ Lời Chúa sẽ mãi yên hàn. [ĐK]\n\n"
        "2. Lời Ngài vỗ về những khi sầu đau. Đường dài ngút ngàn không biết về đâu. Cuộc đời xế chiều tóc râm mái đầu. Tin vững Lời Chúa ân nghĩa thắm màu. [ĐK]\n\n"
        "3. Lời Ngài vững bền mãi không đổi thay. Là nguồn hy vọng chan chứa niềm vui. Là nguồn sức mạnh đỡ nâng con người. Soi trí lòng ai mãi mãi đêm ngày. [ĐK]\n\n"
        "ĐK. Lời Ngài êm đềm nhẹ nhàng trong đêm như tiếng ru mẹ yêu. Từng lời cao vời ngập tràn sức sống nuôi dưỡng con người. "
        "Lời Ngài dẫn đường về nguồn yêu thương lai láng như trùng dương. Lời Ngài mãi còn ngọt ngào ân thiêng chứa chan cõi lòng."
    ),
    "vn-tcvn2-159": (
        "1. Hai chúng con giờ đây nên một, đến trước ngai Mẹ thành tâm kêu khấn. Xin cho người anh con yêu hôm nay, luôn trung thành cuộc sống thủy chung. "
        "Xin cho người em con yêu hôm nay, vững niềm tin theo Chúa đến cùng. Để ngày mai dìu nhau về bến thiên đàng. [ĐK]\n\n"
        "2. Hai chúng con thành tâm dâng Mẹ, xác với linh hồn ngợp bao vui sướng. Xin cho người anh con yêu hôm nay, nêu gương lành cuộc sống người cha. "
        "Xin cho người em con yêu hôm nay, giống Mẹ xưa yêu Chúa đậm đà. Để ngày mai đời luôn hạnh phúc chan hòa. [ĐK]\n\n"
        "ĐK. Mẹ ơi! Đời đôi lứa sẽ đầy hồng ân, nếu có Mẹ luôn ở bên mình, trào dâng hạnh phúc gia đình. "
        "Mẹ ơi! Mẹ thương chúc phúc cho đời chúng con trọn nghĩa yêu thương. Vai kề sát vai dìu bước nhau đi, gian khó coi thường."
    ),
    "vn-tcvn2-223": (
        "1. Trước bàn thờ Thiên Chúa, í a, đoàn con xin dâng Ngài này xác với hồn con, Chúa ơi. [ĐK]\n\n"
        "2. Lễ vật này dâng Chúa, í a, tình thương dâng trọn vẹn làm hiến lễ tình yêu, Chúa ơi. [ĐK]\n\n"
        "3. Kết hợp cùng hy lễ, í a, ngàn hy sinh trong đời cùng hiến lễ đồi xưa, Chúa ơi. [ĐK]\n\n"
        "ĐK. Xin dâng lên trước tôn nhan Ngài tấm bánh này bởi muôn hạt lúa miến và lao công nước mắt mồ hôi, xin dâng lên. "
        "Và này đây là chén rượu nồng được ép bởi ngàn chùm nho chín, nguyện dâng lên như hy lễ toàn thiêu xin dâng lên."
    ),
    "vn-tcvn2-314": (
        "ĐK. Một Hài Nhi sinh hạ cho chúng ta, một Trẻ Thơ tặng ban cho chúng ta, trên vai Ngài nặng mang vương quyền. "
        "Muôn dân xưng tụng rằng: Ngài là quân sư ưu tú, là Vị Thiên Chúa quyền linh, Cha muôn đời, là Vua an bình. "
        "Vương quyền Ngài tăng triển trong an hòa vô biên."
    ),
}

VIETNAMESE_TEXT_REPLACEMENTS = {
    "vn-tcvn2-002": (("kể bên", "kề bên"), ("Nhủ nai", "Như nai"), ("chấy", "cháy")),
    "vn-tcvn2-003": (("Hồn sn", "Hồn con"), ("ĐK. lạy", "ĐK. Lạy")),
}


def load_vni_converter():
    path = ROOT / "tools" / "extract-vn-hymn-vni-text.py"
    spec = importlib.util.spec_from_file_location("extract_vn_hymn_vni_text", path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Could not load the VNI converter: {path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module.vni_to_unicode


VNI_TO_UNICODE = load_vni_converter()


@dataclass
class LyricSections:
    verses: OrderedDict[int, list[str]] = field(default_factory=OrderedDict)
    refrain: list[str] = field(default_factory=list)
    intro: list[str] = field(default_factory=list)
    loose: list[str] = field(default_factory=list)

    def has_content(self) -> bool:
        return bool(self.verses or self.refrain or self.intro or self.loose)

    def letter_count(self) -> int:
        values = [*self.intro, *self.loose, *self.refrain]
        values.extend(line for lines in self.verses.values() for line in lines)
        return sum(character.isalpha() for value in values for character in value)


def array_bounds(source: str) -> tuple[int, int]:
    marker = "entries:"
    start = source.index("[", source.index(marker))
    depth = 0
    in_string = False
    escaped = False
    for index in range(start, len(source)):
        character = source[index]
        if in_string:
            if escaped:
                escaped = False
            elif character == "\\":
                escaped = True
            elif character == '"':
                in_string = False
            continue
        if character == '"':
            in_string = True
        elif character == "[":
            depth += 1
        elif character == "]":
            depth -= 1
            if depth == 0:
                return start, index + 1
    raise ValueError("Could not locate the country hymn entries array")


def load_module(path: Path) -> tuple[str, list[dict], int, int]:
    source = path.read_text(encoding="utf-8")
    start, end = array_bounds(source)
    return source, json.loads(source[start:end]), start, end


def save_module(path: Path, source: str, entries: list[dict], start: int, end: int) -> None:
    body = json.dumps(entries, ensure_ascii=False, separators=(",", ":"))
    body = body.replace("\u2028", "\\u2028").replace("\u2029", "\\u2029")
    path.write_text(source[:start] + body + source[end:], encoding="utf-8")


def compact(value: str) -> str:
    return re.sub(r"[ \t]+", " ", unicodedata.normalize("NFC", value or "")).strip()


def normalized_lines(value: str) -> list[str]:
    return [line for raw in (value or "").replace("\r", "\n").split("\n") if (line := compact(raw))]


def comparable(value: str) -> str:
    value = unicodedata.normalize("NFKD", value or "").lower()
    value = "".join(character for character in value if not unicodedata.combining(character))
    value = unicodedata.normalize("NFC", value)
    return re.sub(r"[^0-9a-z가-힣đ]+", "", value)


def unique_lines(lines: Iterable[str]) -> list[str]:
    output: list[str] = []
    for value in lines:
        line = compact(value)
        if line and (not output or output[-1] != line):
            output.append(line)
    return output


def strip_end_marker(value: str) -> str:
    return re.sub(r"\s*\[(?:후렴|ĐK|DK)\]\s*$", "", compact(value), flags=re.I).strip()


def parse_existing(value: str) -> LyricSections:
    sections = LyricSections()
    current_kind = ""
    current_number = 0
    found_heading = False

    for line in normalized_lines(value):
        refrain = re.match(r"^(?:\[\s*(?:후렴|ĐK|DK)\s*\]|후렴\s*[:：.]?|ĐK\s*[:：.]?|DK\s*[:：.]?)\s*(.*)$", line, re.I)
        if refrain:
            found_heading = True
            current_kind = "refrain"
            tail = compact(refrain.group(1))
            if tail:
                sections.refrain.append(tail)
            continue
        verse = re.match(r"^([1-9]\d*)\s*[.)]\s*(.*)$", line)
        if verse:
            found_heading = True
            current_kind = "verse"
            current_number = int(verse.group(1))
            tail = strip_end_marker(verse.group(2))
            if tail:
                sections.verses.setdefault(current_number, []).append(tail)
            continue
        cleaned = strip_end_marker(line)
        if not cleaned:
            continue
        if current_kind == "verse" and current_number:
            sections.verses.setdefault(current_number, []).append(cleaned)
        elif current_kind == "refrain":
            sections.refrain.append(cleaned)
        elif found_heading:
            sections.intro.append(cleaned)
        else:
            sections.loose.append(cleaned)

    sections.intro = unique_lines(sections.intro)
    sections.loose = unique_lines(sections.loose)
    sections.refrain = unique_lines(sections.refrain)
    for number in list(sections.verses):
        sections.verses[number] = unique_lines(sections.verses[number])
        if not sections.verses[number]:
            del sections.verses[number]
    return sections


def parse_goodnews_lines(lines: list[str]) -> LyricSections:
    sections = LyricSections()
    for line in lines:
        line = compact(line)
        if not line:
            continue
        refrain = re.match(r"^후렴\s*[:：.]?\s*(.*)$", line)
        if refrain:
            tail = compact(refrain.group(1))
            if tail:
                sections.refrain.append(tail)
            continue
        verse = re.match(r"^([1-9]\d*)\s*[.)]\s*(.*)$", line)
        if verse:
            tail = compact(verse.group(2))
            if tail:
                sections.verses.setdefault(int(verse.group(1)), []).append(tail)
            continue
        if sections.verses:
            sections.intro.append(line)
        else:
            sections.loose.append(line)
    sections.intro = unique_lines(sections.intro)
    sections.loose = unique_lines(sections.loose)
    sections.refrain = unique_lines(sections.refrain)
    return sections


def fetch_goodnews(number: int) -> tuple[int, LyricSections | None, str]:
    url = GOODNEWS_URL.format(number)
    last_error: Exception | None = None
    for _ in range(3):
        try:
            response = requests.get(url, timeout=30, headers={"User-Agent": "Order-of-Mass hymn data maintainer"})
            response.raise_for_status()
            match = re.search(
                r"<th[^>]*>\s*성가\s*가사\s*</th>\s*<td[^>]*>(.*?)</td>",
                response.text,
                flags=re.I | re.S,
            )
            if match is None:
                return number, None, f"No lyric cell: {url}"
            fragment = re.sub(r"<br\s*/?>", "\n", match.group(1), flags=re.I)
            fragment = re.sub(r"<[^>]+>", " ", fragment)
            fragment = html.unescape(fragment).replace("\xa0", " ")
            lines = [compact(line) for line in fragment.splitlines() if compact(line)]
            sections = parse_goodnews_lines(lines)
            if not sections.has_content():
                return number, None, f"Empty lyric cell: {url}"
            return number, sections, ""
        except requests.RequestException as error:
            last_error = error
    return number, None, f"{type(last_error).__name__}: {last_error}"


KOREAN_METADATA = re.compile(
    r"(?:작사|작곡|편곡|개작|새가톨릭성가편찬위원회|통일성가집편찬위원회|"
    r"(?:매우|조금|너무|보통)?\s*(?:빠르|느리|경건|장엄|힘차|가볍|은은|기도하듯)|"
    r"\b(?:D\.?C\.?|Fine|Moderato|Allegro|Andante)\b)",
    re.I,
)

KOREAN_STRICT_METADATA = re.compile(
    r"(?:작사|작곡|편곡|개작|새가톨릭성가편찬위원회|통일성가집편찬위원회|"
    r"\b(?:D\.?C\.?|Fine|Moderato|Allegro|Andante)\b)",
    re.I,
)

# The current GoodNews detail pages have no lyric body for these replacement
# hymns. Their text and repeat structure were transcribed from the checked-in
# score images instead of preserving the contaminated OCR fallback.
KOREAN_SCORE_FALLBACKS = {
    371: "주님 주님 주님 주님 저희의 기도를 들어 주소서 사랑을 사랑을 베풀어 주소서 이 백성 굳게 하소서",
    454: (
        "1. 주님의 풍성한 강복을 받고서 주의 말씀 전하러 떠납니다 [후렴]\n\n"
        "2. 만방에 나아가 복음을 전하며 주의 사랑 전하러 떠납니다 [후렴]\n\n"
        "[후렴]\n말씀 깊이 새기며 만방에 나아가 주님의 사랑을 전파하세"
    ),
    461: (
        "1. 주님의 길만을 재촉하시면 어느 세월에 또 뵈오리이까 누추한 집이나 따스하오니 이 밤을 쉬어 가시옵소서 [후렴]\n\n"
        "2. 주님을 이 집에 모셔들이면 기쁨에 겨워 가슴 뛰오니 길에서의 얘기 마저 하시며 이 밤을 쉬어 가시옵소서 [후렴]\n\n"
        "3. 우리와 한 상에 자리하시어 주님의 빵을 떼시옵소서 가난한 인생들 소원이오니 이 밤을 쉬어 가시옵소서 [후렴]\n\n"
        "4. 밤바람 차갑고 문풍지 떠나 주님의 음성이 호롱불 되고 주님의 손길은 따뜻하오니 이 밤을 쉬어 가시옵소서 [후렴]\n\n"
        "[후렴]\n서산에 노을이 고우나 누리는 어둠에 잠겼사오니 우리와 함께 주여 드시어 이 밤을 쉬어 가시옵소서"
    ),
    469: (
        "하늘의 성인들이여 오소서 주님의 천사들이여 마주 오소서 이 교우를 받아 지극히 높으신 하느님 앞에 바치소서\n\n"
        "1. 이 교우를 부르신 그리스도님 이 교우를 받아들이소서 천사들이여 이 교우를 아브라함 품 안으로 데려가소서\n\n"
        "2. 주님 그에게 영원한 안식을 주소서 영원한 빛을 그에게 비추소서 이 교우를 받아 지극히 높으신 하느님 앞에 바치소서"
    ),
    470: (
        "천사들이여 이 교우를 천상 낙원으로 데려가시고 순교자들이여 이 교우를 천상 예루살렘으로 인도하소서 "
        "성인들이여 이 교우를 주님의 품 안에 쉬게 하시고 거룩한 천국에 인도하소서"
    ),
    507: (
        "1. 길이요 생명이신 주 사랑의 샘이여 연약한 저희에게 자비를 베푸소서 [후렴]\n\n"
        "2. 티 없는 마리아의 그 사랑 드러낸다 간절한 사랑으로 주님께 나가리다 [후렴]\n\n"
        "3. 무거운 짐 진 자들아 내 품에 쉬어라 불타는 내 맘으로 네 영혼 위로하리 [후렴]\n\n"
        "[후렴]\n거룩하신 성사 예수여 사랑케 하소서 열절케 하소서"
    ),
}


def korean_ocr_contaminated(value: str) -> bool:
    lines = normalized_lines(value)
    if any(KOREAN_METADATA.search(line) for line in lines):
        return True
    for line in lines:
        hangul = len(re.findall(r"[가-힣]", line))
        digits = len(re.findall(r"\d", line))
        symbols = len(re.findall(r"[^0-9A-Za-z가-힣\s.,!?()'\"\-\[\]]", line))
        if (hangul < 3 and digits + symbols >= 4) or symbols > max(hangul, 3):
            return True
    return False


def is_chord_row(line: str) -> bool:
    tokens = line.split()
    chord = re.compile(r"^[A-G](?:[#b])?(?:m|maj|min|dim|aug|sus)?\d*(?:/[A-G][#b]?)?$", re.I)
    return bool(tokens) and len(tokens) <= 12 and all(chord.fullmatch(token) for token in tokens)


def clean_vietnamese_line(line: str) -> str:
    line = compact(line)
    line = re.sub(r"^[^0-9A-Za-zÀ-ỹĐđ]+", "", line)
    line = re.sub(r"\s+([,.!?;:])", r"\1", line)
    return line.strip()


def is_vietnamese_metadata(line: str, metadata_keys: set[str]) -> bool:
    key = comparable(line)
    for metadata_key in metadata_keys:
        if metadata_key and key and (
            key == metadata_key
            or (key in metadata_key and len(key) >= max(5, len(metadata_key) - 4))
            or (metadata_key in key and len(key) <= len(metadata_key) + 4)
        ):
            return True
    return bool(
        re.match(r"^(?:Lời|Nhạc|Thơ|Ý|Hòa âm|Trình bày|Tác giả)\s*[:：]", line, re.I)
        or re.search(r"(?:ỦY|UỶ) BAN THÁNH NHẠC VIỆT NAM|THÁNH NHẠC VIỆT NAM", line, re.I)
        or re.search(r"Copyright|All rights reserved|Imprimatur", line, re.I)
    )


def split_numbered_fragments(line: str) -> list[tuple[int, str]]:
    matches = list(re.finditer(r"(?<!\d)([1-9])\s*[.)]\s*", line))
    if not matches:
        return []
    fragments: list[tuple[int, str]] = []
    for index, match in enumerate(matches):
        end = matches[index + 1].start() if index + 1 < len(matches) else len(line)
        text = compact(line[match.end() : end])
        if text:
            fragments.append((int(match.group(1)), text))
    return fragments


def extract_tcvn2_pdf(task: tuple[str, str, tuple[str, ...]]) -> tuple[str, LyricSections | None, str]:
    identifier, path_text, metadata_values = task
    path = Path(path_text)
    metadata_keys = {comparable(value) for value in metadata_values if compact(value)}
    sections = LyricSections()
    current_kind = ""
    current_number = 0
    try:
        with pdfplumber.open(path) as pdf:
            for page in pdf.pages:
                raw = page.extract_text(x_tolerance=2, y_tolerance=3) or ""
                converted = VNI_TO_UNICODE(raw)
                for raw_line in converted.splitlines():
                    line = clean_vietnamese_line(raw_line)
                    if not line or sum(character.isalpha() for character in line) < 2:
                        continue
                    if is_chord_row(line) or is_vietnamese_metadata(line, metadata_keys):
                        continue
                    refrain = re.match(r"^(?:ĐK|ÐK|DK)\s*[.:：)]*\s*(.*)$", line, re.I)
                    if refrain:
                        current_kind = "refrain"
                        tail = clean_vietnamese_line(refrain.group(1))
                        if tail:
                            sections.refrain.append(tail)
                        continue
                    fragments = split_numbered_fragments(line)
                    if fragments:
                        for number, text in fragments:
                            sections.verses.setdefault(number, []).append(text)
                            current_kind = "verse"
                            current_number = number
                        continue
                    letters = sum(character.isalpha() for character in line)
                    symbols = sum(not (character.isalnum() or character.isspace() or character in ",.!?;:'()-") for character in line)
                    if symbols > max(3, letters // 3):
                        continue
                    if current_kind == "refrain":
                        sections.refrain.append(line)
                    elif current_kind == "verse" and current_number:
                        sections.verses.setdefault(current_number, []).append(line)
                    else:
                        sections.loose.append(line)
        sections.loose = unique_lines(sections.loose)
        sections.refrain = unique_lines(sections.refrain)
        for number in list(sections.verses):
            sections.verses[number] = unique_lines(sections.verses[number])
            if not sections.verses[number]:
                del sections.verses[number]
        if not sections.has_content() or sections.letter_count() < 8:
            return identifier, None, f"No usable lyrics extracted: {path}"
        return identifier, sections, ""
    except Exception as error:
        return identifier, None, f"{type(error).__name__}: {error} ({path})"


def joined(lines: list[str]) -> str:
    return compact(" ".join(unique_lines(lines)))


def serialize_sections(sections: LyricSections, language: str) -> tuple[str, list[dict], str]:
    marker = VIETNAMESE_MARKER if language == "VN" else KOREAN_MARKER
    paragraphs: list[str] = []
    structured: list[dict] = []

    intro = joined(sections.intro)
    loose = joined(sections.loose)
    if intro:
        paragraphs.append(intro)
        structured.append({"label": "도입", "text": intro})

    has_refrain = bool(joined(sections.refrain))
    for number in sorted(sections.verses):
        text = joined(sections.verses[number])
        if not text:
            continue
        marked = text + (f" {marker}" if has_refrain else "")
        paragraphs.append(f"{number}. {marked}")
        structured.append({"label": f"{number}절", "text": marked})

    if not sections.verses and loose:
        paragraphs.append(loose)
        structured.append({"label": "가사", "text": loose})
    elif loose:
        paragraphs.insert(0, loose)
        structured.insert(0, {"label": "도입", "text": loose})

    refrain = joined(sections.refrain)
    if refrain:
        if language == "VN":
            refrain_lines = refrain.splitlines()
            paragraphs.append("ĐK. " + refrain_lines[0] + ("\n" + "\n".join(refrain_lines[1:]) if len(refrain_lines) > 1 else ""))
        else:
            paragraphs.append(f"{KOREAN_MARKER}\n{refrain}")
        structured.append({"label": "후렴", "text": refrain})

    lyrics = "\n\n".join(paragraph for paragraph in paragraphs if paragraph.strip()).strip()
    first_line = ""
    for verse in structured:
        if verse["label"] == "후렴" and len(structured) > 1:
            continue
        first_line = strip_end_marker(verse["text"].splitlines()[0])
        if first_line:
            break
    return lyrics, structured, first_line


def sanitize_vietnamese_fallback(sections: LyricSections) -> LyricSections:
    def clean(lines: list[str]) -> list[str]:
        output: list[str] = []
        for value in lines:
            line = PRIVATE_USE.sub("", compact(value)).replace("|", " ").replace("€", "c").replace("œ", "o")
            line = re.sub(r"[=_/§†¿`@$\\¬¡^#{}~*&⁄£%‡®]", " ", line)
            line = re.sub(r"\b\d+\b", " ", line)
            line = re.sub(r"(?<!\w)[B-DF-HJ-NP-TV-Zb-df-hj-np-tv-z](?!\w)", " ", line)
            line = re.sub(r"\s*[—–]+\s*", " ", line)
            line = compact(line)
            if re.search(r"(?:EEEE|&°P|\$8\s*lz|\bBI\?\s*Ð\b)", line, re.I):
                continue
            letters = sum(character.isalpha() for character in line)
            symbols = sum(
                not (character.isalnum() or character.isspace() or character in ",.!?;:'()-")
                for character in line
            )
            if letters < 3 or symbols > max(3, letters // 3):
                continue
            output.append(line)
        return unique_lines(output)

    return LyricSections(
        verses=OrderedDict((number, clean(lines)) for number, lines in sections.verses.items() if clean(lines)),
        refrain=clean(sections.refrain),
        intro=clean(sections.intro),
        loose=clean(sections.loose),
    )


def repair_vietnamese_diacritics(
    current: LyricSections, native: LyricSections
) -> tuple[LyricSections, int]:
    replacements = 0

    def align(current_lines: list[str], native_lines: list[str]) -> list[str]:
        nonlocal replacements
        if not current_lines or not native_lines or any(PRIVATE_USE.search(line) for line in native_lines):
            return current_lines
        current_text = joined(current_lines)
        native_text = joined(native_lines)
        current_words = list(re.finditer(r"[^\W\d_]+", current_text, flags=re.UNICODE))
        native_words = list(re.finditer(r"[^\W\d_]+", native_text, flags=re.UNICODE))
        matcher = difflib.SequenceMatcher(
            None,
            [comparable(match.group(0)) for match in current_words],
            [comparable(match.group(0)) for match in native_words],
            autojunk=False,
        )
        word_replacements: dict[int, str] = {}
        for current_start, native_start, size in matcher.get_matching_blocks():
            for offset in range(size):
                current_word = current_words[current_start + offset].group(0)
                native_word = native_words[native_start + offset].group(0)
                if current_word != native_word:
                    word_replacements[current_start + offset] = native_word
                    replacements += 1
        if not word_replacements:
            return current_lines
        output: list[str] = []
        cursor = 0
        for index, match in enumerate(current_words):
            output.append(current_text[cursor : match.start()])
            output.append(word_replacements.get(index, match.group(0)))
            cursor = match.end()
        output.append(current_text[cursor:])
        return ["".join(output)]

    repaired = LyricSections(
        verses=OrderedDict(
            (number, align(lines, native.verses.get(number, [])))
            for number, lines in current.verses.items()
        ),
        refrain=align(current.refrain, native.refrain),
        intro=align(current.intro, native.intro),
        loose=align(current.loose, native.loose),
    )
    return repaired, replacements


def vietnamese_section_usable(native: list[str], current: list[str], ratio: float = 0.97) -> bool:
    if not native or any(PRIVATE_USE.search(line) for line in native):
        return False
    native_letters = sum(character.isalpha() for line in native for character in line)
    current_letters = sum(character.isalpha() for line in current for character in line)
    return native_letters >= max(3, current_letters * ratio)


def merge_vietnamese_native(
    current: LyricSections, native: LyricSections
) -> tuple[LyricSections, int, int]:
    merged, replacements = repair_vietnamese_diacritics(current, native)
    native_sections = 0
    for number, current_lines in list(merged.verses.items()):
        native_lines = native.verses.get(number, [])
        if vietnamese_section_usable(native_lines, current_lines):
            merged.verses[number] = unique_lines(native_lines)
            native_sections += 1
    if vietnamese_section_usable(native.refrain, merged.refrain):
        merged.refrain = unique_lines(native.refrain)
        native_sections += 1
    return sanitize_vietnamese_fallback(merged), replacements, native_sections


def sanitize_korean_fallback(sections: LyricSections) -> LyricSections:
    def clean(lines: list[str]) -> list[str]:
        output: list[str] = []
        for value in lines:
            line = compact(value)
            line = re.sub(r"\bD\s*\.\s*[SC]\s*\.\s*(?:al\s*)?(?:Fine|Coda)?\b", " ", line, flags=re.I)
            line = re.sub(r"\b(?:Fine|Coda|Segno)\b", " ", line, flags=re.I)
            line = re.sub(
                r"(?:permission\.?\s*)?(?:Authorised|Authorized)KoreantranslationapprovedbyCopyCareKorea\.?",
                " ",
                line,
                flags=re.I,
            )
            line = re.sub(r"(?:원\s*)?All\s*right\s*reserved\.?", " ", line, flags=re.I)
            line = re.sub(r"\s*일반\s*성가\s*$", "", line)
            line = compact(line)
            if line and sum(character.isalpha() for character in line) >= 2:
                output.append(line)
        return unique_lines(output)

    cleaned_verses: OrderedDict[int, list[str]] = OrderedDict()
    for lines in sections.verses.values():
        cleaned = clean(lines)
        if cleaned:
            cleaned_verses[len(cleaned_verses) + 1] = cleaned
    return LyricSections(
        verses=cleaned_verses,
        refrain=clean(sections.refrain),
        intro=clean(sections.intro),
        loose=clean(sections.loose),
    )


def looks_like_lyric_alias(alias: str, previous_first_line: str) -> bool:
    value = compact(alias)
    return bool(
        re.match(r"^(?:[1-9]\s*[.)]|\[?(?:후렴|ĐK|DK)\]?[.:]?)\s*", value, re.I)
        or (previous_first_line and comparable(previous_first_line) in comparable(value))
    )


def apply_sections(entry: dict, sections: LyricSections, language: str) -> bool:
    lyrics, verses, first_line = serialize_sections(sections, language)
    previous = (entry.get("lyrics"), entry.get("text"), entry.get("verses"), entry.get("firstLine"))
    previous_first_line = compact(str(entry.get("firstLine") or ""))
    entry["lyrics"] = lyrics
    entry["text"] = lyrics
    entry["verses"] = verses
    entry["firstLine"] = first_line
    aliases = [
        compact(str(alias))
        for alias in (entry.get("searchAliases") or [])
        if compact(str(alias)) and not looks_like_lyric_alias(str(alias), previous_first_line)
    ]
    if first_line and first_line not in aliases:
        aliases.append(first_line)
    if isinstance(entry.get("searchAliases"), list):
        entry["searchAliases"] = aliases
    current = (entry.get("lyrics"), entry.get("text"), entry.get("verses"), entry.get("firstLine"))
    return current != previous


def clean_yahweh(entries: list[dict]) -> dict:
    catholic_by_title: dict[str, list[dict]] = {}
    catholic_by_number: dict[int, dict] = {}
    for entry in entries:
        if str(entry.get("id", "")).startswith("kr-catholic-"):
            catholic_by_title.setdefault(comparable(str(entry.get("title") or "")), []).append(entry)
            if str(entry.get("number") or "").isdigit():
                catholic_by_number[int(entry["number"])] = entry

    changed = 0
    copied_from_catholic = 0
    sanitized_standalone = 0
    for entry in entries:
        if not str(entry.get("id", "")).startswith("kr-yj-"):
            continue
        catholic_match = None
        for alias in entry.get("searchAliases") or []:
            match = re.search(r"가톨릭성가\s*0*(\d+)", str(alias))
            if match and int(match.group(1)) in catholic_by_number:
                catholic_match = catholic_by_number[int(match.group(1))]
                break
        matches = catholic_by_title.get(comparable(str(entry.get("title") or "")), [])
        if catholic_match is None and len(matches) == 1:
            catholic_match = matches[0]
        if catholic_match is not None and str(catholic_match.get("lyrics") or "").strip():
            sections = parse_existing(str(catholic_match["lyrics"]))
            copied_from_catholic += 1
        else:
            sections = sanitize_korean_fallback(parse_existing(str(entry.get("lyrics") or "")))
            sanitized_standalone += 1
        if sections.has_content() and apply_sections(entry, sections, "KR"):
            changed += 1
    return {
        "targets": sum(str(entry.get("id", "")).startswith("kr-yj-") for entry in entries),
        "changed": changed,
        "copiedFromCatholic": copied_from_catholic,
        "sanitizedStandalone": sanitized_standalone,
    }


def clean_korean(entries: list[dict], workers: int) -> dict:
    catholic = [entry for entry in entries if str(entry.get("id", "")).startswith("kr-catholic-")]
    numbers = [int(entry["number"]) for entry in catholic if str(entry.get("number", "")).isdigit()]
    fetched: dict[int, LyricSections] = {}
    errors: list[str] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, workers)) as executor:
        for number, sections, error in executor.map(fetch_goodnews, numbers):
            if sections is not None:
                fetched[number] = sections
            if error:
                errors.append(f"{number:03d}: {error}")

    changed = 0
    official = 0
    preserved = []
    blank_no_fixed_text = []
    for entry in catholic:
        number = int(entry["number"])
        current_text = str(entry.get("lyrics") or "")
        current = parse_existing(current_text)
        candidate = fetched.get(number)
        if number in KOREAN_SCORE_FALLBACKS:
            candidate = parse_existing(KOREAN_SCORE_FALLBACKS[number])
        if candidate and any("가사를 자유롭게 사용" in line for line in [*candidate.loose, *candidate.intro]):
            candidate = LyricSections()
            blank_no_fixed_text.append(entry["id"])
        use_official = False
        if candidate is not None:
            use_official = (
                number in KOREAN_SCORE_FALLBACKS
                or
                not current.has_content()
                or korean_ocr_contaminated(current_text)
                or len(candidate.verses) >= len(current.verses)
            )
        if use_official:
            chosen = candidate
            official += 1
        else:
            chosen = current
            if candidate is not None and len(candidate.verses) < len(current.verses):
                preserved.append(entry["id"])
        if apply_sections(entry, chosen, "KR"):
            changed += 1

    yahweh = clean_yahweh(entries)

    return {
        "catholic": len(catholic),
        "officialApplied": official,
        "catholicChanged": changed,
        "yahweh": yahweh,
        "preservedLongerExisting": preserved,
        "blankNoFixedText": blank_no_fixed_text,
        "fetchErrors": errors,
    }


def clean_vietnamese(entries: list[dict], workers: int) -> dict:
    targets = [entry for entry in entries if str(entry.get("id", "")).startswith("vn-tcvn2-")]
    paths_by_name: dict[str, list[Path]] = {}
    for path in TCVN2_ROOT.rglob("*.pdf"):
        paths_by_name.setdefault(path.name.casefold(), []).append(path)

    tasks: list[tuple[str, str, tuple[str, ...]]] = []
    missing: list[str] = []
    ambiguous: list[str] = []
    for entry in targets:
        name = str(entry.get("originalFileName") or "")
        matches = paths_by_name.get(name.casefold(), [])
        if len(matches) == 1:
            metadata_values = (
                str(entry.get("title") or ""),
                str(entry.get("composer") or ""),
                str(entry.get("lyricist") or ""),
                str(entry.get("arranger") or ""),
                Path(name).stem.rsplit(" - ", 1)[0],
            )
            tasks.append((str(entry["id"]), str(matches[0]), metadata_values))
        elif not matches:
            missing.append(str(entry["id"]))
        else:
            ambiguous.append(str(entry["id"]))

    extracted: dict[str, LyricSections] = {}
    errors: list[str] = []
    with concurrent.futures.ProcessPoolExecutor(max_workers=max(1, workers)) as executor:
        for identifier, sections, error in executor.map(extract_tcvn2_pdf, tasks, chunksize=2):
            if sections is not None:
                extracted[identifier] = sections
            if error:
                errors.append(f"{identifier}: {error}")

    changed = 0
    fallback = []
    fewer_verses = []
    rejected_quality = []
    accent_repairs = 0
    native_sections_used = 0
    for entry in targets:
        identifier = str(entry["id"])
        current_text = str(entry.get("lyrics") or "")
        for before, after in VIETNAMESE_TEXT_REPLACEMENTS.get(identifier, ()):
            current_text = current_text.replace(before, after)
        if identifier in VIETNAMESE_SCORE_FALLBACKS:
            current_text = VIETNAMESE_SCORE_FALLBACKS[identifier]
        current = sanitize_vietnamese_fallback(parse_existing(current_text))
        candidate = None if identifier in VIETNAMESE_SCORE_FALLBACKS else extracted.get(identifier)
        candidate_is_complete = bool(candidate)
        if candidate is not None and current.verses:
            candidate_is_complete = set(candidate.verses) == set(current.verses)
            candidate_is_complete = candidate_is_complete and bool(candidate.refrain) == bool(current.refrain)
            candidate_is_complete = candidate_is_complete and not candidate.loose and not candidate.intro
            candidate_is_complete = candidate_is_complete and candidate.letter_count() >= current.letter_count() * 0.97
            candidate_is_complete = candidate_is_complete and not any(
                PRIVATE_USE.search(line)
                for line in [*candidate.intro, *candidate.loose, *candidate.refrain]
                + [line for lines in candidate.verses.values() for line in lines]
            )
        if candidate is None or not candidate_is_complete:
            if candidate is not None:
                current, repaired, used = merge_vietnamese_native(current, candidate)
                accent_repairs += repaired
                native_sections_used += used
            candidate = current
            fallback.append(identifier)
            if identifier in extracted:
                rejected_quality.append(identifier)
        elif len(candidate.verses) < len(current.verses):
            fewer_verses.append(identifier)
        if apply_sections(entry, candidate, "VN"):
            changed += 1
    return {
        "targets": len(targets),
        "pdfTasks": len(tasks),
        "nativeExtracted": len(extracted),
        "changed": changed,
        "missingPdf": missing,
        "ambiguousPdf": ambiguous,
        "fallbackExisting": fallback,
        "nativeRejectedQuality": rejected_quality,
        "nativeFewerVerses": fewer_verses,
        "accentRepairs": accent_repairs,
        "nativeSectionsUsed": native_sections_used,
        "extractErrors": errors,
    }


def validate(korean: list[dict], vietnamese: list[dict]) -> dict:
    targets = [
        *[entry for entry in korean if str(entry.get("id", "")).startswith(("kr-catholic-", "kr-yj-"))],
        *[entry for entry in vietnamese if str(entry.get("id", "")).startswith("vn-tcvn2-")],
    ]
    mismatched = [entry["id"] for entry in targets if str(entry.get("lyrics") or "") != str(entry.get("text") or "")]
    missing_structure = [
        entry["id"]
        for entry in targets
        if str(entry.get("lyrics") or "").strip() and not (entry.get("verses") or [])
    ]
    bad_markers: list[str] = []
    metadata: list[str] = []
    vietnamese_noise: list[str] = []
    for entry in targets:
        identifier = str(entry.get("id", ""))
        lyrics = str(entry.get("lyrics") or "")
        marker = VIETNAMESE_MARKER if identifier.startswith("vn-") else KOREAN_MARKER
        sections = parse_existing(lyrics)
        if sections.refrain and any(not verse.get("text", "").rstrip().endswith(marker) for verse in entry.get("verses", []) if re.fullmatch(r"\d+절", str(verse.get("label", "")))):
            bad_markers.append(identifier)
        if identifier.startswith(("kr-catholic-", "kr-yj-")) and KOREAN_STRICT_METADATA.search(lyrics):
            metadata.append(identifier)
        if identifier.startswith("vn-tcvn2-") and re.search(r"(?:UY|UỶ|ỦY) BAN THÁNH NHẠC|(?:Lời|Nhạc)\s*:", lyrics, re.I):
            metadata.append(identifier)
        structured_text = " ".join(str(verse.get("text") or "") for verse in entry.get("verses") or [])
        if identifier.startswith("vn-tcvn2-") and (
            PRIVATE_USE.search(lyrics)
            or re.search(r"(?:EEEE|\|2\s*\$|&°P|œ|€|[=_/§†¿`@$\\¬¡^#{}~*&⁄£%‡®])", structured_text)
            or re.search(r"\b\d+\b", structured_text)
        ):
            vietnamese_noise.append(identifier)

    failures = {
        "lyricsTextMismatch": mismatched,
        "missingStructure": missing_structure,
        "badRefrainMarkers": bad_markers,
        "metadataInLyrics": metadata,
        "obviousVietnameseNoise": vietnamese_noise,
    }
    active_failures = {key: value for key, value in failures.items() if value}
    if active_failures:
        raise RuntimeError(json.dumps(active_failures, ensure_ascii=False, indent=2))
    return {
        "koreanCatholic": sum(str(entry.get("id", "")).startswith("kr-catholic-") for entry in korean),
        "koreanYahwehJireh": sum(str(entry.get("id", "")).startswith("kr-yj-") for entry in korean),
        "vietnameseVolume2": sum(str(entry.get("id", "")).startswith("vn-tcvn2-") for entry in vietnamese),
        "structuredNonempty": sum(bool(entry.get("verses")) for entry in targets if str(entry.get("lyrics") or "").strip()),
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Clean Korean and TCVN2 hymn lyrics")
    parser.add_argument("--check", action="store_true", help="Validate without changing files")
    parser.add_argument("--vietnamese-only", action="store_true", help="Rebuild only TCVN2 without network requests")
    parser.add_argument("--workers", type=int, default=6)
    args = parser.parse_args()

    korean_source, korean, korean_start, korean_end = load_module(KOREAN_DATA)
    vietnamese_source, vietnamese, vietnamese_start, vietnamese_end = load_module(VIETNAMESE_DATA)
    if args.check:
        print(json.dumps(validate(korean, vietnamese), ensure_ascii=False, indent=2))
        return

    if args.vietnamese_only:
        report = {"vietnamese": clean_vietnamese(vietnamese, args.workers)}
    else:
        report = {
            "korean": clean_korean(korean, args.workers),
            "vietnamese": clean_vietnamese(vietnamese, args.workers),
        }
    report["validation"] = validate(korean, vietnamese)
    if not args.vietnamese_only:
        save_module(KOREAN_DATA, korean_source, korean, korean_start, korean_end)
    save_module(VIETNAMESE_DATA, vietnamese_source, vietnamese, vietnamese_start, vietnamese_end)
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
