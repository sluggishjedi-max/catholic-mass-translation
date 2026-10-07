// Country Python definitions supply the order, rites, source sections and text edits.
(function registerSpecialLiturgyOrder(global) {
  'use strict';
  const clone = value => JSON.parse(JSON.stringify(value));
  const norm = value => String(value || '').normalize('NFKC').replace(/[\s.。!！]/gu, '').toLowerCase();
  const localized = (map, lang) => (map || {})[lang] || (map || {}).EN || (map || {}).KR || '';
  const header = names => Object.fromEntries(SUPPORTED_LANGS.map(lang => [lang.toLowerCase(), localized(names, lang)]));
  const missingText = lang => localized({KR:'이 구역의 국가별 전례문을 아직 등록하지 않았습니다.',EN:'The approved text for this country has not yet been registered.'}, lang);
  let activeRecord = null, gospelDialogues = new Set();

  function riteData(record, lang, key, date) {
    const data = clone(record?.riteData?.[lang]?.[key] || {});
    const cycle = getSundayCycle(date);
    if (data.byCycle) Object.assign(data, data.byCycle[cycle] || {});
    return data;
  }
  function build(date, ordinary) {
    const record = countrySpecialMassRecord(date, state.selectedLocationCode || state.currentLoc);
    activeRecord = record && Array.isArray(record.order) ? record : null;
    if (!activeRecord) return null;
    const templates = new Map(ordinary.map(item => [getBaseId(item.id), item]));
    const gospel = templates.get('gospel');
    gospelDialogues = new Set([0,1,3].flatMap(index => SUPPORTED_LANGS.map(lang => norm(gospel?.lines?.[index]?.[`text_${lang.toLowerCase()}`]))).filter(Boolean));
    const records = Object.fromEntries(SUPPORTED_LANGS.map(lang => [lang, countrySpecialMassRecord(date, dailySourceLocationCode(lang))]));
    const result = [];
    for (const raw of activeRecord.order) {
      const node = typeof raw === 'string' ? {use:raw} : raw;
      if (node.section) { result.push({id:`special_section_${node.section}`, type:'section', ...header(node.names)}); continue; }
      if (node.use) {
        const template = templates.get(node.use);
        if (!template) continue;
        const item = clone(template); delete item.if;
        item.__specialWhen = node.when;
        if (node.use === 'gospel' && activeRecord.passionGospel) item.__passionGospel = true;
        if (node.use === 'eucharist') {
          if (activeRecord.allowedForms) {
            for (const form of Object.keys(item.forms || {})) if (!activeRecord.allowedForms.includes(form)) { delete item.forms[form]; delete item.variants?.[form]; }
            if (!activeRecord.allowedForms.includes(state.options.eucharist)) state.options.eucharist = activeRecord.allowedForms[0];
          }
          if (activeRecord.prefaceKey) {
            const key = activeRecord.prefaceKey;
            const existing = getEucharistSongMap(item)[key];
            if (existing) item.songs = {[key]:clone(existing)};
            else {
              const notice = Object.fromEntries(SUPPORTED_LANGS.map(lang => [`rubric_${lang.toLowerCase()}`, missingText(lang)]));
              item.songs = {[key]:{title:header(activeRecord.prefaceNames || namesForRecord(activeRecord)), content:[notice]}};
            }
            const supplied = Object.fromEntries(SUPPORTED_LANGS.map(lang => [lang, records[lang]?.prefaceText?.[lang]?.lines || []]));
            if (Object.values(supplied).some(lines => lines.length)) {
              const original = item.songs[key].content || [];
              item.songs[key].content = Array.from({length:Math.max(original.length,...Object.values(supplied).map(lines => lines.length))},(_,index)=>Object.fromEntries(SUPPORTED_LANGS.flatMap(lang=>{
                if (!supplied[lang].length) return Object.entries(original[index] || {}).filter(([field])=>field.endsWith(`_${lang.toLowerCase()}`));
                return ['text','sp','rubric','role'].filter(field=>supplied[lang][index]?.[field] !== undefined).map(field=>[`${field}_${lang.toLowerCase()}`,supplied[lang][index][field]]);
              })));
            }
            item.__specialPrefaceKey = key;
          }
        }
        result.push(item); continue;
      }
      const key = node.rite;
      const perLanguage = Object.fromEntries(SUPPORTED_LANGS.map(lang => [lang, riteData(records[lang], lang, key, date)]));
      const choices = node.choices || perLanguage[state.currentLoc]?.choices || Object.values(perLanguage).find(data => data.choices)?.choices;
      const toLines = choice => {
        const bodies = Object.fromEntries(SUPPORTED_LANGS.map(lang => {
          let lines = choice ? perLanguage[lang].variants?.[choice]?.lines || perLanguage[lang].lines || [] : perLanguage[lang].lines || [];
          if (!node.choices && !lines.length) lines = [{rubric:missingText(lang)}];
          return [lang,lines];
        }));
        const length = Math.max(1, ...Object.values(bodies).map(lines => lines.length));
        return Array.from({length}, (_, index) => Object.fromEntries(SUPPORTED_LANGS.flatMap(lang => {
          const line = bodies[lang][index] || {};
          const lower = lang.toLowerCase();
          return ['text','sp','rubric','role'].filter(field => line[field] !== undefined).map(field => [`${field}_${lower}`, line[field]]);
        })));
      };
      const cit = Object.fromEntries(SUPPORTED_LANGS.filter(lang => perLanguage[lang].citation).map(lang => [`cit_${lang.toLowerCase()}`, perLanguage[lang].citation]));
      const item = {id:key, type:choices ? 'selectable' : 'part', header:header(node.names), cit, lines:toLines(), __countrySpecialRite:true, __specialWhen:node.when};
      if (choices) {
        item.variants = Object.fromEntries(Object.entries(choices).map(([choice,names]) => [choice,{label:header(names), header:item.header, cit, lines:toLines(choice)}]));
        if (!item.variants[state.options[key]]) state.options[key] = node.default || Object.keys(choices)[0];
      }
      result.push(item);
    }
    return result;
  }
  function namesForRecord(record) { return record.names || {EN:'Proper Preface'}; }
  function visible(item) {
    return Object.entries(item.__specialWhen || {}).every(([key, values]) => values.includes(state.options[key]));
  }
  function prepareLines(item, lines) {
    if (!item.__passionGospel) return lines;
    return lines.map(line => {
      const result = {...line};
      for (const lang of SUPPORTED_LANGS) {
        const lower = lang.toLowerCase();
        if (gospelDialogues.has(norm(result[`text_${lower}`]))) { delete result[`text_${lower}`]; delete result[`sp_${lower}`]; }
      }
      return result;
    }).filter(line => Object.keys(line).some(key => /^(text|rubric)_/.test(key) && line[key]));
  }
  function eucharistLines(lines, form) {
    const edits = activeRecord?.eucharistEdits || {};
    return lines.map(line => {
      const result = {...line};
      for (const [lang, rules] of Object.entries(edits)) {
        const field = `text_${lang.toLowerCase()}`;
        for (const rule of rules) {
          if (rule.form && String(form) !== rule.form) continue;
          if (rule.section && line.__eucharistSection !== rule.section) continue;
          if (norm(result[field]) === norm(rule.from)) result[field] = rule.to;
        }
      }
      return result;
    });
  }
  function parseParts(record, lang, source, date = getActiveLiturgicalSourceDate()) {
    const specs = record?.sourceParts?.[lang];
    if (!specs) return {};
    const lines = strictSourceLines(source);
    const result = {};
    for (const [key,spec] of Object.entries(specs)) {
      let partLines = lines;
      if (spec.htmlSelector && !isJinaMarkdownSource(source)) {
        const region = parseHtml(source).querySelector(spec.htmlSelector);
        if (region) {
          region.querySelectorAll('script, style, nav, footer, iframe, noscript').forEach(node=>node.remove());
          region.querySelectorAll('br').forEach(node=>node.replaceWith('\n'));
          region.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,blockquote,div').forEach(node=>{
            node.prepend(region.ownerDocument.createTextNode('\n'));
            node.append(region.ownerDocument.createTextNode('\n'));
          });
          partLines = region.textContent.split(/\n+/).map(strictCleanLine).filter(Boolean);
        }
      }
      const after = spec.after ? partLines.findIndex(line => new RegExp(spec.after,'iu').test(line)) : -1;
      if (spec.after && after < 0) continue;
      const startPattern = new RegExp(spec.start,'iu');
      const start = partLines.findIndex((line,index) => index > after && startPattern.test(line));
      if (start < 0) continue;
      const stopPattern = new RegExp(spec.stop,'iu');
      const end = partLines.findIndex((line,index) => index > start && stopPattern.test(line));
      if (end < 0) continue; // Never absorb the rest of the service into one reading.
      const section = {heading:partLines[start], lines:partLines.slice(start+1,end)};
      const parsed = strictFormatSection(lang, spec.kind === 'psalm' ? 'psalm' : spec.kind === 'gospel' ? 'gospel' : 'reading1', section);
      if (!sourceSectionHasContent(parsed)) continue;
      const citationKey = `cit_${lang.toLowerCase()}`;
      if (!parsed[citationKey]) parsed[citationKey] = riteData(record, lang, key, date).citation || '';
      if (spec.ending?.length) {
        const ending = () => clone(spec.ending).map(line=>({...line,role:'proclamation'}));
        parsed.lines = parsed.lines.flatMap((line,index) => index > 0 && strictAlternativeMatch(alternativeMarkerText(line)) ? [...ending(),line] : [line]);
        parsed.lines.push(...ending());
      }
      parsed.text = parsedLinesToText(parsed.lines);
      result[key] = parsed;
    }
    return result;
  }
  global.ordoSpecialOrder = Object.freeze({build, visible, prepareLines, eucharistLines, parseParts});
})(globalThis);
