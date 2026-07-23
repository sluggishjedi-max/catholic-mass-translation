#!/usr/bin/env python3
"""Build local parish details from official Catholic directories.

The generated JavaScript deliberately keeps source URLs and does not invent
missing clergy, religious-community, or Mass-time data.
"""

from __future__ import annotations

import argparse
import concurrent.futures
import dataclasses
import datetime as dt
import html
import json
import re
import threading
import time
import tempfile
import unicodedata
import urllib.parse
from pathlib import Path

import requests
from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = ROOT / "JS file" / "church_local_details.js"
CACHE_DIR = Path(tempfile.gettempdir()) / "order-of-mass-church-sources"
KOREA_LIST_URL = (
    "https://directory.cbck.or.kr/onlineaddress/SearchList.aspx?"
    "cgubn=g&gubn=4&gyogu=all&tbxSearch=&start={start}&paged=50&"
    "sort=0&gubn2=all&char=all"
)
KOREA_BASE_URL = "https://directory.cbck.or.kr/onlineaddress/"
KOREA_SOURCE_URL = KOREA_LIST_URL.format(start=1)
VATICAN_SOURCE_URL = "https://www.vatican.va/content/vatican/en/info.html"
SUWON_LIST_URL = "https://www.casuwon.or.kr/parish/parish/1"
SUWON_BASE_URL = "https://www.casuwon.or.kr/"
CANTHO_ADDRESS_URL = "https://gpcantho.com/dia-chi-cac-giao-xu-giao-phan-can-tho/"
CANTHO_MASS_URL = "https://gpcantho.com/gio-le-cac-nha-tho-trong-giao-phan-can-tho-2/"
CANTHO_PRIESTS_URL = "https://gpcantho.com/danh-sach-linh-muc-doan-giao-phan-can-tho-tu-thang-11-nam-2025/"
CANTHO_PRIESTS_DRIVE_ID = "1anYoEw10NybGEBur7UtPrd719xjVbbhy"
GOODNEWS_PARISH_API = "https://catholicapi.catholic.or.kr/app/parish/getParishList.asp"
GOODNEWS_PARISH_DETAIL = "https://maria.catholic.or.kr/mobile/church/bondang_view.asp?app=goodnews&orgnum={orgnum}"
HCMC_MASS_LIST_URL = "https://tgpsaigon.net/gio-le/"
HCMC_MASS_API_URL = "https://tgpsaigon.net/ArchDiocese/LoadMassTime"
HCMC_BASE_URL = "https://tgpsaigon.net/"
HANOI_PARISH_CATEGORY_URL = "https://www.tonggiaophanhanoi.org/category/to-chuc-tgp/cac-giao-xu/"
HANOI_BASE_URL = "https://www.tonggiaophanhanoi.org/"
GIOLE_BASE_URL = "https://giole.vn/"
BARIA_BASE_URL = "https://www.giaophanbaria.org/"
BARIA_MASS_URL = urllib.parse.urljoin(
    BARIA_BASE_URL,
    "van-hoa/gio-cu-hanh-phung-vu-chua-nhat-va-ngay-thuong-va-gio-cong-tac-muc-vu-khac",
)
BARIA_DEANERY_URLS = {
    "Bà Rịa": urllib.parse.urljoin(BARIA_BASE_URL, "giao-hat/hat-ba-ria-html"),
    "Bình Giã": urllib.parse.urljoin(BARIA_BASE_URL, "giao-hat/hat-binh-gia"),
    "Long Hương": urllib.parse.urljoin(BARIA_BASE_URL, "giao-hat/hat-long-huong"),
    "Vũng Tàu": urllib.parse.urljoin(BARIA_BASE_URL, "giao-hat/hat-vung-tau"),
    "Xuyên Mộc": urllib.parse.urljoin(BARIA_BASE_URL, "giao-hat/hat-xuyen-moc"),
}
VIETNAM_MISSION_DIRECTORY_BASE = "https://vntaiwan.catholic.org.tw/vnchurch/"
GIOLE_LIVESEARCH_URL = urllib.parse.urljoin(GIOLE_BASE_URL, "livesearch.php")
VIETNAM_REMAINING_DIOCESES = {
    "Giáo phận Lạng Sơn – Cao Bằng": {
        "directory": "langson.htm",
        "official": "https://giaophanlangson.net/",
    },
    "Giáo phận Hưng Hóa": {
        "directory": "hunghoa.htm",
        "official": "https://giaophanhunghoa.org/vi/giao-phan/giao-hat-giao-xu/",
    },
    "Giáo phận Bắc Ninh": {
        "directory": "bacninh.htm",
        "official": "https://giaophanbacninh.org/",
    },
    "Giáo phận Hải Phòng": {
        "directory": "haiphong.htm",
        "official": "https://gphaiphong.org/chi-tiet/giao-hat-giao-xu",
    },
    "Giáo phận Thái Bình": {
        "directory": "thaibinh.htm",
        "official": "https://giaophanthaibinh.org/",
    },
    "Giáo phận Bùi Chu": {
        "directory": "buichu.htm",
        "official": "https://gpbuichu.org/index.php/giao-phan/Giao-hat.html",
    },
    "Giáo phận Phát Diệm": {
        "directory": "phatdiem.htm",
        "official": "https://phatdiem.org/cac-giao-hat.html",
    },
    "Giáo phận Thanh Hóa": {
        "directory": "thanhhoa.htm",
        "official": "https://giaophanthanhhoa.net/",
    },
    "Giáo phận Vinh": {
        "directory": "vinh.htm",
        "official": "https://giaophanvinh.net/",
    },
    "Giáo phận Hà Tĩnh": {
        "directory": "hatinh.htm",
        "official": "https://giaophanhatinh.com/",
    },
    "Tổng Giáo phận Huế": {
        "directory": "hue.htm",
        "official": "https://tonggiaophanhue.net/",
    },
    "Giáo phận Đà Nẵng": {
        "directory": "danang.htm",
        "official": "https://giaophandanang.org/",
    },
    "Giáo phận Qui Nhơn": {
        "directory": "quinhon.htm",
        "official": "https://gpquinhon.org/",
    },
    "Giáo phận Kontum": {
        "directory": "kontum.htm",
        "official": "https://giaophankontum.com/",
    },
    "Giáo phận Nha Trang": {
        "directory": "nhatrang.htm",
        "official": "https://giaophannhatrang.org/",
    },
    "Giáo phận Ban Mê Thuột": {
        "directory": "banmethu.htm",
        "official": "https://gpbanmethuot.com/",
    },
    "Giáo phận Đà Lạt": {
        "directory": "dalat.htm",
        "official": "https://giaophandalat.org/",
    },
    "Giáo phận Phan Thiết": {
        "directory": "phanthie.htm",
        "official": "https://gpphanthiet.com/",
    },
    "Giáo phận Phú Cường": {
        "directory": "phucuong.htm",
        "official": "https://giaophanphucuong.org/",
    },
    "Giáo phận Xuân Lộc": {
        "directory": "xuanloc.htm",
        "official": "https://giaophanxuanloc.net/",
    },
    "Giáo phận Mỹ Tho": {
        "directory": "mytho.htm",
        "official": "https://giaophanmytho.net/",
    },
    "Giáo phận Vĩnh Long": {
        "directory": "vinhlong.htm",
        "official": "https://giaophanvinhlong.net/",
    },
    "Giáo phận Long Xuyên": {
        "directory": "logxuyen.htm",
        "official": "https://giaophanlongxuyen.org/",
    },
}
TOKYO_PARISH_LIST_URL = "https://tokyo.catholic.jp/archdiocese/parishes/tokyo/"
OSAKA_TAKAMATSU_PARISH_URL = "https://ostk.catholic.jp/parish_mass/"
KYOTO_PARISH_URL = "https://kyoto.catholic.jp/addres/Address_Table.htm"
NAGOYA_PARISH_URL = "https://nagoya.catholic.jp/church"
FUKUOKA_PARISH_URL = "https://fukuoka.catholic.jp/parish/"
SAPPORO_PARISH_URL = "https://www.csd.or.jp/sapporo"
JAPAN_SOURCE_URLS = [
    TOKYO_PARISH_LIST_URL,
    OSAKA_TAKAMATSU_PARISH_URL,
    KYOTO_PARISH_URL,
    NAGOYA_PARISH_URL,
    FUKUOKA_PARISH_URL,
    SAPPORO_PARISH_URL,
]

USER_AGENT = "OrderOfMassChurchDirectoryBuilder/1.0 (+local static data refresh)"
_thread_local = threading.local()


def session() -> requests.Session:
    current = getattr(_thread_local, "session", None)
    if current is None:
        current = requests.Session()
        current.headers.update({"User-Agent": USER_AGENT})
        _thread_local.session = current
    return current


def cache_path_for(url: str) -> Path:
    import hashlib

    digest = hashlib.sha256(url.encode("utf-8")).hexdigest()
    return CACHE_DIR / f"{digest}.html"


def fetch_text(url: str, *, refresh: bool = False, timeout: int = 35) -> str:
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    cache_path = cache_path_for(url)
    if cache_path.exists() and not refresh:
        return cache_path.read_text(encoding="utf-8")
    last_error: Exception | None = None
    for attempt in range(4):
        try:
            response = session().get(url, timeout=timeout)
            response.raise_for_status()
            if "r.jina.ai" in url or "giaophanbaria.org" in url or "application/json" in response.headers.get("content-type", ""):
                response.encoding = "utf-8"
            else:
                response.encoding = response.apparent_encoding or response.encoding or "utf-8"
            text = response.text
            try:
                cache_path.write_text(text, encoding="utf-8")
            except OSError as cache_error:  # OneDrive can briefly lock/dehydrate the cache directory.
                print(f"Cache write skipped: {cache_path.name} ({cache_error})", flush=True)
            return text
        except Exception as error:  # pragma: no cover - network recovery
            last_error = error
            time.sleep(0.7 * (attempt + 1))
    raise RuntimeError(f"Unable to fetch {url}: {last_error}")


def fetch_post_text(url: str, data: dict[str, str], *, refresh: bool = False, timeout: int = 35) -> str:
    cache_key = f"POST {url}?{urllib.parse.urlencode(sorted(data.items()))}"
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    cache_path = cache_path_for(cache_key)
    if cache_path.exists() and not refresh:
        return cache_path.read_text(encoding="utf-8")
    last_error: Exception | None = None
    for attempt in range(4):
        try:
            response = session().post(url, data=data, timeout=timeout)
            response.raise_for_status()
            if "application/json" in response.headers.get("content-type", ""):
                response.encoding = "utf-8"
            else:
                response.encoding = response.apparent_encoding or response.encoding or "utf-8"
            text = response.text
            cache_path.write_text(text, encoding="utf-8")
            return text
        except Exception as error:  # pragma: no cover - network recovery
            last_error = error
            time.sleep(0.7 * (attempt + 1))
    raise RuntimeError(f"Unable to post to {url}: {last_error}")


def clean_text(value: str | None) -> str:
    return re.sub(r"\s+", " ", html.unescape(str(value or ""))).strip()


def unique(values: list[str]) -> list[str]:
    seen: set[str] = set()
    result: list[str] = []
    for value in values:
        cleaned = clean_text(value)
        key = cleaned.casefold()
        if cleaned and key not in seen:
            seen.add(key)
            result.append(cleaned)
    return result


def korean_parish_links(*, refresh: bool = False) -> list[dict[str, str]]:
    first_html = fetch_text(KOREA_SOURCE_URL, refresh=refresh)
    first_soup = BeautifulSoup(first_html, "html.parser")
    page_text = clean_text(first_soup.get_text(" ", strip=True))
    total_match = re.search(r"/\s*([\d,]+)\s*건", page_text)
    if not total_match:
        total_match = re.search(r"전체[^\[]*\[([\d,]+)\]", page_text)
    if not total_match:
        raise RuntimeError("CBCK parish total was not found")
    total = int(total_match.group(1).replace(",", ""))
    starts = list(range(1, total + 1, 50))

    def parse_page(start: int) -> list[dict[str, str]]:
        url = KOREA_LIST_URL.format(start=start)
        soup = BeautifulSoup(fetch_text(url, refresh=refresh), "html.parser")
        found: list[dict[str, str]] = []
        for anchor in soup.select("a[href*='DetailInfo.aspx']"):
            href = html.unescape(anchor.get("href") or "")
            absolute = urllib.parse.urljoin(KOREA_BASE_URL, href)
            query = urllib.parse.parse_qs(urllib.parse.urlparse(absolute).query)
            if query.get("cgubn", [""])[0] != "g" or query.get("gubn", [""])[0] != "4":
                continue
            code = query.get("code", [""])[0]
            if not code:
                continue
            found.append({
                "code": code,
                "name": clean_text(anchor.get_text(" ", strip=True)),
                "url": absolute,
            })
        return found

    links: list[dict[str, str]] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as executor:
        for page_links in executor.map(parse_page, starts):
            links.extend(page_links)
    by_code = {entry["code"]: entry for entry in links}
    if len(by_code) < total:
        raise RuntimeError(f"CBCK parish list is incomplete: {len(by_code)} of {total}")
    return list(by_code.values())


