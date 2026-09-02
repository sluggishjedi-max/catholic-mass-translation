from __future__ import annotations

import concurrent.futures
import argparse
import json
import re
import threading
import time
from pathlib import Path

import requests
from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT / "tmp" / "italy-cei-parishes"
OUTPUT = ROOT / "JS file" / "countries" / "italy" / "italy_churches.js"
DIRECTORY_URL = "https://www.chiesacattolica.it/annuario-cei/ricerca-parrocchie/"
AJAX_URL = "https://www.chiesacattolica.it/wp-admin/admin-ajax.php"
EXPECTED_COUNT = 25486
LAST_PAGE = 1275
THREAD_LOCAL = threading.local()


def session() -> requests.Session:
    value = getattr(THREAD_LOCAL, "session", None)
    if value is None:
        value = requests.Session()
        value.headers.update({"User-Agent": "OrdoMissae parish directory verifier/27.5"})
        THREAD_LOCAL.session = value
    return value


def get_with_retries(url: str, *, params: dict | None = None, timeout: int = 45) -> requests.Response:
    last_error: Exception | None = None
    for attempt in range(6):
        try:
            response = session().get(url, params=params, timeout=timeout)
            response.raise_for_status()
            return response
        except Exception as error:
            last_error = error
            time.sleep(min(12, 1.5 * (attempt + 1)))
    raise RuntimeError(f"Failed to download {url}: {last_error}")


def page_html(page: int) -> str:
    CACHE.mkdir(parents=True, exist_ok=True)
    path = CACHE / f"page-{page:04d}.html"
    if path.exists() and path.stat().st_size > 10_000:
        return path.read_text(encoding="utf-8")
    response = get_with_retries(DIRECTORY_URL, params={"pagina": page})
    path.write_text(response.text, encoding="utf-8")
    return response.text


def clean(value: str) -> str:
    text = value or ""
    # A subset of CEI href attributes is UTF-8 text exposed through a legacy
    # Latin-1 declaration.  Repair only strings carrying the usual mojibake
    # sentinels so already-correct Italian names remain untouched.
    for broken, repaired in {
        "Ã ": "à", "Ã ": "à", "Ã¨": "è", "Ã©": "é", "Ã¬": "ì",
        "Ã²": "ò", "Ã¹": "ù", "Ã‰": "É", "â€™": "’",
    }.items():
        text = text.replace(broken, repaired)
    if re.search(r"[\u00c2\u00c3\u00e2]", text):
        try:
            text = text.encode("cp1252").decode("utf-8")
        except (UnicodeEncodeError, UnicodeDecodeError):
            pass
    return re.sub(r"\s+", " ", text).strip(" ,")


def parse_page(page: int) -> list[dict]:
    soup = BeautifulSoup(page_html(page), "html.parser")
    entries = []
    for article in soup.select("article.seed-post.dettaglio-parrocchia"):
        container = article.select_one("div[id^='parrocchia_']")
        title = article.select_one(".cci-singlecommep-title")
        diocese = article.select_one(".cci-singleparrocchia-diocesi")
        address = article.select_one(".cci-singleparrocchia-indirizzo")
        if not container or not title:
            continue
        parish_id = clean(container.get("id", "").replace("parrocchia_", ""))
        links = [link for link in article.select(".parr-buttons a[href]") if link.get("href")]
        external = clean(next((link.get("href") for link in links if "beweb" in link.get_text(" ", strip=True).lower()), ""))
        mass_times = clean(next((link.get("href") for link in links if "orari" in link.get_text(" ", strip=True).lower()), ""))
        diocese_link = article.select_one(".cci-singleparrocchia-diocesi a[href]")
        record = {
            "country": "IT",
            "name": clean(title.get_text(" ", strip=True)),
            "parishId": parish_id,
            "diocese": clean(diocese.get_text(" ", strip=True) if diocese else ""),
            "address": clean(address.get_text(" ", strip=True) if address else ""),
            "sourceUrl": f"{DIRECTORY_URL}?pagina={page}#parrocchia_{parish_id}",
            "sourceName": "Annuario CEI — Ricerca Parrocchie",
            "sourceAuthority": "Conferenza Episcopale Italiana",
        }
        if diocese_link:
            record["dioceseUrl"] = clean(diocese_link.get("href"))
        if external:
            record["website"] = external
        if mass_times:
            record["massTimesUrl"] = mass_times
        entries.append(record)
    if not entries:
        raise RuntimeError(f"No parishes found on CEI page {page}")
    return entries


