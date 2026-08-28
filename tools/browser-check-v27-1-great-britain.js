const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const targetHtml = process.env.ORDO_CHECK_HTML || 'V27.1.html';

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
    const route = decodeURIComponent(url.pathname === '/' ? `/${targetHtml}` : url.pathname);
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

async function jinaUniversalis(region, dateKey) {
  const response = await fetch(`https://r.jina.ai/http://universalis.com/L/europe.${region}/${dateKey}/mass.htm`);
  assert(response.ok, `Universalis/Jina request failed for ${region}: ${response.status}`);
  return response.text();
}

(async () => {
  const dailySources = Object.fromEntries(await Promise.all(['england', 'wales', 'scotland'].map(async region => [
    region,
    await jinaUniversalis(region, '20260828')
  ])));
  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 412, height: 915 } });
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.stack || String(error)));
  await page.addInitScript(() => {
    window.fetch = async () => { throw new Error('Remote startup fetch disabled by V27.1 Great Britain check'); };
  });

  try {
    await page.goto(`http://127.0.0.1:${server.address().port}/${targetHtml}`, {
      waitUntil: 'domcontentloaded',
      timeout: 90000
    });
    await page.locator('#consent-accept').click({ timeout: 15000 }).catch(() => {});
    await page.waitForFunction(() => typeof render === 'function' && document.querySelectorAll('#missal-root > *').length > 0, null, {
      timeout: 90000
    });

    const result = await page.evaluate(dailySources => {
      const at = (year, month, day) => new Date(year, month - 1, day, 12, 0, 0);
      const override = (code, year, month, day) => {
        state.selectedLocationCode = code;
        state.currentLoc = 'EN';
        return getCountryCalendarOverride(at(year, month, day), code);
      };
      const proper = (code, year, month, day) => {
        state.selectedLocationCode = code;
        state.currentLoc = 'EN';
        const entry = localMissalEntryForLanguage('EN', at(year, month, day));
        return entry ? { title: entry.title, sections: Object.keys(entry.data || {}) } : null;
      };
      const dailyUrl = (code, year, month, day) => {
        state.selectedLocationCode = code;
        state.currentLoc = 'EN';
        return strictDailySourceEntryUrl('EN', at(year, month, day));
      };
      const parseDaily = (code, source) => {
        state.selectedLocationCode = code;
        state.currentLoc = 'EN';
        const parsed = strictParseDailyMass('EN', source, at(2026, 8, 28));
        return {
          title: parsed.title,
          sections: Object.keys(parsed.data || {}),
          textLength: JSON.stringify(parsed.data || {}).length
        };
      };

      const calendarChecks = {
        walesDavidObserved: override('GB-WLS', 2026, 3, 2),
        walesDavidSunday: override('GB-WLS', 2026, 3, 1),
        englandDavidSundayProper: proper('GB-ENG', 2026, 3, 1),
        englandGeorge: override('GB-ENG', 2026, 4, 23),
        englandHighPriest: override('GB-ENG', 2026, 5, 28),
        englandPeterPaulObserved: override('GB-ENG', 2026, 6, 28),
        englandPeterPaulNominal: override('GB-ENG', 2026, 6, 29),
        englandAssumptionObserved: override('GB-ENG', 2026, 8, 16),
        englandAssumptionNominal: override('GB-ENG', 2026, 8, 15),
        englandEpiphanyObserved2029: override('GB-ENG', 2029, 1, 7),
        englandEpiphanyNominal2029: override('GB-ENG', 2029, 1, 6),
        scotlandOgilvie: override('GB-SCT', 2026, 3, 10),
        scotlandAndrew: override('GB-SCT', 2026, 11, 30)
      };

      const properChecks = {
        walsingham: proper('GB-ENG', 2026, 9, 24),
        david: proper('GB-WLS', 2026, 3, 2),
        ogilvie: proper('GB-SCT', 2026, 3, 10),
        andrew: proper('GB-SCT', 2026, 11, 30)
      };

      const optionCodes = Array.from(document.querySelectorAll('#set-loc option')).map(option => option.value);
      const locationOptions = ['GB-ENG', 'GB-WLS', 'GB-SCT'].map(code => ({
        code,
        text: document.querySelector(`#set-loc option[value="${code}"]`)?.textContent || '',
        profile: liturgicalCalendarProfiles[code]
      }));
      const gpsVisibleBefore = getComputedStyle(document.getElementById('manual-loc-row')).display;
      document.getElementById('set-gps').checked = true;
      document.getElementById('set-loc').value = 'GB-WLS';
      selectManualLocation();
      const manualSelection = {
        rowDisplayBefore: gpsVisibleBefore,
        gps: state.useGps,
        location: state.selectedLocationCode,
        leftLanguage: state.currentLoc
      };
      document.getElementById('set-gps').checked = false;
      updateSettings();

      return {
        version: APP_VERSION,
        publicVersion: publicAppVersionLabel(),
        footer: document.querySelector('#main-footer .app-version-label')?.textContent.trim() || '',
        optionCodes,
        locationOptions,
        manualSelection,
        explicitGpsOff: state.useGps,
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
          churches: churchLocalDetailRecords.length,
          englandWalesChurches: churchLocalDetailRecords.filter(item => item.country === 'GB-ENG' || item.country === 'GB-WLS').length,
          scotlandChurches: churchLocalDetailRecords.filter(item => item.country === 'GB-SCT').length,
          britishScripts: document.querySelectorAll('script[src*="england_wales"], script[src*="scotland"]').length
        },
        placeholders: {
          englandHymns: globalThis.countryHymnData['GB-ENG'],
          walesPrayers: globalThis.countryPrayerData['GB-WLS'],
          scotlandHymns: globalThis.countryHymnData['GB-SCT'],
          scotlandPrayers: globalThis.countryPrayerData['GB-SCT']
        },
        urls: {
          england: dailyUrl('GB-ENG', 2026, 8, 28),
          wales: dailyUrl('GB-WLS', 2026, 8, 28),
          scotland: dailyUrl('GB-SCT', 2026, 8, 28)
        },
        dailyReadings: {
          england: parseDaily('GB-ENG', dailySources.england),
          wales: parseDaily('GB-WLS', dailySources.wales),
          scotland: parseDaily('GB-SCT', dailySources.scotland)
        },
        calendarChecks,
        properChecks,
        gpsLocations: {
          london: gpsLocationForCoordinates(51.5074, -0.1278),
          cardiff: gpsLocationForCoordinates(51.4816, -3.1791),
          edinburgh: gpsLocationForCoordinates(55.9533, -3.1883),
          belfast: gpsLocationForCoordinates(54.5973, -5.9301),
          dublin: gpsLocationForCoordinates(53.3498, -6.2603)
        }
      };
    }, dailySources);

    assert(result.version === 'V27.1-20260828-GREAT-BRITAIN-BETA', `Unexpected version: ${result.version}`);
    assert(result.publicVersion === 'V27.1' && result.footer === 'Ordo Missae V27.1', `Version label mismatch: ${JSON.stringify(result)}`);
    ['GB-ENG', 'GB-WLS', 'GB-SCT'].forEach(code => {
      assert(result.optionCodes.includes(code), `Settings location list is missing ${code}`);
      const option = result.locationOptions.find(item => item.code === code);
      assert(option && /Beta/i.test(option.text), `Beta label missing for ${code}`);
      assert(option.profile && option.profile.countryCalendar === code, `Bad calendar profile for ${code}`);
    });
    assert(result.locationOptions.find(item => item.code === 'GB-ENG').profile.epiphany === 'british', 'England Epiphany profile does not implement the British Saturday/Monday transfer rule.');
    assert(result.locationOptions.find(item => item.code === 'GB-SCT').profile.epiphany === 'sunday', 'Scotland Epiphany profile is not Sunday-transferred.');
    assert(result.manualSelection.rowDisplayBefore === 'flex', `Country list is still hidden with GPS: ${JSON.stringify(result.manualSelection)}`);
    assert(result.manualSelection.gps === true && result.manualSelection.location === 'GB-WLS' && result.manualSelection.leftLanguage === 'EN',
      `Manual jurisdiction selection changed GPS or did not take precedence: ${JSON.stringify(result.manualSelection)}`);
    assert(result.explicitGpsOff === false, 'The explicit GPS checkbox did not turn GPS off.');

    Object.entries(result.registries).forEach(([name, keys]) => {
      ['GB-ENG', 'GB-WLS', 'GB-SCT'].forEach(key => assert(keys.includes(key), `${name} registry is missing ${key}`));
    });
    assert(result.counts.mass === 32, `Mass ordinary count changed: ${result.counts.mass}`);
    assert(result.counts.hymns === 3064, `Hymn count changed: ${result.counts.hymns}`);
    assert(result.counts.prayers === 575, `Prayer count changed: ${result.counts.prayers}`);
    assert(result.counts.churches === 4910, `Church directory count changed unexpectedly: ${result.counts.churches}`);
    assert(result.counts.englandWalesChurches === 7, `Expected seven England/Wales cathedrals, found ${result.counts.englandWalesChurches}`);
    assert(result.counts.scotlandChurches === 6, `Expected six Scotland cathedrals, found ${result.counts.scotlandChurches}`);
    assert(result.counts.britishScripts === 8, `Expected eight Great Britain module scripts, found ${result.counts.britishScripts}`);

    Object.values(result.placeholders).forEach(module => {
      assert(module && module.status === 'under-development', `Missing under-development placeholder: ${JSON.stringify(module)}`);
      assert(/제작중/u.test(module.statusLabels.KR), `Missing Korean placeholder label: ${JSON.stringify(module)}`);
    });
    assert(/europe\.england\/20260828\/mass\.htm$/i.test(result.urls.england), `Bad England URL: ${result.urls.england}`);
    assert(/europe\.wales\/20260828\/mass\.htm$/i.test(result.urls.wales), `Bad Wales URL: ${result.urls.wales}`);
    assert(/europe\.scotland\/20260828\/mass\.htm$/i.test(result.urls.scotland), `Bad Scotland URL: ${result.urls.scotland}`);
    Object.entries(result.dailyReadings).forEach(([region, reading]) => {
      ['reading1', 'psalm', 'gospel_accl', 'gospel'].forEach(section => {
        assert(reading.sections.includes(section), `${region} daily readings are missing ${section}: ${JSON.stringify(reading)}`);
      });
      assert(reading.title && reading.textLength > 500, `${region} daily readings were not parsed: ${JSON.stringify(reading)}`);
    });

    const calendarText = value => JSON.stringify(value || {});
    assert(/David/i.test(calendarText(result.calendarChecks.walesDavidObserved)), 'St David was not transferred to 2 March 2026 in Wales.');
    assert(!/David/i.test(calendarText(result.calendarChecks.walesDavidSunday)), 'St David incorrectly displaced the Second Sunday of Lent in Wales.');
    assert(result.calendarChecks.englandDavidSundayProper === null, 'England applied the St David proper on the Second Sunday of Lent.');
    assert(/George/i.test(calendarText(result.calendarChecks.englandGeorge)), 'St George is missing from England.');
    assert(/Eternal High Priest/i.test(calendarText(result.calendarChecks.englandHighPriest)), 'The movable Eternal High Priest feast is missing.');
    assert(/Peter and Paul/i.test(calendarText(result.calendarChecks.englandPeterPaulObserved)), 'Peter and Paul was not transferred to Sunday.');
    assert(!/Peter and Paul/i.test(calendarText(result.calendarChecks.englandPeterPaulNominal)), 'Peter and Paul remains on the suppressed nominal date.');
    assert(/Assumption/i.test(calendarText(result.calendarChecks.englandAssumptionObserved)), 'The Assumption was not transferred to Sunday.');
    assert(!/Assumption/i.test(calendarText(result.calendarChecks.englandAssumptionNominal)), 'The Assumption remains on the suppressed nominal date.');
    assert(/Epiphany/i.test(calendarText(result.calendarChecks.englandEpiphanyObserved2029)), 'The 2029 Epiphany transfer is missing.');
    assert(!/The Epiphany of the Lord/i.test(calendarText(result.calendarChecks.englandEpiphanyNominal2029)), 'The 2029 Epiphany remains on the suppressed nominal date.');
    assert(/Ogilvie/i.test(calendarText(result.calendarChecks.scotlandOgilvie)), 'St John Ogilvie is missing from Scotland.');
    assert(/Andrew/i.test(calendarText(result.calendarChecks.scotlandAndrew)), 'St Andrew is missing from Scotland.');

    const expectedProperSections = {
      walsingham: ['entrance', 'collect', 'prayer_offerings', 'preface', 'communion', 'prayer_after'],
      david: ['entrance', 'collect', 'prayer_after'],
      ogilvie: ['collect', 'prayer_offerings', 'preface', 'prayer_after'],
      andrew: ['entrance', 'collect', 'prayer_offerings', 'communion', 'prayer_after']
    };
    Object.entries(expectedProperSections).forEach(([name, sections]) => {
      const proper = result.properChecks[name];
      assert(proper, `${name} proper was not selected.`);
      sections.forEach(section => assert(proper.sections.includes(section), `${name} proper is missing ${section}`));
    });

    assert(JSON.stringify(result.gpsLocations) === JSON.stringify({
      london: 'GB-ENG', cardiff: 'GB-WLS', edinburgh: 'GB-SCT', belfast: 'GB-NIR', dublin: 'IE'
    }), `Great Britain and Ireland GPS mapping is wrong: ${JSON.stringify(result.gpsLocations)}`);
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
