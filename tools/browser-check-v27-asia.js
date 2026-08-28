const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const jurisdictions = ['TW', 'CN', 'PH', 'ID', 'TH', 'KH', 'SG', 'MY', 'BN', 'HK', 'MO'];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function startServer() {
  const mime = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png'
  };
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://127.0.0.1');
    const route = decodeURIComponent(url.pathname === '/' ? '/V27.html' : url.pathname);
    const file = path.resolve(root, route.replace(/^\/+/, ''));
    if (!file.startsWith(root)) return response.writeHead(403).end('Forbidden');
    fs.readFile(file, (error, data) => {
      if (error) return response.writeHead(404).end('Not found');
      response.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream' });
      response.end(data);
    });
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

(async () => {
  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 412, height: 915 } });
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.stack || String(error)));
  await page.addInitScript(() => {
    window.fetch = async () => { throw new Error('Remote startup fetch disabled by V27 Asia check'); };
  });

  try {
    await page.goto(`http://127.0.0.1:${server.address().port}/V27.html`, {
      waitUntil: 'domcontentloaded',
      timeout: 90000
    });
    await page.locator('#consent-accept').click({ timeout: 15000 }).catch(() => {});
    await page.waitForFunction(() => typeof render === 'function' && document.querySelectorAll('#missal-root > *').length > 0, null, {
      timeout: 90000
    });

    const result = await page.evaluate(codes => {
      const optionFor = code => document.querySelector(`#set-loc option[value="${code}"]`);
      const date = (year, month, day) => new Date(year, month - 1, day, 12, 0, 0);
      const profiles = Object.fromEntries(codes.map(code => [code, liturgicalCalendarProfiles[code]]));
      const options = Object.fromEntries(codes.map(code => {
        const option = optionFor(code);
        return [code, {
          label: option && option.textContent,
          group: option && option.parentElement && option.parentElement.label
        }];
      }));
      const dailyUrls = Object.fromEntries(codes.map(code => {
        state.selectedLocationCode = code;
        state.currentLoc = 'EN';
        return [code, strictDailySourceEntryUrl('EN', date(2026, 8, 28))];
      }));
      const localProper = code => {
        state.selectedLocationCode = code;
        state.currentLoc = 'EN';
        const entry = localMissalEntryForLanguage('EN', date(2026, 7, 9));
        return entry ? { title: entry.title, sections: Object.keys(entry.data || {}) } : null;
      };
      return {
        version: APP_VERSION,
        profiles,
        options,
        groups: Array.from(document.querySelectorAll('#set-loc optgroup')).map(group => group.label),
        registries: {
          mass: Object.keys(globalThis.countryMassData || {}),
          prayers: Object.keys(globalThis.countryPrayerData || {}),
          hymns: Object.keys(globalThis.countryHymnData || {}),
          churches: Object.keys(globalThis.countryChurchData || {})
        },
        moduleState: Object.fromEntries(codes.map(code => [code, {
          massBeta: !!globalThis.countryMassData[code]?.beta,
          prayer: globalThis.countryPrayerData[code]?.status,
          prayerLabel: globalThis.countryPrayerData[code]?.statusLabels?.KR,
          hymn: globalThis.countryHymnData[code]?.status,
          hymnLabel: globalThis.countryHymnData[code]?.statusLabels?.KR,
          churchCount: globalThis.countryChurchData[code]?.entries?.length || 0
        }])),
        churchTotal: churchLocalDetailRecords.length,
        calendars: {
          philippines: getCountryCalendarOverride(date(2026, 1, 18), 'PH'),
          indonesia: getCountryCalendarOverride(date(2026, 8, 17), 'ID'),
          thailand: getCountryCalendarOverride(date(2026, 12, 16), 'TH'),
          singapore: getCountryCalendarOverride(date(2026, 2, 14), 'SG'),
          macau: getCountryCalendarOverride(date(2026, 12, 3), 'MO')
        },
        chinesePropers: Object.fromEntries(['TW', 'CN', 'HK', 'MO'].map(code => [code, localProper(code)])),
        dailyUrls,
        gps: {
          taipei: gpsLocationForCoordinates(25.033, 121.5654),
          beijing: gpsLocationForCoordinates(39.9042, 116.4074),
          manila: gpsLocationForCoordinates(14.5995, 120.9842),
          jakarta: gpsLocationForCoordinates(-6.2088, 106.8456),
          bangkok: gpsLocationForCoordinates(13.7563, 100.5018),
          phnomPenh: gpsLocationForCoordinates(11.5564, 104.9282),
          singapore: gpsLocationForCoordinates(1.3521, 103.8198),
          kualaLumpur: gpsLocationForCoordinates(3.139, 101.6869),
          bandar: gpsLocationForCoordinates(4.9031, 114.9398),
          hongKong: gpsLocationForCoordinates(22.3193, 114.1694),
          macau: gpsLocationForCoordinates(22.1987, 113.5439)
        },
        newScriptCount: Array.from(document.scripts).filter(script => /countries\/(?:taiwan|china|philippines|indonesia|thailand|cambodia|malaysia_singapore_brunei|hong_kong|macau)\//.test(decodeURIComponent(script.src))).length
      };
    }, jurisdictions);

    assert(result.version === 'V27-20260828-ASIA-CONFERENCE-BETA', `Unexpected version: ${result.version}`);
    jurisdictions.forEach(code => {
      assert(result.options[code] && /Beta/i.test(result.options[code].label), `Beta label missing for ${code}`);
      assert(result.options[code].group, `Episcopal group missing for ${code}`);
      Object.entries(result.registries).forEach(([registry, keys]) => assert(keys.includes(code), `${registry} registry is missing ${code}`));
      const module = result.moduleState[code];
      assert(module.massBeta, `Mass module is not beta for ${code}`);
      assert(module.prayer === 'under-development' && module.prayerLabel === '(제작중)', `Prayer placeholder is wrong for ${code}`);
      assert(module.hymn === 'under-development' && module.hymnLabel === '(제작중)', `Hymn placeholder is wrong for ${code}`);
      assert(module.churchCount >= 1, `Church directory is empty for ${code}`);
    });
    assert(['MY', 'SG', 'BN'].every(code => /CBCMSB/.test(result.options[code].group)), 'CBCMSB settings are not grouped together.');
    assert(new Set(['TW', 'CN', 'HK', 'MO'].map(code => result.options[code].group)).size === 4, 'Chinese jurisdictions were grouped together.');
    ['TW', 'CN', 'HK', 'MO'].forEach(code => assert(result.options[code].label.includes(`ZH-${code}`), `Chinese variant is missing for ${code}`));
    assert(result.profiles.TW.languageVariant === 'ZH-TW'
      && result.profiles.CN.languageVariant === 'ZH-CN'
      && result.profiles.HK.languageVariant === 'ZH-HK'
      && result.profiles.MO.languageVariant === 'ZH-MO', 'Chinese calendar profiles are not split.');
    assert(/Santo Niño/i.test(JSON.stringify(result.calendars.philippines)), 'Philippines Santo Niño calendar override is missing.');
    assert(/Independence Day/i.test(JSON.stringify(result.calendars.indonesia)), 'Indonesia Independence Day calendar override is missing.');
    assert(/Songkhon/i.test(JSON.stringify(result.calendars.thailand)), 'Thailand Songkhon calendar override is missing.');
    assert(/Good Shepherd/i.test(JSON.stringify(result.calendars.singapore)), 'Singapore cathedral dedication is missing.');
    assert(/Francis Xavier/i.test(JSON.stringify(result.calendars.macau)), 'Macau diocesan patron is missing.');
    Object.entries(result.chinesePropers).forEach(([code, proper]) => {
      assert(proper && /Martyrs/i.test(proper.title), `Chinese martyrs proper is missing for ${code}`);
      ['entrance', 'collect', 'prayer_offerings', 'preface', 'communion', 'prayer_after'].forEach(section => {
        assert(proper.sections.includes(section), `${code} Chinese martyrs proper is missing ${section}`);
      });
    });
    assert(/\/L\/Philippines\/20260828\/mass\.htm$/.test(result.dailyUrls.PH), `Bad Philippines daily URL: ${result.dailyUrls.PH}`);
    assert(/\/L\/asia\.indonesia\/20260828\/mass\.htm$/.test(result.dailyUrls.ID), `Bad Indonesia daily URL: ${result.dailyUrls.ID}`);
    ['SG', 'MY', 'BN'].forEach(code => assert(/\/L\/asia\.(?:singapore|malaysia)\/20260828\/mass\.htm$/.test(result.dailyUrls[code]), `Bad ${code} daily URL: ${result.dailyUrls[code]}`));
    assert(JSON.stringify(result.gps) === JSON.stringify({
      taipei: 'TW', beijing: 'CN', manila: 'PH', jakarta: 'ID', bangkok: 'TH', phnomPenh: 'KH',
      singapore: 'SG', kualaLumpur: 'MY', bandar: 'BN', hongKong: 'HK', macau: 'MO'
    }), `GPS mapping failed: ${JSON.stringify(result.gps)}`);
    assert(result.churchTotal === 4897, `Church count changed: ${result.churchTotal}`);
    assert(result.newScriptCount === 36, `Expected 36 jurisdiction module scripts, found ${result.newScriptCount}`);
    assert(pageErrors.length === 0, `Page errors:\n${pageErrors.join('\n')}`);
    console.log(JSON.stringify(result, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
