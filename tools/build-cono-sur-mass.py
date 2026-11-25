"""Import the approved Cono Sur Ordinary from archived Curas.com.ar HTML."""
from __future__ import annotations

import argparse
import json
import re
import unicodedata
from pathlib import Path
from urllib.parse import quote, urljoin, urlparse

from bs4 import BeautifulSoup, NavigableString, Tag

from mass_ordinary_structure import pretty_js

ROOT = Path(__file__).resolve().parents[1]
MISSAL = 'https://curas.com.ar/Misal3/Misas3.htm'
COUNTRIES = {'AR': 'Argentina', 'BO': 'Bolivia', 'CL': 'Chile', 'PY': 'Paraguay', 'UY': 'Uruguay'}
BLOCKS = {'p', 'h1', 'h2', 'h3', 'h4', 'div', 'td', 'li', 'br', 'hr'}
ROLES = re.compile(r'^(V\.|R\.|CP o CC|CP|CC|C[1234])(?:\s+|$)', re.I)
NUMBER = re.compile(r'^\d+\.$')


def normalize(text):
    return unicodedata.normalize('NFC', re.sub(r'\s+', ' ', text).strip())


def fold(text):
    return ''.join(c for c in unicodedata.normalize('NFD', normalize(text).lower()) if not unicodedata.combining(c))


def archive(directory, url):
    return BeautifulSoup((directory / (quote(urlparse(url).path, safe='') + '.html')).read_text(encoding='utf-8'), 'html.parser')


def rows(node, preserve_numbers=False):
    result = []
    pieces = []
    rubric = False
    speaker = ''

    def flush():
        nonlocal pieces, speaker
        text = normalize(''.join(pieces))
        pieces = []
        if not text:
            return
        if re.fullmatch(r'[+†‡✝✟]', text):
            if result and 'text_es' in result[-1]:
                result[-1]['text_es'] += ' ✠'
            else:
                result.append({'text_es': '✠'})
            return
        text = re.sub(r'(?<=\s)[+†‡✝✟](?=\s)', '✠', text)
        role = ROLES.match(text) if rubric else None
        if role:
            speaker = role[1]
            text = text[role.end():].strip()
            if not text:
                return
        if NUMBER.fullmatch(text) and not preserve_numbers:
            return
        if rubric:
            result.append({'rubric_es': text})
        else:
            result.append({'text_es': text, **({'sp_es': speaker} if speaker else {})})
            speaker = ''

    def visit(element, is_rubric=False):
        nonlocal rubric
        if isinstance(element, NavigableString):
            if pieces and rubric != is_rubric and str(element).strip():
                flush()
            if not pieces:
                rubric = is_rubric
            if not str(element).strip() and not pieces:
                return
            pieces.append(str(element))
            return
        if not isinstance(element, Tag) or element.name in {'script', 'style', 'head', 'noscript'}:
            return
        color = element.get('color', '').lower()
        style = element.get('style', '').replace(' ', '').lower()
        is_rubric = is_rubric or color in {'red', '#ff0000', '#f00'} or bool(re.search(r'color:(?:red|#ff0000|#f00)(?:;|$)', style))
        if element.name in BLOCKS:
            flush()
        for child in element.children:
            visit(child, is_rubric)
        if element.name in BLOCKS:
            flush()

    visit(node)
    flush()
    return result


def txt(row):
    return row.get('text_es') or row.get('rubric_es') or ''


def locate(all_rows, expression, start=0, stop=None):
    return next(i for i in range(start, stop if stop is not None else len(all_rows))
                if re.search(expression, txt(all_rows[i]), re.I))


def body(all_rows):
    return [r for r in all_rows if not NUMBER.fullmatch(txt(r))]


def shape(lines, speaker=''):
    return {'text_es':lines, **({'sp_es':speaker} if speaker else {})}


def part(identifier, title, lines, **fields):
    return {'id':identifier, 'type':'part','header':{'es':title},'lines':body(lines),**fields}


def selectable(identifier, title, choices, **fields):
    return {'id':identifier,'type':'selectable','header':{'es':title},
            'variants':{key:{'label':{'es':label},'lines':body(lines)} for key,label,lines in choices},**fields}


