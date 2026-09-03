"""Build the V27.6 Brazil church snapshot from official Catholic directories."""

from __future__ import annotations

import html
import json
import re
from datetime import date
from pathlib import Path
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup

requests.packages.urllib3.disable_warnings()


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "JS file" / "countries" / "brazil" / "brazil_churches.js"
CNBB_URL = "https://www.cnbb.org.br/a-estrutura-administrativa-e-pastoral-da-cnbb-tem-uma-matriz-e-18-unidades-regionais/"
CNBB_CIRCUMSCRIPTIONS_URL = "https://www.cnbb.org.br/saiba-quantos-circunscricoes-religiosas-tem-no-brasil-e-quais-as-dioceses-no-pais-encontram-se-vacantes-a-espera-de-um-novo-pastor/"
CNBB_DATA_CENTER_URL = "https://www.cnbb.org.br/bispos-aprovam-projeto-para-criacao-de-centro-de-dados-da-igreja-catolica-no-brasil/"
BRASILIA_URL = "https://arqbrasilia.com.br/paroquias/"
BRASILIA_API = "https://arqbrasilia.com.br/wp-json/geodir/v2/todas_paroquias"
PORTO_ALEGRE_URL = "https://www.arquipoa.com/paroquias/"
CURITIBA_URL = "https://arquidiocesedecuritiba.org.br/paroquias/"
FORTALEZA_URL = "https://www.arquidiocesedefortaleza.org.br/arquidiocese/regioes/"

