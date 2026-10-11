from __future__ import annotations

import argparse
import concurrent.futures
import difflib
import json
import re
import shutil
import subprocess
import sys
import tempfile
import time
import unicodedata
import urllib.parse
import urllib.request
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "JS file" / "hymn_data.js"
OCR_CACHE_PATH = ROOT / "tmp" / "hymn_ocr_cache.json"
TITLE_OCR_CACHE_PATH = ROOT / "tmp" / "vn-hymn-title-ocr-cache.json"
DIACRITIC_CACHE_PATH = ROOT / "tmp" / "vn-hymn-title-diacritic-cache.json"
KOREAN_CACHE_PATH = ROOT / "tmp" / "vn-hymn-title-ko-cache-v2.json"
REPORT_PATH = ROOT / "tmp" / "vn-hymn-title-repair-report.json"
SELECTED_PATH = ROOT / "tmp" / "vn-hymn-title-selected.json"
SELECTED_BY_ID_PATH = ROOT / "tmp" / "vn-hymn-title-selected-by-id.json"
TRANSLATION_CHUNK_DIR = ROOT / "tmp" / "vn-title-translate-chunks"
KOREAN_OUTPUT_PATH = ROOT / "tmp" / "vn-hymn-title-korean-output.txt"
TRANSLATED_INDEX_PATH = ROOT / "tmp" / "vn-hymn-title-translated-index.json"
TESSERACT = Path(r"C:\Program Files\Tesseract-OCR\tesseract.exe")
TESSDATA = Path(r"C:\Users\slugg\.codex\tessdata")
MANUAL_VIETNAMESE_TITLES = {
    "Con tin nhiem noi Chua": "Con tín nhiệm nơi Chúa",
    "Le cac thanh": "Lễ các thánh",
    "Sao Chua goi con": "Sao Chúa gọi con",
    "Tin yeu mot Chua": "Tin yêu một Chúa",
    "Cho con duoc yen nghi": "Cho con được yên nghỉ",
    "Hang Belem": "Hang Bêlem",
    "Le dang hon phoi": "Lễ dâng hôn phối",
    "Le dang nho be": "Lễ dâng nhỏ bé",
    "O cung con Chua oi": "Ở cùng con Chúa ơi",
    "Ca dang le": "Ca dâng lễ",
    "Dang Chua": "Dâng Chúa",
    "Loi dang": "Lời dâng",
    "Con cay trong Chua": "Con cậy trông Chúa",
    "Khi con thi an": "Khi con thi ân",
    "Ca tinh tri am": "Ca tình tri âm",
    "Con nang hon len": "Con nâng hồn lên",
    "Con nay se lay gi": "Con nay sẽ lấy gì",
    "Gia liem hoi": "Gia-liêm hỡi",
    "Dan hat len cac dan oi": "Đàn hát lên các dân ơi",
    "Dang banh": "Dâng bánh",
    "Dang len": "Dâng lên",
    "Dang len Chua": "Dâng lên Chúa",
    "Tien dang": "Tiến dâng",
    "Tinh Chua": "Tình Chúa",
    "Gio doan con": "Giờ đoàn con",
    "Tim hang da": "Tìm hang đá",
    "Quy ben cung thanh": "Quỳ bên cung thánh",
    "Gio tu nan": "Giờ tử nạn",
    "Chieu em em": "Chiều êm êm",
    "Day La Vang": "Đây La Vang",
    "Thanh Gioan tien ho": "Thánh Gioan tiền hô",
    "O Chua toi": "Ôi Chúa tôi",
    "Ca khuc hong an": "Ca khúc hồng ân",
    "Chua luon con mai": "Chúa luôn còn mãi",
    "Chung con can den Chua": "Chúng con cần đến Chúa",
    "Con gi dang Ngai": "Con gì dâng Ngài",
    "Neu Vang Chua": "Nếu vắng Chúa",
    "Tuoi tho dang Chua": "Tuổi thơ dâng Chúa",
    "Bai ca bac ai": "Bài ca bác ái",
    "Cho tinh hiep nhat": "Cho tình hiệp nhất",
    "Canh hoa dang me": "Cánh hoa dâng Mẹ",
    "Khuc hat dang hoa": "Khúc hát dâng hoa",
    "Tien ve La Vang": "Tiến về La Vang",
    "Ve La Vang": "Về La Vang",
    "Chua thanh hien con": "Chúa thánh hiến con",
    "Dang len mua Xuan": "Dâng lên mùa Xuân",
    "Con da cay trong": "Con đã cậy trông",
    "Hay den dang khuc cam ta": "Hãy đến dâng khúc cảm tạ",
    "Cua le con dang": "Của lễ con dâng",
    "Dang": "Dâng",
    "Dang 1": "Dâng 1",
    "Dang 2": "Dâng 2",
    "Kinh dang": "Kinh dâng",
    "Nguyen dang len Chua": "Nguyện dâng lên Chúa",
    "Chua song trong toi": "Chúa sống trong tôi",
    "Lan dau tien": "Lần đầu tiên",
    "Le da het": "Lễ đã hết",
    "Le dang trong doi": "Lễ dâng trông đợi",
    "Le dang Giang Sinh": "Lễ dâng Giáng Sinh",
    "Cuoc doi la be dau": "Cuộc đời là bể dâu",
    "Phu hoa tiep noi phu hoa": "Phù hoa nối tiếp phù hoa",
    "Ca mung cac thanh": "Ca mừng các thánh",
    "Ngay le cac thanh": "Ngày lễ các thánh",
    "Bo le Cau hon": "Bộ lễ Cầu hồn",
    "Ve ben thien dang": "Về bến thiên đàng",
    "Ben Thien Dang": "Bên Thiên Đàng",
    "Kinh nguyen con dang": "Kinh nguyện con dâng",
    "Con hang uoc mo": "Con hằng ước mơ",
    "Dang dang len": "Dâng dâng lên",
    "Dang tam hon dem dong": "Dâng tâm hồn đêm đông",
    "Giao dan ta hay nang loi": "Giáo dân ta hãy nâng lời",
    "Tinh cha nghia me": "Tình cha nghĩa mẹ",
    "Len den thanh": "Lên đền thánh",
    "Le hien linh": "Lễ Hiển Linh",
    "Mot Hai Nhi 1 be": "Một Hài Nhi",
    "Mot Hai Nhi 3 be": "Một Hài Nhi",
    "Belem oi": "Bê-lem ơi",
    "Xin on giao chien": "Xin ơn giao chiến",
    "Thanh Roco": "Thánh Rôcô",
    "Thanh Rôcốp": "Thánh Rôcô",
    "Thanh Phanxico Xavie": "Thánh Phanxicô Xaviê",
    "Khai hoan ca": "Khải hoàn ca",
    "Cau cho linh muc": "Cầu cho linh mục",
    "Bi Tich cao quy": "Bí tích cao quý",
}
MANUAL_KOREAN_TITLES = {
    "Ca lên đi 2": "모든 민족들아, 노래하여라 2",
    "Hang Bêlem": "베들레헴 동굴",
    "Lễ dâng hôn phối": "혼인 봉헌 예식",
    "Lễ dâng nhỏ bé": "작은 봉헌",
    "Ở cùng con Chúa ơi": "주님, 저와 함께 머무소서",
    "Thánh Rôcô": "성 로코",
    "Thánh Phanxicô Xaviê": "성 프란치스코 하비에르",
}


