'use strict';

// The readings API has no celebration name for temporal Masses. The publisher
// displays their weekday, week and season in the small line above the heading.
function parseKpvTemporalTitle(html, date) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(date || ''))) return '';
  const { JSDOM } = require('jsdom');
  const dom = new JSDOM(html);
  try {
    const clean = value => String(value || '').replace(/\s+/gu, ' ').trim();
    const [year, month, day] = date.split('-');
    const eyebrow = dom.window.document.querySelector('.massr__hero-eyebrow');
    // Guest date restrictions can return a different day's HTML with HTTP 200.
    if (clean(eyebrow?.querySelector('.massr__hero-eyebrow-date')?.textContent)
      !== `${Number(day)} tháng ${Number(month)}, ${year}`) return '';
    return clean(eyebrow.querySelector('.massr__hero-eyebrow-season')?.textContent);
  } finally { dom.window.close(); }
}

async function withKpvTemporalTitle(payload, fetchImpl = fetch) {
  if (!payload?.primary || ![payload.primary, ...(payload.alternatives || [])].some(mass => mass?.via === 'temporal')) return payload;
  try {
    const url = new URL('https://kpv.vn/liturgy/mass-readings');
    url.searchParams.set('date', payload.date);
    url.searchParams.set('profile', payload.profile);
    const response = await fetchImpl(url.href, { signal: AbortSignal.timeout(15000) });
    if (!response.ok) return payload;
    const temporalTitle = parseKpvTemporalTitle(await response.text(), payload.date);
    return temporalTitle ? { ...payload, temporalTitle } : payload;
  } catch {
    // A missing optional header must not discard otherwise valid readings.
    return payload;
  }
}

module.exports = { parseKpvTemporalTitle, withKpvTemporalTitle };
