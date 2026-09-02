from __future__ import annotations

import json
import re
from pathlib import Path

import requests
from pypdf import PdfReader

from mass_ordinary_structure import pretty_js, standardize_choices


ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "tmp" / "pdfs" / "Eigenfeiern_Allgemeine_Messtexte.pdf"
OUTPUT = ROOT / "JS file" / "countries" / "germany" / "germany_mass.js"
ORDINARY_URL = "https://www.redemptoristen.com/fileadmin/_migrated/content_uploads/Eigenfeiern_Allgemeine_Messtexte.pdf"
DAILY_URL = "https://schott.erzabtei-beuron.de/"


def ensure_pdf() -> None:
    if PDF.exists() and PDF.stat().st_size > 300_000:
        return
    PDF.parent.mkdir(parents=True, exist_ok=True)
    response = requests.get(ORDINARY_URL, timeout=120)
    response.raise_for_status()
    PDF.write_bytes(response.content)


def clean_page(text: str) -> str:
    text = re.sub(r"(?<=\w)-\s*\n(?=\w)", "", text)
    text = re.sub(r"(?m)^\s*Allgemeine Texte\s*[–-].*?\s+\d{3}\s*$", "", text)
    text = re.sub(r"(?m)^\s*\d{3}\s+Allgemeine Texte.*$", "", text)
    text = re.sub(r"(?m)^\s*\d{3}\s*$", "", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def html_corpus(reader: PdfReader, first_page: int, last_page: int) -> str:
    pages = [clean_page(reader.pages[index - 1].extract_text() or "") for index in range(first_page, last_page + 1)]
    return "\n\n".join(page for page in pages if page).replace("\n", "<br>")


def line(text: str, speaker: str = "", rubric: str = "") -> dict[str, str]:
    result = {"sp_de": speaker, "text_de": text}
    if rubric:
        result["rubric_de"] = rubric
    return result


def part(identifier: str, title: str, lines: list[dict[str, str]], **extra: object) -> dict[str, object]:
    return {"id": identifier, "type": "part", "header": {"de": title}, "lines": lines, **extra}


def build_ordinary(reader: PdfReader) -> list[dict[str, object]]:
    dynamic = {
        "entrance": "(Eröffnungsvers des Tages)", "collect": "(Tagesgebet)",
        "reading1": "(Erste Lesung des Tages)", "psalm": "(Antwortpsalm des Tages)",
        "reading2": "(Zweite Lesung des Tages)", "sequence": "(Sequenz des Tages)",
        "gospel_accl": "(Ruf vor dem Evangelium)", "gospel": "(Evangelium des Tages)",
        "prayer_offerings": "(Gabengebet)", "communion": "(Kommunionvers)",
        "prayer_after": "(Schlussgebet)",
    }
    corpus = lambda first, last: line(html_corpus(reader, first, last))
    eucharist = {
        "id": "3.3 eucharist", "type": "selectable", "isEucharist": True,
        "header": {"de": "Eucharistisches Hochgebet"},
        "variants": {
            "1": {"label": {"de": "Erstes Hochgebet (Römischer Messkanon)"}},
            "2": {"label": {"de": "Zweites Hochgebet"}},
            "3": {"label": {"de": "Drittes Hochgebet"}},
            "4": {"label": {"de": "Viertes Hochgebet"}},
        },
        "common_dialogue": [
            line("Der Herr sei mit euch.", "P."), line("Und mit deinem Geiste.", "A."),
            line("Erhebet die Herzen.", "P."), line("Wir haben sie beim Herrn.", "A."),
            line("Lasset uns danken dem Herrn, unserm Gott.", "P."), line("Das ist würdig und recht.", "A."),
        ],
        "songs": {"de_preface_dialogue": {
            "title": {"de": "Einladung zum Hochgebet und Präfation"},
            "content": [corpus(13, 13)],
        }},
        "sanctus": [line("Heilig, heilig, heilig, Gott, Herr aller Mächte und Gewalten.<br>Erfüllt sind Himmel und Erde von deiner Herrlichkeit.<br>Hosanna in der Höhe.<br>Hochgelobt sei, der da kommt im Namen des Herrn.<br>Hosanna in der Höhe.", "A.")],
        "forms": {"1": [corpus(14, 19)], "2": [corpus(20, 24)], "3": [corpus(25, 28)], "4": [corpus(29, 35)]},
        "amen": [line("Durch ihn und mit ihm und in ihm ist dir, Gott, allmächtiger Vater, in der Einheit des Heiligen Geistes alle Herrlichkeit und Ehre jetzt und in Ewigkeit.", "P."), line("Amen.", "A.")],
    }
    return [
        {"id": "1. THE INTRODUCTORY RITES", "type": "section", "de": "Eröffnung"},
        part("1.1 entrance", "Eröffnungsvers", [line(dynamic["entrance"])]),
        part("1.2 greeting", "Begrüßung", [corpus(2, 2)]),
        part("1.3 penitential", "Allgemeines Schuldbekenntnis", [corpus(3, 5)]),
        part("1.4 kyrie", "Kyrie", [corpus(5, 6)]),
        part("1.5 gloria", "Gloria", [corpus(6, 6)], **{"if": "sunday"}),
        part("1.6 collect", "Tagesgebet", [line("Lasset uns beten.", "P."), line(dynamic["collect"]), line("Amen.", "A.")]),
        {"id": "2. THE LITURGY OF THE WORD", "type": "section", "de": "Wortgottesdienst"},
        part("2.1 reading1", "Erste Lesung", [line("(Kurzinhalt)"), line(dynamic["reading1"])]),
        part("2.2 psalm", "Antwortpsalm", [line(dynamic["psalm"])]),
        part("2.3 reading2", "Zweite Lesung", [line("(Kurzinhalt)"), line(dynamic["reading2"])], **{"if": "sunday"}),
        part("2.4 Sequence", "Sequenz", [line(dynamic["sequence"])], **{"if": "easter_or_pentecost"}),
        part("2.5 gospel_accl", "Ruf vor dem Evangelium", [line(dynamic["gospel_accl"])]),
        part("2.6 gospel", "Evangelium", [line(dynamic["gospel"])]),
        part("2.7 homily", "Homilie", [line("Es folgt die Homilie.")]),
        part("2.8 creed", "Glaubensbekenntnis", [corpus(8, 10)], **{"if": "sunday"}),
        part("2.9 universal", "Fürbitten", [line("Es folgen die Fürbitten.")], **{"if": "sunday"}),
        {"id": "3. THE LITURGY OF THE EUCHARIST", "type": "section", "de": "Eucharistiefeier"},
        part("3.1 offertory", "Gabenbereitung", [corpus(11, 12)]),
        part("3.2 prayer_offerings", "Gabengebet", [line(dynamic["prayer_offerings"]), line("Amen.", "A.")]),
        eucharist,
        part("3.4 lords_prayer", "Gebet des Herrn", [corpus(36, 37)]),
        part("3.5 peace", "Friedensgebet und Friedensgruß", [corpus(37, 38)]),
        part("3.6 lamb", "Brotbrechung und Agnus Dei", [corpus(38, 39)]),
        part("3.7 communion_rite", "Kommunion", [corpus(39, 40)]),
        part("3.8 communion", "Kommunionvers", [line(dynamic["communion"])]),
        part("3.9 prayer_after", "Schlussgebet", [line("Lasset uns beten.", "P."), line(dynamic["prayer_after"]), line("Amen.", "A.")]),
        {"id": "4. THE CONCLUDING RITES", "type": "section", "de": "Entlassung"},
        part("4.1 announcement", "Vermeldungen", [line("Es können kurze Vermeldungen folgen.")]),
        part("4.2 blessing", "Segen", [corpus(41, 41)]),
        part("4.3 dismissal", "Entlassung", [corpus(41, 41)]),
        part("4.4 final_song", "Schlussgesang", [line("Der Priester verehrt den Altar und zieht mit den liturgischen Diensten aus.")]),
    ]


def main() -> None:
    ensure_pdf()
    reader = PdfReader(str(PDF))
    if len(reader.pages) != 47:
        raise SystemExit(f"Unexpected German Ordinary page count: {len(reader.pages)}")
    ordinary = standardize_choices(build_ordinary(reader), "de")
    source = {
        "authority": "Redemptoristen / Ständige Kommission für die Herausgabe der gemeinsamen liturgischen Bücher im deutschen Sprachgebiet",
        "title": "Allgemeine Texte für die Feier der Heiligen Messe",
        "url": ORDINARY_URL,
        "pages": "PDF 2–41",
        "verificationUrl": "https://staeko.net/liturgische-buecher/",
    }
    full_corpus = html_corpus(reader, 2, 41)
    js = """// Germany Mass module (DBK, Beta): verified German Ordinary and SCHOTT daily Mass source.
(function registerGermanyMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  const ordinary = Object.freeze(%s);
  const ordinarySource = Object.freeze(%s);
  const officialOrderCorpus = Object.freeze({ source: ordinarySource, pageRange: 'PDF 2–41', text_de: %s });
  const dailyUrl = iso => `https://schott.erzabtei-beuron.de/?datum=${iso}`;
  global.countryMassData.DE = Object.freeze({
    schemaVersion: 2, jurisdiction: 'DE', jurisdictions: Object.freeze(['DE']),
    jurisdictionName: 'Deutschland', conferenceCalendar: 'Deutsche Bischofskonferenz',
    ordinaryLanguage: 'DE', ordinary, ordinaryStructure: 'paragraph-rubric-choices-v1', officialOrderCorpus,
    ordinaryEdition: 'Messbuch für die Bistümer des deutschen Sprachgebietes', ordinarySource, beta: true,
    dailyReadings: Object.freeze({ provider: 'SCHOTT / Erzabtei Beuron', calendar: 'Deutschland', translation: 'Revidierte Einheitsübersetzung', parser: 'strict-german-schott-daily-mass', url: dailyUrl }),
    dailyPropers: Object.freeze({ provider: 'SCHOTT / Erzabtei Beuron', parser: 'strict-german-schott-daily-mass', url: dailyUrl, weekdayFallback: 'previous-sunday-formulary' }),
    properSources: Object.freeze({ germanMissal: ordinarySource, dailyMass: 'https://schott.erzabtei-beuron.de/' }),
    calendar: Object.freeze({})
  });
})(globalThis);
""" % (
        pretty_js(ordinary),
        json.dumps(source, ensure_ascii=False, separators=(",", ":")),
        json.dumps(full_corpus, ensure_ascii=False),
    )
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(js, encoding="utf-8")
    print(f"Wrote {OUTPUT} ({OUTPUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
