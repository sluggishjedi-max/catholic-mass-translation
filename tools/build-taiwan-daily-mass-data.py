#!/usr/bin/env python3
"""Build the browser-ready Taiwan daily Mass corpus from Traditional Chinese PDFs.

The CRBC daily sheets currently expose two consecutive calendar ranges.  Taken
together they contain Sunday cycles C/A and weekday cycles I/II.  Sunday cycle
B is composed from the archived B-cycle Scripture PDFs and the cycle-independent
Sunday propers in the CRBC A/C sheets.

The downloaded PDFs are cached outside the published application tree.  The
only runtime artifact is a JavaScript file, so the browser never has to fetch or
parse a PDF in order to display the readings.
"""

from __future__ import annotations

import argparse
import concurrent.futures
import datetime as dt
import io
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
TAIWAN_MODULE = ROOT / "JS file" / "countries" / "taiwan" / "taiwan_mass.js"
DEFAULT_OUTPUT = ROOT / "JS file" / "countries" / "taiwan" / "taiwan_daily_mass_data.js"
DEFAULT_CACHE = ROOT / "tmp" / "taiwan-daily-pdfs"
SUNDAY_B_READINGS_PAGE = "https://catholicchinese.org/mass_scriptures/"
SUNDAY_PROPER_PDFS = {
    "season:常年期:31": {
        "id": "sunday-proper-a31",
        "title": "常年期第卅一主日",
        "canonicalDate": "20231105",
        "driveId": "15ISYse9Cu257WrlcWS49NgszhHBpp6Lj",
    },
    "season:常年期:32": {
        "id": "sunday-proper-a32",
        "title": "常年期第卅二主日",
        "canonicalDate": "20231112",
        "driveId": "15WOOKZ0qCAPIExxc9tWrVCIctCWgv5IE",
    },
}
DRIVE_DOWNLOAD = "https://drive.usercontent.google.com/download?id={}&export=download&confirm=t"
DRIVE_VIEW = "https://drive.google.com/file/d/{}/view"
USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36"
)


def fetch_bytes(url: str, timeout: int = 60) -> bytes:
    request = urllib.request.Request(url, headers={
        "User-Agent": USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/pdf;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-TW,zh;q=0.9,en;q=0.8",
        "Referer": urllib.parse.urljoin(url, "/"),
    })
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return response.read()


def parse_manifest() -> dict[str, list[dict[str, str]]]:
    source = TAIWAN_MODULE.read_text(encoding="utf-8")
    pattern = re.compile(r'"(\d{8})":(\[\{.*?\}\])(?=,|\})')
    manifest: dict[str, list[dict[str, str]]] = {}
    for ymd, raw_entries in pattern.findall(source):
        manifest[ymd] = json.loads(raw_entries)
    if len(manifest) < 700:
        raise RuntimeError(f"Taiwan manifest unexpectedly has only {len(manifest)} dates")
    return manifest


def parse_sunday_b_reading_links() -> list[dict[str, str]]:
    # The archive's B-year PDFs use stable year/month/date URLs.  Three sheets
    # published on the first Sunday of a month were uploaded in the preceding
    # month's directory, so keep those resolved locations explicit.
    upload_overrides = {
        "20231203": (2023, 11),
        "20240602": (2024, 5),
        "20240901": (2024, 8),
    }
    # In 2023/24 the archive used Christmas Night on 24 December and the
    # Chinese Martyrs proper on 7 July.  Use the same B-cycle ordinary Sunday
    # sheets from the earlier archive so Advent IV and Ordinary XIV remain in
    # the complete universal cycle.
    cycle_replacements = {
        "20231224": dt.date(2014, 12, 21),
        "20240707": dt.date(2015, 7, 5),
    }
    result: list[dict[str, str]] = []
    date = dt.date(2023, 12, 3)
    end = dt.date(2024, 11, 24)
    while date <= end:
        current_ymd = date.strftime("%Y%m%d")
        source_date = cycle_replacements.get(current_ymd, date)
        ymd = source_date.strftime("%Y%m%d")
        upload_year, upload_month = upload_overrides.get(ymd, (source_date.year, source_date.month))
        url = (
            f"https://catholicchinese.org/wp-content/uploads/{upload_year}/"
            f"{upload_month:02d}/{source_date:%Y-%m-%d}.pdf"
        )
        result.append({"date": ymd, "url": url, "id": f"sunday-b-{ymd}"})
        date += dt.timedelta(days=7)
    if len(result) != 52 or any(sunday_cycle(dt.datetime.strptime(row["date"], "%Y%m%d").date()) != "B" for row in result):
        raise RuntimeError(f"Sunday B archive enumeration is incomplete ({len(result)} PDFs)")
    return result