def find_json_array(text: str) -> tuple[list[dict], int, int]:
    start = text.index("[", text.index("const hymnData"))
    depth = 0
    in_string = False
    escaped = False
    for index in range(start, len(text)):
        char = text[index]
        if in_string:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
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
                return json.loads(text[start:index + 1]), start, index + 1
    raise ValueError("hymn data array not found")


def load_json(path: Path) -> dict:
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8"))


def save_json(path: Path, value: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding="utf-8")


def fold(value: str) -> str:
    value = (value or "").replace("Đ", "D").replace("đ", "d")
    value = "".join(
        char for char in unicodedata.normalize("NFKD", value).lower()
        if not unicodedata.combining(char)
    )
    return re.sub(r"[^a-z0-9]+", " ", value).strip()


def accent_key(value: str) -> str:
    value = unicodedata.normalize("NFC", value or "").lower()
    return re.sub(r"[^0-9a-zà-ỹđ]+", " ", value).strip()


def diacritic_count(value: str) -> int:
    decomposed = unicodedata.normalize("NFD", value or "")
    return sum(unicodedata.combining(char) != 0 for char in decomposed) + sum(char in "Đđ" for char in value or "")


def source_title(entry: dict) -> str:
    current = str(entry.get("title") or "").strip()
    for alias in reversed(list(entry.get("searchAliases") or [])):
        alias = str(alias or "").strip()
        if alias and fold(alias) == fold(current) and diacritic_count(alias) == 0:
            return alias
    return current


