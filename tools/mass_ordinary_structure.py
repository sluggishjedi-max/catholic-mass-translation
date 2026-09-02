"""Build country ordinaries with the same row schema used by Korean Mass data."""

from __future__ import annotations

import copy
import html
import json
import re
from typing import Iterable


ROLE_PREFIXES = {
    "it": ((r"(?:Il )?popolo(?: risponde| acclama)?", "Tutti"), (r"Tutti", "Tutti"),
           (r"Il sacerdote", "C"), (r"Il diacono", "D"), (r"Il vescovo", "Vescovo")),
    "es": ((r"(?:El )?pueblo(?: responde| aclama)?", "Todos"), (r"Todos(?: responden)?", "Todos"),
           (r"El sacerdote", "C."), (r"El di[aá]cono", "D."), (r"El obispo", "Obispo")),
    "pt": ((r"(?:O )?povo(?: responde| aclama)?", "Todos"), (r"A assembleia(?: responde| aclama)?", "Todos"),
           (r"Todos(?: respondem)?", "Todos"), (r"O sacerdote", "C."),
           (r"O di[aá]cono", "D."), (r"O Bispo", "Bispo"), (r"O celebrante", "C.")),
    "de": ((r"(?:Das )?Volk", "A."), (r"Die Gemeinde", "A."), (r"Alle", "A."),
           (r"Der Priester", "P."), (r"Der Diakon", "D."), (r"Der Bischof", "Bischof"),
           (r"Der Lektor", "L."), (r"Der Kantor", "K.")),
}

RUBRIC_STARTS = {
    "it": ("Quando", "Giunto", "Terminato", "Quindi", "Poi", "Il sacerdote", "Il diacono",
           "Il vescovo", "Il popolo", "I concelebranti", "Tutti si", "Dopo", "Prima", "Mentre",
           "Se ", "Nelle ", "Nel ", "La domenica", "Segue", "Si ", "Può", "Possono", "Secondo"),
    "es": ("Reunido", "Cuando", "Terminado", "Después", "Luego", "El sacerdote", "El diácono",
           "El diacono", "El obispo", "El pueblo", "Todos se", "A continuación", "Mientras",
           "Si ", "Sigue", "Se ", "Puede", "Pueden"),
    "pt": ("Reunido", "Ao chegar", "Chegando", "Terminado", "Depois", "Em seguida", "Então",
           "O sacerdote", "O diácono", "O diacono", "O Bispo", "O bispo", "O povo", "A assembleia",
           "Todos se", "Enquanto", "Quando", "Se ", "Segue", "Seguem", "Une as mãos", "Abre os braços",
           "Estende as mãos", "Ergue", "Inclina-se", "Faz genuflexão", "Mostra", "Coloca", "Toma o",
           "Voltado", "Aos domingos", "Conforme", "O celebrante", "O presidente", "O leitor",
           "O salmista", "O cantor", "O que vai comungar"),
    "de": ("Der Priester", "Der Diakon", "Der Bischof", "Das Volk", "Die Gemeinde", "Alle ", "Dann",
           "Nun", "Wenn", "Wo ", "Es folgt", "Folgt", "Während", "Nach ", "Vor ", "Zur ",
           "Der Lektor", "Der Kantor", "Falls"),
}

CHOICE_WORDS = {
    "it": re.compile(r"^(?:★\s*)?Oppure(?:,\s*[^:]+)?\s*:?$", re.I),
    "es": re.compile(r"^(?:★\s*)?O bien(?:,\s*[^:]+)?\s*:?$", re.I),
    "pt": re.compile(r"^(?:★\s*)?(?:Ou|ou)(?:,\s*[^:]+)?\s*:?$", re.I),
    "de": re.compile(r"^(?:★\s*)?Oder(?:,\s*[^:]+)?\s*:?$", re.I),
}

FORMULA_LABELS = {
    "it": ("Prima formula", "Seconda formula", "Terza formula"),
    "es": ("Primera fórmula", "Segunda fórmula", "Tercera fórmula"),
    "pt": ("Primeira fórmula", "Segunda fórmula", "Terceira fórmula"),
    "de": ("Form A", "Form B", "Form C"),
}


def _plain(value: str) -> str:
    return html.unescape(re.sub(r"<[^>]+>", "", value or "")).replace("\xa0", " ").strip()