def split_cell_lines(cell) -> list[str]:
    values: list[str] = []
    for anchor in cell.select("a"):
        value = clean_text(anchor.get_text(" ", strip=True))
        if value:
            values.append(value)
    if values:
        return unique(values)
    raw = cell.get_text("\n", strip=True)
    return unique([part for part in raw.splitlines() if clean_text(part)])


def parse_korean_parish(link: dict[str, str], *, refresh: bool = False) -> dict:
    soup = BeautifulSoup(fetch_text(link["url"], refresh=refresh), "html.parser")
    rows: list[tuple[str, object]] = []
    for row in soup.select("table.small_table tr"):
        cells = row.find_all("td", recursive=False)
        if len(cells) < 2:
            continue
        label = clean_text(cells[0].get_text(" ", strip=True))
        if label:
            rows.append((label, cells[1]))

    def first_value(*labels: str) -> str:
        wanted = {label.casefold() for label in labels}
        for label, cell in rows:
            if label.casefold() in wanted:
                return clean_text(cell.get_text(" ", strip=True))
        return ""

    name = first_value("한글명칭") or link["name"]
    diocese = first_value("소속")
    address = first_value("대표주소", "주소")
    phone = first_value("대표 전화 번호", "대표전화", "전화")
    website = first_value("홈페이지", "웹사이트", "누리집")

    priest_names: list[str] = []
    sister_names: list[str] = []
    mass_times: list[str] = []
    opening_hours: list[str] = []
    for label, cell in rows:
        if "신부" in label and "번호" not in label:
            priest_names.extend(split_cell_lines(cell))
        if "수녀" in label and "번호" not in label:
            sister_names.extend(split_cell_lines(cell))
        if "미사" in label and ("시간" in label or "안내" in label):
            mass_times.extend(split_cell_lines(cell))
        if "개방" in label or "운영시간" in label:
            opening_hours.extend(split_cell_lines(cell))

    record = {
        "country": "KR",
        "name": f"{name}성당" if not name.endswith("성당") else name,
        "directoryName": name,
        "diocese": diocese,
        "address": address,
        "phone": phone,
        "website": website or link["url"],
        "priestNames": unique(priest_names),
        "sisterNames": unique(sister_names),
        "massTimes": unique(mass_times),
        "openingHours": unique(opening_hours),
        "sourceUrl": link["url"],
        "sourceName": "한국 천주교 주소록",
        "sourceAuthority": "한국천주교주교회의",
        "sourceCode": link["code"],
    }
    return {key: value for key, value in record.items() if value not in ("", [], None)}


def build_korea(*, refresh: bool = False, workers: int = 8) -> list[dict]:
    links = korean_parish_links(refresh=refresh)

    def task(link: dict[str, str]) -> dict:
        return parse_korean_parish(link, refresh=refresh)

    records: list[dict] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, workers)) as executor:
        future_map = {executor.submit(task, link): link for link in links}
        completed = 0
        for future in concurrent.futures.as_completed(future_map):
            records.append(future.result())
            completed += 1
            if completed % 100 == 0:
                print(f"Korea: {completed}/{len(links)}", flush=True)
    return sorted(records, key=lambda item: item.get("directoryName", ""))


def normalized_korean_parish_name(value: str) -> str:
    name = clean_text(value)
    name = re.sub(r"(?:천주교|가톨릭)", "", name)
    name = re.sub(r"(?:성당|본당)$", "", name)
    return re.sub(r"[^0-9A-Za-z가-힣]", "", name).casefold()


def suwon_parish_links(*, refresh: bool = False) -> list[dict[str, str]]:
    soup = BeautifulSoup(fetch_text(SUWON_LIST_URL, refresh=refresh), "html.parser")
    found: dict[str, dict[str, str]] = {}
    for anchor in soup.select("a[href*='/parish/parish/2']"):
        absolute = urllib.parse.urljoin(SUWON_BASE_URL, html.unescape(anchor.get("href") or ""))
        query = urllib.parse.parse_qs(urllib.parse.urlparse(absolute).query)
        serial = clean_text((query.get("serial") or [""])[0])
        name = clean_text(anchor.get_text(" ", strip=True) or (query.get("church") or [""])[0])
        if serial and name:
            found[serial] = {"serial": serial, "name": name, "url": absolute}
    if len(found) < 200:
        raise RuntimeError(f"Suwon parish list is incomplete: {len(found)}")
    return list(found.values())


def parse_suwon_parish(link: dict[str, str], *, refresh: bool = False) -> dict:
    soup = BeautifulSoup(fetch_text(link["url"], refresh=refresh), "html.parser")
    name_node = soup.select_one(".citName > li:not(.areaTitle)")
    name = clean_text(name_node.get_text(" ", strip=True) if name_node else link["name"])

    mass_times: list[str] = []
    for row in soup.select("table.massTable tr"):
        day_node = row.find("th")
        time_node = row.find("td")
        day = clean_text(day_node.get_text(" ", strip=True) if day_node else "")
        times = clean_text(time_node.get_text(" ", strip=True) if time_node else "")
        if day and times:
            mass_times.append(f"{day} {times}")

    mass_period_node = soup.select_one(".time_wrap.churchBox h3")
    mass_period = clean_text(mass_period_node.get_text(" ", strip=True) if mass_period_node else "")
    priest_names: list[str] = []
    for item in soup.select(".cimiList li"):
        spans = item.find_all("span", recursive=False)
        if len(spans) < 2:
            continue
        label = clean_text(spans[0].get_text(" ", strip=True))
        if "신부" in label:
            priest_names.extend(split_cell_lines(spans[1]))

    info_values: dict[str, str] = {}
    for item in soup.select(".citInfo li"):
        image = item.select_one("img[alt]")
        value = item.select_one("p")
        if image and value:
            info_values[clean_text(image.get("alt"))] = clean_text(value.get_text(" ", strip=True))

    address = ""
    website = ""
    for item in soup.select(".ciBot li"):
        image = item.select_one("img[alt]")
        label = clean_text(image.get("alt")) if image else ""
        if label == "주소":
            address = clean_text(item.get_text(" ", strip=True))
        elif label == "홈페이지":
            anchor = item.select_one("a[href]")
            href = clean_text(anchor.get("href")) if anchor else ""
            if href.startswith(("http://", "https://")):
                website = href

    return compact_record({
        "country": "KR",
        "name": f"{name}성당" if not name.endswith("성당") else name,
        "directoryName": name,
        "diocese": "수원교구",
        "address": address,
        "phone": info_values.get("전화번호", ""),
        "website": website,
        "priestNames": unique(priest_names),
        "massTimes": unique(mass_times),
        "massTimesPeriod": mass_period,
        "officialDioceseUrl": link["url"],
        "sourceUrl": link["url"],
        "sourceName": "천주교 수원교구 본당",
        "sourceAuthority": "천주교 수원교구",
        "sourceCode": link["serial"],
    })


def build_suwon(*, refresh: bool = False, workers: int = 8) -> list[dict]:
    links = suwon_parish_links(refresh=refresh)
    records: list[dict] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, workers)) as executor:
        futures = [executor.submit(parse_suwon_parish, link, refresh=refresh) for link in links]
        for completed, future in enumerate(concurrent.futures.as_completed(futures), start=1):
            records.append(future.result())
            if completed % 50 == 0:
                print(f"Suwon: {completed}/{len(links)}", flush=True)
    return sorted(records, key=lambda item: item.get("directoryName", ""))


def parse_goodnews_mass_detail(orgnum: str, *, refresh: bool = False) -> tuple[list[str], str]:
    url = GOODNEWS_PARISH_DETAIL.format(orgnum=urllib.parse.quote(orgnum))
    soup = BeautifulSoup(fetch_text(url, refresh=refresh), "html.parser")
    mass_times: list[str] = []
    current_group = ""
    table = soup.select_one("table.register05")
    if table:
        for row in table.select("tr"):
            direct_cells = row.find_all(["th", "td"], recursive=False)
            if len(direct_cells) == 1:
                combined = clean_text(direct_cells[0].get_text(" ", strip=True))
                combined_match = re.match(r"^(주일미사|평일미사)\s*([월화수목금토일])\s*(.+)$", combined)
                if combined_match:
                    current_group, day, times = combined_match.groups()
                    mass_times.append(f"{current_group} {day} {times}")
                continue
            header = row.find("th", recursive=False)
            if header:
                group_match = re.match(r"^(주일미사|평일미사)", clean_text(header.get_text(" ", strip=True)))
                if group_match:
                    current_group = group_match.group(1)
            cells = row.find_all("td", recursive=False)
            if len(cells) < 2:
                continue
            day = clean_text(cells[-2].get_text(" ", strip=True))
            times = clean_text(cells[-1].get_text(" ", strip=True))
            if day and times:
                prefix = f"{current_group} " if current_group else ""
                mass_times.append(f"{prefix}{day} {times}")
    page_text = clean_text(soup.get_text(" ", strip=True))
    updated = re.search(r"최종\s*업데이트일\s*:\s*(\d{4}-\d{2}-\d{2})", page_text)
    return unique(mass_times), (updated.group(1) if updated else "")


def build_goodnews_diocese(gyo_code: str, diocese: str, *, refresh: bool = False, workers: int = 8) -> list[dict]:
    payload = {
        "gyoCode": gyo_code,
        "localCode": "",
        "giguCode": "",
        "PAGE": "1",
        "P_SIZE": "500",
        "app": "goodnews",
    }
    raw = fetch_post_text(GOODNEWS_PARISH_API, payload, refresh=refresh)
    parsed = json.loads(raw)
    rows = parsed.get("BOARDLIST") or []
    expected = int(parsed.get("ResultCount") or 0)
    if expected and len(rows) < expected:
        raise RuntimeError(f"GoodNews {diocese} list is incomplete: {len(rows)} of {expected}")

    def build_row(row: dict) -> dict:
        orgnum = clean_text(row.get("orgnum"))
        mass_times: list[str] = []
        mass_period = ""
        if orgnum:
            try:
                mass_times, mass_period = parse_goodnews_mass_detail(orgnum, refresh=refresh)
            except Exception as error:
                print(f"GoodNews detail failed ({diocese} {orgnum}): {error}", flush=True)
        if not mass_times and clean_text(row.get("missatime")):
            mass_times = [clean_text(row.get("missatime"))]
        lat = clean_text(row.get("lat"))
        lng = clean_text(row.get("lng"))
        return compact_record({
            "country": "KR",
            "name": f"{clean_text(row.get('TITLE'))}성당",
            "directoryName": clean_text(row.get("TITLE")),
            "diocese": diocese,
            "deanery": clean_text(row.get("giguName1") or row.get("localName")),
            "address": clean_text(row.get("addr")),
            "phone": clean_text(row.get("phone")),
            "patron": clean_text(row.get("saint")),
            "priestNames": unique([clean_text(row.get("father"))]),
            "sisterNames": unique([clean_text(row.get("sistname"))]),
            "massTimes": mass_times,
            "massTimesPeriod": mass_period,
            "lat": float(lat) if lat and re.fullmatch(r"-?\d+(?:\.\d+)?", lat) else "",
            "lng": float(lng) if lng and re.fullmatch(r"-?\d+(?:\.\d+)?", lng) else "",
            "website": GOODNEWS_PARISH_DETAIL.format(orgnum=orgnum),
            "officialDioceseUrl": GOODNEWS_PARISH_DETAIL.format(orgnum=orgnum),
            "sourceUrl": GOODNEWS_PARISH_DETAIL.format(orgnum=orgnum),
            "sourceName": "가톨릭 굿뉴스 본당정보",
            "sourceAuthority": "가톨릭 굿뉴스",
            "sourceCode": orgnum,
        })

    records: list[dict] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, workers)) as executor:
        futures = [executor.submit(build_row, row) for row in rows]
        for completed, future in enumerate(concurrent.futures.as_completed(futures), start=1):
            records.append(future.result())
            if completed % 50 == 0:
                print(f"GoodNews {diocese}: {completed}/{len(rows)}", flush=True)
    return sorted(records, key=lambda item: item.get("directoryName", ""))


