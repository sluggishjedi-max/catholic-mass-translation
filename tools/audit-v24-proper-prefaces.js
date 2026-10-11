const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const targetHtml = process.env.ORDO_CHECK_HTML || 'V24.html';

function startServer() {
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://127.0.0.1');
    const route = decodeURIComponent(url.pathname === '/' ? `/${targetHtml}` : url.pathname);
    const file = path.resolve(root, route.replace(/^\/+/, ''));
    if (!file.startsWith(root)) return response.writeHead(403).end('Forbidden');
    fs.readFile(file, (error, data) => {
      if (error) return response.writeHead(404).end('Not found');
      const type = path.extname(file) === '.html' ? 'text/html; charset=utf-8' : 'application/javascript; charset=utf-8';
      response.writeHead(200, { 'content-type': type });
      response.end(data);
    });
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

(async () => {
  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${server.address().port}/${targetHtml}`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => typeof buildGeneratedLiturgyInfo === 'function' && Array.isArray(massData));
    const rows = await page.evaluate(() => {
      const eucharist = massData.find(item => item?.id === '3.3 eucharist');
      const songs = getEucharistSongMap(eucharist);
      const output = [];
      for (const year of [2026, 2027]) {
        for (let date = new Date(year, 0, 1, 9); date.getFullYear() === year; date = addDays(date, 1)) {
          state.currentLoc = 'LA';
          state.targetLang = 'KR';
          state.liturgicalDateContext = { date, localDate: date, leftLang: 'LA', slot: 'day' };
          state.liturgyInfo = buildGeneratedLiturgyInfo(date);
          state.options.eucharist_song = '';
          state.autoEucharistSongKey = '';
          const info = state.liturgyInfo;
          const seasonal = formatSeasonalName('LA', info.meta?.season, info.meta?.week, info.meta?.day, info.meta?.sundayCycle);
          const latinName = cleanNodeText(info.names?.LA || '');
          const namedCelebration = latinName && normalizePrefaceMatchText(latinName) !== normalizePrefaceMatchText(seasonal);
          if (!namedCelebration && !info.meta?.special && !info.isSolemnity) continue;
          const selected = getSelectedEucharistSongKey(eucharist);
          const entry = songs[selected] || {};
          output.push({
            date: formatDateIso(date),
            rank: info.meta?.rank || '',
            latinName,
            koreanName: cleanNodeText(info.names?.KR || info.krName || ''),
            selected,
            latinPreface: cleanNodeText(entry.title?.la || ''),
            hasLatinText: (entry.content || []).some(line => cleanNodeText(line.text_la))
          });
        }
      }
      return output;
    });
    console.log(JSON.stringify(rows, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exit(1);
});
