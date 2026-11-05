'use strict';
const fs=require('node:fs'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const mass=require('./mass-data-editor'),repairs=require('../JS file/ordinary_source_repairs');
const write=process.argv.includes('--write'),targets={US:'en',JP:'jp',VA:'la'};
const digest=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
let sources=mass.readCountryMassSources();
const before=new Map(sources.map(source=>[source.path,digest(source.path)])),changes=[];
for(const[country,lower]of Object.entries(targets)){
  let loaded=mass.getLoadedState(sources);
  const ordinary=loaded.runtime.countries[country].ordinary,entryIndex=ordinary.findIndex(entry=>entry.forms?.['3']);
  const corrected=JSON.parse(JSON.stringify(ordinary));repairs.repair(corrected[entryIndex],lower);
  const valueAt=path=>path.reduce((value,key)=>value?.[key],corrected);
  const blocks=mass.blocksForCountry(loaded,country);
  for(const block of blocks){
    const updates=block.rows.flatMap(row=>{
      if(!['text','rubric'].includes(row.kind)||row.text.trim()||row.segment)return [];
      const text=valueAt(row.textPath);if(typeof text!=='string'||text===row.text)return [];
      return [{key:row.key,kind:row.kind,text,expectedText:row.text,speaker:row.speaker,expectedSpeaker:row.speaker}];
    });
    if(!updates.length)continue;
    if(!write)throw Error(country+' has '+updates.length+' missing PDF-verified paragraphs in '+block.key+'; run with --write.');
    const prepared=mass.prepareMassSourceEdit({jurisdiction:country,blockKey:block.key,updates},sources);
    sources=prepared.sources;changes.push({country,block:block.key,paragraphs:updates.length});
  }
}
for(const source of sources){
  assert.equal(digest(source.path),before.get(source.path),'A source changed during repair preparation');
  if(!Object.hasOwn(targets,source.jurisdiction))continue;
  const original=fs.readFileSync(source.path,'utf8');if(source.code!==original)fs.writeFileSync(source.path,source.code,'utf8');
}
console.log(JSON.stringify({mode:write?'write':'check',changes,koreanSourcePreserved:before.get(mass.countryMassModules.find(x=>x.jurisdiction==='KR').path)===digest(mass.countryMassModules.find(x=>x.jurisdiction==='KR').path)}));
