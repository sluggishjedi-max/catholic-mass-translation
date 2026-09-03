"""Build the V27.6 Germany church snapshot from the official DBK Bistumsatlas.

The public Bistumsatlas parish layer contains parish territory names and dioceses,
but not church-building coordinates. Cathedral coordinates remain a small, clearly
labelled seed set and parish territory centroids are deliberately not invented.
"""

from __future__ import annotations

import json
from datetime import date
from pathlib import Path
from urllib.parse import urlencode

import requests


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "JS file" / "countries" / "germany" / "germany_churches.js"
LAYER_URL = (
    "https://karten-extern.bistumsatlas.de/arcgis/rest/services/"
    "bistumsgrenzen/bistumsgrenzen_deutschland/MapServer/10"
)
PROXY_URL = "https://www.arcgis.com/sharing/proxy?"
DBK_DIRECTORY_URL = "https://www.dbk.de/bistumskarte"
ATLAS_URL = "https://www.bistumsatlas.de/"
DBK_RELEASE_URL = (
    "https://www.dbk.de/presse/aktuelles/meldung/online-bistumsatlas-zeigt-orte-und-"
    "aktivitaeten-der-katholischen-kirche-in-deutschland"
)

CATHEDRALS = [
    ["Aachener Dom", "Bistum Aachen", "Domhof 1, Aachen", 50.7747, 6.0839],
    ["Hoher Dom zu Augsburg", "Bistum Augsburg", "Frauentorstraße 2, Augsburg", 48.3727, 10.8974],
    ["Bamberger Dom", "Erzbistum Bamberg", "Domplatz, Bamberg", 49.8906, 10.8824],
    ["St.-Hedwigs-Kathedrale", "Erzbistum Berlin", "Bebelplatz, Berlin", 52.5157, 13.3948],
    ["Kathedrale Ss. Trinitatis", "Bistum Dresden-Meißen", "Schloßstraße 24, Dresden", 51.0542, 13.7374],
    ["Dom zu Eichstätt", "Bistum Eichstätt", "Residenzplatz, Eichstätt", 48.8916, 11.1837],
    ["Erfurter Dom", "Bistum Erfurt", "Domstufen 1, Erfurt", 50.9769, 11.0237],
    ["Essener Münster", "Bistum Essen", "Kettwiger Straße 42, Essen", 51.4558, 7.0131],
    ["Freiburger Münster", "Erzbistum Freiburg", "Münsterplatz, Freiburg im Breisgau", 47.9955, 7.8522],
    ["Fuldaer Dom", "Bistum Fulda", "Domplatz, Fulda", 50.5549, 9.6725],
    ["St. Jakobus Kathedrale", "Bistum Görlitz", "An der Jakobuskirche 4, Görlitz", 51.1467, 14.9682],
    ["St. Marien-Dom Hamburg", "Erzbistum Hamburg", "Am Mariendom 1, Hamburg", 53.5572, 10.0146],
    ["Hildesheimer Dom", "Bistum Hildesheim", "Domhof, Hildesheim", 52.1485, 9.9469],
    ["Kölner Dom", "Erzbistum Köln", "Domkloster 4, Köln", 50.9413, 6.9583],
    ["Limburger Dom", "Bistum Limburg", "Domplatz, Limburg an der Lahn", 50.3880, 8.0662],
    ["Kathedrale St. Sebastian", "Bistum Magdeburg", "Max-Josef-Metzger-Straße 1, Magdeburg", 52.1277, 11.6323],
    ["Mainzer Dom", "Bistum Mainz", "Markt 10, Mainz", 49.9989, 8.2742],
    ["Frauenkirche München", "Erzbistum München und Freising", "Frauenplatz 12, München", 48.1386, 11.5735],
    ["St.-Paulus-Dom Münster", "Bistum Münster", "Domplatz 28, Münster", 51.9630, 7.6256],
    ["Dom St. Petrus Osnabrück", "Bistum Osnabrück", "Domhof 12, Osnabrück", 52.2789, 8.0431],
    ["Hoher Dom zu Paderborn", "Erzbistum Paderborn", "Domplatz 3, Paderborn", 51.7188, 8.7559],
    ["Dom St. Stephan Passau", "Bistum Passau", "Domplatz, Passau", 48.5744, 13.4657],
    ["Regensburger Dom", "Bistum Regensburg", "Domplatz 1, Regensburg", 49.0197, 12.0981],
    ["Dom St. Martin Rottenburg", "Bistum Rottenburg-Stuttgart", "Marktplatz, Rottenburg am Neckar", 48.4760, 8.9340],
    ["Speyerer Dom", "Bistum Speyer", "Domplatz, Speyer", 49.3172, 8.4420],
    ["Trierer Dom", "Bistum Trier", "Liebfrauenstraße 12, Trier", 49.7560, 6.6430],
    ["Würzburger Dom", "Bistum Würzburg", "Domstraße 40, Würzburg", 49.7932, 9.9325],
]


def arcgis_get(params: dict[str, object]) -> dict:
    target = f"{LAYER_URL}/query?{urlencode(params)}"
    response = requests.get(
        PROXY_URL + target,
        timeout=90,
        headers={
            "User-Agent": "Mozilla/5.0 Order-of-Mass-V27.6-data-builder",
            "Origin": "https://www.arcgis.com",
            "Referer": "https://www.arcgis.com/home/webmap/viewer.html",
        },
    )
    response.raise_for_status()
    payload = response.json()
    if payload.get("error"):
        raise RuntimeError(f"Bistumsatlas ArcGIS error: {payload['error']}")
    return payload


