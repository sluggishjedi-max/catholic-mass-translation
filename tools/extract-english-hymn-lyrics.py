from __future__ import annotations

import argparse
import concurrent.futures
import difflib
import json
import re
import subprocess
import tempfile
import unicodedata
from io import BytesIO
from pathlib import Path

import numpy as np
import requests
from bs4 import BeautifulSoup
from PIL import Image, ImageFilter, ImageOps
from scipy import ndimage
from wordfreq import zipf_frequency


ROOT = Path(__file__).resolve().parents[1]
HYMN_DATA = ROOT / "JS file" / "hymn_data.js"
CACHE_PATH = ROOT / "tmp" / "english-hymn-ocr-cache-v1.json"
TESSERACT = Path(r"C:\Program Files\Tesseract-OCR\tesseract.exe")
OCR_WORK = Path(r"C:\Users\slugg\.codex\ocr-work")
CLUSTER_CACHE = ROOT / "tmp" / "online-hymn-import" / "icr-clusters"
ENGLISH_PREFIX = "en-breaking-bread-2026-"
ICR_ATTRIBUTION = "ⓒ Breaking Bread (2026 edition), OCP"
REFRAIN_MARKER = "[R.]"
PREPROCESS_VERSION = "en-v7-fast-threshold-lines-2x"


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


def cache_key(path: Path) -> str:
    stat = path.stat()
    return f"{PREPROCESS_VERSION}|{path.as_posix()}|{stat.st_size}|{stat.st_mtime_ns}"


