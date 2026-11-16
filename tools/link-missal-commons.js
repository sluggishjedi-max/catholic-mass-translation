'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
// These are explicit directions in the supplied Missal, not inferred saint types.
const links=[{language:'VN',date:'11-17',properPage:1190,commonPage:1267,
 instruction:'Lấy Phần Chung Các Thánh Lo Việc Bác Ái'}];
function prepare(root=path.resolve(__dirname,'..')){
 const file=path.join(root,'JS file/local_missal_prayer_data.js'),source=fs.readFileSync(file,'utf8'),context={};vm.runInNewContext(source,context);const data=context.localMissalPrayerData,changes=[];
 for(const link of links){const corpus=data.languages[link.language],proper=corpus.calendar[link.date].find(entry=>entry.page===link.properPage),common=corpus.catalog.find(entry=>entry.kind==='common'&&entry.page===link.commonPage);assert(proper&&common,'Reviewed source pages missing');if(proper.commonPage===link.commonPage&&proper.commonInstruction===link.instruction)continue;proper.commonPage=link.commonPage;proper.commonInstruction=link.instruction;changes.push(link);}
 return {file,source:source.slice(0,source.indexOf('globalThis.localMissalPrayerData = '))+'globalThis.localMissalPrayerData = '+JSON.stringify(data)+';\n',changes};
}
if(require.main===module){const result=prepare();if(process.argv.includes('--check'))assert.equal(result.changes.length,0,'Missal common links are stale');else fs.writeFileSync(result.file,result.source);console.log(JSON.stringify({sourceLinks:links.length,changed:result.changes.length,wordsUnchanged:true}));}
module.exports={prepare,links};