def merge_official_diocese_records(korea: list[dict], diocesan: list[dict]) -> int:
    index: dict[tuple[str, str], dict] = {}
    for record in korea:
        key = (clean_text(record.get("diocese")), normalized_korean_parish_name(record.get("directoryName") or record.get("name")))
        if key[1]:
            index[key] = record
    merged = 0
    for source in diocesan:
        key = (clean_text(source.get("diocese")), normalized_korean_parish_name(source.get("directoryName") or source.get("name")))
        target = index.get(key)
        if not target:
            korea.append(source)
            index[key] = source
            merged += 1
            continue
        for field in ("address", "phone", "website", "massTimesPeriod", "officialDioceseUrl"):
            if source.get(field):
                target[field] = source[field]
        if source.get("massTimes"):
            target["massTimes"] = unique(source["massTimes"])
        for field in ("priestNames", "sisterNames", "openingHours"):
            if source.get(field):
                target[field] = unique([*target.get(field, []), *source[field]])
        target["dioceseSourceName"] = source.get("sourceName")
        target["dioceseSourceAuthority"] = source.get("sourceAuthority")
        merged += 1
    korea.sort(key=lambda item: item.get("directoryName", ""))
    return merged


def accent_fold(value: str) -> str:
    normalized = unicodedata.normalize("NFD", clean_text(value))
    normalized = normalized.replace("đ", "d").replace("Đ", "D").replace("ð", "d").replace("Ð", "D")
    return "".join(char for char in normalized if unicodedata.category(char) != "Mn").casefold()


def build_hochiminh(*, refresh: bool = False, workers: int = 8) -> list[dict]:
    source = fetch_post_text(HCMC_MASS_API_URL, {"deaneryId": "0", "keyword": ""}, refresh=refresh)
    soup = BeautifulSoup(source, "html.parser")
    weekdays = [clean_text(cell.get_text(" ", strip=True)) for cell in soup.select("thead th")][2:9]
    directory: list[dict] = []
    for row in soup.select("tr.mass-time-detail"):
        cells = row.find_all("td", recursive=False)
        if len(cells) < 9:
            continue
        anchor = cells[1].select_one("a[href]")
        if not anchor:
            continue
        name = clean_text(anchor.get_text(" ", strip=True))
        url = urllib.parse.urljoin(HCMC_BASE_URL, html.unescape(anchor.get("href") or ""))
        mass_times: list[str] = []
        for day, cell in zip(weekdays, cells[2:9]):
            times = unique([node.get_text(" ", strip=True) for node in cell.select("p")])
            if day and times:
                mass_times.append(f"{day}: {', '.join(times)}")
        directory.append({"name": name, "url": url, "massTimes": mass_times})
    if len(directory) < 180:
        raise RuntimeError(f"Ho Chi Minh Mass directory is incomplete: {len(directory)}")

    def build_entry(item: dict) -> dict:
        soup = BeautifulSoup(fetch_text(item["url"], refresh=refresh), "html.parser")
        deanery = ""
        deanery_anchor = soup.select_one("a[href='/gioi-thieu-giao-xu']")
        if deanery_anchor:
            deanery = clean_text(deanery_anchor.get_text(" ", strip=True))
        values: dict[str, str] = {}
        for node in soup.select("li"):
            label = node.find("b", recursive=False)
            if not label:
                continue
            key = clean_text(label.get_text(" ", strip=True)).rstrip(":")
            value = clean_text(node.get_text(" ", strip=True).replace(label.get_text(" ", strip=True), "", 1))
            if key and value:
                values[key] = value
        priests: list[str] = []
        for row in soup.select("li.priest-list tbody tr"):
            cells = [clean_text(cell.get_text(" ", strip=True)) for cell in row.find_all("td", recursive=False)]
            if len(cells) >= 3 and cells[1]:
                priests.append(f"{cells[1]} ({cells[2]})" if cells[2] else cells[1])
        return compact_record({
            "country": "VN",
            "name": f"Giáo xứ {item['name']}",
            "directoryName": item["name"],
            "diocese": "Tổng Giáo phận Sài Gòn",
            "deanery": deanery,
            "address": values.get("Địa chỉ", ""),
            "phone": values.get("Điện thoại", ""),
            "patron": values.get("Bổn mạng", ""),
            "priestNames": unique(priests),
            "massTimes": unique(item.get("massTimes", [])),
            "website": item["url"],
            "officialDioceseUrl": item["url"],
            "sourceUrl": item["url"],
            "sourceName": "Giờ lễ các giáo xứ Tổng Giáo phận Sài Gòn",
            "sourceAuthority": "Tổng Giáo phận Sài Gòn",
        })

    records: list[dict] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, workers)) as executor:
        futures = [executor.submit(build_entry, item) for item in directory]
        for completed, future in enumerate(concurrent.futures.as_completed(futures), start=1):
            records.append(future.result())
            if completed % 50 == 0:
                print(f"Ho Chi Minh: {completed}/{len(directory)}", flush=True)
    return sorted(records, key=lambda item: accent_fold(item.get("directoryName", "")))


def hanoi_official_parish_links(*, refresh: bool = False) -> list[dict[str, str]]:
    found: dict[str, dict[str, str]] = {}
    empty_pages = 0
    for page in range(1, 81):
        category_url = HANOI_PARISH_CATEGORY_URL if page == 1 else f"{HANOI_PARISH_CATEGORY_URL}page/{page}/"
        target = category_url.replace("https://", "http://", 1)
        reader_url = f"https://r.jina.ai/{target}"
        cached = cache_path_for(reader_url).exists() and not refresh
        try:
            markdown = fetch_text(reader_url, refresh=refresh, timeout=50)
        except Exception as error:
            if page > 5:
                print(f"Hanoi category stopped at page {page}: {error}", flush=True)
                break
            raise
        page_matches = 0
        for match in re.finditer(r"^##\s+\[(Giáo xứ\s+[^\]\n]+)\]\((https?://www\.tonggiaophanhanoi\.org/[^)]+/)\)\s*$", markdown, flags=re.MULTILINE | re.IGNORECASE):
            title = clean_text(match.group(1))
            url = clean_text(match.group(2))
            bare = re.sub(r"^Giáo xứ\s+", "", title, flags=re.IGNORECASE).strip()
            if not bare or any(char in bare for char in (":", "–", "—")) or len(bare) > 70:
                continue
            slug = urllib.parse.urlparse(url).path.strip("/")
            if not slug.startswith("giao-xu-"):
                continue
            key = normalized_vietnamese_parish_name(bare)
            if key and key not in found:
                found[key] = {"name": bare, "url": url}
                page_matches += 1
        empty_pages = empty_pages + 1 if page_matches == 0 else 0
        if page % 10 == 0:
            print(f"Hanoi directory: page={page} parishes={len(found)}", flush=True)
        if not cached:
            time.sleep(3.2)
        if empty_pages >= 4 and page > 50:
            break
    if len(found) < 150:
        raise RuntimeError(f"Hanoi official parish list is incomplete: {len(found)}")
    return list(found.values())


def giole_search_detail_url(name: str, *, refresh: bool = False) -> str:
    url = f"{GIOLE_BASE_URL}livesearch.php?q={urllib.parse.quote(name)}"
    soup = BeautifulSoup(fetch_text(url, refresh=refresh), "html.parser")
    wanted = normalized_vietnamese_parish_name(name)
    candidates: list[tuple[int, str]] = []
    for anchor in soup.select("a[href]"):
        label = clean_text(anchor.get_text(" ", strip=True)).split(",", 1)[0]
        key = normalized_vietnamese_parish_name(label)
        score = 0 if key == wanted else (1 if wanted and wanted in key else 2)
        candidates.append((score, urllib.parse.urljoin(GIOLE_BASE_URL, anchor.get("href") or "")))
    return min(candidates, default=(9, ""), key=lambda item: item[0])[1]


def parse_giole_mass_detail(url: str, *, refresh: bool = False) -> dict:
    if not url:
        return {}
    source = fetch_text(url, refresh=refresh)
    soup = BeautifulSoup(source, "html.parser")
    address_node = soup.select_one(".card > .card-body a[href^='javascript:mapClick']")
    address = clean_text(address_node.get_text(" ", strip=True) if address_node else "")
    mass_times: list[str] = []
    detail = soup.select_one(".collapse .card-body")
    if detail:
        text = clean_text(detail.get_text(" ", strip=True))
        for label, next_label in (("Ngày thường", "Thứ Bảy"), ("Thứ Bảy", "Chúa Nhật"), ("Chúa Nhật", "Xem đường đi")):
            match = re.search(rf"{re.escape(label)}\s*:\s*(.*?)(?={re.escape(next_label)}\s*:|{re.escape(next_label)}|$)", text, flags=re.IGNORECASE)
            if match and clean_text(match.group(1)):
                mass_times.append(f"{label}: {clean_text(match.group(1))}")
    coordinate = re.search(r"\[\{\s*lat:\s*(-?\d+(?:\.\d+)?),\s*lng:\s*(-?\d+(?:\.\d+)?)\s*\}", source)
    return compact_record({
        "address": address,
        "massTimes": unique(mass_times),
        "lat": float(coordinate.group(1)) if coordinate else "",
        "lng": float(coordinate.group(2)) if coordinate else "",
        "massTimesUrl": url,
    })


def build_hanoi(*, refresh: bool = False, workers: int = 8) -> list[dict]:
    links = hanoi_official_parish_links(refresh=refresh)

    def build_entry(item: dict) -> dict:
        giole_url = giole_search_detail_url(item["name"], refresh=refresh)
        detail = parse_giole_mass_detail(giole_url, refresh=refresh)
        return compact_record({
            "country": "VN",
            "name": f"Giáo xứ {item['name']}",
            "directoryName": item["name"],
            "diocese": "Tổng Giáo phận Hà Nội",
            "address": detail.get("address", ""),
            "massTimes": detail.get("massTimes", []),
            "lat": detail.get("lat", ""),
            "lng": detail.get("lng", ""),
            "website": item["url"],
            "officialDioceseUrl": item["url"],
            "sourceUrl": item["url"],
            "sourceUrls": unique([item["url"], giole_url]),
            "sourceName": "Các giáo xứ Tổng Giáo phận Hà Nội / GioLe.vn",
            "sourceAuthority": "Tổng Giáo phận Hà Nội; Văn phòng Hội đồng Giám mục Việt Nam",
        })

    records: list[dict] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, workers)) as executor:
        futures = [executor.submit(build_entry, item) for item in links]
        for completed, future in enumerate(concurrent.futures.as_completed(futures), start=1):
            records.append(future.result())
            if completed % 50 == 0:
                print(f"Hanoi enrichment: {completed}/{len(links)}", flush=True)
    return sorted(records, key=lambda item: accent_fold(item.get("directoryName", "")))


def vietnamese_parish_heading_name(value: str) -> str:
    text = re.sub(r"^\s*\d+\s*[./)-]?\s*", "", clean_text(value))
    folded = accent_fold(text)
    prefixes = (
        "giao xu ",
        "giao ho ",
        "chuan xu ",
        "cong doan ",
        "ho dao ",
        "giao diem ",
        "nha tho ",
    )
    for prefix in prefixes:
        if folded.startswith(prefix):
            # Accent folding keeps one code point for every visible letter,
            # so this index also slices the original Vietnamese string.
            return text[len(prefix):].split(":", 1)[0].strip(" .:")
    return ""


def normalized_vietnamese_parish_name(value: str, *, drop_parenthetical: bool = False) -> str:
    text = accent_fold(value)
    text = re.sub(r"^(?:giao xu|giao ho|chuan xu|cong doan|ho dao|giao diem|nha tho)\s+", "", text)
    if drop_parenthetical:
        text = re.sub(r"\([^)]*\)", "", text)
    return re.sub(r"[^a-z0-9]", "", text)


def cantho_deanery_name(value: str) -> str:
    text = clean_text(value)
    match = re.search(r"HẠT\s+(.+)$", text, flags=re.IGNORECASE)
    return (match.group(1) if match else text).strip(" .")