def _source_chunks(value: str) -> list[str]:
    value = html.unescape(str(value or ""))
    value = re.sub(r"<br\s*/?>", "\n", value, flags=re.I)
    choice = r"(?:O bien|Oppure|Ou|Oder)(?:,\s*[^:\n]{1,100})?\s*:"
    value = re.sub(rf"(?<!\()\s+(?=({choice}))", "\n", value, flags=re.I)
    value = re.sub(rf"^({choice})\s+", r"\1\n", value, flags=re.I | re.M)
    value = re.sub(r"\s+(?=(?:Fórmula\s+[IVX]+|[IVX]+\s+formulario\s*:|Ato penitencial\s+[–-]\s+[ABC]))", "\n", value, flags=re.I)
    value = re.sub(r"\s+(?=(?:En las palabras que siguen|Às palavras seguintes|Alle parole))", "\n", value, flags=re.I)
    value = re.sub(r"(todos se inclinan\.)\s+", r"\1\n", value, flags=re.I)
    chunks = [re.sub(r"\s+", " ", line).strip() for line in value.splitlines()]
    chunks = [line for line in chunks if line]
    expanded = []
    for chunk in chunks:
        chunk = re.sub(r"\s+(?=\d{1,3}\.\s+[A-ZÁÉÍÓÚÜÑ])", "\n", chunk)
        if len(chunk) > 280:
            chunk = re.sub(r"(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÜÑ])", "\n", chunk)
        expanded.extend(line.strip() for line in chunk.splitlines() if line.strip())
    chunks = expanded
    bounded = []
    for chunk in chunks:
        if len(chunk) <= 420:
            bounded.append(chunk)
            continue
        phrases = re.split(r"(?<=[;:])\s+|(?<=,)\s+(?=[A-Za-zÁÉÍÓÚÜÑÀÈÌÒÙÂÊÎÔÛÃÕÇÄÖÜ])", chunk)
        current = ""
        for phrase in phrases:
            candidate = f"{current} {phrase}".strip()
            if current and len(candidate) > 420:
                bounded.append(current)
                current = phrase
            else:
                current = candidate
        if current:
            while len(current) > 520:
                cut = current.rfind(" ", 0, 420)
                if cut < 120:
                    cut = 420
                bounded.append(current[:cut].strip())
                current = current[cut:].strip()
            if current:
                bounded.append(current)
    return bounded


def _standalone_speaker(text: str) -> str | None:
    return {
        "℣.": "V.", "℣": "V.", "V/.": "V/.", "V/": "V/.", "V.:": "V.",
        "℟.": "R.", "℟": "R.", "R/.": "R/.", "R/": "R/.", "R.:": "R.",
        "P.:": "P.", "P.": "P.", "A.:": "A.", "A.": "A.",
        "C.:": "C.", "C.": "C.", "D.:": "D.", "D.": "D.",
        "Todos:": "Todos", "Tutti:": "Tutti", "CP": "CP", "CC": "CC", "CP ou CC": "CP ou CC",
        "1C": "1C", "2C": "2C", "3C": "3C",
    }.get(text.strip())


def _prefixed_speaker(text: str, lang: str) -> tuple[str, str] | None:
    short = re.match(r"^(D\.\s*\(P\.\)|P\.\s*\(D\.\)|[PAVRCDK] ?[/.]?)\s*:\s*(.+)$", text)
    if short:
        return short.group(1).strip(), short.group(2).strip()
    for pattern, speaker in ROLE_PREFIXES.get(lang, ()):
        match = re.match(rf"^({pattern})\s*:\s*(.+)$", text, flags=re.I)
        if match:
            return speaker, match.group(2).strip()
    return None


def _role_instruction(text: str, lang: str) -> tuple[str, str] | None:
    for pattern, speaker in ROLE_PREFIXES.get(lang, ()):
        match = re.match(
            rf"^({pattern})(.*?)(?:diz|dice|sagt|spricht|responde|risponde|antwortet|aclama|acclamano)\s*:\s*$",
            text, flags=re.I,
        )
        if match:
            return speaker, text
    return None


