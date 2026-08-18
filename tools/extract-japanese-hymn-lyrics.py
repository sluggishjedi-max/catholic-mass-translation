from __future__ import annotations

import argparse
import colorsys
import concurrent.futures
import difflib
import json
import re
import statistics
import subprocess
import tempfile
import time
from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
HYMN_DATA = ROOT / "JS file" / "hymn_data.js"
JP_ASSET_DIR = ROOT / "assets" / "hymns" / "jp-tenrei"
CACHE_PATH = ROOT / "tmp" / "japanese-hymn-ocr-cache-v1.json"
TESSDATA = ROOT / "tmp" / "tessdata-jpn-fast"
TESSDATA_BEST = ROOT / "tmp" / "tessdata-jpn"
TESSERACT = Path(r"C:\Program Files\Tesseract-OCR\tesseract.exe")
GEMINI_PROXY = "https://us-central1-ordinary-mass-app.cloudfunctions.net/geminiProxy"
CHORUS = "[コーラス]"
JP_PREFIX = "jp-tenrei-"
WORKERS = 8


def hymn_array_bounds(text: str) -> tuple[int, int]:
    start = text.index("[", text.index("const hymnData"))
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
    raise ValueError("Could not locate hymnData")


def load_hymn_data() -> tuple[str, list[dict], int, int]:
    source = HYMN_DATA.read_text(encoding="utf-8")
    start, end = hymn_array_bounds(source)
    return source, json.loads(source[start:end]), start, end


def save_hymn_data(source: str, entries: list[dict], start: int, end: int) -> None:
    body = json.dumps(entries, ensure_ascii=False, indent=2)
    body = body.replace("\u2028", "\\u2028").replace("\u2029", "\\u2029")
    HYMN_DATA.write_text(source[:start] + body + source[end:], encoding="utf-8")


def word_image_record(entry: dict) -> dict | None:
    names = [value.strip() for value in str(entry.get("originalFileName", "")).split(";") if value.strip()]
    images = list(entry.get("scoreImages") or [])
    for index, name in enumerate(names):
        if not name.lower().endswith("w.gif") or index >= len(images):
            continue
        image = images[index]
        src = image.get("src") if isinstance(image, dict) else image
        path = ROOT / str(src)
        if path.resolve().parent != JP_ASSET_DIR.resolve():
            raise RuntimeError(f"Japanese lyric image escaped its asset directory: {path}")
        if image_has_staff_lines(path):
            continue
        return {
            "index": index,
            "name": name,
            "src": str(src),
            "path": str(path),
            "url": urljoin(str(entry.get("sourceUrl", "")), name),
        }
    return None


def archived_word_image_record(entry: dict) -> dict | None:
    url = str(entry.get("lyricsImageSourceUrl", "")).strip()
    if not url:
        return None
    name = Path(url.split("?", 1)[0]).name
    if not name.lower().endswith("w.gif"):
        return None
    return {
        "index": None,
        "name": name,
        "src": "",
        "path": "",
        "url": url,
    }


def image_has_staff_lines(path: Path) -> bool:
    image = Image.open(path).convert("L")
    width, height = image.size
    pixels = image.load()
    long_rows = []
    for y in range(height):
        dark = sum(1 for x in range(width) if pixels[x, y] < 100)
        if dark >= width * 0.45:
            long_rows.append(y)
    groups = []
    for y in long_rows:
        if not groups or y > groups[-1][-1] + 1:
            groups.append([y])
        else:
            groups[-1].append(y)
    return len(groups) >= 5


def canonical_chorus(lyrics: str) -> str:
    blocks = re.split(r"\n\s*\n", str(lyrics or "").strip())
    for block in blocks:
        lines = [line.strip() for line in block.splitlines() if line.strip()]
        if lines and lines[0] == CHORUS:
            return "\n".join(line for line in lines[1:] if line != CHORUS).strip()
    return ""


