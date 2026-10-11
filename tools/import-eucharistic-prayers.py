from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PDF_TEXT = ROOT / "tmp" / "pdfs"


def between(text: str, start: str, end: str, occurrence: int = 0) -> str:
    pos = -1
    cursor = 0
    for _ in range(occurrence + 1):
        pos = text.index(start, cursor)
        cursor = pos + len(start)
    stop = text.index(end, cursor)
    return text[pos:stop]


def from_marker(text: str, marker: str) -> str:
    return text[text.index(marker):]


def clean_extracted(text: str, lang: str) -> str:
    text = re.sub(r"\n?===== PAGE \d+ =====\n?", "\n", text)
    text = text.replace("\ufeff", "").replace("\x00", "")
    if lang == "kr":
        replacements = {
            "十": "✚", "㉧": "◎", "卞": "†", "감시송": "감사송", "감시를": "감사를",
            "최를": "죄를", "홀릴": "흘릴", "기넘": "기념", "기븸": "기쁨", "수령": "세력",
            "모는": "모든", "미픑": "마음을", "손 을": "손을", "모-啞": "모으고",
            "땅을": "빵을", "성단": "성탄", "파스가": "파스카", "이울러": "아울러",
            "바리는": "바라는", "미음으로": "마음으로", "구금께": "주님께",
            "모-으그": "모으고", "바오되": "바오로,", "찬미의 제시": "찬미의 제사",
            "사저는": "사제는", "봉사지들과": "봉사자들과", "생명의 땅과": "생명의 빵과",
            "기 넘하고": "기념하고", "도음을": "도움을", "제지들에게": "제자들에게",
            "이 제시를": "이 제사를", "기 억": "기억", "허 리를": "허리를",
            "사제는 손을 기도하며": "사제는 손을 모으고 기도하며", "산이를기억한다": "산 이를 기억한다",
            "십자가와부활": "십자가와 부활", "부록 에": "부록 1에", "* 피": "✠ 피", "* 강복": "✠ 강복",
        }
        for old, new in replacements.items():
            text = text.replace(old, new)
        text = text.replace("℃", "")
        text = re.sub(r"(?:\d+|[A-Za-z가-힣℃]+)\s*미사 통상문\s*", "", text)
        text = re.sub(r"감사 기도 제[134]양식\s*\d*\s*", "", text)
        text = re.sub(r"(?:주례|첫째|둘째|셋째|넷째)\s*사제", "", text)
        text = text.replace("(모든 사제)", "")
        text = re.sub(r"✚\s*신\s*앙.*?✚\s*신앙의 신비여!", "✚ 신앙의 신비여!", text, flags=re.S)
        text = re.sub(r"◎\s*주\s*님.*?(?=◎\s*주님께서)", "", text, flags=re.S)
        text = re.sub(
            r"✚\s*그리스도를 통하여(?:(?!✚\s*그리스도를 통하여 그리스도와 함께 그리스도 안에서).)*?"
            r"(?=✚\s*그리스도를 통하여 그리스도와 함께 그리스도 안에서)",
            "", text, flags=re.S,
        )
        text = re.sub(r"\s+0(?=\s|$)", " ", text)
    lines = []
    for raw in text.splitlines():
        line = re.sub(r"\s+", " ", raw).strip()
        if not line or re.fullmatch(r"\d+", line):
            continue
        lines.append(line)
    return "<br>".join(lines)


def strip_final_amen(text: str, lang: str) -> str:
    markers = {
        "kr": "교우들은 환호한다.",
        "en": "The people acclaim:",
        "la": "Populus acclamat:",
        "vn": "Cộng đoàn tung hô",
        "jp": "会衆 アーメン",
    }
    marker = markers[lang]
    pos = text.rfind(marker)
    return text[:pos].rstrip("<br> ") if pos >= 0 else text


def matching_bracket(text: str, start: int) -> int:
    opening = text[start]
    closing = {"[": "]", "{": "}"}[opening]
    depth = 0
    quote = None
    escaped = False
    for i in range(start, len(text)):
        ch = text[i]
        if quote:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == quote:
                quote = None
            continue
        if ch in ("'", '"', "`"):
            quote = ch
        elif ch == opening:
            depth += 1
        elif ch == closing:
            depth -= 1
            if depth == 0:
                return i
    raise ValueError(f"Unmatched {opening} at {start}")


def replace_form(js: str, form_key: str, texts: dict[str, str]) -> str:
    eucharist = js.index("id: '3.3 eucharist'")
    forms = js.index("forms: {", eucharist)
    token = f"'{form_key}': ["
    start = js.index(token, forms)
    array_start = js.index("[", start)
    array_end = matching_bracket(js, array_start)
    row = {
        "sp_kr": "✚", "text_kr": texts["kr"],
        "sp_en": "P.", "text_en": texts["en"],
        "sp_la": "S.", "text_la": texts["la"],
        "sp_vn": "LM.", "text_vn": texts["vn"],
        "sp_jp": "司", "text_jp": texts["jp"],
    }
    replacement = "[\n                " + json.dumps(row, ensure_ascii=False, indent=4).replace("\n", "\n                ") + "\n            ]"
    return js[:array_start] + replacement + js[array_end + 1:]


