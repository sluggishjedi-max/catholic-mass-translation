'use strict';

// Rebuild the lazy-loaded conference modules. Generated files are application data;
// this script is not used by the browser at runtime.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT, 'JS file', 'bishop_conferences');
const CACHE_DIR = path.join(ROOT, 'tmp', 'bishop-conference-build-cache');
const REFRESH = process.argv.includes('--refresh');
const BOUNDARY_SERVICE = 'https://services3.arcgis.com/I88u8wDux7Kis2GZ/arcgis/rest/services/CatholicHierarchyDiocese/FeatureServer/0/query';
const BOUNDARY_ITEM = 'https://www.arcgis.com/home/item.html?id=b1ca9b3146c8411ca3644e264cf54c99';
const HIERARCHY_ROOT = 'https://www.catholic-hierarchy.org';
const SCOTLAND = new Set(['Aberdeen', 'Argyll and The Isles', 'Dunkeld', 'Galloway', 'Glasgow', 'Motherwell', 'Paisley', 'Saint Andrews and Edinburgh']);

const CONFERENCES = [
    { id: 'CBCK', file: 'cbck.js', name: "Catholic Bishops' Conference of Korea", official: 'https://cbck.or.kr/', countries: [{ code: 'kr', label: 'South Korea' }], locations: ['KR'] },
    { id: 'CBCV', file: 'cbcv.js', name: "Catholic Bishops' Conference of Vietnam", official: 'https://hdgmvietnam.com/', countries: [{ code: 'vn', label: 'Vietnam' }], locations: ['VN'] },
    { id: 'USCCB', file: 'usccb.js', name: 'United States Conference of Catholic Bishops', official: 'https://www.usccb.org/find-a-bishop-and-diocese', countries: [{ code: 'us', label: 'United States' }], locations: ['US'] },
    { id: 'ICBC', file: 'icbc.js', name: "Irish Catholic Bishops' Conference", official: 'https://www.catholicbishops.ie/', countries: [{ code: 'ie', label: 'Ireland' }], locations: ['IE', 'GB-NIR'] },
    { id: 'CBCEW', file: 'cbcew.js', name: "Catholic Bishops' Conference of England and Wales", official: 'https://www.cbcew.org.uk/', countries: [{ code: 'gb', label: 'Great Britain' }], locations: ['GB-ENG', 'GB-WLS'], accept: name => !SCOTLAND.has(name) },
    { id: 'BCOS', file: 'bcos.js', name: "Bishops' Conference of Scotland", official: 'https://www.bcos.org.uk/', countries: [{ code: 'gb', label: 'Great Britain' }], locations: ['GB-SCT'], accept: name => SCOTLAND.has(name) },
    { id: 'CBCP', file: 'cbcp.js', name: "Catholic Bishops' Conference of the Philippines", official: 'https://cbcpnews.net/cbcpnews/', countries: [{ code: 'ph', label: 'Philippines' }], locations: ['PH'] },
    { id: 'CRBC', file: 'crbc.js', name: "Chinese Regional Bishops' Conference", official: 'https://www.catholic.org.tw/', countries: [{ code: 'tw', label: 'Taiwan' }], locations: ['TW'] },
    { id: 'ACBC', file: 'acbc.js', name: "Australian Catholic Bishops Conference", official: 'https://www.catholic.au/', countries: [{ code: 'au', label: 'Australia' }], locations: ['AU'] },
    { id: 'NZCBC', file: 'nzcbc.js', name: "New Zealand Catholic Bishops Conference", official: 'https://www.catholic.org.nz/', countries: [{ code: 'nz', label: 'New Zealand' }], locations: ['NZ'] },
    { id: 'CBCJ', file: 'cbcj.js', name: "Catholic Bishops' Conference of Japan", official: 'https://www.cbcj.catholic.jp/english/', countries: [{ code: 'jp', label: 'Japan' }], locations: ['JP'] },
    { id: 'CEI', file: 'cei.js', name: 'Italian Episcopal Conference', official: 'https://www.chiesacattolica.it/', countries: [{ code: 'it', label: 'Italy' }], locations: ['IT'] },
    { id: 'CEP', file: 'cep.js', name: 'Portuguese Episcopal Conference', official: 'https://www.conferenciaepiscopal.pt/', countries: [{ code: 'pt', label: 'Portugal' }], locations: ['PT'] },
    { id: 'CEM', file: 'cem.js', name: 'Conference of the Mexican Episcopate', official: 'https://cem.org.mx/', countries: [{ code: 'mx', label: 'Mexico' }], locations: ['MX'] },
    { id: 'DBK', file: 'dbk.js', name: "German Bishops' Conference", official: 'https://www.dbk.de/', countries: [{ code: 'de', label: 'Germany' }], locations: ['DE'] },
    { id: 'CNBB', file: 'cnbb.js', name: 'National Conference of Bishops of Brazil', official: 'https://www.cnbb.org.br/', countries: [{ code: 'br', label: 'Brazil' }], locations: ['BR'] }
];