def coordinates() -> dict[str, tuple[float, float]]:
    path = CACHE / "markers.json"
    if path.exists() and path.stat().st_size > 100_000:
        payload = json.loads(path.read_text(encoding="utf-8"))
    else:
        response = get_with_retries(
            AJAX_URL,
            params={
                "action": "cci_get_parrocchie_markers",
                "regione": "",
                "diocesi": "",
                "provincia": "",
                "comune": "",
                "nome": "",
            },
            timeout=150,
        )
        payload = response.json()
        path.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")
    markers = payload.get("data", {}).get("markers", [])
    return {
        str(marker.get("codice_icsc")): (marker.get("lat"), marker.get("lon"))
        for marker in markers
        if marker.get("codice_icsc") and marker.get("lat") is not None and marker.get("lon") is not None
    }


def write_module(entries: list[dict]) -> None:
    data = json.dumps(entries, ensure_ascii=False, separators=(",", ":"))
    module = f"""// Italy CEI (Beta) — complete official national parish directory snapshot.\n(function registerItalyChurches(global) {{\n  'use strict';\n  global.countryChurchData = global.countryChurchData || {{}};\n  const entries = Object.freeze({data});\n  global.countryChurchData.IT = Object.freeze({{\n    schemaVersion: 2,\n    jurisdiction: 'IT',\n    jurisdictions: Object.freeze(['IT']),\n    conference: 'Conferenza Episcopale Italiana (CEI)',\n    source: Object.freeze({{\n      title: 'Annuario CEI — Ricerca Parrocchie',\n      authority: 'Conferenza Episcopale Italiana',\n      url: '{DIRECTORY_URL}',\n      publishedCount: {EXPECTED_COUNT},\n      fetchedAt: '2026-09-01'\n    }}),\n    entries\n  }});\n}})(globalThis);\n"""
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(module, encoding="utf-8")


def normalize_existing_module() -> list[dict]:
    source = OUTPUT.read_text(encoding="utf-8")
    prefix = "const entries = Object.freeze("
    suffix = ");\n  global.countryChurchData.IT"
    start = source.index(prefix) + len(prefix)
    end = source.index(suffix, start)
    entries = json.loads(source[start:end])
    return [
        {key: clean(value) if isinstance(value, str) else value for key, value in entry.items()}
        for entry in entries
    ]


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--normalize-existing",
        action="store_true",
        help="Normalize the already-generated CEI snapshot without reparsing cached pages.",
    )
    args = parser.parse_args()
    if args.normalize_existing:
        records = normalize_existing_module()
        if len(records) != EXPECTED_COUNT:
            raise SystemExit(f"CEI count mismatch: expected {EXPECTED_COUNT}, found {len(records)}")
        write_module(records)
        print(f"Normalized {OUTPUT} with {len(records)} parishes")
        return
    records: list[dict] = []
    completed = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=32) as executor:
        futures = {executor.submit(parse_page, page): page for page in range(1, LAST_PAGE + 1)}
        for future in concurrent.futures.as_completed(futures):
            page = futures[future]
            records.extend(future.result())
            completed += 1
            if completed % 50 == 0 or completed == LAST_PAGE:
                print(f"Downloaded {completed}/{LAST_PAGE} CEI pages ({len(records)} records so far)", flush=True)
    by_id = {entry["parishId"]: entry for entry in records}
    if len(by_id) != EXPECTED_COUNT:
        raise SystemExit(f"CEI count mismatch: expected {EXPECTED_COUNT}, found {len(by_id)}")
    marker_map = coordinates()
    for parish_id, entry in by_id.items():
        point = marker_map.get(parish_id)
        if point:
            entry["lat"], entry["lng"] = point
    ordered = sorted(by_id.values(), key=lambda entry: (entry["diocese"], entry["name"], entry["parishId"]))
    write_module(ordered)
    print(f"Wrote {OUTPUT} with {len(ordered)} parishes and {sum('lat' in entry for entry in ordered)} coordinates")


if __name__ == "__main__":
    main()
