from __future__ import annotations

import json
import re
from pathlib import Path

import requests
from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "tmp" / "pdfs" / "Ordinario-Misa-Mexico.pdf"
OUTPUT = ROOT / "JS file" / "countries" / "mexico" / "mexico_mass.js"
ORDINARY_URL = (
    "https://liturgiapapal.org/attachments/article/1030/"
    "Ordinario%20de%20la%20Misa%20Me%CC%81xico.pdf"
)


def ensure_pdf() -> None:
    if PDF.exists() and PDF.stat().st_size > 100_000:
        return
    PDF.parent.mkdir(parents=True, exist_ok=True)
    response = requests.get(ORDINARY_URL, timeout=120)
    response.raise_for_status()
    PDF.write_bytes(response.content)


def clean_page(text: str) -> str:
    text = re.sub(r"(?<=\w)-\s*\n(?=\w)", "", text)
    text = re.sub(
        r"(?m)^\s*(?:ORDINARIO DE LA MISA|RITOS INICIALES|LITURGIA DE LA PALABRA|"
        r"LITURGIA EUCARÍSTICA|PLEGARIA EUCARÍSTICA(?:\s+[IV]+)?|"
        r"RITO DE LA COMUNIÓN|RITO DE CONCLUSIÓN)\s+\d*\s*$",
        "",
        text,
    )
    text = re.sub(r"(?m)^\s*\d{1,3}\s*$", "", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def html_corpus(reader: PdfReader, first_page: int, last_page: int) -> str:
    pages = [clean_page(reader.pages[index - 1].extract_text() or "") for index in range(first_page, last_page + 1)]
    return "\n\n".join(page for page in pages if page).replace("\n", "<br>")


def line(text: str, speaker: str = "", rubric: str = "") -> dict[str, str]:
    result: dict[str, str] = {"sp_es": speaker, "text_es": text}
    if rubric:
        result["rubric_es"] = rubric
    return result


def part(identifier: str, title: str, lines: list[dict[str, str]], **extra: object) -> dict[str, object]:
    return {"id": identifier, "type": "part", "header": {"es": title}, "lines": lines, **extra}


def build_ordinary(reader: PdfReader) -> list[dict[str, object]]:
    dynamic = {
        "entrance": "(Antífona de entrada del día)",
        "collect": "(Oración colecta del día)",
        "reading1": "(Primera lectura del día)",
        "psalm": "(Salmo responsorial del día)",
        "reading2": "(Segunda lectura del día)",
        "sequence": "(Secuencia del día)",
        "gospel_accl": "(Aclamación antes del Evangelio del día)",
        "gospel": "(Evangelio del día)",
        "prayer_offerings": "(Oración sobre las ofrendas del día)",
        "communion": "(Antífona de la comunión del día)",
        "prayer_after": "(Oración después de la comunión del día)",
    }
    corpus = lambda first, last: line(html_corpus(reader, first, last))
    eucharist = {
        "id": "3.3 eucharist",
        "type": "selectable",
        "isEucharist": True,
        "header": {"es": "Plegaria eucarística"},
        "variants": {
            "1": {"label": {"es": "Plegaria eucarística I (Canon romano)"}},
            "2": {"label": {"es": "Plegaria eucarística II"}},
            "3": {"label": {"es": "Plegaria eucarística III"}},
            "4": {"label": {"es": "Plegaria eucarística IV"}},
        },
        "common_dialogue": [
            line("El Señor esté con ustedes.", "V/."),
            line("Y con tu espíritu.", "R/."),
            line("Levantemos el corazón.", "V/."),
            line("Lo tenemos levantado hacia el Señor.", "R/."),
            line("Demos gracias al Señor, nuestro Dios.", "V/."),
            line("Es justo y necesario.", "R/."),
        ],
        "songs": {
            "cem_complete_prefaces": {
                "title": {"es": "Prefacios completos del Misal Romano para México"},
                "content": [corpus(17, 84)],
            }
        },
        "sanctus": [
            line(
                "Santo, Santo, Santo es el Señor, Dios del universo.<br>"
                "Llenos están el cielo y la tierra de tu gloria.<br>Hosanna en el cielo.<br>"
                "Bendito el que viene en nombre del Señor.<br>Hosanna en el cielo.",
                "Todos",
            )
        ],
        "forms": {
            "1": [corpus(85, 96)],
            "2": [corpus(97, 103)],
            "3": [corpus(104, 111)],
            "4": [corpus(112, 120)],
        },
        "amen": [
            line(
                "Por Cristo, con él y en él, a ti, Dios Padre omnipotente, en la unidad del Espíritu Santo, "
                "todo honor y toda gloria por los siglos de los siglos.",
                "C.",
            ),
            line("Amén.", "Todos"),
        ],
    }
    return [
        {"id": "1. THE INTRODUCTORY RITES", "type": "section", "es": "Ritos iniciales"},
        part("1.1 entrance", "Antífona de entrada", [line(dynamic["entrance"])]),
        part("1.2 greeting", "Saludo", [corpus(3, 3)]),
        part("1.3 penitential", "Acto penitencial", [corpus(4, 6)]),
        part("1.4 kyrie", "Señor, ten piedad", [corpus(6, 6)]),
        part("1.5 gloria", "Gloria", [corpus(7, 7)], **{"if": "sunday"}),
        part("1.6 collect", "Oración colecta", [line("Oremos.", "C."), line(dynamic["collect"]), line("Amén.", "Todos")]),
        {"id": "2. THE LITURGY OF THE WORD", "type": "section", "es": "Liturgia de la Palabra"},
        part("2.1 reading1", "Primera lectura", [line("(Resumen)"), line(dynamic["reading1"])]),
        part("2.2 psalm", "Salmo responsorial", [line(dynamic["psalm"])]),
        part("2.3 reading2", "Segunda lectura", [line("(Resumen)"), line(dynamic["reading2"])], **{"if": "sunday"}),
        part("2.4 Sequence", "Secuencia", [line(dynamic["sequence"])], **{"if": "easter_or_pentecost"}),
        part("2.5 gospel_accl", "Aclamación antes del Evangelio", [line(dynamic["gospel_accl"])]),
        part("2.6 gospel", "Evangelio", [line(dynamic["gospel"])]),
        part("2.7 homily", "Homilía", [line("Sigue la homilía.", rubric="Después del Evangelio se pronuncia la homilía.")]),
        part("2.8 creed", "Profesión de fe", [corpus(10, 13)], **{"if": "sunday"}),
        part("2.9 universal", "Oración universal", [line("Sigue la oración universal u oración de los fieles.")], **{"if": "sunday"}),
        {"id": "3. THE LITURGY OF THE EUCHARIST", "type": "section", "es": "Liturgia eucarística"},
        part("3.1 offertory", "Preparación de los dones", [corpus(14, 16)]),
        part("3.2 prayer_offerings", "Oración sobre las ofrendas", [line(dynamic["prayer_offerings"]), line("Amén.", "Todos")]),
        eucharist,
        part("3.4 lords_prayer", "Rito de la Comunión — Padrenuestro", [corpus(121, 122)]),
        part("3.5 peace", "Rito de la paz", [corpus(122, 123)]),
        part("3.6 lamb", "Fracción del pan — Cordero de Dios", [corpus(123, 123)]),
        part("3.7 communion_rite", "Comunión", [corpus(123, 125)]),
        part("3.8 communion", "Antífona de la comunión", [line(dynamic["communion"])]),
        part("3.9 prayer_after", "Oración después de la comunión", [line("Oremos.", "C."), line(dynamic["prayer_after"]), line("Amén.", "Todos")]),
        {"id": "4. THE CONCLUDING RITES", "type": "section", "es": "Rito de conclusión"},
        part("4.1 announcement", "Avisos", [line("Se hacen, si es necesario, breves avisos al pueblo.")]),
        part("4.2 blessing", "Bendición", [corpus(126, 127)]),
        part("4.3 dismissal", "Despedida", [corpus(127, 127)]),
        part("4.4 final_song", "Canto final", [line("El sacerdote besa el altar y se retira con los ministros.")]),
    ]


def main() -> None:
    ensure_pdf()
    reader = PdfReader(str(PDF))
    if len(reader.pages) != 127:
        raise SystemExit(f"Unexpected Mexican Ordinary page count: {len(reader.pages)}")
    ordinary = build_ordinary(reader)
    source = {
        "authority": "Conferencia del Episcopado Mexicano (texto aprobado; copia de consulta)",
        "title": "Ordinario de la Misa — versión de México",
        "url": ORDINARY_URL,
        "pages": "PDF 1–127",
    }
    full_corpus = html_corpus(reader, 1, 127)
    js = """// Mexico Mass module (CEM, Beta): complete Mexican Ordinary and official CEM daily Mass source.
(function registerMexicoMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};

  const ordinary = Object.freeze(%s);
  const ordinarySource = Object.freeze(%s);
  const officialOrderCorpus = Object.freeze({ source: ordinarySource, pageRange: 'PDF 1–127', text_es: %s });
  const dailyUrl = () => 'https://sistemas.cem.org.mx/Controller/Misal/get_misal.php';

  global.countryMassData.MX = Object.freeze({
    schemaVersion: 2,
    jurisdiction: 'MX',
    jurisdictions: Object.freeze(['MX']),
    jurisdictionName: 'México',
    conferenceCalendar: 'Conferencia del Episcopado Mexicano',
    ordinaryLanguage: 'ES',
    ordinary,
    officialOrderCorpus,
    ordinaryEdition: 'Misal Romano, edición típica para México según la Editio Typica Tertia',
    ordinarySource,
    beta: true,
    dailyReadings: Object.freeze({
      provider: 'Conferencia del Episcopado Mexicano (CEM)',
      calendar: 'México',
      translation: 'Leccionario y Misal Romano para México',
      parser: 'strict-mexican-cem-daily-mass',
      url: dailyUrl
    }),
    dailyPropers: Object.freeze({
      provider: 'Conferencia del Episcopado Mexicano (CEM)',
      parser: 'strict-mexican-cem-daily-mass',
      url: dailyUrl
    }),
    properSources: Object.freeze({
      nationalMissal: ordinarySource,
      dailyMass: 'https://sistemas.cem.org.mx/misal/'
    }),
    calendar: Object.freeze({})
  });
})(globalThis);
""" % (
        json.dumps(ordinary, ensure_ascii=False, separators=(",", ":")),
        json.dumps(source, ensure_ascii=False, separators=(",", ":")),
        json.dumps(full_corpus, ensure_ascii=False),
    )
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(js, encoding="utf-8")
    print(f"Wrote {OUTPUT} ({OUTPUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