const KOREA_LEGACY_ORDER = ['Cheongju', 'Suwon', 'Seoul', 'Chuncheon', 'Daejeon', 'Daegu', 'Busan', 'Andong', 'Masan', 'Incheon', 'Uijeongbu', 'Gwangju', 'Korea Military', 'Jeonju', 'Jeju', 'Wonju'];
const VIETNAM_LEGACY_ORDER = ['Lang Son and Cao Bang', 'Hung Hoa', 'Bac Ninh', 'Hanoi', 'Hai Phong', 'Thai Binh', 'Bui Chu', 'Phat Diem', 'Thanh Hoa', 'Vinh', 'Ha Tinh', 'Hue', 'Da Nang', 'Qui Nhon', 'Kontum', 'Nha Trang', 'Ban Me Thuot', 'Da Lat', 'Phan Thiet', 'Phu Cuong', 'Xuan Loc', 'Ba Ria', 'Ho Chi Minh City', 'My Tho', 'Vinh Long', 'Long Xuyen', 'Can Tho'];
const JAPAN_LEGACY_ORDER = ['Tokyo', 'Osaka-Takamatsu', 'Kyoto', 'Nagoya', 'Fukuoka', 'Sapporo'];
const requestPromises = new Map();

function localIsoDate() {
    const now = new Date();
    return [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function download(url) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    const cachePath = path.join(CACHE_DIR, crypto.createHash('sha256').update(url).digest('hex'));
    const cacheable = !url.startsWith(BOUNDARY_SERVICE);
    if (cacheable && !REFRESH && fs.existsSync(cachePath)) return fs.readFileSync(cachePath);
    if (requestPromises.has(url)) return requestPromises.get(url);
    const promise = (async () => {
        let lastError;
        for (let attempt = 1; attempt <= 7; attempt += 1) {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 90000);
            try {
                const response = await fetch(url, { headers: { 'User-Agent': 'Order-of-Mass bishop data builder' }, signal: controller.signal });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const buffer = Buffer.from(await response.arrayBuffer());
                if (cacheable) fs.writeFileSync(cachePath, buffer);
                return buffer;
            } catch (error) {
                lastError = error;
                await sleep(attempt * 1500);
            } finally {
                clearTimeout(timeout);
            }
        }
        throw new Error(`Download failed after retries: ${url}\n${lastError && lastError.message}`);
    })();
    requestPromises.set(url, promise);
    return promise;
}

async function textFrom(url) {
    return new TextDecoder('windows-1252').decode(await download(url));
}

async function jsonFrom(url) {
    const payload = JSON.parse((await download(url)).toString('utf8'));
    if (payload.error) throw new Error(`${payload.error.message}: ${(payload.error.details || []).join('; ')}`);
    return payload;
}

function decodeHtml(value) {
    const named = { amp: '&', apos: "'", ETH: 'Ð', eth: 'ð', gt: '>', lt: '<', nbsp: ' ', quot: '"', rsquo: '’' };
    return String(value || '')
        .replace(/<[^>]*>/g, ' ')
        .replace(/&(#x[0-9a-f]+|#\d+|[a-z][a-z0-9]+);/gi, (match, entity) => {
            if (entity[0] !== '#') return Object.prototype.hasOwnProperty.call(named, entity) ? named[entity] : match;
            const codePoint = entity[1].toLowerCase() === 'x' ? Number.parseInt(entity.slice(2), 16) : Number.parseInt(entity.slice(1), 10);
            return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : match;
        })
        .replace(/\s+/g, ' ')
        .trim();
}
function keyFromPath(value) {
    return String(value || '').replace(/^d/i, '').replace(/\.html$/i, '').toLowerCase();
}

function parseCurrentDioceses(html) {
    const records = [];
    const pattern = /<li><b><a href="\/diocese\/(d[^"]+\.html)">([\s\S]*?)<\/a><\/b>\s*\(([^)]+)\)/gi;
    for (const match of html.matchAll(pattern)) {
        const type = decodeHtml(match[3]);
        if (!/^(?:Archdiocese|Diocese|Patriarchate|Suburbicarian See|Territorial Prelature|Territorial Abbey|Apostolic Vicariate|Vicariate Apostolic|Apostolic Prefecture|Apostolic Administration|Mission sui iuris)$/i.test(type)) continue;
        records.push({ key: keyFromPath(match[1]), path: match[1], name: decodeHtml(match[2]), type });
    }
    return records;
}