def parse_cantho_addresses(*, refresh: bool = False) -> list[dict]:
    soup = BeautifulSoup(fetch_text(CANTHO_ADDRESS_URL, refresh=refresh), "html.parser")
    entry = soup.select_one("article .entry")
    if not entry:
        raise RuntimeError("Cần Thơ address article was not found")
    deanery = ""
    records: list[dict] = []
    current: dict | None = None
    for child in entry.find_all(["h1", "p", "ol"], recursive=False):
        text = clean_text(child.get_text(" ", strip=True))
        if child.name == "h1" and "hat " in accent_fold(text):
            deanery = cantho_deanery_name(text)
            continue
        if child.name == "ol":
            name = vietnamese_parish_heading_name(text)
            if name:
                current = {
                    "country": "VN",
                    "name": f"Giáo xứ {name}",
                    "directoryName": name,
                    "diocese": "Giáo phận Cần Thơ",
                    "deanery": deanery,
                    "website": CANTHO_ADDRESS_URL,
                    "officialDioceseUrl": CANTHO_ADDRESS_URL,
                    "sourceUrl": CANTHO_ADDRESS_URL,
                    "sourceName": "Địa chỉ các giáo xứ Giáo phận Cần Thơ",
                    "sourceAuthority": "Giáo phận Cần Thơ",
                }
                records.append(current)
            continue
        if current and child.name == "p" and text and not current.get("address"):
            current["address"] = text
    if len(records) < 130:
        raise RuntimeError(f"Cần Thơ address list is incomplete: {len(records)}")
    return records


def looks_like_vietnamese_mass_schedule(value: str) -> bool:
    folded = accent_fold(value)
    schedule_word = any(word in folded for word in ("thu bay", "chua nhat", "ngay thuong", "ngay le", "le trong", "thanh le", "sang thu", "chieu thu"))
    has_time = bool(re.search(r"\b\d{1,2}\s*[gh:]\s*\d{0,2}", folded, flags=re.IGNORECASE))
    return schedule_word or has_time


def parse_cantho_mass_times(*, refresh: bool = False) -> list[dict]:
    soup = BeautifulSoup(fetch_text(CANTHO_MASS_URL, refresh=refresh), "html.parser")
    entry = soup.select_one("article .entry")
    if not entry:
        raise RuntimeError("Cần Thơ Mass-time article was not found")
    update_text = next((clean_text(node.get_text(" ", strip=True)) for node in entry.select("p") if "cap nhat" in accent_fold(node.get_text(" ", strip=True))), "")
    deanery = ""
    records: list[dict] = []
    current: dict | None = None
    for child in entry.find_all(["h1", "p", "ol", "ul"], recursive=False):
        separator = " | " if child.name in ("ol", "ul") else " "
        text = clean_text(child.get_text(separator, strip=True))
        if child.name == "h1" and "hat " in accent_fold(text):
            deanery = cantho_deanery_name(text)
            continue
        if child.name not in ("p", "ol", "ul") or not text:
            continue
        name = vietnamese_parish_heading_name(text)
        if name:
            current = {"name": name, "deanery": deanery, "lines": []}
            records.append(current)
            continue
        if current:
            current["lines"].append(text)

    for record in records:
        raw_lines = record.pop("lines", [])
        schedule = [line for line in raw_lines if looks_like_vietnamese_mass_schedule(line)]
        address = next((line for line in raw_lines if line not in schedule and not line.startswith("|") and len(line) > 5), "")
        if address:
            record["address"] = address.lstrip("–- ")
        if schedule:
            record["massTimes"] = unique(schedule)
        if update_text:
            record["massTimesPeriod"] = update_text.strip("() ")
    return records


def cantho_priest_pdf_path(*, refresh: bool = False) -> Path:
    path = CACHE_DIR / "cantho-priests-2026.pdf"
    if path.is_file() and not refresh:
        return path
    url = f"https://drive.usercontent.google.com/download?id={CANTHO_PRIESTS_DRIVE_ID}&export=download&confirm=t"
    response = session().get(url, timeout=60)
    response.raise_for_status()
    if not response.content.startswith(b"%PDF"):
        raise RuntimeError("Cần Thơ priest assignment PDF download was not a PDF")
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    path.write_bytes(response.content)
    return path


def parse_cantho_priest_assignments(*, refresh: bool = False) -> list[dict]:
    import pdfplumber

    assignments: list[dict] = []
    with pdfplumber.open(cantho_priest_pdf_path(refresh=refresh)) as pdf:
        for page in pdf.pages:
            for table in page.extract_tables():
                for row in table:
                    if len(row) < 6 or not clean_text(row[0]).isdigit():
                        continue
                    saint_name = clean_text(row[1])
                    family_name = clean_text(row[2]).replace("\n", " ")
                    given_name = clean_text(row[3]).replace("\n", " ")
                    parish = clean_text(row[4]).replace("\n", " ")
                    role = clean_text(row[5]).replace("\n", " ")
                    if not parish or "linh muc" not in accent_fold(role):
                        continue
                    full_name = clean_text(" ".join(part for part in (saint_name, family_name, given_name) if part))
                    assignments.append({
                        "parish": parish,
                        "priest": f"{full_name} ({role})" if role else full_name,
                    })
    return assignments


def baria_parish_heading_name(value: str) -> str:
    text = clean_text(value).strip("# ")
    match = re.match(r"^(?:GIÁO XỨ|GIÁO HỌ(?:\s+BIỆT LẬP)?)\s+(.+)$", text, flags=re.IGNORECASE)
    if not match:
        return ""
    return clean_text(match.group(1)).strip(" .").title()


def parse_baria_mass_times(*, refresh: bool = False) -> list[dict]:
    soup = BeautifulSoup(fetch_text(BARIA_MASS_URL, refresh=refresh), "html.parser")
    entry = soup.select_one(".entry-content")
    if not entry:
        raise RuntimeError("Bà Rịa Mass-time article was not found")
    update_text = next((
        clean_text(node.get_text(" ", strip=True)).strip("() ")
        for node in entry.select("p")
        if "cap nhat thang" in accent_fold(node.get_text(" ", strip=True))
    ), "Cập nhật Tháng 11.2022")
    records: list[dict] = []
    current: dict | None = None
    section = ""
    for child in entry.find_all(["h1", "h2", "h3", "h4", "p"], recursive=False):
        text = clean_text(child.get_text(" ", strip=True))
        name = baria_parish_heading_name(text)
        if name:
            current = {"name": name, "massTimes": [], "massTimesPeriod": update_text}
            records.append(current)
            section = ""
            continue
        if not current or not text:
            continue
        folded = accent_fold(text)
        if re.match(r"^1\s*/", folded) and "gio le hang ngay" in folded:
            section = "daily"
            continue
        if re.match(r"^2\s*/", folded) and "gio le chua nhat" in folded:
            section = "sunday"
            continue
        if re.match(r"^\d+\s*/", folded):
            section = ""
            continue
        if section and text.lstrip().startswith("*"):
            schedule = text.lstrip("* ")
            if re.search(r"\d{1,2}\s*[gh:]\s*\d{0,2}", accent_fold(schedule)):
                current["massTimes"].append(schedule)
    records = [compact_record(record) for record in records if record.get("massTimes")]
    if len(records) < 80:
        raise RuntimeError(f"Bà Rịa official Mass-time list is incomplete: {len(records)}")
    return records


def parse_baria_deanery(deanery: str, url: str, *, refresh: bool = False) -> tuple[list[str], dict[str, str]]:
    soup = BeautifulSoup(fetch_text(url, refresh=refresh), "html.parser")
    entry = soup.select_one(".entry-content")
    if not entry:
        raise RuntimeError(f"Bà Rịa deanery page was not found: {deanery}")
    list_text = ""
    for paragraph in entry.select("p"):
        text = clean_text(paragraph.get_text(" ", strip=True))
        folded = accent_fold(text)
        if folded.startswith("cac giao x"):
            sibling = paragraph.find_next_sibling("p")
            list_text = clean_text(sibling.get_text(" ", strip=True) if sibling else "")
            break
        if "gom co cac giao xu:" in folded or ("bao gom" in folded and "giao xu:" in folded):
            list_text = text.split(":", 1)[1] if ":" in text else ""
            break
    names = []
    list_text = re.sub(r"\s+và\s+", ", ", list_text, flags=re.IGNORECASE)
    for item in list_text.rstrip(". ").split(","):
        name = re.sub(r"^và\s+", "", clean_text(item), flags=re.IGNORECASE).strip(" .")
        if name:
            names.append(name)
    if len(names) < 15:
        raise RuntimeError(f"Bà Rịa current deanery list is incomplete for {deanery}: {len(names)}")

    detail_urls: dict[str, str] = {}
    for anchor in soup.select("a[href]"):
        name = baria_parish_heading_name(anchor.get_text(" ", strip=True))
        href = urllib.parse.urljoin(BARIA_BASE_URL, anchor.get("href") or "")
        if name and "/gioi-thieu/cac-giao-hat/" in href:
            detail_urls.setdefault(normalized_vietnamese_parish_name(name), href)
    return names, detail_urls


def parse_baria_parish_detail(url: str, *, refresh: bool = False) -> dict:
    soup = BeautifulSoup(fetch_text(url, refresh=refresh), "html.parser")
    entry = soup.select_one(".entry-content")
    if not entry:
        return {}
    address = ""
    phone = ""
    for node in entry.select("p, li, span"):
        text = clean_text(node.get_text(" ", strip=True))
        address_match = re.match(r"^(?:Địa chỉ hành chánh|Địa chỉ)\s*:\s*(.+)$", text, flags=re.IGNORECASE)
        if address_match and not address:
            address = clean_text(address_match.group(1))
        phone_match = re.match(r"^(?:Điện thoại|Số điện thoại)\s*:\s*(.+)$", text, flags=re.IGNORECASE)
        if phone_match and not phone:
            phone = clean_text(phone_match.group(1))
    return compact_record({"address": address, "phone": phone})


def build_baria(*, refresh: bool = False, workers: int = 8) -> list[dict]:
    mass_records = parse_baria_mass_times(refresh=refresh)
    mass_by_key = {
        normalized_vietnamese_parish_name(record["name"]): record
        for record in mass_records
    }
    records: list[dict] = []
    detail_urls: dict[str, str] = {}
    for deanery, deanery_url in BARIA_DEANERY_URLS.items():
        names, deanery_details = parse_baria_deanery(deanery, deanery_url, refresh=refresh)
        detail_urls.update(deanery_details)
        for name in names:
            key = normalized_vietnamese_parish_name(name)
            mass = mass_by_key.get(key, {})
            if not mass and key == "chanhtoabaria":
                mass = mass_by_key.get("chanhtoa", {})
            detail_url = detail_urls.get(key) or (detail_urls.get("chanhtoa") if key == "chanhtoabaria" else "")
            records.append(compact_record({
                "country": "VN",
                "name": f"Giáo xứ {name}",
                "directoryName": name,
                "diocese": "Giáo phận Bà Rịa",
                "deanery": deanery,
                "website": detail_url or deanery_url,
                "officialDioceseUrl": deanery_url,
                "sourceUrl": detail_url or deanery_url,
                "sourceUrls": unique([deanery_url, BARIA_MASS_URL, detail_url]),
                "sourceName": "Danh sách giáo hạt và giờ lễ Giáo phận Bà Rịa",
                "sourceAuthority": "Giáo phận Bà Rịa",
                "massTimes": mass.get("massTimes", []),
                "massTimesPeriod": mass.get("massTimesPeriod", ""),
            }))

    by_detail_url: dict[str, list[dict]] = {}
    for record in records:
        detail_url = record.get("website", "")
        if "/gioi-thieu/cac-giao-hat/" in detail_url:
            by_detail_url.setdefault(detail_url, []).append(record)
    detail_matched = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, workers)) as executor:
        futures = {
            executor.submit(parse_baria_parish_detail, url, refresh=refresh): url
            for url in by_detail_url
        }
        for future in concurrent.futures.as_completed(futures):
            url = futures[future]
            try:
                detail = future.result()
            except Exception as error:  # pragma: no cover - one stale archive page must not drop the diocese
                print(f"Bà Rịa detail skipped: {url} ({error})", flush=True)
                continue
            if not detail:
                continue
            for record in by_detail_url[url]:
                record.update(detail)
                detail_matched += 1
    if len(records) < 95:
        raise RuntimeError(f"Bà Rịa current parish list is incomplete: {len(records)}")
    print(
        f"Bà Rịa: parishes={len(records)} massTimes={sum(bool(item.get('massTimes')) for item in records)} "
        f"details={detail_matched}",
        flush=True,
    )
    return sorted(records, key=lambda item: accent_fold(item.get("directoryName", "")))


