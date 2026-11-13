'use strict';
const fs=require('node:fs'),assert=require('node:assert/strict'),mass=require('./mass-data-editor');
const hosanna=/(?:호산나|hoan\s+hô|hos[aá]n+na|hosana|osanna|ホザンナ|賀三納|贺三纳|和散那)/iu;
const mystery=/(?:신앙의\s*신비|Mystery of faith|Mầu nhiệm đức tin|Mysterium fidei|信仰の神秘|信德的[奧奥]蹟|Mistero della fede|Mistério da fé|Misterio de la fe|Geheimnis des Glaubens)/iu;
function markDividers(entry,lower){
 const sanctus=(entry.sanctus||[]).filter(row=>String(row?.['text_'+lower]||'').trim());if(sanctus.length)sanctus.at(-1).dividerAfter='after-sanctus';
 const fourth=entry.forms?.['4']||[],last=fourth.findLastIndex(row=>hosanna.test(row?.['text_'+lower]||''));if(last>=0)fourth[last].dividerAfter='after-sanctus';
 function walk(value){if(Array.isArray(value)){for(const row of value){if(row&&typeof row==='object'&&mystery.test(row['text_'+lower]||''))row.dividerBefore='before-memorial-acclamation';walk(row);}}else if(value&&typeof value==='object')for(const[key,child]of Object.entries(value))if(!key.startsWith('__'))walk(child);}
 walk(entry.forms);return {fourthHosanna:last,commonSanctus:sanctus.length};
}
function prepare(sources=mass.readCountryMassSources()){
 const registry=mass.runCountryMassSources(sources).countries,changes=[];
 const next=sources.map(source=>{const module=registry[source.jurisdiction],lower=(module.ordinaryLanguage||module.language).toLowerCase(),edits=[];module.ordinary.forEach((entry,index)=>{if(!entry.isEucharist&&!entry.forms)return;let value=JSON.parse(JSON.stringify(entry));markDividers(value,lower);value=require('./ordinary-source-rows').canonicalTree(value,lower);if(JSON.stringify(value)!==JSON.stringify(entry))edits.push({index,value});});if(!edits.length)return source;
 const fidelity=require('./ordinary-source-rows');for(const edit of edits)assert.deepEqual(fidelity.content([edit.value],lower),fidelity.content([module.ordinary[edit.index]],lower),source.jurisdiction+' source words/types/speakers/order changed');let code=mass.ensureOrdinaryOverrideSection(source.code,source.jurisdiction),block=mass.ordinaryOverrideBlock(code),indexes=new Set(edits.map(edit=>edit.index)),entries=block.entries.filter(edit=>!Array.isArray(edit.path)||!indexes.has(edit.path[0]));entries.push(...edits.map(edit=>({path:[edit.index],value:edit.value})));code=code.slice(0,block.start)+JSON.stringify(entries,null,2).replace(/\n/g,'\n  ')+code.slice(block.end);changes.push({country:source.jurisdiction,entries:edits.length});return{...source,code};});return{sources:next,changes};
}
if(require.main===module){const prepared=prepare();if(process.argv.includes('--check'))assert.equal(prepared.changes.length,0,'Stored Eucharistic divider metadata is stale');else if(process.argv.includes('--write'))for(const source of prepared.sources)fs.writeFileSync(source.path,source.code);console.log(JSON.stringify({changes:prepared.changes,written:process.argv.includes('--write')}));}
module.exports={markDividers,prepare};
