"""Index the approved Cono Sur lectionary and country rubrics from archived HTML."""
from __future__ import annotations

import argparse
import importlib.util
import json
import re
from collections import defaultdict
from pathlib import Path
from urllib.parse import urljoin

from bs4 import BeautifulSoup

SPEC = importlib.util.spec_from_file_location('cono_sur_mass', Path(__file__).with_name('build-cono-sur-mass.py'))
MASS = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MASS)
COUNTRIES = MASS.COUNTRIES
NATIONS = {name.lower():code for code,name in COUNTRIES.items()}
ORIGIN = 'https://www.curas.com.ar/Leccionarios/'
MISSAL_DIR = 'https://curas.com.ar/Misal3/Misas3/'
RANKS = {'solemnidad':'solemnity','fiesta':'feast','memoria obligatoria':'memorial','memoria libre':'optional'}
MONTHS = ('enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre')
WEEKDAYS = ('domingo','lunes','martes','miercoles','jueves','viernes','sabado')
PARTS = {
    'antifona de entrada':'entrance','oracion colecta':'collect','oracion sobre las ofrendas':'prayer_offerings',
    'antifona de comunion':'communion','antifona de la comunion':'communion',
    'oracion despues de la comunion':'prayer_after','oracion despues de la comunion.':'prayer_after'
}
CALENDAR_SOURCE = {
    'AR':'https://curas.com.ar/Calendario/Calendario_lit%C3%BArgico_2026_para_la_Argentina.pdf',
    'BO':'https://evangelizacion.ceb.bo/calendario-liturgico-2/',
    'CL':'https://www.iglesia.cl/tiempos_liturgicos.php',
    'PY':'https://episcopal.org.py/?p=437',
    'UY':'https://iglesiacatolica.org.uy/wp-content/uploads/2012/07/Decreto-sobre-Liturgia.pdf'
}


def linked_rows(directory, link):
    book = BeautifulSoup((directory / (link + '.html')).read_text(encoding='utf-8'), 'html.parser')
    for row in book.select('tr'):
        cells = row.find_all('td', recursive=False)
        items = row.select('a[href]')
        if items and cells:
            yield MASS.fold(cells[0].get_text(' ', strip=True)), [urljoin(ORIGIN, a['href']) for a in items]


def lectionary(directory):
    routes = {}
    for label, links in linked_rows(directory,'ferial'):
        url = links[0]
        daypath = re.search(r'L(\d\d)semtoi.htm',url)
        if daypath:
            routes['ordinary-'+str(int(daypath[1]))] = links[:2]
            continue
        mapping = {
            'primera semana de adviento':'advent-1','segunda semana de adviento':'advent-2',
            'tercera semana de adviento':'advent-3','ferias de adviento desde el 17 al 24 de diciembre':'advent-dates',
            'ferias del tiempo de navidad (desde el 29 de diciembre al 12 de enero)':'christmas-dates',
            'miercoles de ceniza':'lent-0-3','jueves despues de ceniza':'lent-0-4','viernes despues de ceniza':'lent-0-5','sabado despues de ceniza':'lent-0-6'
        }
        if label in mapping:
            routes[mapping[label]] = url
        else:
            weeks = ('primera','segunda','tercera','cuarta','quinta','sexta','septima')
            for season,name in [('lent','cuaresma'),('easter','pascua')]:
                for index, week in enumerate(weeks,1):
                    if label == week+' semana de '+name:
                        routes[f'{season}-{index}']=url
    season = 'advent'
    solemnity = {
       'la sagrada familia de jesus, maria y jose':'holy_family','epifania del senor':'epiphany',
       'bautismo del senor':'baptism','la ascension del senor':'ascension',
       'solemnidad de la santisima trinidad':'trinity',
       'solemnidad del sagrado cuerpo y sangre de cristo':'corpus_christi',
       'solemnidad del sagrado corazon de jesus':'sacred_heart',
       'domingo de ramos':'palm_sunday','lunes santo':'holy_monday','martes santo':'holy_tuesday',
       'miercoles santo':'holy_wednesday','misa vespertina de la cena del senor':'holy_thursday',
       'viernes santo':'good_friday','vigilia pascual en la noche santa':'easter_vigil',
       'solemnidad de santa maria, madre de dios':'mary_mother_of_god','domingo segundo despues de navidad':'christmas_sunday_2'
    }
    for label,links in linked_rows(directory,'dominical'):
        path=links[0]
        if '/Dominical/L' in path:
            match=re.search(r'/L(\d+)dgoto',path)
            if match:
                routes['sunday-ordinary-'+match[1]]=links
        elif (match:=re.search(r'/L(?:advdgo([1-4])|([1-5])dgocuaresma)',path,re.I)):
            routes['sunday-'+('advent-'+match[1] if match[1] else 'lent-'+match[2])]=links
        elif (match:=re.search(r'/L([2-7])dgopascua',path,re.I)):
            routes['sunday-easter-'+match[1]]=links
        if label in solemnity:
            routes[solemnity[label]]=[url.replace('.htm.htm','.htm') for url in links]
        elif label=='misa del dia':
            key='christmas_day' if 'L2512' in path else 'pentecost' if 'pent' in path.lower() else 'easter_day'
            routes[key]=links
        elif label=='misa vespertina de la vigilia':
            routes['christmas_vigil' if 'Ladv2512' in path else 'pentecost_vigil']=links
        elif label=='misa de la noche':
            routes['christmas_night']=links
        elif label=='misa de la aurora':
            routes['christmas_dawn']=links
    fixed=defaultdict(list)
    book=BeautifulSoup((directory/'feasts.html').read_text(encoding='utf-8'),'html.parser')
    for row in book.select('tr'):
        cells=row.find_all('td',recursive=False)
        if len(cells)!=12 or not cells[0].get_text(strip=True).isdigit():
            continue
        day=int(cells[0].get_text(strip=True))
        for month,cell in enumerate(cells,1):
            for a in cell.select('a[href]'):
                url=urljoin(ORIGIN,a['href'])
                try:
                    source=MASS.archive(directory,url)
                except FileNotFoundError:
                    continue
                header=MASS.rows(source.body)
                title=next((MASS.txt(x) for x in header if len(MASS.txt(x))>9),'')
                fixed[f'{month:02d}-{day:02d}'].append({'title':title,'url':url})
    return routes,dict(fixed)