def _instruction_with_utterance(text: str, lang: str) -> tuple[str, str, str] | None:
    bodies = {
        "it": r"(?:sacerdote|diacono|vescovo|popolo|professione di fede).{0,220}?(?:dice|risponde|acclama|seguenti)",
        "es": r"(?:sacerdote|diácono|diacono|obispo|pueblo|profesión de fe|fórmulas siguientes).{0,240}?(?:dice|responde|aclama|siguientes)?",
        "pt": r"(?:sacerdote|diácono|diacono|bispo|povo|assembleia|profissão de fé).{0,220}?(?:diz|responde|aclama|seguintes)",
        "de": r"(?:Priester|Diakon|Bischof|Volk|Gemeinde).{0,220}?(?:spricht|sagt|antwortet)",
    }
    creed = {
        "it": r"(?:Simbolo o Professione di Fede|Simbolo battesimale[^:]+)",
        "es": r"(?:profesión de fe|símbolo llamado[^:]+)",
        "pt": r"(?:símbolo ou profissão de fé|Símbolo dos Apóstolos)",
        "de": r"(?:Große Glaubensbekenntnis|Apostolische Glaubensbekenntnis)",
    }[lang]
    match = re.match(rf"^(.{{0,120}}(?:{bodies[lang]}|{creed}))\s*:\s*(.+)$", text, flags=re.I)
    if not match:
        return None
    rubric, utterance = match.group(1).strip(), match.group(2).strip()
    lower = rubric.lower()
    if any(word in lower for word in ("popolo", "pueblo", "povo", "assembleia", "volk", "gemeinde")):
        speaker = {"it": "Tutti", "es": "Todos", "pt": "Todos", "de": "A."}[lang]
    elif any(word in lower for word in ("diacono", "diácono", "diakon")):
        speaker = {"it": "D", "es": "D.", "pt": "D.", "de": "D."}[lang]
    else:
        speaker = {"it": "C", "es": "C.", "pt": "C.", "de": "P."}[lang]
    return rubric + ":", speaker, utterance


def _is_rubric(text: str, lang: str) -> bool:
    plain = _plain(text)
    if not plain:
        return False
    if re.fullmatch(r"(?:\d{1,3}\.|[a-z]\)|[IVXLC]+\.|[★Ⓑ✠])", plain, flags=re.I):
        return True
    if plain.startswith(("*", "Ⓑ ", "★ ")):
        return True
    matcher = CHOICE_WORDS.get(lang)
    if matcher and matcher.match(plain):
        return True
    if len(plain) <= 100 and plain.upper() == plain and any(char.isalpha() for char in plain):
        return True
    if lang == "es" and plain.startswith("En las palabras"):
        return True
    unnumbered = re.sub(r"^\d{1,3}\.\s*", "", plain)
    return any(unnumbered.startswith(prefix) for prefix in RUBRIC_STARTS.get(lang, ()))


def structure_lines(lines: Iterable[dict], lang: str) -> list[dict]:
    text_key, speaker_key, rubric_key = f"text_{lang}", f"sp_{lang}", f"rubric_{lang}"
    output: list[dict] = []
    pending_speaker = ""
    for source_line in lines or []:
        source = copy.deepcopy(source_line)
        raw_text = str(source.pop(text_key, "") or "")
        source_speaker = str(source.pop(speaker_key, "") or "")
        source_rubric = str(source.pop(rubric_key, "") or "")
        if source_rubric:
            for rubric in _source_chunks(source_rubric) or [source_rubric]:
                output.append({**copy.deepcopy(source), rubric_key: rubric})
        for index, chunk in enumerate(_source_chunks(raw_text) if raw_text else []):
            plain = _plain(chunk)
            if not plain or re.match(r"^Abrir(?:\s|$)", plain, flags=re.I):
                continue
            standalone = _standalone_speaker(plain)
            if standalone:
                pending_speaker = standalone
                continue
            prefixed = _prefixed_speaker(plain, lang)
            if prefixed:
                output.append({**copy.deepcopy(source), speaker_key: prefixed[0], text_key: prefixed[1]})
                pending_speaker = ""
                continue
            instruction = _role_instruction(plain, lang)
            if instruction:
                pending_speaker = instruction[0]
                output.append({**copy.deepcopy(source), rubric_key: chunk})
                continue
            compound = _instruction_with_utterance(plain, lang)
            if compound:
                output.append({**copy.deepcopy(source), rubric_key: compound[0]})
                output.append({**copy.deepcopy(source), speaker_key: compound[1], text_key: compound[2]})
                pending_speaker = ""
                continue
            if _is_rubric(chunk, lang):
                output.append({**copy.deepcopy(source), rubric_key: chunk})
                continue
            speaker = source_speaker if index == 0 and source_speaker else pending_speaker
            output.append({**copy.deepcopy(source), speaker_key: speaker, text_key: chunk})
            pending_speaker = ""
    return output


