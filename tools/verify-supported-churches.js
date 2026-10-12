const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const http = require('node:http');
const { chromium } = require('@playwright/test');
const root = path.resolve(__dirname, '..');
const countries = { IE: 'ireland', 'GB-SCT': 'scotland', US: 'united_states', PH: 'philippines' };

(async () => {
  const report = JSON.parse(fs.readFileSync(path.join(root, 'docs/supported-church-enrichment.json'), 'utf8'));
  const context = {};
  vm.createContext(context);
  for (const dir of fs.readdirSync(path.join(root, 'JS file/countries'))) {
    const file = path.join(root, 'JS file/countries', dir, dir + '_churches.js');
    if (fs.existsSync(file)) vm.runInContext(fs.readFileSync(file, 'utf8'), context);
  }
  for (const country of Object.keys(countries)) {
    const module = context.countryChurchData[country];
    const entryReport = report.countries[country];
    assert.equal(module.exhaustive, false, 'Partial diocesan coverage must not be presented as nationwide');
    assert.equal(module.entries.length, entryReport.after.total);
    assert.equal(module.entries.length, module.recordCount);
    assert(entryReport.after.total >= entryReport.before.total);
    const ids = module.entries.map(r => r.churchId).filter(Boolean);
    assert.equal(ids.length, new Set(ids).size, country + ': duplicate church identity');
    for (const source of module.sources) {
      assert.equal(source.checked + source.errors.length, source.listed, 'A listed detail page was silently skipped');
    }
    for (const entry of module.entries.filter(r => r.directoryCheckedAt)) {
      assert(entry.name && entry.diocese && entry.sourceAuthority && entry.churchId);
      assert.match(entry.sourceUrl, /^https:\/\//);
      assert.equal(entry.directoryCheckedAt, module.checkedAt);
      if (entry.massTimes?.length) {
        assert.equal(entry.massTimesStatus, 'published');
        assert.equal(entry.massTimesCheckedAt, module.checkedAt);
        assert.equal(entry.massTimesSourceUrl, entry.sourceUrl);
        assert(!entry.massTimes.some(t => /Baptism|Confession|Wedding|only for funerals?/i.test(t)),
          country + ' ' + entry.name + ': other services leaked into regular Mass times');
      }
      if (entry.lat !== undefined || entry.lng !== undefined) {
        assert(Number.isFinite(entry.lat) && Number.isFinite(entry.lng));
        assert(Math.abs(entry.lat) <= 90 && Math.abs(entry.lng) <= 180);
        assert(entry.coordinateSourceUrl);
      }
    }
  }
  assert(context.countryChurchData.IE.entries.some(r => r.country === 'GB-NIR'), 'Northern Ireland seeds were lost');
  const cathedral = context.countryChurchData.IE.entries.filter(r => r.name === 'St Mary’s Cathedral');
  assert.equal(cathedral.length, 1, 'Dublin cathedral seed was not merged');
  assert.equal(cathedral[0].availabilityStatus, 'temporarily-closed');
  assert.equal(cathedral[0].address, 'Marlborough Street, Dublin 1, D01 TX49');
  assert(!cathedral[0].massTimes, 'Another church’s Mass timetable was assigned to the closed cathedral');
  assert(!context.countryChurchData.IE.entries.some(r => r.name === 'St Mary’s Cathedral (Pro-Cathedral)'), 'Old Dublin cathedral duplicate retained');
  const glasgowCathedrals = context.countryChurchData['GB-SCT'].entries.filter(r => /St Andrew.s Metropolitan Cathedral/.test(r.name));
  assert.equal(glasgowCathedrals.length, 1, 'Glasgow cathedral seed was not merged');
  const ie = context.countryChurchData.IE.entries.find(r => r.name === 'St John Vianney, Ardlea');
  assert(ie && ie.massTimes.includes('Sunday: 9:30am | 11:30am'));
  assert(ie.priestNames.some(n => n.includes('Michel Simo Temgo')));
  const glasgow = context.countryChurchData['GB-SCT'].entries.find(r => r.name === "St Agnes' (Lambhill)");
  assert(glasgow && glasgow.massTimes.includes('Sunday Mass: Vigil: 4.00pm'));
  const la = context.countryChurchData.US.entries.find(r => r.name === 'All Saints Catholic Church');
  assert(la && la.phone === '(323) 223-1101' && la.massTimes.some(t => t === 'Monday: 8:00 am (Spanish)'));
  assert(context.countryChurchData.US.entries.some(r => r.diocese === 'Archdiocese of Washington'));
  const cubao = context.countryChurchData.PH.entries.find(r => r.name === 'The Immaculate Conception Cathedral of Cubao');
  assert(cubao && cubao.address.includes('40 Lantana') && cubao.priestNames.includes('REV. FR. STEVEN ZABALA'));
  const sparse = context.countryChurchData.PH.entries.find(r => r.name === 'Holy Cross Parish');
  assert(sparse && !sparse.address && !sparse.massTimes && !sparse.priestNames, 'Unpublished details were fabricated');
  // Verify every official LA detail page survived, independently of its name.
  const laRecords = context.countryChurchData.US.entries.filter(r => r.diocese === 'Archdiocese of Los Angeles');
  const laSource = context.countryChurchData.US.sources.find(s => s.authority === 'Archdiocese of Los Angeles');
  assert.equal(new Set(laRecords.map(r => r.officialDioceseUrl)).size, laSource.listed);

  const publishedHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const versionHtml = fs.readFileSync(path.join(root, 'V29.html'), 'utf8');
  for (const dir of Object.values(countries)) {
    const match = publishedHtml.match(new RegExp(dir + '/' + dir + '_churches\\.js\\?v=([^"\\s]+)'));
    assert(match && match[1].includes('supported-directory'), 'Church data cache version was not updated');
    assert(versionHtml.includes(match[0]));
  }
  const server = http.createServer((req, res) => {
    const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
    fs.readFile(file, (error, data) => {
      if (error) return res.writeHead(404).end();
      res.setHeader('Content-Type', file.endsWith('.js') ? 'application/javascript' : 'text/html; charset=utf-8');
      res.end(data);
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.addInitScript(() => { globalThis.ordoPrayerEditorPreview = true; });
    await page.route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await page.goto(`http://127.0.0.1:${server.address().port}/index.html`);
    await page.waitForFunction(() => typeof churchInfoWindowHtml === 'function');
    const result = await page.evaluate(() => {
      rebuildCountryChurchDirectory();
      const samples = [
        ['IE', 'St John Vianney, Ardlea'],
        ['GB-SCT', "St Agnes' (Lambhill)"],
        ['US', 'All Saints Catholic Church'],
        ['PH', 'The Immaculate Conception Cathedral of Cubao'],
        ['PH', 'Holy Cross Parish']
      ];
      const cards = [];
      for (const [country, name] of samples) {
        state.selectedLocationCode = country; state.currentLoc = 'EN'; state.uiLang = 'KR';
        const record = countryChurchData[country].entries.find(r => r.name === name);
        const place = { name: record.name, formatted_address: record.address, diocese: record.diocese };
        if (Number.isFinite(record.lat)) place.geometry = { location: { lat: record.lat, lng: record.lng } };
        const matched = churchLocalDetailsForPlace(place);
        if (matched.churchId !== record.churchId) throw new Error('Wrong country/record match: ' + name);
        const card = churchInfoWindowHtml(place);
        if (!card.includes(record.sourceUrl) || !card.includes(record.directoryCheckedAt)) throw new Error('Source/check date omitted: ' + name);
        if (record.massTimes?.length && !card.includes(escapeHtml(record.massTimes[0]))) throw new Error('Timetable omitted: ' + name);
        cards.push(card);
      }
      state.selectedLocationCode = 'US';
      const originalUs = countryChurchData.US;
      const sameName = originalUs.entries.filter(r => r.address && Number.isFinite(r.lat)).slice(0, 2)
        .map((record, index) => ({ ...record, name: 'Shared dedication regression fixture', aliases: [],
          directoryName: '', officialDirectoryName: '', churchId: 'regression-fixture:' + index }));
      try {
        countryChurchData.US = { ...originalUs, entries: [...originalUs.entries, ...sameName] };
        rebuildCountryChurchDirectory();
        for (const record of sameName) {
          const found = churchLocalDetailsForPlace({ name: record.name, formatted_address: record.address,
            geometry: { location: { lat: record.lat, lng: record.lng } } });
          if (found.churchId !== record.churchId) throw new Error('Same-name church resolved to another location');
        }
      } finally {
        countryChurchData.US = originalUs;
        rebuildCountryChurchDirectory();
      }
      const pinned = localPinnedChurchPlacesForBounds({ contains: point => point.lat > 33 && point.lat < 40 && point.lng > -120 && point.lng < -115 });
      if (!pinned.some(p => p.name === 'All Saints Catholic Church')) throw new Error('Official map points not indexed');
      state.selectedLocationCode = 'IE';
      const closed = countryChurchData.IE.entries.find(r => r.name === 'St Mary’s Cathedral');
      for (const lang of SUPPORTED_LANGS) {
        state.uiLang = lang;
        const card = churchInfoWindowHtml({ name: closed.name, formatted_address: closed.address });
        if (!card.includes(escapeHtml(churchDetailLabels().temporarilyClosed)) || !card.includes(closed.availabilitySourceUrl)) {
          throw new Error('Closure notice/source missing for ' + lang);
        }
      }
      state.uiLang = 'KR';
      cards.push(churchInfoWindowHtml({ name: closed.name, formatted_address: closed.address }));
      const unsafe = churchInfoWindowHtml({ name: 'Safety sample', availabilityStatus: 'temporarily-closed',
        availabilitySourceUrl: 'javascript:alert(1)', massTimesNotes: ['<img src=x onerror=alert(1)>'] });
      const unsafeNode = document.createElement('div'); unsafeNode.innerHTML = unsafe;
      if (unsafeNode.querySelector('img,script,a[href^="javascript:"]')) throw new Error('New detail fields allow unsafe markup');
      const preview = document.createElement('section');
      preview.style.cssText = 'position:fixed;inset:0;z-index:999999;background:white;padding:16px;overflow:auto';
      preview.innerHTML = cards.join('<hr>');
      document.body.appendChild(preview);
      return { samples: samples.length, pinned: pinned.length, width: preview.scrollWidth, viewport: innerWidth };
    });
    assert(result.width <= result.viewport + 2, 'Mobile church detail overflow');
    assert.deepEqual(errors, []);
    fs.mkdirSync(path.join(root, 'test-results'), { recursive: true });
    await page.screenshot({ path: path.join(root, 'test-results/supported-churches-mobile.png') });
    console.log(JSON.stringify({ passed: true, countries: Object.fromEntries(Object.keys(countries).map(k => [k, report.countries[k].after])), browser: result }, null, 2));
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
