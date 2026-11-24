from __future__ import annotations

import argparse
import json
import re
import subprocess
from pathlib import Path

import pdfplumber

from mass_ordinary_structure import pretty_js, standardize_choices

ROOT = Path(__file__).resolve().parents[1]
SOURCE = "https://liturgiapapal.org/attachments/article/1029/Ordinario%20de%20la%20Misa%20Espan%CC%83a.pdf"
OUTPUT = ROOT / "JS file" / "countries" / "spain" / "spain_mass.js"


def value(row: dict) -> str:
    return row.get("text_es") or row.get("rubric_es") or ""


def rubric_color(char: dict) -> bool:
    color = char.get("non_stroking_color")
    return isinstance(color, (list, tuple)) and len(color) == 3 and color[0] - color[1] > 0.2


def source_rows(page) -> list[dict]:
    result = []
    pending = ""
    for line in page.crop((0, 63, page.width, page.height)).extract_text_lines(y_tolerance=3):
        text = re.sub(r"\s+", " ", line["text"]).strip()
        if not text or re.fullmatch(r"[_\s\d]+", text):
            continue
        if re.fullmatch(r"(?:ORDINARIO DE LA MISA|RITOS INICIALES|LITURGIA DE LA PALABRA|LITURGIA EUCARÍSTICA|PLEGARIA EUCARÍSTICA(?: [IV]+)?|RITO DE (?:COMUNIÓN|CONCLUSIÓN))\s*\d*", text, re.I) and line["top"] < 70:
            continue
        text = re.sub(r"(?<=\d)\.(?=[A-ZÁÉÍÓÚ])", ". ", text)
        text = re.sub(r"(?<=\s)[+†](?=\s)", "✠", text)
        marker = re.match(r"^(?:(\d+)\.\s*)?(CP|CC|C[1234]|℣|℟)[. ]*(?=\s|$)", text)
        if marker:
            pending = {"℣": "V/.", "℟": "R/."}.get(marker[2], marker[2])
            text = text[marker.end():].strip()
            if not text:
                continue
        red = sum(map(rubric_color, line["chars"]))
        if red > len(line["chars"]) * 0.65 and not marker:
            result.append({"rubric_es": text})
        else:
            row = {"text_es": text}
            if pending:
                row["sp_es"] = pending
                pending = ""
            result.append(row)
    return result


def find(rows: list[dict], pattern: str, start: int = 0) -> int:
    return next(
        index for index in range(start, len(rows)) if re.search(pattern, value(rows[index]), re.I)
    )


def between(rows: list[dict], first: str, next_boundary: str) -> list[dict]:
    start = find(rows, first)
    return rows[start:find(rows, next_boundary, start + 1)]


def text_row(text: str, speaker: str = "") -> dict:
    return {"text_es": text, **({"sp_es": speaker} if speaker else {})}


def part(identifier: str, title: str, lines: list[dict], **fields) -> dict:
    return {"id": identifier, "type": "part", "header": {"es": title}, "lines": lines, **fields}


def section(identifier: str, title: str) -> dict:
    return {"id": identifier, "type": "section", "es": title}


def split_prefaces(pages: list[list[dict]]) -> dict:
    source = [row for page in pages for row in page]
    starts = [index for index, row in enumerate(source) if value(row).startswith("PREFACIO ")]
    rows = []
    for index, start in enumerate(starts):
        block = source[start:starts[index + 1] if index + 1 < len(starts) else len(source)]
        header = [value(block[0])]
        next_row = 1
        while re.match(r"^(DEL TIEMPO ORDINARIO|[(]Prefacio II del Espíritu Santo)", value(block[next_row]), re.I):
            header.append(value(block[next_row]))
            next_row += 1
        subtitle = value(block[next_row])
        if subtitle.startswith(("Este prefacio", "En verdad")):
            raise ValueError("Missing subtitle for " + " ".join(header))
        next_row += 1
        while block[next_row].get("rubric_es") and value(block[next_row]).isupper():
            subtitle += " " + value(block[next_row])
            next_row += 1
        rows.extend([text_row(" ".join(header) + " " + subtitle), *block[next_row:]])
    command = ["node", str(ROOT / "tools" / "national-prefaces.js"), "es", "ES"]
    result = subprocess.run(command, input=json.dumps(rows, ensure_ascii=False),
                            encoding="utf-8", capture_output=True)
    if result.returncode:
        raise ValueError(result.stderr)
    return json.loads(result.stdout)