CHINESE_NUMBERS = {
    "一": 1,
    "二": 2,
    "三": 3,
    "四": 4,
    "五": 5,
    "六": 6,
    "七": 7,
    "八": 8,
    "九": 9,
    "十": 10,
    "十一": 11,
    "十二": 12,
    "十三": 13,
    "十四": 14,
    "十五": 15,
    "十六": 16,
    "十七": 17,
    "十八": 18,
    "十九": 19,
    "二十": 20,
    "廿": 20,
    "二十一": 21,
    "廿一": 21,
    "二十二": 22,
    "廿二": 22,
    "二十三": 23,
    "廿三": 23,
    "二十四": 24,
    "廿四": 24,
    "二十五": 25,
    "廿五": 25,
    "二十六": 26,
    "廿六": 26,
    "二十七": 27,
    "廿七": 27,
    "二十八": 28,
    "廿八": 28,
    "二十九": 29,
    "廿九": 29,
    "三十": 30,
    "卅": 30,
    "三十一": 31,
    "卅一": 31,
    "三十二": 32,
    "卅二": 32,
    "三十三": 33,
    "卅三": 33,
    "三十四": 34,
    "卅四": 34,
}


def sunday_b_canonical_date(title: str) -> str:
    fixed = {
        "聖誕節天明彌撒": "20241225",
        "聖家節": "20231231",
        "天主之母節": "20240101",
        "主顯節": "20240107",
        "主受洗日": "20240108",
        "聖枝主日": "20240324",
        "復活主日": "20240331",
        "耶穌升天節": "20240512",
        "聖神降臨節": "20240519",
        "天主聖三節": "20240526",
        "基督聖體聖血節": "20240602",
        "聖伯鐸及聖保祿宗徒": "20240629",
        "中華殉道聖人節": "20240709",
        "聖母蒙召升天節": "20240815",
    }
    if title in fixed:
        return fixed[title]

    match = re.search(r"將臨期第(.+?)主日", title)
    if match and match.group(1) in CHINESE_NUMBERS:
        return (dt.date(2023, 12, 3) + dt.timedelta(days=7 * (CHINESE_NUMBERS[match.group(1)] - 1))).strftime("%Y%m%d")
    match = re.search(r"四旬期第(.+?)主日", title)
    if match and match.group(1) in CHINESE_NUMBERS:
        return (dt.date(2024, 2, 18) + dt.timedelta(days=7 * (CHINESE_NUMBERS[match.group(1)] - 1))).strftime("%Y%m%d")
    match = re.search(r"復活期第(.+?)主日", title)
    if match and match.group(1) in CHINESE_NUMBERS:
        return (dt.date(2024, 3, 31) + dt.timedelta(days=7 * (CHINESE_NUMBERS[match.group(1)] - 1))).strftime("%Y%m%d")
    match = re.search(r"常年期第(.+?)主日", title)
    if match and match.group(1) in CHINESE_NUMBERS:
        week = CHINESE_NUMBERS[match.group(1)]
        if 2 <= week <= 6:
            return (dt.date(2024, 1, 14) + dt.timedelta(days=7 * (week - 2))).strftime("%Y%m%d")
        if 10 <= week <= 34:
            return (dt.date(2024, 6, 9) + dt.timedelta(days=7 * (week - 10))).strftime("%Y%m%d")
    return ""


