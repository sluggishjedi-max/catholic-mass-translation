const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const churchDataPath = path.join(root, 'JS file', 'church_local_details.js');
const outputPath = process.env.ORDO_CANTHO_GOOGLE_AUDIT
  || path.join(__dirname, 'cantho-google-places-audit.json');
const appUrl = process.env.ORDO_AUDIT_URL
  || 'https://sluggishjedi-max.github.io/catholic-mass-translation/';

function loadCanThoRecords() {
  const sandbox = {};
  vm.runInNewContext(fs.readFileSync(churchDataPath, 'utf8'), { globalThis: sandbox });
  return (sandbox.churchLocalDetailRecords || [])
    .filter(record => record.diocese === 'Giáo phận Cần Thơ' && record.address)
    .map(record => ({
      name: record.name || '',
      directoryName: record.directoryName || '',
      officialDirectoryName: record.officialDirectoryName || '',
      deanery: record.deanery || '',
      address: record.address || ''
    }));
}

function foldAuditText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[ĐÐ]/g, 'D')
    .replace(/[đð]/g, 'd')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();
}

function auditNameKey(value) {
  const generic = new Set([
    'giao', 'xu', 'ho', 'dao', 'nha', 'tho', 'cong', 'diem',
    'church', 'parish', 'catholic', 'can', 'tho', 'tpct'
  ]);
  return foldAuditText(value).split(/\s+/).filter(token => token && !generic.has(token)).join(' ');
}

function revalidateGoogleAuditRecords(records) {
  const validated = records.map(item => {
    if (item.status !== 'matched') return item;
    const placeText = `${item.googleName || ''} ${(item.googleTypes || []).join(' ')}`;
    const catholic = /church|catholic|parish|cathedral|chapel|bishop|nhà thờ|giáo xứ|giáo họ|tòa giám mục/i.test(placeText)
      && !/tin lành|protestant|baptist|methodist|evangelical|nghĩa trang|cemetery/i.test(placeText);
    const recordKey = auditNameKey(item.directoryName);
    const googleKey = auditNameKey(item.googleName);
    const special = /^chanh toa$/i.test(foldAuditText(item.directoryName))
      && /cathedral/i.test(placeText);
    const allowedRegion = /can tho|ca mau|soc trang|hau giang|bac lieu/i.test(foldAuditText(item.googleAddress));
    const valid = special || (
      catholic
      && recordKey
      && googleKey.includes(recordKey)
      && Number(item.sharedAddressTokens || 0) >= 1
      && allowedRegion
    );
    return valid ? item : { ...item, status: 'missing', matchType: 'rejected-place' };
  });
  const byPlaceId = new Map();
  validated.forEach((item, index) => {
    if (item.status !== 'matched' || !item.placeId) return;
    const priorIndex = byPlaceId.get(item.placeId);
    if (priorIndex == null) {
      byPlaceId.set(item.placeId, index);
      return;
    }
    const prior = validated[priorIndex];
    const rejectIndex = Number(item.score || 0) > Number(prior.score || 0) ? priorIndex : index;
    validated[rejectIndex] = {
      ...validated[rejectIndex],
      status: 'missing',
      matchType: 'duplicate-place-rejected'
    };
    if (rejectIndex === priorIndex) byPlaceId.set(item.placeId, index);
  });
  return validated;
}

