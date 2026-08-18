from __future__ import annotations

import argparse
import json
import re
import unicodedata
from collections import Counter, OrderedDict
from pathlib import Path

import pdfplumber
import pypdfium2 as pdfium


ROOT = Path(__file__).resolve().parents[1]
HYMN_DATA = ROOT / "JS file" / "hymn_data.js"
YAHWEH_MARKER = "야훼이레"
YAHWEH_PREFIX = "kr-yj-"
VIETNAMESE_VOLUME_1_PREFIX = "vn-tcvn1-"
VIETNAMESE_VOLUME_2_PREFIX = "vn-tcvn2-"
VIETNAMESE_PREFIXES = (VIETNAMESE_VOLUME_1_PREFIX, VIETNAMESE_VOLUME_2_PREFIX)
KOREAN_REFRAIN = "[후렴]"
VIETNAMESE_REFRAIN = "[ĐK]"
ENGLISH_REFRAIN = "[R.]"
JAPANESE_REFRAIN = "[コーラス]"
YAHWEH_VISUAL_FALLBACKS = {
    92: "나의 주님 나의 하느님. 나의 주님 나의 하느님.",
    111: "아멘, 아멘.",
    112: "아멘, 아멘, 아멘.",
    113: "아멘, 아멘, 아멘, 아멘.",
    114: "아멘, 아멘, 아멘, 아멘.",
    115: "아멘, 아멘, 아멘, 아멘, 아멘, 아멘.",
    225: "주여 주여 들어주소서.",
}

LEFT_TITLE_MAX_X = 95
TOP_TITLE_Y_MIN = 700
LYRIC_TOP_PADDING = 28
NEXT_TITLE_PADDING = 8
ROW_TOLERANCE = 4.0
VERSE_ROW_GAP = 18.0


def hymn_array_bounds(text: str) -> tuple[int, int]:
    marker = "const hymnData"
    start = text.index("[", text.index(marker))
    depth = 0
    in_string = False
    escaped = False
    for index in range(start, len(text)):
        character = text[index]
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
    raise ValueError("Could not locate the hymnData array")


def load_hymn_data() -> tuple[str, list[dict], int, int]:
    source = HYMN_DATA.read_text(encoding="utf-8")
    start, end = hymn_array_bounds(source)
    return source, json.loads(source[start:end]), start, end


def save_hymn_data(source: str, entries: list[dict], start: int, end: int) -> None:
    body = json.dumps(entries, ensure_ascii=False, indent=2)
    body = body.replace("\u2028", "\\u2028").replace("\u2029", "\\u2029")
    HYMN_DATA.write_text(source[:start] + body + source[end:], encoding="utf-8")


def compact_spaces(value: str) -> str:
    return re.sub(r"[ \t]+", " ", value or "").strip()


def normalized_lines(value: str) -> list[str]:
    lines = []
    for raw_line in (value or "").replace("\r\n", "\n").replace("\r", "\n").split("\n"):
        line = compact_spaces(raw_line)
        if line:
            lines.append(line)
    return lines


def first_lyric_line(value: str) -> str:
    for line in normalized_lines(value):
        if line in {KOREAN_REFRAIN, "ĐK.", ENGLISH_REFRAIN, JAPANESE_REFRAIN}:
            continue
        line = re.sub(r"^\d+\s*[.)]\s*", "", line).strip()
        if line:
            return line
    return ""


def find_yahweh_pdf() -> Path:
    preferred = ROOT / "참고자료" / "성가" / "야훼이레 (신판).pdf"
    if preferred.exists():
        return preferred
    candidates = sorted(ROOT.rglob("*.pdf"))
    for path in candidates:
        if YAHWEH_MARKER in path.name:
            return path
    raise FileNotFoundError("The Yahweh Jireh source PDF was not found")