function parsePerson(anchorInner, bishopPath) {
    const fullName = decodeHtml(anchorInner);
    const surnameMatch = String(anchorInner).match(/<b>([\s\S]*?)<\/b>/i);
    const surname = surnameMatch ? decodeHtml(surnameMatch[1]) : '';
    let given = surname && fullName.endsWith(surname) ? fullName.slice(0, -surname.length).trim() : fullName.split(/\s+/)[0];
    given = given.replace(/^(?:Bishop|Archbishop|Cardinal)\s+/i, '').trim() || fullName;
    return { given, fullName, sourceUrl: new URL(bishopPath, HIERARCHY_ROOT).href };
}

function parseLeadership(html) {
    const headers = [...html.matchAll(/<a href="\/diocese\/(d[^"]+\.html)">([^<]*)<\/a>[^:<]{0,160}(?:<\/b>)?\s*:/gi)];
    const byKey = new Map();
    headers.forEach((header, index) => {
        const segment = html.slice(header.index + header[0].length, headers[index + 1] ? headers[index + 1].index : html.length);
        const bishops = [...segment.matchAll(/<a href="(\/bishop\/b[^"]+\.html)">([\s\S]*?)<\/a>/gi)];
        if (!bishops.length) return;
        const parsed = bishops.map((match, bishopIndex) => {
            const tailStart = match.index + match[0].length;
            const tailEnd = bishops[bishopIndex + 1] ? bishops[bishopIndex + 1].index : segment.length;
            return { person: parsePerson(match[2], match[1]), roleText: decodeHtml(segment.slice(tailStart, tailEnd)) };
        });
        byKey.set(keyFromPath(header[1]), {
            ordinary: parsed[0].person,
            auxiliaries: parsed.slice(1).filter(item => /(?:Auxiliary|Coadjutor) Bishop/i.test(item.roleText)).map(item => item.person)
        });
    });
    return byKey;
}

function normalizeDiocese(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
        .replace(/\b(?:the|roman|catholic|metropolitan|archdiocese|diocese|apostolic|vicariate|prefecture|territorial|prelature|abbey|and|et|city|ville)\b/g, '')
        .replace(/[^a-z0-9]+/g, '');
}

function canonicalBaptismal(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z]/g, '').replace(/(?:us|ius)$/i, '');
}

function sameBaptismal(left, right) {
    const a = canonicalBaptismal(left);
    const b = canonicalBaptismal(right);
    return a && b && (a === b || (a.length >= 4 && b.length >= 4 && a.slice(0, 4) === b.slice(0, 4)));
}

function loadLegacyIndex() {
    const context = { console };
    context.globalThis = context;
    vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'JS file', 'bishop_data.js'), 'utf8'), context);
    vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'JS file', 'us_bishop_data.js'), 'utf8'), context);
    const entries = Object.entries(context.diocesanBishopData.entries);
    const index = new Map(entries.map(([name, value]) => [normalizeDiocese(name), { name, value }]));
    const addOrdered = (names, start) => names.forEach((name, offset) => index.set(normalizeDiocese(name), { name: entries[start + offset][0], value: entries[start + offset][1] }));
    addOrdered(KOREA_LEGACY_ORDER, 0);
    addOrdered(VIETNAM_LEGACY_ORDER, 16);
    addOrdered(JAPAN_LEGACY_ORDER, 43);
    return index;
}

function findLegacy(index, names) {
    for (const name of names) {
        const normalized = normalizeDiocese(name);
        if (index.has(normalized)) return index.get(normalized);
        const fuzzy = [...index.entries()].find(([key]) => key && normalized && (key.includes(normalized) || normalized.includes(key)));
        if (fuzzy) return fuzzy[1];
    }
    return null;
}

function localizedPerson(current, legacyPerson) {
    const useLegacy = legacyPerson && sameBaptismal(current.given, legacyPerson.en);
    const fallback = current.given.split(/\s+/)[0];
    const result = {
        kr: useLegacy ? legacyPerson.kr : fallback,
        vn: useLegacy ? legacyPerson.vn : fallback,
        en: useLegacy ? legacyPerson.en : fallback,
        jp: useLegacy ? legacyPerson.jp : fallback,
        la: useLegacy ? legacyPerson.la : fallback,
        zh: fallback,
        it: fallback,
        pt: fallback,
        es: fallback,
        de: fallback,
        fullName: current.fullName
    };
    return result;
}
function popeLeoPerson() {
    return { kr: '\uB808\uC624', vn: 'Leo', en: 'Leo', jp: '\u30EC\u30AA', la: 'Leo', zh: '\u826F', it: 'Leone', pt: 'Leao', es: 'Leon', de: 'Leo', fullName: 'Pope Leo XIV' };
}