def colored_pixel_counts(image: Image.Image, box: tuple[int, int, int, int]) -> dict[str, int]:
    crop = image.crop(box).convert("RGB")
    counts = {"red": 0, "blue": 0, "green": 0, "orange": 0, "ink": 0}
    for red, green, blue in crop.getdata():
        if min(red, green, blue) < 220:
            counts["ink"] += 1
        hue, saturation, value = colorsys.rgb_to_hsv(red / 255.0, green / 255.0, blue / 255.0)
        degrees = hue * 360.0
        if saturation < 0.35 or value < 0.25:
            continue
        if degrees < 15 or degrees >= 340:
            counts["red"] += 1
        elif 195 <= degrees <= 270:
            counts["blue"] += 1
        elif 70 <= degrees <= 165:
            counts["green"] += 1
        elif 15 <= degrees < 70:
            counts["orange"] += 1
    return counts


def glyph_color(counts: dict[str, int]) -> str:
    threshold = max(3, int(counts["ink"] * 0.08))
    if counts["blue"] >= threshold and counts["blue"] > counts["red"] * 1.3:
        return "blue"
    if counts["red"] >= threshold and counts["red"] > counts["orange"] * 1.2:
        return "red"
    if counts["green"] >= threshold:
        return "green"
    if counts["orange"] >= threshold:
        return "orange"
    return "black"


def parse_makebox(raw: str, source_image: Image.Image, scale: int) -> list[dict]:
    width, height = source_image.size
    rows = []
    glyphs = []
    for value in raw.splitlines():
        match = re.match(r"(.+?)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+\d+$", value)
        if not match:
            continue
        character, x0, y0, x1, y1 = match.groups()
        x0, y0, x1, y1 = [int(number) / scale for number in (x0, y0, x1, y1)]
        box = (
            max(0, int(x0)),
            max(0, int(height - y1)),
            min(width, max(int(x0) + 1, int(x1))),
            min(height, max(int(height - y1) + 1, int(height - y0))),
        )
        counts = colored_pixel_counts(source_image, box)
        glyphs.append({
            "text": character,
            "x0": x0,
            "x1": x1,
            "top": height - y1,
            "bottom": height - y0,
            "center": height - ((y0 + y1) / 2),
            "color": glyph_color(counts),
            "colors": counts,
        })
    for glyph in sorted(glyphs, key=lambda item: (item["center"], item["x0"])):
        row = next((candidate for candidate in rows if abs(glyph["center"] - candidate["center"]) <= 10), None)
        if row is None:
            row = {"center": glyph["center"], "glyphs": []}
            rows.append(row)
        row["glyphs"].append(glyph)
        row["center"] = statistics.mean(item["center"] for item in row["glyphs"])
    output = []
    for row in sorted(rows, key=lambda item: item["center"]):
        items = sorted(row["glyphs"], key=lambda item: item["x0"])
        blue_ink = sum(item["colors"]["blue"] for item in items)
        total_ink = sum(item["colors"]["ink"] for item in items)
        colored_ink = sum(
            item["colors"][color]
            for item in items
            for color in ("red", "blue", "green", "orange")
        )
        line_is_blue = (
            blue_ink >= 8
            and blue_ink >= colored_ink * 0.55
            and blue_ink >= total_ink * 0.25
        )
        parts: list[tuple[str, str]] = []
        previous = None
        for item in items:
            if previous is not None and item["x0"] - previous["x1"] > 7:
                parts.append(("black", " "))
            color = "blue" if line_is_blue else item["color"]
            parts.append((color, item["text"]))
            previous = item
        merged: list[tuple[str, str]] = []
        for color, text in parts:
            if merged and merged[-1][0] == color:
                merged[-1] = (color, merged[-1][1] + text)
            else:
                merged.append((color, text))
        plain = "".join(text for _, text in merged).strip()
        plain = re.sub(r"\s+([、。！？）」』】])", r"\1", plain)
        plain = re.sub(r"([（「『【])\s+", r"\1", plain)
        if not plain:
            continue
        marked = "".join(f"**{text}**" if color == "red" and text.strip() else text for color, text in merged).strip()
        marked = re.sub(r"\*\*\s+\*\*", " ", marked)
        output.append({
            "y": row["center"],
            "plain": plain,
            "marked": marked,
            "blue": line_is_blue,
        })
    return output


