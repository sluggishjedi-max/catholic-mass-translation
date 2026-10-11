from __future__ import annotations

import argparse
import concurrent.futures
import json
import re
import subprocess
import tempfile
import unicodedata
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
HYMN_DATA = ROOT / "JS file" / "hymn_data.js"
CACHE_PATH = ROOT / "tmp" / "hymn_ocr_cache.json"
STATUS_PATH = ROOT / "tmp" / "hymn_ocr_status.json"
TESSERACT = Path(r"C:\Program Files\Tesseract-OCR\tesseract.exe")
TESSDATA = Path(r"C:\Users\slugg\.codex\tessdata")
ASCII_WORK = Path(r"C:\Users\slugg\.codex\ocr-work")
OCR_CACHE_VERSION = "v2"


def find_json_array_after(text: str, marker: str) -> tuple[list[dict], int, int]:
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
                return json.loads(text[array_start:index + 1]), array_start, index + 1
    raise ValueError("hymn data array not found")


def read_hymn_data() -> tuple[str, list[dict], int, int]:
    text = HYMN_DATA.read_text(encoding="utf-8")
    data, start, end = find_json_array_after(text, "const hymnData")
    return text, data, start, end


def write_hymn_data(wrapper: str, data: list[dict], start: int, end: int) -> None:
    body = json.dumps(data, ensure_ascii=False, indent=2)
    HYMN_DATA.write_text(wrapper[:start] + body + wrapper[end:], encoding="utf-8")


def normalize_search(value: str) -> str:
    value = (value or "").replace("Đ", "D").replace("đ", "d")
    return "".join(
        ch for ch in unicodedata.normalize("NFKD", value).lower()
        if not unicodedata.combining(ch)
    )


def normalize_compact(value: str) -> str:
    return re.sub(r"[^0-9a-z가-힣]+", "", normalize_search(value))


def line_has_letters(line: str, lang: str) -> bool:
    if lang == "kor":
        return bool(re.search(r"[가-힣]", line))
    return bool(re.search(r"[A-Za-zÀ-ỹĐđ]", line))


def mostly_noise(line: str, lang: str) -> bool:
    letters = re.findall(r"[A-Za-zÀ-ỹĐđ가-힣]", line)
    symbols = re.findall(r"[=#_\-—–~|+*<>/\\{}\[\]○●◎◆◇■□]", line)
    if len(letters) < 2:
        return True
    if len(symbols) > len(letters) * 2:
        return True
    if lang == "kor" and len(re.findall(r"[가-힣]", line)) < 2:
        return True
    if lang == "kor":
        hangul = len(re.findall(r"[가-힣]", line))
        digits = len(re.findall(r"\d", line))
        jamo = len(re.findall(r"[ㄱ-ㅎㅏ-ㅣ]", line))
        if re.search(r"[A-Za-z]", line):
            return True
        if re.search(r"[=<>^$#@{}[\]~]", line):
            return True
        if digits > max(2, hangul):
            return True
        if jamo:
            return True
        if re.search(r"([가-힣])\1{2,}", line):
            return True
        if hangul >= 4 and not re.search(r"\s", line) and not re.match(r"^\d+\.", line):
            return True
    return False


def clean_line(line: str) -> str:
    line = unicodedata.normalize("NFC", line or "")
    line = re.sub(r"[=_]{2,}", " ", line)
    line = re.sub(r"[—–-]{3,}", " ", line)
    line = re.sub(r"\s+", " ", line).strip()
    return line


def clean_ocr_text(raw: str, lang: str, title: str, composer: str = "") -> str:
    title_key = normalize_compact(title)
    composer_key = normalize_compact(composer)
    output: list[str] = []
    seen: set[str] = set()
    for raw_line in (raw or "").splitlines():
        line = clean_line(raw_line)
        if not line or not line_has_letters(line, lang) or mostly_noise(line, lang):
            continue
        key = normalize_search(line)
        compact_key = normalize_compact(line)
        if title_key and (compact_key == title_key or (title_key in compact_key and len(compact_key) <= len(title_key) + 8)):
            continue
        if composer_key and (compact_key == composer_key or (composer_key in compact_key and len(compact_key) <= len(composer_key) + 8)):
            continue
        if lang == "vie" and re.search(r"ủy ban|uy ban|thánh nhạc|thanh nhac", key):
            continue
        if lang == "vie" and re.match(r"^(lời|loi|nhạc|nhac)\s*:", key):
            continue
        if lang == "kor" and re.fullmatch(r"(연중|대림|성탄|사순|부활|성모|성체|봉헌|위령)", line):
            continue
        if key in seen:
            continue
        seen.add(key)
        output.append(line)
    return "\n".join(output).strip()


def extract_vietnamese_meta(raw: str) -> dict:
    meta: dict[str, str] = {}
    text = clean_line(raw)
    lyricist = re.search(r"L(?:ờ|o|ơ|ô)?i\s*:\s*([^\\n]+?)(?:\s+Nh(?:ạ|a)c\s*:|$)", text, re.IGNORECASE)
    composer = re.search(r"Nh(?:ạ|a)c\s*:\s*([^\\n]+?)(?:\s+L(?:ờ|o|ơ|ô)?i\s*:|$)", text, re.IGNORECASE)
    if lyricist:
        meta["lyricist"] = clean_line(lyricist.group(1))
    if composer:
        meta["composer"] = clean_line(composer.group(1))
    if re.search(r"ỦY BAN THÁNH NHẠC|UY BAN THANH NHAC|THÁNH NHẠC VIỆT NAM|THANH NHAC VIET NAM", raw, re.IGNORECASE):
        meta["copyright"] = "Ủy ban Thánh nhạc Việt Nam - 10/2022"
    return meta