def line_title_starts(pdf_path: Path) -> list[dict]:
    pdf = pdfium.PdfDocument(str(pdf_path))
    starts = []
    for page_number in range(1, len(pdf) + 1):
        page = pdf[page_number - 1]
        text_page = page.get_textpage()
        text = text_page.get_text_range(0, text_page.count_chars())
        char_index = 0
        for raw_line in text.splitlines(True):
            line = raw_line.strip()
            start_index = char_index
            char_index += len(raw_line)
            match = re.match(r"^(\d{1,3})\.\s+(.+?)\s*$", line)
            if not match:
                continue
            boxes = []
            for index in range(start_index, min(start_index + len(raw_line), text_page.count_chars())):
                character = text_page.get_text_range(index, 1)
                if character in "\r\n\t ":
                    continue
                try:
                    boxes.append(text_page.get_charbox(index))
                except Exception:
                    pass
            if not boxes:
                continue
            x0 = min(box[0] for box in boxes)
            if x0 > LEFT_TITLE_MAX_X:
                continue
            starts.append(
                {
                    "number": int(match.group(1)),
                    "page": page_number,
                    "y1": max(box[3] for box in boxes),
                }
            )
    ordered = sorted(starts, key=lambda item: (item["page"], -item["y1"], item["number"]))
    unique: OrderedDict[int, dict] = OrderedDict()
    for item in ordered:
        unique.setdefault(item["number"], item)
    return list(unique.values())


def song_page_crops(starts: list[dict], index: int, pages: list) -> list[tuple[int, float, float]]:
    start = starts[index]
    next_start = starts[index + 1] if index + 1 < len(starts) else None
    start_page = start["page"]
    top = pages[start_page - 1].height - start["y1"] + LYRIC_TOP_PADDING
    crops: list[tuple[int, float, float]] = []

    if next_start and next_start["page"] == start_page:
        bottom = pages[start_page - 1].height - next_start["y1"] - NEXT_TITLE_PADDING
        if bottom > top:
            crops.append((start_page, top, bottom))
        return crops

    last_page = len(pages) if next_start is None else next_start["page"] - 1
    crops.append((start_page, top, pages[start_page - 1].height))
    for page_number in range(start_page + 1, last_page + 1):
        crops.append((page_number, 0, pages[page_number - 1].height))
    if next_start and next_start["page"] > start_page and next_start["y1"] < TOP_TITLE_Y_MIN:
        page_number = next_start["page"]
        bottom = pages[page_number - 1].height - next_start["y1"] - NEXT_TITLE_PADDING
        if bottom > 0:
            crops.append((page_number, 0, bottom))
    return crops


def is_music_token_row(tokens: list[str]) -> bool:
    if not tokens:
        return True
    chord = re.compile(r"^[A-G](?:[#b])?(?:m|maj|min|dim|aug|sus)?\d*(?:/[A-G][#b]?)?$", re.I)
    return len(tokens) <= 8 and all(chord.fullmatch(token.strip()) for token in tokens)


def clean_lyric_row(tokens: list[str], spacer) -> str:
    tokens = [compact_spaces(token) for token in tokens if compact_spaces(token)]
    if is_music_token_row(tokens):
        return ""
    joined = "".join(tokens)
    joined = unicodedata.normalize("NFC", joined)
    joined = re.sub(r"\(cid:\d+\)", "", joined, flags=re.I)
    joined = re.split(r"(?:Copyright|Administered\s*by|Used\s*by\s*permission)", joined, maxsplit=1, flags=re.I)[0]
    joined = re.sub(r"[^0-9A-Za-zÀ-ɏ가-힣'’.,!?;:()\-/ ]+", " ", joined)
    joined = re.sub(r"[A-Gm0-9/#b]{4,}", "", joined)
    if re.search(r"[가-힣]", joined):
        joined = re.sub(r"^[A-Za-zÀ-ɏ ]{5,}(?=[가-힣])", "", joined)
    joined = re.sub(r"^\s*\d{1,2}\s*[.)-]?\s*", "", joined)
    joined = re.sub(r"\s*-\s*", "", joined)
    joined = compact_spaces(joined)
    hangul_count = len(re.findall(r"[가-힣]", joined))
    latin_count = len(re.findall(r"[A-Za-zÀ-ɏ]", joined))
    if hangul_count < 2 and latin_count < 8:
        return ""
    if hangul_count >= 2 and spacer is not None:
        try:
            joined = compact_spaces(spacer.space(joined.replace(" ", "")))
        except Exception:
            pass
    joined = re.sub(r"\s+([,.!?;:])", r"\1", joined)
    return joined.strip(" -")


