// Shared comparison engine. Alias dictionaries remain independent per language.
(function (root) {
  'use strict';
  const codes = { KO:'KR', GM:'DE', DE:'DE', EN:'EN', VN:'VN', VI:'VN', JA:'JP' };
  const language = value => codes[String(value || '').toUpperCase()] || String(value || '').toUpperCase();
  // Accents carry identity: Portuguese Jo (John) must not collide with Jó (Job).
  const fold = value => String(value || '').normalize('NFKC').toLowerCase();
  const aliasKey = value => fold(value).replace(/[\s.()（）]/g, '');
  const indices = new Map();
  function entries(lang) {
    const code = language(lang), table = (root.bibleLanguageTables || {})[code];
    if (!table) return [];
    if (!indices.has(code)) {
      const result = [];
      Object.entries(table.books).forEach(([id, book]) => book.aliases.forEach(alias => {
        const key = aliasKey(alias);
        if (key && !result.some(x => x.key === key && x.id === id)) result.push({key, id, kr:book.koreanKey});
      }));
      indices.set(code, result.sort((a,b) => b.key.length-a.key.length));
    }
    return indices.get(code);
  }
  function resolve(value, lang) {
    const key = aliasKey(value), matches = entries(lang).filter(item => item.key === key);
    return new Set(matches.map(item => item.id)).size === 1 ? matches[0] : null;
  }
  function hanNumber(value) {
    if (/^\d+$/.test(value)) return Number(value);
    const digits = {'〇':0,'零':0,'一':1,'二':2,'三':3,'四':4,'五':5,'六':6,'七':7,'八':8,'九':9};
    value = value.replace(/廿/g,'二十').replace(/卅/g,'三十');
    if (!/[十百]/.test(value)) return Number([...value].map(c => digits[c] ?? '?').join(''));
    let total=0, digit=0;
    for (const c of value) {
      if (c === '十' || c === '百') {total += (digit || 1)*(c === '十' ? 10 : 100); digit=0;}
      else if (c in digits) digit=digits[c]; else return NaN;
    }
    return total+digit;
  }
  function parse(value, lang) {
    const code = language(lang);
    const koreanSuffixes = {'ㄱ':'a','ㄴ':'b','ㄷ':'c','ㄹ':'d','ㅁ':'e','ㅂ':'f'};
    let text = fold(String(value || '').replace(/[ㄱㄴㄷㄹㅁㅂ]/g,c => koreanSuffixes[c])).replace(/\s*[（(]◎[^)）]*[)）]\s*$/u,'').replace(/\s*(?:참고|참조)$/u,'').replace(/^(?:cf\.?|cfr\.?|x\.?|see)\s+/,'')
      .replace(/^恭讀/,'').replace(/\s+/g,'').replace(/[（]/g,'(').replace(/[）]/g,')');
    for (const entry of entries(code)) {
      if (!text.startsWith(entry.key)) continue;
      const tail = text.slice(entry.key.length).replace(/^\./,'')
        .replace(/([〇零一二三四五六七八九十百廿卅]+)(?=\d)/gu,(_,han) => hanNumber(han)+':');
      const match = tail.match(/^([0-9〇零一二三四五六七八九十百廿卅]+)(?:\((\d+)\))?[,.:・、]([0-9].*)$/u);
      if (!match) continue;
      if (!resolve(entry.key,code)) return null; // Ambiguous even within this language.
      const chapter = hanNumber(match[1]);
      if (!Number.isInteger(chapter) || chapter < 1) return null;
      const suffixes = {'ㄱ':'a','ㄴ':'b','ㄷ':'c','ㄹ':'d','ㅁ':'e','ㅂ':'f'};
      const verses = match[3].replace(/[ㄱㄴㄷㄹㅁㅂ]/g,c => suffixes[c])
        // Dots separate verses. In comma-style notation a descending endpoint
        // followed by a comma denotes a chapter boundary: 5,20-6,2.
        .replace(/[–—−~～]/g,'-')
        .replace(/(\d+)([a-f]*)-(\d+),(\d+)/g, (all,start,suffix,end,verse) =>
          Number(end) < Number(start) ? start+suffix+'-'+end+':'+verse : all)
        .replace(/[,、]/g,'.').replace(/[。.]$/,'');
      if (!/^[0-9a-f.:;+-]+$/i.test(verses)) return null;
      // Retain the entire range, subverses, cross-chapter boundaries and explicit
      // alternate Psalm number. No inferred Hebrew/LXX verse equivalence.
      const reference = chapter + (match[2] ? '('+match[2]+')' : '') + ':' + verses;
      return {id:entry.id, kr:entry.kr, chapter, alternateChapter:match[2] ? Number(match[2]) : null, verses, reference, key:entry.id+':'+reference};
    }
    return null;
  }
  function key(value,lang) {
    if (!String(value || '').trim()) return '';
    const parsed=parse(value,lang);
    return parsed ? parsed.key : '?'+language(lang)+':'+fold(value).replace(/\s+/g,'');
  }
  root.bibleCitation = Object.freeze({language, entries, resolve, parse, key, hanNumber});
  if (typeof module !== 'undefined' && module.exports) module.exports = root.bibleCitation;
})(globalThis);