def build_cantho(*, refresh: bool = False) -> list[dict]:
    records = parse_cantho_addresses(refresh=refresh)
    short_name_counts: dict[str, int] = {}
    for record in records:
        short_name = re.sub(r"\s*\([^)]*\)\s*", " ", record["directoryName"]).strip()
        short_key = normalized_vietnamese_parish_name(short_name)
        short_name_counts[short_key] = short_name_counts.get(short_key, 0) + 1
    for record in records:
        full_name = record["directoryName"]
        short_name = re.sub(r"\s*\([^)]*\)\s*", " ", full_name).strip()
        if short_name != full_name and short_name_counts.get(normalized_vietnamese_parish_name(short_name)) == 1:
            record["officialDirectoryName"] = full_name
            record["directoryName"] = short_name
            record["name"] = f"Giáo xứ {short_name}"
    by_exact: dict[str, list[dict]] = {}
    by_bare: dict[str, list[dict]] = {}
    for record in records:
        by_exact.setdefault(normalized_vietnamese_parish_name(record["directoryName"]), []).append(record)
        by_bare.setdefault(normalized_vietnamese_parish_name(record["directoryName"], drop_parenthetical=True), []).append(record)

    def match(name: str) -> dict | None:
        exact = by_exact.get(normalized_vietnamese_parish_name(name), [])
        if len(exact) == 1:
            return exact[0]
        bare = by_bare.get(normalized_vietnamese_parish_name(name, drop_parenthetical=True), [])
        return bare[0] if len(bare) == 1 else None

    mass_records = parse_cantho_mass_times(refresh=refresh)
    mass_matched = 0
    for source in mass_records:
        target = match(source["name"])
        if not source.get("massTimes"):
            continue
        if not target:
            target = {
                "country": "VN",
                "name": f"Giáo xứ {source['name']}",
                "directoryName": source["name"],
                "diocese": "Giáo phận Cần Thơ",
                "deanery": source.get("deanery", ""),
                "address": source.get("address", ""),
                "website": CANTHO_MASS_URL,
                "sourceUrl": CANTHO_MASS_URL,
                "sourceName": "Giờ lễ các nhà thờ Giáo phận Cần Thơ 2025",
                "sourceAuthority": "Giáo phận Cần Thơ",
            }
            records.append(compact_record(target))
            by_exact.setdefault(normalized_vietnamese_parish_name(source["name"]), []).append(target)
            by_bare.setdefault(normalized_vietnamese_parish_name(source["name"], drop_parenthetical=True), []).append(target)
        target["massTimes"] = source["massTimes"]
        target["massTimesPeriod"] = source.get("massTimesPeriod", "")
        target["officialDioceseUrl"] = CANTHO_MASS_URL
        mass_matched += 1

    priest_matched = 0
    for assignment in parse_cantho_priest_assignments(refresh=refresh):
        target = match(assignment["parish"])
        if not target:
            continue
        target["priestNames"] = unique([*target.get("priestNames", []), assignment["priest"]])
        target["priestAssignmentsPeriod"] = "Từ tháng 1 năm 2026"
        priest_matched += 1

    for record in records:
        record["sourceUrls"] = [CANTHO_ADDRESS_URL, CANTHO_MASS_URL, CANTHO_PRIESTS_URL]
    print(f"Can Tho: addresses={len(records)} massTimes={mass_matched} priestAssignments={priest_matched}", flush=True)
    return sorted(records, key=lambda item: accent_fold(item.get("directoryName", "")))


def vietnam_mission_directory_heading(value: str) -> tuple[str, str]:
    text = clean_text(value).replace("Ð", "Đ").replace("ð", "đ")
    folded = accent_fold(text)
    kinds = (
        ("giao xu", "Giáo xứ"),
        ("giao ho", "Giáo họ"),
        ("chuan xu", "Chuẩn xứ"),
        ("giao diem", "Giáo điểm"),
        ("nha tho", "Nhà thờ"),
    )
    for prefix, label in kinds:
        if folded == prefix:
            return "", label
        if folded.startswith(f"{prefix} "):
            name = text[len(prefix):].strip(" .:-")
            name = re.sub(
                r"\s*\((?:mới|cũ|năm\s+\d{4}|\d{4}|kỷ niệm[^)]*|mùa\s+noel|cảnh[^)]*)\)\s*$",
                "",
                name,
                flags=re.IGNORECASE,
            ).strip(" .:-")
            return name, label
    return "", ""


def vietnam_directory_address_after(node) -> str:
    sibling = node.find_next_sibling()
    inspected = 0
    while sibling is not None and inspected < 7:
        current = sibling
        sibling = sibling.find_next_sibling()
        if getattr(current, "name", None) not in ("p", "div"):
            continue
        inspected += 1
        text = clean_text(current.get_text(" ", strip=True)).replace("Ð", "Đ").replace("ð", "đ")
        if not text:
            continue
        candidate_heading = vietnam_mission_directory_heading(text)
        if candidate_heading[0] or accent_fold(text).startswith("hat "):
            break
        folded = accent_fold(text)
        if any(folded.startswith(prefix) for prefix in (
            "trang web", "website", "hinh ", "xem ", "den tho ", "cac giao ho",
        )):
            continue
        if len(text) > 320 or "prepared for internet" in folded:
            continue
        return text
    return ""


def parse_vietnam_mission_diocese(
    diocese: str,
    spec: dict[str, str],
    *,
    refresh: bool = False,
) -> list[dict]:
    directory_url = urllib.parse.urljoin(VIETNAM_MISSION_DIRECTORY_BASE, spec["directory"])
    soup = BeautifulSoup(fetch_text(directory_url, refresh=refresh), "html.parser")
    records: list[dict] = []
    deanery = ""
    for paragraph in soup.find_all("p"):
        heading = paragraph.find(["b", "strong"])
        heading_text = clean_text(heading.get_text(" ", strip=True) if heading else "")
        if not heading_text:
            continue
        heading_text = heading_text.replace("Ð", "Đ").replace("ð", "đ")
        folded = accent_fold(heading_text)
        if folded.startswith("hat "):
            deanery = re.sub(r"^Hạt\s+", "", heading_text, flags=re.IGNORECASE).strip(" .:")
            continue
        directory_name, church_type = vietnam_mission_directory_heading(heading_text)
        if not directory_name:
            continue
        address = vietnam_directory_address_after(paragraph)
        records.append(compact_record({
            "country": "VN",
            "name": f"{church_type} {directory_name}",
            "directoryName": directory_name,
            "officialDirectoryName": heading_text,
            "churchType": church_type,
            "diocese": diocese,
            "deanery": deanery,
            "address": address,
            "website": spec["official"],
            "officialDioceseUrl": spec["official"],
            "sourceUrl": directory_url,
            "sourceUrls": [directory_url, spec["official"]],
            "sourceName": "Danh bạ các giáo xứ Việt Nam",
            "sourceAuthority": "Vietnamese Missionaries in Asia",
        }))

    deduplicated: list[dict] = []
    by_key: dict[tuple[str, str, str], dict] = {}
    for record in records:
        name_key = normalized_vietnamese_parish_name(record.get("directoryName", ""), drop_parenthetical=True)
        address_key = accent_fold(record.get("address", ""))
        deanery_key = accent_fold(record.get("deanery", ""))
        key = (name_key, address_key, "" if address_key else deanery_key)
        existing = by_key.get(key)
        if existing:
            if not existing.get("address") and record.get("address"):
                existing.update(record)
            continue
        by_key[key] = record
        deduplicated.append(record)
    return deduplicated


def giole_province_urls(*, refresh: bool = False, workers: int = 8) -> dict[str, str]:
    def search(letter: str) -> list[tuple[str, str]]:
        url = f"{GIOLE_LIVESEARCH_URL}?q={urllib.parse.quote(letter)}"
        soup = BeautifulSoup(fetch_text(url, refresh=refresh), "html.parser")
        found: list[tuple[str, str]] = []
        for anchor in soup.select("a[href]"):
            href = clean_text(anchor.get("href"))
            if not re.fullmatch(r"/[^/]+\.\d+/", href):
                continue
            found.append((urllib.parse.urljoin(GIOLE_BASE_URL, href), clean_text(anchor.get_text(" ", strip=True))))
        return found

    found: dict[str, str] = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, workers)) as executor:
        for rows in executor.map(search, "abcdefghijklmnopqrstuvwxyz"):
            for url, name in rows:
                found[url] = name
    if len(found) < 30:
        raise RuntimeError(f"Giờ Lễ province directory is incomplete: {len(found)}")
    return found


def giole_mass_times_from_text(value: str) -> list[str]:
    text = clean_text(value)
    results: list[str] = []
    labels = ("Ngày thường", "Thứ Bảy", "Chúa Nhật")
    for index, label in enumerate(labels):
        next_label = labels[index + 1] if index + 1 < len(labels) else ""
        terminator = rf"(?={re.escape(next_label)}\s*:)" if next_label else r"$"
        match = re.search(
            rf"{re.escape(label)}\s*:\s*(.*?){terminator}",
            text,
            flags=re.IGNORECASE,
        )
        schedule = clean_text(match.group(1) if match else "")
        if schedule and re.search(r"\d", schedule):
            results.append(f"{label}: {schedule}")
    return unique(results)


def parse_giole_province(
    url: str,
    province: str,
    *,
    refresh: bool = False,
) -> list[dict]:
    source = fetch_text(url, refresh=refresh)
    soup = BeautifulSoup(source, "html.parser")
    cards = soup.select("#accordion > .card") or soup.select(".accordion > .card")
    coordinate_rows: dict[str, list[tuple[float, float]]] = {}
    for match in re.finditer(
        r"\[\{\s*lat:\s*(-?\d+(?:\.\d+)?),\s*lng:\s*(-?\d+(?:\.\d+)?)\s*\},\s*\"(.*?)\"\s*\]",
        source,
        flags=re.DOTALL,
    ):
        label_html = html.unescape(match.group(3)).replace("<br>", "\n").replace("<br/>", "\n")
        label = clean_text(BeautifulSoup(label_html, "html.parser").get_text("\n", strip=True).splitlines()[0])
        key = normalized_vietnamese_parish_name(label, drop_parenthetical=True)
        coordinate_rows.setdefault(key, []).append((float(match.group(1)), float(match.group(2))))

    records: list[dict] = []
    for card in cards:
        title_node = card.select_one(".card-header h5")
        raw_name = re.sub(r"^\s*\d+\s*[.)-]?\s*", "", clean_text(title_node.get_text(" ", strip=True) if title_node else ""))
        if not raw_name:
            continue
        directory_name = vietnamese_parish_heading_name(raw_name) or raw_name
        address_node = card.select_one(".card-body a[href^='javascript:mapClick']")
        address = clean_text(address_node.get_text(" ", strip=True) if address_node else "")
        detail_link = next((
            urllib.parse.urljoin(GIOLE_BASE_URL, anchor.get("href") or "")
            for anchor in card.select("a[href]")
            if re.search(r"\.html$", clean_text(anchor.get("href")), flags=re.IGNORECASE)
        ), url)
        schedule_node = card.select_one(".collapse .card-body")
        mass_times = giole_mass_times_from_text(schedule_node.get_text(" ", strip=True) if schedule_node else "")
        coordinate_key = normalized_vietnamese_parish_name(raw_name, drop_parenthetical=True)
        coordinates = coordinate_rows.get(coordinate_key, [])
        coordinate = coordinates.pop(0) if coordinates else None
        records.append(compact_record({
            "country": "VN",
            "name": raw_name,
            "directoryName": directory_name,
            "province": province,
            "address": address,
            "massTimes": mass_times,
            "massTimesPeriod": "Giờ Lễ – Văn phòng Hội đồng Giám mục Việt Nam",
            "lat": coordinate[0] if coordinate else "",
            "lng": coordinate[1] if coordinate else "",
            "website": detail_link,
            "sourceUrl": detail_link,
            "sourceName": "Giờ Lễ Nhà Thờ",
            "sourceAuthority": "Văn phòng Hội đồng Giám mục Việt Nam",
        }))
    return records


def vietnam_address_tokens(value: str) -> set[str]:
    stopwords = {
        "tinh", "thanh", "pho", "huyen", "quan", "phuong", "thi", "tran",
        "xa", "thon", "xom", "ap", "khu", "khupho", "duong", "so", "viet", "nam",
    }
    return {
        token
        for token in re.findall(r"[a-z0-9]+", accent_fold(value))
        if len(token) >= 3 and token not in stopwords
    }