def extract_crop_rows(page, top: float, bottom: float, spacer) -> list[dict]:
    crop = page.crop((0, max(0, top), page.width, min(page.height, bottom)))
    words = crop.extract_words(x_tolerance=1.5, y_tolerance=3, use_text_flow=False) or []
    words.sort(key=lambda word: (float(word["top"]), float(word["x0"])))
    grouped: list[list[dict]] = []
    for word in words:
        if not grouped or abs(float(word["top"]) - float(grouped[-1][0]["top"])) > ROW_TOLERANCE:
            grouped.append([word])
        else:
            grouped[-1].append(word)
    rows = []
    for group in grouped:
        group.sort(key=lambda word: float(word["x0"]))
        text = clean_lyric_row([str(word["text"]) for word in group], spacer)
        if text:
            rows.append({"top": float(group[0]["top"]), "text": text})
    return rows


def lyric_blocks(rows_by_page: list[list[dict]]) -> list[list[str]]:
    blocks: list[list[str]] = []
    for rows in rows_by_page:
        current: list[dict] = []
        for row in rows:
            if current and row["top"] - current[-1]["top"] > VERSE_ROW_GAP:
                blocks.append([item["text"] for item in current])
                current = []
            current.append(row)
        if current:
            blocks.append([item["text"] for item in current])
    return blocks


def comparable_text(value: str) -> str:
    return re.sub(r"[^0-9a-z가-힣]+", "", (value or "").lower())


def sanitize_song_blocks(blocks: list[list[str]], title: str) -> list[list[str]]:
    title_key = comparable_text(re.sub(r"\[[^]]+\]", "", title or ""))
    cleaned: list[list[str]] = []
    all_lines = [line for block in blocks for line in block]
    has_hangul = any(re.search(r"[가-힣]", line) for line in all_lines)
    seen_hangul = False
    for block in blocks:
        output = []
        for line in block:
            line_key = comparable_text(line)
            if title_key and line_key and len(line_key) <= len(title_key) + 8:
                if line_key in title_key or title_key in line_key:
                    continue
            line_has_hangul = bool(re.search(r"[가-힣]", line))
            if has_hangul and not seen_hangul and not line_has_hangul:
                continue
            if line_has_hangul:
                seen_hangul = True
            output.append(line)
        if output:
            cleaned.append(output)
    return cleaned


def join_unique(parts: list[str]) -> str:
    output = []
    for part in parts:
        part = compact_spaces(part)
        if part and (not output or output[-1] != part):
            output.append(part)
    return compact_spaces(" ".join(output))


def assemble_yahweh_lyrics(blocks: list[list[str]]) -> tuple[str, bool]:
    sizes = [len(block) for block in blocks if 2 <= len(block) <= 8]
    if not sizes:
        text = join_unique([line for block in blocks for line in block])
        return text, False
    frequency = Counter(sizes)
    verse_count = max(frequency, key=lambda size: (frequency[size], size))
    verses: list[list[str]] = [[] for _ in range(verse_count)]
    refrain: list[str] = []
    for block in blocks:
        if len(block) == 1:
            refrain.append(block[0])
        elif len(block) >= 2:
            for verse_index, line in enumerate(block[:verse_count]):
                verses[verse_index].append(line)
    verse_texts = [join_unique(parts) for parts in verses]
    verse_texts = [text for text in verse_texts if text]
    refrain_text = join_unique(refrain)
    if len(verse_texts) < 2:
        text = join_unique([line for block in blocks for line in block])
        return text, False
    has_refrain = bool(refrain_text)
    output = []
    for index, verse in enumerate(verse_texts, 1):
        suffix = f" {KOREAN_REFRAIN}" if has_refrain else ""
        output.append(f"{index}. {verse}{suffix}")
    if has_refrain:
        output.append(f"{KOREAN_REFRAIN}\n{refrain_text}")
    return "\n\n".join(output), has_refrain