(async () => {
  if (process.argv.includes('--revalidate-existing')) {
    const payload = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
    payload.records = revalidateGoogleAuditRecords(payload.records || []);
    payload.summary = payload.records.reduce((counts, item) => {
      counts[item.status] = (counts[item.status] || 0) + 1;
      counts[item.matchType || 'none'] = (counts[item.matchType || 'none'] || 0) + 1;
      return counts;
    }, {});
    fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
    console.log(JSON.stringify({ output: outputPath, recordCount: payload.records.length, summary: payload.summary }, null, 2));
    return;
  }
  const records = loadCanThoRecords();
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    page.on('console', message => {
      if (message.type() === 'error') console.error(`[browser] ${message.text()}`);
    });
    await page.goto(`${appUrl}${appUrl.includes('?') ? '&' : '?'}audit=${Date.now()}`, {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
    await page.waitForFunction(() => typeof loadGoogleMapsForChurches === 'function', null, { timeout: 30000 });
    let audit = await page.evaluate(async officialRecords => {
      await loadGoogleMapsForChurches();
      const placesLibrary = await google.maps.importLibrary('places');
      const Place = placesLibrary.Place;
      const fold = value => String(value || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[ĐÐ]/g, 'D')
        .replace(/[đð]/g, 'd')
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, ' ')
        .trim();
      const generic = new Set([
        'giao', 'xu', 'ho', 'dao', 'nha', 'tho', 'cong', 'diem',
        'church', 'parish', 'catholic', 'can', 'tho', 'tpct',
        'ap', 'khu', 'vuc', 'xa', 'huyen', 'tinh', 'pho',
        'phuong', 'duong', 'viet', 'nam', 'hau', 'giang', 'soc', 'trang',
        'bac', 'lieu', 'ca', 'mau'
      ]);
      const tokens = value => fold(value).split(/\s+/).filter(token => token && !generic.has(token));
      const overlap = (left, right) => {
        const rightSet = new Set(tokens(right));
        return tokens(left).filter(token => rightSet.has(token)).length;
      };
      const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
      const locateAddressWithPlaces = async address => {
        try {
          const response = await Place.searchByText({
            textQuery: `${address}, Việt Nam`,
            fields: ['id', 'displayName', 'formattedAddress', 'location', 'types', 'googleMapsURI'],
            locationBias: { lat: 9.9, lng: 105.6 },
            maxResultCount: 1
          });
          return response && response.places && response.places[0] || null;
        } catch (error) {
          return null;
        }
      };

      const results = [];
      for (let index = 0; index < officialRecords.length; index += 1) {
        const record = officialRecords[index];
        let places = [];
        let searchError = '';
        const query = `${record.name || `Giáo xứ ${record.directoryName}`} ${record.address}`;
        try {
          const response = await Place.searchByText({
            textQuery: query,
            fields: ['id', 'displayName', 'formattedAddress', 'location', 'types', 'googleMapsURI'],
            locationBias: { lat: 9.9, lng: 105.6 },
            maxResultCount: 5
          });
          places = response && response.places || [];
        } catch (error) {
          searchError = String(error && error.message || error);
        }
        const ranked = places.map(place => {
          const recordNameTokens = tokens(record.directoryName || record.name);
          const sharedNameTokens = overlap(record.directoryName || record.name, place.displayName);
          const nameCoverage = sharedNameTokens / Math.max(recordNameTokens.length, 1);
          const recordNameKey = recordNameTokens.join(' ');
          const googleNameKey = tokens(place.displayName).join(' ');
          const namePhraseMatch = !!recordNameKey && googleNameKey.includes(recordNameKey);
          const sharedAddressTokens = overlap(record.address, place.formattedAddress);
          const placeText = `${place.displayName} ${(place.types || []).join(' ')}`;
          const catholic = /church|catholic|parish|cathedral|chapel|bishop|nhà thờ|giáo xứ|giáo họ|tòa giám mục/i.test(placeText)
            && !/tin lành|protestant|baptist|methodist|evangelical|nghĩa trang|cemetery/i.test(placeText);
          const special = /^(?:Chánh Tòa|Tòa Giám Mục)$/i.test(record.directoryName)
            && /cathedral|tòa giám mục|bishop/i.test(placeText);
          const allowedRegion = /can tho|cần thơ|ca mau|cà mau|soc trang|sóc trăng|hau giang|hậu giang|bac lieu|bạc liêu/i.test(place.formattedAddress || '');
          const valid = special || (catholic && namePhraseMatch && sharedAddressTokens >= 1 && allowedRegion);
          const score = nameCoverage * 100 + sharedAddressTokens * 4 + (catholic ? 15 : 0);
          return {
            place,
            score,
            nameCoverage,
            sharedNameTokens,
            sharedAddressTokens,
            catholic,
            valid
          };
        }).sort((a, b) => b.score - a.score);
        const best = ranked.find(candidate => candidate.valid);
        let result = null;
        if (best) {
          const location = best.place.location;
          result = {
            matchType: 'place',
            googleName: String(best.place.displayName || ''),
            googleAddress: String(best.place.formattedAddress || ''),
            placeId: String(best.place.id || ''),
            googleMapsUrl: String(best.place.googleMapsURI || ''),
            lat: Number(typeof location.lat === 'function' ? location.lat() : location.lat),
            lng: Number(typeof location.lng === 'function' ? location.lng() : location.lng),
            score: best.score,
            nameCoverage: best.nameCoverage,
            sharedAddressTokens: best.sharedAddressTokens,
            googleTypes: best.place.types || [],
            candidateCount: places.length
          };
        } else {
          const geocoded = await locateAddressWithPlaces(record.address);
          if (geocoded) result = {
            matchType: 'unverified-address-result',
            googleName: String(geocoded.displayName || ''),
            googleAddress: String(geocoded.formattedAddress || ''),
            placeId: String(geocoded.id || ''),
            googleMapsUrl: String(geocoded.googleMapsURI || ''),
            googleTypes: geocoded.types || [],
            candidateCount: places.length
          };
        }
        results.push({
          directoryName: record.directoryName,
          officialDirectoryName: record.officialDirectoryName,
          deanery: record.deanery,
          officialAddress: record.address,
          status: result && result.matchType === 'place' ? 'matched' : 'missing',
          searchError,
          ...(result || {})
        });
        if ((index + 1) % 10 === 0 || index + 1 === officialRecords.length) {
          console.log(`Cần Thơ Google audit ${index + 1}/${officialRecords.length}`);
        }
        await sleep(120);
      }
      return results;
    }, records);
    audit = revalidateGoogleAuditRecords(audit);
    const summary = audit.reduce((counts, item) => {
      counts[item.status] = (counts[item.status] || 0) + 1;
      counts[item.matchType || 'none'] = (counts[item.matchType || 'none'] || 0) + 1;
      return counts;
    }, {});
    const payload = {
      generatedAt: new Date().toISOString(),
      officialSource: 'https://gpcantho.com/dia-chi-cac-giao-xu-giao-phan-can-tho/',
      googleSource: 'Google Places API / Google Geocoding API',
      recordCount: records.length,
      summary,
      records: audit
    };
    fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
    console.log(JSON.stringify({ output: outputPath, recordCount: records.length, summary }, null, 2));
  } finally {
    await browser.close();
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exit(1);
});
