#!/usr/bin/env python3
"""Refresh Korean parishes from CBCK and diocesan/GoodNews public directories.

Never infer an unpublished person's name or turn a dated daily schedule into
a recurring timetable. Cached responses allow interrupted runs to resume.
"""
from __future__ import annotations

import argparse
import concurrent.futures as futures
import datetime as dt
import hashlib
import importlib.util
import json
import re
import subprocess
import sys
import tempfile
import threading
import time
from pathlib import Path
from urllib.parse import parse_qs, urlparse

import requests
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'JS file/countries/korea/korea_churches.js'
TODAY = dt.datetime.now(dt.timezone(dt.timedelta(hours=9))).date().isoformat()
CACHE = Path(tempfile.gettempdir()) / ('order-of-mass-korea-' + TODAY.replace('-', '')) / 'responses'
STATE = threading.local()
SPEC = importlib.util.spec_from_file_location('church_builder', ROOT / 'tools/build-church-local-details.py')
BUILDER = importlib.util.module_from_spec(SPEC)
sys.modules[SPEC.name] = BUILDER
SPEC.loader.exec_module(BUILDER)


def clean(value):
    return re.sub(r'\s+', ' ', str(value or '')).strip()


def unique(values):
    output, keys = [], set()
    for value in values:
        value = clean(value)
        key = re.sub(r'\s+', '', value)
        if value and key not in keys:
            output.append(value)
            keys.add(key)
    return output


def fetch(url, payload=None):
    CACHE.mkdir(parents=True, exist_ok=True)
    key = hashlib.sha256((url + json.dumps(payload, sort_keys=True)).encode()).hexdigest()
    target = CACHE / (key + '.html')
    if target.exists():
        return target.read_text(encoding='utf-8')
    if not hasattr(STATE, 'session'):
        STATE.session = requests.Session()
        STATE.session.headers['User-Agent'] = 'OrderOfMassPublicDirectory/1.0'
    for attempt in range(3):
        try:
            response = STATE.session.post(url, data=payload, timeout=35) if payload else STATE.session.get(url, timeout=35)
            response.raise_for_status()
            try:
                text = response.content.decode('utf-8-sig')
            except UnicodeDecodeError:
                text = response.content.decode('cp949')
            if not text.strip():
                raise RuntimeError('empty response')
            target.write_text(text, encoding='utf-8')
            return text
        except Exception:
            if attempt == 2:
                raise
            time.sleep(attempt + 1)


def load_entries():
    program = 'const fs=require("fs"),vm=require("vm"),c={};vm.runInNewContext(fs.readFileSync(process.argv[1],"utf8"),c);process.stdout.write(JSON.stringify(c.countryChurchData.KR.entries));'
    return json.loads(subprocess.check_output(['node', '-e', program, str(DATA)], encoding='utf-8'))


def mass_notes(cell):
    lines = [clean(line).lstrip('▶●▪ ') for line in cell.get_text('\n', strip=True).splitlines()]
    output, active = [], False
    for line in lines:
        if re.search(r'(?:미사|전례|주일|평일|토요일|첫토)', line):
            active = True
        if active and re.search(r'\d{1,2}\s*[:：]\s*\d{2}|\d{1,2}\s*시', line):
            output.append(line)
        elif output and line and not re.search(r'^[\d\s,:：~\-]+$', line):
            active = False
    return unique(output)


def cbck_detail(link):
    url = 'https://directory.cbck.or.kr/m/catholicInfo.asp?code=' + link['code'] + '&gubun=4'
    soup = BeautifulSoup(fetch(url), 'html.parser')
    content = soup.select_one('#content')
    name = content.select_one('h2') if content else None
    if name is None:
        raise RuntimeError('CBCK detail has no parish heading: ' + link['code'])
    values, masses = {}, []
    for row in content.select('table.small_table tr'):
        cells = row.find_all('td', recursive=False)
        if len(cells) < 2:
            continue
        label, cell = clean(cells[0].get_text()), cells[1]
        values[label] = clean(cell.get_text(' ', strip=True))
        if '미사' in label or label == '비고':
            masses.extend(mass_notes(cell))
    if values.get('한국천주교') != '본당' or not values.get('소속'):
        raise RuntimeError('Unexpected CBCK parish classification: ' + link['code'])
    priests, sisters, congregations, roles = [], [], [], []
    for anchor in content.select('a[href]'):
        href = anchor.get('href', '')
        heading = anchor.select_one('h3')
        if not heading:
            continue
        text = clean(heading.get_text(' ', strip=True))
        if 'fatherInfo.asp' in href:
            desc = anchor.select_one('p')
            role = clean(desc.get_text(' ', strip=True)) if desc else ''
            if '신부' in text:
                priests.append(text)
                roles.append({'name': text, 'role': role, 'sourceUrl': url})
            elif '수녀' in text:
                sisters.append(text)
        elif '수녀' in text and not is_congregation(text):
            sisters.append(text)
    if values.get('수녀회'):
        congregations.append(values['수녀회'])
    address, phone, website = '', '', ''
    for item in content.select('li'):
        desc, heading = item.select_one('p.ui-li-desc'), item.select_one('h3')
        if not desc or not heading:
            continue
        label, text = clean(desc.get_text()), clean(heading.get_text(' ', strip=True))
        if label == '대표주소':
            address = text
        elif label == '대표 전화 번호':
            phone = text
        elif label == '홈페이지 주소':
            anchor = item.select_one('a[href]')
            website = anchor.get('href', '') if anchor else ''
    return dict(code=link['code'], name=clean(name.get_text()), diocese=values['소속'],
                address=address, phone=phone, website=website, priestNames=unique(priests),
                priestAssignments=roles, sisterNames=unique(sisters), sisterCongregations=unique(congregations),
                massTimes=unique(masses), sourceUrl=url)