CATHEDRALS = [
    ["Catedral Nossa Senhora de Nazaré", "Diocese de Rio Branco", "Rio Branco, AC", -9.9748, -67.8076, "https://diocese-riobranco.org.br/"],
    ["Catedral Metropolitana Nossa Senhora dos Prazeres", "Arquidiocese de Maceió", "Maceió, AL", -9.6658, -35.7350, "https://arquidiocesedemaceio.org.br/"],
    ["Catedral São José", "Diocese de Macapá", "Macapá, AP", 0.0382, -51.0557, "https://diocesedemacapa.com.br/"],
    ["Catedral Metropolitana Nossa Senhora da Conceição", "Arquidiocese de Manaus", "Manaus, AM", -3.1346, -60.0254, "https://arquidiocesedemanaus.org.br/"],
    ["Catedral Basílica Primacial do Santíssimo Salvador", "Arquidiocese de São Salvador da Bahia", "Salvador, BA", -12.9730, -38.5105, "https://arquidiocesesalvador.org.br/"],
    ["Catedral Metropolitana de Fortaleza", "Arquidiocese de Fortaleza", "Fortaleza, CE", -3.7238, -38.5227, "https://www.arquidiocesedefortaleza.org.br/"],
    ["Catedral Metropolitana Nossa Senhora Aparecida", "Arquidiocese de Brasília", "Brasília, DF", -15.7983, -47.8755, "https://arqbrasilia.com.br/"],
    ["Catedral Metropolitana Nossa Senhora da Vitória", "Arquidiocese de Vitória", "Vitória, ES", -20.3200, -40.3373, "https://www.aves.org.br/"],
    ["Catedral Metropolitana Nossa Senhora Auxiliadora", "Arquidiocese de Goiânia", "Goiânia, GO", -16.6765, -49.2548, "https://arquidiocesedegoiania.org.br/"],
    ["Catedral Metropolitana Nossa Senhora da Vitória", "Arquidiocese de São Luís do Maranhão", "São Luís, MA", -2.5297, -44.3040, "https://arquidiocesedesaoluis.org/"],
    ["Catedral Basílica do Senhor Bom Jesus de Cuiabá", "Arquidiocese de Cuiabá", "Cuiabá, MT", -15.6010, -56.0967, "https://arquidiocesecuiaba.org.br/"],
    ["Catedral Nossa Senhora da Abadia e Santo Antônio", "Arquidiocese de Campo Grande", "Campo Grande, MS", -20.4669, -54.6207, "https://arquidiocesedecampogrande.org.br/"],
    ["Catedral Cristo Rei", "Arquidiocese de Belo Horizonte", "Belo Horizonte, MG", -19.9174, -43.9345, "https://arquidiocesebh.org.br/"],
    ["Catedral Metropolitana Nossa Senhora das Graças", "Arquidiocese de Belém do Pará", "Belém, PA", -1.4561, -48.5032, "https://arquidiocesedebelem.com.br/"],
    ["Catedral Basílica Nossa Senhora das Neves", "Arquidiocese da Paraíba", "João Pessoa, PB", -7.1152, -34.8829, "https://arquidiocesepb.org.br/"],
    ["Catedral Basílica Nossa Senhora da Luz dos Pinhais", "Arquidiocese de Curitiba", "Curitiba, PR", -25.4288, -49.2712, "https://arquidiocesedecuritiba.org.br/"],
    ["Catedral Metropolitana São Salvador do Mundo", "Arquidiocese de Olinda e Recife", "Olinda, PE", -8.0136, -34.8491, "https://www.arquidioceseolindarecife.org/"],
    ["Catedral Metropolitana Nossa Senhora das Dores", "Arquidiocese de Teresina", "Teresina, PI", -5.0917, -42.8116, "https://arquidiocesedeteresina.org.br/"],
    ["Catedral Metropolitana de São Sebastião", "Arquidiocese de São Sebastião do Rio de Janeiro", "Rio de Janeiro, RJ", -22.9104, -43.1807, "https://arqrio.org.br/"],
    ["Catedral Metropolitana Nossa Senhora da Apresentação", "Arquidiocese de Natal", "Natal, RN", -5.7845, -35.2010, "https://arquidiocesedenatal.org.br/"],
    ["Catedral Metropolitana Nossa Senhora Madre de Deus", "Arquidiocese de Porto Alegre", "Porto Alegre, RS", -30.0346, -51.2306, "https://www.arquipoa.com/"],
    ["Catedral Sagrado Coração de Jesus", "Arquidiocese de Porto Velho", "Porto Velho, RO", -8.7619, -63.9039, "https://arquidiocesedeportovelho.org.br/"],
    ["Catedral Cristo Redentor", "Diocese de Roraima", "Boa Vista, RR", 2.8237, -60.6758, "https://diocesederoraima.org.br/"],
    ["Catedral Metropolitana Nossa Senhora do Desterro", "Arquidiocese de Florianópolis", "Florianópolis, SC", -27.5977, -48.5482, "https://arquifln.org.br/"],
    ["Catedral Metropolitana Nossa Senhora da Assunção e São Paulo", "Arquidiocese de São Paulo", "São Paulo, SP", -23.5513, -46.6340, "https://arquisp.org.br/"],
    ["Catedral Metropolitana Nossa Senhora da Conceição", "Arquidiocese de Aracaju", "Aracaju, SE", -10.9108, -37.0495, "https://arquidiocesedearacaju.org/"],
    ["Catedral Metropolitana do Divino Espírito Santo", "Arquidiocese de Palmas", "Palmas, TO", -10.1840, -48.3336, "https://arquidiocesedepalmas.org.br/"],
]

FORTALEZA_REGIONS = {
    "Região Metropolitana São José": "regiao-metropolitana-sao-jose",
    "Região Metropolitana Nossa Senhora da Conceição": "regiao-metropolitana-nossa-senhora-da-conceicao",
    "Região Metropolitana Nossa Senhora da Assunção": "regiao-episcopal-metropolitana-nossa-senhora-da-assuncao",
    "Região Metropolitana Bom Jesus dos Aflitos": "regiao-episcopal-metropolitana-bom-jesus-dos-aflitos",
    "Região Metropolitana Sagrada Família": "regiao-episcopal-metropolitana-sagrada-familia",
    "Região Metropolitana Nossa Senhora dos Prazeres": "regiao-episcopal-metropolitana-nossa-senhora-dos-prazeres",
    "Região Praia São Pedro e São Paulo": "regiao-praia-sao-pedro-e-sao-paulo",
}