def merge_giole_into_vietnam_directory(
    directory_records: list[dict],
    giole_records: list[dict],
) -> int:
    by_name: dict[str, list[dict]] = {}
    for record in giole_records:
        for key in {
            normalized_vietnamese_parish_name(record.get("directoryName", "")),
            normalized_vietnamese_parish_name(record.get("directoryName", ""), drop_parenthetical=True),
        }:
            if key:
                by_name.setdefault(key, []).append(record)

    used: set[int] = set()
    matched = 0
    for target in directory_records:
        full_key = normalized_vietnamese_parish_name(target.get("directoryName", ""))
        bare_key = normalized_vietnamese_parish_name(target.get("directoryName", ""), drop_parenthetical=True)
        candidates: list[dict] = []
        seen_ids: set[int] = set()
        for key in (full_key, bare_key):
            for candidate in by_name.get(key, []):
                marker = id(candidate)
                if marker not in seen_ids and marker not in used:
                    seen_ids.add(marker)
                    candidates.append(candidate)
        if not candidates:
            continue
        target_tokens = vietnam_address_tokens(target.get("address", ""))
        ranked = sorted(
            candidates,
            key=lambda item: (
                len(target_tokens & vietnam_address_tokens(item.get("address", ""))),
                int(normalized_vietnamese_parish_name(item.get("directoryName", "")) == full_key),
                len(item.get("massTimes", [])),
            ),
            reverse=True,
        )
        best = ranked[0]
        best_overlap = len(target_tokens & vietnam_address_tokens(best.get("address", "")))
        second_overlap = (
            len(target_tokens & vietnam_address_tokens(ranked[1].get("address", "")))
            if len(ranked) > 1 else -1
        )
        if len(ranked) > 1 and best_overlap == 0 and second_overlap == 0:
            continue
        if len(ranked) > 1 and best_overlap == second_overlap and best_overlap < 2:
            continue

        used.add(id(best))
        official_directory_name = target.get("officialDirectoryName") or target.get("directoryName")
        for field in ("name", "directoryName", "address", "massTimes", "massTimesPeriod", "lat", "lng", "website"):
            if best.get(field):
                target[field] = best[field]
        target["officialDirectoryName"] = official_directory_name
        target["sourceUrls"] = unique([
            *target.get("sourceUrls", []),
            best.get("sourceUrl", ""),
            target.get("officialDioceseUrl", ""),
        ])
        target["massTimesSourceUrl"] = best.get("sourceUrl", "")
        target["sourceName"] = "Danh bạ giáo xứ Việt Nam · Giờ Lễ Nhà Thờ"
        target["sourceAuthority"] = "Vietnamese Missionaries in Asia · Văn phòng Hội đồng Giám mục Việt Nam"
        matched += 1
    return matched


def build_vietnam_remaining(*, refresh: bool = False, workers: int = 8) -> tuple[list[dict], dict[str, int]]:
    directory_records: list[dict] = []

    def build_diocese(item: tuple[str, dict[str, str]]) -> tuple[str, list[dict]]:
        diocese, spec = item
        return diocese, parse_vietnam_mission_diocese(diocese, spec, refresh=refresh)

    diocese_counts: dict[str, int] = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, workers)) as executor:
        for diocese, records in executor.map(build_diocese, VIETNAM_REMAINING_DIOCESES.items()):
            directory_records.extend(records)
            diocese_counts[f"VN-Diocese:{diocese}"] = len(records)
            print(f"Vietnam directory {diocese}: {len(records)}", flush=True)
    if len(directory_records) < 1_700:
        raise RuntimeError(f"Remaining Vietnam diocesan directory is incomplete: {len(directory_records)}")

    province_urls = giole_province_urls(refresh=refresh, workers=workers)
    giole_records: list[dict] = []

    def build_province(item: tuple[str, str]) -> list[dict]:
        url, province = item
        return parse_giole_province(url, province, refresh=refresh)

    with concurrent.futures.ThreadPoolExecutor(max_workers=max(1, workers)) as executor:
        for records in executor.map(build_province, province_urls.items()):
            giole_records.extend(records)
    if len(giole_records) < 3_000:
        raise RuntimeError(f"Giờ Lễ nationwide church directory is incomplete: {len(giole_records)}")

    matched = merge_giole_into_vietnam_directory(directory_records, giole_records)
    counts = {
        "VN-Remaining": len(directory_records),
        "VN-RemainingAddresses": sum(bool(item.get("address")) for item in directory_records),
        "VN-RemainingMassTimes": sum(bool(item.get("massTimes")) for item in directory_records),
        "VN-RemainingCoordinates": sum("lat" in item and "lng" in item for item in directory_records),
        "VN-GioLeNationwide": len(giole_records),
        "VN-GioLeMatched": matched,
        **diocese_counts,
    }
    print(
        f"Vietnam remaining: churches={len(directory_records)} addresses={counts['VN-RemainingAddresses']} "
        f"massTimes={counts['VN-RemainingMassTimes']} coordinates={counts['VN-RemainingCoordinates']} "
        f"gioleMatches={matched}/{len(giole_records)}",
        flush=True,
    )
    return sorted(
        directory_records,
        key=lambda item: (accent_fold(item.get("diocese", "")), accent_fold(item.get("directoryName", ""))),
    ), counts


def japanese_page_lines(soup: BeautifulSoup, selector: str = "main, article, .content, .parish") -> list[str]:
    node = soup.select_one(selector) or soup
    return [
        clean_text(line)
        for line in node.get_text("\n", strip=True).splitlines()
        if clean_text(line)
    ]


def japanese_phone(value: str) -> str:
    matches = re.findall(r"(?<!\d)(0\d{1,4}[-－]\d{1,4}[-－]\d{3,4})(?!\d)", value)
    return matches[0].replace("－", "-") if matches else ""


def japanese_record(
    *,
    name: str,
    diocese: str,
    address: str,
    phone: str,
    website: str,
    mass_times: list[str],
    source_url: str,
    priest_names: list[str] | None = None,
) -> dict:
    display_name = clean_text(name)
    if not display_name.startswith("カトリック"):
        display_name = f"カトリック{display_name}"
    if "教会" not in display_name:
        display_name = f"{display_name}教会"
    directory_name = re.sub(r"^カトリック|教会$", "", display_name).strip()
    return compact_record({
        "country": "JP",
        "name": display_name,
        "directoryName": directory_name,
        "diocese": diocese,
        "address": clean_text(address),
        "phone": clean_text(phone),
        "website": website,
        "priestNames": unique(priest_names or []),
        "massTimes": unique(mass_times),
        "massTimesPeriod": "公式教区ページ掲載の現行案内（変更の場合あり）",
        "sourceUrl": source_url,
        "officialDioceseUrl": source_url,
        "sourceName": "日本のカトリック教区公式小教区案内",
        "sourceAuthority": diocese,
    })


def tokyo_parish_links(*, refresh: bool = False) -> list[dict[str, str]]:
    soup = BeautifulSoup(fetch_text(TOKYO_PARISH_LIST_URL, refresh=refresh), "html.parser")
    found: dict[str, dict[str, str]] = {}
    prefix = urllib.parse.urljoin(TOKYO_PARISH_LIST_URL, "./")
    for anchor in soup.select("a[href]"):
        url = urllib.parse.urljoin(TOKYO_PARISH_LIST_URL, anchor.get("href") or "")
        name = clean_text(anchor.get_text(" ", strip=True))
        if url.startswith(prefix) and url.rstrip("/") != prefix.rstrip("/") and name.startswith("カトリック"):
            found[url] = {"name": name, "url": url}
    if len(found) < 60:
        raise RuntimeError(f"Tokyo parish list is incomplete: {len(found)}")
    return list(found.values())


def parse_tokyo_parish(link: dict[str, str], *, refresh: bool = False) -> dict:
    soup = BeautifulSoup(fetch_text(link["url"], refresh=refresh), "html.parser")
    lines = japanese_page_lines(soup)
    joined = " ".join(lines)
    address_match = re.search(r"(?:〒\s*)?\d{3}-\d{4}\s*(?:〒\s*)?東京都[^電話\[]+", joined)
    address = clean_text(address_match.group(0)) if address_match else ""
    phone_match = re.search(r"電話[：:\s]*(0\d{1,4}-\d{1,4}-\d{3,4})", joined)
    phone = phone_match.group(1) if phone_match else japanese_phone(joined)

    website = ""
    main = soup.select_one("main, .content") or soup
    for anchor in main.select("a[href^='http']"):
        url = clean_text(anchor.get("href"))
        if not any(host in url for host in ("tokyo.catholic.jp", "google.", "maps.", "twitter.", "facebook.")):
            website = url
            break

    section_starts = {
        "主日のミサ": ("主日のミサ", "平日のミサ", "週日のミサ", "外国語ミサ", "主任司祭", "宣教協力体", "教会学校", "住所"),
        "平日のミサ": ("平日のミサ", "外国語ミサ", "主任司祭", "宣教協力体", "教会学校", "住所"),
        "週日のミサ": ("週日のミサ", "外国語ミサ", "主任司祭", "宣教協力体", "教会学校", "住所"),
        "外国語ミサ": ("外国語ミサ", "主任司祭", "宣教協力体", "教会学校", "住所"),
    }
    mass_times: list[str] = []
    for label, boundaries in section_starts.items():
        start = next((index for index, value in enumerate(lines) if value.startswith(label)), -1)
        if start < 0:
            continue
        end = len(lines)
        for index in range(start + 1, len(lines)):
            if any(lines[index].startswith(boundary) for boundary in boundaries[1:]):
                end = index
                break
        value = clean_text(" ".join(lines[start + 1:end]))
        if value:
            mass_times.append(f"{label}: {value}")

    priest_names: list[str] = []
    clergy_labels = ("主任司祭", "助任司祭", "協力司祭")
    stop_labels = clergy_labels + ("創立年月日", "信徒数", "宣教協力体", "教会学校")
    for label in clergy_labels:
        start = next((index for index, value in enumerate(lines) if value == label), -1)
        if start < 0:
            continue
        for value in lines[start + 1:]:
            if value in stop_labels:
                break
            if len(value) <= 100:
                priest_names.append(value)

    return japanese_record(
        name=link["name"],
        diocese="東京大司教区",
        address=address,
        phone=phone,
        website=website or link["url"],
        mass_times=mass_times,
        source_url=link["url"],
        priest_names=priest_names,
    )


def build_japan_tokyo(*, refresh: bool = False, workers: int = 8) -> list[dict]:
    links = tokyo_parish_links(refresh=refresh)
    records: list[dict] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
        futures = [executor.submit(parse_tokyo_parish, link, refresh=refresh) for link in links]
        for future in concurrent.futures.as_completed(futures):
            records.append(future.result())
    return sorted(records, key=lambda item: item.get("directoryName", ""))


def build_japan_osaka_takamatsu(*, refresh: bool = False) -> list[dict]:
    soup = BeautifulSoup(fetch_text(OSAKA_TAKAMATSU_PARISH_URL, refresh=refresh), "html.parser")
    records: list[dict] = []
    for table in soup.select("table"):
        heading = table.find_previous("h3")
        prefecture = clean_text(heading.get_text(" ", strip=True)) if heading else ""
        if prefecture not in {"大阪府", "兵庫県", "和歌山県", "香川県", "愛媛県", "徳島県", "高知県"}:
            continue
        for row in table.select("tr")[1:]:
            cells = row.find_all(["th", "td"], recursive=False)
            if len(cells) < 3:
                continue
            name = clean_text(cells[0].get_text(" ", strip=True))
            address_phone = clean_text(cells[1].get_text(" ", strip=True))
            mass = clean_text(cells[2].get_text(" ", strip=True))
            if not name or not re.search(r"\d{3}-\d{4}", address_phone):
                continue
            phone = japanese_phone(address_phone)
            address = re.sub(r"\s+" + re.escape(phone) + r"\s*$", "", address_phone) if phone else address_phone
            link = cells[0].find("a", href=True)
            website = urllib.parse.urljoin(OSAKA_TAKAMATSU_PARISH_URL, link["href"]) if link else OSAKA_TAKAMATSU_PARISH_URL
            records.append(japanese_record(
                name=name,
                diocese="大阪高松大司教区",
                address=address,
                phone=phone,
                website=website,
                mass_times=[f"主日ミサ: {mass}"] if mass and mass != "なし" else [],
                source_url=OSAKA_TAKAMATSU_PARISH_URL,
            ))
    if len(records) < 100:
        raise RuntimeError(f"Osaka-Takamatsu parish list is incomplete: {len(records)}")
    return sorted(records, key=lambda item: item.get("directoryName", ""))


