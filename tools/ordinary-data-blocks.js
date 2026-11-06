'use strict';
const mass=require('./mass-data-editor'),storage=require('./mass-storage-schema');
function replaceDataBlocks(source,changes){
 let code=mass.ensureBlockReplacementSupport(mass.ensureOrdinaryOverrideSection(source.code,source.jurisdiction));
 const block=mass.ordinaryOverrideBlock(code),entries=block.entries;
 for(const change of changes){
  for(let i=entries.length-1;i>=0;i--)if(entries[i].replace?.entryId===change.entryId&&JSON.stringify(entries[i].replace.relativePath)===JSON.stringify(change.relativePath))entries.splice(i,1);
  entries.push({replace:{entryId:change.entryId,relativePath:change.relativePath,rows:storage.canonicalMassEntry(change.value)}});
 }
 const value=JSON.stringify(entries,null,2).replace(/\n/gu,'\n  ');code=code.slice(0,block.start)+value+code.slice(block.end);
 return {...source,code};
}
module.exports={replaceDataBlocks};