def section(identifier, title):
    return {'id':identifier,'type':'section','es':title}


def roman(text):
    table={'I':1,'V':5,'X':10,'L':50}
    vals=[table[ch] for ch in text.upper()]
    return sum(-v if i+1<len(vals) and vals[i+1]>v else v for i,v in enumerate(vals))


def song_key(title):
    key = fold(title)
    numeral = re.search(r'\b([ivx]+)\b', key)
    groups = [('durante el ano', 'ordinary'), ('comun', 'common'), ('adviento','advent'), ('navidad','christmas'),
              ('cuaresma','lent'), ('pasion','passion'), ('pascua','easter'), ('difuntos','dead'),
              ('apostoles','apostles'), ('martires','martyrs')]
    if numeral:
        for phrase, prefix in groups:
            if phrase in key:
                return f'{prefix}_{roman(numeral[1])}'
    return re.sub(r'[^a-z0-9]+','_',key.removeprefix('prefacio ')).strip('_')


def prefaces(directory):
    url = urljoin(MISSAL,'Prefacios3/Prefacios3.htm')
    result = {}
    for link in archive(directory,url).select('a[href]'):
        source = urljoin(url, link['href'])
        all_rows = rows(archive(directory,source).body)
        positions = [i for i,row in enumerate(all_rows) if re.match(r'^PREFACIO\b',txt(row)) and not txt(row).endswith('.')]
        alternate_title = ''
        for start,end in zip(positions,positions[1:]+[len(all_rows)]):
            block = all_rows[start:end]
            if len(block)==1:
                alternate_title=txt(block[0])
                continue
            start_text = locate(block,r'^(?:En verdad|Realmente es justo|Te damos gracias|Con razón)',1)
            sanctus = locate(block,r'^Santo,\s*Santo',start_text)
            title = alternate_title or txt(block[0])
            alternate_title = ''
            subtitle = txt(block[1])
            key = song_key(title)
            if key in result:
                raise ValueError(f'Duplicate preface {title}: {key}')
            result[key] = {'title':{'es':title},'subtitle':{'es':subtitle},'source':{'url':source},'content':body(block[start_text:sanctus])}
    may = urljoin(MISSAL, 'Misas3/Msantos3.05.htm')
    may_rows = rows(archive(directory, may).body)
    lujan = locate(may_rows, r'^Santa María de Luján, Madre del pueblo argentino$')
    start = locate(may_rows, r'^En verdad es justo', lujan)
    end = locate(may_rows, r'^Santo,\s*Santo', start)
    result['particular_ar_lujan'] = {
        'title':{'es':'Prefacio de Nuestra Señora de Luján'},
        'subtitle':{'es':txt(may_rows[lujan])},
        'source':{'url':may}, 'content':body(may_rows[start:end])
    }
    november = urljoin(MISSAL, 'Misas3/Msantos3.11.htm')
    november_rows = rows(archive(directory, november).body)
    start = locate(november_rows, r'^NUESTRA SEÑORA, LA VIRGEN DE LOS TREINTA Y TRES$')
    for number, numeral in [(1, 'I'), (2, 'II')]:
        marker = locate(november_rows, r'^Prefacio:$', start)
        start = locate(november_rows, r'^(?:En verdad|Realmente) es justo', marker)
        end = locate(november_rows, r'^Santo,\s*Santo', start)
        result[f'particular_uy_treinta_y_tres_{number}'] = {
            'title':{'es':f'Prefacio de Nuestra Señora, la Virgen de los Treinta y Tres {numeral}'},
            'source':{'url':november}, 'content':body(november_rows[start:end])
        }
        start = end + 1
    if len(result) < 60:
        raise ValueError(f'Only {len(result)} prefaces were extracted.')
    return result


