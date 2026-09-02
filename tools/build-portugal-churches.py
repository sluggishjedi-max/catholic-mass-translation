from __future__ import annotations

import json
import re
import time
from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "JS file" / "countries" / "portugal" / "portugal_churches.js"
LIST_URL = "https://www.anuariocatolicoportugal.net/lista_paroquias.asp"
CEP_DIOCESES_URL = "https://www.conferenciaepiscopal.pt/v1/dioceses/"
PAGE_SIZE = 50


CATHEDRALS = [
    {"name": "Sé Catedral de Faro", "diocese": "Algarve", "address": "Largo da Sé, Faro", "lat": 37.0132964, "lng": -7.9346581},
    {"name": "Sé Catedral de Angra", "diocese": "Angra", "address": "Rua da Sé, Angra do Heroísmo", "lat": 38.6554167, "lng": -27.2210184},
    {"name": "Sé Catedral de Aveiro", "diocese": "Aveiro", "address": "Rua Batalhão Caçadores 10, Aveiro", "lat": 40.6410, "lng": -8.6530},
    {"name": "Sé Catedral de Beja", "diocese": "Beja", "address": "Largo do Lidador, Beja", "lat": 38.0149, "lng": -7.8633},
    {"name": "Sé Primacial de Braga", "diocese": "Braga", "address": "Rua Dom Paio Mendes, Braga", "lat": 41.5496, "lng": -8.4271},
    {"name": "Sé Catedral de Bragança", "diocese": "Bragança-Miranda", "address": "Praça da Sé, Bragança", "lat": 41.8050, "lng": -6.7560},
    {"name": "Sé Nova de Coimbra", "diocese": "Coimbra", "address": "Largo Feira dos Estudantes, Coimbra", "lat": 40.2098904, "lng": -8.4245597},
    {"name": "Sé Catedral de Évora", "diocese": "Évora", "address": "Largo do Marquês de Marialva, Évora", "lat": 38.5717381, "lng": -7.9067208},
    {"name": "Sé Catedral do Funchal", "diocese": "Funchal", "address": "Rua do Aljube, Funchal", "lat": 32.6485, "lng": -16.9084},
    {"name": "Sé Catedral da Guarda", "diocese": "Guarda", "address": "Praça Luís de Camões, Guarda", "lat": 40.5373, "lng": -7.2670},
    {"name": "Sé Catedral de Lamego", "diocese": "Lamego", "address": "Largo da Sé, Lamego", "lat": 41.0975, "lng": -7.8090},
    {"name": "Sé Catedral de Leiria", "diocese": "Leiria-Fátima", "address": "Largo Cónego Maia, Leiria", "lat": 39.7445, "lng": -8.8072},
    {"name": "Sé Patriarcal de Lisboa", "diocese": "Lisboa", "address": "Largo da Sé, Lisboa", "lat": 38.7098185, "lng": -9.1328001},
    {"name": "Sé Catedral de Portalegre", "diocese": "Portalegre-Castelo Branco", "address": "Praça do Município, Portalegre", "lat": 39.2905, "lng": -7.4310},
    {"name": "Sé Catedral do Porto", "diocese": "Porto", "address": "Terreiro da Sé, Porto", "lat": 41.1427992, "lng": -8.6112059},
    {"name": "Sé Catedral de Santarém", "diocese": "Santarém", "address": "Praça Sá da Bandeira, Santarém", "lat": 39.2369, "lng": -8.6870},
    {"name": "Sé Catedral de Setúbal", "diocese": "Setúbal", "address": "Praça Teófilo Braga, Setúbal", "lat": 38.5243, "lng": -8.8927},
    {"name": "Sé Catedral de Viana do Castelo", "diocese": "Viana do Castelo", "address": "Largo Instituto Histórico do Minho, Viana do Castelo", "lat": 41.6936, "lng": -8.8288},
    {"name": "Sé Catedral de Vila Real", "diocese": "Vila Real", "address": "Avenida Carvalho Araújo, Vila Real", "lat": 41.2963268, "lng": -7.7465163},
    {"name": "Sé Catedral de Viseu", "diocese": "Viseu", "address": "Adro da Sé, Viseu", "lat": 40.6573, "lng": -7.9103},
]


def text(node: object) -> str:
    return " ".join(node.get_text(" ", strip=True).split()) if node else ""


def fetch_page(session: requests.Session, offset: int) -> str:
    response = session.get(LIST_URL, params={"offset": offset} if offset else None, timeout=45)
    response.raise_for_status()
    response.encoding = "iso-8859-1"
    return response.text