def read_propers(nodes):
    data, field, lines = {}, '', []
    def flush():
        if field and lines and field not in data:
            data[field]='\n'.join(lines)
        lines.clear()
    for node in nodes:
        for row in MASS.rows(node):
            text=MASS.txt(row)
            clean=MASS.fold(text)
            match=next((key for key in PARTS if clean==key or clean.startswith(key+' ')),None)
            if match:
                flush()
                field=PARTS[match]
                citation=text[len(match):].strip(' .')
                if citation:
                    lines.append(citation)
                continue
            if row.get('rubric_es') or re.match(r'^(?:prefacio|se dice|puede impartirse|o bien|leccionario)\b',clean):
                flush()
                field=''
                continue
            if field:
                lines.append(text)
    flush()
    return data


def section_blocks(document, header):
    paragraphs=document.body.find_all('p')
    for i,node in enumerate(paragraphs):
        info=header(node)
        if not info:
            continue
        end=next((j for j in range(i+1,len(paragraphs)) if header(paragraphs[j])),len(paragraphs))
        yield node, info, paragraphs[i+1:end]


def missal(directory):
    temporal, fixed = {}, defaultdict(list)
    election={code:{} for code in COUNTRIES}
    for month,month_name in enumerate(MONTHS,1):
        url=f'{MISSAL_DIR}Msantos3.{month:02d}.htm'
        document=MASS.archive(directory,url)
        def date_heading(node):
            text=MASS.normalize(node.get_text(' ',strip=True))
            return re.match(rf'^(?:{month_name}\s+)?(\d{{1,2}})[°º.]?\s+de {month_name}\b',MASS.fold(text)) if len(text)<330 else None
        blocks=list(section_blocks(document,date_heading))
        for node, match, values in blocks:
            label=[MASS.txt(r) for r in MASS.rows(node)]
            day=f'{month:02d}-{int(match[1]):02d}'
            title=next((x for x in label if re.match(r'^(?:san(?:t[oa]s?)?\b|beato\b|beata\b|nuest[ra]|bienaventurad|dedicaci|conmemoraci|inmaculada|todos los santos|natividad|presentaci|la visitaci)',MASS.fold(x))), '')
            if not title:
                continue
            follow=label[label.index(title)+1:]
            companions=next((line for line in follow if MASS.fold(line).startswith('y companeros')), '')
            if companions:
                title += ' ' + companions
            bookmark=next((a.get('name') for a in node.select('a[name]')), '')
            src=url+('#'+bookmark if bookmark else '')
            data=read_propers(values)
            if data:
                fixed[day].append({'title':title,'kind':'proper','source':{'url':src},'data':data})
            for line in label:
                match_country=re.match(r'^en (.+?):\s*(solemnidad|fiesta|memoria obligatoria|memoria libre)\b',MASS.fold(line))
                if not match_country:
                    continue
                for name,code in NATIONS.items():
                    if re.search(r'\b'+name+r'\b',match_country[1]):
                        election[code][day]={'title':title,'rank':RANKS[match_country[2]],'sourceUrl':src}
    for name,stem in [('ordinary','Mdda3.htm'),('advent','Madviento3.htm'),('lent','Mcuaresma3.htm'),('easter','Mpascua3.htm'),('christmas','Mnavidad3.htm')]:
        url=MISSAL_DIR+stem
        def seasonal_heading(node):
            label=MASS.normalize(node.get_text(' ',strip=True))
            if len(label)>105:
                return None
            folded=MASS.fold(label)
            numbered=re.match(r'^([ivxl]+)\s+(?:domingo|semana)\b',folded)
            if numbered:
                return f'{name}-{MASS.roman(numbered[1])}-0'
            weekday=re.match(r'^(lunes|martes|miercoles|jueves|viernes|sabado)\s+([ivxl]+)\s+de\b',folded)
            if weekday:
                return f'{name}-{MASS.roman(weekday[2])}-{WEEKDAYS.index(weekday[1])}'
            date=re.match(r'^(\d{1,2})\s+de\s+(diciembre|enero)\b',folded)
            if date:
                return 'date-'+('12' if date[2]=='diciembre' else '01')+f'-{int(date[1]):02d}'
            return None
        for node,key,values in section_blocks(MASS.archive(directory,url),seasonal_heading):
            data=read_propers(values)
            if data:
                temporal[key]={'title':MASS.normalize(node.get_text(' ',strip=True)),'kind':'temporal','source':{'url':url},'data':data}
    fixed=dict(fixed)
    return {'temporal':temporal,'calendar':fixed,'catalog':[]},election