def liturgical_year(date: dt.date) -> int:
    probe = dt.date(date.year, 11, 27)
    advent = probe + dt.timedelta(days=(6 - probe.weekday()) % 7)
    return date.year + 1 if date >= advent else date.year


def sunday_cycle(date: dt.date) -> str:
    remainder = liturgical_year(date) % 3
    return "A" if remainder == 1 else ("B" if remainder == 2 else "C")


def weekday_cycle(date: dt.date) -> str:
    return "II" if date.year % 2 == 0 else "I"


def download_pdf(source_id: str, url: str, cache_dir: Path) -> Path:
    target = cache_dir / f"{source_id}.pdf"
    if target.exists() and target.stat().st_size > 1024:
        with target.open("rb") as stream:
            if stream.read(4) == b"%PDF":
                return target
    error: Exception | None = None
    for attempt in range(4):
        try:
            payload = fetch_bytes(url, timeout=75)
            if not payload.startswith(b"%PDF"):
                raise RuntimeError(f"non-PDF response ({len(payload)} bytes)")
            target.write_bytes(payload)
            return target
        except Exception as exc:  # network retries are intentionally broad
            error = exc
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(f"Failed to download {source_id}: {error}")


def extract_pdf_text(path: Path, *, layout: bool = True) -> str:
    text_cache = path.with_suffix(".txt" if layout else ".plain.txt")
    if text_cache.exists() and text_cache.stat().st_mtime >= path.stat().st_mtime:
        cached = text_cache.read_text(encoding="utf-8")
        if len(cached) >= 300:
            return cached
    reader = PdfReader(str(path))
    pages: list[str] = []
    for page in reader.pages:
        if not layout:
            text = page.extract_text() or ""
        else:
            try:
                text = page.extract_text(extraction_mode="layout") or ""
            except TypeError:
                text = page.extract_text() or ""
        pages.append(text)
    text = "\n\n".join(pages).replace("\ufeff", "").replace("\x00", "")
    lines = [line.rstrip() for line in text.replace("\r\n", "\n").replace("\r", "\n").split("\n")]
    cleaned = re.sub(r"\n{3,}", "\n\n", "\n".join(lines)).strip()
    if len(cleaned) < 300:
        raise RuntimeError(f"Extracted text is unexpectedly short: {path.name} ({len(cleaned)})")
    text_cache.write_text(cleaned, encoding="utf-8", newline="\n")
    return cleaned


def seed_text_cache_from_existing_output(output: Path, cache_dir: Path) -> int:
    if not output.exists():
        return 0
    source = output.read_text(encoding="utf-8")
    marker = "Object.freeze("
    if marker not in source:
        return 0
    try:
        payload = json.loads(source.split(marker, 1)[1].rsplit(");", 2)[0])
    except (ValueError, IndexError):
        return 0
    seeded = 0
    for source_id, record in (payload.get("records") or {}).items():
        if record.get("sourceSet") != "daily-sheet" or len(record.get("text") or "") < 300:
            continue
        pdf_path = cache_dir / f"{source_id}.pdf"
        text_path = cache_dir / f"{source_id}.txt"
        if not pdf_path.exists() or text_path.exists():
            continue
        text_path.write_text(record["text"], encoding="utf-8", newline="\n")
        seeded += 1
    return seeded


def extract_title(text: str, fallback: str) -> str:
    for line in text.splitlines():
        title = line.strip()
        if title and not re.fullmatch(r"\d+", title):
            return title[:160]
    return fallback


def compact_chinese(value: str) -> str:
    return re.sub(r"\s+", "", value or "")