function mergePeople(leadership, legacy) {
    if (!leadership || !leadership.ordinary) return { ordinary: null, auxiliaries: [] };
    const legacyEntry = legacy && legacy.value;
    const ordinary = localizedPerson(leadership.ordinary, legacyEntry && legacyEntry.ordinary);
    const available = legacyEntry && Array.isArray(legacyEntry.auxiliaries) ? legacyEntry.auxiliaries.slice() : [];
    const auxiliaries = leadership.auxiliaries.map(current => {
        const matchIndex = available.findIndex(person => sameBaptismal(current.given, person.en));
        return localizedPerson(current, matchIndex >= 0 ? available.splice(matchIndex, 1)[0] : null);
    });
    return { ordinary, auxiliaries };
}

function boundaryUrl(countryCode) {
    const params = new URLSearchParams({
        f: 'json',
        where: `CountryKey='${countryCode}' AND RiteKey='la'`,
        outFields: 'DioceseKey,DioceseName,DioType,AreaSqKm',
        returnGeometry: 'true',
        outSR: '4326'
    });
    return `${BOUNDARY_SERVICE}?${params}`;
}

function boundsAndCenter(rings) {
    let xmin = Infinity;
    let ymin = Infinity;
    let xmax = -Infinity;
    let ymax = -Infinity;
    for (const ring of rings || []) {
        for (const point of ring || []) {
            if (!Array.isArray(point) || point.length < 2) continue;
            xmin = Math.min(xmin, point[0]);
            ymin = Math.min(ymin, point[1]);
            xmax = Math.max(xmax, point[0]);
            ymax = Math.max(ymax, point[1]);
        }
    }
    if (![xmin, ymin, xmax, ymax].every(Number.isFinite)) return null;
    return { bounds: [xmin, ymin, xmax, ymax], center: [(xmin + xmax) / 2, (ymin + ymax) / 2] };
}