def structure_item(item: dict, lang: str) -> dict:
    item = copy.deepcopy(item)
    for key in ("lines", "common_dialogue", "sanctus", "amen"):
        if isinstance(item.get(key), list):
            item[key] = structure_lines(item[key], lang)
    if isinstance(item.get("forms"), dict):
        item["forms"] = {key: structure_lines(value, lang) for key, value in item["forms"].items()}
    if isinstance(item.get("songs"), dict):
        for song in item["songs"].values():
            if isinstance(song, dict) and isinstance(song.get("content"), list):
                song["content"] = structure_lines(song["content"], lang)
    if isinstance(item.get("variants"), dict):
        for variant in item["variants"].values():
            if isinstance(variant, dict) and isinstance(variant.get("lines"), list):
                variant["lines"] = structure_lines(variant["lines"], lang)
    return item


def line_value(line: dict, lang: str) -> str:
    return _plain(line.get(f"rubric_{lang}") or line.get(f"text_{lang}") or "")


def split_variants(item: dict, lang: str, boundaries: list[int], labels: list[str], prefix=None) -> dict:
    lines = item.get("lines") or []
    starts = sorted({index for index in boundaries if 0 <= index < len(lines)})
    if not starts:
        starts = [0]
    variants = {}
    for offset, (start, end) in enumerate(zip(starts, starts[1:] + [len(lines)])):
        key = chr(ord("A") + offset) if offset < 26 else str(offset + 1)
        label = labels[offset] if offset < len(labels) else str(offset + 1)
        variant_lines = copy.deepcopy(prefix or []) + copy.deepcopy(lines[start:end])
        if variant_lines:
            variants[key] = {"label": {lang: label}, "lines": variant_lines}
    clone = copy.deepcopy(item)
    clone["type"] = "selectable"
    clone["variants"] = variants
    clone.pop("lines", None)
    return clone


def choice_boundaries(item: dict, lang: str) -> list[int]:
    matcher = CHOICE_WORDS.get(lang)
    return [i for i, line in enumerate(item.get("lines") or []) if matcher and matcher.match(line_value(line, lang))]


def formula_boundaries(item: dict, lang: str) -> list[int]:
    patterns = {
        "it": r"^(?:Prima|Seconda|Terza) (?:formula|forma)|^[IVX]+ formulario\s*:|^Formula [ABC]$",
        "es": r"^(?:Primera|Segunda|Tercera) fórmula|^Fórmula [ABCIVX]+(?:\s|$)",
        "pt": r"^(?:Primeira|Segunda|Terceira) fórmula|^Fórmula [ABCIVX]+$|^Form [ABC]$|^Ato penitencial\s+[–-]\s+[ABC]$",
        "de": r"^Form [ABC]$",
    }
    matcher = re.compile(patterns[lang], re.I)
    return [i for i, line in enumerate(item.get("lines") or []) if matcher.search(line_value(line, lang))]


def creed_boundaries(item: dict, lang: str) -> list[int]:
    transition_patterns = {
        "it": r"In luogo del Simbolo niceno",
        "es": r"en lugar del símbolo niceno",
        "pt": r"Em vez do símbolo niceno",
        "de": r"An Stelle des Großen Glaubensbekenntnisses",
    }
    lines = item.get("lines") or []
    matcher = re.compile(transition_patterns[lang], re.I)
    transitions = [i for i, line in enumerate(lines) if matcher.search(line_value(line, lang))]
    return [0] + transitions[:1] if lines else []


def trim_creed(item: dict, lang: str) -> dict:
    item = copy.deepcopy(item)
    lines = item.get("lines") or []
    starts = {
        "it": r"Quando è prescritto.*Simbolo|Credo in un solo Dio",
        "es": r"(?:símbolo o profesión de fe|Creo en un solo Dios)",
        "pt": r"(?:símbolo ou profissão de fé|Creio em um só Deus)",
        "de": r"^CREDO$|Wir sprechen das Große Glaubensbekenntnis",
    }
    ends = {
        "it": r"Segue la Preghiera universale",
        "es": r"Después se hace la plegaria universal",
        "pt": r"Oração universal|Segue-se a oração universal",
        "de": r"^ALLGEMEINES GEBET$",
    }
    start_matcher, end_matcher = re.compile(starts[lang], re.I), re.compile(ends[lang], re.I)
    start = next((i for i, line in enumerate(lines) if start_matcher.search(line_value(line, lang))), 0)
    end = next((i for i, line in enumerate(lines[start + 1:], start + 1) if end_matcher.search(line_value(line, lang))), len(lines))
    item["lines"] = lines[start:end]
    return item