def build_lyrics(rows: list[dict], chorus: str) -> str:
    if not rows:
        return ""
    normal_gaps = [rows[index]["y"] - rows[index - 1]["y"] for index in range(1, len(rows))]
    typical_gap = statistics.median([gap for gap in normal_gaps if 8 <= gap <= 45] or [28])
    blocks: list[str] = []
    current: list[str] = []

    def flush() -> None:
        nonlocal current
        if current:
            blocks.append("\n".join(current).strip())
            current = []

    index = 0
    while index < len(rows):
        row = rows[index]
        if row["blue"]:
            flush()
            while index + 1 < len(rows) and rows[index + 1]["blue"]:
                index += 1
            if chorus:
                blocks.append(f"{CHORUS}\n{chorus}")
            else:
                blue_text = "\n".join(item["plain"] for item in rows if item["blue"])
                blocks.append(f"{CHORUS}\n{blue_text}")
            index += 1
            continue
        number = re.fullmatch(r"(\d{1,2})[.．。]?", row["plain"].replace(" ", ""))
        if number:
            flush()
            current = [f"{int(number.group(1))}."]
            index += 1
            continue
        if current and index > 0 and row["y"] - rows[index - 1]["y"] > typical_gap * 1.75:
            flush()
        current.append(row["marked"])
        index += 1
    flush()
    output = "\n\n".join(block for block in blocks if block.strip())
    output = re.sub(r"\*\*([^*\n]+)\*\*\*\*([^*\n]+)\*\*", r"**\1\2**", output)
    return output.strip()


def run_ocr(task: dict) -> dict:
    path = Path(task["path"])
    temporary_path = None
    if not path.is_file():
        response = requests.get(task["url"], timeout=30)
        response.raise_for_status()
        with tempfile.NamedTemporaryFile(suffix=".gif", delete=False) as temporary:
            temporary.write(response.content)
            path = Path(temporary.name)
            temporary_path = path
    source_image = Image.open(path).convert("RGB")
    scale = 1
    grayscale = ImageOps.autocontrast(source_image.convert("L"))
    grayscale.info.clear()
    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as temporary:
        processed = Path(temporary.name)
    grayscale.save(processed)
    try:
        base_command = [
            str(TESSERACT), str(processed), "stdout", "--tessdata-dir", str(TESSDATA),
            "-l", "jpn", "--psm", "6",
        ]
        boxes = subprocess.run(
            [*base_command, "makebox"], capture_output=True, text=True,
            encoding="utf-8", errors="replace", check=True,
        ).stdout
    finally:
        processed.unlink(missing_ok=True)
        if temporary_path:
            temporary_path.unlink(missing_ok=True)
    rows = parse_makebox(boxes, source_image, scale)
    lyrics = build_lyrics(rows, task["chorus"])
    alternate = "\n".join(row["plain"] for row in rows)
    reference = ""
    try:
        page_response = requests.get(task["pageUrl"], timeout=30)
        page_response.raise_for_status()
        page_html = page_response.content.decode("cp932", errors="replace")
        soup = BeautifulSoup(page_html, "html.parser")
        reference_node = soup.select_one(".psalms")
        if reference_node:
            reference = reference_node.get_text("\n", strip=True)
    except Exception:
        reference = ""
    return {
        "id": task["id"],
        "title": task["title"],
        "lyrics": lyrics,
        "alternate": alternate,
        "chorus": task["chorus"],
        "reference": reference,
        "blueBlocks": lyrics.count(CHORUS),
        "boldPairs": lyrics.count("**") // 2,
    }


