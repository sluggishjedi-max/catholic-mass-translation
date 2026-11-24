from __future__ import annotations

import argparse
import json
import re
import unicodedata
from pathlib import Path

from pypdf import PdfReader

FOLDER = "https://liturgiapapal.org/attachments/article/1029/"
FILES = ("Ordinario", "Adviento", "Navidad", "Cuaresma", "Triduo", "Pascua")
SECTIONS = {
    "antifona de entrada": "entrance",
    "oracion colecta": "collect",
    "oracion sobre las ofrendas": "prayer_offerings",
    "antifona de comunion": "communion",
    "oracion despues de la comunion": "prayer_after"
}
WEEKDAYS = ("domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado")
SEASONS = {"Ordinario": "ordinary", "Adviento": "advent", "Cuaresma": "lent", "Pascua": "easter"}


def fold(text):
    return "".join(char for char in unicodedata.normalize("NFD", text.lower()) if not unicodedata.combining(char))


def number(text):
    values = {"I": 1, "V": 5, "X": 10, "L": 50}
    digits = [values[char] for char in text.upper()]
    return sum(-value if index + 1 < len(digits) and value < digits[index + 1] else value for index, value in enumerate(digits))


def liturgy_key(text, filename, page):
    line = fold(text)
    if filename in SEASONS:
        sunday = re.fullmatch(r"([ivxl]+) (?:domingo|semana) (?:del tiempo |de )(?:ordinario|adviento|cuaresma|pascua)", line)
        if sunday:
            return f"{SEASONS[filename]}-{number(sunday[1])}-0"
        weekday = re.fullmatch(r"(lunes|martes|miercoles|jueves|viernes|sabado) de la ([ivxl]+) semana de (?:adviento|cuaresma|pascua)", line)
        if weekday:
            return f"{SEASONS[filename]}-{number(weekday[2])}-{WEEKDAYS.index(weekday[1])}"
    if filename == "Adviento":
        dated = re.fullmatch(r"(1[7-9]|2[0-4]) de diciembre", line)
        if dated:
            return "date-12-" + dated[1]
    if filename == "Cuaresma":
        if line == "miercoles de ceniza":
            return "lent-0-3"
        ash_week = re.fullmatch(r"(jueves|viernes|sabado) despues de ceniza", line)
        if ash_week:
            return "lent-0-" + str(WEEKDAYS.index(ash_week[1]))
        if line == "domingo de ramos":
            return "lent-6-0"
        holy_week = re.fullmatch(r"(lunes|martes|miercoles) santo", line)
        if holy_week:
            return "lent-6-" + str(WEEKDAYS.index(holy_week[1]))
    if filename == "Navidad":
        if line == "misa del dia":
            return "epiphany" if page > 10 else "date-12-25"
        if "domingo segundo despues de navidad" == line:
            return "christmas-2-0"
        if line in {"lunes", "martes", "miercoles", "jueves", "viernes", "sabado"}:
            return "after-epiphany-" + str(WEEKDAYS.index(line))
        fixed = re.match(r"^(\d{1,2}) de (diciembre|enero)$", line)
        if fixed:
            return ("date-12-" if fixed[2] == "diciembre" else "date-01-") + fixed[1].zfill(2)
    if filename == "Pascua" and line == "misa del dia":
        return "easter-1-0"
    if filename == "Pascua":
        octave = re.fullmatch(r"(lunes|martes|miercoles|jueves|viernes|sabado) de la octava de pascua", line)
        if octave:
            return "easter-1-" + str(WEEKDAYS.index(octave[1]))
    titles = {
        "nuestro senor jesucristo, rey del universo": "christ_king",
        "santisimo cuerpo y sangre de cristo": "corpus_christi",
        "la ascension del senor": "ascension",
        "domingo de pentecostes": "pentecost"
    }
    return titles.get(line)


def read_formularies(path, stem):
    output = {}
    current = None
    field = None
    section_lines = []
    section_page = 0
    section_citation = ''

    def finish_section():
        nonlocal section_lines
        if current and field and section_lines:
            body = re.sub(r"\s+", " ", " ".join(section_lines)).strip()
            body = re.sub(r"(?<=\w)- (?=\w)", "-", body)
            if body:
                current["data"][field] = body
                current["sectionSources"][field] = {"title": current["title"], "page": section_page}
                if section_citation:
                    current["sectionSources"][field]["citation"] = section_citation
        section_lines = []

    for page_no, page in enumerate(PdfReader(path).pages, 1):
        for raw in page.extract_text().splitlines():
            text = re.sub(r"\s+", " ", raw).strip()
            if not text or re.fullmatch(r"[\d_ ]+|(?:Misal Romano|Propio del tiempo|Tiempo ordinario|Adviento|Cuaresma|Pascua|Navidad)\s*\d*", text, re.I):
                continue
            key = liturgy_key(text, stem, page_no)
            if key and (not current or current["key"] != key):
                finish_section()
                if current and current["data"]:
                    output.setdefault(current["key"], current)
                current = {"key": key, "kind": "temporal", "title": text, "page": page_no,
                           "source": {"authority": "Conferencia Episcopal Española", "url": FOLDER + stem + ".pdf"},
                           "data": {}, "sectionSources": {}}
                field = None
                continue
            if not current:
                continue
            label = next((label for label in SECTIONS if fold(text).startswith(label)), None)
            if label:
                finish_section()
                field = SECTIONS[label]
                section_page = page_no
                section_citation = text[len(label):].strip()
                continue
            if not field:
                continue
            if re.match(r"^(?:No se dice|Se dice|Prefacio|Puede utilizarse|Bendicion solemne|Plegaria eucaristica|Para la despedida|Oracion sobre el pueblo)\b", fold(text), re.I):
                finish_section()
                field = None
                continue
            section_lines.append(text)
            if field in {"collect", "prayer_offerings", "prayer_after"} and re.search(
                r"\b(?:Por (?:nuestro Senor Jesucristo|Jesucristo, nuestro Senor|Cristo, nuestro Senor)|Tu,? que vives y reinas(?: con el Padre)?|El,? que vive y reina(?: contigo| por los siglos de los siglos)?)\s*\.\s*$",
                fold(" ".join(section_lines)), re.I
            ):
                finish_section()
                field = None
    finish_section()
    if current and current["data"]:
        output.setdefault(current["key"], current)
    return output


def main():
    cli = argparse.ArgumentParser()
    cli.add_argument("source_directory", type=Path)
    cli.add_argument("output", type=Path)
    args = cli.parse_args()
    temporal = {}
    for stem in FILES:
        parsed = read_formularies(args.source_directory / ("ordo-spain-" + stem + ".pdf"), stem)
        temporal.update({key: item for key, item in parsed.items()
                         if all(section in item["data"] for section in SECTIONS.values())})
        print(stem, len(parsed), sum(all(field in item["data"] for field in SECTIONS.values()) for item in parsed.values()))
    if not all(f"ordinary-{week}-0" in temporal for week in range(1, 34)):
        raise ValueError("Ordinary Time formularies are incomplete")
    args.output.write_text(json.dumps({"temporal": temporal, "calendar": {}, "catalog": []}, ensure_ascii=False), encoding="utf-8")


if __name__ == "__main__":
    main()
