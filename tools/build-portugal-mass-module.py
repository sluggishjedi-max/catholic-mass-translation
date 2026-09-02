from __future__ import annotations

import json
import re
from pathlib import Path

import requests
from pypdf import PdfReader

from mass_ordinary_structure import pretty_js, standardize_choices


ROOT = Path(__file__).resolve().parents[1]
PDF = ROOT / "tmp" / "pdfs" / "Ordinario-Missa-Portugal.pdf"
OUTPUT = ROOT / "JS file" / "countries" / "portugal" / "portugal_mass.js"
ORDINARY_URL = "https://liturgia.pt/ordinario/ordinario.pdf"


def ensure_pdf() -> None:
    if PDF.exists() and PDF.stat().st_size > 500_000:
        return
    PDF.parent.mkdir(parents=True, exist_ok=True)
    response = requests.get(ORDINARY_URL, timeout=120)
    response.raise_for_status()
    PDF.write_bytes(response.content)


def clean_page(text: str) -> str:
    text = re.sub(r"(?<=\w)-\s*\n(?=\w)", "", text)
    text = re.sub(r"(?m)^\s*SECRETARIADO NACIONAL DE LITURGIA DE PORTUGAL\s*", "", text)
    text = re.sub(r"(?m)^\s*(?:ORDINÁRIO DA MISSA|PREFÁCIOS|ORAÇÃO EUCARÍSTICA(?:\s+[IV]+)?|RITOS DA COMUNHÃO|RITOS DE CONCLUSÃO)\s*$", "", text)
    text = re.sub(r"(?m)^\s*\d{3}\s*$", "", text)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def html_corpus(reader: PdfReader, first_page: int, last_page: int) -> str:
    pages = [clean_page(reader.pages[index - 1].extract_text() or "") for index in range(first_page, last_page + 1)]
    return "\n\n".join(page for page in pages if page).replace("\n", "<br>")


def line(text: str, speaker: str = "", rubric: str = "") -> dict[str, str]:
    result = {"sp_pt": speaker, "text_pt": text}
    if rubric:
        result["rubric_pt"] = rubric
    return result


def part(identifier: str, title: str, lines: list[dict[str, str]], **extra: object) -> dict[str, object]:
    return {"id": identifier, "type": "part", "header": {"pt": title}, "lines": lines, **extra}


def build_ordinary(reader: PdfReader) -> list[dict[str, object]]:
    dynamic = {
        "entrance": "(Antífona de entrada do dia)", "collect": "(Oração coleta do dia)",
        "reading1": "(Primeira leitura do dia)", "psalm": "(Salmo responsorial do dia)",
        "reading2": "(Segunda leitura do dia)", "sequence": "(Sequência do dia)",
        "gospel_accl": "(Aclamação do Evangelho do dia)", "gospel": "(Evangelho do dia)",
        "prayer_offerings": "(Oração sobre as oblatas do dia)",
        "communion": "(Antífona da comunhão do dia)",
        "prayer_after": "(Oração depois da comunhão do dia)",
    }
    corpus = lambda first, last: line(html_corpus(reader, first, last))
    eucharist = {
        "id": "3.3 eucharist", "type": "selectable", "isEucharist": True,
        "header": {"pt": "Oração eucarística"},
        "variants": {
            "1": {"label": {"pt": "Oração eucarística I (Cânone Romano)"}},
            "2": {"label": {"pt": "Oração eucarística II"}},
            "3": {"label": {"pt": "Oração eucarística III"}},
            "4": {"label": {"pt": "Oração eucarística IV"}},
        },
        "common_dialogue": [
            line("O Senhor esteja convosco.", "V."), line("Ele está no meio de nós.", "R."),
            line("Corações ao alto.", "V."), line("O nosso coração está em Deus.", "R."),
            line("Dêmos graças ao Senhor nosso Deus.", "V."), line("É nosso dever, é nossa salvação.", "R."),
        ],
        "songs": {"cep_complete_prefaces": {
            "title": {"pt": "Prefácios completos do Missal Romano de Portugal"},
            "content": [corpus(28, 91)],
        }},
        "sanctus": [line("Santo, Santo, Santo,<br>Senhor Deus do universo.<br>O céu e a terra proclamam a vossa glória.<br>Hossana nas alturas.<br>Bendito O que vem em nome do Senhor.<br>Hossana nas alturas.", "Todos")],
        "forms": {"1": [corpus(92, 99)], "2": [corpus(100, 106)], "3": [corpus(107, 113)], "4": [corpus(114, 119)]},
        "amen": [line("Por Cristo, com Cristo, em Cristo, a Vós, Deus Pai todo-poderoso, na unidade do Espírito Santo, toda a honra e toda a glória agora e para sempre.", "C."), line("Amen.", "Todos")],
    }
    return [
        {"id": "1. THE INTRODUCTORY RITES", "type": "section", "pt": "Ritos iniciais"},
        part("1.1 entrance", "Antífona de entrada", [line(dynamic["entrance"])]),
        part("1.2 greeting", "Saudação", [corpus(2, 3)]),
        part("1.3 penitential", "Ato penitencial", [corpus(4, 17)]),
        part("1.4 kyrie", "Senhor, tende piedade", [corpus(6, 11)]),
        part("1.5 gloria", "Glória", [corpus(18, 18)], **{"if": "sunday"}),
        part("1.6 collect", "Oração coleta", [line("Oremos.", "C."), line(dynamic["collect"]), line("Amen.", "Todos")]),
        {"id": "2. THE LITURGY OF THE WORD", "type": "section", "pt": "Liturgia da palavra"},
        part("2.1 reading1", "Primeira leitura", [line("(Resumo)"), line(dynamic["reading1"])]),
        part("2.2 psalm", "Salmo responsorial", [line(dynamic["psalm"])]),
        part("2.3 reading2", "Segunda leitura", [line("(Resumo)"), line(dynamic["reading2"])], **{"if": "sunday"}),
        part("2.4 Sequence", "Sequência", [line(dynamic["sequence"])], **{"if": "easter_or_pentecost"}),
        part("2.5 gospel_accl", "Aclamação do Evangelho", [line(dynamic["gospel_accl"])]),
        part("2.6 gospel", "Evangelho", [line(dynamic["gospel"])]),
        part("2.7 homily", "Homilia", [line("Segue-se a homilia.")]),
        part("2.8 creed", "Profissão de fé", [corpus(21, 23)], **{"if": "sunday"}),
        part("2.9 universal", "Oração universal", [line("Segue-se a oração universal ou oração dos fiéis.")], **{"if": "sunday"}),
        {"id": "3. THE LITURGY OF THE EUCHARIST", "type": "section", "pt": "Liturgia eucarística"},
        part("3.1 offertory", "Preparação dos dons", [corpus(24, 26)]),
        part("3.2 prayer_offerings", "Oração sobre as oblatas", [line(dynamic["prayer_offerings"]), line("Amen.", "Todos")]),
        eucharist,
        part("3.4 lords_prayer", "Ritos da comunhão — Pai-nosso", [corpus(120, 121)]),
        part("3.5 peace", "Rito da paz", [corpus(122, 122)]),
        part("3.6 lamb", "Fração do pão — Cordeiro de Deus", [corpus(123, 123)]),
        part("3.7 communion_rite", "Comunhão", [corpus(123, 125)]),
        part("3.8 communion", "Antífona da comunhão", [line(dynamic["communion"])]),
        part("3.9 prayer_after", "Oração depois da comunhão", [line("Oremos.", "C."), line(dynamic["prayer_after"]), line("Amen.", "Todos")]),
        {"id": "4. THE CONCLUDING RITES", "type": "section", "pt": "Ritos de conclusão"},
        part("4.1 announcement", "Avisos", [line("Seguem-se, se os houver, breves avisos ao povo.")]),
        part("4.2 blessing", "Bênção", [corpus(126, 127)]),
        part("4.3 dismissal", "Despedida", [corpus(126, 127)]),
        part("4.4 final_song", "Cântico final", [line("O sacerdote beija o altar e retira-se com os ministros.")]),
    ]


