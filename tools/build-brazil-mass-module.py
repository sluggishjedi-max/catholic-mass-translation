#!/usr/bin/env python3
"""Build the CNBB/Brazil module in the app's standard 32-item Mass schema."""

from __future__ import annotations

import json
import re
from pathlib import Path

import requests
from bs4 import BeautifulSoup

from mass_ordinary_structure import compact_js, pretty_js, structure_lines


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "JS file" / "countries" / "brazil" / "brazil_mass.js"
ORDINARY_PAGES = (
    ("initial", "Ordinário (1) Ritos Iniciais", "https://pocketterco.com.br/oracao/ordinario-1-ritos-iniciais"),
    ("word", "Ordinário (2) Liturgia da Palavra", "https://pocketterco.com.br/oracao/ordinario-2-liturgia-da-palavra"),
    ("eucharist", "Ordinário (4) Liturgia Eucarística", "https://pocketterco.com.br/oracao/ordinario-4-liturgia-eucaristica"),
    ("communion", "Ordinário (5) Rito da Comunhão", "https://pocketterco.com.br/oracao/ordinario-5-rito-da-comunhao"),
    ("final", "Ordinário (6) Ritos Finais", "https://pocketterco.com.br/oracao/ordinario-6-ritos-finais"),
    ("prayers", "Orações Eucarísticas", "https://pocketterco.com.br/terco/oracoes-eucaristicas-conforme-3a-edicao-do-missal"),
)


def clean_lines(main) -> list[str]:
    lines = []
    for raw in main.get_text("\n", strip=True).splitlines():
        line = re.sub(r"\s+", " ", raw).strip()
        if not line or line in {"Menu", "Compartilhar:", "Todas as orações", "Todos os terços e novenas"}:
            continue
        if lines and lines[-1] == line:
            continue
        lines.append(line)
    return lines


def fetch_lines(session: requests.Session, title: str, url: str) -> list[str]:
    response = session.get(url, timeout=60)
    response.raise_for_status()
    main = BeautifulSoup(response.text, "html.parser").find("main")
    if main is None:
        raise RuntimeError(f"Pocket Terço main content missing: {url}")
    lines = clean_lines(main)
    if title not in " ".join(lines[:20]):
        raise RuntimeError(f"Expected title not found for {url}: {title}")
    return lines


def line(text: str, speaker: str = "", rubric: str = "") -> dict[str, str]:
    value = {"sp_pt": speaker, "text_pt": text}
    if rubric:
        value["rubric_pt"] = rubric
    return value


def rows(source: list[str], start: int = 0, end: int | None = None) -> list[dict]:
    return structure_lines([line(value) for value in source[start:end]], "pt")


def part(identifier: str, title: str, content: list[dict], **extra) -> dict:
    return {"id": identifier, "type": "part", "header": {"pt": title}, "lines": content, **extra}


def selectable(identifier: str, title: str, choices: list[tuple[str, list[dict]]], **extra) -> dict:
    variants = {
        chr(ord("A") + index): {"label": {"pt": label}, "lines": content}
        for index, (label, content) in enumerate(choices)
    }
    return {"id": identifier, "type": "selectable", "header": {"pt": title}, "variants": variants, **extra}


def greeting(initial: list[str]) -> dict:
    prefix = rows(initial, 3, 10)
    response = rows(initial, 55, 57)
    ranges = ((10, 16), (17, 22), (22, 29), (29, 36), (36, 42), (42, 50), (50, 55))
    choices = [(f"Fórmula {letter}", prefix + rows(initial, start, end) + response)
               for letter, (start, end) in zip("abcdefg", ranges)]
    choices.append(("Fórmula h", prefix + rows(initial, 57, 62)))
    return selectable("1.2 greeting", "Saudação", choices)


