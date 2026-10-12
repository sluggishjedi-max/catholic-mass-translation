#!/usr/bin/env python3
"""Import public official directories into sparse country church modules.

Requires requests and beautifulsoup4. Missing fields are never inferred.
Responses are cached for one day outside the repository. --refresh bypasses it.
"""
from __future__ import annotations
import argparse
import concurrent.futures
import datetime as dt
import hashlib
import html
import json
import re
import subprocess
import sys
import tempfile
import time
import unicodedata
import urllib.parse
from pathlib import Path
import requests
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
CACHE = Path(tempfile.gettempdir()) / 'order-of-mass-supported-church-sources'
TODAY = dt.datetime.now(dt.timezone(dt.timedelta(hours=9))).date().isoformat()
DUBLIN = 'https://www.dublindiocese.ie/parishes/parishes-a-z/'
GLASGOW = 'https://www.rcag.org.uk/index.php/the-archdiocese/parishes'
WASHINGTON = 'https://adw.org/parishes-masses/parish-mass-finder/'
LA = 'https://lacatholics.org/find/'
CUBAO = 'https://dioceseofcubao.ph/parishes/'
COUNTRIES = {'IE':'ireland', 'GB-SCT':'scotland', 'US':'united_states', 'PH':'philippines'}

def clean(value):
    return re.sub(r'\s+', ' ', html.unescape(str(value or ''))).strip()

def text(node):
    return clean(node.get_text(' ', strip=True)) if node else ''

def norm(value):
    return re.sub(r'[^a-z0-9]', '', unicodedata.normalize('NFKD', clean(value)).casefold())

def unique(values):
    return list(dict.fromkeys(clean(v) for v in values if clean(v)))

def labelled_value(lines,pattern):
    for index,line in enumerate(lines):
        match = re.match(r'^(?:'+pattern+r')\s*:\s*(.*)$',line,re.I)
        if not match: continue
        if match.group(1): return clean(match.group(1))
        # Inline formatting can put the label and its value on separate lines.
        if index+1<len(lines) and not re.match(r'(?:Parish\s+)?(?:Email|Website|Tel|Phone|Priest|Location|Address)\s*:',lines[index+1],re.I):
            return clean(lines[index+1])
    return ''

def public_mass_times(values):
    result = []
    for value in values:
        if re.search(r'only\s+for\s+funerals?|funerals?\s+only',value,re.I):
            continue
        # Some sources glue a separate confession notice directly to a time.
        # Keep regular Mass exceptions ("unless/except ... a funeral") intact.
        value = re.split(r'Confessions?\b',value,maxsplit=1,flags=re.I)[0].strip()
        if re.search(r'\d',value): result.append(value)
    return unique(result)

def fetch(url, *, refresh=False, data=None):
    key = url if data is None else url + '?' + urllib.parse.urlencode(sorted(data.items()))
    cached = CACHE / (hashlib.sha256(key.encode()).hexdigest() + '.html')
    CACHE.mkdir(exist_ok=True)
    if not refresh and cached.exists() and time.time()-cached.stat().st_mtime < 86400:
        return cached.read_text(encoding='utf-8')
    for attempt in range(3):
        response = None
        try:
            response = requests.get(url,timeout=30) if data is None else requests.post(url,data=data,timeout=30)
            response.raise_for_status()
            response.encoding = 'utf-8'
            cached.write_text(response.text,encoding='utf-8')
            return response.text
        except requests.RequestException:
            if attempt == 2 or response is not None and response.status_code in (401,403,404):
                raise
            time.sleep(attempt+1)

def soup(url, **kwargs):
    return BeautifulSoup(fetch(url,**kwargs),'html.parser')

def base(country,name,authority,url):
    return {'country':country,'name':clean(name),'diocese':authority,'sourceUrl':url,
            'sourceName':authority+' parish directory','sourceAuthority':authority,
            'officialDioceseUrl':url,'directoryCheckedAt':TODAY}

def valid_point(lat,lng):
    return isinstance(lat,(int,float)) and isinstance(lng,(int,float)) and -90<=lat<=90 and -180<=lng<=180 and (lat,lng)!=(0,0)

def point(record,lat,lng):
    try:
        lat,lng = float(lat),float(lng)
        if valid_point(lat,lng): record.update(lat=lat,lng=lng)
    except (ValueError,TypeError): pass