def image_cache_key(path: Path) -> str:
    stat = path.stat()
    return f"{OCR_CACHE_VERSION}|{path.as_posix()}|{stat.st_size}|{int(stat.st_mtime)}"


def run_tesseract(task: tuple[str, str, str]) -> tuple[str, str]:
    key, path_text, lang = task
    source = Path(path_text)
    ASCII_WORK.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile(prefix="ocr-", suffix=".png", dir=ASCII_WORK, delete=False) as tmp:
        tmp_path = Path(tmp.name)
    try:
        image = Image.open(source)
        image = ImageOps.grayscale(image)
        image.save(tmp_path)
        cmd = [
            str(TESSERACT),
            str(tmp_path),
            "stdout",
            "--tessdata-dir",
            str(TESSDATA),
            "-l",
            lang,
            "--psm",
            "4" if lang == "kor" else "6",
        ]
        result = subprocess.run(cmd, capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=45)
        text = result.stdout or ""
        if result.returncode != 0 and not text:
            text = result.stderr or ""
        return key, text
    finally:
        try:
            tmp_path.unlink(missing_ok=True)
        except Exception:
            pass


def load_cache() -> dict[str, str]:
    if CACHE_PATH.exists():
        return json.loads(CACHE_PATH.read_text(encoding="utf-8"))
    return {}


def save_cache(cache: dict[str, str]) -> None:
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    CACHE_PATH.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")


def save_status(done: int, total: int, phase: str) -> None:
    STATUS_PATH.parent.mkdir(parents=True, exist_ok=True)
    STATUS_PATH.write_text(json.dumps({"done": done, "total": total, "phase": phase}, ensure_ascii=False), encoding="utf-8")


def target_entries(data: list[dict], sections: set[str]) -> list[dict]:
    output = []
    for entry in data:
        entry_id = str(entry.get("id", ""))
        if "vn" in sections and entry_id.startswith("vn-"):
            output.append(entry)
        elif "kr" in sections and entry_id.startswith("kr-catholic-"):
            output.append(entry)
        elif "yj" in sections and entry_id.startswith("kr-yj-"):
            output.append(entry)
    return output


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--sections", default="vn,kr,yj", help="Comma-separated sections: vn,kr,yj")
    parser.add_argument("--workers", type=int, default=6)
    parser.add_argument("--limit", type=int, default=0)
    args = parser.parse_args()

    if not TESSERACT.exists():
        raise RuntimeError(f"Tesseract not found: {TESSERACT}")
    if not (TESSDATA / "kor.traineddata").exists() or not (TESSDATA / "vie.traineddata").exists():
        raise RuntimeError(f"Required tessdata not found: {TESSDATA}")

    wrapper, data, start, end = read_hymn_data()
    sections = {value.strip().lower() for value in args.sections.split(",") if value.strip()}
    entries = target_entries(data, sections)
    if args.limit:
        entries = entries[:args.limit]

    cache = load_cache()
    tasks: list[tuple[str, str, str]] = []
    entry_image_keys: dict[str, list[str]] = {}
    for entry in entries:
        lang = "vie" if str(entry.get("id", "")).startswith("vn-") else "kor"
        keys: list[str] = []
        for image in entry.get("scoreImages") or []:
            src = image.get("src") if isinstance(image, dict) else image
            path = ROOT / str(src)
            if not path.exists():
                continue
            key = image_cache_key(path)
            keys.append(key)
            if key not in cache:
                tasks.append((key, str(path), lang))
        entry_image_keys[str(entry.get("id"))] = keys

    done = 0
    total = len(tasks)
    save_status(done, total, "ocr")
    if tasks:
        with concurrent.futures.ProcessPoolExecutor(max_workers=max(1, args.workers)) as executor:
            for key, text in executor.map(run_tesseract, tasks, chunksize=1):
                cache[key] = text
                done += 1
                if done % 20 == 0 or done == total:
                    save_cache(cache)
                    save_status(done, total, "ocr")
                    print(f"OCR {done}/{total}", flush=True)
        save_cache(cache)

    updated = 0
    for entry in entries:
        keys = entry_image_keys.get(str(entry.get("id")), [])
        raw = "\n".join(cache.get(key, "") for key in keys).strip()
        if not raw:
            continue
        lang = "vie" if str(entry.get("id", "")).startswith("vn-") else "kor"
        lyrics = clean_ocr_text(raw, lang, str(entry.get("title") or ""), str(entry.get("composer") or ""))
        if lyrics:
            entry["lyrics"] = lyrics
            entry["text"] = lyrics
            first_line = next((line for line in lyrics.splitlines() if line.strip()), "")
            if first_line:
                entry["firstLine"] = first_line
        if lang == "vie":
            meta = extract_vietnamese_meta(raw)
            for key, value in meta.items():
                if value:
                    entry[key] = value
        elif str(entry.get("id", "")).startswith("kr-catholic-") and not entry.get("copyright"):
            entry["copyright"] = "한국천주교중앙협의회"
        updated += 1

    write_hymn_data(wrapper, data, start, end)
    save_status(total, total, "done")
    print(f"Updated {updated} hymn entries", flush=True)


if __name__ == "__main__":
    main()
