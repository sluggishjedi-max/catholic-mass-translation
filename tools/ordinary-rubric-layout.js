'use strict';
// Author explicit layout fields in the editable datasets. Rendering reads the
// saved fields and never infers whether ordinary text is an instruction.
const storage=require('./mass-storage-schema');
const plain=value=>String(value||'').replace(/<[^>]*>/gu,'').trim();
function markRows(rows,lower){
 const parts=(rows||[]).flatMap((row,index)=>storage.lineParts(row,lower).map(part=>({...part,index})));
 const body=parts.map((part,index)=>part.kind==='text'&&plain(part.text)?index:-1).filter(index=>index>=0),first=parts.findIndex(part=>plain(part.text)),last=body.at(-1),insets=new Map(),counts=new Map();
 parts.forEach((part,index)=>{if(part.kind!=='rubric'||!plain(part.text))return;counts.set(part.index,(counts.get(part.index)||0)+1);if(index>first&&index<last)insets.set(part.index,[...(insets.get(part.index)||[]),part.segmentIndex]);});
 let changed=0;for(const[rowIndex,row]of(rows||[]).entries()){if(!row||typeof row!=='object')continue;const field='rubricInset_'+lower,segments=insets.get(rowIndex),value=segments?(segments.length===counts.get(rowIndex)?true:segments):undefined;if(JSON.stringify(row[field])===JSON.stringify(value))continue;if(value)row[field]=value;else delete row[field];changed++;}
 return changed;
}
function markEntry(entry,lower){let changed=0;function walk(value){if(!value||typeof value!=='object')return;if(Array.isArray(value)){changed+=markRows(value,lower);value.forEach(walk);}else for(const[key,child]of Object.entries(value))if(!key.startsWith('__')&&!key.startsWith('rubricLayout'))walk(child);}walk(entry);return changed;}
function prepare(sources,depth=0){
 const mass=require('./mass-data-editor');sources=sources||mass.readCountryMassSources();const loaded=mass.runCountryMassSources(sources),changes=[];
 const next=sources.map(source=>{const module=loaded.countries[source.jurisdiction],lower=(module.ordinaryLanguage||module.language).toLowerCase(),blocks=[],edits=[];for(const block of mass.collectMassBlocks(module.ordinary,lower)){const original=[block.entryIndex,...block.relativePath].reduce((v,k)=>v[k],module.ordinary),rows=JSON.parse(JSON.stringify(original));if(!markRows(rows,lower))continue;blocks.push({entryId:block.entryId,relativePath:block.relativePath});for(const[index,row]of rows.entries()){const field='rubricInset_'+lower;if(JSON.stringify(row[field])!==JSON.stringify(original[index][field]))edits.push({layout:{entryId:block.entryId,path:block.relativePath.concat(index),field},value:row[field]||false});}}
  if(!edits.length)return source;changes.push({country:source.jurisdiction,blocks});let code=mass.ensureBlockReplacementSupport(mass.ensureOrdinaryOverrideSection(source.code,source.jurisdiction));
  const anchor='    ordinaryEditorOverrides.forEach(override => {';
  if(!code.includes('if (override.layout) {'))code=code.replace(anchor,anchor+`\n      if (override.layout) {\n        let row = target.find(item => item && item.id === override.layout.entryId);\n        for (const part of override.layout.path) row = row && row[part];\n        if (!row) throw new Error('Mass editor layout path is stale');\n        if (override.value) row[override.layout.field] = JSON.parse(JSON.stringify(override.value));\n        else delete row[override.layout.field];\n        return;\n      }`);
  const block=mass.ordinaryOverrideBlock(code),entries=block.entries;for(const edit of edits){const index=entries.findIndex(old=>JSON.stringify(old.layout)===JSON.stringify(edit.layout));if(index>=0)entries[index]=edit;else entries.push(edit);}code=code.slice(0,block.start)+JSON.stringify(entries,null,2).replace(/\n/gu,'\n  ')+code.slice(block.end);return{...source,code};});
 if(changes.length){if(depth>=4)throw Error('Shared country rubric layouts did not converge');const follow=prepare(next,depth+1);return{sources:follow.sources,changes:[...changes,...follow.changes]};}return{sources:next,changes};
}
if(require.main===module){const fs=require('node:fs'),assert=require('node:assert/strict'),result=prepare();if(process.argv.includes('--check'))assert.equal(result.changes.length,0,'Rubric layout must be authored in country datasets');else if(process.argv.includes('--write'))for(const source of result.sources)if(fs.readFileSync(source.path,'utf8')!==source.code)fs.writeFileSync(source.path,source.code);console.log(JSON.stringify({countries:result.changes.length,blocks:result.changes.reduce((n,c)=>n+c.blocks.length,0),written:process.argv.includes('--write')}));}
module.exports={markRows,markEntry,prepare};
