"""Structured supplementary parish directories, with exact parish matching."""
import concurrent.futures
import re
from urllib.parse import urljoin, urlparse

from bs4 import BeautifulSoup


def enrich(entries, api):
    clean, unique, fetch = api.clean, api.unique, api.fetch
    errors, counts = [], {}
    normalize = api.BUILDER.normalized_korean_parish_name

    def match(diocese, name, phone=''):
        key = normalize(name)
        found = [e for e in entries if e['diocese'] == diocese and any(normalize(n) == key for n in [e['name'], e['directoryName'], *e.get('aliases', [])])]
        if len(found) == 1:
            return found[0]
        number = re.sub(r'\D', '', phone.split('/')[0].split(',')[0])
        found = [e for e in entries if e['diocese'] == diocese and number and number == re.sub(r'\D', '', e.get('phone', '').split(',')[0])]
        return found[0] if len(found) == 1 else None

    def merge(record):
        target = match(record['diocese'], record['name'], record.get('phone', ''))
        if target is None:
            return False
        url = record['sourceUrl']
        if record.get('massTimes'):
            target.update(massTimes=record['massTimes'], massTimesSourceUrl=url,
                          massTimesCheckedAt=api.TODAY, massTimesStatus='published')
            if record.get('massTimesPeriod'):
                target['massTimesPeriod'] = record['massTimesPeriod']
            else:
                target.pop('massTimesPeriod', None)
        if record.get('priestNames'):
            target.update(priestNames=record['priestNames'], priestAssignments=record.get('priestAssignments', []),
                          clergySourceUrl=url, clergyCheckedAt=api.TODAY, clergyStatus='published')
        if record.get('sisterCongregations'):
            target['sisterCongregations'] = record['sisterCongregations']
            target['sistersSourceUrl'] = url
        target['sourceUrls'] = unique([*target.get('sourceUrls', []), target['sourceUrl'], url])
        return True

    def batch(items, callback, label):
        result = api.process(items, callback, 6, label, errors)
        counts[label] = dict(listed=len(items), checked=len(result), matched=sum(merge(item) for item in result), timetables=sum(bool(item.get('massTimes')) for item in result))
        return result

    def table_detail(item):
        url, name, diocese = item
        soup = BeautifulSoup(fetch(url), 'html.parser')
        masses, priests, assignments, congregations, phone = [], [], [], [], ''
        for tr in soup.select('table tr'):
            cells = tr.find_all(['th', 'td'], recursive=False)
            if len(cells) < 2:
                continue
            label = clean(cells[0].get_text(' ', strip=True))
            text = clean(cells[1].get_text(' ', strip=True))
            if re.fullmatch(r'[월화수목금토일]|주일|[월화수목금토일]요일', label) and re.search(r'\d{1,2}\s*[:：]\s*\d{2}', text):
                masses.append(label + ' ' + text)
            if '신부' in label and text not in ['-', '정보 없음', '없음', '']:
                priests.append(text)
                assignments.append(dict(name=text, role=label, sourceUrl=url))
            if label in ['수녀회', '수녀원'] and api.valid_community(text):
                congregations.append(text)
            if label in ['전화번호', '본당전화']:
                phone = text
        if diocese == '대구대교구':
            for title in soup.select('.church_title'):
                if clean(title.get_text()) == '미사 시간':
                    content = title.find_next_sibling('div', class_='church_item_wrap')
                    if content:
                        lines = [clean(line) for line in content.get_text('\n', strip=True).splitlines()]
                        # Keep the source's AM/PM and seasonal notation verbatim.
                        masses = [line for line in lines if line and not line.startswith('※')]
                        if not any(re.search(r'\d{1,2}:\d{2}', line) for line in masses):
                            masses = []
        period = ''
        for dl in soup.select('.time_info .time dl'):
            day, value = dl.find('dt'), dl.find('dd')
            if day and value and re.fullmatch(r'[월화수목금토일]|주일', clean(day.get_text())):
                text = clean(value.get_text(' ', strip=True))
                if re.search(r'\d{1,2}:\d{2}', text):
                    masses.append(clean(day.get_text()) + ' ' + text)
        period_node = soup.select_one('.time_info h6 span')
        if period_node:
            period = clean(period_node.get_text(' ', strip=True))
        return dict(name=name, diocese=diocese, phone=phone, massTimes=unique(masses), massTimesPeriod=period,
                    priestNames=unique(priests), priestAssignments=assignments,
                    sisterCongregations=unique(congregations), sourceUrl=url)

    # Daejeon's canonical page includes one labelled modal per parish.
    daejeon_url = 'https://www.djcatholic.or.kr/home/pages/church.php'
    soup = BeautifulSoup(fetch(daejeon_url), 'html.parser')
    daejeon = []
    for heading in soup.select('h3'):
        text = clean(heading.get_text())
        if not text.endswith('본당정보'):
            continue
        container = heading.parent.parent.parent
        values, cells = {}, {}
        for li in container.select('ul.share-list li'):
            spans = li.find_all('span', recursive=False)
            if len(spans) >= 2:
                label = clean(spans[0].get_text())
                values[label] = clean(' '.join(span.get_text(' ', strip=True) for span in spans[1:]))
                cells[label] = spans[-1]
        priests, assignments = [], []
        for label in ['주임신부/전화', '보좌신부/전화', '제2보좌신부/전화']:
            person = clean(values.get(label, '').split('/')[0])
            if person:
                name = person + ' 신부'
                priests.append(name)
                assignments.append(dict(name=name, role=label.split('/')[0], sourceUrl=daejeon_url))
        timetable = cells.get('미사시간')
        masses = [clean(line).lstrip('▶ ') for line in timetable.get_text('\n', strip=True).splitlines()] if timetable else []
        community = clean(values.get('수녀원/전화', '').split('/')[0])
        daejeon.append(dict(name=text.removesuffix('본당정보').strip(), diocese='대전교구', sourceUrl=daejeon_url,
                            phone=values.get('본당전화/팩스', ''), priestNames=priests, priestAssignments=assignments,
                            sisterCongregations=[community] if api.valid_community(community) else [],
                            massTimes=[line for line in masses if re.search(r'\d', line)]))
    counts['Daejeon official'] = dict(checked=len(daejeon), matched=sum(merge(item) for item in daejeon), timetables=sum(bool(item['massTimes']) for item in daejeon))

    # Busan uses separate paginated deaneries; include every listed deanery.
    busan_base = 'https://www.catholicbusan.or.kr'
    busan_links = {}
    def busan_page(url):
        s = BeautifulSoup(fetch(url), 'html.parser')
        return [urljoin(busan_base, a['href']) for a in s.select('a[href]') if '/church/parish/view/' in a['href']]
    pages = [f'{busan_base}/church/parish/{d}?page={p}' for d in range(1, 12) for p in range(1, 4)]
    for group in api.process(pages, busan_page, 6, 'Busan lists', errors):
        for url in group:
            busan_links[url.split('?')[0]] = url.split('?')[0]
    def busan_detail(url):
        s = BeautifulSoup(fetch(url), 'html.parser')
        heading = next((h for h in s.select('h1,h2,h3,h4,h5,h6') if clean(h.get_text()).endswith('성당')), None)
        if not heading:
            raise RuntimeError('Busan parish name missing: ' + url)
        return table_detail((url, clean(heading.get_text()).removesuffix('성당').strip(), '부산교구'))
    batch(list(busan_links), busan_detail, 'Busan official')

    daegu_base = 'https://www.daegu-archdiocese.or.kr'
    soup = BeautifulSoup(fetch(daegu_base + '/page/area.html?srl=church_search'), 'html.parser')
    daegu_links = {a['href']: clean(a.get_text(' ', strip=True)) for a in soup.select('a[href]') if 'y_id=' in a['href'] and clean(a.get_text())}
    batch([(urljoin(daegu_base, url), name, '대구대교구') for url, name in daegu_links.items()], table_detail, 'Daegu official')

    gj_base = 'https://www.gjcatholic.or.kr'
    soup = BeautifulSoup(fetch(gj_base + '/church/parish'), 'html.parser')
    gj_links = {a['href']: clean(a.get_text(' ', strip=True)) for a in soup.select('a[href]') if re.search(r'/church/parish/view/\d+', a['href'])}
    batch([(urljoin(gj_base, url), name, '광주대교구') for url, name in gj_links.items()], table_detail, 'Gwangju official')

    jj_base = 'https://www.jcatholic.or.kr/theme/main/pages/'
    soup = BeautifulSoup(fetch(jj_base + 'area.php'), 'html.parser')
    jj_links = []
    for row in soup.select('tbody tr[onclick]'):
        link = re.search(r"location.href='([^']+)'", row['onclick'])
        name = row.select_one('td.name')
        if link and name:
            jj_links.append((urljoin(jj_base, link.group(1)), clean(name.get_text()).removesuffix('성당').strip(), '전주교구'))
    batch(jj_links, table_detail, 'Jeonju official')

    cj_base = 'https://www.cdcj.or.kr'
    soup = BeautifulSoup(fetch(cj_base + '/parish/parish'), 'html.parser')
    cj_links = {a['href']: clean(a.get_text(' ', strip=True)) for a in soup.select('a[href]') if re.search(r'/parish/parish/view/\d+', a['href'])}
    batch([(urljoin(cj_base, url), name, '청주교구') for url, name in cj_links.items()], table_detail, 'Cheongju official')

    # These explicitly dated current appointments exclude the historical rows.
    sister_url = 'https://gamgol.casuwon.or.kr/bbs/content.php?co_id=priests'
    soup = BeautifulSoup(fetch(sister_url), 'html.parser')
    target = match('수원교구', '감골')
    if target:
        sisters = [clean(item.select_one('dd p').get_text()) + ' 수녀' for item in soup.select('dl.nun_item') if '현재' in item.get_text() and item.select_one('dd p')]
        if sisters:
            target.update(sisterNames=unique(sisters), sisterPersonalSourceUrl=sister_url,
                          sistersSourceUrl=sister_url, sistersCheckedAt=api.TODAY, sistersStatus='published')
            target['sourceUrls'] = unique([*target.get('sourceUrls', []), sister_url])
            counts['Gamgol current sisters'] = len(sisters)
    return dict(sources=counts, errors=errors)
