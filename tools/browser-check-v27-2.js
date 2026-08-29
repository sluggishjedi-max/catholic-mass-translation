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
    const route = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
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
  const context = await browser.newContext({ viewport: { width: 412, height: 915 } });
  const page = await context.newPage();
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.stack || String(error)));
  await page.addInitScript(() => {
    const originalFetch = window.fetch.bind(window);
    window.fetch = async (url, options) => {
      if (String(url).startsWith(location.origin)) return originalFetch(url, options);
      throw new Error('Remote fetch disabled by V27.2 browser check');
    };
    Object.defineProperty(navigator, 'geolocation', {
      configurable: true,
      value: {
        getCurrentPosition(success) {
          success({ coords: { latitude: 14.5995, longitude: 120.9842 } });
        }
      }
    });
  });

  try {
    await page.goto(`http://127.0.0.1:${server.address().port}/index.html`, {
      waitUntil: 'domcontentloaded',
      timeout: 90000
    });
    await page.locator('#consent-accept').click({ timeout: 15000 }).catch(() => {});
    await page.waitForFunction(() => typeof render === 'function' && typeof updateSettings === 'function', null, {
      timeout: 90000
    });
    await page.waitForFunction(() => state.selectedLocationCode === 'PH' && document.querySelector('#set-loc').disabled, null, {
      timeout: 15000
    });

    const result = await page.evaluate(() => {
      const unsupported = ['TW', 'CN', 'ID', 'TH', 'KH', 'SG', 'MY', 'BN', 'HK', 'MO'];
      const locationSelect = document.getElementById('set-loc');
      const visibleGpsOptions = Array.from(locationSelect.options).filter(option => !option.hidden).map(option => option.value);
      const initial = {
        useGps: state.useGps,
        code: state.selectedLocationCode,
        left: state.currentLoc,
        disabled: locationSelect.disabled,
        visibleGpsOptions
      };

      document.getElementById('set-target-lang').value = 'JP';
      updateSettings();
      const afterRightChange = { useGps: state.useGps, code: state.selectedLocationCode, target: state.targetLang };

      document.getElementById('set-gps').checked = false;
      updateSettings();
      const manualEnabled = !locationSelect.disabled;
      locationSelect.value = 'IE';
      selectManualLocation();
      const afterManual = { useGps: state.useGps, code: state.selectedLocationCode, left: state.currentLoc };

      document.getElementById('set-ui-lang').value = 'JP';
      updateSettings();
      const jpUi = {
        settingsTitle: document.getElementById('lbl-settings-title').textContent,
        consentTitle: document.getElementById('consent-title').textContent,
        targetLabel: document.querySelector('#set-target-lang option[value="JP"]').textContent,
        uiLabel: document.querySelector('#set-ui-lang option[value="JP"]').textContent
      };

      const modules = globalThis.countryMassData;
      const date = (year, month, day) => new Date(year, month - 1, day, 12, 0, 0);
      const activeProperWasIreland = localMissalLanguageData('EN') === modules.IE.romanMissalProperData;
      const irelandLocalProper = localMissalEntryForLanguage('EN', date(2026, 2, 1));
      locationSelect.value = 'PH';
      selectManualLocation();
      const philippinesGeneralProper = localMissalEntryForLanguage('EN', date(2026, 8, 29));
      const philippinesSantoNinoProper = localMissalEntryForLanguage('EN', date(2026, 1, 18));
      const cbcpBoundaryFixture = `Title: Today's Readings
URL Source: https://cbcp.ph/readings/august-29-2026/
Markdown Content:
# Today's Readings
### Reading 1
1 Corinthians 1:26-31
Consider your own calling, brothers and sisters.
### Responsorial Psalm
Psalm 33:12-13
R. Blessed the people the Lord has chosen to be his own.
### Gospel
Matthew 25:14-30
Jesus told his disciples this parable.
### Saint of the Day
St. Example
This biography must never be parsed as part of the Gospel.`;
      const cbcpBoundaryParsed = strictParseDailyMass('EN', cbcpBoundaryFixture, date(2026, 8, 29));
      return {
        version: APP_VERSION,
        versionLabel: document.getElementById('settings-version-label').textContent,
        footerText: document.getElementById('main-footer').textContent,
        initial,
        afterRightChange,
        manualEnabled,
        afterManual,
        jpUi,
        unsupportedOptions: unsupported.filter(code => document.querySelector(`#set-loc option[value="${code}"]`)),
        unsupportedProfiles: unsupported.filter(code => liturgicalCalendarProfiles[code]),
        modules: Object.fromEntries(['IE', 'GB-ENG', 'GB-WLS', 'GB-SCT', 'PH'].map(code => [code, {
          ordinaryLength: modules[code].ordinary.length,
          independentFromUs: modules[code].ordinary !== modules.US.ordinary,
          properCalendarKeys: Object.keys(modules[code].romanMissalProperData.calendar || {}).length,
          properCatalogLength: (modules[code].romanMissalProperData.catalog || []).length,
          parser: modules[code].dailyReadings.parser,
          dailyUrl: modules[code].dailyReadings.url('20260829')
        }])),
        properDatasetsIndependent: new Set(['IE', 'GB-ENG', 'GB-WLS', 'GB-SCT', 'PH']
          .map(code => modules[code].romanMissalProperData)).size,
        activeProperIsIreland: activeProperWasIreland,
        properResolution: {
          irelandLocalSections: Object.values(irelandLocalProper && irelandLocalProper.data || {}).filter(Boolean).length,
          philippinesGeneralSections: Object.values(philippinesGeneralProper && philippinesGeneralProper.data || {}).filter(Boolean).length,
          philippinesSantoNinoSections: Object.values(philippinesSantoNinoProper && philippinesSantoNinoProper.data || {}).filter(Boolean).length
        },
        cbcpBoundary: {
          hasReading: Boolean(cbcpBoundaryParsed.data && cbcpBoundaryParsed.data.reading1),
          gospel: JSON.stringify(cbcpBoundaryParsed.data && cbcpBoundaryParsed.data.gospel || {})
        },
        philippines: {
          fallbackUrl: modules.PH.dailyReadings.fallbackUrl('20260829'),
          hasUniversalisProperParser: Boolean(modules.PH.dailyPropers),
          santoNinoSource: modules.PH.properSources.santoNino,
          santoNino: modules.PH.dynamicCalendar(date(2026, 1, 18), {})[0],
          careOfCreation: modules.PH.dynamicCalendar(date(2026, 9, 6), {})[0],
          april2: getCountryCalendarOverride(date(2026, 4, 2), 'PH'),
          october21: getCountryCalendarOverride(date(2026, 10, 21), 'PH'),
          creationDay: getCountryCalendarOverride(date(2026, 9, 6), 'PH')
        },
        gps: {
          manila: gpsLocationForCoordinates(14.5995, 120.9842),
          taipeiUnsupported: gpsLocationForCoordinates(25.033, 121.5654),
          parisUnsupported: gpsLocationForCoordinates(48.8566, 2.3522)
        },
        church: {
          total: globalThis.churchLocalDetailRecords.length,
          hasEngland: globalThis.churchLocalDetailRecords.some(entry => entry.country === 'GB-ENG'),
          hasScotland: globalThis.churchLocalDetailRecords.some(entry => entry.country === 'GB-SCT'),
          hasPhilippines: globalThis.churchLocalDetailRecords.some(entry => entry.country === 'PH')
        }
      };
    });

    assert(/^V27\.2-/.test(result.version), `Unexpected runtime version: ${result.version}`);
    assert(result.versionLabel === 'V27.2', `Settings version label is wrong: ${result.versionLabel}`);
    assert(!/V27\.2/.test(result.footerText), 'Version must not be displayed in the footer.');
    assert(result.initial.useGps && result.initial.code === 'PH' && result.initial.left === 'EN', `GPS did not select Philippines: ${JSON.stringify(result.initial)}`);
    assert(result.initial.disabled && JSON.stringify(result.initial.visibleGpsOptions) === '["PH"]', `GPS location control is not locked to one country: ${JSON.stringify(result.initial)}`);
    assert(result.afterRightChange.useGps && result.afterRightChange.code === 'PH' && result.afterRightChange.target === 'JP', `Right language changed GPS state: ${JSON.stringify(result.afterRightChange)}`);
    assert(result.manualEnabled && !result.afterManual.useGps && result.afterManual.code === 'IE', `Manual selection did not unlock correctly: ${JSON.stringify(result.afterManual)}`);
    assert(result.jpUi.settingsTitle === '設定' && result.jpUi.consentTitle === 'ご利用前のご案内', `Japanese beta UI warnings are missing: ${JSON.stringify(result.jpUi)}`);
    assert(/Beta/.test(result.jpUi.targetLabel) && /Beta/.test(result.jpUi.uiLabel), `Japanese beta labels are missing: ${JSON.stringify(result.jpUi)}`);
    assert(!result.unsupportedOptions.length && !result.unsupportedProfiles.length, `Unsupported country remnants: ${JSON.stringify(result)}`);
    Object.entries(result.modules).forEach(([code, module]) => {
      assert(module.ordinaryLength === 32 && module.independentFromUs, `${code} does not own a complete independent ordinary: ${JSON.stringify(module)}`);
      assert(module.properCalendarKeys === 201 && module.properCatalogLength === 242, `${code} does not own the complete Roman Missal proper dataset: ${JSON.stringify(module)}`);
      assert(module.parser === 'strict-english-daily-mass', `${code} daily parser metadata is missing.`);
    });
    assert(result.properDatasetsIndependent === 4, `Conference proper datasets are aliased: ${result.properDatasetsIndependent}`);
    assert(result.activeProperIsIreland, 'The active English jurisdiction did not select its own proper dataset before the country switch.');
    assert(result.properResolution.irelandLocalSections >= 5, `Ireland local/Common proper composition failed: ${JSON.stringify(result.properResolution)}`);
    assert(result.properResolution.philippinesGeneralSections >= 5, `Philippines general Roman Missal proper resolution failed: ${JSON.stringify(result.properResolution)}`);
    assert(result.properResolution.philippinesSantoNinoSections === 5, `Philippines national proper resolution failed: ${JSON.stringify(result.properResolution)}`);
    assert(result.cbcpBoundary.hasReading, 'CBCP regression fixture did not parse the readings.');
    assert(!/Saint of the Day|St\. Example|biography/i.test(result.cbcpBoundary.gospel), `CBCP Saint of the Day leaked into the Gospel: ${result.cbcpBoundary.gospel}`);
    assert(/cbcp\.ph\/readings\/august-29-2026/.test(result.modules.PH.dailyUrl), `CBCP daily URL is wrong: ${result.modules.PH.dailyUrl}`);
    assert(/bible\.usccb\.org\/bible\/readings\/082926\.cfm/.test(result.philippines.fallbackUrl), `Philippines approved-text fallback is wrong: ${result.philippines.fallbackUrl}`);
    assert(!result.philippines.hasUniversalisProperParser, 'Universalis readings-only page must not be treated as a Philippines proper parser.');
    assert(/feast-of-the-santo-nino\.pdf/i.test(result.philippines.santoNinoSource), `Santo Niño source metadata is missing: ${result.philippines.santoNinoSource}`);
    assert(Object.values(result.philippines.santoNino.data || {}).filter(Boolean).length === 5, 'The Philippines Santo Niño proper is incomplete.');
    assert(Object.values(result.philippines.careOfCreation.data || {}).filter(Boolean).length === 5, 'The Philippines Care of Creation proper is incomplete.');
    assert(!result.philippines.april2 && /Pedro Calungsod/i.test(JSON.stringify(result.philippines.october21)), 'Philippines Pedro Calungsod calendar date is wrong.');
    assert(/Creation Day/i.test(JSON.stringify(result.philippines.creationDay)), 'CBCP Creation Day is missing.');
    assert(result.gps.manila === 'PH' && result.gps.taipeiUnsupported === 'INTL' && result.gps.parisUnsupported === 'INTL', `Unsupported GPS fallback is wrong: ${JSON.stringify(result.gps)}`);
    assert(result.church.hasEngland && result.church.hasScotland && result.church.hasPhilippines, `Country church rebuild is incomplete: ${JSON.stringify(result.church)}`);
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