def liturgical_title_key(value: str) -> str:
    compact = re.sub(r"^[甲乙丙]年", "", compact_chinese(value))
    match = re.search(r"(將臨期|四旬期|復活期|常年期)第([一二三四五六七八九十廿卅]+)主日", compact)
    if match and match.group(2) in CHINESE_NUMBERS:
        return f"season:{match.group(1)}:{CHINESE_NUMBERS[match.group(2)]}"

    specials = [
        ("special:holy-family", ("聖家節", "聖家族")),
        ("special:epiphany", ("主顯節",)),
        ("special:baptism", ("主受洗日", "耶穌受洗")),
        ("special:palm", ("聖枝主日", "基督苦難主日")),
        ("special:easter", ("復活主日", "耶穌復活")),
        ("special:ascension", ("耶穌升天", "主升天")),
        ("special:pentecost", ("聖神降臨",)),
        ("special:trinity", ("天主聖三", "聖三主日")),
        ("special:corpus", ("基督聖體聖血", "聖體聖血")),
        ("season:常年期:34", ("基督普世君王", "耶穌基督普世君王")),
    ]
    for key, labels in specials:
        if any(label in compact for label in labels):
            return key
    return ""


def find_sunday_b_title(text: str) -> str:
    compact = compact_chinese(text)
    match = re.search(r"(?:乙年)?((?:將臨期|四旬期|復活期|常年期)第[一二三四五六七八九十廿卅]+主日)", compact)
    if match:
        return match.group(1)
    if "聖枝" in compact or "苦難主日" in compact:
        return "聖枝主日"
    for label in (
        "聖家節", "主顯節", "主受洗日", "聖枝主日", "基督苦難主日",
        "復活主日", "耶穌升天節", "聖神降臨節", "天主聖三節",
        "基督聖體聖血節", "耶穌基督普世君王節", "基督普世君王節",
    ):
        if label in compact:
            return label
    return ""


def heading_kind(line: str) -> str:
    compact = compact_chinese(line)
    if re.match(r"^讀經一(?=$|[：:（(])", compact):
        return "reading1"
    if re.match(r"^答唱詠(?=$|[：:（(])", compact):
        return "psalm"
    if re.match(r"^讀經二(?=$|[：:（(])", compact):
        return "reading2"
    if re.match(r"^(?:阿肋路亞|亞肋路亞|福音前歡呼)(?=$|[：:（(])", compact):
        return "gospel_accl"
    if re.match(r"^福音(?!前歡呼)(?=$|[：:（(])", compact):
        return "gospel"
    if re.match(r"^獻禮經(?=$|[：:（(])", compact):
        return "prayer_offerings"
    return ""


def extract_quote_after(text: str, anchor: str, start: int = 0) -> tuple[str, int]:
    anchor_at = text.find(anchor, start)
    if anchor_at < 0:
        raise RuntimeError(f"CRBC Sunday proper PDF is missing {anchor}")
    quote_start = text.find("「", anchor_at + len(anchor))
    quote_end = text.find("」", quote_start + 1)
    if quote_start < 0 or quote_end < 0:
        raise RuntimeError(f"CRBC Sunday proper PDF has no quoted text after {anchor}")
    return text[quote_start + 1:quote_end].strip("：:。 "), quote_end + 1