def finish(record):
    if record.get('massTimes'): record['massTimes'] = public_mass_times(record['massTimes'])
    record = {k:v for k,v in record.items() if v not in ('',[],None)}
    identity = '|'.join([record['country'],record.get('officialDioceseUrl',record['sourceUrl']),record['name']])
    record['churchId'] = record.get('churchId') or record['country']+'-OFFICIAL-'+hashlib.sha256(identity.encode()).hexdigest()[:16]
    if record.get('massTimes'):
        record.update(massTimesStatus='published',massTimesSourceUrl=record['sourceUrl'],massTimesCheckedAt=TODAY)
    if valid_point(record.get('lat'),record.get('lng')):
        record.update(showOnMap=True,coordinateSourceUrl=record.get('coordinateSourceUrl',record['sourceUrl']),coordinateProvenance='official-directory')
    return record

def source_report(authority,url,listed):
    return {'authority':authority,'url':url,'checkedAt':TODAY,'listed':listed,'checked':0,
            'errors':[],'withoutChurchDetails':[],'limitations':[]}

def details(links,parser,report,*,refresh,workers):
    records = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {pool.submit(parser,link,refresh=refresh):link for link in links}
        for index,future in enumerate(concurrent.futures.as_completed(futures),1):
            link = futures[future]
            try:
                parsed = future.result()
                records.extend(parsed)
                report['checked'] += 1
                if not parsed: report['withoutChurchDetails'].append({'name':link['name'],'url':link['url']})
            except Exception as error:
                report['errors'].append({'name':link['name'],'url':link['url'],'error':str(error)})
            if index%50==0: print(f"{report['authority']}: {index}/{len(links)} pages",flush=True)
    return records

def dublin_detail(link,*,refresh=False):
    page = soup(link['url'],refresh=refresh)
    info = {}
    for cell in page.select('.parish-info-table td'):
        heading = cell.find('h3')
        if heading:
            label = text(heading)
            heading.extract()
            info[label] = cell
    website = info.get('Website')
    anchor = website.find('a',href=True) if website else None
    clergy = [text(a) for row in page.select('.clergy-list li')
              if re.search(r'priest|curate|administrator|moderator|assistant',text(row.find('strong')),re.I)
              for a in row.select('a')]
    map_node = page.select_one('[data-churches]')
    points = json.loads(map_node['data-churches']) if map_node else []
    records = []
    for church in page.select('.parish-church'):
        name = text(church.find('h3'))
        if not name or name.lower()=='map': continue
        record = base('IE',name,'Archdiocese of Dublin',link['url'])
        if name=='St Mary’s Cathedral' and link['url'].rstrip('/')==DUBLIN.split('/parishes/')[0]+'/parish/cathedral':
            record['aliases'] = ['St Mary’s Cathedral (Pro-Cathedral)','St Mary’s Pro-Cathedral']
        blocks = {text(block.find('h4')):block for block in church.select('.parish-churches__info')}
        address_block = blocks.get('Address')
        information = blocks.get('Information')
        record.update(directoryName=link['name'],parishName=link['name'],
                      address=text(address_block.find('p')) if address_block else '',
                      phone=text(info.get('Phone Number')),website=anchor['href'] if anchor else '',
                      priestNames=unique(clergy),clergySourceUrl=link['url'] if clergy else '',massTimes=[])
        if information:
            if re.search(r'closed temporarily|temporarily closed',text(information),re.I):
                record['availabilityStatus'] = 'temporarily-closed'
                notice = information.find('a',href=True)
                record['availabilitySourceUrl'] = notice['href'] if notice else link['url']
            record['massTimesNotes'] = unique(text(p) for p in information.find_all('p')
                if len(text(p).split())<=25 and re.search(r'\b(?:Mass|Sunday|Saturday)\b.*\b(?:not|except|only)\b',text(p),re.I))
        for row in church.select('.parish-churches__mass-times tr'):
            cells = row.find_all('td')
            if len(cells)==2 and re.search(r'\d',text(cells[1])):
                record['massTimes'].append(text(cells[0])+' '+text(cells[1]))
        matches = [p for p in points if norm(p.get('name'))==norm(name)]
        if len(matches)==1: point(record,matches[0].get('lat'),matches[0].get('lng'))
        records.append(finish(record))
    return records

