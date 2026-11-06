'use strict';
const assert=require('node:assert/strict'),mass=require('./mass-data-editor'),display=require('../JS file/ordinary_display'),storage=require('./mass-storage-schema');
const countries=mass.runCountryMassSources(mass.readCountryMassSources()).countries;
const at=(value,path)=>path.reduce((current,key)=>current?.[key],value);
function equivalentBlock(original,rendered,path){for(const key of path){if(typeof key==='number'&&original?.[key]?.optionKey)rendered=rendered?.find(row=>original[key].pairKey?row?.pairKey===original[key].pairKey:row?.optionKey===original[key].optionKey);else rendered=rendered?.[key];original=original?.[key];}return rendered;}
const parts=(rows,lower)=>JSON.parse(JSON.stringify((rows||[]).flatMap(row=>storage.lineParts(row,lower)).map(part=>({kind:part.kind,text:part.text,speaker:part.speaker}))));
let blocks=0,rows=0;
for(const [country,module]of Object.entries(countries)){
 const lower=module.ordinaryLanguage?.toLowerCase()||module.language.toLowerCase(),korean=display.prepare(countries.KR.ordinary,'kr'),own=display.prepare(module.ordinary,lower),merged=country==='KR'?own:display.merge(korean,own);
 for(const block of mass.collectMassBlocks(module.ordinary,lower)){
  const original=parts(at(module.ordinary,[block.entryIndex,...block.relativePath]),lower),entry=merged.find(item=>item.id===block.entryId),actual=parts(equivalentBlock(module.ordinary[block.entryIndex],entry,block.relativePath),lower);
  assert.deepEqual(actual,original,country+' edited rows changed at '+block.key);blocks++;rows+=original.length;
 }
}
const a=[{text_kr:'First\nline',__massEditorPairKeys:{text_kr:'a:text'}},{rubric_kr:'Instruction <b>before</b>',__massEditorPairKeys:{rubric_kr:'b:rubric'}},{text_kr:'Last',__massEditorPairKeys:{text_kr:'c:text'}}];
const b=[{text_vn:'Cuối',__massEditorPairKeys:{text_vn:'c:text'}},{rubric_vn:'Chỉ dẫn',__massEditorPairKeys:{rubric_vn:'b:rubric'}},{text_vn:'Đầu',__massEditorPairKeys:{text_vn:'a:text'}}];
const merged=display.mergeRows(display.rows(a,'kr'),display.rows(b,'vn'));
assert.deepEqual(parts(merged,'kr'),parts(a,'kr'));assert.deepEqual(parts(merged,'vn'),parts(b,'vn'));
const structural=display.merge(display.prepare([{type:'optionBlock',optionKey:'test',options:{a:{label:{kr:'선택'},lines:a}}}],'kr'),display.prepare([{type:'optionBlock',optionKey:'test',options:{a:{label:{vn:'Lựa chọn'},lines:b}}}],'vn'));
assert.equal(structural[0].options.a.label.kr,'선택');assert.equal(structural[0].options.a.label.vn,'Lựa chọn');assert.deepEqual(parts(structural[0].options.a.lines,'kr'),parts(a,'kr'));assert.deepEqual(parts(structural[0].options.a.lines,'vn'),parts(b,'vn'));
console.log(JSON.stringify({countries:Object.keys(countries).length,blocks,rows,sourceTextRubricsSpeakersAndOrderPreserved:true,conflictingEditorAnchorsPreserveBothOrders:true,nestedChoicesPreserved:true}));