def extract_crbc_preparation_proper(text: str, title: str) -> str:
    prayer_at = text.find("祈禱經文")
    if prayer_at < 0:
        raise RuntimeError(f"CRBC Sunday proper PDF has no prayer commentary section ({title})")
    prayer_text = compact_chinese(text[prayer_at:])
    entrance, _ = extract_quote_after(prayer_text, "「進堂詠」")
    collect, _ = extract_quote_after(prayer_text, "「集禱經」")
    offerings, _ = extract_quote_after(prayer_text, "「獻禮經」")
    communion_one, communion_end = extract_quote_after(prayer_text, "第一首「領主詠」")
    communion_two, _ = extract_quote_after(prayer_text, "另一個選擇", communion_end)
    prayer_after, _ = extract_quote_after(prayer_text, "「領聖體後經」")
    proper = "\n".join((
        title,
        "進堂詠", entrance,
        "集禱經", collect,
        "讀經一",
        "獻禮經", offerings,
        "領主詠", communion_one,
        "或", communion_two,
        "領聖體後經", prayer_after,
    ))
    required = ("進堂詠", "集禱經", "獻禮經", "領主詠", "領聖體後經")
    if any(not value.strip() for value in (entrance, collect, offerings, communion_one, communion_two, prayer_after)):
        raise RuntimeError(f"CRBC Sunday proper PDF yielded an empty prayer ({title})")
    if any(marker not in proper for marker in required):
        raise RuntimeError(f"CRBC Sunday proper PDF yielded an incomplete proper ({title})")
    return proper


def extract_proper_shell(text: str) -> tuple[str, str]:
    lines = text.splitlines()
    reading_start = next((index for index, line in enumerate(lines) if heading_kind(line) == "reading1"), -1)
    offerings_start = next((index for index, line in enumerate(lines) if index > reading_start and heading_kind(line) == "prayer_offerings"), -1)
    if reading_start < 0 or offerings_start < 0:
        raise RuntimeError("CRBC Sunday proper PDF is missing the reading or offerings boundary")
    prefix = "\n".join(lines[:reading_start]).strip()
    suffix = "\n".join(lines[offerings_start:]).strip()
    if "集禱經" not in compact_chinese(prefix) or "領聖體後經" not in compact_chinese(suffix):
        raise RuntimeError("CRBC Sunday proper shell is incomplete")
    return prefix, suffix


def normalize_b_reading_heading(line: str) -> str:
    compact = compact_chinese(line)
    patterns = [
        (r"^讀經一[：:]?", "讀經一"),
        (r"^答唱詠[：:]?", "答唱詠"),
        (r"^讀經二[：:]?", "讀經二"),
        (r"^(?:阿肋路亞|亞肋路亞|福音前歡呼)[：:]?", "福音前歡呼"),
        (r"^福音[：:]?", "福音"),
    ]
    for pattern, heading in patterns:
        match = re.match(pattern, compact)
        if match:
            rest = compact[match.end():].strip("：: ")
            return f"{heading}  {rest}".rstrip()
    return line.strip()


def extract_sunday_b_readings(text: str) -> str:
    lines = text.splitlines()
    start = next((index for index, line in enumerate(lines) if heading_kind(line) == "reading1"), -1)
    gospel = next((index for index, line in enumerate(lines) if index > start and heading_kind(line) == "gospel"), -1)
    if start < 0 or gospel < 0:
        raise RuntimeError("Sunday B Scripture PDF is missing Reading I or Gospel")

    end = -1
    for index in range(gospel + 1, len(lines)):
        compact = compact_chinese(lines[index])
        if "基督" in compact and ("我們讚美祢" in compact or "我們讚美你" in compact):
            end = index + 1
            break
        if re.match(r"^(?:彌撒中奉獻|奉獻曲|信經|堂區報告)", compact):
            end = index
            break
    if end < 0:
        raise RuntimeError("Sunday B Scripture PDF is missing the Gospel response boundary")

    normalized = [normalize_b_reading_heading(line) for line in lines[start:end]]
    block = re.sub(r"\n{3,}", "\n\n", "\n".join(normalized)).strip()
    required = ("讀經一", "答唱詠", "讀經二", "福音前歡呼", "福音")
    if len(block) < 900 or any(not re.search(rf"^{heading}(?:\s|$)", block, re.MULTILINE) for heading in required):
        raise RuntimeError("Sunday B Scripture block is incomplete after normalization")
    return block