def clean(value: object) -> str:
    return " ".join(html.unescape(str(value or "")).replace("\xa0", " ").split())


def text_lines(value: object) -> list[str]:
    soup = BeautifulSoup(str(value or ""), "html.parser")
    return [clean(line) for line in soup.get_text("\n").splitlines() if clean(line)]


def valid_url(value: object) -> str:
    candidate = clean(value)
    return candidate if candidate.startswith(("https://", "http://")) else ""


def client() -> requests.Session:
    session = requests.Session()
    session.headers.update({"User-Agent": "Mozilla/5.0 Order-of-Mass-V27.6-data-builder"})
    return session


def fetch_brasilia(session: requests.Session) -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []
    page = 1
    expected = None
    while expected is None or len(rows) < expected:
        response = session.get(BRASILIA_API, params={"per_page": 100, "page": page}, timeout=90)
        response.raise_for_status()
        if expected is None:
            expected = int(response.headers.get("X-WP-Total") or 0)
        payload = response.json()
        if not payload:
            break
        for item in payload:
            title = item.get("title") or {}
            name = clean(title.get("rendered") if isinstance(title, dict) else title)
            if not name:
                continue
            address = ", ".join(dict.fromkeys(filter(None, [clean(item.get("street")), clean(item.get("city")), clean(item.get("region"))])))
            lat = float(item.get("latitude") or 0)
            lng = float(item.get("longitude") or 0)
            has_coordinates = -35 <= lat <= 6 and -75 <= lng <= -30
            mass_times = text_lines(item.get("horrios_de_missa"))
            website = valid_url(item.get("site")) or valid_url(item.get("site_e_redes_sociais"))
            rows.append(
                {
                    "id": int(item["id"]), "name": name, "address": address,
                    "lat": lat if has_coordinates else None, "lng": lng if has_coordinates else None,
                    "phone": clean(item.get("telefone") or item.get("whatsapp")),
                    "website": website, "massTimes": mass_times,
                    "sourceUrl": valid_url(item.get("link")) or BRASILIA_URL,
                    "recordType": "pastoral-area" if name.lower().startswith("área pastoral") else "parish",
                }
            )
        page += 1
    if expected is None or len(rows) != expected or len(rows) < 150:
        raise RuntimeError(f"Unexpected Brasília directory result: expected={expected}, received={len(rows)}")
    return rows


def fetch_porto_alegre(session: requests.Session) -> list[dict[str, object]]:
    response = session.get(PORTO_ALEGRE_URL, timeout=90)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    rows: list[dict[str, object]] = []
    for index, node in enumerate(soup.select(".paroquias .row"), start=1):
        title = node.select_one("h6")
        name = clean(title.get_text(" ") if title else "")
        if not name:
            continue
        detail = node.select_one(".col-12.col-sm-6.col-md-8") or node
        paragraphs = detail.find_all("p", recursive=False)
        address = clean(paragraphs[0].get_text(" ")) if paragraphs else ""
        phone_link = detail.select_one('a[href^="tel:"]')
        mass_times: list[str] = []
        schedule_label = detail.find(string=re.compile(r"Horário de Missa", re.I))
        if schedule_label:
            wrapper = schedule_label.find_parent("p")
            outer = wrapper.find_parent("p") if wrapper else None
            schedule_node = outer or wrapper
            if schedule_node:
                mass_times = [line for line in text_lines(schedule_node) if not re.match(r"^Horário de Missa$", line, re.I)]
        rows.append(
            {
                "id": index, "name": name, "address": address,
                "phone": clean(phone_link.get_text(" ") if phone_link else ""),
                "massTimes": mass_times, "sourceUrl": PORTO_ALEGRE_URL,
                "recordType": "parish",
            }
        )
    if len(rows) < 150:
        raise RuntimeError(f"Unexpected Porto Alegre directory count: {len(rows)}")
    return rows


