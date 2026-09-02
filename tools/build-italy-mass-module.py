from __future__ import annotations

import json
import re
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "tmp" / "pdfs" / "CEI-Messale-Romano-III.pdf"
OUTPUT = ROOT / "JS file" / "countries" / "italy" / "italy_mass.js"


def clean_page(text: str) -> str:
    replacements = {
        "π": "t",
        "∏": "T",
        "Ω": "ff",
        "≈": "ff",
        "√": "ff",
        "±": "N",
        "ı": "1",
    }
    for source, target in replacements.items():
        text = text.replace(source, target)
    # The CEI PDF uses small caps and discretionary line-end hyphens.  Its text
    # layer exposes those as separated initial letters and literal hyphens.
    text = re.sub(r"(?<=\w)-\s*\n(?=\w)", "", text)
    for separated, joined in {
        "P adre": "Padre",
        "T ermin": "Termin",
        "T empo": "Tempo",
        "T u ": "Tu ",
        "O ppure": "Oppure",
        "Q ui ": "Qui ",
        "p er ": "per ",
        "s e ": "se ",
    }.items():
        text = text.replace(separated, joined)
    repeated_headers = (
        r"Rito della Messa con il popolo|Riti di Introduzione|Liturgia della Parola|"
        r"Liturgia Eucaristica|Preghiera Eucaristica(?:\s+[IV]+)?|Riti di Comunione|"
        r"Riti di Conclusione"
    )
    text = re.sub(rf"(?m)^\s*(?:{repeated_headers})\s*$", "", text)
    text = re.sub(r"(?m)^\s*\d{3}\s*$", "", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def html_corpus(reader: PdfReader, first_page: int, last_page: int) -> str:
    pages = [clean_page(reader.pages[index - 1].extract_text() or "") for index in range(first_page, last_page + 1)]
    text = "\n\n".join(page for page in pages if page)
    return text.replace("\n", "<br>")


def line(text: str, speaker: str = "", rubric: str = "") -> dict[str, str]:
    result: dict[str, str] = {"sp_it": speaker, "text_it": text}
    if rubric:
        result["rubric_it"] = rubric
    return result


def part(identifier: str, title: str, lines: list[dict[str, str]], **extra: object) -> dict[str, object]:
    return {"id": identifier, "type": "part", "header": {"it": title}, "lines": lines, **extra}


def build_ordinary(reader: PdfReader) -> list[dict[str, object]]:
    dynamic = {
        "entrance": "(Antifona d'ingresso del giorno)",
        "collect": "(Colletta del giorno)",
        "reading1": "(Prima lettura del giorno)",
        "psalm": "(Salmo responsoriale del giorno)",
        "reading2": "(Seconda lettura del giorno)",
        "sequence": "(Sequenza del giorno)",
        "gospel_accl": "(Acclamazione al Vangelo del giorno)",
        "gospel": "(Vangelo del giorno)",
        "prayer_offerings": "(Orazione sulle offerte del giorno)",
        "communion": "(Antifona alla comunione del giorno)",
        "prayer_after": "(Orazione dopo la comunione del giorno)",
    }
    corpus = lambda first, last: line(html_corpus(reader, first, last))
    eucharist = {
        "id": "3.3 eucharist",
        "type": "selectable",
        "isEucharist": True,
        "header": {"it": "Preghiera Eucaristica"},
        "variants": {
            "1": {"label": {"it": "Preghiera Eucaristica I (Canone Romano)"}},
            "2": {"label": {"it": "Preghiera Eucaristica II"}},
            "3": {"label": {"it": "Preghiera Eucaristica III"}},
            "4": {"label": {"it": "Preghiera Eucaristica IV"}},
        },
        "common_dialogue": [
            line("Il Signore sia con voi.", "V/"),
            line("E con il tuo spirito.", "R/"),
            line("In alto i nostri cuori.", "V/"),
            line("Sono rivolti al Signore.", "R/"),
            line("Rendiamo grazie al Signore nostro Dio.", "V/"),
            line("È cosa buona e giusta.", "R/"),
        ],
        "songs": {
            "cei_complete_prefaces": {
                "title": {"it": "Prefazi completi del Messale Romano CEI"},
                "content": [corpus(410, 493)],
            }
        },
        "sanctus": [
            line("Santo, Santo, Santo il Signore Dio dell'universo.<br>I cieli e la terra sono pieni della tua gloria.<br>Osanna nell'alto dei cieli.<br>Benedetto colui che viene nel nome del Signore.<br>Osanna nell'alto dei cieli.", "Tutti")
        ],
        "forms": {
            "1": [corpus(495, 505)],
            "2": [corpus(506, 513)],
            "3": [corpus(514, 520)],
            "4": [corpus(521, 526)],
        },
        "amen": [
            line("Per Cristo, con Cristo e in Cristo, a te, Dio Padre onnipotente, nell'unità dello Spirito Santo, ogni onore e gloria per tutti i secoli dei secoli.", "C"),
            line("Amen.", "Tutti"),
        ],
    }
    return [
        {"id": "1. THE INTRODUCTORY RITES", "type": "section", "it": "Riti di Introduzione"},
        part("1.1 entrance", "Antifona d'ingresso", [line(dynamic["entrance"])]),
        part("1.2 greeting", "Saluto", [corpus(392, 393)]),
        part("1.3 penitential", "Atto penitenziale", [corpus(394, 400)]),
        part("1.4 kyrie", "Kýrie, eléison", [corpus(401, 401)]),
        part("1.5 gloria", "Gloria", [corpus(402, 402)], **{"if": "sunday"}),
        part("1.6 collect", "Colletta", [line("Preghiamo.", "C"), line(dynamic["collect"]), line("Amen.", "Tutti")]),
        {"id": "2. THE LITURGY OF THE WORD", "type": "section", "it": "Liturgia della Parola"},
        part("2.1 reading1", "Prima Lettura", [line("(Sommario)"), line(dynamic["reading1"])]),
        part("2.2 psalm", "Salmo Responsoriale", [line(dynamic["psalm"])]),
        part("2.3 reading2", "Seconda Lettura", [line("(Sommario)"), line(dynamic["reading2"])], **{"if": "sunday"}),
        part("2.4 Sequence", "Sequenza", [line(dynamic["sequence"])], **{"if": "easter_or_pentecost"}),
        part("2.5 gospel_accl", "Acclamazione al Vangelo", [line(dynamic["gospel_accl"])]),
        part("2.6 gospel", "Vangelo", [line(dynamic["gospel"])]),
        part("2.7 homily", "Omelia", [line("Segue l'omelia.", rubric="Dopo il Vangelo il sacerdote o il diacono pronuncia l'omelia.")]),
        part("2.8 creed", "Professione di fede", [corpus(405, 407)], **{"if": "sunday"}),
        part("2.9 universal", "Preghiera universale", [line("Segue la preghiera universale o dei fedeli.", rubric="Le intenzioni sono preparate per la celebrazione.")], **{"if": "sunday"}),
        {"id": "3. THE LITURGY OF THE EUCHARIST", "type": "section", "it": "Liturgia Eucaristica"},
        part("3.1 offertory", "Preparazione dei doni", [corpus(408, 409)]),
        part("3.2 prayer_offerings", "Orazione sulle offerte", [line(dynamic["prayer_offerings"]), line("Amen.", "Tutti")]),
        eucharist,
        part("3.4 lords_prayer", "Riti di Comunione — Padre nostro", [corpus(527, 529)]),
        part("3.5 peace", "Rito della pace", [corpus(530, 530)]),
        part("3.6 lamb", "Frazione del pane — Agnello di Dio", [corpus(531, 531)]),
        part("3.7 communion_rite", "Comunione", [corpus(532, 532)]),
        part("3.8 communion", "Antifona alla comunione", [line(dynamic["communion"])]),
        part("3.9 prayer_after", "Dopo la comunione", [line("Preghiamo.", "C"), line(dynamic["prayer_after"]), line("Amen.", "Tutti")]),
        {"id": "4. THE CONCLUDING RITES", "type": "section", "it": "Riti di Conclusione"},
        part("4.1 announcement", "Avvisi", [line("Si possono dare brevi comunicazioni al popolo.", rubric="Dopo l'orazione e prima della benedizione.")]),
        part("4.2 blessing", "Benedizione", [corpus(534, 535)]),
        part("4.3 dismissal", "Congedo", [corpus(536, 536)]),
        part("4.4 final_song", "Canto finale", [line("Il sacerdote venera l'altare e si ritira con i ministri.", rubric="Segue il canto finale, secondo l'opportunità.")]),
    ]


def main() -> None:
    if not PDF.exists():
        raise SystemExit(f"Missing official CEI reference PDF: {PDF}")
    reader = PdfReader(str(PDF))
    ordinary = build_ordinary(reader)
    source = {
        "authority": "Conferenza Episcopale Italiana — Ufficio Liturgico Nazionale",
        "title": "Messale Romano, terza edizione italiana",
        "url": "https://liturgico.chiesacattolica.it/wp-content/uploads/sites/8/2020/12/07/Messale-Romano-COMPLETO-senza-musica.pdf",
        "pages": "PDF 392–536 (printed pages 309–453)",
    }
    full_corpus = html_corpus(reader, 392, 536)
    js = """// Italy Mass module (CEI, Beta): official Italian Roman Missal ordinary and CEI daily Mass source.\n(function registerItalyMass(global) {\n  'use strict';\n  global.countryMassData = global.countryMassData || {};\n\n  const ordinary = Object.freeze(%s);\n  const ordinarySource = Object.freeze(%s);\n  const officialOrderCorpus = Object.freeze({\n    source: ordinarySource,\n    pageRange: 'PDF 392–536',\n    text_it: %s\n  });\n  const dailyUrl = dateKey => `https://www.chiesacattolica.it/liturgia-del-giorno/?data-liturgia=${dateKey}`;\n\n  global.countryMassData.IT = Object.freeze({\n    schemaVersion: 2,\n    jurisdiction: 'IT',\n    jurisdictions: Object.freeze(['IT']),\n    jurisdictionName: 'Italia',\n    conferenceCalendar: 'Conferenza Episcopale Italiana',\n    ordinaryLanguage: 'IT',\n    ordinary,\n    officialOrderCorpus,\n    ordinaryEdition: 'Messale Romano, terza edizione italiana (CEI, 2020)',\n    ordinarySource,\n    beta: true,\n    dailyReadings: Object.freeze({\n      provider: 'Conferenza Episcopale Italiana',\n      calendar: 'Italia',\n      translation: 'Lezionario CEI 2008 / Messale Romano CEI III',\n      parser: 'strict-italian-daily-mass',\n      url: dailyUrl\n    }),\n    dailyPropers: Object.freeze({\n      provider: 'Conferenza Episcopale Italiana',\n      parser: 'strict-italian-daily-mass',\n      url: dailyUrl\n    }),\n    properSources: Object.freeze({\n      nationalMissal: ordinarySource,\n      dailyMass: 'https://www.chiesacattolica.it/liturgia-del-giorno/'\n    }),\n    calendar: Object.freeze({})\n  });\n})(globalThis);\n""" % (
        json.dumps(ordinary, ensure_ascii=False, separators=(",", ":")),
        json.dumps(source, ensure_ascii=False, separators=(",", ":")),
        json.dumps(full_corpus, ensure_ascii=False),
    )
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(js, encoding="utf-8")
    print(f"Wrote {OUTPUT} ({OUTPUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