def main() -> None:
    ensure_pdf()
    reader = PdfReader(str(PDF))
    if len(reader.pages) != 188:
        raise SystemExit(f"Unexpected Portuguese Ordinary page count: {len(reader.pages)}")
    ordinary = standardize_choices(build_ordinary(reader), "pt")
    source = {
        "authority": "Secretariado Nacional de Liturgia de Portugal",
        "title": "Ordinário da Missa — terceira edição do Missal Romano",
        "url": ORDINARY_URL,
        "pages": "PDF 2–127",
    }
    full_corpus = html_corpus(reader, 2, 127)
    js = """// Portugal Mass module (CEP, Beta): official Portuguese Ordinary and daily Mass source.
(function registerPortugalMass(global) {
  'use strict';
  global.countryMassData = global.countryMassData || {};
  const ordinary = Object.freeze(%s);
  const ordinarySource = Object.freeze(%s);
  const officialOrderCorpus = Object.freeze({ source: ordinarySource, pageRange: 'PDF 2–127', text_pt: %s });
  const dailyUrl = () => 'https://www.liturgia.pt/liturgiadiaria/';
  global.countryMassData.PT = Object.freeze({
    schemaVersion: 2, jurisdiction: 'PT', jurisdictions: Object.freeze(['PT']),
    jurisdictionName: 'Portugal', conferenceCalendar: 'Conferência Episcopal Portuguesa',
    ordinaryLanguage: 'PT', ordinary, ordinaryStructure: 'paragraph-rubric-choices-v1', officialOrderCorpus,
    ordinaryEdition: 'Missal Romano, terceira edição para Portugal', ordinarySource, beta: true,
    dailyReadings: Object.freeze({ provider: 'Secretariado Nacional de Liturgia de Portugal', calendar: 'Portugal', translation: 'Leccionário e Missal Romano para Portugal', parser: 'strict-portuguese-daily-mass', url: dailyUrl }),
    dailyPropers: Object.freeze({ provider: 'Secretariado Nacional de Liturgia de Portugal', parser: 'strict-portuguese-daily-mass', url: dailyUrl }),
    properSources: Object.freeze({ nationalMissal: ordinarySource, dailyMass: 'https://www.liturgia.pt/liturgiadiaria/' }),
    calendar: Object.freeze({})
  });
})(globalThis);
""" % (pretty_js(ordinary), json.dumps(source, ensure_ascii=False, separators=(",", ":")), json.dumps(full_corpus, ensure_ascii=False))
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(js, encoding="utf-8")
    print(f"Wrote {OUTPUT} ({OUTPUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