def clean_ocr_line(value: str) -> str:
    value = unicodedata.normalize("NFC", value or "")
    value = re.sub(r"\s+", " ", value).strip(" `~_|-=—–.,:;\"'()[]{}")
    return value.strip()


def title_tokens(value: str) -> list[str]:
    return re.findall(r"[0-9A-Za-zÀ-ỹĐđ]+", unicodedata.normalize("NFC", value or ""))


def marked_token_score(candidate: str, ocr_window: str) -> float | None:
    candidate_tokens = title_tokens(candidate)
    ocr_tokens = title_tokens(ocr_window)
    if not candidate_tokens or len(candidate_tokens) != len(ocr_tokens):
        return None
    marked_indexes = [index for index, token in enumerate(ocr_tokens) if diacritic_count(token) > 0]
    if not marked_indexes:
        return None
    return sum(
        difflib.SequenceMatcher(None, accent_key(candidate_tokens[index]), accent_key(ocr_tokens[index])).ratio()
        for index in marked_indexes
    ) / len(marked_indexes)


def best_title_window(source: str, raw: str) -> tuple[float, str]:
    target = fold(source)
    target_words = target.split()
    best = (0.0, "")
    for raw_line in (raw or "").splitlines()[:18]:
        line = clean_ocr_line(raw_line[:280])
        words = line.split()[:32]
        if not words:
            continue
        folded_words = [fold(word) for word in words]
        likely_starts = [
            index for index, word in enumerate(folded_words)
            if target_words and difflib.SequenceMatcher(None, target_words[0], word).ratio() >= 0.55
        ]
        starts = likely_starts or list(range(min(len(words), 8)))
        sizes = range(max(1, len(target_words) - 1), min(len(words), len(target_words) + 1) + 1)
        for size in sizes:
            for start in starts:
                if start + size > len(words):
                    continue
                window = " ".join(words[start:start + size])
                score = difflib.SequenceMatcher(None, target, fold(window)).ratio()
                if target and (target in fold(window) or fold(window) in target):
                    score = max(score, min(len(target), len(fold(window))) / max(len(target), len(fold(window))))
                if score > best[0]:
                    best = (score, window)
    return best


def existing_ocr_by_asset() -> dict[str, str]:
    output: dict[str, str] = {}
    for key, value in load_json(OCR_CACHE_PATH).items():
        normalized = key.replace("\\", "/")
        marker = normalized.lower().find("/assets/")
        if marker >= 0:
            output[normalized[marker + 1:].split("|")[0]] = value
    return output


def crop_ocr_key(path: Path) -> str:
    stat = path.stat()
    return f"title-v1|{path.as_posix()}|{stat.st_size}|{int(stat.st_mtime)}"


def run_title_ocr(path: Path) -> str:
    if not TESSERACT.exists() or not (TESSDATA / "vie.traineddata").exists():
        return ""
    with Image.open(path) as image:
        image = ImageOps.grayscale(image)
        crop_height = max(240, int(image.height * 0.34))
        image = image.crop((0, 0, image.width, min(image.height, crop_height)))
        image = image.resize((int(image.width * 1.5), int(image.height * 1.5)))
        with tempfile.NamedTemporaryFile(prefix="vn-title-", suffix=".png", delete=False) as temp:
            temp_path = Path(temp.name)
        try:
            image.save(temp_path)
            result = subprocess.run(
                [
                    str(TESSERACT), str(temp_path), "stdout",
                    "--tessdata-dir", str(TESSDATA), "-l", "vie", "--psm", "11",
                ],
                capture_output=True,
                text=True,
                encoding="utf-8",
                errors="replace",
                timeout=45,
            )
            return result.stdout or ""
        finally:
            temp_path.unlink(missing_ok=True)


def input_tools_candidates(source: str) -> list[str]:
    query = urllib.parse.urlencode({"text": source, "itc": "vi-t-i0-und", "num": "10"})
    url = f"https://inputtools.google.com/request?{query}"
    last_error: Exception | None = None
    for attempt in range(6):
        try:
            with urllib.request.urlopen(url, timeout=25) as response:
                payload = json.loads(response.read().decode("utf-8"))
            if payload and payload[0] == "SUCCESS":
                candidates = payload[1][0][1]
                return [unicodedata.normalize("NFC", str(item)).strip() for item in candidates if str(item).strip()]
        except Exception as error:
            last_error = error
            time.sleep(0.6 * (attempt + 1))
    if last_error:
        raise last_error
    return []