def fetch_curitiba(session: requests.Session) -> list[dict[str, object]]:
    rows: list[dict[str, object]] = []
    seen: set[str] = set()
    for page in range(1, 20):
        url = CURITIBA_URL if page == 1 else f"{CURITIBA_URL}page/{page}/"
        response = session.get(url, timeout=90)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")
        page_count = 0
        for card in soup.select("#institutions > div"):
            detail = card.select_one(".p-4")
            if not detail:
                continue
            link = detail.select_one('a[href*="/paroquia/"]')
            name = clean(link.get_text(" ") if link else "")
            source_url = valid_url(link.get("href") if link else "")
            if not name or not source_url or source_url in seen:
                continue
            city = clean((detail.select_one("span") or {}).get_text(" ") if detail.select_one("span") else "")
            seen.add(source_url)
            rows.append({"id": len(rows) + 1, "name": name, "address": city, "sourceUrl": source_url, "recordType": "parish"})
            page_count += 1
        if page_count == 0:
            break
    if len(rows) < 130:
        raise RuntimeError(f"Unexpected Curitiba directory count: {len(rows)}")
    return rows


def fetch_fortaleza(session: requests.Session) -> tuple[list[dict[str, object]], list[str]]:
    base = FORTALEZA_URL
    rows: list[dict[str, object]] = []
    seen: set[str] = set()
    covered_regions: list[str] = []
    for region, slug in FORTALEZA_REGIONS.items():
        response = session.get(f"{base}{slug}/", timeout=90, verify=False)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")
        group_urls: list[str] = []
        for link in soup.select("a[href]"):
            href = valid_url(link.get("href"))
            last = urlparse(href).path.rstrip("/").split("/")[-1]
            if last in {"paroquias-da-regiao", "paroquias-da-regiao-sao-jose"} and href not in group_urls:
                group_urls.append(href)
        region_count = 0
        for group_url in group_urls:
            group_response = session.get(group_url, timeout=90, verify=False)
            group_response.raise_for_status()
            group_soup = BeautifulSoup(group_response.text, "html.parser")
            prefix = urlparse(group_url).path.rstrip("/") + "/"
            for link in group_soup.select("a[href]"):
                source_url = valid_url(link.get("href"))
                path = urlparse(source_url).path
                name = clean(link.get_text(" "))
                if not source_url or source_url in seen or not path.startswith(prefix) or path.rstrip("/") == prefix.rstrip("/") or not name:
                    continue
                seen.add(source_url)
                address = clean(name.split(",", 1)[1]) if "," in name else ""
                rows.append(
                    {
                        "id": len(rows) + 1, "name": name, "address": address,
                        "deanery": region, "sourceUrl": source_url,
                        "recordType": "pastoral-area" if name.lower().startswith("área pastoral") else "parish",
                    }
                )
                region_count += 1
        if region_count:
            covered_regions.append(region)
    if len(rows) < 100:
        raise RuntimeError(f"Unexpected Fortaleza directory count: {len(rows)}")
    return rows, covered_regions


def js(value: object, indent: int | None = None) -> str:
    return json.dumps(value, ensure_ascii=False, indent=indent, separators=(",", ":") if indent is None else None)


def js_rows(rows: list[object]) -> str:
    return "[\n" + ",\n".join(f"      {js(row)}" for row in rows) + "\n    ]"