def is_congregation(value):
    return bool(re.search(r'수녀회|수도회|시녀회|자매회|수녀원|수도원|봉사회|회$', re.sub(r'\s+', '', value)))


def valid_community(value):
    value = clean(value)
    return bool(value and value not in ['없음', '해당없음', '정보 없음', '수녀', '수녀님', '미정', '무']
                and not re.fullmatch(r'[\d\s()\-.,]+|\d+\s*명', value))


def goodnews_list(item):
    code, spec = item
    payload = {'gyoCode': code, 'localCode': '', 'giguCode': '', 'PAGE': '1', 'P_SIZE': '500', 'app': 'goodnews'}
    parsed = json.loads(fetch(BUILDER.GOODNEWS_PARISH_API, payload))
    rows = parsed.get('BOARDLIST') or []
    if len(rows) != int(parsed.get('ResultCount') or 0):
        raise RuntimeError('Incomplete GoodNews list: ' + spec['diocese'])
    for row in rows:
        row['_diocese'] = spec['diocese']
    return rows


def goodnews_detail(row):
    url = BUILDER.GOODNEWS_PARISH_DETAIL.format(orgnum=row['orgnum'])
    soup = BeautifulSoup(fetch(url), 'html.parser')
    table = soup.select_one('table.register05')
    masses, group = [], ''
    if table:
        for tr in table.select('tr'):
            cells = tr.find_all(['th', 'td'], recursive=False)
            header = tr.find('th', recursive=False)
            if header:
                match = re.match(r'^(주일미사|평일미사)', clean(header.get_text(' ', strip=True)))
                if match:
                    group = match[1]
            tds = tr.find_all('td', recursive=False)
            if len(tds) >= 2:
                day, times = [clean(td.get_text(' ', strip=True)) for td in tds[-2:]]
                if re.fullmatch(r'[월화수목금토일]|주일', day) and re.search(r'\d{1,2}:\d{2}', times):
                    masses.append(clean(group + ' ' + day + ' ' + times))
            elif len(cells) == 1:
                text = clean(cells[0].get_text(' ', strip=True))
                if re.match(r'^(주일미사|평일미사)\s*[월화수목금토일]', text) and re.search(r'\d{1,2}:\d{2}', text):
                    masses.append(text)
    page = clean(soup.get_text(' ', strip=True))
    updated = re.search(r'최종\s*업데이트일\s*:\s*(\d{4}-\d{2}-\d{2})', page)
    return dict(row=row, massTimes=unique(masses), sourceUrl=url, updated=updated.group(1) if updated else '')


def process(items, callback, workers, label, errors):
    output = []
    with futures.ThreadPoolExecutor(max_workers=workers) as pool:
        tasks = {pool.submit(callback, item): item for item in items}
        for count, task in enumerate(futures.as_completed(tasks), 1):
            try:
                output.append(task.result())
            except Exception as error:
                errors.append({'source': label, 'item': tasks[task], 'error': str(error)})
            if count % 100 == 0 or count == len(items):
                print(f'{label}: {count}/{len(items)}, errors={len(errors)}', flush=True)
    return output


def summary(entries):
    by = {}
    for e in entries:
        row = by.setdefault(e['diocese'], dict(parishes=0, massTimes=0, priests=0, sisterNames=0, sisterCongregations=0))
        row['parishes'] += 1
        for label, field in [('massTimes', 'massTimes'), ('priests', 'priestNames'), ('sisterNames', 'sisterNames'), ('sisterCongregations', 'sisterCongregations')]:
            row[label] += bool(e.get(field))
    return dict(total=len(entries), byDiocese=by,
                massTimesCheckedToday=sum(e.get('massTimesCheckedAt') == TODAY for e in entries),
                previousTimetables=sum(e.get('massTimesStatus') == 'previously-published' for e in entries),
                **{key: sum(row[key] for row in by.values()) for key in ['massTimes', 'priests', 'sisterNames', 'sisterCongregations']})


