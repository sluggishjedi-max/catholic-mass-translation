// Shared comparison engine. Alias dictionaries remain independent per language.
(function (root) {
  'use strict';
  const codes = { KO:'KR', GM:'DE', DE:'DE', EN:'EN', VN:'VN', VI:'VN', JA:'JP' };
  const subverses = {'ㄱ':'a','ㄴ':'b','ㄷ':'c','ㄹ':'d','ㅁ':'e','ㅂ':'f','ㅅ':'g','ㅇ':'h','ㅈ':'i','ㅊ':'j','ㅋ':'k','ㅌ':'l','ㅍ':'m','ㅎ':'n'};
  const koreanSubverses = Object.fromEntries(Object.entries(subverses).map(([kr,en]) => [en,kr]));
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
    let text = fold(String(value || '').replace(/[ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ]/g,c => subverses[c]))
      .replace(/\s*[（(\[]\s*(?:◎|℟|r(?:esp)?\.?|đ\.?|dap\.?|答(?:唱)?|response|refrain|kv\.?|cf\.?|cfr\.?|see|x\.?|vgl\.?)\s*[:：./-]?[^)）\]]*[)）\]]\s*$/iu,'')
      // Vietnamese lectionaries also append the response reference without
      // parentheses (for example "Đ. c.6b" or "Đ. x. c.5").  It is metadata
      // for the refrain, not part of the Psalm stanza range.
      .replace(/\s+(?:đ|dap|r(?:esp)?|response|refrain)\.?\s*(?:x\.?\s*)?(?:c\.?\s*)?\d+[a-z]?(?:\s*[-–—.]\s*\d+[a-z]?)?\s*$/iu,'')
      .replace(/\s*(?:참고|참조|参照|參照|參閱)$/u,'')
      .replace(/^(?:cf\.?|cfr\.?|x\.?|see|vgl\.?)\s+/,'')
      .replace(/(?:과|와)(?=\s*\d)/gu,'.')
      .replace(/^恭讀/,'').replace(/\s+/g,'').replace(/[（]/g,'(').replace(/[）]/g,')');
    for (const entry of entries(code)) {
      if (!text.startsWith(entry.key)) continue;
      let tail = text.slice(entry.key.length).replace(/^\./,'')
        .replace(/([〇零一二三四五六七八九十百廿卅]+)(?=\d)/gu,(_,han) => hanNumber(han)+':');
      // A Psalm's trailing parenthetical verse identifies its refrain, not
      // another stanza. Keep the alternate chapter number before the colon.
      if (entry.id === 'PSA') tail = tail.replace(/\(\d+[a-z]*(?:[-–—.]\d+[a-z]*)?\)$/iu,'');
      const match = tail.match(/^([0-9〇零一二三四五六七八九十百廿卅]+)([ab])?(?:\((\d+(?:[-─–—]\d+)?)\))?[,.:・、]([0-9].*)$/u);
      if (!match) continue;
      if (!resolve(entry.key,code)) return null; // Ambiguous even within this language.
      const chapter = hanNumber(match[1]);
      if (!Number.isInteger(chapter) || chapter < 1) return null;
      const rawVerses = code === 'EN' ? match[4] : match[4].replace(/[—―─](\d+),(\d+)/g,'-$1:$2');
      const verses = rawVerses.replace(/[ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ]/g,c => subverses[c])
        // Dots separate verses. In comma-style notation a descending endpoint
        // followed by a comma denotes a chapter boundary: 5,20-6,2.
        .replace(/[–—―−~～]/g,'-')
        .replace(/(\d+)([a-z]*)-(\d+),(\d+)/g, (all,start,suffix,end,verse) =>
          Number(end) < Number(start) ? start+suffix+'-'+end+':'+verse : all)
        .replace(/[,、]/g,'.').replace(/[。.]$/,'');
      if (!/^[0-9a-z.:;+-]+$/i.test(verses)) return null;
      const reference = chapter + (match[2] || '') + (match[3] ? '('+match[3]+')' : '') + ':' + verses;
      return {id:entry.id, kr:entry.kr, chapter, chapterPart:match[2] || '', language:code,
        alternateChapter:match[3] && /^\d+$/.test(match[3]) ? Number(match[3]) : null,
        alternateChapterRange:match[3] || '', verses, reference, key:entry.id+':'+reference};
    }
    return null;
  }
  function wholeVerseCoverage(parsed) {
    if (!parsed || !parsed.verses) return '';
    const source = parsed.verses.toLowerCase()
      .replace(/(\d+)[a-z]-[a-z](?!\d)/g,'$1')
      .replace(/[a-z]/g,'')
      .replace(/[;+]/g,'.');
    // A colon inside the verse expression marks a cross-chapter boundary.
    // Keep that boundary exact because expanding it would require knowing the
    // verse count of every chapter in every canon/translation.
    if (source.includes(':')) return source.replace(/\.+/g,'.').replace(/^\.|\.$/g,'');
    const verses = new Set();
    for (const part of source.split('.').filter(Boolean)) {
      const match = part.match(/^(\d+)(?:-(\d+))?$/);
      if (!match) return '';
      const start = Number(match[1]), end = Number(match[2] || match[1]);
      if (end < start || end-start > 200) return '';
      for (let number=start; number<=end; number+=1) verses.add(number);
    }
    return [...verses].sort((a,b) => a-b).join(',');
  }
  function comparisonKeys(value,lang,options={}) {
    const parsed=parse(value,lang);
    if (!parsed) return [];
    if (parsed.id === 'PSA') {
      const coverage = psalmCoverage(parsed, options);
      return coverage.length ? ['PSA:'+coverage.join(',')] : [];
    }
    const verses=options.ignoreSubverses ? wholeVerseCoverage(parsed) : parsed.verses;
    if (!verses) return [];
    return [...new Set([parsed.chapter,parsed.alternateChapter].filter(Number.isInteger))]
      .map(chapter => parsed.id+':'+chapter+':'+verses);
  }
  // Official lectionaries use Hebrew or Greek/LXX numbering. An explicit
  // dual number overrides the language default (e.g. English Universalis).
  // New languages can declare psalmNumbering in their independent table.
  const psalmNumbering = Object.freeze({KR:'hebrew',DE:'hebrew',JP:'hebrew',EN:'hebrew',
    VN:'greek',IT:'greek',PT:'greek',ES:'greek',LA:'greek',ZH:'greek'});
  function greekPsalmVerse(chapter, verse, part='') {
    if (chapter === 9) return part === 'b' ? [10,verse] : verse > 21 ? [10,verse-21] : [9,verse];
    if (chapter >= 10 && chapter <= 112) return [chapter+1,verse];
    if (chapter === 113) return part === 'b' ? [115,verse] : verse > 8 ? [115,verse-8] : [114,verse];
    if (chapter === 114) return [116,verse];
    if (chapter === 115) return [116,verse+9];
    if (chapter >= 116 && chapter <= 145) return [chapter+1,verse];
    if (chapter === 146) return [147,verse];
    if (chapter === 147) return [147,verse+11];
    return [chapter,verse];
  }
  function psalmScheme(parsed, options={}) {
    const a=parsed.chapter, b=parsed.alternateChapter;
    if (b && a !== b) {
      if ((a === 9 && b === 10) || (a === 113 && [114,115].includes(b))
          || ([114,115].includes(a) && b === 116) || ([146,147].includes(a) && b === 147)
          || (a >= 10 && a <= 145 && b === a+1)) return 'greek';
      if ((b === 9 && a === 10) || (b === 113 && [114,115].includes(a))
          || ([114,115].includes(b) && a === 116) || ([146,147].includes(b) && a === 147)
          || (b >= 10 && b <= 145 && a === b+1)) return 'hebrew';
      return ''; // Inconsistent dual numbers must not acquire a guessed identity.
    }
    const alternateRange=parsed.alternateChapterRange.replace(/[─–—]/g,'-');
    if (alternateRange === '114-115' && a === 116) return 'hebrew';
    if (alternateRange === '114-115' && a === 113) return 'greek';
    if (alternateRange === '9-10' && a === 9) return 'greek';
    return options.psalmNumbering || (root.bibleLanguageTables || {})[parsed.language]?.psalmNumbering
      || psalmNumbering[parsed.language] || '';
  }
  function psalmCoverage(parsed, options={}) {
    if (!parsed || parsed.id !== 'PSA') return [];
    const scheme=psalmScheme(parsed,options);
    if (!scheme) return [];
    const source=options.ignoreSubverses ? wholeVerseCoverage(parsed).replace(/,/g,'.') : parsed.verses;
    const result=new Set();
    for (const part of source.split(/[.;+]/).filter(Boolean)) {
      const m=part.match(/^(\d+)([a-z]*)(?:-(\d+)([a-z]*))?$/i);
      if (!m) return [];
      const start=Number(m[1]),end=Number(m[3] || m[1]);
      if (end<start || end-start>200) return [];
      for(let verse=start;verse<=end;verse++) {
        const [chapter,canonicalVerse]=scheme==='greek' ? greekPsalmVerse(parsed.chapter,verse,parsed.chapterPart) : [parsed.chapter,verse];
        const suffix=options.ignoreSubverses ? '' : verse===start ? m[2] : verse===end ? m[4] || '' : '';
        result.add(chapter+':'+canonicalVerse+suffix);
      }
    }
    return [...result].sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
  }
  function psalmsShareChapter(left,right) {
    const chapters=parsed=>new Set(psalmCoverage(parsed,{ignoreSubverses:true}).map(key=>Number(key.split(':')[0])));
    const a=chapters(left),b=chapters(right);
    return a.size>0 && [...a].every(chapter=>b.has(chapter)) && [...b].every(chapter=>a.has(chapter));
  }
  function equivalent(left,leftLang,right,rightLang,options={}) {
    const leftKeys=comparisonKeys(left,leftLang,options);
    const rightKeys=new Set(comparisonKeys(right,rightLang,options));
    return leftKeys.length>0 && leftKeys.some(key => rightKeys.has(key));
  }
  function key(value,lang) {
    if (!String(value || '').trim()) return '';
    const parsed=parse(value,lang);
    return parsed ? parsed.key : '?'+language(lang)+':'+fold(value).replace(/\s+/g,'');
  }
  // Formatting belongs to the target language, independently of the source's
  // book names and punctuation. Tables added later may supply citationStyle.
  const styles = {
    KR:{chapter:',',verses:'.',reference:'참조',suffix:true},
    EN:{chapter:':',verses:', ',reference:'cf.'},
    VN:{chapter:',',verses:'.',reference:'x.'},
    JP:{chapter:',',verses:'.',reference:'参照',suffix:true},
    ZH:{chapter:',',verses:', ',reference:'參閱',suffix:true},
    DE:{chapter:',',verses:'.',reference:'vgl.'},
    IT:{chapter:',',verses:'.',reference:'cf.'},
    PT:{chapter:',',verses:'.',reference:'cf.'},
    ES:{chapter:',',verses:'.',reference:'cf.'},
    LA:{chapter:',',verses:'.',reference:'cf.'}
  };
  function format(value, sourceLang, targetLang) {
    const source=language(sourceLang), target=language(targetLang);
    const table=(root.bibleLanguageTables || {})[target];
    const sourceTable=(root.bibleLanguageTables || {})[source];
    if (!table || !sourceTable || !value) return '';
    const style={...styles.EN,...styles[target],...table.citationStyle};
    const aliases=Object.entries(sourceTable.books).flatMap(([id,book]) =>
      book.aliases.map(alias => ({id,alias}))).sort((a,b)=>b.alias.length-a.alias.length);
    const escape=text=>text.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    // Separate references to different books without losing same-book chapter
    // continuations, alternate Psalm numbers, response references or cf. markers.
    const parts=String(value).trim().split(/\s*;\s*/);
    let previousId='', recognized=false;
    const output=parts.map(part => {
      const isReference=/^(?:cf\.?|cfr\.?|x\.?|vgl\.?)\s+/iu.test(part)
        || /(?:참조|참고|参照|參閱)\s*$/u.test(part);
      part=part.replace(/^(?:cf\.?|cfr\.?|x\.?|vgl\.?)\s+/iu,'')
        .replace(/\s*(?:참조|참고|参照|參閱)\s*$/u,'');
      const match=aliases.find(item=>resolve(item.alias,source)?.id === item.id
        && new RegExp('^'+escape(item.alias)+'\\s*\\.?\\s*[0-9〇零一二三四五六七八九十百廿卅]', 'iu').test(part));
      let id=match?.id, tail=match ? part.slice(match.alias.length).replace(/^\s*\.?\s*/u,'') : part;
      if (!id && previousId && /^\d/.test(tail)) id=previousId;
      if (!id) return part;
      recognized=true; previousId=id;
      if (source !== 'EN') tail=tail.replace(/[—―─]\s*(\d+)\s*,\s*(\d+)/g,'-$1:$2');
      tail=tail.replace(/[ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ]/gu,c=>subverses[c])
        .normalize('NFKC').replace(/[（]/g,'(').replace(/[）]/g,')').replace(/[–—―─−~～]/g,'-')
        .replace(/([〇零一二三四五六七八九十百廿卅]+)(?=\d)/gu,(_,han)=>hanNumber(han)+':');
      const boundary='\uE000';
      tail=tail.replace(/^(\d+(?:\(\d+(?:-\d+)?\))?)\s*[,.:、・]\s*/u,'$1'+boundary)
        .replace(/:/g,boundary);
      if (source !== 'EN') tail=tail.replace(/(\d+)([a-z]*)-(\d+),(\d+)/g,(all,start,suffix,end,verse)=>
        Number(end)<Number(start) ? start+suffix+'-'+end+boundary+verse : all);
      tail=tail.replace(/[.,、]\s*(?=\d)/g,style.verses).replace(/(?:과|와)\s*(?=\d)/g,style.verses)
        .replaceAll(boundary,style.chapter);
      const alternatives={KR:'또는', EN:'or', VN:'hoặc', JP:'または', ZH:'或', DE:'oder', IT:'oppure', PT:'ou', ES:'o', LA:'vel'};
      tail=tail.replace(/또는|\bor\b|\bhoặc\b|または|或|\boder\b|\boppure\b|\bou\b|\bvel\b/giu,' '+(alternatives[target] || 'or')+' ');
      if (target === 'KR') tail=tail.replace(/(\d)([a-n]+)/g,(_,n,suffix)=>n+[...suffix].map(c=>koreanSubverses[c]).join(''));
      tail=tail.replace(/〔/g,'(').replace(/〕/g,')').replace(/\(\s*(◎|R\.?|[ĐÐ]\.?)\s*((?:[^()]|\([^()]*\))*)\)/gu,(_,marker,reference)=>{
        const suffix=reference.match(/^(.*?)\s*(?:참조|참고|参照|參閱)\s*$/u);
        let body=(suffix?suffix[1]:reference).trim();
        const nested=format(body,source,target);
        if(nested) body=nested;
        if(suffix) body=style.suffix?body+' '+style.reference:style.reference+' '+body;
        return ' ('+(source===target?marker+' ':'')+body+')';
      }).replace(/\s{2,}/g,' ').trim();
      const book=table.books[id], name=target === 'KR' ? book.koreanKey : (book.aliases[0] || book.name);
      let result=(match ? name+' ' : '')+tail;
      if (isReference) result=style.suffix ? result+' '+style.reference : style.reference+' '+result;
      return result;
    });
    return recognized ? output.join('; ') : '';
  }
  root.bibleCitation = Object.freeze({language, entries, resolve, parse, key, format, hanNumber, wholeVerseCoverage, comparisonKeys, equivalent,
    psalmNumbering, psalmCoverage, psalmsShareChapter});
  if (typeof module !== 'undefined' && module.exports) module.exports = root.bibleCitation;
})(globalThis);
