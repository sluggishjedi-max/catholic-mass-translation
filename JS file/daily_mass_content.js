(function(global){
  'use strict';
  const clone=value=>JSON.parse(JSON.stringify(value));
  function alternative(text){
    const value=String(text||'').replace(/<[^>]+>/g,' ').trim();
    const marker='(?:또는|或いは|または|又は|或|Hoặc|Hoac|O bien|Oppure|Ou|Oder|Or|Vel)';
    if(new RegExp('^'+marker+'(?:\\s+(?:đọc|doc|read))?\\s*[:：;；]?\\s*$','iu').test(value))return {rest:''};
    const match=value.match(new RegExp('^'+marker+'\\s*[:：;；]\\s*(.+)$','iu'));return match?{rest:match[1]}:null;
  }
  function rowText(line){return typeof line==='string'?line:String(line?.text||'');}
  function trimRows(lines){const result=(lines||[]).map(line=>typeof line==='string'?{sp:'',text:line}:clone(line));while(result.length&&!rowText(result[0]).trim()&&(!result[0].rubric||result[0].role==='summary'||result[0].kind==='summary'))result.shift();while(result.length&&!rowText(result.at(-1)).trim()&&!result.at(-1).rubric)result.pop();return result;}
  function body(section){if(typeof section==='string')return section.replace(/^(?:[ \t]*\r?\n)+/u,'');const rows=Array.isArray(section?.lines)?trimRows(section.lines):[];return rows.length?rows.map(rowText).join('\n'):String(section?.text||'').replace(/^(?:[ \t]*\r?\n)+/u,'');}
  function citations(value){return Object.fromEntries(Object.entries(value||{}).filter(([key])=>/^cit_/i.test(key)||['citation','cit'].includes(key)));}
  function normalizeSection(value){
    if(!value||typeof value!=='object'||Array.isArray(value))return typeof value==='string'?body(value):value;
    const section=clone(value),explicit=Array.isArray(section.options)&&section.options.length>0;
    let options;
    if(explicit)options=section.options.map((option,index)=>{const result=typeof option==='string'?{text:option}:clone(option);result.id=result.id||String.fromCharCode(65+index);result.lines=trimRows(Array.isArray(result.lines)?result.lines:String(result.text||'').split(/\r?\n/));result.text=body(result);return result;});
    else{
      const groups=[];let current=[];
      for(const row of trimRows(Array.isArray(section.lines)?section.lines:String(section.text||'').split(/\r?\n/))){const separator=alternative(row.text);if(separator){if(current.some(line=>rowText(line).trim()))groups.push(trimRows(current));current=separator.rest?[{...row,sp:'',text:separator.rest}]:[];}else current.push(row);}
      if(current.some(line=>rowText(line).trim()))groups.push(trimRows(current));
      options=groups.map((lines,index)=>({id:String.fromCharCode(65+index),label:section.optionLabels?.[index]||'',kind:section.optionKinds?.[index]||'',...citations(section.optionCits?.[index]||(index===0?section:{})),lines,text:lines.map(rowText).join('\n')}));
    }
    if(!options.length){section.lines=[];section.text='';}
    else if(options.length>1||explicit){section.options=options;section.lines=clone(options[0]?.lines||[]);section.text=options[0]?.text||'';Object.assign(section,citations(options[0]));section.optionCits=options.map(citations);}
    else if(Array.isArray(section.lines)){section.lines=trimRows(section.lines);section.text=body(section);}
    else if(typeof section.text==='string')section.text=body(section);
    return section;
  }
  function normalizeParsed(parsed){if(!parsed?.data)return parsed;return {...parsed,data:Object.fromEntries(Object.entries(parsed.data).map(([id,section])=>[id,normalizeSection(section)]))};}
  function options(section){const value=normalizeSection(section);return Array.isArray(value?.options)&&value.options.length?value.options:[value];}
  function replaceOption(section,index,value){const normalized=normalizeSection(section);if(!Array.isArray(normalized?.options))return value;normalized.options[index]=clone(value);const first=normalized.options[0];normalized.lines=clone(first.lines||[]);normalized.text=body(first);for(const key of Object.keys(citations(normalized)))delete normalized[key];Object.assign(normalized,citations(first));normalized.optionCits=normalized.options.map(citations);return normalized;}
  global.ordoDailyContent=Object.freeze({alternative,trimRows,body,normalizeSection,normalizeParsed,options,replaceOption});
})(globalThis);
