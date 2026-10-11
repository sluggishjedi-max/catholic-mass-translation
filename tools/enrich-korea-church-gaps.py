#!/usr/bin/env python3
"""Check remaining timetable gaps on websites linked by official directories."""
import concurrent.futures
import importlib.util
import json
import re
import sys
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

import korea_official_supplements

spec = importlib.util.spec_from_file_location('refresh', Path(__file__).with_name('refresh-korea-churches.py'))
api = importlib.util.module_from_spec(spec)
sys.modules['refresh'] = api
spec.loader.exec_module(api)
sys.stdout.reconfigure(encoding='utf-8')


def timetable(soup):
    clean = api.clean
    output = []
    for table in soup.select('table'):
        heading = table.find_previous(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
        signature = ' '.join(table.get('class', [])) + ' ' + table.get('id', '')
        if not re.search(r'mass|missa|misa|register05', signature, re.I) and not (heading and '미사' in heading.get_text()):
            continue
        lines = []
        for row in table.select('tr'):
            cells = row.find_all(['td', 'th'], recursive=False)
            if len(cells) < 2:
                continue
            label = clean(cells[0].get_text(' ', strip=True))
            value = clean(' '.join(cell.get_text(' ', strip=True) for cell in cells[1:]))
            if re.fullmatch(r'[월화수목금토일](?:요일)?|주일|주일미사|평일미사|토요미사|토요일미사|토요특전(?:미사)?', label) and re.search(r'\d{1,2}\s*[:：]\s*\d{2}|\d{1,2}\s*시', value):
                lines.append(label + ' ' + value)
        if len(lines) >= 2:
            output.extend(lines)
    for container in soup.select('.time_info .time, .mass_time, .mass-time, .misa_time, .misa-time'):
        for dl in container.select('dl'):
            day, times = dl.find('dt'), dl.find('dd')
            if not day or not times:
                continue
            label = clean(day.get_text(' ', strip=True))
            value = clean(times.get_text(' ', strip=True))
            if re.fullmatch(r'[월화수목금토일](?:요일)?|주일|주일미사|평일미사|토요미사', label) and re.search(r'\d{1,2}[:：]\d{2}|\d{1,2}\s*시', value):
                output.append(label + ' ' + value)
    return api.unique(output)


def home_detail(entry):
    original = entry['website']
    parsed = urlparse(original)
    url = original
    # The source supplies these website links; do not search unrelated domains.
    if parsed.scheme == 'http':
        url = 'https://' + parsed.netloc + parsed.path + ('?' + parsed.query if parsed.query else '')
    try:
        response = requests.get(url, timeout=15, headers={'User-Agent': 'OrderOfMassPublicDirectory/1.0'})
        response.raise_for_status()
        try:
            text = response.content.decode('utf-8-sig')
        except UnicodeDecodeError:
            text = response.content.decode('cp949')
        soup = BeautifulSoup(text, 'html.parser')
        schedule = timetable(soup)
        if schedule:
            return dict(entry=entry, url=response.url, massTimes=schedule)
        links = []
        for anchor in soup.select('a[href]'):
            label = api.clean(anchor.get_text(' ', strip=True))
            target = urljoin(response.url, anchor['href'])
            if re.fullmatch(r'미사\s*(?:시간|시간표|안내)', label) and urlparse(target).netloc == urlparse(response.url).netloc:
                if target not in links and target != response.url:
                    links.append(target)
        for target in links[:2]:
            response2 = requests.get(target, timeout=15)
            response2.raise_for_status()
            response2.encoding = response2.apparent_encoding or 'utf-8'
            schedule = timetable(BeautifulSoup(response2.text, 'html.parser'))
            if schedule:
                return dict(entry=entry, url=response2.url, massTimes=schedule)
        return dict(entry=entry, url=url, status='no-structured-timetable')
    except Exception as error:
        return dict(entry=entry, url=url, status='unreachable', error=type(error).__name__)


def main():
    entries = api.load_entries()
    # Run the inexpensive cached diocesan supplements, including Cheongju.
    supplemental = korea_official_supplements.enrich(entries, api)
    failures = supplemental['errors']
    blocked_hosts = ['cbck.or.kr', 'catholic.or.kr', 'daum.net', 'naver.com', 'facebook.com', 'instagram.com', 'youtube.com']
    candidates = [e for e in entries if not e.get('massTimes') and e.get('website', '').startswith(('http://', 'https://'))
                  and not any(urlparse(e['website']).hostname == host or urlparse(e['website']).hostname.endswith('.' + host) for host in blocked_hosts)]
    outcomes = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        for i, result in enumerate(pool.map(home_detail, candidates), 1):
            entry = result.pop('entry')
            if result.get('massTimes'):
                entry.update(massTimes=result['massTimes'], massTimesSourceUrl=result['url'],
                             massTimesCheckedAt=api.TODAY, massTimesStatus='published')
                entry.pop('massTimesPeriod', None)
                entry['sourceUrls'] = api.unique([*entry.get('sourceUrls', []), result['url']])
            outcomes.append(dict(sourceCode=entry['sourceCode'], name=entry['name'], diocese=entry['diocese'], **result))
            if i % 20 == 0 or i == len(candidates):
                print(f'Official parish websites: {i}/{len(candidates)}', flush=True)
    for entry in entries:
        if entry.get('massTimes') and entry.get('massTimesCheckedAt') != api.TODAY:
            entry['massTimesStatus'] = 'previously-published'
        entry['sisterCongregations'] = api.unique(x for x in entry.get('sisterCongregations', []) if api.valid_community(x))
        if not entry['sisterCongregations']:
            entry.pop('sisterCongregations')
    report_path = api.ROOT / 'docs/korea-church-coverage.json'
    report = json.loads(report_path.read_text(encoding='utf-8'))
    report['after'] = api.summary(entries)
    report['supplements'] = supplemental['sources']
    report['errors'] = failures
    report['parishWebsites'] = dict(checked=len(candidates), timetablesFound=sum(bool(item.get('massTimes')) for item in outcomes), outcomes=outcomes)
    report['unconfirmed'] = [dict(sourceCode=e['sourceCode'], name=e['name'], diocese=e['diocese'],
                                 fields=[field for field in ['massTimes', 'priestNames', 'sisterNames'] if not e.get(field)],
                                 sourceUrl=e['sourceUrl'], website=e.get('website', ''), phone=e.get('phone', ''))
                             for e in entries if not e.get('massTimes') or not e.get('priestNames')]
    source = api.DATA.read_text(encoding='utf-8')
    source = re.sub(r'    entries: \[.*?\]\s*\n  };', lambda _: '    entries: ' + json.dumps(entries, ensure_ascii=False, separators=(',', ':')) + '\n  };', source, count=1, flags=re.S)
    coverage = {**api.summary(entries), 'cbckListed': report['cbckListed'], 'cbckChecked': report['cbckChecked']}
    source = re.sub(r'    coverage: [^\n]+', lambda _: '    coverage: ' + json.dumps(coverage, ensure_ascii=False, separators=(',', ':')) + ',', source, count=1)
    api.DATA.write_text(source, encoding='utf-8', newline='\n')
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps(dict(coverage=report['after'], websiteChecks=len(candidates), websiteTimetables=report['parishWebsites']['timetablesFound'], sourceErrors=len(failures)), ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
