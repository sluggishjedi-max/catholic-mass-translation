const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');

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

async function jinaIrelandSource(dateKey) {
  const response = await fetch(`https://r.jina.ai/http://universalis.com/L/europe.ireland/${dateKey}/mass.htm`);
  assert(response.ok, `Universalis/Jina request failed for ${dateKey}: ${response.status}`);
  return response.text();
}

(async () => {
  const [knockSource, weekdaySource] = await Promise.all([
    jinaIrelandSource('20260817'),
    jinaIrelandSource('20260831')
  ]);
  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 412, height: 915 } });
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.stack || String(error)));
  await page.addInitScript(() => {
    window.fetch = async () => { throw new Error('Remote startup fetch disabled by V27 Ireland check'); };
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

    const result = await page.evaluate(({ knockSource, weekdaySource }) => {
      state.selectedLocationCode = 'IE';
      state.currentLoc = 'EN';
      const knockDate = new Date(2026, 7, 17, 12, 0, 0);
      const weekdayDate = new Date(2026, 7, 31, 12, 0, 0);
      const knock = strictParseDailyMass('EN', knockSource, knockDate);
      const weekday = strictParseDailyMass('EN', weekdaySource, weekdayDate);
      const serialize = value => JSON.stringify(value || {});
      return {
        version: APP_VERSION,
        locations: ['IE', 'GB-NIR'].map(code => ({
          code,
          profile: liturgicalCalendarProfiles[code] && liturgicalCalendarProfiles[code].id,
          calendar: liturgicalCalendarProfiles[code] && liturgicalCalendarProfiles[code].countryCalendar,
          betaOption: document.querySelector(`#set-loc option[value="${code}"]`)?.textContent || ''
        })),
        registries: {
          mass: Object.keys(globalThis.countryMassData || {}),
          hymns: Object.keys(globalThis.countryHymnData || {}),
          prayers: Object.keys(globalThis.countryPrayerData || {}),
          churches: Object.keys(globalThis.countryChurchData || {})
        },
        counts: {
          mass: missaData.length,
          hymns: hymnData.length,
          prayers: prayerData.length,
          churches: churchLocalDetailRecords.length
        },
        irelandCalendarDates: Object.keys(countryFixedSaintsCalendar.IE || {}).length,
        knockCalendar: getCountryCalendarOverride(knockDate, 'IE'),
        urls: {
          ireland: strictDailySourceEntryUrl('EN', knockDate),
          northernIreland: (() => {
            state.selectedLocationCode = 'GB-NIR';
            const url = strictDailySourceEntryUrl('EN', knockDate);
            state.selectedLocationCode = 'IE';
            return url;
          })()
        },
        knock: { title: knock.title, text: serialize(knock.data) },
        weekday: { title: weekday.title, text: serialize(weekday.data) },
        patrickProper: (() => {
          const entry = localMissalEntryForLanguage('EN', new Date(2026, 2, 17, 12, 0, 0));
          return entry ? { title: entry.title, sections: Object.keys(entry.data || {}) } : null;
        })(),
        pendingModules: {
          hymns: globalThis.countryHymnData.IE && globalThis.countryHymnData.IE.status,
          prayers: globalThis.countryPrayerData.IE && globalThis.countryPrayerData.IE.status,
          hymnLabel: globalThis.countryHymnData.IE && globalThis.countryHymnData.IE.statusLabels.EN,
          prayerLabel: globalThis.countryPrayerData.IE && globalThis.countryPrayerData.IE.statusLabels.KR
        },
        irelandChurches: churchLocalDetailRecords.filter(item => item.country === 'IE' || item.country === 'GB-NIR').length
      };
    }, { knockSource, weekdaySource });

    assert(result.version === 'V27-20260828-ASIA-CONFERENCE-BETA', `Unexpected version: ${result.version}`);
    result.locations.forEach(location => {
      assert(location.profile === 'IRELAND' && location.calendar === 'IE', `Bad location profile: ${JSON.stringify(location)}`);
      assert(/Beta/i.test(location.betaOption), `Beta label missing for ${location.code}`);
    });
    Object.entries(result.registries).forEach(([name, keys]) => {
      ['KR', 'VN', 'US', 'JP', 'VA', 'IE'].forEach(key => assert(keys.includes(key), `${name} registry is missing ${key}`));
    });
    assert(result.counts.mass === 32, `Mass ordinary count changed: ${result.counts.mass}`);
    assert(result.counts.hymns === 3064, `Hymn count changed: ${result.counts.hymns}`);
    assert(result.counts.prayers === 575, `Prayer count changed: ${result.counts.prayers}`);
    assert(result.counts.churches === 4897, `Church count changed: ${result.counts.churches}`);
    assert(result.irelandCalendarDates >= 60, `Ireland calendar is incomplete: ${result.irelandCalendarDates}`);
    assert(/Knock/i.test(JSON.stringify(result.knockCalendar)), 'Our Lady of Knock is missing from the Ireland calendar.');
    assert(Object.values(result.urls).every(url => /\/L\/europe\.ireland\/20260817\/mass\.htm$/i.test(url)), `Bad Ireland URL: ${JSON.stringify(result.urls)}`);
    assert(/Knock/i.test(result.knock.title), `Knock title was not selected: ${result.knock.title}`);
    assert(/1 John 4:7-16/i.test(result.knock.text), 'Knock memorial first reading was not selected.');
    assert(!/1 Corinthians 1:1-9/i.test(result.knock.text), 'Knock parsing retained the feria first reading.');
    ['reading1', 'psalm', 'gospel_accl', 'gospel'].forEach(key => {
      assert(result.knock.text.includes(`"${key}"`), `Knock parsing is missing ${key}`);
      assert(result.weekday.text.includes(`"${key}"`), `Weekday parsing is missing ${key}`);
    });
    assert(/Psalm 118\(119\):97-102/i.test(result.weekday.text), 'The unavailable weekday psalm lost its citation.');
    assert(/not available on the public web source/i.test(result.weekday.text), 'The unavailable weekday psalm is not explained.');
    assert(result.patrickProper && /Patrick/i.test(result.patrickProper.title), 'Saint Patrick national proper is unavailable.');
    ['entrance', 'collect', 'prayer_offerings', 'preface', 'communion', 'prayer_after'].forEach(key => {
      assert(result.patrickProper.sections.includes(key), `Saint Patrick proper is missing ${key}`);
    });
    assert(result.pendingModules.hymns === 'under-development'
      && result.pendingModules.prayers === 'under-development'
      && /Under development/i.test(result.pendingModules.hymnLabel)
      && /제작중/u.test(result.pendingModules.prayerLabel),
    `Ireland hymn/prayer placeholders are incomplete: ${JSON.stringify(result.pendingModules)}`);
    assert(result.irelandChurches === 6, `Expected six Irish-island churches, found ${result.irelandChurches}`);
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