def preprocess_score(path: Path, output: Path) -> None:
    source = Image.open(path).convert("L")
    scale = 2
    image = source.resize((source.width * scale, source.height * scale), Image.Resampling.LANCZOS)
    image = ImageOps.autocontrast(image).filter(ImageFilter.SHARPEN)
    array = np.asarray(image)
    ink = array < 170

    line_width = max(75, image.width // 16)
    run_density = ndimage.uniform_filter1d(ink.astype(np.float32), size=line_width, axis=1, mode="constant")
    horizontal = run_density > 0.82
    horizontal = ndimage.maximum_filter1d(horizontal, size=line_width, axis=1, mode="constant")
    horizontal = ndimage.maximum_filter1d(horizontal, size=2, axis=0, mode="constant")
    clean = ink & ~ndimage.binary_dilation(horizontal, structure=np.ones((3, 1), dtype=bool))

    Image.fromarray(np.where(clean, 0, 255).astype(np.uint8)).save(output)


def run_ocr(task: tuple[str, str]) -> tuple[str, str]:
    key, path_text = task
    OCR_WORK.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(prefix="ocr-en-", suffix=".png", dir=OCR_WORK, delete=False) as handle:
        temporary = Path(handle.name)
    try:
        preprocess_score(Path(path_text), temporary)
        command = [str(TESSERACT), str(temporary), "stdout", "-l", "eng", "--psm", "4"]
        try:
            result = subprocess.run(command, capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=10)
            return key, result.stdout or ""
        except subprocess.TimeoutExpired:
            return key, ""
    finally:
        temporary.unlink(missing_ok=True)


def normalized_key(value: str) -> str:
    value = unicodedata.normalize("NFKD", value or "")
    value = "".join(character for character in value if not unicodedata.combining(character))
    return re.sub(r"[^a-z0-9]+", "", value.lower())


def heading_kind(line: str) -> str:
    words = re.findall(r"[a-z]+", line.lower())
    for key in words[:3]:
        if re.fullmatch(r"(?:refrain|refran|refrin|refrein|rafrain|chorus|response|antiphon)", key):
            return "refrain"
        if len(key) >= 5 and any(difflib.SequenceMatcher(None, key, target).ratio() >= 0.54 for target in ("refrain", "response", "chorus")):
            return "refrain"
        if re.fullmatch(r"(?:verse|verses|stanza|stanzas)", key):
            return "verses"
    return ""


META_PATTERN = re.compile(
    r"\b(?:copyright|published|publishing|administered|permission|rights reserved|music by|text by|lyrics by|"
    r"arranged by|edition|www\.|\.com|ocp|spirit & song|hymn tune|all rights|english text|spanish text|"
    r"excluding europe|a division of|text and|text &|music and)\b",
    flags=re.I,
)


def clean_ocr_line(raw_line: str) -> str:
    line = unicodedata.normalize("NFC", raw_line or "")
    line = line.replace("—", "-").replace("–", "-").replace("ﬁ", "fi").replace("ﬂ", "fl")
    line = re.sub(r"(?<=[A-Za-z])\s*-\s*(?=[A-Za-z])", "", line)
    line = re.sub(r"(?<=[A-Za-z])[@0](?=[A-Za-z])", lambda match: "e" if match.group(0) == "@" else "o", line)
    line = re.sub(r"^\s*(\d{1,2})\s*[,;]\s*", r"\1. ", line)
    line = re.sub(r"^\s*(\d{1,2})\s*[^A-Za-z0-9.,]{1,3}\s*(?=[A-Za-z])", r"\1. ", line)
    line = re.sub(r"[|_=~]{2,}", " ", line)
    line = re.sub(r"[^A-Za-z0-9À-ž'’.,;:!?()&+\-/ ]+", " ", line)
    line = re.sub(r"\s+", " ", line).strip(" -|_")
    return line


def likely_lyric_line(line: str) -> bool:
    if not line:
        return False
    if heading_kind(line):
        return True
    if META_PATTERN.search(line):
        return False
    letters = len(re.findall(r"[A-Za-zÀ-ž]", line))
    symbols = len(re.findall(r"[^A-Za-zÀ-ž0-9\s'’.,;:!?()\-/]", line))
    if letters < 5 or (symbols >= 4 and symbols > letters / 3):
        return False
    words = re.findall(r"[A-Za-zÀ-ž]+(?:['’][A-Za-zÀ-ž]+)?", line)
    if not words:
        return False
    meaningful = [word for word in words if len(word) > 1]
    if not meaningful:
        return False
    lower_words = [word.lower() for word in meaningful]
    if any(word[1:] != word[1:].lower() for word in meaningful if len(word) > 2):
        return False
    frequencies = [zipf_frequency(word, "en") for word in lower_words]
    common = sum(frequency >= 2.7 for frequency in frequencies)
    strong = sum(frequency >= 3.35 for frequency in frequencies)
    numbered = bool(re.match(r"^\d{1,2}(?:\s*[,/]\s*\d{1,2})*\s*[.)]", line))
    vowel_words = sum(bool(re.search(r"[aeiouy]", word, re.I)) for word in meaningful)
    if vowel_words / len(meaningful) < 0.65:
        return False
    short_whitelist = {"o", "oh", "god", "lord", "i", "am", "you", "he", "is", "we", "us", "me", "my", "the", "to", "in", "of", "and", "amen"}
    if not any(len(word) >= 4 for word in meaningful) and not all(word in short_whitelist for word in lower_words):
        return False
    english_score = sum(frequencies) / len(frequencies)
    spanish_score = sum(zipf_frequency(word.lower(), "es") for word in meaningful) / len(meaningful)
    if spanish_score > english_score + 0.45:
        return False
    cue_words = {
        "the", "and", "of", "to", "in", "for", "from", "with", "as", "our", "your", "my", "his", "her",
        "is", "are", "be", "was", "will", "can", "we", "you", "us", "me", "he", "she", "they", "who",
        "god", "lord", "jesus", "christ", "amen", "alleluia", "holy", "grace", "love", "mercy", "praise",
    }
    cue_count = sum(word in cue_words for word in lower_words)
    if not numbered and cue_count < max(1, (len(meaningful) + 3) // 4):
        return False
    common_threshold = 0.48 if numbered else 0.62
    strong_threshold = 0.34 if numbered else 0.48
    return common / len(meaningful) >= common_threshold and strong / len(meaningful) >= strong_threshold


def clean_ocr_text(raw: str, title: str, composer: str) -> list[str]:
    title_key = normalized_key(title)
    composer_keys = [normalized_key(part) for part in re.split(r"[,;/]", composer or "") if normalized_key(part)]
    output: list[str] = []
    previous_key = ""
    for raw_line in (raw or "").splitlines():
        line = clean_ocr_line(raw_line)
        if META_PATTERN.search(line):
            if output:
                break
            continue
        if not likely_lyric_line(line):
            continue
        key = normalized_key(line)
        if title_key and key and (key == title_key or (title_key in key and len(key) <= len(title_key) + 8)):
            continue
        if any(key == composer_key or (composer_key in key and len(key) <= len(composer_key) + 8) for composer_key in composer_keys):
            continue
        if re.fullmatch(r"s*a*m*p*l*e*", key):
            continue
        if key and key == previous_key:
            continue
        output.append(line)
        previous_key = key
    return output


def add_fragment(target: list[str], fragment: str) -> None:
    fragment = fragment.strip()
    if fragment and (not target or normalized_key(target[-1]) != normalized_key(fragment)):
        target.append(fragment)


def structure_lyrics(lines: list[str]) -> tuple[str, bool]:
    verses: dict[int, list[str]] = {}
    refrain: list[str] = []
    unstructured: list[str] = []
    current_numbers: list[int] = []
    current_kind = ""
    saw_structure = False

    for line in lines:
        kind = heading_kind(line)
        if kind == "refrain":
            current_kind = "refrain"
            current_numbers = []
            saw_structure = True
            continue
        if kind == "verses":
            current_kind = "verses"
            current_numbers = []
            saw_structure = True
            continue
        match = re.match(r"^((?:\d{1,2})(?:\s*[,/]\s*\d{1,2})*)\s*[.)]\s*(.*)$", line)
        if match:
            current_numbers = [int(number) for number in re.findall(r"\d{1,2}", match.group(1))]
            current_kind = "verse"
            saw_structure = True
            for number in current_numbers:
                add_fragment(verses.setdefault(number, []), match.group(2))
            continue
        if current_kind == "refrain":
            add_fragment(refrain, line)
        elif current_kind == "verse" and current_numbers:
            for number in current_numbers:
                add_fragment(verses.setdefault(number, []), line)
        else:
            add_fragment(unstructured, line)

    has_refrain = bool(refrain)
    if verses:
        output = []
        for number in sorted(verses):
            text = " ".join(verses[number]).strip()
            if not text:
                continue
            suffix = f" {REFRAIN_MARKER}" if has_refrain else ""
            output.append(f"{number}. {text}{suffix}")
        if has_refrain:
            output.append(REFRAIN_MARKER + "\n" + " ".join(refrain))
        return "\n\n".join(output), has_refrain
    if has_refrain:
        prefix = (" ".join(unstructured).strip() + "\n\n") if unstructured else ""
        return prefix + REFRAIN_MARKER + "\n" + " ".join(refrain), True
    if saw_structure and unstructured:
        return " ".join(unstructured), False
    return "\n".join(unstructured), False


def first_lyric_line(value: str) -> str:
    for line in (value or "").splitlines():
        line = line.strip()
        if line and line != REFRAIN_MARKER:
            return re.sub(r"^\d+\.\s*", "", line)
    return ""


def selected_entries(entries: list[dict], ids: set[str], limit: int) -> list[dict]:
    selected = [entry for entry in entries if str(entry.get("id", "")).startswith(ENGLISH_PREFIX)]
    if ids:
        selected = [entry for entry in selected if str(entry.get("number", "")).lstrip("0") in ids or str(entry.get("number", "")) in ids]
    if limit:
        selected = selected[:limit]
    return selected


FALLBACK_LYRICS = {
    "002": "Priest: Have mercy on us, O Lord.\nAll: For we have sinned against you.\nPriest: Show us, O Lord, your mercy.\nAll: And grant us your salvation.\n\n[R.]\nAmen.",
    "005": "[R.]\nKyrie, eleison. Christe, eleison. Kyrie, eleison.",
    "010": "[R.]\nWe proclaim your Death, O Lord, and profess your Resurrection until you come again.",
    "020": "Priest: Go forth, the Mass is ended, alleluia, alleluia.\nAll: Thanks be to God, alleluia, alleluia.",
    "022": "[Instrumental]\nThe source identifies this as an instrumental Palm Sunday procession and supplies no sung text.",
    "069": "[R.]\nAlleluia, alleluia.",
    "106": "[R.]\nAlleluia, alleluia, alleluia.",
    "186": "Jubilate Deo, jubilate Deo, alleluia!",
    "214": "Dona nobis pacem, pacem. Dona nobis pacem.",
    "371": "Ave verum Corpus natum de Maria Virgine; vere passum, immolatum in cruce pro homine; cuius latus perforatum fluxit aqua et sanguine. Esto nobis praegustatum mortis in examine. O Jesu dulcis! O Jesu pie! O Jesu fili Mariae!",
    "420": "1. Kyrie, eleison. Kyrie, eleison. [R.]\n\n2. Christe, eleison. Christe, eleison. [R.]\n\n3. Kyrie, eleison. Kyrie, eleison. [R.]\n\n[R.]\nKyrie, eleison.",
    "699": "Salve, Regina, Mater misericordiae; vita, dulcedo et spes nostra, salve. Ad te clamamus, exsules filii Hevae. Ad te suspiramus, gementes et flentes in hac lacrimarum valle. Eia ergo, Advocata nostra, illos tuos misericordes oculos ad nos converte. Et Jesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende. O clemens, O pia, O dulcis Virgo Maria.",
    "829": "[R.]\nAlleluia, alleluia, alleluia.",
    "830": "[R.]\nPraise and honor to you, Lord Jesus Christ!",
    "837": "[R.]\nKyrie, eleison. Kyrie, eleison. Christe, eleison. Christe, eleison. Kyrie, eleison. Kyrie, eleison.",
    "839": "Sanctus, Sanctus, Sanctus Dominus Deus Sabaoth. Pleni sunt caeli et terra gloria tua. Hosanna in excelsis. Benedictus qui venit in nomine Domini. Hosanna in excelsis.",
    "840": "Priest: Mysterium fidei.\n\n[R.]\nMortem tuam annuntiamus, Domine, et tuam resurrectionem confitemur, donec venias.",
    "841": "[R.]\nAmen.",
    "843": "1. Agnus Dei, qui tollis peccata mundi: miserere nobis.\n\n2. Agnus Dei, qui tollis peccata mundi: miserere nobis.\n\n3. Agnus Dei, qui tollis peccata mundi: dona nobis pacem.",
    "849": "[R.]\nWe proclaim your Death, O Lord, and profess your Resurrection until you come again.",
    "852": "[R.]\nAmen, amen, amen, amen.",
    "869": "[R.]\nLord, have mercy. Christ, have mercy. Lord, have mercy.",
    "874": "[R.]\nSave us, Savior of the world, for by your Cross and Resurrection you have set us free.",
    "895": "[R.]\nAlleluia, alleluia, alleluia.",
    "911": "[R.]\nAmen! Amen! Amen! Amen!",
    "914": "[R.]\nKyrie, eleison. Christe, eleison. Kyrie, eleison.",
    "918": "Holy, Holy, Holy Lord God of hosts. Heaven and earth are full of your glory. Hosanna in the highest. Blessed is he who comes in the name of the Lord. Hosanna in the highest.",
    "919": "[R.]\nWe proclaim your Death, O Lord, and profess your Resurrection until you come again.",
    "922": "[R.]\nAmen.",
    "928": "[R.]\nAlleluia, alleluia, alleluia, alleluia.",
    "955": "[Kyrie]\nKyrie, eleison. Christe, eleison. Kyrie, eleison.\n\n[Gloria]\nGloria in excelsis Deo et in terra pax hominibus bonae voluntatis. Laudamus te, benedicimus te, adoramus te, glorificamus te, gratias agimus tibi propter magnam gloriam tuam, Domine Deus, Rex caelestis, Deus Pater omnipotens. Domine Fili unigenite, Jesu Christe, Domine Deus, Agnus Dei, Filius Patris, qui tollis peccata mundi, miserere nobis; qui tollis peccata mundi, suscipe deprecationem nostram; qui sedes ad dexteram Patris, miserere nobis. Quoniam tu solus Sanctus, tu solus Dominus, tu solus Altissimus, Jesu Christe, cum Sancto Spiritu: in gloria Dei Patris. Amen.\n\n[Sanctus]\nSanctus, Sanctus, Sanctus Dominus Deus Sabaoth. Pleni sunt caeli et terra gloria tua. Hosanna in excelsis. Benedictus qui venit in nomine Domini. Hosanna in excelsis.\n\n[Memorial Acclamation]\nMortem tuam annuntiamus, Domine, et tuam resurrectionem confitemur, donec venias.\n\n[Pater Noster]\nPater noster, qui es in caelis: sanctificetur nomen tuum; adveniat regnum tuum; fiat voluntas tua, sicut in caelo et in terra. Panem nostrum cotidianum da nobis hodie; et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris; et ne nos inducas in tentationem; sed libera nos a malo.\n\n[Agnus Dei]\nAgnus Dei, qui tollis peccata mundi, miserere nobis. Agnus Dei, qui tollis peccata mundi, miserere nobis. Agnus Dei, qui tollis peccata mundi, dona nobis pacem.",
    "995": "[Penitential Act]\n[R.]\nLord, have mercy. Christ, have mercy. Lord, have mercy.\n\n[Glory to God]\nGlory to God in the highest, and on earth peace to people of good will. We praise you, we bless you, we adore you, we glorify you, we give you thanks for your great glory, Lord God, heavenly King, O God, almighty Father. Lord Jesus Christ, Only Begotten Son, Lord God, Lamb of God, Son of the Father, you take away the sins of the world, have mercy on us; you take away the sins of the world, receive our prayer; you are seated at the right hand of the Father, have mercy on us. For you alone are the Holy One, you alone are the Lord, you alone are the Most High, Jesus Christ, with the Holy Spirit, in the glory of God the Father. Amen.\n\n[Holy]\nHoly, Holy, Holy Lord God of hosts. Heaven and earth are full of your glory. Hosanna in the highest. Blessed is he who comes in the name of the Lord. Hosanna in the highest.\n\n[Save Us, Savior]\n[R.]\nSave us, Savior of the world, for by your Cross and Resurrection you have set us free.\n\n[Amen]\n[R.]\nAmen, amen, amen.\n\n[Lamb of God]\nLamb of God, you take away the sins of the world, have mercy on us. Lamb of God, you take away the sins of the world, have mercy on us. Lamb of God, you take away the sins of the world, grant us peace.",
}


def lyrics_preview_job(entry: dict) -> tuple[str, str, str] | None:
    cluster_match = re.search(r"/cluster/(\d+)", str(entry.get("sourceUrl", "")))
    if not cluster_match:
        return None
    cluster_id = cluster_match.group(1)
    html_path = CLUSTER_CACHE / f"{cluster_id}.html"
    if not html_path.is_file():
        return None
    soup = BeautifulSoup(html_path.read_text(encoding="utf-8", errors="replace"), "html.parser")
    sku = ""
    for box in soup.select(".sidebar_cluster_asset"):
        title = box.select_one(".asset_container_title")
        if title and "Song Lyrics" in title.get_text(" ", strip=True):
            sku = str(box.get("sku_id", "")).strip()
            break
    if not sku:
        return None
    images = entry.get("scoreImages") or []
    first_src = images[0].get("src") if images and isinstance(images[0], dict) else (images[0] if images else "")
    if not first_src:
        return None
    score_path = Path(str(first_src))
    base_stem = re.sub(r"-\d{2}$", "", score_path.stem)
    relative = score_path.with_name(f"{base_stem}-lyrics.webp").as_posix()
    url = f"https://s3.amazonaws.com/snapshot.icrcdn.net/preview/{sku}.png"
    return str(entry.get("id")), url, relative


def download_lyrics_preview(job: tuple[str, str, str]) -> tuple[str, str, str, bool]:
    identifier, url, relative = job
    destination = ROOT / relative
    if destination.is_file():
        return identifier, url, relative, False
    response = requests.get(url, timeout=30)
    response.raise_for_status()
    image = Image.open(BytesIO(response.content))
    if image.mode in {"RGBA", "LA"}:
        rgba = image.convert("RGBA")
        background = Image.new("RGBA", rgba.size, "white")
        image = Image.alpha_composite(background, rgba).convert("RGB")
    else:
        image = image.convert("RGB")
    destination.parent.mkdir(parents=True, exist_ok=True)
    image.save(destination, "WEBP", quality=92, method=6)
    return identifier, url, relative, True


def sync_lyrics_previews(targets: list[dict], workers: int) -> dict:
    jobs = [job for entry in targets if (job := lyrics_preview_job(entry))]
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, workers)) as executor:
        for done, result in enumerate(executor.map(download_lyrics_preview, jobs), 1):
            results.append(result)
            if done % 50 == 0 or done == len(jobs):
                print(f"[EN lyrics previews] {done}/{len(jobs)}", flush=True)
    by_id = {str(entry.get("id")): entry for entry in targets}
    downloaded = 0
    linked = 0
    for identifier, url, relative, created in results:
        entry = by_id[identifier]
        images = list(entry.get("scoreImages") or [])
        if not any((image.get("src") if isinstance(image, dict) else image) == relative for image in images):
            images.append({"src": relative, "label": "Lyrics"})
            entry["scoreImages"] = images
            linked += 1
        entry["lyricsPreviewSource"] = url
        downloaded += int(created)
    return {"available": len(jobs), "downloaded": downloaded, "linked": linked}


