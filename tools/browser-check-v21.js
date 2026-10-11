const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');
const dateArg = process.argv.find(arg => arg.startsWith('--date='));
const leftArg = process.argv.find(arg => arg.startsWith('--left='));
const rightArg = process.argv.find(arg => arg.startsWith('--right='));
const diagnoseVietnamese = process.argv.includes('--diagnose-vn');
const formArg = process.argv.find(arg => arg.startsWith('--form='));
const eucharisticForm = formArg ? formArg.slice('--form='.length) : '';
const dateText = dateArg ? dateArg.slice('--date='.length) : new Date().toISOString().slice(0, 10);
const leftLang = leftArg ? leftArg.slice('--left='.length).toUpperCase() : '';
const rightLang = rightArg ? rightArg.slice('--right='.length).toUpperCase() : '';
const dateMatch = dateText.match(/^(\d{4})-(\d{2})-(\d{2})$/);

if (!dateMatch) {
  console.error('Use --date=YYYY-MM-DD');
  process.exit(2);
}

const [year, month, day] = dateMatch.slice(1).map(Number);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

function startServer() {
  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1');

    if (url.pathname === '/ktcgkpv/mass-reading') {
      try {
        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);
        const body = Buffer.concat(chunks).toString('utf8');
        const upstream = await fetch('https://ktcgkpv.org/readings/mass-reading', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest'
          },
          body
        });
        const text = await upstream.text();
        res.writeHead(upstream.status, { 'content-type': upstream.headers.get('content-type') || 'application/json; charset=utf-8' });
        res.end(text);
      } catch (error) {
        res.writeHead(502, { 'content-type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify({ success: false, msg: error && error.message ? error.message : String(error) }));
      }
      return;
    }

    const route = decodeURIComponent(url.pathname === '/' ? '/V21.html' : url.pathname);
    const file = path.resolve(root, route.replace(/^\/+/, ''));

    if (!file.startsWith(root)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    fs.readFile(file, (error, data) => {
      if (error) {
        res.writeHead(404);
        res.end(`Not found: ${route}`);
        return;
      }
      res.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream' });
      res.end(data);
    });
  });

  return new Promise(resolve => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

(async () => {
  const server = await startServer();
  const port = server.address().port;
  const logs = [];
  const errors = [];
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 1600 } });

  page.on('console', msg => logs.push(`${msg.type()}: ${msg.text()}`));
  page.on('pageerror', error => errors.push(error.stack || String(error)));

  await page.addInitScript(({ year, month, day }) => {
    const RealDate = Date;
    const fixed = new RealDate(year, month - 1, day, 9, 0, 0).getTime();
    class FixedDate extends RealDate {
      constructor(...args) {
        super(...(args.length ? args : [fixed]));
      }
      static now() {
        return fixed;
      }
    }
    FixedDate.UTC = RealDate.UTC;
    FixedDate.parse = RealDate.parse;
    window.Date = FixedDate;
  }, { year, month, day });

  try {
    await page.goto(`http://127.0.0.1:${port}/V21.html`, { waitUntil: 'domcontentloaded' });
    await page.locator('#consent-accept').click({ timeout: 5000 }).catch(() => {});
    if (leftLang && rightLang) {
      await page.evaluate(async ({ leftLang, rightLang }) => {
        state.currentLoc = leftLang;
        state.targetLang = rightLang;
        await fetchMassData();
      }, { leftLang, rightLang });
    }
    if (eucharisticForm) {
      await page.evaluate(form => {
        state.options.eucharist = form;
        render();
      }, eucharisticForm);
    }
    await page.waitForFunction(() => {
      const text = document.body.innerText;
      const headerText = [
        document.querySelector('#header-date')?.textContent || '',
        document.querySelector('.liturgy-name-text')?.textContent || document.querySelector('#header-liturgy-name')?.textContent || ''
      ].join(' ');
      const rendered = document.querySelectorAll('.part-header').length > 0;
      const settled = !/로딩중|불러오는 중|Đang tải/i.test(headerText);
      const hasDailyVietnamese = /Lạy Chúa|Trích sách|Tin Mừng Chúa Giêsu|Ðáp Ca|Lời nguyện hiệp lễ/i.test(text);
      const hasFailure = /VN 매일미사 데이터 파싱 실패|베트남어 전례문 후보 실패/i.test(text);
      return rendered && settled && (hasDailyVietnamese || hasFailure);
    }, null, { timeout: 90000 }).catch(() => {});
    if (leftLang === 'VN') {
      await page.waitForFunction(() => {
        const entrance = document.querySelector('[data-part-id="entrance"]')?.innerText || '';
        const gospel = document.querySelector('[data-part-id="gospel"]')?.innerText || '';
        return entrance.length > 90 && gospel.length > 500 && !/Hôm Nay|Hôm nay/.test(gospel);
      }, null, { timeout: 90000 }).catch(() => {});
    }
    await page.waitForTimeout(3000);

    const result = await page.evaluate(() => {
      const text = document.body.innerText;
      const dailySnapshot = Object.fromEntries(['entrance', 'gospel_accl', 'gospel'].map(baseId => {
        const item = massData.find(entry => getBaseId(entry.id) === baseId) || {};
        const variants = item.variants && typeof item.variants === 'object' ? item.variants : {};
        const lines = Array.isArray(item.lines) ? item.lines : (Array.isArray(variants.lines) ? variants.lines : []);
        return [baseId, {
          keys: Object.keys(variants),
          vn: lines.map(line => line.text_vn || '').filter(Boolean),
          en: lines.map(line => line.text_en || '').filter(Boolean),
          renderedText: document.querySelector(`[data-part-id="${baseId}"]`)?.innerText || ''
        }];
      }));
      return {
        date: document.querySelector('#header-date')?.textContent || '',
        liturgy: document.querySelector('.liturgy-name-text')?.textContent || document.querySelector('#header-liturgy-name')?.textContent || '',
        liturgyColor: state.liturgyInfo && state.liturgyInfo.color,
        prefaceHint: state.liturgyInfo && state.liturgyInfo.prefaceHint,
        selectedPreface: state.options && state.options.eucharist_song,
        eucharisticForm: state.options && state.options.eucharist,
        dailySnapshot,
        partCount: document.querySelectorAll('.part-header').length,
        hasVietnamesePlaceholder: /\(Bài đọc I hôm nay\.\.\.\)|\(Tin Mừng hôm nay\.\.\.\)|\(Lời nguyện nhập lễ hôm nay\.\.\.\)/i.test(text),
        hasVietnameseFailure: /VN 매일미사 데이터 파싱 실패|베트남어 전례문 후보 실패/i.test(text),
        hasVietnameseDailyText: /Lạy Chúa|Trích sách|Tin Mừng Chúa Giêsu|Ðáp Ca|Lời nguyện hiệp lễ/i.test(text)
        , hasAiTranslationButton: /AI 번역/.test(text)
      };
    });
    if (diagnoseVietnamese) {
      result.vietnameseSource = await page.evaluate(async () => {
        const date = getActiveLiturgicalSourceDate();
        const urls = await resolveVietnameseDailyUrls(date);
        const source = await fetchTextWithFallbacks(urls[0]);
        const lines = sourceTextLines(source);
        const parsed = strictParseDailyMass('VN', source, date);
        const candidates = [];
        for (const url of urls.slice(0, 8)) {
          try {
            const candidateSource = await fetchTextWithFallbacks(url);
            const candidateParsed = strictParseDailyMass('VN', candidateSource, date);
            candidates.push({ url, keys: Object.keys((candidateParsed && candidateParsed.data) || {}) });
          } catch (error) {
            candidates.push({ url, error: error && error.message ? error.message : String(error) });
          }
        }
        return {
          urls,
          candidates,
          sectionKeys: Object.keys((parsed && parsed.data) || {}),
          markers: lines.filter(line => /Ca nhập lễ|Lời nguyện nhập lễ|Bài đọc|Đáp ca|Alleluia|Tung hô|Tin Mừng|Phúc Âm|Lời nguyện tiến lễ|Ca hiệp lễ|Lời nguyện hiệp lễ/i.test(line)).slice(0, 80),
          tail: lines.slice(-30)
        };
      });
    }

    fs.mkdirSync(path.join(root, 'test-results'), { recursive: true });
    const screenshotPath = path.join(root, 'test-results', `v21-${dateText}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });

    const failed = errors.length || result.hasVietnameseFailure || result.hasVietnamesePlaceholder || !result.hasVietnameseDailyText;
    console.log(JSON.stringify({ date: dateText, result, screenshotPath, recentLogs: logs.slice(-30), errors }, null, 2));
    process.exitCode = failed ? 1 : 0;
  } finally {
    await browser.close();
    server.close();
  }
})().catch(error => {
  console.error(error);
  process.exit(1);
});