def make_korean_spacer():
    try:
        from kiwipiepy import Kiwi

        return Kiwi()
    except Exception:
        return None


def space_compact_hangul(value: str, spacer) -> str:
    if spacer is None:
        return value

    def expand(match: re.Match) -> str:
        source = match.group(0)
        try:
            tokens = spacer.tokenize(source)
        except Exception:
            return source
        positions: dict[int, list[bool]] = {}
        for token in tokens:
            form = str(token.form)
            tag = str(token.tag)
            attach = tag.startswith(("J", "E", "X")) or tag in {"VCP", "VCN"}
            attach = attach or bool(re.fullmatch(r"[\u1100-\u11ff]+", form))
            position = int(token.start)
            if position > 0:
                positions.setdefault(position, []).append(attach)
        boundaries = {position for position, attachment in positions.items() if not any(attachment)}
        return "".join((" " if index in boundaries else "") + character for index, character in enumerate(source))

    current = value or ""
    for _attempt in range(6):
        expanded = re.sub(r"[가-힣]{7,}", expand, current)
        if expanded == current:
            break
        current = expanded
    return current


def parse_yahweh_lyrics(entries: list[dict]) -> dict:
    pdf_path = find_yahweh_pdf()
    starts = line_title_starts(pdf_path)
    if len(starts) != 623:
        raise RuntimeError(f"Expected 623 Yahweh Jireh songs, found {len(starts)}")
    entry_by_number = {
        int(entry["number"]): entry
        for entry in entries
        if str(entry.get("id", "")).startswith(YAHWEH_PREFIX) and str(entry.get("number", "")).isdigit()
    }
    spacer = make_korean_spacer()
    filled = 0
    refrains = 0
    skipped_existing = 0
    empty_after_parse = []
    with pdfplumber.open(pdf_path) as pdf:
        for index, start in enumerate(starts):
            entry = entry_by_number.get(start["number"])
            if not entry:
                continue
            if compact_spaces(str(entry.get("lyrics", ""))):
                skipped_existing += 1
                continue
            rows_by_page = []
            for page_number, top, bottom in song_page_crops(starts, index, pdf.pages):
                rows_by_page.append(extract_crop_rows(pdf.pages[page_number - 1], top, bottom, spacer))
            blocks = sanitize_song_blocks(lyric_blocks(rows_by_page), str(entry.get("title", "")))
            lyrics, has_refrain = assemble_yahweh_lyrics(blocks)
            if not lyrics:
                empty_after_parse.append(start["number"])
                continue
            entry["lyrics"] = lyrics
            entry["text"] = lyrics
            entry["firstLine"] = first_lyric_line(lyrics)
            filled += 1
            refrains += int(has_refrain)
            if filled % 50 == 0:
                print(f"[YJ] Parsed {filled} previously empty songs", flush=True)
    unresolved = []
    for number in empty_after_parse:
        lyrics = YAHWEH_VISUAL_FALLBACKS.get(number, "")
        entry = entry_by_number.get(number)
        if not lyrics or not entry:
            unresolved.append(number)
            continue
        entry["lyrics"] = lyrics
        entry["text"] = lyrics
        entry["firstLine"] = first_lyric_line(lyrics)
        filled += 1
    return {
        "source": str(pdf_path.relative_to(ROOT)),
        "songs": len(starts),
        "filled": filled,
        "skippedExisting": skipped_existing,
        "refrains": refrains,
        "emptyAfterParse": unresolved,
    }


def accentless(value: str) -> str:
    normalized = unicodedata.normalize("NFKD", (value or "").replace("Đ", "D").replace("đ", "d"))
    return "".join(character for character in normalized if not unicodedata.combining(character))