def main() -> None:
    session = client()
    brasilia = fetch_brasilia(session)
    porto_alegre = fetch_porto_alegre(session)
    curitiba = fetch_curitiba(session)
    fortaleza, fortaleza_regions = fetch_fortaleza(session)
    snapshot_date = date.today().isoformat()
    coordinates = len(CATHEDRALS) + sum(row["lat"] is not None for row in brasilia)
    source_specs = [
        {"id": "cnbb-cathedral-seeds", "title": "CNBB regionais e Igrejas particulares", "authority": "Conferência Nacional dos Bispos do Brasil (CNBB)", "url": CNBB_URL, "snapshotDate": snapshot_date, "recordCount": len(CATHEDRALS), "coverage": "One curated cathedral coordinate seed for each of Brazil's 26 states and the Federal District; these are navigation anchors, not a national parish directory."},
        {"id": "brasilia", "title": "Paróquias da Arquidiocese de Brasília", "authority": "Arquidiocese de Brasília", "url": BRASILIA_URL, "apiUrl": BRASILIA_API, "snapshotDate": snapshot_date, "recordCount": len(brasilia), "coordinateCount": sum(row["lat"] is not None for row in brasilia), "coverage": "All records returned by the official GeoDirectory API at snapshot time, including parishes and pastoral areas."},
        {"id": "porto-alegre", "title": "Paróquias da Arquidiocese de Porto Alegre", "authority": "Arquidiocese de Porto Alegre", "url": PORTO_ALEGRE_URL, "snapshotDate": snapshot_date, "recordCount": len(porto_alegre), "coverage": "All non-empty rows exposed on the official parish directory page at snapshot time; the directory does not expose coordinates."},
        {"id": "curitiba", "title": "Paróquias da Arquidiocese de Curitiba", "authority": "Arquidiocese de Curitiba", "url": CURITIBA_URL, "snapshotDate": snapshot_date, "recordCount": len(curitiba), "coverage": "All entries across the official paginated parish directory at snapshot time; list-page city labels are retained when present."},
        {"id": "fortaleza", "title": "Regiões e Paróquias da Arquidiocese de Fortaleza", "authority": "Arquidiocese de Fortaleza", "url": FORTALEZA_URL, "snapshotDate": snapshot_date, "recordCount": len(fortaleza), "coveredRegions": fortaleza_regions, "coverage": "All entries linked from the official parish pages for the six episcopal regions whose list pages were publicly linked and populated at snapshot time."},
    ]
    limitations = [
        "Brazil has no public nationwide machine-readable CNBB parish directory yet; CNBB reported in 2026 that its national public data portal was approved after a 20-diocese pilot.",
        "Detailed directory coverage is limited to Brasília, Porto Alegre, Curitiba, and six publicly populated Fortaleza region lists; it must not be read as nationwide coverage.",
        "The 27 cathedral seeds cover states and the Federal District, not all 278 ecclesiastical circumscriptions reported by CNBB in 2021.",
        "Coordinates are included only when supplied by an official directory or curated for the cathedral seeds; missing coordinates are not geocoded or inferred.",
        "Addresses and Mass schedules are snapshots and may be incomplete or change; users should confirm them using each record's official source link.",
    ]
    meta = {
        "title": "CNBB jurisdiction anchors and official diocesan parish directories",
        "authority": "CNBB and the listed archdioceses",
        "url": CNBB_URL,
        "snapshotDate": snapshot_date,
        "recordCount": len(CATHEDRALS) + len(brasilia) + len(porto_alegre) + len(curitiba) + len(fortaleza),
        "coordinateCount": coordinates,
        "nationalCircumscriptionsReference": 278,
        "nationalCircumscriptionsReferenceDate": "2021-07-29",
        "nationalCircumscriptionsSourceUrl": CNBB_CIRCUMSCRIPTIONS_URL,
        "nationalDataPortalStatusUrl": CNBB_DATA_CENTER_URL,
        "coverage": "Partial, source-bounded official coverage; nationwide completeness is explicitly not claimed.",
        "coverageLimitations": limitations,
    }

    content = f"""// Generated by tools/build-brazil-churches.py from official CNBB and archdiocesan directories.
// Snapshot: {snapshot_date}. Do not hand-edit generated rows.
(function registerBrazilChurches(global) {{
  'use strict';
  global.countryChurchData = global.countryChurchData || {{}};
  const cnbbUrl = {js(CNBB_URL)};
  const source = Object.freeze({js(meta, 2)});
  const sources = Object.freeze({js(source_specs, 2)}.map(item => Object.freeze(item)));
  const cathedralRows = Object.freeze({js(CATHEDRALS, 2)});
  const directoryGroups = Object.freeze([
    Object.freeze({{ id: 'BRASILIA', diocese: 'Arquidiocese de Brasília', officialUrl: {js(BRASILIA_URL)}, rows: Object.freeze({js_rows(brasilia)}) }}),
    Object.freeze({{ id: 'PORTO-ALEGRE', diocese: 'Arquidiocese de Porto Alegre', officialUrl: {js(PORTO_ALEGRE_URL)}, rows: Object.freeze({js_rows(porto_alegre)}) }}),
    Object.freeze({{ id: 'CURITIBA', diocese: 'Arquidiocese de Curitiba', officialUrl: {js(CURITIBA_URL)}, rows: Object.freeze({js_rows(curitiba)}) }}),
    Object.freeze({{ id: 'FORTALEZA', diocese: 'Arquidiocese de Fortaleza', officialUrl: {js(FORTALEZA_URL)}, rows: Object.freeze({js_rows(fortaleza)}) }})
  ]);
  const cathedralEntries = cathedralRows.map((item, index) => Object.freeze({{
    name: item[0], diocese: item[1], address: item[2], lat: item[3], lng: item[4],
    country: 'BR', churchId: `BR-CNBB-CATHEDRAL-${{String(index + 1).padStart(2, '0')}}`,
    recordType: 'cathedral-coordinate-seed', showOnMap: true,
    sourceUrl: cnbbUrl, officialDioceseUrl: item[5],
    sourceName: sources[0].title, sourceAuthority: sources[0].authority
  }}));
  const directoryEntries = directoryGroups.flatMap(group => group.rows.map(item => Object.freeze({{
    name: item.name, directoryName: item.name, diocese: group.diocese,
    address: item.address || '', lat: item.lat, lng: item.lng,
    phone: item.phone || '', website: item.website || '', massTimes: Object.freeze(item.massTimes || []),
    deanery: item.deanery || '', country: 'BR',
    churchId: `BR-${{group.id}}-${{item.id}}`, recordType: item.recordType || 'parish',
    showOnMap: Number.isFinite(item.lat) && Number.isFinite(item.lng),
    sourceUrl: item.sourceUrl || group.officialUrl, officialDioceseUrl: group.officialUrl,
    sourceName: group.id, sourceAuthority: group.diocese
  }})));
  const entries = Object.freeze([...cathedralEntries, ...directoryEntries]);
  global.countryChurchData.BR = Object.freeze({{
    schemaVersion: 3, jurisdiction: 'BR', jurisdictions: Object.freeze(['BR']),
    conference: 'Conferência Nacional dos Bispos do Brasil (CNBB)',
    beta: true, exhaustive: false, source, sources,
    coverage: Object.freeze({{
      snapshotDate: {js(snapshot_date)}, cathedralSeedCount: cathedralEntries.length,
      parishDirectoryCount: directoryEntries.length, coordinateCount: {coordinates},
      coveredArchdioceses: Object.freeze(['Brasília', 'Porto Alegre', 'Curitiba', 'Fortaleza (6 populated region lists)']),
      nationalCircumscriptionsReference: 278,
      limitations: Object.freeze(source.coverageLimitations.slice())
    }}),
    entries
  }});
}})(globalThis);
"""
    OUTPUT.write_text(content, encoding="utf-8", newline="\n")
    print(
        f"Wrote {OUTPUT} with {len(CATHEDRALS)} cathedral seeds and "
        f"{len(brasilia) + len(porto_alegre) + len(curitiba) + len(fortaleza)} directory records "
        f"({coordinates} coordinate records total)"
    )


if __name__ == "__main__":
    main()