def build_dublin(*,refresh,workers):
    page = soup(DUBLIN,refresh=refresh)
    main = page.select_one('main')
    if not main: raise ValueError('Dublin directory content missing')
    links = {urllib.parse.urljoin(DUBLIN,a['href']):{'url':urllib.parse.urljoin(DUBLIN,a['href']),'name':text(a)}
             for a in main.select('a[href]') if '/parish/' in a['href'] and text(a)}
    if len(links)<180: raise ValueError(f'Dublin directory unexpectedly short: {len(links)}')
    report = source_report('Archdiocese of Dublin',DUBLIN,len(links))
    return details(list(links.values()),dublin_detail,report,refresh=refresh,workers=workers),report

def glasgow_detail(link,*,refresh=False):
    page = soup(link['url'],refresh=refresh)
    content = page.select_one('.sp-simpleportfolio-description .clearfix')
    if not content: raise ValueError('Glasgow parish description missing')
    record = base('GB-SCT',link['name'],'Archdiocese of Glasgow',link['url'])
    if link['name']=="St Andrew's Metropolitan Cathedral":
        record['aliases'] = ['St Andrew’s Metropolitan Cathedral, Glasgow']
    lines = [clean(v) for v in content.get_text('\n',strip=True).splitlines() if clean(v)]
    record['address'] = labelled_value(lines,r'(?:Cathedral\s+)?(?:Church\s+)?(?:Address|Location)')
    if re.search(r'church\s+(?:is\s+)?(?:currently|temporarily)\s+closed|is\s+closed\s+temporarily|temporarily\s+closed',text(content),re.I):
        record.update(availabilityStatus='temporarily-closed',availabilitySourceUrl=link['url'])
    # Do not take fax numbers or the phone of another priest's residence.
    record['phone'] = labelled_value(lines,r'(?:Parish\s+)?(?:Tel(?:ephone)?|Phone)(?:\s+No\.?|\s+Number)?')
    record['website'] = next((a['href'] for a in content.select('a[href]') if re.match(r'https?://',a['href']) and 'facebook.' not in a['href']),'')
    schedules,category = [],''
    for line in lines:
        if re.match(r'(?:Sunday Mass(?:es)?|Weekday Mass(?:es)?|Holy Day(?:s)?(?: of Obligation)?|Saturday Mass(?:es)?)\s*:',line,re.I):
            category,_,value = line.partition(':')
            if re.search(r'\d',value): schedules.append(category+': '+clean(value))
        elif re.match(r'Confession|Baptism|Marriage|Exposition|Adoration|Rosary|Novena|(?:Parish\s+)?(?:Tel|Phone|Email|Website)|Clergy|Parish Priest',line,re.I):
            category = ''
        elif category and re.search(r'\d',line) and not re.search(r'\bRev\b|\bFather\b',line):
            schedules.append(category+': '+line)
    record['massTimes'] = unique(schedules)
    prefix = re.split(r'Sunday Mass|Weekday Mass|Holy Day|Confession',content.get_text(' ',strip=True),flags=re.I)[0]
    record['priestNames'] = unique(re.findall(r'(?:Very\s+)?(?:Rev\.?|Canon|Mgr|Monsignor)\s+(?:Fr\.?\s+)?[^():;,\d]+(?=\s*\(\d{4}\))',prefix))
    if record['priestNames']: record['clergySourceUrl'] = link['url']
    return [finish(record)]

def build_glasgow(*,refresh,workers):
    page = soup(GLASGOW,refresh=refresh)
    links = {urllib.parse.urljoin(GLASGOW,a['href']):{'url':urllib.parse.urljoin(GLASGOW,a['href']),'name':text(a)}
             for a in page.select('h3 a[href]') if '/spsimpleportfolio/item/' in a['href'] and text(a)}
    if len(links)<80: raise ValueError(f'Glasgow directory unexpectedly short: {len(links)}')
    report = source_report('Archdiocese of Glasgow',GLASGOW,len(links))
    return details(list(links.values()),glasgow_detail,report,refresh=refresh,workers=workers),report

def build_washington(*,refresh,workers):
    page = soup(WASHINGTON,refresh=refresh)
    records = []
    for item in page.select('.facetwp-template .marker'):
        anchor = item.select_one('h4 a[href]')
        if not anchor: continue
        record = base('US',text(anchor),'Archdiocese of Washington',WASHINGTON)
        record.update(address=re.sub(r'^Address:\s*','',text(item.select_one('.address-wrap'))),
                      officialDioceseUrl=anchor['href'],directorySourceUrl=WASHINGTON)
        point(record,item.get('data-lat'),item.get('data-lng'))
        records.append(finish(record))
    if len(records)<130: raise ValueError(f'Washington directory unexpectedly short: {len(records)}')
    report = source_report('Archdiocese of Washington',WASHINGTON,len(records))
    report['checked'] = len(records)
    report['limitations'] = ['The official finder supplies names, addresses and coordinates. Detail-page contacts and timetables were not imported; the tested detail endpoint returned HTTP 403.']
    return records,report