def build_japan_kyoto(*, refresh: bool = False) -> list[dict]:
    soup = BeautifulSoup(fetch_text(KYOTO_PARISH_URL, refresh=refresh), "html.parser")
    records: list[dict] = []
    for row in soup.select("table tr"):
        cells = row.find_all(["th", "td"], recursive=False)
        if len(cells) < 7:
            continue
        address = clean_text(cells[3].get_text(" ", strip=True))
        if not re.search(r"\d{3}-\d{4}", address):
            continue
        raw_name = clean_text(cells[0].get_text(" ", strip=True))
        name = re.split(r"\s*(?:<|[A-Z][A-Z .'-]{2,})", raw_name, maxsplit=1)[0]
        name = re.sub(r"[（(][^）)]*[）)]", "", name).replace(" ", "").strip()
        weekend = clean_text(cells[1].get_text(" ", strip=True))
        weekday = clean_text(cells[2].get_text(" ", strip=True))
        phone = clean_text(cells[4].get_text(" ", strip=True))
        link = cells[0].find("a", href=True)
        website = urllib.parse.urljoin(KYOTO_PARISH_URL, link["href"]) if link else KYOTO_PARISH_URL
        records.append(japanese_record(
            name=name,
            diocese="京都司教区",
            address=address,
            phone=phone if phone != "-" else "",
            website=website,
            mass_times=[
                f"主日ミサ・集会祭儀: {weekend}" if weekend else "",
                f"週日ミサ・集会祭儀: {weekday}" if weekday else "",
            ],
            source_url=KYOTO_PARISH_URL,
        ))
    if len(records) < 40:
        raise RuntimeError(f"Kyoto parish list is incomplete: {len(records)}")
    return sorted(records, key=lambda item: item.get("directoryName", ""))


def nagoya_parish_links(*, refresh: bool = False) -> list[dict[str, str]]:
    soup = BeautifulSoup(fetch_text(NAGOYA_PARISH_URL, refresh=refresh), "html.parser")
    found: dict[str, dict[str, str]] = {}
    prefix = f"{NAGOYA_PARISH_URL.rstrip('/')}/"
    for anchor in soup.select("a[href]"):
        url = urllib.parse.urljoin(NAGOYA_PARISH_URL, anchor.get("href") or "")
        name = clean_text(anchor.get_text(" ", strip=True))
        if url.startswith(prefix) and url != prefix and name and ("教会" in name or "センター" in name):
            found[url] = {"name": name, "url": url}
    if len(found) < 50:
        raise RuntimeError(f"Nagoya parish list is incomplete: {len(found)}")
    return list(found.values())


def parse_nagoya_parish(link: dict[str, str], *, refresh: bool = False) -> dict:
    soup = BeautifulSoup(fetch_text(link["url"], refresh=refresh), "html.parser")
    lines = japanese_page_lines(soup)
    joined = " ".join(lines)
    address_match = re.search(r"〒?\s*\d{3}-\d{4}\s+[^T]+?(?=\s+TEL[：:])", joined)
    address = clean_text(address_match.group(0)) if address_match else ""
    phone_match = re.search(r"TEL[：:\s]*(0\d{1,4}-\d{1,4}-\d{3,4})", joined)
    phone = phone_match.group(1) if phone_match else japanese_phone(joined)
    website_match = re.search(r"URL[：:\s]*(https?://\S+)", joined)
    website = website_match.group(1).rstrip(".,）)") if website_match else link["url"]
    mass_index = max((index for index, value in enumerate(lines) if value in {"Mass", "ミサ"}), default=-1)
    mass_text = clean_text(" ".join(lines[mass_index + 1:])) if mass_index >= 0 else ""
    mass_text = re.split(r"\s+(?:SNS|教区ニュース|教区案内)\s+", mass_text, maxsplit=1)[0]
    return japanese_record(
        name=link["name"],
        diocese="名古屋司教区",
        address=address,
        phone=phone,
        website=website,
        mass_times=[mass_text] if re.search(r"\d{1,2}[：:]\d{2}", mass_text) else [],
        source_url=link["url"],
    )


def build_japan_nagoya(*, refresh: bool = False, workers: int = 8) -> list[dict]:
    links = nagoya_parish_links(refresh=refresh)
    records: list[dict] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
        futures = [executor.submit(parse_nagoya_parish, link, refresh=refresh) for link in links]
        for future in concurrent.futures.as_completed(futures):
            records.append(future.result())
    return sorted(records, key=lambda item: item.get("directoryName", ""))


def fukuoka_parish_links(*, refresh: bool = False) -> list[dict[str, str]]:
    soup = BeautifulSoup(fetch_text(FUKUOKA_PARISH_URL, refresh=refresh), "html.parser")
    found: dict[str, dict[str, str]] = {}
    prefix = FUKUOKA_PARISH_URL
    for anchor in soup.select("a[href]"):
        url = urllib.parse.urljoin(FUKUOKA_PARISH_URL, anchor.get("href") or "")
        name = clean_text(anchor.get_text(" ", strip=True))
        if url.startswith(prefix) and url.rstrip("/") != prefix.rstrip("/") and name and "詳細はこちら" not in name:
            found[url] = {"name": name.split("/")[0].strip(), "url": url}
    if len(found) < 45:
        raise RuntimeError(f"Fukuoka parish list is incomplete: {len(found)}")
    return list(found.values())


def parse_fukuoka_parish(link: dict[str, str], *, refresh: bool = False) -> dict:
    soup = BeautifulSoup(fetch_text(link["url"], refresh=refresh), "html.parser")
    labels = {
        "教会名", "住所", "TEL / FAX", "ホームページ", "担当司祭（主）",
        "担当司祭（協働/協力）", "ミサ時間（平日）", "ミサ時間（主日）", "ミサ時間（外国語）",
    }
    values: dict[str, str] = {}
    website = ""
    for row in soup.select("tr"):
        cells = row.find_all(["th", "td"], recursive=False)
        if len(cells) >= 2:
            key = clean_text(cells[0].get_text(" ", strip=True))
            if key in labels and key not in values:
                values[key] = clean_text(cells[1].get_text(" ", strip=True))
                if key == "ホームページ":
                    anchor = cells[1].find("a", href=True)
                    if anchor:
                        website = urllib.parse.urljoin(link["url"], anchor["href"])
    page_lines = japanese_page_lines(soup)
    if not values:
        for index, value in enumerate(page_lines[:-1]):
            if value in labels:
                values[value] = page_lines[index + 1]
    website = website or link["url"]
    normalize_mass = lambda value: clean_text(value).replace("日曜日700", "日曜日 7:00")
    mass_times = [
        f"平日: {normalize_mass(values.get('ミサ時間（平日）', ''))}" if values.get("ミサ時間（平日）") else "",
        f"主日: {normalize_mass(values.get('ミサ時間（主日）', ''))}" if values.get("ミサ時間（主日）") else "",
        f"外国語: {normalize_mass(values.get('ミサ時間（外国語）', ''))}" if values.get("ミサ時間（外国語）") else "",
    ]
    priest_names = [values.get("担当司祭（主）", ""), values.get("担当司祭（協働/協力）", "")]
    return japanese_record(
        name=values.get("教会名", link["name"]).split("/")[0],
        diocese="福岡司教区",
        address=values.get("住所", ""),
        phone=japanese_phone(values.get("TEL / FAX", "")),
        website=website,
        mass_times=mass_times,
        source_url=link["url"],
        priest_names=priest_names,
    )


def build_japan_fukuoka(*, refresh: bool = False, workers: int = 8) -> list[dict]:
    links = fukuoka_parish_links(refresh=refresh)
    records: list[dict] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
        futures = [executor.submit(parse_fukuoka_parish, link, refresh=refresh) for link in links]
        for future in concurrent.futures.as_completed(futures):
            records.append(future.result())
    return sorted(records, key=lambda item: item.get("directoryName", ""))


def build_japan_sapporo(*, refresh: bool = False) -> list[dict]:
    soup = BeautifulSoup(fetch_text(SAPPORO_PARISH_URL, refresh=refresh), "html.parser")
    records: list[dict] = []
    for table in soup.select("table"):
        values: dict[str, str] = {}
        for row in table.select("tr"):
            cells = row.find_all(["th", "td"], recursive=False)
            if len(cells) >= 2:
                values[clean_text(cells[0].get_text(" ", strip=True))] = clean_text(cells[1].get_text(" ", strip=True))
        name = values.get("小教区", "")
        if not name:
            continue
        website = SAPPORO_PARISH_URL
        for anchor in table.select("a[href]"):
            url = urllib.parse.urljoin(SAPPORO_PARISH_URL, anchor.get("href") or "")
            if url.startswith("http"):
                website = url
                break
        records.append(japanese_record(
            name=name,
            diocese="札幌司教区",
            address=values.get("住所", ""),
            phone=values.get("電話", ""),
            website=website,
            mass_times=[values.get("ミサ時間", "")],
            source_url=SAPPORO_PARISH_URL,
        ))
    if len(records) < 19:
        raise RuntimeError(f"Sapporo parish list is incomplete: {len(records)}")
    return sorted(records, key=lambda item: item.get("directoryName", ""))


def build_japan(*, refresh: bool = False, workers: int = 8) -> tuple[list[dict], dict[str, int]]:
    groups = {
        "JP-Tokyo": build_japan_tokyo(refresh=refresh, workers=workers),
        "JP-OsakaTakamatsu": build_japan_osaka_takamatsu(refresh=refresh),
        "JP-Kyoto": build_japan_kyoto(refresh=refresh),
        "JP-Nagoya": build_japan_nagoya(refresh=refresh, workers=workers),
        "JP-Fukuoka": build_japan_fukuoka(refresh=refresh, workers=workers),
        "JP-Sapporo": build_japan_sapporo(refresh=refresh),
    }
    records = [record for group in groups.values() for record in group]
    counts = {key: len(value) for key, value in groups.items()}
    counts["JP"] = len(records)
    counts["JP-MassTimes"] = sum(bool(item.get("massTimes")) for item in records)
    print(f"Japan: {counts}", flush=True)
    return sorted(records, key=lambda item: (item.get("diocese", ""), item.get("directoryName", ""))), counts


def build_vatican() -> list[dict]:
    # The Holy See's official information page publishes these four papal
    # basilicas and their schedules together. Fields not present there are
    # intentionally omitted.
    records = [
        {
            "country": "VA",
            "name": "Papal Basilica of Saint Peter - Vatican",
            "address": "Piazza San Pietro, 00120 Città del Vaticano",
            "phone": "+39 06 698 83712",
            "website": "https://www.vatican.va/content/basilicas/en.html",
            "massTimes": [
                "Monday-Saturday: 07:00, 07:30, 08:00, 08:30, 09:00, 10:00, 11:00, 12:00, 17:00",
                "Sunday and holy days: 07:00, 08:00, 09:00, 10:30, 12:30, 13:00, 16:00, 17:00, 18:00",
            ],
        },
        {
            "country": "VA",
            "name": "Papal Basilica of Saint John Lateran",
            "address": "Piazza di San Giovanni in Laterano, 4, Roma",
            "phone": "+39 06 698 86433",
            "website": "https://press.vatican.va/various/basiliche/san_giovanni/it/orari/orari.htm",
            "massTimes": [
                "Monday-Saturday: 07:00, 07:30, 08:00, 09:00, 10:00, 11:00, 12:00, 17:30",
                "Sunday and holy days: 07:00, 08:00, 09:00, 09:45, 10:30, 12:00, 15:45 (confirmation Saturdays only), 17:30",
            ],
            "openingHours": ["Basilica: 07:00-18:30"],
        },
        {
            "country": "VA",
            "name": "Papal Basilica of Saint Mary Major",
            "address": "Via Liberiana, 27, Roma",
            "phone": "+39 06 698 86800",
            "website": "https://www.vatican.va/content/basilicas/en.html",
            "massTimes": [
                "Monday-Saturday: 07:00, 08:00, 09:00, 10:00, 12:00, 18:00",
                "Sunday and holy days: 07:00, 08:00, 09:00, 10:00, 11:00, 12:00, 18:00",
            ],
        },
        {
            "country": "VA",
            "name": "Papal Basilica of Saint Paul Outside the Walls",
            "address": "Via Ostiense, 186, Roma",
            "phone": "+39 06 454 34185",
            "website": "https://www.vatican.va/various/basiliche/san_paolo/en/orari/ufficio.htm",
            "openingHours": ["Sacristy: daily 08:00-12:00 and 16:00-19:00"],
        },
    ]
    for record in records:
        record.update({
            "sourceUrl": VATICAN_SOURCE_URL,
            "sourceName": "Holy See - Useful Information",
            "sourceAuthority": "Holy See",
        })
    return records