def parse_page(source: str) -> tuple[list[dict[str, object]], int]:
    soup = BeautifulSoup(source, "html.parser")
    heading = text(soup)
    total_match = re.search(r"de\s*\((\d+)\)", heading)
    total = int(total_match.group(1)) if total_match else 0
    entries: list[dict[str, object]] = []
    for row in soup.select("tr"):
        link = row.select_one("a[href*='ficha_paroquia_padre.asp?paroquiaid=']")
        if not link:
            continue
        cells = [text(cell) for cell in row.find_all("td", recursive=False)]
        if len(cells) != 4:
            continue
        name, patron, archpriesthood, diocese = cells
        match = re.search(r"paroquiaid=(\d+)", link.get("href", ""))
        if not (match and name and diocese):
            continue
        parish_id = int(match.group(1))
        detail_url = urljoin(LIST_URL, link.get("href", ""))
        display_name = f"Paróquia de {name}" + (f" ({patron})" if patron else "")
        entries.append({
            "name": display_name,
            "directoryName": name,
            "officialDirectoryName": display_name,
            "patron": patron,
            "archpriesthood": archpriesthood,
            "diocese": diocese,
            "country": "PT",
            "churchId": f"PT-CEP-PARISH-{parish_id}",
            "sourceUrl": detail_url,
            "officialDioceseUrl": detail_url,
        })
    return entries, total


def scrape_directory() -> list[dict[str, object]]:
    session = requests.Session()
    session.headers["User-Agent"] = "OrdoMissaeDirectoryBuilder/27.6 (+parish directory verification)"
    first_html = fetch_page(session, 0)
    first_entries, total = parse_page(first_html)
    if total < 4_000:
        raise RuntimeError(f"Unexpected Portuguese parish total: {total}")
    entries = list(first_entries)
    for offset in range(PAGE_SIZE, total, PAGE_SIZE):
        page_entries, page_total = parse_page(fetch_page(session, offset))
        if page_total and page_total != total:
            raise RuntimeError(f"Directory total changed while scraping: {total} -> {page_total}")
        entries.extend(page_entries)
        time.sleep(0.04)
    by_id = {entry["churchId"]: entry for entry in entries}
    if len(by_id) != total:
        raise RuntimeError(f"Expected {total} unique parishes, parsed {len(by_id)}")
    return sorted(by_id.values(), key=lambda item: (str(item["diocese"]), str(item["directoryName"]), str(item["churchId"])))


def main() -> None:
    parishes = scrape_directory()
    entries: list[dict[str, object]] = []
    for index, cathedral in enumerate(CATHEDRALS, start=1):
        entries.append({
            **cathedral,
            "country": "PT",
            "churchId": f"PT-CEP-CATHEDRAL-{index:02d}",
            "sourceUrl": CEP_DIOCESES_URL,
            "officialDioceseUrl": CEP_DIOCESES_URL,
            "recordType": "cathedral",
        })
    entries.extend({**parish, "recordType": "parish"} for parish in parishes)
    source = {
        "title": "Anuário Católico de Portugal — Índice das Paróquias",
        "authority": "Conferência Episcopal Portuguesa / Secretariado Geral",
        "url": LIST_URL,
        "conferenceDirectoryUrl": CEP_DIOCESES_URL,
        "coverage": f"{len(parishes)} parish records across the 20 territorial dioceses, plus 20 cathedral coordinate seeds.",
        "parishCount": len(parishes),
    }
    js = """// Portugal CEP church directory (Beta): complete published parish index and cathedral coordinate seeds.
(function registerPortugalChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  const source = Object.freeze(%s);
  const entries = Object.freeze(%s.map(entry => Object.freeze(Object.assign({
    sourceName: source.title, sourceAuthority: source.authority
  }, entry))));
  global.countryChurchData.PT = Object.freeze({
    schemaVersion: 3, jurisdiction: 'PT', jurisdictions: Object.freeze(['PT']),
    conference: 'Conferência Episcopal Portuguesa (CEP)', beta: true, exhaustive: true, source, entries
  });
})(globalThis);
""" % (
        json.dumps(source, ensure_ascii=False, separators=(",", ":")),
        json.dumps(entries, ensure_ascii=False, separators=(",", ":")),
    )
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(js, encoding="utf-8")
    print(f"Wrote {OUTPUT} with {len(parishes)} parishes and {len(CATHEDRALS)} cathedrals ({OUTPUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