def la_detail(link,*,refresh=False):
    page = soup(link['url'],refresh=refresh)
    main = page.select_one('main') or page.select_one('#content')
    if not main: raise ValueError('Los Angeles parish content missing')
    lines = [clean(v) for v in main.get_text('\n',strip=True).splitlines() if clean(v)]
    record = dict(link['record'])
    if 'Phone' in lines:
        phone = lines[lines.index('Phone')+1]
        if re.search(r'\d{3}',phone): record['phone'] = phone
    record['website'] = next((a['href'] for a in main.select('a[href]') if 'View Parish/School Website' in text(a)),'')
    schedules,category = [],''
    if 'Weekly Mass Schedule' in lines:
        for line in lines[lines.index('Weekly Mass Schedule')+1:]:
            if re.match(r'Holy Days of Obligation|About|Confession',line,re.I): break
            if line.lower() in ('monday','tuesday','wednesday','thursday','friday','saturday','sunday'): category = line.capitalize()
            elif category and re.search(r'\d.*(?:am|pm|a\.m\.|p\.m\.)',line,re.I): schedules.append(category+': '+line)
    record['massTimes'] = unique(schedules)
    return [finish(record)]

def build_la(*,refresh,workers):
    # WordPress public finder tokens expire sooner than the HTML cache.
    # Refresh the landing page for each run instead of reusing its old token.
    content = fetch(LA,refresh=True)
    match = re.search(r'var ajaxVars = (\{.*?\});',content)
    if not match: raise ValueError('LA public finder configuration missing')
    settings = json.loads(match.group(1))
    links,complete = {},False
    for number in range(1,80):
        data = {'form_type':'parishes','zip_code':'','keywords':'','action':settings['action'],'security':settings['nonce'],'page':number}
        payload = json.loads(fetch(settings['url'],data=data,refresh=refresh))
        if payload.get('set')!='parishes' or payload.get('page')!=number: raise ValueError('LA finder returned a different page')
        items = BeautifulSoup(payload.get('html',''),'html.parser').select('a.feed-view-parish')
        for item in items:
            name,url = text(item.find('h3')),item['href']
            record = base('US',name,'Archdiocese of Los Angeles',url)
            record.update(address=text(item.select_one('.address')),directorySourceUrl=LA)
            markers = [m for m in payload.get('markers',[]) if clean(m.get('name'))==name]
            if len(markers)==1: point(record,markers[0].get('lat'),markers[0].get('lng'))
            if url in links: raise ValueError('LA pagination repeated a parish')
            links[url] = {'url':url,'name':name,'record':record}
        if payload.get('limit') or not items:
            complete = True
            break
        if number%10==0: print(f'Los Angeles directory: {len(links)} parishes',flush=True)
    if not complete or len(links)<250: raise ValueError(f'Incomplete LA directory: {len(links)}')
    report = source_report('Archdiocese of Los Angeles',LA,len(links))
    records = details(list(links.values()),la_detail,report,refresh=refresh,workers=workers)
    successful = {r['officialDioceseUrl'] for r in records}
    for link in links.values():
        if link['url'] not in successful:
            record = dict(link['record'])
            record['sourceUrl'] = LA
            records.append(finish(record))
    return records,report