def build_ordinary(directory, songs):
    source = urljoin(MISSAL, 'Misas3/Mordinario3.htm')
    all_rows = rows(archive(directory,source).body,True)
    indices = {}
    for i,row in enumerate(all_rows):
        if NUMBER.fullmatch(txt(row)):
            indices.setdefault(int(txt(row)[:-1]),i)
    def cut(first,end):
        return all_rows[indices[first]:indices[end]]
    def prefix(lines, pattern):
        return lines[:locate(lines,pattern)]
    def suffix(lines, pattern):
        return lines[locate(lines,pattern):]
    forms, endings, labels = {}, {}, {}
    specifications = [('1','Plegaria1.htm',84,98),('2','Plegaria2.htm',100,106),
                      ('3','Plegaria3.htm',108,115),('4','Plegaria4.htm',None,123)]
    for key, filename, begin, finish in specifications:
        form_url = urljoin(MISSAL,'Plegarias3/'+filename)
        form = rows(archive(directory,form_url).body,True)
        labels[key] = {'label':{'es':txt(form[0]).capitalize()}}
        start = locate(form, r'^'+str(begin)+r'\.$') if begin else locate(form,r'^(?:En verdad|Realmente) es justo')
        end = locate(form, r'^'+str(finish)+r'\.$',start)
        forms[key] = body(form[start:end])
        endings[key] = body(prefix(form[end:],r'^Después sigue'))
        if key=='2':
            entry = locate(form,r'^(?:En verdad|Realmente) es justo')
            last = locate(form,r'^Santo,\s*Santo',entry)
            songs['eucharistic_2'] = {'title':{'es':'Prefacio de la plegaria eucarística II'},'source':{'url':form_url},'content':body(form[entry:last])}
    dialog = cut(31,32)
    pen = cut(4,7)
    second,third = locate(pen,r'^5\.$'),locate(pen,r'^6\.$')
    first = pen[:second]
    first = prefix(first,r'^O bien \(segunda forma')
    pen2 = prefix(pen[second:third],r'^O bien:\s*\(tercera forma')
    pen3 = pen[third:]
    dismiss = cut(144,145)
    final = suffix(dismiss,r'^El pueblo responde')
    dismiss = dismiss[:len(dismiss)-len(final)]
    first_dismiss = locate(dismiss,r'^Pueden ir en paz')
    separators = [i for i,x in enumerate(dismiss) if txt(x).startswith('O bien')]
    bounds = [first_dismiss,*separators,len(dismiss)]
    first_collect = cut(9,10)
    collect = prefix(first_collect,r'^Amén') + [shape('(Oración colecta del día)'),shape('Amén.','R.')]
    dismissal = [(str(i+1),' '.join(txt(r) for r in dismiss[start:end] if 'text_es' in r),dismiss[:first_dismiss]+dismiss[start:end]+final)
                 for i,(start,end) in enumerate(zip(bounds,bounds[1:]))]
    creed1 = prefix(cut(18,19),r'^19\.$') if any(txt(x)=='19.' for x in cut(18,19)) else cut(18,19)
    intro = [
        section('1. THE INTRODUCTORY RITES','Ritos iniciales'),
        part('1.1 entrance','Antífona de entrada',[shape('(Antífona de entrada del día)')]),
        part('1.2 greeting','Saludo',prefix(cut(1,4),r'^Acto penitencial$')),
        selectable('1.3 penitential','Acto penitencial',[('A','Confesión general',first),('B','Señor, ten misericordia',pen2),('C','Invocaciones',pen3)]),
        part('1.4 kyrie','Señor, ten piedad',cut(7,8)),
        part('1.5 gloria','Gloria',cut(8,9),**{'if':'sunday'}),
        part('1.6 collect','Oración colecta',collect),
        section('2. THE LITURGY OF THE WORD','Liturgia de la Palabra'),
        part('2.1 reading1','Primera lectura',[shape('(Primera lectura del día)')]),
        part('2.2 psalm','Salmo responsorial',[shape('(Salmo responsorial del día)')]),
        part('2.3 reading2','Segunda lectura',[shape('(Segunda lectura del día)')],**{'if':'sunday'}),
        part('2.4 Sequence','Secuencia',[shape('(Secuencia del día)')],**{'if':'easter_or_pentecost'}),
        part('2.5 gospel_accl','Aclamación antes del Evangelio',[shape('(Aclamación antes del Evangelio)')]),
        part('2.6 gospel','Evangelio',[shape('(Evangelio del día)')]),
        part('2.7 homily','Homilía',cut(17,18)),
        selectable('2.8 creed','Profesión de fe',[('1','Credo niceno-constantinopolitano',creed1),('2','Símbolo de los Apóstoles',cut(19,20))],**{'if':'sunday'}),
        part('2.9 universal','Oración universal',prefix(cut(20,21),r'^Liturgia Eucarística'),**{'if':'sunday'}),
        section('3. THE LITURGY OF THE EUCHARIST','Liturgia eucarística'),
        part('3.1 offertory','Preparación de los dones',cut(21,30)),
        part('3.2 prayer_offerings','Oración sobre las ofrendas',[shape('(Oración sobre las ofrendas del día)'),shape('Amén.','R.')]),
        {'id':'3.3 eucharist','type':'selectable','isEucharist':True,'ordinarySourceLayoutVersion':1,
         'header':{'es':'Plegaria eucarística'},'variants':labels,'songs':songs,'forms':forms,'formEndings':endings,'amen':[],
         'common_dialogue':body(prefix(dialog,r'^Santo,\s*Santo')),'sanctus':body(suffix(dialog,r'^Santo,\s*Santo')),
         'formFrames':{k:{'sections':['dialogue',*(['preface','sanctus'] if k!='4' else []),'form','ending']} for k in forms}},
        part('3.4 lords_prayer','Padrenuestro',cut(124,126)),
        part('3.5 peace','Rito de la paz',cut(126,129)),
        part('3.6 lamb','Cordero de Dios',cut(129,131)),
        part('3.7 communion_rite','Comunión',cut(131,139)),
        part('3.8 communion','Antífona de comunión',[shape('(Antífona de comunión del día)')]),
        part('3.9 prayer_after','Oración después de la comunión',[shape('Oremos.','V.'),shape('(Oración después de la comunión del día)'),shape('Amén.','R.')]),
        section('4. THE CONCLUDING RITES','Rito de conclusión'),
        part('4.1 announcement','Avisos',cut(140,141)),
        selectable('4.2 blessing','Bendición',[('1','Bendición simple',cut(141,143)),('2','Bendición pontifical',cut(143,144))]),
        selectable('4.3 dismissal','Despedida',dismissal),
        part('4.4 final_song','Conclusión',prefix(all_rows[indices[145]:],r'^BENDICIONES SOLEMNES'))
    ]
    if not any('Yo confieso' in txt(row) for row in first):
        raise ValueError('The loose HTML text of the first penitential form was lost.')
    return intro