def primary_calendars(directory):
    output={code:{} for code in COUNTRIES}
    for code in ('AR','BO','CL'):
        for year in (2026,2027):
            url=f'https://gcatholic.org/calendar/{year}/{code}-es'
            document=MASS.archive(directory,url)
            for tr in document.select('tr[id]'):
                if not re.fullmatch(r'\d{4}',tr['id']):
                    continue
                cells=tr.find_all('td',recursive=False)
                if len(cells)<4:
                    continue
                rank=cells[2].get_text(strip=True)
                labels=cells[3].select('p.indent')
                label=next((p for p in labels if p.select_one('.feast1, .feast2, .feast3')),None)
                if rank not in {'S','F','M'} or not label:
                    continue
                title=re.sub(r'\s+([,;.])',r'\1',MASS.normalize(label.get_text(' ',strip=True)))
                if not title:
                    continue
                month,day=tr['id'][:2],tr['id'][2:]
                color=next((value for value,code in [('red','r'),('green','g'),('purple','v'),('white','w')]
                            if label.select_one('.feast'+code)), 'white')
                output[code][f'{year}-{month}-{day}']={'title':title,'names':{'ES':title},'color':color,
                    'rank':{'S':'solemnity','F':'feast','M':'memorial'}[rank],'sourceUrl':url+'#'+tr['id']}
    return output


def main():
    parser=argparse.ArgumentParser()
    parser.add_argument('archive',type=Path)
    parser.add_argument('output',type=Path)
    args=parser.parse_args()
    propers, national_fixed=missal(args.archive)
    dynamic=primary_calendars(args.archive)
    routes,fixed=lectionary(args.archive)
    overrides = {
       'AR': {'05-08':('Nuestra Señora de Luján','solemnity','lujan','white')},
       'BO': {'07-16':('Nuestra Señora del Carmen, Patrona de Bolivia','solemnity','virgendelcarmen','white')},
       'CL': {'07-16':('Nuestra Señora del Carmen, Madre y Reina de Chile','solemnity','virgendelcarmen','white')},
       'PY': {'12-08':('Inmaculada Concepción de la Virgen María · Virgen de Caacupé','solemnity','caacupe','white')},
       'UY': {'05-08':('Nuestra Señora de Luján','optional','lujan','white'),
              '11-08':('Nuestra Señora de los Treinta y Tres, Patrona del Uruguay','solemnity','treintaytres','white')}
    }
    native={}
    for c,name in COUNTRIES.items():
        days=national_fixed[c]
        for day,(title,rank,slug,color) in overrides[c].items():
            days[day]={'title':title,'rank':rank,'color':color,'observanceId':'particular-'+day+'-'+slug,'sourceUrl':CALENDAR_SOURCE[c]}
            if c in {'AR','BO','CL'}:
                for y in (2026,2027):
                    entry=dynamic[c].get(str(y)+'-'+day)
                    if entry and re.search(r'luj|carmen',MASS.fold(entry['title'])):
                        entry['observanceId']='particular-'+day+'-'+slug
        for day,entry in days.items():
            entry['names']={'ES':entry['title']}
        native[c]={'jurisdictionName':name,'ordinaryLanguage':'ES','ordinaryDataset':'AR',
                   'ordinaryEdition':'Misal Romano · tercera edición típica, castellano del Cono Sur',
                   'ordinarySource':{'title':'Misal Romano del Cono Sur','url':MASS.MISSAL},
                   'source':{'title':'Calendario litúrgico de '+name,'calendarUrl':CALENDAR_SOURCE[c]},
                   'dailyReadings':{'provider':'Arzobispado de Santiago' if c=='CL' else 'Leccionario del Cono Sur',
                                    'translation':'El Libro del Pueblo de Dios','calendar':name,'urlStrategy':'cono-sur'},
                   'calendar':days,'dynamicCalendarByDate':dynamic[c]}
    native['AR']['conoSurLectionary']={'temporal':routes,'calendar':fixed}
    native['AR']['missalPrayerData']=propers
    print('Lectionary plans:',len(routes),len(fixed),'Missal:',len(propers['temporal']),len(propers['calendar']),
          'National calendars:',{c:(len(entry['calendar']),len(entry['dynamicCalendarByDate'])) for c,entry in native.items()})
    args.output.write_text(json.dumps(native,ensure_ascii=False),encoding='utf-8')


if __name__=='__main__':
    main()