def build_cubao(*,refresh,workers):
    page = soup(CUBAO,refresh=refresh)
    main = page.select_one('main') or page
    lines = [clean(v) for v in main.get_text('\n',strip=True).splitlines() if clean(v)]
    begin = next(i for i,v in enumerate(lines) if v=='VICARIATE OF HOLY FAMILY')
    end = next(i for i,v in enumerate(lines) if v=='DISTRICT I')
    names = unique(v for v in lines[begin:end] if not v.startswith('VICARIATE OF'))
    if not 45<=len(names)<=55: raise ValueError(f'Cubao vicariate list not isolated: {len(names)}')
    records = [finish(base('PH',name,'Diocese of Cubao',CUBAO)) for name in names]
    # Only this cathedral currently has a detail page in the official public
    # page index; the other entries retain verified names without guessed URLs.
    url = 'https://dioceseofcubao.ph/immaculate-conception-cathedral-of-cubao/'
    detail = soup(url,refresh=refresh)
    name = text(detail.select_one('.elementor-slide-heading'))
    record = next((r for r in records if norm(r['name'])==norm(name)),None)
    if not record: raise ValueError('Cubao cathedral absent from vicariate list')
    record.update(sourceUrl=url,officialDioceseUrl=url,directorySourceUrl=CUBAO,address=text(detail.select_one('.elementor-slide-description')))
    lines = [clean(v) for v in (detail.select_one('main') or detail).get_text('\n',strip=True).splitlines() if clean(v)]
    record['priestNames'] = unique(v for v in lines[:25] if re.match(r'REV\.\s*FR\.',v))
    if record['priestNames']: record['clergySourceUrl'] = url
    record['phone'] = next((v.removeprefix('Tels:').strip() for v in lines[:25] if v.startswith('Tels:')),'')
    schedules,category = [],''
    if 'SCHEDULE OF MASSES' in lines:
        for line in lines[lines.index('SCHEDULE OF MASSES')+1:]:
            if re.match(r'Baptism|Confession|Confirmation|Wedding|Funeral',line,re.I): break
            if line in ('Sunday','Weekdays','Saturday'): category = line
            elif category and re.search(r'\d',line): schedules.append(category+': '+line)
    record['massTimes'] = schedules
    record.update(finish(record))
    report = source_report('Diocese of Cubao',CUBAO,len(names))
    report.update(checked=len(names),detailPagesChecked=1)
    report['limitations'] = ['The vicariate list supplies church names. Only the cathedral detail page was available in the public page index; other contacts, addresses and timetables remain missing.']
    return records,report

def load_modules():
    code = """const fs=require('fs'),vm=require('vm'),path=require('path'),c={};vm.createContext(c);
for(const dir of fs.readdirSync('JS file/countries')){const p=path.join('JS file/countries',dir,dir+'_churches.js');
if(fs.existsSync(p))vm.runInContext(fs.readFileSync(p,'utf8'),c)}process.stdout.write(JSON.stringify(c.countryChurchData));"""
    output = subprocess.run(['node','-e',code],cwd=ROOT,check=True,capture_output=True,encoding='utf-8')
    return json.loads(output.stdout)

def names_of(record):
    # Parish names are shared by multiple churches and are not identities.
    return {norm(v) for v in [record.get('name'),*(record.get('aliases') or [])] if v}

def merge(existing,additions):
    records,added,updated = [dict(r) for r in existing],0,0
    source_counts = {url:sum(r['sourceUrl']==url for r in additions) for url in {r['sourceUrl'] for r in additions}}
    for record in additions:
        matches = [i for i,old in enumerate(records) if old.get('churchId')==record.get('churchId') or
                   old.get('directoryCheckedAt') is None and old.get('country')==record.get('country') and old.get('diocese')==record.get('diocese') and
                   (names_of(old)&names_of(record) or old.get('website') and old.get('website')==record.get('website') or
                    source_counts.get(record['sourceUrl'])==1 and old.get('sourceUrl')==record['sourceUrl'])]
        if len(matches)>1: raise ValueError('Ambiguous merge: '+record['name'])
        if matches:
            old = records[matches[0]]
            aliases = unique([old['name'],*(old.get('aliases') or []),*(record.get('aliases') or [])])
            # Remove fields owned by a previous import when the source no
            # longer supplies them. Do not retain an obsolete published schedule.
            owned = {'address','phone','website','priestNames','clergySourceUrl','massTimes','massTimesStatus',
                     'massTimesCheckedAt','massTimesSourceUrl','massTimesNotes','availabilityStatus','availabilitySourceUrl',
                     } if old.get('directoryCheckedAt') else set()
            if old.get('coordinateProvenance')=='official-directory' or old.get('coordinateSourceUrl')==old.get('sourceUrl') and old.get('coordinateProvenance')!='retained-curated-seed':
                owned.update({'lat','lng','showOnMap','coordinateSourceUrl','coordinateProvenance'})
            records[matches[0]] = {**{k:v for k,v in old.items() if k not in owned},**record}
            if valid_point(old.get('lat'),old.get('lng')) and not valid_point(record.get('lat'),record.get('lng')) and 'lat' not in owned:
                records[matches[0]].update(coordinateSourceUrl=old.get('coordinateSourceUrl') or old.get('sourceUrl'),
                                          coordinateProvenance='retained-curated-seed')
            aliases = [v for v in aliases if v!=record['name']]
            if aliases: records[matches[0]]['aliases'] = aliases
            updated += 1
        else:
            records.append(record)
            added += 1
    records.sort(key=lambda r:(r.get('country',''),r.get('diocese',''),r['name'],r.get('address','')))
    return records,{'added':added,'updated':updated}