def trim_dismissal(item: dict, lang: str) -> dict:
    item = copy.deepcopy(item)
    lines = item.get("lines") or []
    starts = {
        "it": r"(?:Infine il diacono|Il diacono|lo stesso sacerdote).*(?:congeda|dice al popolo|rivolto al popolo)",
        "es": r"(?:El diácono|el mismo sacerdote).*(?:despide|dice al pueblo)",
        "pt": r"144\..*(?:diácono|sacerdote)|Em seguida, o diácono",
        "de": r"^ENTLASSUNG$",
    }
    if lang == "de":
        start = next((i for i, line in enumerate(lines) if line_value(line, lang) == "ENTLASSUNG"), 0)
    else:
        matcher = re.compile(starts[lang], re.I)
        start = next((i for i, line in enumerate(lines) if matcher.search(line_value(line, lang))), 0)
    item["lines"] = lines[start:]
    return item


def blessing_boundaries(item: dict, lang: str) -> list[int]:
    patterns = {
        "it": r"Nel benedire il popolo, il vescovo",
        "es": r"(?:Misa pontifical|El obispo.*bendecir)",
        "pt": r"Na Missa pontifical",
        "de": r"$^",
    }
    matcher = re.compile(patterns[lang], re.I)
    lines = item.get("lines") or []
    found = [i for i, line in enumerate(lines) if matcher.search(line_value(line, lang))]
    return [0] + found[:1] if lines else []


def standardize_choices(ordinary: list[dict], lang: str) -> list[dict]:
    result = []
    creed_labels = {
        "it": ["Simbolo niceno-costantinopolitano", "Simbolo degli Apostoli"],
        "es": ["Símbolo niceno-constantinopolitano", "Símbolo de los Apóstoles"],
        "pt": ["Símbolo niceno-constantinopolitano", "Símbolo dos Apóstolos"],
        "de": ["Großes Glaubensbekenntnis", "Apostolisches Glaubensbekenntnis"],
    }[lang]
    generic = {"it": "Formula", "es": "Fórmula", "pt": "Fórmula", "de": "Formel"}[lang]
    blessing = {"it": "Benedizione", "es": "Bendición", "pt": "Bênção", "de": "Segen"}[lang]
    pontifical_blessing = {
        "it": "Benedizione pontificale", "es": "Bendición pontifical",
        "pt": "Bênção pontifical", "de": "Pontifikalsegen",
    }[lang]
    for source_item in ordinary:
        item = structure_item(source_item, lang)
        identifier = str(item.get("id") or "")
        if identifier.endswith("greeting"):
            boundaries = choice_boundaries(item, lang)
            boundaries = [0] + [i for i in boundaries if i > 0] if boundaries else []
            item = split_variants(item, lang, boundaries, [f"{generic} {i + 1}" for i in range(max(1, len(boundaries)))])
        elif identifier.endswith("penitential"):
            boundaries = formula_boundaries(item, lang)
            prefix = []
            if boundaries and boundaries[0] > 0:
                prefix = copy.deepcopy(item["lines"][:boundaries[0]])
                offset = boundaries[0]
                item["lines"] = item["lines"][offset:]
                boundaries = [index - offset for index in boundaries]
            item = split_variants(item, lang, boundaries, list(FORMULA_LABELS[lang]), prefix=prefix)
        elif identifier.endswith("creed"):
            item = trim_creed(item, lang)
            item = split_variants(item, lang, creed_boundaries(item, lang), creed_labels)
        elif identifier.endswith("blessing"):
            labels = [blessing, pontifical_blessing]
            item = split_variants(item, lang, blessing_boundaries(item, lang), labels)
        elif identifier.endswith("dismissal"):
            item = trim_dismissal(item, lang)
            boundaries = choice_boundaries(item, lang)
            boundaries = [0] + [i for i in boundaries if i > 0] if boundaries else []
            item = split_variants(item, lang, boundaries, [f"{generic} {i + 1}" for i in range(max(1, len(boundaries)))])
        result.append(item)
    return result


def compact_js(value) -> str:
    return json.dumps(value, ensure_ascii=False, separators=(",", ":"))


def pretty_js(value) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)