def validate(entries: list[dict]) -> dict:
    english = [entry for entry in entries if str(entry.get("id", "")).startswith(ENGLISH_PREFIX)]
    with_lyrics = [entry for entry in english if str(entry.get("lyrics", "") or "").strip()]
    refrains = [entry for entry in with_lyrics if any(line.strip() == REFRAIN_MARKER for line in str(entry["lyrics"]).splitlines())]
    bad = []
    for entry in refrains:
        blocks = [block for block in str(entry["lyrics"]).split("\n\n") if re.match(r"^\d+\.\s", block)]
        if blocks and any(not block.rstrip().endswith(REFRAIN_MARKER) for block in blocks):
            bad.append(entry.get("id"))
    if len(english) != 866:
        raise RuntimeError(f"Expected 866 English entries, found {len(english)}")
    bad_attribution = [entry.get("id") for entry in english if entry.get("copyright") != ICR_ATTRIBUTION]
    if bad_attribution:
        raise RuntimeError(f"English source attribution is inconsistent: {bad_attribution[:10]}")
    if bad:
        raise RuntimeError(f"English refrain markers are missing: {bad[:10]}")
    return {"english": len(english), "withLyrics": len(with_lyrics), "withRefrains": len(refrains)}


def main() -> None:
    parser = argparse.ArgumentParser(description="Extract English lyrics from Breaking Bread score previews")
    parser.add_argument("--workers", type=int, default=8)
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument("--ids", default="", help="Comma-separated hymn numbers")
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--refresh-ocr", action="store_true")
    parser.add_argument("--sync-lyrics-previews", action="store_true")
    parser.add_argument("--check", action="store_true")
    args = parser.parse_args()

    if not TESSERACT.exists():
        raise RuntimeError(f"Tesseract was not found: {TESSERACT}")
    source, entries, start, end = load_hymn_data()
    if args.check:
        print(json.dumps(validate(entries), ensure_ascii=False, indent=2))
        return

    ids = {value.strip().lstrip("0") or "0" for value in args.ids.split(",") if value.strip()}
    targets = selected_entries(entries, ids, args.limit)
    for entry in targets:
        entry["copyright"] = ICR_ATTRIBUTION
    preview_report = {"available": 0, "downloaded": 0, "linked": 0}
    if args.sync_lyrics_previews:
        preview_report = sync_lyrics_previews(targets, args.workers)
    cache = json.loads(CACHE_PATH.read_text(encoding="utf-8")) if CACHE_PATH.exists() else {}
    tasks = []
    entry_keys: dict[str, list[str]] = {}
    for entry in targets:
        keys = []
        images = list(entry.get("scoreImages") or [])
        lyrics_images = [image for image in images if isinstance(image, dict) and str(image.get("label", "")).lower() == "lyrics"]
        for image in lyrics_images or images:
            src = image.get("src") if isinstance(image, dict) else image
            path = ROOT / str(src)
            if not path.is_file():
                continue
            key = cache_key(path)
            keys.append(key)
            if args.refresh_ocr or key not in cache:
                tasks.append((key, str(path)))
        entry_keys[str(entry.get("id"))] = keys

    if tasks:
        CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
        with concurrent.futures.ProcessPoolExecutor(max_workers=max(1, args.workers)) as executor:
            futures = [executor.submit(run_ocr, task) for task in tasks]
            for done, future in enumerate(concurrent.futures.as_completed(futures), 1):
                try:
                    key, text = future.result()
                except Exception as error:
                    task_index = futures.index(future)
                    key = tasks[task_index][0]
                    text = ""
                    print(f"[EN OCR warning] {key}: {error}", flush=True)
                cache[key] = text
                if done % 25 == 0 or done == len(tasks):
                    CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False), encoding="utf-8")
                    print(f"[EN OCR] {done}/{len(tasks)}", flush=True)

    updated = 0
    extracted = 0
    refrains = 0
    previews = []
    for entry in targets:
        raw = "\n".join(cache.get(key, "") for key in entry_keys.get(str(entry.get("id")), [])).strip()
        lines = clean_ocr_text(raw, str(entry.get("title", "")), str(entry.get("composer", "")))
        lyrics, has_refrain = structure_lyrics(lines)
        if lyrics:
            extracted += 1
            refrains += int(has_refrain)
            previews.append((entry.get("id"), raw, lyrics))
            if args.force or not str(entry.get("lyrics", "") or "").strip():
                entry["lyrics"] = lyrics
                entry["text"] = lyrics
                entry["firstLine"] = first_lyric_line(lyrics)
                entry["lyricsExtraction"] = "Tesseract OCR from the public low-resolution score preview; verify against the score."
                updated += 1

    fallback_updated = 0
    for entry in targets:
        if str(entry.get("lyrics", "") or "").strip():
            continue
        fallback = FALLBACK_LYRICS.get(str(entry.get("number", "")))
        if not fallback:
            continue
        entry["lyrics"] = fallback
        entry["text"] = fallback
        entry["firstLine"] = first_lyric_line(fallback)
        entry["lyricsExtraction"] = "Manually verified from the linked ICR preview and the corresponding Roman Missal or traditional text."
        fallback_updated += 1
        updated += 1

    extracted = sum(bool(str(entry.get("lyrics", "") or "").strip()) for entry in targets)
    refrains = sum(
        any(line.strip() == REFRAIN_MARKER for line in str(entry.get("lyrics", "") or "").splitlines())
        for entry in targets
    )

    if args.dry_run:
        for identifier, raw, lyrics in previews:
            print(f"\n=== {identifier} RAW ===\n{raw[:4000]}\n=== STRUCTURED ===\n{lyrics[:4000]}")
    else:
        save_hymn_data(source, entries, start, end)
    report = {
        "targets": len(targets),
        "lyricsPreviews": preview_report,
        "ocrTasks": len(tasks),
        "extracted": extracted,
        "updated": updated,
        "fallbackUpdated": fallback_updated,
        "refrains": refrains,
    }
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
