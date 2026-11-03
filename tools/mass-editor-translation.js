'use strict';

const { enforceCatholicKoreanFallbackTerms } = require('../functions/translation-terms');
const GOOGLE_TRANSLATION_ENDPOINT = 'https://translate.googleapis.com/translate_a/single';

function translationError(message, statusCode = 502) {
  return Object.assign(new Error(message), { statusCode });
}

async function requestJson(endpoint, options, fetchImpl) {
  let response, text;
  try {
    response = await fetchImpl(endpoint, { ...options, signal: AbortSignal.timeout(60000) });
    text = await response.text();
  } catch (error) {
    const code = error.cause?.code || error.code;
    if (['EACCES', 'EPERM'].includes(code)) {
      throw translationError('편집기 서버의 외부 네트워크 연결이 차단되어 있습니다. 편집기 실행 파일로 서버를 다시 열어 주세요.', 503);
    }
    if (['TimeoutError', 'AbortError'].includes(error.name)) {
      throw translationError('번역 서버의 응답 시간이 초과되었습니다. 잠시 후 다시 시도해 주세요.', 504);
    }
    throw translationError('번역 서비스에 연결하지 못했습니다. 인터넷 연결을 확인한 뒤 다시 시도해 주세요.', 503);
  }
  let payload;
  try { payload = text ? JSON.parse(text) : {}; } catch {
    if (response.ok) throw translationError('번역 서비스에서 올바르지 않은 응답을 받았습니다.');
    payload = {};
  }
  if (!response.ok) {
    const detail = typeof payload.error === 'string' ? payload.error : payload.error?.message;
    throw translationError(detail || `번역 서비스 오류 (HTTP ${response.status})`);
  }
  return payload;
}

async function translateEditorRequest({ mode, body, proxyEndpoint }, { fetchImpl = fetch } = {}) {
  let translated;
  if (mode === 'google') {
    // The editor already has a local Node server: use the PC's connection instead
    // of the shared Firebase egress IP, which Google can rate-limit with HTTP 429.
    const payload = await requestJson(GOOGLE_TRANSLATION_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: new URLSearchParams({ client: 'gtx', sl: body.sourceLang || 'auto', tl: body.targetLang, dt: 't', q: body.text })
    }, fetchImpl);
    translated = Array.isArray(payload?.[0])
      ? payload[0].filter(Array.isArray).map(part => part[0] || '').join('') : '';
    translated = enforceCatholicKoreanFallbackTerms(translated, body.targetLang);
  } else {
    const payload = await requestJson(proxyEndpoint, {
      method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body)
    }, fetchImpl);
    translated = payload?.candidates?.[0]?.content?.parts?.map(part => part.text || '').join('') || '';
  }
  translated = String(translated).replace(/\r\n?/g, '\n').normalize('NFC').trim();
  if (!translated) throw translationError('번역 결과가 비어 있습니다.');
  return translated;
}

module.exports = { translateEditorRequest };