def fetch_parishes() -> tuple[list[list[object]], int]:
    count_payload = arcgis_get({"where": "1=1", "returnCountOnly": "true", "f": "json"})
    expected = int(count_payload.get("count") or 0)
    if expected < 5000:
        raise RuntimeError(f"Unexpected Bistumsatlas parish count: {expected}")

    rows: list[list[object]] = []
    offset = 0
    while offset < expected:
        payload = arcgis_get(
            {
                "where": "1=1",
                "outFields": "OBJECTID,name,bistum_name",
                "returnGeometry": "false",
                "orderByFields": "OBJECTID",
                "resultOffset": offset,
                "resultRecordCount": 2000,
                "f": "json",
            }
        )
        features = payload.get("features") or []
        if not features:
            break
        for feature in features:
            attrs = feature.get("attributes") or {}
            object_id = int(attrs.get("OBJECTID"))
            name = str(attrs.get("name") or "").strip()
            diocese = str(attrs.get("bistum_name") or "").strip()
            if name and diocese:
                rows.append([object_id, name, diocese])
        offset += len(features)

    deduplicated = {int(row[0]): row for row in rows}
    rows = [deduplicated[key] for key in sorted(deduplicated)]
    if expected - len(rows) > 20:
        raise RuntimeError(f"Expected {expected} Bistumsatlas records, received {len(rows)} usable named records")
    return rows, expected


def js(value: object, indent: int | None = None) -> str:
    return json.dumps(value, ensure_ascii=False, indent=indent, separators=(",", ":") if indent is None else None)


def js_rows(rows: list[object]) -> str:
    return "[\n" + ",\n".join(f"    {js(row)}" for row in rows) + "\n  ]"


def main() -> None:
    parishes, official_layer_count = fetch_parishes()
    snapshot_date = date.today().isoformat()
    source = {
        "title": "DBK Bistumsatlas – öffentliche Pfarreienebene",
        "authority": "Deutsche Bischofskonferenz / deutsche (Erz-)Bistümer",
        "url": DBK_DIRECTORY_URL,
        "atlasUrl": ATLAS_URL,
        "layerUrl": LAYER_URL,
        "releaseUrl": DBK_RELEASE_URL,
        "snapshotDate": snapshot_date,
        "recordCount": official_layer_count,
        "usableNamedRecordCount": len(parishes),
        "excludedIncompleteRecordCount": official_layer_count - len(parishes),
        "coverage": (
            f"Snapshot of {len(parishes):,} usable named records from {official_layer_count:,} records returned by the official "
            "nationwide Bistumsatlas public Pfarreien layer, plus 27 diocesan cathedral coordinate seeds."
        ),
        "coverageLimitations": [
            "The public layer describes parish territories (name and diocese), not every church building or worship site.",
            "The public parish layer does not expose street addresses or church coordinates; polygon centroids are not treated as churches.",
            f"{official_layer_count - len(parishes)} layer records missing a usable name or diocese were excluded from searchable entries.",
            "DBK states that facility completeness varies by diocese, and dioceses maintain their own source data.",
            "Only the 27 cathedral seeds have curated coordinates; other records are resolved through Places search when selected.",
        ],
    }
    content = f"""// Generated by tools/build-germany-churches.py from the official DBK Bistumsatlas public parish layer.
// Snapshot: {snapshot_date}. Do not hand-edit generated rows.
(function registerGermanyChurches(global) {{
  'use strict';
  global.countryChurchData = global.countryChurchData || {{}};
  const directoryUrl = {js(DBK_DIRECTORY_URL)};
  const atlasUrl = {js(ATLAS_URL)};
  const layerUrl = {js(LAYER_URL)};
  const source = Object.freeze({js(source, 2)});
  const cathedralRows = Object.freeze({js(CATHEDRALS, 2)});
  const parishRows = Object.freeze({js_rows(parishes)});
  const cathedralEntries = cathedralRows.map((item, index) => Object.freeze({{
    name: item[0], diocese: item[1], address: item[2], lat: item[3], lng: item[4],
    country: 'DE', churchId: `DE-DBK-CATHEDRAL-${{String(index + 1).padStart(2, '0')}}`,
    recordType: 'cathedral-coordinate-seed', showOnMap: true,
    sourceUrl: directoryUrl, officialDioceseUrl: atlasUrl,
    sourceName: 'DBK cathedral jurisdiction seed', sourceAuthority: source.authority
  }}));
  const parishEntries = parishRows.map(item => Object.freeze({{
    name: item[1], directoryName: item[1], diocese: item[2], country: 'DE',
    churchId: `DE-DBK-PARISH-${{item[0]}}`, recordType: 'parish-territory', showOnMap: false,
    sourceUrl: layerUrl, officialDioceseUrl: atlasUrl,
    sourceName: source.title, sourceAuthority: source.authority
  }}));
  const entries = Object.freeze([...cathedralEntries, ...parishEntries]);
  global.countryChurchData.DE = Object.freeze({{
    schemaVersion: 3, jurisdiction: 'DE', jurisdictions: Object.freeze(['DE']),
    conference: 'Deutsche Bischofskonferenz (DBK)', beta: true, exhaustive: false,
    source, sources: Object.freeze([source]),
    coverage: Object.freeze({{
      snapshotDate: {js(snapshot_date)}, cathedralSeedCount: cathedralEntries.length,
      parishDirectoryCount: parishEntries.length, coordinateCount: cathedralEntries.length,
      officialLayerRecordCount: source.recordCount,
      excludedIncompleteRecordCount: source.excludedIncompleteRecordCount,
      limitations: Object.freeze(source.coverageLimitations.slice())
    }}),
    entries
  }});
}})(globalThis);
"""
    OUTPUT.write_text(content, encoding="utf-8", newline="\n")
    print(f"Wrote {OUTPUT} with {len(CATHEDRALS)} cathedral seeds and {len(parishes)} parish records")


if __name__ == "__main__":
    main()