def build_ordinary(pages: list[list[dict]]) -> list[dict]:
    content = lambda a, b: [row for page in pages[a-1:b] for row in page]
    intro = content(2, 7)
    word = content(8, 12)
    gifts = content(13, 16)
    communion = content(119, 124)
    end = content(125, 126)
    dialogs = between(gifts, r"^31\.", r"^Santo,\s*Santo,\s*Santo")
    sanctus = between(gifts, r"^Santo,\s*Santo,\s*Santo", r"^32\.")
    forms = {
        "1": content(84, 94)[find(content(84, 94), r"^84\.") :],
        "2": content(96, 102)[find(content(96, 102), r"^100\.") :],
        "3": content(103, 110)[find(content(103, 110), r"^122\.\s*El sacerdote, con las manos extendidas, dice") :],
        "4": content(111, 118)
    }
    # Prayer IV keeps its own preface and Sanctus, after the common dialogue.
    fourth = forms["4"]
    fixed_preface = find(fourth, r"^En verdad es justo")
    fourth_rubric = find(fourth, r"^116\.")
    forms["4"] = fourth[fourth_rubric:find(fourth, r"^El Señor esté con vosotros")] + fourth[fixed_preface:]
    endings = {}
    for key, body in forms.items():
        end_at = find(body, r"^\d+\.\s*(?:El sacerdote,\s*)?[Tt]oma la patena")
        endings[key] = body[end_at:]
        forms[key] = body[:end_at]
    placeholder = lambda title: [text_row("(" + title + " del día)")]
    collect = between(intro, r"^9\.", r"^Y todos,") + placeholder("Oración colecta") + [text_row("Amén.", "R/.")]
    output = [
        section("1. THE INTRODUCTORY RITES", "Ritos iniciales"),
        part("1.1 entrance", "Antífona de entrada", placeholder("Antífona de entrada")),
        part("1.2 greeting", "Saludo", between(intro, r"^1\.", r"^Acto Penitencial")),
        part("1.3 penitential", "Acto penitencial", between(intro, r"^4\.", r"^7\.\s*Siguen")),
        part("1.4 kyrie", "Señor, ten piedad", between(intro, r"^7\.\s*Siguen", r"^7\.\s*A continuación")),
        part("1.5 gloria", "Gloria", between(intro, r"^7\.\s*A continuación", r"^9\."), **{"if": "sunday"}),
        part("1.6 collect", "Oración colecta", collect),
        section("2. THE LITURGY OF THE WORD", "Liturgia de la Palabra"),
        part("2.1 reading1", "Primera lectura", placeholder("Primera lectura")),
        part("2.2 psalm", "Salmo responsorial", placeholder("Salmo responsorial")),
        part("2.3 reading2", "Segunda lectura", placeholder("Segunda lectura"), **{"if": "sunday"}),
        part("2.4 Sequence", "Secuencia", placeholder("Secuencia"), **{"if": "easter_or_pentecost"}),
        part("2.5 gospel_accl", "Aclamación antes del Evangelio", placeholder("Aclamación antes del Evangelio")),
        part("2.6 gospel", "Evangelio", placeholder("Evangelio")),
        part("2.7 homily", "Homilía", between(word, r"^17\.", r"^18\.")),
        part("2.8 creed", "Profesión de fe", between(word, r"^18\.", r"^20\."), **{"if": "sunday"}),
        part("2.9 universal", "Oración universal", word[find(word, r"^20\."):], **{"if": "sunday"}),
        section("3. THE LITURGY OF THE EUCHARIST", "Liturgia eucarística"),
        part("3.1 offertory", "Preparación de los dones", between(gifts, r"^21\.", r"^30\.")),
        part("3.2 prayer_offerings", "Oración sobre las ofrendas", placeholder("Oración sobre las ofrendas") + [text_row("Amén.", "R/.")]),
        {
            "id": "3.3 eucharist", "type": "selectable", "isEucharist": True, "ordinarySourceLayoutVersion": 1,
            "header": {"es": "Plegaria eucarística"},
            "variants": {str(i): {"label": {"es": "Plegaria eucarística " + numeral}} for i, numeral in enumerate(["I (Canon romano)", "II", "III", "IV"], 1)},
            "songs": split_prefaces(pages[16:83]),
            "forms": forms, "common_dialogue": dialogs, "sanctus": sanctus,
            "formEndings": endings, "amen": [],
            "formFrames": {key: {"sections": ["dialogue", *([] if key == "4" else ["preface", "sanctus"]), "form", "ending"]} for key in forms}
        },
        part("3.4 lords_prayer", "Rito de la comunión — Padrenuestro", between(communion, r"^124\.", r"^126\.")),
        part("3.5 peace", "Rito de la paz", between(communion, r"^126\.", r"^129\.")),
        part("3.6 lamb", "Fracción del pan — Cordero de Dios", between(communion, r"^129\.", r"^131\.")),
        part("3.7 communion_rite", "Comunión", between(communion, r"^131\.", r"^139\.")),
        part("3.8 communion", "Antífona de la comunión", placeholder("Antífona de la comunión")),
        part("3.9 prayer_after", "Oración después de la comunión", [text_row("Oremos.", "C.")] + placeholder("Oración después de la comunión") + [text_row("Amén.", "R/.")]),
        section("4. THE CONCLUDING RITES", "Rito de conclusión"),
        part("4.1 announcement", "Avisos", between(end, r"^140\.", r"^141\.")),
        part("4.2 blessing", "Bendición", between(end, r"^141\.", r"^144\.")),
        part("4.3 dismissal", "Despedida", between(end, r"^144\.", r"^145\.")),
        part("4.4 final_song", "Conclusión", end[find(end, r"^145\."):])
    ]
    return standardize_choices(output, "es")


