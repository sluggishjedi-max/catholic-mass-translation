'use strict';
const fs=require('node:fs'),assert=require('node:assert/strict'),mass=require('./mass-data-editor'),repair=require('../JS file/ordinary_source_repairs');
const sources=mass.readCountryMassSources(),loaded=mass.getLoadedState(sources),entry=loaded.runtime.countries.DE.ordinary.find(item=>item.forms?.['4']);
const restored=structuredClone(entry);repair.repair(restored,'de');
if(restored.forms['4'].length===entry.forms['4'].length){console.log('German EP IV: approved preface and Sanctus already present.');process.exit(0);}
if(!process.argv.includes('--write'))throw Error('German EP IV preface/Sanctus are absent; run with --write.');
const block=mass.blocksForCountry(loaded,'DE').find(item=>item.entryId===entry.id&&item.relativePath.join('.')==='forms.4');
const updates=block.rows.map(row=>({key:row.key,kind:row.kind,expectedKind:row.kind,text:row.text,expectedText:row.text,speaker:row.speaker,expectedSpeaker:row.speaker}));
const position=block.rows.findIndex(row=>row.rowIndex===3);
updates.splice(position,0,...restored.forms['4'].slice(3,5).map((row,index)=>{const key='german-fourth-recovery-'+index;return{key,kind:'text',text:row.text_de,speaker:row.sp_de,expectedText:'',expectedSpeaker:'',create:{entryId:block.entryId,relativePath:block.relativePath,rowKey:key}};}));
const prepared=mass.prepareMassSourceEdit({jurisdiction:'DE',blockKey:block.key,updates,structure:{revision:block.revision,order:updates.map(row=>row.key)}},sources);
const original=sources.find(source=>source.jurisdiction==='DE'),changed=prepared.sources.find(source=>source.jurisdiction==='DE');
assert.equal(fs.readFileSync(original.path,'utf8'),original.code,'German source changed during preparation');
fs.writeFileSync(changed.path,changed.code,'utf8');
console.log('German EP IV: restored the supplied score preface (printed pp.154-155) and the existing approved Sanctus; other fields preserved.');