def compact_record(record: dict) -> dict:
    return {key: value for key, value in record.items() if value not in ("", [], None)}


def apply_known_church_corrections(records: list[dict]) -> None:
    for record in records:
        if (
            record.get("diocese") == "Giáo phận Cần Thơ"
            and normalized_vietnamese_parish_name(record.get("directoryName", "")) == "anhoi"
        ):
            record["massTimes"] = [
                "Thứ Bảy: 17g30",
                "Chúa Nhật: 05g00, 07g00, 17g30",
                "Ngày thường: 17g30",
            ]
            record["massTimesPeriod"] = "Hiệu chỉnh theo xác nhận ngày 23/7/2026"


def write_javascript(records: list[dict], source_counts: dict[str, int], *, output_path: Path = OUTPUT_PATH) -> None:
    apply_known_church_corrections(records)
    generated_at = dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat()
    payload = json.dumps([compact_record(record) for record in records], ensure_ascii=False, separators=(",", ":"))
    metadata = json.dumps({
        "generatedAt": generated_at,
        "recordCount": len(records),
        "sourceCounts": source_counts,
        "sources": [
            KOREA_SOURCE_URL, SUWON_LIST_URL, GOODNEWS_PARISH_API,
            CANTHO_ADDRESS_URL, CANTHO_MASS_URL, CANTHO_PRIESTS_URL,
            HCMC_MASS_LIST_URL, HANOI_PARISH_CATEGORY_URL, GIOLE_BASE_URL,
            BARIA_MASS_URL, *BARIA_DEANERY_URLS.values(),
            *(
                urllib.parse.urljoin(VIETNAM_MISSION_DIRECTORY_BASE, spec["directory"])
                for spec in VIETNAM_REMAINING_DIOCESES.values()
            ),
            *(spec["official"] for spec in VIETNAM_REMAINING_DIOCESES.values()),
            *JAPAN_SOURCE_URLS,
            VATICAN_SOURCE_URL,
        ],
    }, ensure_ascii=False, separators=(",", ":"))
    javascript = f"""// Generated by tools/build-church-local-details.py. Do not hand-edit.\n(function () {{\n  'use strict';\n  const records = {payload};\n  const metadata = {metadata};\n  const index = Object.create(null);\n  const normalize = value => String(value || '')\n    .normalize('NFKC')\n    .toLowerCase()\n    .replace(/천주교|가톨릭|catholic|roman catholic|nhà thờ|giao xu|giáo xứ|カトリック/gu, '')\n    .replace(/성당|본당|교회|church|parish|教会/gu, '')\n    .replace(/[^\\p{{L}}\\p{{N}}]+/gu, '');\n  const aliases = record => {{\n    const raw = [record.name, record.directoryName].filter(Boolean);\n    const bare = String(record.directoryName || record.name || '').replace(/(?:성당|본당|교회)$/u, '');\n    raw.push(bare, `${{bare}}성당`, `천주교 ${{bare}}성당`, `가톨릭 ${{bare}}성당`);\n    return raw.filter(Boolean);\n  }};\n  records.forEach(record => {{\n    aliases(record).forEach(alias => {{\n      index[String(alias).trim().toLowerCase()] = record;\n      const normalized = normalize(alias);\n      if (normalized) index[normalized] = record;\n    }});\n  }});\n  globalThis.churchLocalDetailRecords = records;\n  globalThis.churchLocalDetails = index;\n  globalThis.churchLocalDetailsMeta = metadata;\n}})();\n"""
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(javascript, encoding="utf-8", newline="\n")


def load_existing_javascript() -> tuple[list[dict], dict[str, int]]:
    if not OUTPUT_PATH.is_file():
        raise RuntimeError(f"Existing church dataset was not found: {OUTPUT_PATH}")
    source = OUTPUT_PATH.read_text(encoding="utf-8")
    records_match = re.search(r"\bconst records = (\[.*?\]);\s*\n\s*const metadata =", source, flags=re.DOTALL)
    metadata_match = re.search(r"\bconst metadata = (\{.*?\});\s*\n\s*const index =", source, flags=re.DOTALL)
    if not records_match or not metadata_match:
        raise RuntimeError("Existing church JavaScript could not be parsed")
    records = json.loads(records_match.group(1))
    metadata = json.loads(metadata_match.group(1))
    return records, dict(metadata.get("sourceCounts") or {})


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--countries", default="korea,cantho,hochiminh,hanoi,baria,vatican")
    parser.add_argument("--refresh", action="store_true")
    parser.add_argument("--reuse-existing", action="store_true")
    parser.add_argument("--workers", type=int, default=8)
    parser.add_argument("--output", help="Write generated JavaScript to this path while retaining the standard file as the reuse source")
    args = parser.parse_args()
    output_path = Path(args.output).resolve() if args.output else OUTPUT_PATH
    countries = {item.strip().lower() for item in args.countries.split(",") if item.strip()}
    records: list[dict] = []
    source_counts: dict[str, int] = {}
    if args.reuse_existing:
        records, source_counts = load_existing_javascript()
        if "korea" in countries:
            korea = [record for record in records if record.get("country") == "KR"]
            records = [record for record in records if record.get("country") != "KR"]
            seoul = build_goodnews_diocese("11", "서울대교구", refresh=args.refresh, workers=args.workers)
            merged_seoul = merge_official_diocese_records(korea, seoul)
            uijeongbu = build_goodnews_diocese("17", "의정부교구", refresh=args.refresh, workers=args.workers)
            merged_uijeongbu = merge_official_diocese_records(korea, uijeongbu)
            records.extend(korea)
            source_counts["KR"] = len(korea)
            source_counts["KR-SeoulMassTimes"] = sum(bool(item.get("massTimes")) for item in seoul)
            source_counts["KR-SeoulMerged"] = merged_seoul
            source_counts["KR-UijeongbuMassTimes"] = sum(bool(item.get("massTimes")) for item in uijeongbu)
            source_counts["KR-UijeongbuMerged"] = merged_uijeongbu
        if "hochiminh" in countries or "vietnam" in countries:
            records = [record for record in records if record.get("diocese") != "Tổng Giáo phận Sài Gòn"]
            hochiminh = build_hochiminh(refresh=args.refresh, workers=args.workers)
            records.extend(hochiminh)
            source_counts["VN-HoChiMinh"] = len(hochiminh)
            source_counts["VN-HoChiMinhMassTimes"] = sum(bool(item.get("massTimes")) for item in hochiminh)
            source_counts["VN-HoChiMinhPriests"] = sum(bool(item.get("priestNames")) for item in hochiminh)
        if "hanoi" in countries or "vietnam" in countries:
            records = [record for record in records if record.get("diocese") != "Tổng Giáo phận Hà Nội"]
            hanoi = build_hanoi(refresh=args.refresh, workers=args.workers)
            records.extend(hanoi)
            source_counts["VN-Hanoi"] = len(hanoi)
            source_counts["VN-HanoiMassTimes"] = sum(bool(item.get("massTimes")) for item in hanoi)
        if "baria" in countries or "vietnam" in countries:
            records = [record for record in records if record.get("diocese") != "Giáo phận Bà Rịa"]
            baria = build_baria(refresh=args.refresh, workers=args.workers)
            records.extend(baria)
            source_counts["VN-BaRia"] = len(baria)
            source_counts["VN-BaRiaMassTimes"] = sum(bool(item.get("massTimes")) for item in baria)
            source_counts["VN-BaRiaAddresses"] = sum(bool(item.get("address")) for item in baria)
        if "vietnam-remaining" in countries or "vietnam" in countries:
            remaining_dioceses = set(VIETNAM_REMAINING_DIOCESES)
            records = [record for record in records if record.get("diocese") not in remaining_dioceses]
            vietnam_remaining, vietnam_remaining_counts = build_vietnam_remaining(
                refresh=args.refresh,
                workers=args.workers,
            )
            records.extend(vietnam_remaining)
            source_counts.update(vietnam_remaining_counts)
        if "japan" in countries:
            records = [record for record in records if record.get("country") != "JP"]
            japan, japan_counts = build_japan(refresh=args.refresh, workers=args.workers)
            records.extend(japan)
            source_counts.update(japan_counts)
        write_javascript(records, source_counts, output_path=output_path)
        print(json.dumps({"output": str(output_path), "records": len(records), "sourceCounts": source_counts}, ensure_ascii=False))
        return
    if "korea" in countries:
        korea = build_korea(refresh=args.refresh, workers=args.workers)
        suwon = build_suwon(refresh=args.refresh, workers=args.workers)
        merged_suwon = merge_official_diocese_records(korea, suwon)
        seoul = build_goodnews_diocese("11", "서울대교구", refresh=args.refresh, workers=args.workers)
        merged_seoul = merge_official_diocese_records(korea, seoul)
        uijeongbu = build_goodnews_diocese("17", "의정부교구", refresh=args.refresh, workers=args.workers)
        merged_uijeongbu = merge_official_diocese_records(korea, uijeongbu)
        records.extend(korea)
        source_counts["KR"] = len(korea)
        source_counts["KR-SuwonMassTimes"] = sum(bool(item.get("massTimes")) for item in suwon)
        source_counts["KR-SuwonMerged"] = merged_suwon
        source_counts["KR-SeoulMassTimes"] = sum(bool(item.get("massTimes")) for item in seoul)
        source_counts["KR-SeoulMerged"] = merged_seoul
        source_counts["KR-UijeongbuMassTimes"] = sum(bool(item.get("massTimes")) for item in uijeongbu)
        source_counts["KR-UijeongbuMerged"] = merged_uijeongbu
    if "cantho" in countries or "vietnam" in countries:
        cantho = build_cantho(refresh=args.refresh)
        records.extend(cantho)
        source_counts["VN-CanTho"] = len(cantho)
        source_counts["VN-CanThoMassTimes"] = sum(bool(item.get("massTimes")) for item in cantho)
        source_counts["VN-CanThoPriests"] = sum(bool(item.get("priestNames")) for item in cantho)
    if "hochiminh" in countries or "vietnam" in countries:
        hochiminh = build_hochiminh(refresh=args.refresh, workers=args.workers)
        records.extend(hochiminh)
        source_counts["VN-HoChiMinh"] = len(hochiminh)
        source_counts["VN-HoChiMinhMassTimes"] = sum(bool(item.get("massTimes")) for item in hochiminh)
        source_counts["VN-HoChiMinhPriests"] = sum(bool(item.get("priestNames")) for item in hochiminh)
    if "hanoi" in countries or "vietnam" in countries:
        hanoi = build_hanoi(refresh=args.refresh, workers=args.workers)
        records.extend(hanoi)
        source_counts["VN-Hanoi"] = len(hanoi)
        source_counts["VN-HanoiMassTimes"] = sum(bool(item.get("massTimes")) for item in hanoi)
    if "baria" in countries or "vietnam" in countries:
        baria = build_baria(refresh=args.refresh, workers=args.workers)
        records.extend(baria)
        source_counts["VN-BaRia"] = len(baria)
        source_counts["VN-BaRiaMassTimes"] = sum(bool(item.get("massTimes")) for item in baria)
        source_counts["VN-BaRiaAddresses"] = sum(bool(item.get("address")) for item in baria)
    if "vietnam-remaining" in countries or "vietnam" in countries:
        vietnam_remaining, vietnam_remaining_counts = build_vietnam_remaining(
            refresh=args.refresh,
            workers=args.workers,
        )
        records.extend(vietnam_remaining)
        source_counts.update(vietnam_remaining_counts)
    if "japan" in countries:
        japan, japan_counts = build_japan(refresh=args.refresh, workers=args.workers)
        records.extend(japan)
        source_counts.update(japan_counts)
    if "vatican" in countries:
        vatican = build_vatican()
        records.extend(vatican)
        source_counts["VA"] = len(vatican)
    write_javascript(records, source_counts, output_path=output_path)
    print(json.dumps({"output": str(output_path), "records": len(records), "sourceCounts": source_counts}, ensure_ascii=False))


if __name__ == "__main__":
    main()
