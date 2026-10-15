"""Extract approved solemn blessings from the project's supplied Missals."""
import argparse
import json
import re
from pathlib import Path
import pypdfium2 as pdf

ROOT = Path(__file__).resolve().parents[1]
ROMAN = ['advent', 'christmas', 'new_year', 'epiphany', 'passion', 'easter',
         'ascension', 'pentecost', *[f'ordinary_{i}' for i in range(1, 7)],
         'blessed_virgin_mary', 'peter_and_paul', 'apostles', 'all_saints',
         'church_dedication', 'for_the_dead']
ITALIAN = ROMAN[:4] + ['lent'] + ROMAN[4:14] + [f'ordinary_{i}' for i in range(7, 11)] + ROMAN[14:18] + ['saint'] + ROMAN[18:]
FILES = {
    'LA': ('참고자료/미사/전문/라틴어.pdf', 369, 379, dict(enumerate(ROMAN, 1))),
    'IT': ('참고자료/미사/추가언어/이탈리아어/이탈리아어_미사경본_제3판.pdf', 538, 554, dict(enumerate(ITALIAN, 1))),
    'PT': ('참고자료/미사/추가언어/포르투갈어(포르투갈)/포르투갈어_미사통상문_포르투갈.pdf', 127, 139,
           {**dict(enumerate(ROMAN, 1)), 5:'lent', '5-A':'passion', '18-A':'saint'}),
}


def clean(text, lang):
    if lang == 'IT':
        for source, target in {'π':'t', '∏':'T', 'Ω':'ff', '≈':'ff', '√':'ff', '±':'N', 'ı':'1'}.items():
            text = text.replace(source, target)
    return re.sub(r'(?<=\w)-\s*\n(?=\w)', '', text)


def numbered(lang, file, start, end, mapping):
    document = pdf.PdfDocument(str(ROOT / file))
    entries, current, pending = {}, None, []
    done = False
    for index in range(start, end):
        for raw in clean(document[index].get_textpage().get_text_range(), lang).splitlines():
            line = raw.strip()
            if not line:
                continue
            if line in ('ORATIONES SUPER POPULUM', 'Preghiere di benedizione sul popolo'):
                done = True
                break
            if re.fullmatch(r'\d+|\d+ Rito della Messa con il popolo|Benedizioni solenni(?: \d+)?|SECRETARIADO NACIONAL DE LITURGIA DE PORTUGAL|BÊNÇÃOS SOLENES|ORDINÁRIO DA MISSA', line):
                continue
            match = re.match(r'^(?:★\s*)?(\d+(?:-A)?)\.\s+(.+)$', line)
            number = match[1] if match and '-A' in match[1] else int(match[1]) if match else None
            if match and number in mapping:
                assert not pending, (lang, number, pending)
                current = {'label': match[2], 'pdfPage': index + 1, 'lines': []}
                entries[mapping[number]] = current
            elif current and not re.match(r'^[IV]+\. |^Cf\. |^Benedizione di ', line):
                if re.search(r'R[/]?\.\s*Amen\.', line):
                    before = re.split(r'R[/]?\.\s*Amen\.', line)[0].strip()
                    if before:
                        pending.append(before)
                    assert pending, (lang, line)
                    current['lines'].extend([' '.join(pending).replace(' + ', ' ✠ ').replace(' ^ ', ' ✠ '), 'R. Amen.'])
                    pending = []
                else:
                    pending.append(line)
        if done:
            break
    assert not pending, (lang, pending)
    assert len(entries) == len(mapping), (lang, len(entries), len(mapping))
    assert all(len(v['lines']) in (4, 8) for v in entries.values()), (lang, {k:len(v['lines']) for k,v in entries.items()})
    return {'source': {'file': file, 'pdfPages': [start + 1, end]}, 'solemnBlessings': entries}