def choose_diacritized_title(source: str, candidates: list[str], ocr_text: str) -> tuple[str, dict]:
    if source in MANUAL_VIETNAMESE_TITLES:
        selected = MANUAL_VIETNAMESE_TITLES[source]
        ocr_score, ocr_window = best_title_window(source, ocr_text)
        return selected, {
            "source": source, "selected": selected, "ocrScore": round(ocr_score, 4),
            "ocrWindow": ocr_window, "candidateScore": 1.0, "usedTopCandidate": False,
            "candidates": [selected], "manual": True,
        }
    unique: list[str] = []
    for candidate in candidates:
        if candidate and candidate not in unique:
            unique.append(candidate)
    compatible = [candidate for candidate in unique if fold(candidate) == fold(source)]
    pool = compatible or unique or [source]
    top_candidate = pool[0]
    required_terms = []
    if re.search(r"\bChua\b", source): required_terms.append("Chúa")
    if re.search(r"\bGiesu\b", source): required_terms.append("Giêsu")
    if re.search(r"\bThien\b", source): required_terms.append("Thiên")
    if re.search(r"\bKito\b", source): required_terms.append("Kitô")
    viable = pool
    for term in required_terms:
        constrained = [candidate for candidate in viable if term in candidate]
        if constrained:
            viable = constrained
    ocr_score, ocr_window = best_title_window(source, ocr_text)
    scored = []
    for index, candidate in enumerate(viable):
        accent_score = difflib.SequenceMatcher(None, accent_key(candidate), accent_key(ocr_window)).ratio() if ocr_window else 0.0
        token_score = marked_token_score(candidate, ocr_window)
        scored.append((token_score if token_score is not None else -1.0, accent_score, -pool.index(candidate), candidate))
    scored.sort(reverse=True)
    selected = scored[0][3]
    selected_raw_score = scored[0][1]
    if not ocr_window or ocr_score < 0.70 or scored[0][0] < 0:
        selected = top_candidate
    return selected, {
        "source": source,
        "selected": selected,
        "ocrScore": round(ocr_score, 4),
        "ocrWindow": ocr_window,
        "candidateScore": round(selected_raw_score, 4),
        "usedTopCandidate": selected == top_candidate,
        "candidates": pool,
    }


def google_translate(source: str, target: str = "ko") -> str:
    body = json.dumps({
        "kind": "translateFallback",
        "sourceLang": "vi",
        "targetLang": target,
        "text": source,
    }, ensure_ascii=False).encode("utf-8")
    request = urllib.request.Request(
        "https://us-central1-ordinary-mass-app.cloudfunctions.net/geminiProxy",
        data=body,
        headers={"Content-Type": "application/json; charset=UTF-8"},
        method="POST",
    )
    last_error: Exception | None = None
    for attempt in range(6):
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                payload = json.loads(response.read().decode("utf-8"))
            translated = str(payload.get("text") or "").strip()
            if translated:
                return translated
        except Exception as error:
            last_error = error
            time.sleep(4.0 * (attempt + 1))
    if last_error:
        raise last_error
    raise RuntimeError(f"empty Korean translation: {source}")


def translate_title_batch(titles: list[str]) -> dict[str, str]:
    rows = [(f"HT{index:04d}", title) for index, title in enumerate(titles)]
    translated = google_translate("\n".join(f"{marker} {title}" for marker, title in rows))
    found: dict[str, str] = {}
    for line in translated.splitlines():
        match = re.search(r"HT\d{4}", line)
        if not match:
            continue
        value = line.replace(match.group(0), "", 1).strip(" :|.,-")
        if value:
            found[match.group(0)] = value
    output: dict[str, str] = {}
    for marker, title in rows:
        value = found.get(marker)
        if not value:
            value = google_translate(title)
        output[title] = value
    return output


def normalize_catholic_korean_title(value: str) -> str:
    value = re.sub(r"\s+", " ", value or "").strip()
    return value.replace("하나님", "하느님")


