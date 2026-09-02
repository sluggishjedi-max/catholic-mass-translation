const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const weekdayFixture = fs.readFileSync(path.join(root, 'tools', 'fixtures', 'schott-2026-09-02.md'), 'utf8');
const sundayFixture = fs.readFileSync(path.join(root, 'tools', 'fixtures', 'schott-2026-08-30.md'), 'utf8');
const brazilFixture = `<!doctype html><html><body><main>
  <div class="bloco-oracao"><p><strong>Antífona de entrada</strong></p>
    <div class="guia guiaEntrada ativa">Piedade de mim, ó Senhor, porque clamo por vós todo o dia!</div>
    <div class="guia guiaEntrada">Miserére mihi Dómine: this inactive Gradual text must not be parsed.</div>
  </div>
  <p><strong>Glória</strong></p><p>Fixed Gloria text must not enter the entrance antiphon.</p>
  <div class="bloco-oracao"><p><strong>Coleta</strong></p><p>Deus onipotente, guardai com amor o que nos destes. Por nosso Senhor Jesus Cristo.</p></div>
  <p><strong>Primeira Leitura — 1Cor 3, 1-9</strong></p><p>Leitura da Primeira Carta de São Paulo aos Coríntios</p><p>Irmãos, nós somos cooperadores de Deus.</p><p>— Palavra do Senhor.</p>
  <p><strong>Salmo Responsorial — Sl 32(33), 12-13. 14-15 (R. 12b)</strong></p><p><strong>℟. Feliz o povo que o Senhor escolheu por sua herança!</strong></p><p>— Feliz o povo cujo Deus é o Senhor. ℟.</p><p>— Dos altos céus o Senhor olha e observa. ℟.</p>
  <p>℟. Aleluia, Aleluia, Aleluia.</p><p>℣. O Espírito do Senhor repousa sobre mim.</p>
  <p><strong>Evangelho — Lc 4, 38-44</strong></p><p>Proclamação do Evangelho de Jesus Cristo segundo Lucas</p><p>Naquele tempo, Jesus anunciou a boa-nova do Reino de Deus.</p><p>— Palavra da Salvação.</p>
  <p><strong>Creio</strong></p><p>Fixed Creed text must not enter the Gospel.</p>
  <div class="bloco-oracao"><p><strong>Sobre as Oferendas</strong></p><p>Santificai, Senhor, estes dons. Por Cristo, nosso Senhor.</p></div>
  <div class="bloco-oracao"><p><strong>Antífona da Comunhão</strong></p><div class="guia ativa">Como é grande, Senhor, a vossa bondade.</div><div class="guia">Inactive Gradual communion.</div></div>
  <div class="bloco-oracao"><p><strong>Depois da Comunhão</strong></p><p>Senhor, fortalecei os nossos corações. Por Cristo, nosso Senhor.</p></div>
  <p><strong>Homilia do dia</strong></p><p>Editorial content.</p>
</main></body></html>`;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function startServer() {
  const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://127.0.0.1');
    const route = decodeURIComponent(url.pathname === '/' ? '/V27.6.html' : url.pathname);
    const file = path.resolve(root, route.replace(/^\/+/, ''));
    if (!file.startsWith(root)) return response.writeHead(403).end('Forbidden');
    fs.readFile(file, (error, data) => {
      if (error) return response.writeHead(404).end('Not found');
      response.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' });
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
    const localFetch = window.fetch.bind(window);
    window.fetch = async (url, options) => {
      if (String(url).startsWith(location.origin)) return localFetch(url, options);
      throw new Error('Remote fetch disabled by V27.6 browser check');
    };
    Object.defineProperty(navigator, 'geolocation', {
      configurable: true,
      value: { getCurrentPosition(success) { success({ coords: { latitude: 52.52, longitude: 13.405, accuracy: 20 } }); } }
    });
  });

  try {
    await page.goto(`http://127.0.0.1:${server.address().port}/V27.6.html`, {
      waitUntil: 'domcontentloaded', timeout: 120000
    });
    await page.waitForFunction(() => (
      typeof strictParseDailyMass === 'function'
      && globalThis.countryMassData && globalThis.countryMassData.DE
      && globalThis.countryChurchData && globalThis.countryChurchData.PT
      && state.selectedLocationCode === 'DE'
    ), null, { timeout: 120000 });

    const result = await page.evaluate(async fixtures => {
      const weekday = new Date(2026, 8, 2, 12);
      const sunday = new Date(2026, 7, 30, 12);
      const directWeekday = strictParseDailyMass('DE', fixtures.weekday, weekday, 'DE');
      const directSunday = strictParseDailyMass('DE', fixtures.sunday, sunday, 'DE');
      const directBrazil = strictParseDailyMass('PT', fixtures.brazil, weekday, 'BR');
      const originalFetchJinaHtml = fetchJinaHtml;
      fetchJinaHtml = async url => String(url).includes('2026-08-30') ? fixtures.sunday : fixtures.weekday;
      let combined;
      try {
        combined = await fetchStrictDailyMass('DE', weekday, { locationCode: 'DE' });
      } finally {
        fetchJinaHtml = originalFetchJinaHtml;
      }
      state.uiLang = 'ZH';
      syncLocalizedChromeAndSettings();
      const locationLabels = Object.fromEntries(Array.from(document.getElementById('set-loc').options)
        .filter(option => locationMeta[option.value])
        .map(option => [option.value, option.textContent]));
      const warningLanguages = Array.from(document.querySelectorAll('#consent-language-grid .consent-warning-language'))
        .map(node => node.textContent.replace(/\s*:\s*$/, ''));
      const uiLanguageOptions = Array.from(document.getElementById('set-ui-lang').options)
        .map(option => option.value);
      const germanNoticeButtons = [document.getElementById('consent-accept').textContent, document.getElementById('consent-decline').textContent];
      const germanyGpsState = {
        code: state.selectedLocationCode,
        language: state.currentLoc,
        checked: document.getElementById('set-gps').checked,
        useGps: state.useGps,
        berlin: gpsLocationForCoordinates(52.52, 13.405),
        zone: gpsLanguageForTimeZone('Europe/Berlin')
      };
      const germanyMass = globalThis.countryMassData.DE;
      const germanyChurches = globalThis.countryChurchData.DE;
      const portugalChurches = globalThis.countryChurchData.PT;
      const brazilMass = globalThis.countryMassData.BR;
      const brazilChurches = globalThis.countryChurchData.BR;
      const structuredOrdinaries = Object.fromEntries(['AU', 'NZ', 'IT', 'MX', 'PT', 'DE', 'BR'].map(code => {
        const module = globalThis.countryMassData[code];
        return [code, { marker: module.ordinaryStructure, itemCount: module.ordinary.length }];
      }));
      state.selectedLocationCode = 'BR';
      state.currentLoc = 'PT';
      syncLocalizedChromeAndSettings();
      const brazilNoticeButtons = [document.getElementById('consent-accept').textContent, document.getElementById('consent-decline').textContent];
      return {
        version: APP_VERSION,
        pageVersion: document.getElementById('settings-version-label').textContent,
        gps: germanyGpsState,
        warningLanguages,
        uiLanguageOptions,
        noticeButtons: germanNoticeButtons,
        locationLabels,
        directWeekday,
        directSunday,
        directBrazil,
        combined,
        structuredOrdinaries,
        germany: {
          beta: germanyMass.beta,
          ordinaryLength: germanyMass.ordinary.length,
          corpusLength: germanyMass.officialOrderCorpus.text_de.length,
          parser: germanyMass.dailyReadings.parser,
          churchCount: germanyChurches.entries.length,
          exhaustive: germanyChurches.exhaustive,
          runtimeChurchCount: globalThis.churchLocalDetailsMeta.sourceCounts.DE,
          prayers: globalThis.countryPrayerData.DE,
          hymns: globalThis.countryHymnData.DE
        },
        portugal: {
          churchCount: portugalChurches.entries.length,
          exhaustive: portugalChurches.exhaustive,
          runtimeChurchCount: globalThis.churchLocalDetailsMeta.sourceCounts.PT,
          parishCount: portugalChurches.entries.filter(entry => entry.churchId && entry.churchId.startsWith('PT-CEP-PARISH-')).length
        },
        brazil: {
          beta: brazilMass.beta,
          ordinaryLength: brazilMass.ordinary.length,
          corpusLength: brazilMass.officialOrderCorpus.text_pt.length,
          parser: brazilMass.dailyReadings.parser,
          eucharisticPrayerCount: Object.keys(brazilMass.ordinary.find(item => item.id.endsWith('eucharist')).forms).length,
          churchCount: brazilChurches.entries.length,
          runtimeChurchCount: globalThis.churchLocalDetailsMeta.sourceCounts.BR,
          exhaustive: brazilChurches.exhaustive,
          prayers: globalThis.countryPrayerData.BR,
          hymns: globalThis.countryHymnData.BR,
          noticeButtons: brazilNoticeButtons,
          gps: gpsLocationForCoordinates(-15.7939, -47.8828),
          zone: gpsLanguageForTimeZone('America/Sao_Paulo')
        }
      };
    }, { weekday: weekdayFixture, sunday: sundayFixture, brazil: brazilFixture });
    if (process.env.ORDO_DEBUG_V276) console.log(JSON.stringify(result, null, 2));

    assert(result.version.startsWith('V27.6-'), 'V27.6 runtime version missing');
    assert(result.pageVersion === 'V27.6', 'V27.6 settings label missing');
    assert(result.gps.code === 'DE' && result.gps.language === 'DE', 'Berlin GPS did not select Germany/German');
    assert(result.gps.berlin === 'DE' && result.gps.zone === 'DE', 'German GPS lookup failed');
    assert(result.gps.useGps === true && result.gps.checked === false, 'GPS checkbox inversion regressed');
    assert(result.warningLanguages.join('|') === 'English|Latine|한국어|日本語|繁體中文|Tiếng Việt|Italiano|Español|Português|Deutsch', 'warning language order/content mismatch');
    assert(['IT', 'ES', 'PT', 'DE'].every(code => result.uiLanguageOptions.includes(code)), 'V27.6 European UI language options are incomplete');
    assert(result.noticeButtons.join('|') === 'Zustimmen|Nicht zustimmen und beenden', 'German regional consent buttons missing');
    assert(/德國\(DBK\).*Deutsch.*Beta/.test(result.locationLabels.DE), 'Traditional Chinese Germany/DBK setting label missing');
    assert(/巴西\(CNBB\).*Português.*Beta/.test(result.locationLabels.BR), 'Traditional Chinese Brazil/CNBB setting label missing');

    const weekData = result.directWeekday.data;
    assert(weekData.reading1.cit_de.startsWith('1 Kor 3,1'), 'even-year SCHOTT cycle did not select Jahr II');
    assert(!weekData.reading1.text.includes('Kolóssä'), 'Jahr I reading leaked into even-year result');
    assert(weekData.reading1.lines[0].role === 'summary' && /Gottes Mitarbeiter/.test(weekData.reading1.lines[0].text), 'German reading summary order failed');
    assert(weekData.reading1.lines.some(line => line.role === 'intro' && /^Lesung aus/.test(line.text)), 'German reading intro join failed');
    assert(weekData.gospel.lines[0].role === 'summary' && /anderen Städten/.test(weekData.gospel.lines[0].text), 'German Gospel summary order failed');
    assert(weekData.psalm.lines[0].sp === 'Kv' && /Selig das Volk/.test(weekData.psalm.lines[0].text), 'German psalm response parse failed');
    assert(weekData.psalm.lines.filter(line => line.sp === 'V.').every(line => /- Kv$/.test(line.text)), 'German psalm verse/response tails failed');
    assert(weekData.gospel_accl.lines.filter(line => line.sp === 'Kv').length === 2, 'German acclamation response framing failed');
    ['entrance', 'collect', 'reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel', 'prayer_offerings', 'communion', 'prayer_after']
      .forEach(key => assert(result.directSunday.data[key], `Sunday SCHOTT section missing: ${key}`));
    ['entrance', 'collect', 'reading1', 'psalm', 'gospel_accl', 'gospel', 'prayer_offerings', 'communion', 'prayer_after']
      .forEach(key => assert(result.combined.data[key], `Combined German Mass section missing: ${key}`));
    assert(result.combined.properFallback && result.combined.properFallback.date === '2026-08-30', 'German previous-Sunday proper fallback metadata missing');

    const brazilData = result.directBrazil.data;
    ['entrance', 'collect', 'reading1', 'psalm', 'gospel_accl', 'gospel', 'prayer_offerings', 'communion', 'prayer_after']
      .forEach(key => assert(brazilData[key], `Brazilian Pocket Terço section missing: ${key}`));
    assert(brazilData.reading1.cit_pt.startsWith('1Cor 3'), 'Brazilian first-reading citation parse failed');
    assert(brazilData.gospel.cit_pt.startsWith('Lc 4'), 'Brazilian Gospel citation parse failed');
    assert(brazilData.psalm.lines[0].sp === 'R.' && /Feliz o povo/.test(brazilData.psalm.lines[0].text), 'Brazilian psalm response parse failed');
    assert(brazilData.psalm.lines.filter(line => line.sp === 'V.').every(line => /- R\.$/.test(line.text)), 'Brazilian psalm verse/response tails failed');
    assert(brazilData.gospel_accl.lines.filter(line => line.sp === 'R.').length === 2, 'Brazilian acclamation response framing failed');
    assert(!JSON.stringify(brazilData).includes('inactive Gradual') && !JSON.stringify(brazilData).includes('Fixed Creed'), 'Brazilian fixed/Gradual source noise leaked into parsed sections');

    assert(result.germany.beta && result.germany.ordinaryLength >= 30, 'Germany ordinary module incomplete');
    assert(result.germany.corpusLength > 30000 && result.germany.parser === 'strict-german-schott-daily-mass', 'Germany corpus/parser metadata incomplete');
    assert(result.germany.churchCount === 27 && result.germany.runtimeChurchCount === 27 && result.germany.exhaustive === false, 'Germany DBK church data mismatch');
    assert(result.germany.prayers.status === 'under-development' && result.germany.hymns.status === 'under-development', 'Germany prayer/hymn placeholders missing');
    assert(result.portugal.churchCount === 4395 && result.portugal.runtimeChurchCount === 4395, 'Portugal full directory count mismatch');
    assert(result.portugal.parishCount === 4375 && result.portugal.exhaustive === true, 'Portugal parish coverage mismatch');
    Object.entries(result.structuredOrdinaries).forEach(([code, structure]) => {
      assert(structure.marker === 'paragraph-rubric-choices-v1' && structure.itemCount === 32, `${code} ordinary row structure mismatch`);
    });
    assert(result.brazil.beta && result.brazil.ordinaryLength === 32 && result.brazil.corpusLength > 100000, 'Brazilian ordinary corpus incomplete');
    assert(result.brazil.eucharisticPrayerCount === 14, 'Brazilian Eucharistic Prayer choices incomplete');
    assert(result.brazil.parser === 'strict-brazilian-pocketterco-daily-mass', 'Brazilian daily parser metadata missing');
    assert(result.brazil.churchCount === 27 && result.brazil.runtimeChurchCount === 27 && result.brazil.exhaustive === false, 'Brazil CNBB church data mismatch');
    assert(result.brazil.prayers.status === 'under-development' && result.brazil.hymns.status === 'under-development', 'Brazil prayer/hymn placeholders missing');
    assert(result.brazil.noticeButtons.join('|') === 'Confirmar|Não concordar e sair', 'Brazilian regional consent buttons missing');
    assert(result.brazil.gps === 'BR' && result.brazil.zone === 'BR', 'Brazilian GPS lookup failed');
    assert(pageErrors.length === 0, `page errors: ${pageErrors.join('\n')}`);
    console.log(JSON.stringify({
      ok: true,
      version: result.version,
      germany: {
        ordinaryLength: result.germany.ordinaryLength,
        corpusLength: result.germany.corpusLength,
        churchCount: result.germany.churchCount,
        parser: result.germany.parser
      },
      portugal: result.portugal,
      brazil: result.brazil,
      warningLanguages: result.warningLanguages,
      gps: result.gps,
      parsedSections: Object.keys(result.combined.data)
    }, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