def gemini_text(payload: dict) -> str:
    return "\n".join(
        str(part.get("text", ""))
        for candidate in payload.get("candidates", [])
        for part in (candidate.get("content") or {}).get("parts", [])
    ).strip()


def extract_json(value: str) -> dict:
    value = re.sub(r"^```(?:json)?\s*|\s*```$", "", value.strip(), flags=re.I)
    start = value.find("{")
    end = value.rfind("}")
    if start < 0 or end < start:
        raise ValueError("Gemini response did not contain JSON")
    return json.loads(value[start:end + 1])


def bold_mask(value: str) -> tuple[str, list[bool]]:
    plain = []
    mask = []
    bold = False
    index = 0
    while index < len(value):
        if value.startswith("**", index):
            bold = not bold
            index += 2
            continue
        plain.append(value[index])
        mask.append(bold)
        index += 1
    return "".join(plain), mask


def apply_bold_mask(value: str, mask: list[bool]) -> str:
    output = []
    active = False
    for index, character in enumerate(value):
        marked = bool(mask[index]) if index < len(mask) else False
        if marked != active:
            output.append("**")
            active = marked
        output.append(character)
    if active:
        output.append("**")
    return "".join(output)


def restore_bold_markup(source: str, corrected: str) -> str:
    source_lines = source.splitlines()
    corrected_lines = corrected.splitlines()
    if len(source_lines) != len(corrected_lines):
        return corrected
    output = []
    for source_line, corrected_line in zip(source_lines, corrected_lines):
        source_plain, source_mask = bold_mask(source_line)
        corrected_plain, _ = bold_mask(corrected_line)
        result_mask = [False] * len(corrected_plain)
        matcher = difflib.SequenceMatcher(None, source_plain, corrected_plain, autojunk=False)
        for operation, i1, i2, j1, j2 in matcher.get_opcodes():
            if operation == "equal":
                for offset in range(i2 - i1):
                    result_mask[j1 + offset] = source_mask[i1 + offset]
            elif operation == "replace" and any(source_mask[i1:i2]):
                for result_index in range(j1, j2):
                    result_mask[result_index] = True
            elif operation == "insert":
                before = i1 > 0 and source_mask[i1 - 1]
                after = i1 < len(source_mask) and source_mask[i1]
                if before and after:
                    for result_index in range(j1, j2):
                        result_mask[result_index] = True
        output.append(apply_bold_mask(corrected_plain, result_mask))
    return "\n".join(output)