def imported_korean_titles(selected_rows: list[dict]) -> dict[str, str]:
    if not KOREAN_OUTPUT_PATH.exists():
        return {}
    index_rows = load_json(TRANSLATED_INDEX_PATH) if TRANSLATED_INDEX_PATH.exists() else selected_rows
    title_by_marker = {row["marker"]: row["title"] for row in index_rows}
    output: dict[str, str] = {}
    for raw_line in KOREAN_OUTPUT_PATH.read_text(encoding="utf-8").splitlines():
        for match in re.finditer(r"(HT\d{4})\s+(.+?)(?=\s+HT\d{4}|$)", raw_line.strip()):
            if match.group(1) not in title_by_marker:
                continue
            output[title_by_marker[match.group(1)]] = normalize_catholic_korean_title(match.group(2))
    return output


def main() -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    parser = argparse.ArgumentParser()
    parser.add_argument("--workers", type=int, default=8)
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--prepare-only", action="store_true")
    args = parser.parse_args()

    wrapper = DATA_PATH.read_text(encoding="utf-8")
    data, start, end = find_json_array(wrapper)
    entries = [entry for entry in data if entry.get("country") == "VN"]
    if args.limit:
        entries = entries[:args.limit]

    general_ocr = existing_ocr_by_asset()
    title_ocr_cache = load_json(TITLE_OCR_CACHE_PATH)
    ocr_by_id: dict[str, str] = {}
    low_ocr_tasks: list[tuple[str, Path]] = []
    for entry in entries:
        images = entry.get("scoreImages") or []
        if not images:
            ocr_by_id[entry["id"]] = ""
            continue
        relative = str(images[0].get("src") or "").replace("\\", "/")
        image_path = ROOT / relative
        raw = general_ocr.get(relative, "")
        base_score, _ = best_title_window(source_title(entry), raw)
        key = crop_ocr_key(image_path) if image_path.exists() else ""
        if key and key in title_ocr_cache:
            raw = f"{raw}\n{title_ocr_cache[key]}"
        elif key and base_score < 0.86:
            low_ocr_tasks.append((key, image_path))
        ocr_by_id[entry["id"]] = raw

    if low_ocr_tasks:
        with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, min(args.workers, 6))) as executor:
            futures = {executor.submit(run_title_ocr, path): (key, path) for key, path in low_ocr_tasks}
            for index, future in enumerate(concurrent.futures.as_completed(futures), 1):
                key, _ = futures[future]
                title_ocr_cache[key] = future.result()
                if index % 20 == 0:
                    print(f"title OCR {index}/{len(low_ocr_tasks)}", flush=True)
        save_json(TITLE_OCR_CACHE_PATH, title_ocr_cache)
        for entry in entries:
            images = entry.get("scoreImages") or []
            if not images:
                continue
            relative = str(images[0].get("src") or "").replace("\\", "/")
            image_path = ROOT / relative
            if image_path.exists():
                ocr_by_id[entry["id"]] = f"{general_ocr.get(relative, '')}\n{title_ocr_cache.get(crop_ocr_key(image_path), '')}"

    diacritic_cache = load_json(DIACRITIC_CACHE_PATH)
    sources = sorted({source_title(entry) for entry in entries if source_title(entry)})
    pending_sources = [source for source in sources if source not in diacritic_cache]
    if pending_sources:
        with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, args.workers)) as executor:
            futures = {executor.submit(input_tools_candidates, source): source for source in pending_sources}
            for index, future in enumerate(concurrent.futures.as_completed(futures), 1):
                source = futures[future]
                try:
                    diacritic_cache[source] = future.result()
                except Exception as error:
                    print(f"WARN diacritics {source}: {error}")
                    diacritic_cache[source] = [source]
                if index % 40 == 0:
                    save_json(DIACRITIC_CACHE_PATH, diacritic_cache)
                    print(f"diacritics {index}/{len(pending_sources)}", flush=True)
        save_json(DIACRITIC_CACHE_PATH, diacritic_cache)

    audit: list[dict] = []
    selected_by_id: dict[str, str] = {}
    for entry in entries:
        source = source_title(entry)
        selected, row = choose_diacritized_title(source, diacritic_cache.get(source, [source]), ocr_by_id.get(entry["id"], ""))
        row["id"] = entry["id"]
        row["hasScoreImage"] = bool(entry.get("scoreImages"))
        selected_by_id[entry["id"]] = selected
        audit.append(row)

    korean_cache = load_json(KOREAN_CACHE_PATH)
    selected_titles = sorted(set(selected_by_id.values()))
    save_json(SELECTED_BY_ID_PATH, [
        {"id": entry["id"], "source": source_title(entry), "title": selected_by_id[entry["id"]]}
        for entry in entries
    ])
    selected_rows = [{"marker": f"HT{index:04d}", "title": title} for index, title in enumerate(selected_titles)]
    save_json(SELECTED_PATH, selected_rows)
    TRANSLATION_CHUNK_DIR.mkdir(parents=True, exist_ok=True)
    for old_chunk in TRANSLATION_CHUNK_DIR.glob("chunk-*.txt"):
        old_chunk.unlink()
    chunk_lines: list[str] = []
    chunk_length = 0
    chunk_number = 1
    for row in selected_rows:
        line = f"{row['marker']} {row['title']}"
        if chunk_lines and chunk_length + len(line) + 1 > 4200:
            (TRANSLATION_CHUNK_DIR / f"chunk-{chunk_number:02d}.txt").write_text("\n".join(chunk_lines), encoding="utf-8")
            chunk_number += 1
            chunk_lines = []
            chunk_length = 0
        chunk_lines.append(line)
        chunk_length += len(line) + 1
    if chunk_lines:
        (TRANSLATION_CHUNK_DIR / f"chunk-{chunk_number:02d}.txt").write_text("\n".join(chunk_lines), encoding="utf-8")
    if args.prepare_only:
        preview_report = {
            "entries": len(entries), "uniqueTitles": len(selected_titles), "chunks": chunk_number,
            "withScoreImages": sum(bool(entry.get("scoreImages")) for entry in entries),
            "withoutScoreImages": [entry["id"] for entry in entries if not entry.get("scoreImages")],
            "ocrAtLeast90": sum(row["ocrScore"] >= 0.90 for row in audit),
            "review": [row for row in audit if row["ocrScore"] < 0.70 or row["candidateScore"] < 0.85],
        }
        save_json(REPORT_PATH, preview_report)
        print(json.dumps({key: value for key, value in preview_report.items() if key != "review"}, ensure_ascii=False, indent=2))
        return
    korean_cache.update(imported_korean_titles(selected_rows))
    korean_cache.update(MANUAL_KOREAN_TITLES)
    save_json(KOREAN_CACHE_PATH, korean_cache)
    pending_korean = [title for title in selected_titles if title not in korean_cache]
    if pending_korean:
        batch_size = 15
        for start_index in range(0, len(pending_korean), batch_size):
            batch = pending_korean[start_index:start_index + batch_size]
            korean_cache.update(translate_title_batch(batch))
            save_json(KOREAN_CACHE_PATH, korean_cache)
            print(f"Korean titles {min(start_index + batch_size, len(pending_korean))}/{len(pending_korean)}", flush=True)
            time.sleep(0.8)
        save_json(KOREAN_CACHE_PATH, korean_cache)

    for entry in entries:
        old_title = str(entry.get("title") or "").strip()
        title = selected_by_id[entry["id"]]
        entry["title"] = title
        entry["displayTitle"] = f"{entry.get('number', '')}. {title}".strip()
        translations = entry.setdefault("translations", {})
        translations.setdefault("VN", {})["title"] = title
        translations.setdefault("KR", {})["title"] = korean_cache[title]
        aliases = list(entry.get("searchAliases") or [])
        for alias in (old_title, title):
            if alias and alias not in aliases:
                aliases.append(alias)
        entry["searchAliases"] = aliases

    report = {
        "entries": len(entries),
        "withScoreImages": sum(bool(entry.get("scoreImages")) for entry in entries),
        "withoutScoreImages": [entry["id"] for entry in entries if not entry.get("scoreImages")],
        "ocrAtLeast90": sum(row["ocrScore"] >= 0.90 for row in audit),
        "ocrBelow70": sum(row["ocrScore"] < 0.70 for row in audit),
        "selectedNonTopCandidate": sum(not row["usedTopCandidate"] for row in audit),
        "lowConfidence": [row for row in audit if row["ocrScore"] < 0.70 or row["candidateScore"] < 0.64],
        "review": [row for row in audit if row["candidateScore"] < 0.85],
        "sample": audit[:30],
    }
    save_json(REPORT_PATH, report)

    if not args.dry_run:
        backup = ROOT / "tmp" / f"hymn_data.backup-vn-title-scores-{int(time.time())}.js"
        backup.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(DATA_PATH, backup)
        body = json.dumps(data, ensure_ascii=False, indent=2)
        DATA_PATH.write_text(wrapper[:start] + body + wrapper[end:], encoding="utf-8")
        report["backup"] = str(backup)
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