def split_vietnamese_refrain(line: str) -> tuple[str, str] | None:
    marker = re.compile(
        r"(?i)(?<![A-Za-zÀ-ɏ])(?:\[\s*)?(?:ĐK|ÐK|DK|Điệp\s+(?:khúc|ca))(?:\s*\])?\s*[.:)\]-]*\s*"
    )
    match = marker.search(line)
    if not match:
        return None
    return compact_spaces(line[: match.start()]), compact_spaces(line[match.end() :])


def is_ocr_noise(line: str) -> bool:
    letters = len(re.findall(r"[A-Za-zÀ-ɏ]", line))
    symbols = len(re.findall(r"[^A-Za-zÀ-ɏ0-9\s]", line))
    return (
        (letters < 7 and symbols >= 3)
        or (letters < 4 and len(line) < 20)
        or (symbols >= 5 and letters / max(letters + symbols, 1) < 0.6)
    )


def normalize_vietnamese_lyrics(value: str) -> tuple[str, bool]:
    original_has_marker = VIETNAMESE_REFRAIN in (value or "")
    lines = normalized_lines(value or "")
    verses: OrderedDict[int, list[str]] = OrderedDict()
    refrain: list[str] = []
    current_kind = ""
    current_verse = 0
    detected_refrain = False

    def append_content(line: str) -> None:
        nonlocal current_kind, current_verse
        verse_match = re.match(r"^\s*([1-9])\s*(?:[.)-]\s*)?(?=[^0-9\s])(.+)$", line)
        if verse_match:
            current_verse = int(verse_match.group(1))
            current_kind = "verse"
            fragment = compact_spaces(verse_match.group(2))
            if fragment and not is_ocr_noise(fragment):
                verses.setdefault(current_verse, []).append(fragment)
            return
        if is_ocr_noise(line):
            return
        if current_kind == "verse" and current_verse:
            verses.setdefault(current_verse, []).append(line)
        elif current_kind == "refrain":
            refrain.append(line)

    for line in lines:
        split = split_vietnamese_refrain(line)
        if split is None:
            append_content(line)
            continue
        before, tail = split
        if before:
            append_content(before)
        detected_refrain = True
        current_kind = "refrain"
        if tail and not is_ocr_noise(tail):
            refrain.append(tail)

    has_refrain = detected_refrain and bool(refrain)
    if not verses or 1 not in verses:
        cleaned = "\n".join(lines)
        return cleaned, has_refrain or original_has_marker

    output = []
    for number in sorted(verses):
        parts = [part for part in verses[number] if part]
        if not parts:
            continue
        parts[0] = f"{number}. {parts[0]}"
        if has_refrain:
            parts[-1] = re.sub(r"\s*\[ĐK\]\s*$", "", parts[-1]).rstrip() + f" {VIETNAMESE_REFRAIN}"
        output.append("\n".join(parts))
    if has_refrain:
        output.append("ĐK. " + "\n".join(refrain))
    return "\n\n".join(output), has_refrain


def normalize_korean_refrain(value: str) -> tuple[str, bool]:
    if "후렴" not in (value or ""):
        return value or "", False
    lines = normalized_lines(value)
    output: list[dict] = []
    current: dict | None = None
    has_heading = False
    for line in lines:
        if line.strip() == KOREAN_REFRAIN:
            has_heading = True
            current = {"kind": "refrain", "lines": []}
            output.append(current)
            continue
        line = line.replace(KOREAN_REFRAIN, "").strip()
        heading = re.match(r"^\s*\(?후렴\)?\s*[.)：:;-]*\s*(.*)$", line)
        if heading:
            has_heading = True
            current = {"kind": "refrain", "lines": []}
            output.append(current)
            tail = compact_spaces(heading.group(1))
            if tail:
                current["lines"].append(tail)
            continue
        verse = re.match(r"^\s*(\d+)\s*[.)]\s*(.*)$", line)
        if verse:
            current = {"kind": "verse", "number": int(verse.group(1)), "lines": []}
            output.append(current)
            tail = compact_spaces(verse.group(2))
            if tail:
                current["lines"].append(tail)
            continue
        if current is not None and line:
            current["lines"].append(line)
    if not has_heading:
        return value or "", False
    paragraphs = []
    for section in output:
        if not section["lines"]:
            continue
        if section["kind"] == "refrain":
            paragraphs.append(KOREAN_REFRAIN + "\n" + "\n".join(section["lines"]))
        else:
            section["lines"][0] = f"{section['number']}. {section['lines'][0]}"
            section["lines"][-1] = section["lines"][-1].rstrip() + f" {KOREAN_REFRAIN}"
            paragraphs.append("\n".join(section["lines"]))
    return "\n\n".join(paragraphs), True