def counts(entries):
    return {'total':len(entries),**{field:sum(bool(r.get(field)) for r in entries) for field in ('address','phone','website','massTimes','priestNames')},
            'coordinates':sum(valid_point(r.get('lat'),r.get('lng')) for r in entries)}

def write_module(country,entries,sources):
    directory = COUNTRIES[country]
    target = ROOT/'JS file/countries'/directory/(directory+'_churches.js')
    metadata = {'schemaVersion':2,'jurisdiction':country,'jurisdictions':['IE','GB-NIR'] if country=='IE' else [country],
                'status':'available','provider':'Official diocesan directories / Google Places','beta':True,'exhaustive':False,'checkedAt':TODAY,
                'sources':sources,'coverage':{'snapshotDate':TODAY,'scope':'Listed dioceses and retained cathedral seeds only; national coverage remains incomplete.',
                'byDiocese':{d:counts([r for r in entries if r.get('diocese')==d]) for d in sorted({r.get('diocese','') for r in entries})},
                'limitations':['Missing fields are not inferred. Confirm published Mass schedules with the linked official source.']}}
    output = '// Official directory snapshot; generated by tools/enrich-supported-churches.py.\n'
    output += "(function registerCountryChurches(global) {\n  'use strict';\n  const entries = "+json.dumps(entries,ensure_ascii=False,indent=2)+';\n'
    output += '  global.countryChurchData = global.countryChurchData || {};\n'
    output += '  global.countryChurchData['+json.dumps(country)+'] = Object.freeze(Object.assign(\n    '+json.dumps(metadata,ensure_ascii=False,indent=2)+',\n'
    output += '    { recordCount: entries.length, entries: Object.freeze(entries.map(entry => Object.freeze(entry))) }\n  ));\n'
    output += "  if (typeof global.rebuildCountryChurchDirectory === 'function') global.rebuildCountryChurchDirectory();\n})(globalThis);\n"
    target.write_text(output,encoding='utf-8')

def main():
    sys.stdout.reconfigure(encoding='utf-8')
    parser = argparse.ArgumentParser()
    parser.add_argument('--refresh',action='store_true')
    parser.add_argument('--workers',type=int,default=5)
    parser.add_argument('--countries',default='IE,GB-SCT,US,PH')
    parser.add_argument('--dry-run',action='store_true')
    args = parser.parse_args()
    selected = args.countries.split(',')
    if any(c not in COUNTRIES for c in selected): parser.error('Unsupported country')
    modules = load_modules()
    builders = {'IE':[build_dublin],'GB-SCT':[build_glasgow],'US':[build_washington,build_la],'PH':[build_cubao]}
    report,results = {'checkedAt':TODAY,'countries':{}},{}
    for country in selected:
        additions,sources = [],[]
        for builder in builders[country]:
            records,source = builder(refresh=args.refresh,workers=max(1,min(args.workers,8)))
            additions.extend(records)
            sources.append(source)
        before = modules[country]['entries']
        entries,changes = merge(before,additions)
        report['countries'][country] = {'before':counts(before),'after':counts(entries),**changes,'sources':sources}
        results[country] = entries,sources
        print(country+': '+json.dumps(report['countries'][country],ensure_ascii=False),flush=True)
    # Write only after every selected list has completed successfully.
    if not args.dry_run:
        for country,(entries,sources) in results.items(): write_module(country,entries,sources)
        target = ROOT/'docs/supported-church-enrichment.json'
        if target.exists():
            prior = json.loads(target.read_text(encoding='utf-8'))
            if prior.get('checkedAt')==TODAY:
                for country,item in report['countries'].items():
                    if country in prior['countries']:
                        item['before'] = prior['countries'][country]['before']
                        item['added'] = item['after']['total']-item['before']['total']
            prior['countries'].update(report['countries'])
            prior['checkedAt'] = TODAY
            report = prior
        target.write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')

if __name__=='__main__': main()