def remove_shadowed_common_preface_six(js: str) -> str:
    needle = '"common_6": {'
    first = js.find(needle)
    second = js.find(needle, first + len(needle)) if first >= 0 else -1
    if first < 0 or second < 0:
        return js
    first_comment = js.rfind("    // 39.", 0, first)
    second_comment = js.rfind("    // PDF", first, second)
    if first_comment < 0 or second_comment < 0:
        raise ValueError("Could not isolate the shadowed Common Preface VI block")
    return js[:first_comment] + js[second_comment:]


def build_forms() -> dict[str, dict[str, str]]:
    sources = {
        lang: (PDF_TEXT / f"missal-{lang}.txt").read_text(encoding="utf-8")
        for lang in ("en", "la", "vn", "jp")
    }
    sources["kr"] = (PDF_TEXT / "missal-ko-ocr.txt").read_text(encoding="utf-8-sig")

    sections: dict[str, dict[str, str]] = {key: {} for key in ("1", "3", "4")}

    en1 = between(sources["en"], "EUCHARISTIC PRAYER I\n", "EUCHARISTIC PRAYER II\n")
    en3 = between(sources["en"], "EUCHARISTIC PRAYER III\n", "EUCHARISTIC PRAYER IV\n")
    en4 = between(sources["en"], "EUCHARISTIC PRAYER IV\n", "The Communion Rite\n")
    sections["1"]["en"] = from_marker(en1, "To you, therefore")
    sections["3"]["en"] = from_marker(en3, "You are indeed Holy")
    sections["4"]["en"] = from_marker(en4, "It is truly right to give you thanks")

    la1 = between(sources["la"], "PREX EUCHARISTICA I\n", "PREX EUCHARISTICA II\n")
    la3 = between(sources["la"], "PREX EUCHARISTICA III\n", "PREX EUCHARISTICA IV\n")
    la4 = between(sources["la"], "PREX EUCHARISTICA IV\n", "Ritus communionis")
    sections["1"]["la"] = from_marker(la1, "TE ÍGETUR")
    sections["3"]["la"] = from_marker(la3, "VERE Sanctus es")
    sections["4"]["la"] = from_marker(la4, "VERE dignum est")

    vn1 = between(sources["vn"], "KINH NGUYỆN THÁNH THỂ I \n", "KINH NGUYỆN THÁNH THỂ II \n")
    vn3 = between(sources["vn"], "KINH NGUYỆN THÁNH THỂ III \n", "KINH NGUYỆN THÁNH THỂ IV \n")
    vn4 = between(sources["vn"], "KINH NGUYỆN THÁNH THỂ IV \n", "NGHI THỨC HIỆP LỄ")
    sections["1"]["vn"] = from_marker(vn1, "Lạy Cha rất nhân từ")
    sections["3"]["vn"] = from_marker(vn3, "Lạy Chúa, Chúa thật là Đấng Thánh")
    sections["4"]["vn"] = from_marker(vn4, "Lạy Cha chí Thánh, tạ ơn Cha thật là xứng hợp")

    jp1 = between(sources["jp"], "第一奉献文（ローマ典文） \n", "第二奉献文 \n")
    jp3 = between(sources["jp"], "第三奉献文 \n", "第四奉献文 \n")
    jp4 = between(sources["jp"], "第四奉献文 \n", "交わりの儀")
    sections["1"]["jp"] = from_marker(jp1, "いつくしみ深い父よ")
    sections["3"]["jp"] = from_marker(jp3, "まことに聖なる父よ")
    sections["4"]["jp"] = from_marker(jp4, "聖なる父よ、")

    kr1 = between(sources["kr"], "감사 기도 제1양식", "감사 기도 제2양식")
    kr3 = between(sources["kr"], "감사 기도 제3양식", "감사 기도 제4양식")
    kr4 = between(sources["kr"], "감사 기도 제4양식", "영성체 예식")
    sections["1"]["kr"] = from_marker(kr1, "인자하신 아버지")
    sections["3"]["kr"] = from_marker(kr3, "거룩하신 아버지, 몸소 창조하신 만물이")
    sections["4"]["kr"] = from_marker(kr4, "거룩하신 아버지, 아버지께 감사와 영광을 드림은")

    for form in sections.values():
        for lang, text in list(form.items()):
            form[lang] = strip_final_amen(clean_extracted(text, lang), lang)
    return sections


def main() -> None:
    forms = build_forms()
    path = ROOT / "JS file" / "missa_data.js"
    js = path.read_text(encoding="utf-8")
    js = remove_shadowed_common_preface_six(js)
    for key in ("1", "3", "4"):
        js = replace_form(js, key, forms[key])
    path.write_text(js, encoding="utf-8")
    print({key: {lang: len(text) for lang, text in value.items()} for key, value in forms.items()})


if __name__ == "__main__":
    main()