def vietnamese():
    # The supplied full Vietnamese Missal has one complete form per page.
    file = '참고자료/미사/전문/베트남어 (일부).pdf'
    document = pdf.PdfDocument(str(ROOT / file))
    keys = ROMAN[:5] + ['easter_vigil'] + ROMAN[5:]
    entries = {}
    for index, key in enumerate(keys, 667):
        text = document[index].get_textpage().get_text_range()
        lines = [line.strip() for line in text.splitlines() if line.strip()]
        title = lines[1]
        # The passion subtitle is a rubric, rather than part of the prayer.
        body = text[text.index('Chủ tế:'):]
        parts = re.split(r'Chủ tế:|[ĐÐ]\.\s*A-men\.', body)
        petitions = [' '.join(part.split()) for part in parts if part.strip()]
        assert len(petitions) in (2, 4), (key, petitions)
        entries[key] = {'label': title, 'pdfPage': index + 1,
                        'lines': [item for part in petitions for item in (part, 'R. A-men.')]}
    # The full compilation abbreviates "người" as "ng" in this form. Use the
    # complete wording from the other supplied Vietnamese Missal instead.
    complete_file = '참고자료/미사/미사통상문/베트남어.pdf'
    complete_document = pdf.PdfDocument(str(ROOT / complete_file))
    complete = complete_document[150].get_textpage().get_text_range()
    body = complete[complete.index('Thiên Chúa'):]
    prayers = [' '.join(part.split()) for part in re.split(r'[ĐÐ]\.\s*Amen\.', body) if part.strip()]
    assert len(prayers) == 4 and 'mọi người đã qua đời' in prayers[1]
    entries['for_the_dead'].update(pdfPage=151, sourceFile=complete_file,
                                  lines=[item for prayer in prayers for item in (prayer.replace(' + ', ' ✠ '), 'R. Amen.')])
    return {'source': {'file': file, 'pdfPages':[668, 688]}, 'solemnBlessings': entries}


def japanese():
    file = '참고자료/미사/추가언어/일본어/미사_식순_개정_2022_공식_일본어.pdf'
    document = pdf.PdfDocument(str(ROOT / file))
    entries, current, pending = {}, None, []
    for index in range(77, 87):
        for raw in document[index].get_textpage().get_text_range().splitlines():
            line = raw.strip()
            if not line or re.fullmatch(r'\d+|[ⅠⅡⅢ].*', line):
                continue
            match = re.match(r'^(\d+)\s+(.+)$', line)
            if match:
                number = int(match[1])
                assert 1 <= number <= 20 and not pending, (number, pending)
                current = {'label':match[2], 'pdfPage':index + 1, 'lines':[]}
                entries[ROMAN[number - 1]] = current
            elif current and re.fullmatch(r'会衆\s*アーメン。', line):
                assert pending
                current['lines'].extend([''.join(pending).replace('\uf058', '✠'), 'R. アーメン。'])
                pending = []
            elif current:
                pending.append(line)
    assert len(entries) == 20 and not pending, (len(entries), pending)
    # The approved Japanese Ordinary Time VI divides its long petition in two.
    assert all(len(v['lines']) in (4,6,8) for v in entries.values()), {key:len(value['lines']) for key,value in entries.items()}
    return {'source': {'file':file, 'url':'https://www.cbcj.catholic.jp/wp-content/uploads/2017/01/henkou2022.pdf',
                      'authority':'カトリック中央協議会', 'pdfPages':[78,87]}, 'solemnBlessings':entries}


def build():
    data = {lang: numbered(lang, *spec) for lang, spec in FILES.items()}
    data['VN'] = vietnamese()
    data['JP'] = japanese()
    return '// Generated by tools/build-multilingual-blessing-data.py from supplied Missals.\n' + \
        'globalThis.missalBlessingData = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n'


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    output = ROOT / 'JS file/multilingual_blessing_data.js'
    content = build()
    if args.check:
        assert output.read_text(encoding='utf-8') == content, 'Multilingual blessing data is stale'
    else:
        output.write_text(content, encoding='utf-8')
    print('Latin, Italian, Portuguese, Vietnamese and Japanese solemn blessing originals verified.')