def build_records(manifest: dict[str, list[dict[str, str]]], sunday_b: list[dict[str, str]], cache_dir: Path, workers: int) -> tuple[dict, dict, dict]:
    references: dict[str, dict] = {}
    by_date: dict[str, list[str]] = {}
    cycle_ids = {
        "sundays": {"A": [], "B": [], "C": []},
        "weekdays": {"I": [], "II": []},
    }

    def append_unique(values: list[str], value: str) -> None:
        if value not in values:
            values.append(value)

    for ymd, entries in manifest.items():
        date = dt.datetime.strptime(ymd, "%Y%m%d").date()
        by_date[ymd] = []
        for entry in entries:
            drive_id = entry["id"]
            by_date[ymd].append(drive_id)
            references.setdefault(drive_id, {
                "fallbackTitle": entry.get("title", ""),
                "canonicalDate": ymd,
                "sourceSet": "daily-sheet",
                "downloadUrl": DRIVE_DOWNLOAD.format(urllib.parse.quote(drive_id)),
                "sourceUrl": DRIVE_VIEW.format(drive_id),
            })
            if date.weekday() == 6:
                append_unique(cycle_ids["sundays"][sunday_cycle(date)], drive_id)
            else:
                append_unique(cycle_ids["weekdays"][weekday_cycle(date)], drive_id)

    for entry in sunday_b:
        source_id = entry["id"]
        references[source_id] = {
            "fallbackTitle": "",
            "canonicalDate": entry["date"],
            "sourceSet": "sunday-b-readings",
            "downloadUrl": entry["url"],
            "sourceUrl": entry["url"],
        }

    for proper in SUNDAY_PROPER_PDFS.values():
        drive_id = proper["driveId"]
        references[proper["id"]] = {
            "fallbackTitle": proper["title"],
            "canonicalDate": proper["canonicalDate"],
            "sourceSet": "sunday-proper-pdf",
            "downloadUrl": DRIVE_DOWNLOAD.format(urllib.parse.quote(drive_id)),
            "sourceUrl": DRIVE_VIEW.format(drive_id),
        }

    cache_dir.mkdir(parents=True, exist_ok=True)
    ids = sorted(references)
    print(f"Downloading/extracting {len(ids)} unique source PDFs with {workers} workers...", flush=True)

    def process(source_id: str) -> tuple[str, str]:
        ref = references[source_id]
        path = download_pdf(source_id, ref["downloadUrl"], cache_dir)
        return source_id, extract_pdf_text(path, layout=ref["sourceSet"] != "sunday-b-readings")

    extracted: dict[str, str] = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
        futures = {executor.submit(process, drive_id): drive_id for drive_id in ids}
        for index, future in enumerate(concurrent.futures.as_completed(futures), start=1):
            drive_id, text = future.result()
            extracted[drive_id] = text
            if index % 50 == 0 or index == len(ids):
                print(f"  {index}/{len(ids)} PDFs ready", flush=True)

    records: dict[str, dict] = {}
    for source_id in ids:
        ref = references[source_id]
        if ref["sourceSet"] not in {"daily-sheet", "sunday-proper-pdf"}:
            continue
        text = extracted[source_id]
        if ref["sourceSet"] == "sunday-proper-pdf":
            text = extract_crbc_preparation_proper(text, ref["fallbackTitle"])
        records[source_id] = {
            "title": extract_title(text, ref["fallbackTitle"]),
            "canonicalDate": ref["canonicalDate"],
            "sourceSet": ref["sourceSet"],
            "sourceUrl": ref["sourceUrl"],
            "text": text,
        }

    proper_candidates: dict[str, list[dict]] = {}
    for cycle in ("A", "C"):
        for source_id in cycle_ids["sundays"][cycle]:
            record = records[source_id]
            key = liturgical_title_key(record["title"])
            if key:
                proper_candidates.setdefault(key, []).append(record)
    for key, proper in SUNDAY_PROPER_PDFS.items():
        proper_candidates.setdefault(key, []).insert(0, records[proper["id"]])

    for entry in sunday_b:
        source_id = entry["id"]
        reading_text = extracted[source_id]
        reading_title = find_sunday_b_title(reading_text)
        key = liturgical_title_key(reading_title)
        candidates = proper_candidates.get(key, [])
        if not key or not candidates:
            raise RuntimeError(f"No CRBC A/C Sunday proper matches B PDF {entry['date']} ({reading_title or 'untitled'})")
        proper = candidates[0]
        prefix, suffix = extract_proper_shell(proper["text"])
        reading_block = extract_sunday_b_readings(reading_text)
        records[source_id] = {
            "title": proper["title"],
            "canonicalDate": entry["date"],
            "sourceSet": "sunday-b-composite",
            "sourceUrl": entry["url"],
            "properSourceUrl": proper["sourceUrl"],
            "text": f"{prefix}\n\n{reading_block}\n\n{suffix}",
        }
        append_unique(cycle_ids["sundays"]["B"], source_id)
    return records, by_date, cycle_ids