def append_marker_to_numbered_paragraphs(value: str, marker: str) -> str:
    paragraphs = value.split("\n\n")
    output = []
    for paragraph in paragraphs:
        paragraph = paragraph.strip()
        if re.match(r"^\d+\s*[.)]\s*", paragraph):
            paragraph = re.sub(rf"\s*{re.escape(marker)}\s*$", "", paragraph).rstrip() + f" {marker}"
        if paragraph:
            output.append(paragraph)
    return "\n\n".join(output)


def normalize_english_refrain(value: str) -> tuple[str, bool]:
    text = (value or "").replace("\r\n", "\n").replace("\r", "\n")
    heading = re.compile(r"(?im)^\s*(?:refrain|chorus|R\.)\s*[:.)-]*\s*")
    text = heading.sub(ENGLISH_REFRAIN + "\n", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    has_refrain = any(line.strip() == ENGLISH_REFRAIN for line in text.splitlines())
    if has_refrain:
        text = append_marker_to_numbered_paragraphs(text, ENGLISH_REFRAIN)
    return text, has_refrain


def normalize_japanese_refrain(value: str) -> tuple[str, bool]:
    text = (value or "").replace("\r\n", "\n").replace("\r", "\n")
    label = re.compile(r"【(?:答唱(?:[１２12])?|交唱)】\s*")
    text = label.sub(JAPANESE_REFRAIN + "\n", text)
    heading = re.compile(r"(?m)^\s*(?:[（(])?(?:コーラス|リフレイン|折り返し)(?:[）)])?\s*[：:.)-]*\s*")
    text = heading.sub(JAPANESE_REFRAIN + "\n", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text).strip()
    has_refrain = any(line.strip() == JAPANESE_REFRAIN for line in text.splitlines())
    return text, has_refrain


def normalize_existing_lyrics(entries: list[dict]) -> dict:
    vietnamese_changed = 0
    vietnamese_refrains = 0
    vietnamese_volume_1_refrains = 0
    vietnamese_volume_2_refrains = 0
    korean_changed = 0
    korean_refrains = 0
    english_changed = 0
    english_refrains = 0
    japanese_changed = 0
    japanese_refrains = 0
    korean_spacer = make_korean_spacer()
    for entry in entries:
        identifier = str(entry.get("id", ""))
        lyrics = str(entry.get("lyrics", "") or "")
        language = str(entry.get("language", ""))
        if identifier.startswith(VIETNAMESE_PREFIXES) and lyrics.strip():
            normalized = lyrics
            has_refrain = False
            for _attempt in range(4):
                candidate, has_refrain = normalize_vietnamese_lyrics(normalized)
                if candidate == normalized:
                    break
                normalized = candidate
            if normalized and normalized != lyrics:
                entry["lyrics"] = normalized
                entry["text"] = normalized
                entry["firstLine"] = first_lyric_line(normalized)
                vietnamese_changed += 1
            vietnamese_refrains += int(has_refrain)
            if identifier.startswith(VIETNAMESE_VOLUME_1_PREFIX):
                vietnamese_volume_1_refrains += int(has_refrain)
            else:
                vietnamese_volume_2_refrains += int(has_refrain)
        elif language == "KR" and lyrics.strip():
            spaced = space_compact_hangul(lyrics, korean_spacer) if identifier.startswith(YAHWEH_PREFIX) else lyrics
            normalized, has_refrain = normalize_korean_refrain(spaced)
            if normalized and normalized != lyrics:
                entry["lyrics"] = normalized
                entry["text"] = normalized
                entry["firstLine"] = first_lyric_line(normalized)
                korean_changed += 1
            korean_refrains += int(has_refrain)
        elif language == "EN" and lyrics.strip():
            normalized, has_refrain = normalize_english_refrain(lyrics)
            if normalized and normalized != lyrics:
                entry["lyrics"] = normalized
                entry["text"] = normalized
                entry["firstLine"] = first_lyric_line(normalized)
                english_changed += 1
            english_refrains += int(has_refrain)
        elif language == "JP" and lyrics.strip():
            normalized, has_refrain = normalize_japanese_refrain(lyrics)
            if normalized and normalized != lyrics:
                entry["lyrics"] = normalized
                entry["text"] = normalized
                entry["firstLine"] = first_lyric_line(normalized)
                japanese_changed += 1
            japanese_refrains += int(has_refrain)
    return {
        "vietnameseChanged": vietnamese_changed,
        "vietnameseRefrains": vietnamese_refrains,
        "vietnameseVolume1Refrains": vietnamese_volume_1_refrains,
        "vietnameseVolume2Refrains": vietnamese_volume_2_refrains,
        "koreanChanged": korean_changed,
        "koreanRefrains": korean_refrains,
        "englishChanged": english_changed,
        "englishRefrains": english_refrains,
        "japaneseChanged": japanese_changed,
        "japaneseRefrains": japanese_refrains,
    }


def validate(entries: list[dict]) -> dict:
    yahweh = [entry for entry in entries if str(entry.get("id", "")).startswith(YAHWEH_PREFIX)]
    vietnamese_volume_1 = [
        entry for entry in entries if str(entry.get("id", "")).startswith(VIETNAMESE_VOLUME_1_PREFIX)
    ]
    vietnamese_volume_2 = [
        entry for entry in entries if str(entry.get("id", "")).startswith(VIETNAMESE_VOLUME_2_PREFIX)
    ]
    english = [entry for entry in entries if str(entry.get("language", "")) == "EN"]
    japanese = [entry for entry in entries if str(entry.get("language", "")) == "JP"]
    if len(yahweh) != 623:
        raise RuntimeError(f"Expected 623 Yahweh Jireh entries, found {len(yahweh)}")
    if len(vietnamese_volume_1) != 454:
        raise RuntimeError(f"Expected 454 Vietnamese volume 1 entries, found {len(vietnamese_volume_1)}")
    if len(vietnamese_volume_2) != 344:
        raise RuntimeError(f"Expected 344 Vietnamese volume 2 entries, found {len(vietnamese_volume_2)}")
    yahweh_with_lyrics = sum(bool(compact_spaces(str(entry.get("lyrics", "")))) for entry in yahweh)
    vietnamese_volume_1_with_lyrics = sum(
        bool(compact_spaces(str(entry.get("lyrics", "")))) for entry in vietnamese_volume_1
    )
    vietnamese_volume_2_with_lyrics = sum(
        bool(compact_spaces(str(entry.get("lyrics", "")))) for entry in vietnamese_volume_2
    )
    if yahweh_with_lyrics != 623:
        raise RuntimeError(f"Expected 623 Yahweh Jireh lyrics, found {yahweh_with_lyrics}")
    if vietnamese_volume_1_with_lyrics != 454:
        raise RuntimeError(f"Expected 454 Vietnamese volume 1 lyrics, found {vietnamese_volume_1_with_lyrics}")
    if vietnamese_volume_2_with_lyrics != 344:
        raise RuntimeError(f"Expected 344 Vietnamese volume 2 lyrics, found {vietnamese_volume_2_with_lyrics}")

    bad_vietnamese = []
    bad_korean = []
    bad_english = []
    bad_japanese = []
    for entry in [*vietnamese_volume_1, *vietnamese_volume_2]:
        lyrics = str(entry.get("lyrics", "") or "")
        if any(line.startswith("ĐK. ") for line in lyrics.splitlines()):
            verse_blocks = [block for block in lyrics.split("\n\n") if re.match(r"^\d+\.\s", block)]
            if verse_blocks and any(not block.rstrip().endswith(VIETNAMESE_REFRAIN) for block in verse_blocks):
                bad_vietnamese.append(entry.get("id"))
    for entry in entries:
        lyrics = str(entry.get("lyrics", "") or "")
        language = str(entry.get("language", ""))
        if language == "KR" and any(line.strip() == KOREAN_REFRAIN for line in lyrics.splitlines()):
            verse_blocks = [block for block in lyrics.split("\n\n") if re.match(r"^\d+\.\s", block)]
            if verse_blocks and any(not block.rstrip().endswith(KOREAN_REFRAIN) for block in verse_blocks):
                bad_korean.append(entry.get("id"))
        elif language == "EN" and any(line.strip() == ENGLISH_REFRAIN for line in lyrics.splitlines()):
            verse_blocks = [block for block in lyrics.split("\n\n") if re.match(r"^\d+\.\s", block)]
            if verse_blocks and any(not block.rstrip().endswith(ENGLISH_REFRAIN) for block in verse_blocks):
                bad_english.append(entry.get("id"))
        elif language == "JP" and any(line.strip() == JAPANESE_REFRAIN for line in lyrics.splitlines()):
            lines = lyrics.splitlines()
            if any(
                JAPANESE_REFRAIN in line
                and line.strip() != JAPANESE_REFRAIN
                and not line.rstrip().endswith(JAPANESE_REFRAIN)
                for line in lines
            ):
                bad_japanese.append(entry.get("id"))
            chorus_blocks = [
                [line.strip() for line in block.splitlines() if line.strip()]
                for block in lyrics.split("\n\n")
                if block.strip().startswith(JAPANESE_REFRAIN)
            ]
            if any(len(block) < 2 or block[0] != JAPANESE_REFRAIN for block in chorus_blocks):
                bad_japanese.append(entry.get("id"))
            if "【答唱" in lyrics or "【交唱】" in lyrics:
                bad_japanese.append(entry.get("id"))
    if bad_vietnamese:
        raise RuntimeError(f"Vietnamese refrain markers are missing: {bad_vietnamese[:10]}")
    if bad_korean:
        raise RuntimeError(f"Korean refrain markers are missing: {bad_korean[:10]}")
    if bad_english:
        raise RuntimeError(f"English refrain markers are missing: {bad_english[:10]}")
    if bad_japanese:
        raise RuntimeError(f"Japanese refrain markers are malformed: {bad_japanese[:10]}")
    return {
        "yahweh": len(yahweh),
        "yahwehWithLyrics": yahweh_with_lyrics,
        "vietnameseVolume1": len(vietnamese_volume_1),
        "vietnameseVolume1WithLyrics": vietnamese_volume_1_with_lyrics,
        "vietnameseVolume2": len(vietnamese_volume_2),
        "vietnameseVolume2WithLyrics": vietnamese_volume_2_with_lyrics,
        "english": len(english),
        "englishWithLyrics": sum(bool(compact_spaces(str(entry.get("lyrics", "")))) for entry in english),
        "japanese": len(japanese),
        "japaneseWithLyrics": sum(bool(compact_spaces(str(entry.get("lyrics", "")))) for entry in japanese),
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Parse Yahweh Jireh lyrics and normalize hymn refrains")
    parser.add_argument("--check", action="store_true", help="Validate the current hymn data without changing it")
    parser.add_argument("--skip-yahweh", action="store_true", help="Only normalize existing multilingual lyrics")
    args = parser.parse_args()

    source, entries, start, end = load_hymn_data()
    if args.check:
        print(json.dumps(validate(entries), ensure_ascii=False, indent=2))
        return
    report = {}
    if not args.skip_yahweh:
        report["yahweh"] = parse_yahweh_lyrics(entries)
    report["normalized"] = normalize_existing_lyrics(entries)
    report["validation"] = validate(entries)
    save_hymn_data(source, entries, start, end)
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