def local_cleanup_lyrics(value: str) -> str:
    """Apply conservative fixes for recurring OCR artifacts without changing verse order."""
    replacements = (
        ("人ビド", "ダビド"),
        ("人ビト", "ダビド"),
        ("菩 預言者", "昔 預言者"),
        ("斑 霊", "聖霊"),
        ("斑霊", "聖霊"),
        ("翠 圭", "聖霊"),
        ("聖圭", "聖霊"),
        ("斑なる", "聖なる"),
        ("斑 所", "聖所"),
        ("伯き 見", "仰ぎ見"),
        ("伯ぎ 見", "仰ぎ見"),
        ("いつ<しみ", "いつくしみ"),
        ("しゅ<し", "祝し"),
        ("す<く", "すく"),
        ("く<だ", "くだ"),
        ("くださぃ", "ください"),
        ("いけにえぇ", "いけにえ"),
        ("アーメッ", "アーメン"),
        ("アー メン", "アーメン"),
        ("わたしたちにに", "わたしたちに"),
        ("**わ**たしたちにに", "**わ**たしたちに"),
        ("ひとびとにに", "ひとびとに"),
        ("**ひ**とびとにに", "**ひ**とびとに"),
        ("入々", "人々"),
        ("死の 除", "死の 陰"),
        ("般えかわく", "飢えかわく"),
        ("飲えかわく", "飢えかわく"),
        ("灰い", "願い"),
        ("交きを", "輝きを"),
        ("交きに", "輝きに"),
        ("交き(に", "輝きに"),
        ("交く", "輝く"),
        ("**交**き", "**輝**き"),
        ("人入々", "人々"),
        ("人入を", "人を"),
        ("人入", "人"),
        ("一第1小節 な し一", "―第1小節 なし―"),
        ("一第2小節 な し一", "―第2小節 なし―"),
        ("一 第 1小節 なし一", "―第1小節 なし―"),
        ("一第2小節 なし一", "―第2小節 なし―"),
    )
    text = value
    for source, target in replacements:
        text = text.replace(source, target)
    text = text.replace("~", "")
    text = text.replace("<**く", "**く").replace("<く", "く").replace("く<", "く")
    text = text.replace("<", "く")
    text = text.replace("交く **星", "輝く **星")
    text = text.replace("さぃ", "さい").replace("ぬぬ", "ぬ").replace("にに", "に")
    text = re.sub(r"(?<![受聞])入(?=\s*(?:は|の|を|が|に|も|と|で|へ|びと|々))", "人", text)
    text = re.sub(r"(?m)^了$", "7.", text)
    text = re.sub(r"(?<=[ぁ-んァ-ヶ一-龯])<(?=[ぁ-んァ-ヶ一-龯])", "く", text)
    text = re.sub(r"(?<=[ぁ-んァ-ヶ一-龯])ぇ(?=を|が|に|で|と|へ|$)", "え", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def correct_batch(rows: list[dict]) -> dict[str, str]:
    prepared = {}
    items = []
    for row in rows:
        chorus_number = 0
        blocks = []
        for block in re.split(r"\n\s*\n", row["lyrics"]):
            if block.strip().startswith(CHORUS):
                chorus_number += 1
                blocks.append(f"@@CHORUS_{chorus_number}@@")
            else:
                blocks.append(block)
        placeholder_lyrics = "\n\n".join(blocks)
        prepared[row["id"]] = (row, chorus_number)
        items.append({
            "id": row["id"],
            "title": row["title"],
            "coloredOcr": placeholder_lyrics,
            "alternateOcr": row["alternate"],
            "referenceText": row.get("reference", ""),
        })
    prompt = "\n".join([
        "Correct OCR errors in these Japanese Catholic hymn lyrics.",
        "Do not translate, paraphrase, modernize, add, or remove lyrics.",
        "Preserve stanza order, blank-line structure, every @@CHORUS_N@@ placeholder, and every **bold** span.",
        "The bold spans encode red source text. The chorus placeholders encode blue source text.",
        "Use alternateOcr and referenceText only to fix an isolated misread character or word.",
        "Never replace the sung wording with the prose wording from referenceText; coloredOcr always has priority.",
        "Return strict JSON only with schema: {\"items\":[{\"id\":\"...\",\"lyrics\":\"...\"}]}",
        json.dumps({"items": items}, ensure_ascii=False),
    ])
    body = {
        "kind": "align",
        "promptConfig": {
            "contents": [{"parts": [{"text": prompt}]}],
            "generationConfig": {"temperature": 0},
        },
    }
    expected = {row["id"]: row for row in rows}
    last_error: Exception | None = None
    for attempt in range(4):
        try:
            response = requests.post(GEMINI_PROXY, json=body, timeout=90)
            response.raise_for_status()
            parsed = extract_json(gemini_text(response.json()))
            found = {str(item.get("id")): str(item.get("lyrics", "")).strip() for item in parsed.get("items", [])}
            if set(found) != set(expected):
                raise ValueError(f"Gemini IDs differ: {sorted(set(expected) - set(found))}")
            for identifier, lyrics in list(found.items()):
                row, chorus_count = prepared[identifier]
                if not lyrics:
                    raise ValueError(f"Gemini returned empty lyrics: {identifier}")
                for chorus_index in range(1, chorus_count + 1):
                    placeholder = f"@@CHORUS_{chorus_index}@@"
                    if lyrics.count(placeholder) != 1:
                        raise ValueError(f"Gemini changed chorus position: {identifier} {placeholder}")
                    lyrics = lyrics.replace(placeholder, f"{CHORUS}\n{row['chorus']}")
                lyrics = restore_bold_markup(row["lyrics"], lyrics)
                found[identifier] = lyrics
                if lyrics.count("**") % 2:
                    raise ValueError(f"Gemini returned unbalanced bold markup: {identifier}")
            return found
        except Exception as error:
            last_error = error
            time.sleep(2.5 * (attempt + 1))
    raise RuntimeError(f"Gemini OCR correction failed: {last_error}")


def first_lyric_line(value: str) -> str:
    for line in value.splitlines():
        line = re.sub(r"\*\*", "", line).strip()
        if line and line != CHORUS and not re.fullmatch(r"\d+\.", line):
            return line
    return ""


def relabel_images(images: list) -> list:
    output = []
    for index, image in enumerate(images, start=1):
        record = dict(image) if isinstance(image, dict) else {"src": str(image)}
        record["label"] = str(index) if len(images) == 1 else f"{index}/{len(images)}"
        output.append(record)
    return output


def validate(entries: list[dict]) -> dict:
    japanese = [entry for entry in entries if str(entry.get("id", "")).startswith(JP_PREFIX)]
    word_records = [word_image_record(entry) for entry in japanese]
    word_records = [record for record in word_records if record]
    styled = [entry for entry in japanese if "**" in str(entry.get("lyrics", ""))]
    choruses = [entry for entry in japanese if CHORUS in str(entry.get("lyrics", ""))]
    bad_bold = [entry.get("id") for entry in japanese if str(entry.get("lyrics", "")).count("**") % 2]
    missing_assets = [
        image.get("src") if isinstance(image, dict) else image
        for entry in japanese
        for image in entry.get("scoreImages") or []
        if not (ROOT / str(image.get("src") if isinstance(image, dict) else image)).is_file()
    ]
    if bad_bold:
        raise RuntimeError(f"Unbalanced Japanese bold markup: {bad_bold[:10]}")
    if missing_assets:
        raise RuntimeError(f"Missing Japanese score images: {missing_assets[:10]}")
    return {
        "japanese": len(japanese),
        "withLyrics": sum(bool(str(entry.get("lyrics", "")).strip()) for entry in japanese),
        "withChorus": len(choruses),
        "withBoldEmphasis": len(styled),
        "linkedLyricsOnlyImages": len(word_records),
        "scoreImages": sum(len(entry.get("scoreImages") or []) for entry in japanese),
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract Japanese hymn lyrics and color semantics from lyric-only images")
    parser.add_argument("--refresh", action="store_true")
    parser.add_argument("--ocr-only", action="store_true")
    parser.add_argument("--best", action="store_true", help="Use the slower, more accurate Japanese OCR model")
    parser.add_argument("--local-only", action="store_true", help="Use deterministic local OCR cleanup instead of the remote correction service")
    parser.add_argument("--reclean", action="store_true", help="Rebuild corrected lyrics from cached OCR")
    parser.add_argument("--check", action="store_true")
    parser.add_argument("--workers", type=int, default=WORKERS)
    parser.add_argument("--limit", type=int, default=0)
    args = parser.parse_args()

    global TESSDATA
    if args.best:
        TESSDATA = TESSDATA_BEST

    if not TESSERACT.is_file() or not (TESSDATA / "jpn.traineddata").is_file():
        raise RuntimeError("Tesseract Japanese OCR data is not installed in tmp/tessdata-jpn")
    source, entries, start, end = load_hymn_data()
    if args.check:
        print(json.dumps(validate(entries), ensure_ascii=False, indent=2))
        return

    cache = json.loads(CACHE_PATH.read_text(encoding="utf-8")) if CACHE_PATH.is_file() else {"ocr": {}, "corrected": {}}
    cache.setdefault("ocr", {})
    cache.setdefault("corrected", {})
    if args.reclean:
        cache["corrected"] = {}
    tasks = []
    by_id = {}
    for entry in entries:
        if not str(entry.get("id", "")).startswith(JP_PREFIX):
            continue
        record = word_image_record(entry) or archived_word_image_record(entry)
        if not record:
            continue
        task = {
            **record,
            "id": str(entry["id"]),
            "title": str(entry.get("title", "")),
            "chorus": canonical_chorus(str(entry.get("lyrics", ""))),
            "pageUrl": str(entry.get("sourceUrl", "")),
        }
        by_id[task["id"]] = (entry, task)
        if args.refresh or task["id"] not in cache["ocr"]:
            tasks.append(task)
    if args.limit:
        tasks = tasks[:args.limit]

    if tasks:
        CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
        with concurrent.futures.ProcessPoolExecutor(max_workers=max(1, args.workers)) as executor:
            futures = [executor.submit(run_ocr, task) for task in tasks]
            for count, future in enumerate(concurrent.futures.as_completed(futures), start=1):
                row = future.result()
                cache["ocr"][row["id"]] = row
                cache["corrected"].pop(row["id"], None)
                if count % 10 == 0 or count == len(futures):
                    CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
                    print(f"[JP OCR] {count}/{len(futures)}", flush=True)

    pending = [cache["ocr"][identifier] for identifier in by_id if identifier in cache["ocr"] and identifier not in cache["corrected"]]
    if args.local_only:
        for offset, row in enumerate(pending, start=1):
            cache["corrected"][row["id"]] = local_cleanup_lyrics(row["lyrics"])
            if offset % 25 == 0 or offset == len(pending):
                CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
                print(f"[JP local correction] {offset}/{len(pending)}", flush=True)
    else:
        correction_batch_size = 4
        for offset in range(0, len(pending), correction_batch_size):
            batch = pending[offset:offset + correction_batch_size]
            corrected = correct_batch(batch)
            cache["corrected"].update(corrected)
            CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
            print(f"[JP correction] {min(offset + len(batch), len(pending))}/{len(pending)}", flush=True)
            time.sleep(3.0)

    if args.ocr_only:
        print(json.dumps({"targets": len(by_id), "ocr": len(cache["ocr"]), "corrected": len(cache["corrected"])}, ensure_ascii=False, indent=2))
        return

    missing = [identifier for identifier in by_id if identifier not in cache["corrected"]]
    if missing:
        raise RuntimeError(f"Japanese OCR cache is incomplete: {missing[:10]}")

    delete_paths = []
    for identifier, (entry, task) in by_id.items():
        lyrics = str(cache["corrected"][identifier]).strip()
        if not lyrics:
            raise RuntimeError(f"Corrected Japanese lyrics are empty: {identifier}")
        entry["lyrics"] = lyrics
        entry["text"] = lyrics
        entry["firstLine"] = first_lyric_line(lyrics)
        entry["lyricsExtraction"] = "Japanese OCR from the source lyric image, corrected against the source page; red text is bold and blue text is marked as chorus."
        entry["lyricsImageSourceUrl"] = task["url"]
        if task["index"] is not None:
            images = list(entry.get("scoreImages") or [])
            images.pop(task["index"])
            entry["scoreImages"] = relabel_images(images)
            names = [value.strip() for value in str(entry.get("originalFileName", "")).split(";") if value.strip()]
            if task["index"] < len(names):
                names.pop(task["index"])
            entry["originalFileName"] = "; ".join(names)
        if task["path"]:
            delete_paths.append(Path(task["path"]))

    report = validate(entries)
    report["convertedLyricsImages"] = len(by_id)
    save_hymn_data(source, entries, start, end)
    for path in delete_paths:
        if path.resolve().parent != JP_ASSET_DIR.resolve():
            raise RuntimeError(f"Refusing to delete outside Japanese hymn assets: {path}")
        path.unlink(missing_ok=True)
    report["deletedLyricsImages"] = sum(not path.exists() for path in delete_paths)
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