def main() -> None:
    cli = argparse.ArgumentParser()
    cli.add_argument("ordinary_pdf", type=Path)
    cli.add_argument("--propers", type=Path)
    args = cli.parse_args()
    with pdfplumber.open(args.ordinary_pdf) as pdf:
        if len(pdf.pages) != 126:
            raise ValueError("Unexpected Spain Ordinary page count")
        pages = [source_rows(page) for page in pdf.pages]
    ordinary = build_ordinary(pages)
    supplemental = json.loads((ROOT / "tools" / "spain-missal-supplements.json").read_text(encoding="utf-8"))
    eucharist = next(item for item in ordinary if item["id"] == "3.3 eucharist")
    eucharist["songs"].update(supplemental["prefaces"])
    module = {
        "schemaVersion": 2, "jurisdiction": "ES", "jurisdictions": ["ES"], "jurisdictionName": "España",
        "ordinaryLanguage": "ES", "ordinaryEdition": "Misal Romano, tercera edición típica para España",
        "ordinarySource": {"authority": "Conferencia Episcopal Española", "title": "Ordinario de la Misa — España", "url": SOURCE},
        "ordinaryStructure": "paragraph-rubric-choices-v1", "beta": True,
        "dailyReadings": {"provider": "Lecturas del Día · Leccionario CEE", "translation": "Leccionario de la Conferencia Episcopal Española",
                          "calendar": "España", "parser": "cee-spain", "urlStrategy": "cee-spain"}
    }
    if args.propers:
        propers = json.loads(args.propers.read_text(encoding="utf-8"))
        propers["calendar"].update(supplemental["calendar"])
        module["missalPrayerData"] = propers
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    source = pretty_js(module).replace('  "jurisdiction": "ES",', "  jurisdiction: 'ES',", 1)
    OUTPUT.write_text(
        "// Spain · Conferencia Episcopal Española. Ordinary and temporal Mass formularies.\n"
        "(function registerSpainMass(global) {\n  'use strict';\n"
        "  global.countryMassData = global.countryMassData || {};\n"
        "  const ordinary = Object.freeze(" + pretty_js(ordinary) + ");\n"
        "  global.countryMassData.ES = Object.freeze({ordinary,\n" + source[2:] + ");\n"
        "})(globalThis);\n", encoding="utf-8"
    )
    prefaces = sum(len(item.get('songs', {})) for item in ordinary)
    print(f"{len(ordinary)} Ordinary entries; {prefaces} prefaces")


if __name__ == "__main__":
    main()
