'use strict';

const assert = require('node:assert/strict');
const { translateEditorRequest } = require('./mass-editor-translation');
const { enforceCatholicKoreanFallbackTerms } = require('../functions/translation-terms');

async function main() {
  const proxyEndpoint = 'https://translation-fixture.invalid/geminiProxy';
  const google = { mode: 'google', proxyEndpoint, body: { sourceLang: 'auto', targetLang: 'ko', text: 'Amen.' } };
  const ai = { mode: 'ai', proxyEndpoint, body: { kind: 'translate', promptConfig: { contents: [] } } };
  const translated = await translateEditorRequest(google, { fetchImpl: async (url, options) => {
    assert.equal(url, 'https://translate.googleapis.com/translate_a/single', 'Google must use the local server connection');
    assert.equal(options.method, 'POST');
    assert.equal(options.body.get('sl'), 'auto');
    assert.equal(options.body.get('tl'), 'ko');
    assert.equal(options.body.get('q'), 'Amen.');
    assert(options.signal instanceof AbortSignal);
    return new Response(JSON.stringify([[['하나님과 ', 'God and '], ['할렐루야', 'Alleluia']]]));
  } });
  assert.equal(translated, '하느님과 알렐루야', 'Google output must retain the existing Catholic vocabulary rules');
  const aiText = await translateEditorRequest(ai, { fetchImpl: async (url, options) => {
    assert.equal(url, proxyEndpoint, 'AI must continue using the secret-backed Firebase proxy');
    assert.deepEqual(JSON.parse(options.body), ai.body);
    return new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: '평화가 ' }, { text: '여러분과 함께.' }] } }] }));
  } });
  assert.equal(aiText, '평화가 여러분과 함께.');
  for (const targetLang of ['vi', 'en', 'ja', 'la', 'zh-tw', 'it', 'pt', 'es', 'de']) {
    const result = await translateEditorRequest({ ...google, body: { ...google.body, targetLang } }, { fetchImpl: async (_, options) => {
      assert.equal(options.body.get('tl'), targetLang);
      return new Response(JSON.stringify([[['Amen.']]]));
    } });
    assert.equal(result, 'Amen.');
  }
  for (const mode of [google, ai]) {
    await assert.rejects(translateEditorRequest(mode, { fetchImpl: async () => {
      throw new TypeError('fetch failed', { cause: Object.assign(new Error('connect EACCES'), { code: 'EACCES' }) });
    } }), error => error.statusCode === 503 && error.message.includes('네트워크'), 'Denied connections must explain how to reopen the server');
    await assert.rejects(translateEditorRequest(mode, { fetchImpl: async () => {
      throw new DOMException('Timed out', 'TimeoutError');
    } }), error => error.statusCode === 504 && error.message.includes('응답 시간'));
    await assert.rejects(translateEditorRequest(mode, { fetchImpl: async () => new Response('Busy', { status: 429 }) }),
      error => error.statusCode === 502 && error.message.includes('429'));
    await assert.rejects(translateEditorRequest(mode, { fetchImpl: async () => new Response('Not JSON') }),
      error => error.statusCode === 502 && error.message.includes('올바르지 않은 응답'));
    await assert.rejects(translateEditorRequest(mode, { fetchImpl: async () => new Response('{}') }),
      error => error.statusCode === 502 && error.message.includes('비어'));
    await assert.rejects(translateEditorRequest(mode, { fetchImpl: async () => ({ text: async () => { throw new Error('socket closed'); } }) }),
      error => error.statusCode === 503, 'Response-body connection failures must also be readable');
  }
  assert.equal(enforceCatholicKoreanFallbackTerms('하나님과 평강과 주기도문', 'en'), '하나님과 평강과 주기도문');
  console.log('Mass editor translation checks passed: AI, direct Google, 10 target languages, Catholic terms, network errors, timeout, and invalid responses.');
}

main().catch(error => { console.error(error); process.exitCode = 1; });