def write_javascript(output: Path, records: dict, by_date: dict, cycles: dict, sunday_b_count: int) -> None:
    payload = {
        "schemaVersion": 1,
        "release": "V27.3",
        "source": "CRBC daily Mass sheets with archived Traditional Chinese Sunday B Scripture sheets and CRBC A-year Sunday proper PDFs",
        "sourcePages": {
            "dailyMass": "https://sliturgy.catholic.org.tw/禮儀及聖事/禮儀經文/每日彌撒",
            "sundayBReadings": SUNDAY_B_READINGS_PAGE,
            "supplementalProperPdfs": sorted(
                DRIVE_VIEW.format(proper["driveId"]) for proper in SUNDAY_PROPER_PDFS.values()
            ),
        },
        "coverage": {
            "dateStart": min(by_date),
            "dateEnd": max(by_date),
            "dateCount": len(by_date),
            "pdfCount": len(records),
            "sundayBReadingPdfCount": sunday_b_count,
            "supplementalProperPdfCount": len(SUNDAY_PROPER_PDFS),
            "sundayCycles": {key: len(value) for key, value in cycles["sundays"].items()},
            "weekdayCycles": {key: len(value) for key, value in cycles["weekdays"].items()},
        },
        "records": records,
        "byDate": by_date,
        "cycles": cycles,
    }
    serialized = json.dumps(payload, ensure_ascii=False, separators=(",", ":"), sort_keys=True)
    source = (
        "// Generated by tools/build-taiwan-daily-mass-data.py. Do not edit by hand.\n"
        "(function registerTaiwanDailyMassData(global) {\n"
        "  'use strict';\n"
        f"  global.taiwanDailyMassTextData = Object.freeze({serialized});\n"
        "})(globalThis);\n"
    )
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(source, encoding="utf-8", newline="\n")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--cache-dir", type=Path, default=DEFAULT_CACHE)
    parser.add_argument("--workers", type=int, default=10)
    args = parser.parse_args()

    manifest = parse_manifest()
    sunday_b = parse_sunday_b_reading_links()
    seeded = seed_text_cache_from_existing_output(args.output, args.cache_dir)
    if seeded:
        print(f"Seeded {seeded} extracted-text cache files from the existing corpus", flush=True)
    records, by_date, cycles = build_records(manifest, sunday_b, args.cache_dir, max(1, args.workers))
    write_javascript(args.output, records, by_date, cycles, len(sunday_b))
    print(f"Wrote {args.output} ({args.output.stat().st_size:,} bytes)", flush=True)
    print(json.dumps({
        "dates": len(by_date),
        "pdfs": len(records),
        "sundayCycles": {key: len(value) for key, value in cycles["sundays"].items()},
        "weekdayCycles": {key: len(value) for key, value in cycles["weekdays"].items()},
    }, ensure_ascii=False), flush=True)
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except KeyboardInterrupt:
        print("Interrupted", file=sys.stderr)
        raise SystemExit(130)