async function geocodeCenter(name, countryLabel) {
    const params = new URLSearchParams({ f: 'json', SingleLine: `${name} Catholic Cathedral, ${countryLabel}`, outFields: 'Match_addr', maxLocations: '1' });
    const payload = await jsonFrom(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?${params}`);
    const location = payload.candidates && payload.candidates[0] && payload.candidates[0].location;
    return location ? [location.x, location.y] : null;
}

function moduleSource(payload) {
    return `// Generated by tools/build-bishop-conference-data.js. Do not hand-edit.\n(function(g){const d=${JSON.stringify(payload)};if(g.ordoBishopDataApi)g.ordoBishopDataApi.register(d);else(g.pendingBishopConferenceData=g.pendingBishopConferenceData||[]).push(d);})(globalThis);\n`;
}

async function countryData(country, legacyIndex) {
    const currentUrl = `${HIERARCHY_ROOT}/country/d${country.code}2.html`;
    const leadershipUrl = `${HIERARCHY_ROOT}/country/b${country.code}qv.html`;
    const [currentHtml, leadershipHtml, boundaryPayload] = await Promise.all([
        textFrom(currentUrl),
        textFrom(leadershipUrl),
        jsonFrom(boundaryUrl(country.code))
    ]);
    const current = parseCurrentDioceses(currentHtml);
    const leadership = parseLeadership(leadershipHtml);
    const boundaries = new Map((boundaryPayload.features || []).map(feature => [String(feature.attributes.DioceseKey || '').toLowerCase(), feature]));
    const records = [];
    for (const diocese of current) {
        const boundary = boundaries.get(diocese.key);
        const boundaryName = boundary && boundary.attributes.DioceseName;
        const legacy = findLegacy(legacyIndex, [diocese.name, boundaryName]);
        const people = mergePeople(leadership.get(diocese.key), legacy);
        if (country.code === 'it' && diocese.key === 'roma') people.ordinary = popeLeoPerson();
        let territory = null;
        if (boundary && boundary.geometry && Array.isArray(boundary.geometry.rings)) {
            const dimensions = boundsAndCenter(boundary.geometry.rings);
            territory = dimensions && {
                kind: 'polygon',
                spatialReference: 4326,
                bounds: dimensions.bounds,
                center: dimensions.center,
                areaSqKm: Number(boundary.attributes.AreaSqKm) || null,
                rings: boundary.geometry.rings
            };
        } else {
            const center = await geocodeCenter(diocese.name, country.label);
            if (center) territory = { kind: 'point', spatialReference: 4326, center, approximate: true };
        }
        records.push({
            key: diocese.key,
            name: `${diocese.type} of ${diocese.name}`,
            aliases: [...new Set([diocese.name, boundaryName, legacy && legacy.name].filter(Boolean))],
            ordinary: people.ordinary,
            auxiliaries: people.auxiliaries,
            collaboratorSummary: people.auxiliaries.length > 1,
            status: people.ordinary ? 'active' : 'vacant',
            sourceUrls: [`${HIERARCHY_ROOT}/diocese/d${diocese.key}.html`, leadershipUrl],
            territory
        });
    }
    return records;
}

async function buildConference(config, legacyIndex, updatedAt) {
    let dioceses = [];
    for (const country of config.countries) dioceses = dioceses.concat(await countryData(country, legacyIndex));
    if (config.accept) dioceses = dioceses.filter(diocese => config.accept(diocese.aliases[0]));
    dioceses.sort((a, b) => a.name.localeCompare(b.name, 'en'));
    const payload = {
        schemaVersion: 1,
        id: config.id,
        name: config.name,
        locations: config.locations,
        updatedAt,
        boundarySnapshot: 'GoodLands version 1.2 (2016)',
        boundaryLicense: 'CC BY-ND 4.0; source geometry retained without coordinate simplification',
        sources: [config.official, BOUNDARY_ITEM, ...config.countries.map(country => `${HIERARCHY_ROOT}/country/b${country.code}qv.html`)],
        dioceses
    };
    fs.writeFileSync(path.join(OUTPUT_DIR, config.file), moduleSource(payload), 'utf8');
    return { id: config.id, file: config.file, dioceses: dioceses.length, withOrdinary: dioceses.filter(item => item.ordinary).length, polygons: dioceses.filter(item => item.territory && item.territory.kind === 'polygon').length, points: dioceses.filter(item => item.territory && item.territory.kind === 'point').length };
}

function buildHolySee(updatedAt) {
    const payload = {
        schemaVersion: 1,
        id: 'HOLY_SEE',
        name: 'Holy See',
        locations: ['VA'],
        updatedAt,
        boundarySnapshot: 'Vatican City State geographic bounds',
        sources: ['https://www.vatican.va/content/vatican/en.html', 'https://www.vaticanstate.va/'],
        dioceses: [{
            key: 'roma-vatican',
            name: 'Diocese of Rome (Vatican City)',
            aliases: ['Rome', 'Roma', 'Vatican City'],
            ordinary: popeLeoPerson(),
            auxiliaries: [],
            collaboratorSummary: false,
            status: 'active',
            sourceUrls: ['https://www.vatican.va/content/leo-xiv/en.html'],
            territory: { kind: 'polygon', spatialReference: 4326, bounds: [12.4457, 41.9001, 12.4584, 41.9071], center: [12.4534, 41.9036], areaSqKm: 0.49, rings: [[[12.4457, 41.9001], [12.4584, 41.9001], [12.4584, 41.9071], [12.4457, 41.9071], [12.4457, 41.9001]]] }
        }]
    };
    fs.writeFileSync(path.join(OUTPUT_DIR, 'holy_see.js'), moduleSource(payload), 'utf8');
    return { id: payload.id, file: 'holy_see.js', dioceses: 1, withOrdinary: 1, polygons: 1, points: 0 };
}

async function main() {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    const updatedAt = localIsoDate();
    const legacyIndex = loadLegacyIndex();
    const summaries = [];
    for (const config of CONFERENCES) {
        const summary = await buildConference(config, legacyIndex, updatedAt);
        summaries.push(summary);
        process.stdout.write(`${summary.id}: ${summary.dioceses} jurisdictions, ${summary.withOrdinary} ordinaries, ${summary.polygons} polygons, ${summary.points} point fallbacks\n`);
    }
    const holySee = buildHolySee(updatedAt);
    summaries.push(holySee);
    process.stdout.write(`${holySee.id}: 1 jurisdiction, 1 ordinary, 1 polygon\n`);
    fs.writeFileSync(path.join(OUTPUT_DIR, 'build-summary.json'), `${JSON.stringify({ updatedAt, conferences: summaries }, null, 2)}\n`, 'utf8');
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