def main():
    sys.stdout.reconfigure(encoding='utf-8')
    parser = argparse.ArgumentParser()
    parser.add_argument('--workers', type=int, default=6)
    parser.add_argument('--skip-supplements', action='store_true')
    args = parser.parse_args()
    baseline = load_entries()
    errors = []
    # Replace the older builder cache with this run's date-scoped response cache.
    BUILDER.fetch_text = lambda url, **kwargs: fetch(url)
    specs = dict(BUILDER.GOODNEWS_KOREAN_DIOCESES)
    specs['13'] = dict(diocese='수원교구', key='Suwon')
    api = [row for rows in process(list(specs.items()), goodnews_list, args.workers, 'GoodNews lists', errors) for row in rows]
    by_org = {str(row['orgnum']): row for row in api}
    records, merged_aliases = {}, 0
    for old in sorted(baseline, key=lambda e: not bool(re.fullmatch(r'\d{9}', e.get('sourceCode', '')))):
        old = dict(old)
        for name in old.pop('sisterNames', []):
            # The legacy builder put the CBCK "수녀회" / GoodNews "sistname"
            # fields in sisterNames, including abbreviations, counts and phones.
            if old.get('sisterPersonalSourceUrl'):
                old['sisterNames'] = unique([*old.get('sisterNames', []), name])
            elif valid_community(name):
                old['sisterCongregations'] = unique([*old.get('sisterCongregations', []), name])
        row = by_org.get(old.get('dioceseSourceCode') or old.get('sourceCode'))
        cbck = clean(row.get('cbckid')) if row else ''
        key = cbck or (old.get('sourceCode') if re.fullmatch(r'\d{9}', old.get('sourceCode', '')) else '')
        key = 'cbck:' + key if key else 'org:' + old.get('sourceCode', old['diocese'] + ':' + old['name'])
        if key in records:
            target = records[key]
            for field, value in old.items():
                if not target.get(field) and value:
                    target[field] = value
            target['aliases'] = unique([*target.get('aliases', []), old['name'], old.get('directoryName', '')])
            merged_aliases += 1
        else:
            records[key] = old
    links = BUILDER.korean_parish_links(refresh=True)
    cbck = process(links, cbck_detail, args.workers, 'CBCK details', errors)
    for source in cbck:
        key = 'cbck:' + source['code']
        target = records.setdefault(key, dict(country='KR', sourceCode=source['code'], sourceName='한국 천주교 주소록', sourceAuthority='한국천주교주교회의'))
        target.update(name=source['name'] if source['name'].endswith('성당') else source['name'] + '성당', directoryName=source['name'], diocese=source['diocese'])
        target['sourceUrl'] = source['sourceUrl']
        for field in ['address', 'phone', 'website', 'priestNames', 'priestAssignments', 'sisterNames', 'sisterCongregations']:
            if source.get(field):
                target[field] = source[field]
        target['clergySourceUrl'] = source['sourceUrl']
        target['clergyCheckedAt'] = TODAY
        target['sistersSourceUrl'] = source['sourceUrl']
        target['sistersCheckedAt'] = TODAY
        if source.get('massTimes') and not target.get('massTimes'):
            target['massTimes'] = source['massTimes']
            target['massTimesSourceUrl'] = source['sourceUrl']
            target['massTimesCheckedAt'] = TODAY
            target.pop('massTimesPeriod', None)
    details = process(api, goodnews_detail, args.workers, 'GoodNews timetables', errors)
    for source in details:
        row = source['row']
        code = clean(row.get('cbckid'))
        key = 'cbck:' + code if code else 'org:' + str(row['orgnum'])
        target = records.setdefault(key, dict(country='KR', name=clean(row['TITLE']) + '성당', directoryName=clean(row['TITLE']), diocese=row['_diocese'], sourceCode=code or str(row['orgnum']), sourceUrl=source['sourceUrl'], sourceName='가톨릭 굿뉴스 본당정보', sourceAuthority='천주교 서울대교구 가톨릭정보'))
        target['dioceseSourceCode'] = str(row['orgnum'])
        target['officialDioceseUrl'] = source['sourceUrl']
        target['aliases'] = unique([*target.get('aliases', []), clean(row['TITLE']), clean(row['TITLE']) + '성당'])
        for field, name in [('address', 'addr'), ('phone', 'phone'), ('patron', 'saint'), ('deanery', 'giguName1')]:
            if not target.get(field) and clean(row.get(name)):
                target[field] = clean(row[name])
        for field in ['lat', 'lng']:
            try:
                target[field] = float(row[field])
            except (ValueError, KeyError, TypeError):
                pass
        if not target.get('priestNames') and clean(row.get('father')):
            target['priestNames'] = [clean(row['father'])]
            target['clergySourceUrl'] = source['sourceUrl']
            target['clergyCheckedAt'] = TODAY
        congregation = clean(row.get('sistname'))
        if valid_community(congregation) and not target.get('sisterCongregations'):
            target['sisterCongregations'] = [congregation]
        target['sistersCheckedAt'] = TODAY
        target.setdefault('sistersSourceUrl', source['sourceUrl'])
        if source['massTimes']:
            target['massTimes'] = source['massTimes']
            target.pop('massTimesStatus', None)
            target['massTimesSourceUrl'] = source['sourceUrl']
            target['massTimesCheckedAt'] = TODAY
            target['massTimesPeriod'] = source['updated']
        elif target.get('massTimesSourceUrl') == source['sourceUrl']:
            # Keep a prior timetable visibly dated if the source no longer publishes it.
            target['massTimesStatus'] = 'previously-published'
        target['sourceUrls'] = unique([*target.get('sourceUrls', []), target['sourceUrl'], source['sourceUrl']])
    suwon_links = BUILDER.suwon_parish_links(refresh=True)
    suwon = process(suwon_links, lambda link: BUILDER.parse_suwon_parish(link, refresh=True), args.workers, 'Suwon timetables', errors)
    name_index = {(e['diocese'], BUILDER.normalized_korean_parish_name(e['directoryName'])): e for e in records.values()}
    for source in suwon:
        target = name_index.get(('수원교구', BUILDER.normalized_korean_parish_name(source['directoryName'])))
        if target and source.get('massTimes'):
            target.pop('massTimesStatus', None)
            for field in ['massTimes', 'massTimesPeriod', 'priestNames']:
                if source.get(field):
                    target[field] = source[field]
            if source.get('website'):
                target['website'] = source['website']
            target['massTimesSourceUrl'] = source['sourceUrl']
            target['massTimesCheckedAt'] = TODAY
            target['clergySourceUrl'] = source['sourceUrl']
            target['clergyCheckedAt'] = TODAY
            target['sourceUrls'] = unique([*target.get('sourceUrls', []), source['sourceUrl']])
    entries = sorted(records.values(), key=lambda e: (e['directoryName'], e['diocese']))
    supplemental = {}
    if not args.skip_supplements:
        import korea_official_supplements
        supplemental = korea_official_supplements.enrich(entries, sys.modules[__name__])
        errors.extend(supplemental.get('errors', []))
    for e in entries:
        e['sisterCongregations'] = unique(value for value in e.get('sisterCongregations', []) if valid_community(value))
        e['sistersStatus'] = 'published' if e.get('sisterNames') else 'names-not-published'
        e['clergyStatus'] = 'published' if e.get('priestNames') else 'not-published'
        e['massTimesStatus'] = e.get('massTimesStatus') or ('published' if e.get('massTimes') else 'not-published')
        e['directoryCheckedAt'] = TODAY
        e['aliases'] = [a for a in unique(e.get('aliases', [])) if a not in [e['name'], e['directoryName']]]
        for field in list(e):
            if e[field] in ('', [], None):
                del e[field]
    report = dict(checkedAt=TODAY, before=summary(baseline), after=summary(entries), cbckListed=len(links), cbckChecked=len(cbck), goodnewsListed=len(api), goodnewsChecked=len(details), suwonChecked=len(suwon), mergedAliases=merged_aliases, supplements=supplemental.get('sources', {}), errors=errors)
    source = DATA.read_text(encoding='utf-8')
    source, count = re.subn(r'    entries: \[.*?\]\s*\n  };', lambda _: '    entries: ' + json.dumps(entries, ensure_ascii=False, separators=(',', ':')) + '\n  };', source, count=1, flags=re.S)
    if count != 1:
        raise RuntimeError('Country data registration was not found')
    source = re.sub(r"generatedAt: '[^']*'", "generatedAt: '" + TODAY + "'", source)
    source = re.sub(r'    checkedAt: [^\n]+\n    coverage: [^\n]+\n', '', source)
    source = source.replace('    provider: "local-directory",', '    provider: "local-directory",\n    checkedAt: "' + TODAY + '",\n    coverage: ' + json.dumps({**summary(entries), 'cbckListed': len(links), 'cbckChecked': len(cbck)}, ensure_ascii=False, separators=(',', ':')) + ',')
    DATA.write_text(source, encoding='utf-8', newline='\n')
    report_path = ROOT / 'docs/korea-church-coverage.json'
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({k: v for k, v in report.items() if k not in ['before', 'errors']} | {'errors': len(errors)}, ensure_ascii=False, indent=2), flush=True)


if __name__ == '__main__':
    main()