def penitential(initial: list[str]) -> dict:
    common = rows(initial, 72, 80)
    return selectable("1.3 penitential", "Ato penitencial", [
        ("Primeira fórmula", common + rows(initial, 81, 128)),
        ("Segunda fórmula", common + rows(initial, 129, 161)),
        ("Terceira fórmula", common + rows(initial, 162, 454)),
    ])


def creed(word: list[str]) -> dict:
    common = rows(word, 53, 54)
    return selectable("2.8 creed", "Profissão de fé", [
        ("Símbolo niceno-constantinopolitano", common + rows(word, 54, 97)),
        ("Símbolo dos Apóstolos", common + rows(word, 97, 120)),
    ], **{"if": "sunday"})


def blessing(final: list[str]) -> dict:
    return selectable("4.2 blessing", "Bênção", [
        ("Bênção simples", rows(final, 6, 17)),
        ("Bênção pontifical", rows(final, 23, 47)),
        ("Bênçãos solenes", rows(final, 67, len(final))),
    ])


def dismissal(final: list[str]) -> dict:
    response = rows(final, 60, 62)
    choices = [
        ("Fórmula 1", rows(final, 48, 51) + response),
        ("Fórmula 2", rows(final, 51, 53) + response),
        ("Fórmula 3", rows(final, 53, 55) + response),
        ("Fórmula 4", rows(final, 55, 57) + response),
        ("Fórmula 5", rows(final, 57, 60) + response),
    ]
    return selectable("4.3 dismissal", "Despedida", choices)


def eucharistic_prayers(prayers: list[str]) -> dict:
    headings = [
        ("1", "Oração Eucarística I", "Oração Eucarística I ou Cânon Romano"),
        ("2", "Oração Eucarística II", "Oração Eucarística II"),
        ("3", "Oração Eucarística III", "Oração Eucarística III"),
        ("4", "Oração Eucarística IV", "Oração Eucarística IV"),
        ("5", "Oração Eucarística V", "Oração Eucarística V Ⓑ"),
        ("D1", "Para diversas circunstâncias I", "Oração Eucarística (D1) para diversas circunstâncias 1"),
        ("D2", "Para diversas circunstâncias II", "Oração Eucarística (D2) para diversas circunstâncias 2"),
        ("D3", "Para diversas circunstâncias III", "Oração Eucarística (D3) para diversas circunstâncias 3"),
        ("D4", "Para diversas circunstâncias IV", "Oração Eucarística (D4) para diversas circunstâncias 4"),
        ("R1", "Sobre a reconciliação I", "Oração Eucarística (R1) sobre a reconciliação 1"),
        ("R2", "Sobre a reconciliação II", "Oração Eucarística (R2) sobre a reconciliação 2"),
        ("C1", "Para Missas com crianças I", "Oração Eucarística (C1) para Missas com crianças I"),
        ("C2", "Para Missas com crianças II", "Oração Eucarística (C2) para Missas com crianças II"),
        ("C3", "Para Missas com crianças III", "Oração Eucarística (C3) para Missas com crianças III"),
    ]
    located = []
    for key, label, heading in headings:
        try:
            located.append((prayers.index(heading), key, label))
        except ValueError as error:
            raise RuntimeError(f"Brazilian Eucharistic Prayer heading missing: {heading}") from error
    located.sort()
    forms, variants = {}, {}
    for index, (start, key, label) in enumerate(located):
        end = located[index + 1][0] if index + 1 < len(located) else len(prayers)
        forms[key] = rows(prayers, start + 1, end)
        variants[key] = {"label": {"pt": label}}
    return {
        "id": "3.3 eucharist", "type": "selectable", "isEucharist": True,
        "header": {"pt": "Oração Eucarística"}, "variants": variants,
        "common_dialogue": [], "songs": {}, "sanctus": [], "forms": forms, "amen": [],
    }


