const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const outputPath = path.join(root, 'tmp', 'pdfs', 'korean-ordinary-weeks-cbck-proofread.json');
const targetHtml = 'V23.html';

function startServer() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1');
    const route = decodeURIComponent(url.pathname === '/' ? `/${targetHtml}` : url.pathname);
    const file = path.resolve(root, route.replace(/^\/+/, ''));
    if (!file.startsWith(root)) return res.writeHead(403).end('Forbidden');
    fs.readFile(file, (error, data) => {
      if (error) return res.writeHead(404).end('Not found');
      res.writeHead(200, { 'content-type': path.extname(file) === '.js' ? 'text/javascript; charset=utf-8' : 'text/html; charset=utf-8' });
      res.end(data);
    });
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

(async () => {
  const server = await startServer();
  const port = server.address().port;
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${port}/${targetHtml}`, { waitUntil: 'domcontentloaded' });
    await page.locator('#consent-accept').click({ timeout: 3000 }).catch(() => {});
    await page.waitForFunction(() => typeof strictParseDailyMass === 'function' && typeof getSeasonMeta === 'function');

    const candidates = await page.evaluate(() => {
      const found = Object.fromEntries(Array.from({ length: 34 }, (_, index) => [index + 1, []]));
      for (let year = 2022; year <= 2026; year += 1) {
        for (let date = new Date(year, 0, 1, 9); date.getFullYear() === year; date.setDate(date.getDate() + 1)) {
          const meta = getSeasonMeta(date);
          const week = Number(meta.week || 0);
          if (meta.season !== 'ordinary' || week < 1 || week > 34) continue;
          if (getCountryCalendarOverride(date, 'KR')) continue;
          const info = buildGeneratedLiturgyInfo(date);
          const title = info && info.names ? info.names.KR : '';
          if (!isGeneratedSeasonalNameForInfo('KR', title, info)) continue;
          found[week].push(formatDateIso(date));
        }
      }
      Object.keys(found).forEach(weekText => {
        const week = Number(weekText);
        found[week].sort((left, right) => {
          const leftDay = new Date(`${left}T09:00:00`).getDay();
          const rightDay = new Date(`${right}T09:00:00`).getDay();
          const preferSunday = week !== 1 && week !== 34;
          const leftScore = preferSunday ? (leftDay === 0 ? 0 : 1) : (leftDay === 0 ? 1 : 0);
          const rightScore = preferSunday ? (rightDay === 0 ? 0 : 1) : (rightDay === 0 ? 1 : 0);
          return leftScore - rightScore || right.localeCompare(left);
        });
      });
      return found;
    });

    const sectionKeys = ['entrance', 'collect', 'prayer_offerings', 'communion', 'prayer_after'];
    const result = {};
    for (let week = 1; week <= 34; week += 1) {
      let iso = '';
      let parsed = null;
      for (const candidate of candidates[week] || []) {
        const response = await fetch(`https://missa.cbck.or.kr/DailyMissa/${candidate.replace(/-/g, '')}`);
        if (!response.ok) continue;
        const html = await response.text();
        const candidateParsed = await page.evaluate(({ html, iso, sectionKeys }) => {
          const [year, month, day] = iso.split('-').map(Number);
          const value = strictParseDailyMass('KR', html, new Date(year, month - 1, day, 9));
          const data = {};
          sectionKeys.forEach(key => {
            if (value && value.data && value.data[key]) data[key] = value.data[key];
          });
          return { title: value.title, data };
        }, { html, iso: candidate, sectionKeys });
        const titleKey = String(candidateParsed.title || '').replace(/\s+/g, '');
        if (!titleKey.includes(`연중제${week}주`)) continue;
        iso = candidate;
        parsed = candidateParsed;
        break;
      }
      if (!iso || !parsed) throw new Error(`No verified CBCK ordinary-week source found for week ${week}`);
      result[week] = { week, pdfPage: 932 + week, proofreadDate: iso, parsed };
      process.stdout.write(`week ${week}: ${iso}\n`);
    }
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
    console.log(JSON.stringify({ weeks: Object.keys(result).length, outputPath }));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exit(1);
});
