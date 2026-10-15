// Country Python definitions supply the order, rites, source sections and text edits.
(function registerSpecialLiturgyOrder(global) {
  'use strict';
  const clone = value => JSON.parse(JSON.stringify(value));
  const norm = value => String(value || '').normalize('NFKC').replace(/[\s.。!！]/gu, '').toLowerCase();
  const localized = (map, lang) => (map || {})[lang] || (map || {}).EN || (map || {}).KR || '';
  const header = names => Object.fromEntries(SUPPORTED_LANGS.map(lang => [lang.toLowerCase(), localized(names, lang)]));
  const missingText = lang => localized({KR:'이 구역의 국가별 전례문을 아직 등록하지 않았습니다.',EN:'The approved text for this country has not yet been registered.'}, lang);
  let activeRecord = null, activeCountryRecords = {}, gospelDialogues = new Set();

  function riteData(record, lang, key, date) {
    const data = clone(record?.riteData?.[lang]?.[key] || {});
    const cycle = getSundayCycle(date);
    if (data.byCycle) Object.assign(data, data.byCycle[cycle] || {});
    if (/^(?:palm_gospel|vigil_reading_\d)$/.test(key) && !data.choices && !data.variants) {
      const options = [[]];
      for (const line of data.lines || []) {
        const marker = String(line.text || line.rubric || '').trim();
        if (/^(?:Or\s*:|Vel\s*:|또는\s*:?|Hoặc(?:\s+đọc\b.*)?\s*:?)$/iu.test(marker)) options.push([]);
        else options[options.length - 1].push(line);
      }
      const bodies = options.filter(lines => lines.length);
      if (bodies.length > 1) {
        const longShort = key.startsWith('vigil_reading_') && bodies.length === 2;
        const labels = longShort ? [
          {KR:'긴 독서', EN:'Long form', VN:'Bài dài', JP:'長い形', LA:'Forma longior', ZH:'長式', IT:'Forma lunga', PT:'Forma longa', ES:'Forma larga', DE:'Langfassung'},
          {KR:'짧은 독서', EN:'Short form', VN:'Bài ngắn', JP:'短い形', LA:'Forma brevior', ZH:'短式', IT:'Forma breve', PT:'Forma breve', ES:'Forma breve', DE:'Kurzfassung'}
        ] : bodies.map((_,index)=>({KR:`제${index+1}양식`,EN:`Form ${index+1}`}));
        data.choices = Object.fromEntries(bodies.map((_,index)=>[String.fromCharCode(65+index),labels[index]]));
        data.variants = Object.fromEntries(bodies.map((lines,index)=>[String.fromCharCode(65+index),{
          lines, citation:data.optionCits?.[index]?.[`cit_${lang.toLowerCase()}`] || data.citation || ''
        }]));
        data.__scriptureChoices = true;
      }
    }
    if (/^(?:palm_gospel|vigil_reading_\d)$/.test(key) && data.variants) data.__scriptureChoices = true;
    if (key === 'vigil_blessing' && !(data.lines || []).some(line => line.text)) {
      const approved = global.missalBlessingData?.[lang]?.solemnBlessings?.easter_vigil;
      if (approved) data.lines = approved.lines.map(raw => ({
        sp: /^R\./.test(raw) ? peopleSpeakerByLang[lang.toLowerCase()] : celebrantSpeakerByLang[lang.toLowerCase()],
        text: raw.replace(/^R\.\s*/, '')
      }));
    }
    return data;
  }
  function build(date, ordinary) {
    const record = countrySpecialMassRecord(date, state.selectedLocationCode || state.currentLoc);
    activeRecord = record && (Array.isArray(record.order) || Array.isArray(record.insertRites)) ? record : null;
    activeCountryRecords = {};
    if (!activeRecord) return null;
    const templates = new Map(ordinary.map(item => [getBaseId(item.id), item]));
    const gospel = templates.get('gospel');
    gospelDialogues = new Set([0,1,3].flatMap(index => SUPPORTED_LANGS.map(lang => norm(gospel?.lines?.[index]?.[`text_${lang.toLowerCase()}`]))).filter(Boolean));
    const records = Object.fromEntries(SUPPORTED_LANGS.map(lang => [lang, countrySpecialMassRecord(date, dailySourceLocationCode(lang))]));
    activeCountryRecords = records;
    const activeLanguages = new Set(getActiveDailySourceLanguages());
    const result = [];
    const order = [];
    for (const raw of activeRecord.order || ordinary.map((item,index) => ({ordinaryIndex:index}))) {
      order.push(raw);
      const key = typeof raw === 'string' ? raw : raw.use || raw.rite || getBaseId(ordinary[raw.ordinaryIndex]?.id || '');
      order.push(...(activeRecord.insertRites || []).filter(node => node.after === key));
    }
    for (const raw of order) {
      const node = typeof raw === 'string' ? {use:raw} : raw;
      if (Number.isInteger(node.ordinaryIndex)) {
        const item = clone(ordinary[node.ordinaryIndex]);
        if ((activeRecord.insertRites || []).some(rite => rite.after === getBaseId(item.id) && rite.replaceAnchorConclusion)) {
          for (const lang of SUPPORTED_LANGS) {
            const lower = lang.toLowerCase(), lines = item.lines || [];
            const amen = lines.findLastIndex(line => isPrayerAmenText(line[`text_${lower}`] || ''));
            const speaker = lines.find(line => line[`sp_${lower}`])?.[`sp_${lower}`];
            const prayer = amen > 0 && speaker
              ? lines.slice(0, amen).findLastIndex(line => line[`sp_${lower}`] === speaker && line[`text_${lower}`]) : -1;
            if (prayer <= 0) continue;
            for (let index = prayer; index <= amen; index += 1) {
              for (const key of Object.keys(lines[index])) if (key.endsWith(`_${lower}`) || key.endsWith(`_${lower}_ai`)) delete lines[index][key];
            }
          }
          item.lines = (item.lines || []).filter(line => Object.keys(line).some(key => /^(text|rubric)_/.test(key) && line[key]));
        }
        result.push(item); continue;
      }
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
      const scriptureChoices = Object.values(perLanguage).some(data=>data.__scriptureChoices);
      const toLines = choice => {
        const bodies = Object.fromEntries(SUPPORTED_LANGS.map(lang => {
          let lines = choice ? perLanguage[lang].variants?.[choice]?.lines || perLanguage[lang].lines || [] : perLanguage[lang].lines || [];
          if (choice && scriptureChoices && !perLanguage[lang].variants?.[choice] && choice !== 'A') lines = [];
          if (!node.sourceOnly && !node.choices && !lines.length) lines = [{rubric:missingText(lang)}];
          return [lang,lines];
        }));
        const length = Math.max(1, ...Object.entries(bodies).filter(([lang])=>activeLanguages.has(lang)).map(([,lines])=>lines.length));
        return Array.from({length}, (_, index) => Object.assign(node.sourceOnly ? {__sourceOnlyOriginal:true} : {}, Object.fromEntries(SUPPORTED_LANGS.flatMap(lang => {
          let line = bodies[lang][index] || {};
          if (line.text === 'Or:') line = {rubric:localized({KR:'또는',EN:'Or:',VN:'Hoặc:',JP:'または',LA:'Vel:',ZH:'或',IT:'Oppure:',PT:'Ou:',ES:'O bien:',DE:'Oder:'},lang)};
          const lower = lang.toLowerCase();
          return ['text','sp','rubric','role'].filter(field => line[field] !== undefined).map(field => [`${field}_${lower}`, line[field]]);
        }))));
      };
      const citationFor = choice => Object.fromEntries(SUPPORTED_LANGS.flatMap(lang => {
        if (choice && scriptureChoices && !perLanguage[lang].variants?.[choice] && choice !== 'A') return [];
        const citation = (choice && perLanguage[lang].variants?.[choice]?.citation) || perLanguage[lang].citation;
        return citation ? [[`cit_${lang.toLowerCase()}`,citation]] : [];
      }));
      const cit = citationFor();
      const item = {id:key, type:choices ? 'selectable' : 'part', header:header(node.names), cit, lines:toLines(), __countrySpecialRite:true, __specialWhen:node.when};
      if (choices) {
        item.variants = Object.fromEntries(Object.entries(choices).map(([choice,names]) => [choice,{label:header(names), header:item.header, cit:citationFor(choice), lines:toLines(choice)}]));
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
    const edits = Object.fromEntries(SUPPORTED_LANGS.map(lang => [lang,activeCountryRecords[lang]?.eucharistEdits?.[lang] || []]));
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