def build_ordinary(pages: dict[str, list[str]]) -> list[dict]:
    initial, word, offerings = pages["initial"], pages["word"], pages["eucharist"]
    communion, final, prayers = pages["communion"], pages["final"], pages["prayers"]
    dynamic = {
        "entrance": "(Antífona de entrada do dia)", "collect": "(Oração coleta do dia)",
        "reading1": "(Primeira leitura do dia)", "psalm": "(Salmo responsorial do dia)",
        "reading2": "(Segunda leitura do dia)", "sequence": "(Sequência do dia)",
        "gospel_accl": "(Aclamação ao Evangelho do dia)", "gospel": "(Evangelho do dia)",
        "offerings": "(Oração sobre as oferendas do dia)", "communion": "(Antífona da comunhão do dia)",
        "after": "(Oração depois da comunhão do dia)",
    }
    return [
        {"id": "1. THE INTRODUCTORY RITES", "type": "section", "pt": "Ritos iniciais"},
        part("1.1 entrance", "Antífona de entrada", [line(dynamic["entrance"])]),
        greeting(initial),
        penitential(initial),
        part("1.4 kyrie", "Senhor, tende piedade", rows(initial, 454, 481), **{"if": "not_penitential_C"}),
        part("1.5 gloria", "Glória", rows(initial, 481, 508), **{"if": "sunday"}),
        part("1.6 collect", "Oração coleta", [line("Oremos.", "C."), line(dynamic["collect"]), line("Amém.", "Todos")]),
        {"id": "2. THE LITURGY OF THE WORD", "type": "section", "pt": "Liturgia da Palavra"},
        part("2.1 reading1", "Primeira leitura", [line("(Resumo)"), line(dynamic["reading1"])]),
        part("2.2 psalm", "Salmo responsorial", [line(dynamic["psalm"])]),
        part("2.3 reading2", "Segunda leitura", [line("(Resumo)"), line(dynamic["reading2"])], **{"if": "sunday"}),
        part("2.4 Sequence", "Sequência", [line(dynamic["sequence"])], **{"if": "easter_or_pentecost"}),
        part("2.5 gospel_accl", "Aclamação ao Evangelho", [line(dynamic["gospel_accl"])]),
        part("2.6 gospel", "Evangelho", rows(word, 20, 50)[:12] + [line(dynamic["gospel"])] + rows(word, 43, 50)),
        part("2.7 homily", "Homilia", rows(word, 51, 53)),
        creed(word),
        part("2.9 universal", "Oração universal", rows(word, 121, 122), **{"if": "sunday"}),
        {"id": "3. THE LITURGY OF THE EUCHARIST", "type": "section", "pt": "Liturgia Eucarística"},
        part("3.1 offertory", "Preparação dos dons", rows(offerings, 3, 76)),
        part("3.2 prayer_offerings", "Oração sobre as oferendas", rows(offerings, 77, 78) + [line(dynamic["offerings"]), line("Amém.", "Todos")]),
        eucharistic_prayers(prayers),
        part("3.4 lords_prayer", "Pai-nosso", rows(communion, 3, 62)),
        part("3.5 peace", "Rito da paz", rows(communion, 63, 98)),
        part("3.6 lamb", "Cordeiro de Deus", rows(communion, 99, 117)),
        part("3.7 communion_rite", "Comunhão", rows(communion, 118, 187)),
        part("3.8 communion", "Antífona da comunhão", rows(communion, 187, 198) + [line(dynamic["communion"])]),
        part("3.9 prayer_after", "Depois da comunhão", rows(communion, 198, 202) + [line(dynamic["after"]), line("Amém.", "Todos")]),
        {"id": "4. THE CONCLUDING RITES", "type": "section", "pt": "Ritos finais"},
        part("4.1 announcement", "Avisos", rows(final, 3, 4)),
        blessing(final),
        dismissal(final),
        part("4.4 final_song", "Canto final", rows(final, 63, 66)),
    ]


