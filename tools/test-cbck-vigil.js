const assert = require('node:assert/strict');
const { createRuntime } = require('../functions/daily-runtime');
const base = 'https://missa.cbck.or.kr/DailyMissa/20261224';
const vigil = base + '/16524';
const live = process.argv.includes('--live');
const sections = [
  ['입당송', '시편 1,1'], ['본기도', ''], ['제1독서', '이사 62,1-5'],
  ['화답송', '시편 89,4-5'], ['제2독서', '사도 13,16-17.22-25'],
  ['복음 환호송', ''], ['복음', '마태 1,1-25'], ['예물 기도', ''], ['영성체송', ''], ['영성체 후 기도', '']
].map(([title, citation]) => `<h4>${title} ${citation}</h4>${title === '화답송'
  ? '<p>◎ 주님의 자애를 노래하오리다.</p><p>○ 주님께서 당신 백성을 이끌어 주셨다.</p>'
  : title === '복음 환호송' ? '<p>◎ 알렐루야.</p><p>○ 주님께서 당신 백성을 이끌어 주셨다.</p><p>◎ 알렐루야.</p>'
    : '<p>주님께서 이스라엘 백성에게 말씀하셨다.</p>'}`).join('');
const fixture = title => `<html><head><title>오늘의 미사</title></head><body><a href="${base}/16523">[자] 12월 24일</a><a href="${vigil}">[백] 주님 성탄 대축일 - 전야 미사</a><h2>${title}</h2><p>&lt;이 미사는 12월 24일 저녁, 성탄 대축일 제1 저녁 기도 앞이나 뒤에 드린다.&gt;</p>${sections}</body></html>`;
(async () => {
  const pages = live
    ? await Promise.all([base, vigil].map(async url => { const response = await fetch(url); assert(response.ok); return response.text(); }))
    : [fixture('[자] 12월 24일'), fixture('[백] 주님 성탄 대축일 - 전야 미사')];
  const runtime = createRuntime({ country: 'KR', date: '2026-12-24', source: 'official' }, {
    fetchImpl: async url => new Response(pages[String(url).includes('/16524') ? 1 : 0], { status: 200 })
  });
  try {
    const result = await runtime.collect('christmas_vigil');
    assert.equal(result.parsed.sourceUrl, vigil);
    assert.equal(result.parsed.fallbackSource, undefined, 'Available CBCK original was replaced by a fixed formulary');
    assert.equal(result.validation.complete, true);
    assert.equal(result.validation.missing.length, 0);
    for (const section of ['reading1', 'psalm', 'reading2', 'gospel_accl', 'gospel']) assert(result.parsed.data[section], section);
    console.log(JSON.stringify({ source: live ? 'live CBCK pages' : 'CBCK layout fixture', sourceUrl: result.parsed.sourceUrl, sections: Object.keys(result.parsed.data), fixedFallback: false }));
  } finally { runtime.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