def main():
    cli=argparse.ArgumentParser()
    cli.add_argument('archive',type=Path)
    cli.add_argument('metadata',type=Path)
    args=cli.parse_args()
    ordinary = build_ordinary(args.archive,prefaces(args.archive))
    metadata=json.loads(args.metadata.read_text(encoding='utf-8'))
    destination=ROOT/'JS file'/'countries'/'cono-sur'/'cono_sur_mass.js'
    destination.parent.mkdir(parents=True,exist_ok=True)
    destination.write_text(
        "// Misal Romano, tercera edición típica en castellano del Cono Sur.\n"
        "(function registerConoSurMass(global) {\n  'use strict';\n"
        "  global.countryMassData ||= {};\n"
        "  const ordinary = Object.freeze("+pretty_js(ordinary)+");\n"
        "  const national = "+pretty_js(metadata)+";\n"
        "  global.countryMassData.AR = Object.freeze({\n"
        "    jurisdiction: 'AR', ordinary, ...national.AR\n"
        "  });\n"
        "  for (const code of ['BO', 'CL', 'PY', 'UY']) {\n"
        "    global.countryMassData[code] = Object.freeze({jurisdiction: code, ...national[code]});\n"
        "  }\n"
        "})(globalThis);\n",encoding='utf-8')
    print(f'{len(ordinary)} entries and {len(next(item["songs"] for item in ordinary if "songs" in item))} prefaces')


if __name__=='__main__':
    main()