def build() -> None:
    session = requests.Session()
    session.headers["User-Agent"] = "Order-of-Mass-source-builder/27.6"
    pages, segments = {}, []
    for key, title, url in ORDINARY_PAGES:
        page_lines = fetch_lines(session, title, url)
        pages[key] = page_lines
        segments.append({"title": title, "url": url, "text_pt": "\n".join(page_lines)})
    corpus = "\n\n".join(segment["text_pt"] for segment in segments)
    if len(corpus) < 100_000:
        raise RuntimeError(f"Brazilian ordinary corpus is unexpectedly short: {len(corpus)}")
    ordinary = build_ordinary(pages)
    if len(ordinary) != 32:
        raise RuntimeError(f"Brazilian ordinary must use the standard 32-item schema: {len(ordinary)}")
    ordinary_source = {
        "title": "Pocket Terço — Ordinário e Orações Eucarísticas conforme a 3ª edição do Missal Romano",
        "authority": "Textos litúrgicos da Conferência Nacional dos Bispos do Brasil (CNBB)",
        "url": ORDINARY_PAGES[0][2], "indexUrl": "https://pocketterco.com.br/oracoes/missal-romano",
        "eucharisticPrayersUrl": ORDINARY_PAGES[-1][2], "edition": "Missal Romano, 3ª edição para o Brasil",
        "access": "Complete public transcription matching the current CNBB text",
    }
    corpus_data = {"language": "PT", "edition": "Missal Romano, 3ª edição para o Brasil",
                   "text_pt": corpus, "segments": segments}
    js = f"""// Brazil Mass module (CNBB, Beta): complete Brazilian ordinary and Pocket Terço daily Mass source.
(function registerBrazilMass(global) {{
  'use strict';
  global.countryMassData = global.countryMassData || {{}};
  const ordinary = Object.freeze({pretty_js(ordinary)});
  const ordinarySource = Object.freeze({compact_js(ordinary_source)});
  const officialOrderCorpus = Object.freeze({compact_js(corpus_data)});
  const dailyUrl = ymd => {{
    const digits = String(ymd || '').replace(/\\D/g, '');
    if (digits.length !== 8) return 'https://pocketterco.com.br/liturgia/';
    return `https://pocketterco.com.br/liturgia/${{digits.slice(6, 8)}}/${{digits.slice(4, 6)}}/${{digits.slice(0, 4)}}`;
  }};
  global.countryMassData.BR = Object.freeze({{
    schemaVersion: 2, jurisdiction: 'BR', jurisdictions: Object.freeze(['BR']),
    jurisdictionName: 'Brasil', conferenceCalendar: 'Conferência Nacional dos Bispos do Brasil',
    ordinaryLanguage: 'PT', ordinary, ordinaryStructure: 'paragraph-rubric-choices-v1',
    officialOrderCorpus, ordinaryEdition: 'Missal Romano, 3ª edição para o Brasil', ordinarySource, beta: true,
    dailyReadings: Object.freeze({{ provider: 'Pocket Terço / textos litúrgicos CNBB', calendar: 'Brasil',
      translation: 'Lecionário e Missal Romano para o Brasil', parser: 'strict-brazilian-pocketterco-daily-mass', url: dailyUrl }}),
    dailyPropers: Object.freeze({{ provider: 'Pocket Terço / textos litúrgicos CNBB',
      parser: 'strict-brazilian-pocketterco-daily-mass', url: dailyUrl }}),
    properSources: Object.freeze({{ officialReadings: 'https://liturgiadiaria.edicoescnbb.com.br/app/user/user/UserView.php',
      dailyMass: 'https://pocketterco.com.br/liturgia/', nationalMissal: ordinarySource }}),
    calendar: Object.freeze({{}})
  }});
}})(globalThis);
"""
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(js, encoding="utf-8", newline="\n")
    print(f"Wrote {OUTPUT} ({len(corpus):,} corpus characters, {len(ordinary)} ordinary entries)")


if __name__ == "__main__":
    build()
