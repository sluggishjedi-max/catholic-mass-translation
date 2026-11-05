'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs');
const mass=require('./mass-data-editor'),storage=require('./mass-storage-schema'),alignment=require('../JS file/ordinary_alignment');
const registry=mass.runCountryMassSources(mass.readCountryMassSources()),loaded=registry.countries;
const languages={KR:'kr',VN:'vn',US:'en',JP:'jp',VA:'la',TW:'zh',IT:'it',PT:'pt',MX:'es',DE:'de',BR:'pt'};
const sources=Object.entries(languages).map(([location,lower])=>({location,lower,rows:loaded[location].ordinary.find(x=>x.forms)?.forms['1'],legacy:!alignment.CANON_PROFILES[location]}));
const repairs=require('../JS file/ordinary_source_repairs');
const allLanguages={...languages,IE:'en','GB-ENG':'en','GB-WLS':'en','GB-SCT':'en',PH:'en',AU:'en',NZ:'en'};
let ordinaryFormCases=0;
for(const [location,lower]of Object.entries(allLanguages))for(const form of ['2','3']){
  const entry=structuredClone(registry.registry[location].ordinary.find(x=>x.forms));
  repairs.repair(entry,lower);
  const source={location,lower,rows:alignment.trimDoxology(alignment.baseFormRows(entry.forms[form],lower,location,form),lower,location)};
  const range=alignment.formRanges(source),rendered=alignment.alignForm([source]);
  assert(range&&!range.missing,location+' '+form+' lost a reviewed paragraph anchor');
  assert.equal(rendered.length,6,location+' '+form+' fell back to unmatched paragraphs');
  assert(rendered.every(row=>row['text_'+lower]?.length>0),location+' '+form+' has an empty prayer phase');
  const words=text=>String(text).replace(/<[^>]*>/gu,'').replace(/\s+/gu,'');
  assert.equal(words(rendered.map(row=>row['text_'+lower]).join('')),words(range.parts.slice(range.starts[0],range.end).map(part=>part.text).join('')),location+' '+form+' dropped or duplicated approved words');
  ordinaryFormCases++;
}
const emptyRecovery={forms:{'3':Array.from({length:56},()=>({text_en:''}))}};
repairs.repair(emptyRecovery,'en');
assert(emptyRecovery.forms['3'][30].text_en?.includes('Therefore'));
const recoveredHash=JSON.stringify(emptyRecovery);repairs.repair(emptyRecovery,'en');
assert.equal(JSON.stringify(emptyRecovery),recoveredHash,'Recovery was not idempotent');
const editedRecovery={forms:{'3':Array.from({length:56},()=>({text_en:''}))}};
editedRecovery.forms['3'][31].text_en='An administrator edited this paragraph.';
repairs.repair(editedRecovery,'en');
assert.equal(editedRecovery.forms['3'][30].text_en,'','Recovery overwrote part of an edited paragraph');
assert.equal(editedRecovery.forms['3'][31].text_en,'An administrator edited this paragraph.');
const digest=value=>require('node:crypto').createHash('sha256').update(JSON.stringify(value)).digest('hex'),before=digest(sources);
for(const source of sources){
  const lines=alignment.alignCanon([sources[0],source],'ordinary');
  const spoken=lines.filter(row=>row['text_'+source.lower]);
  for(const stage of alignment.CANON_STAGES.filter(stage=>stage!=='mystery'))assert(spoken.some(row=>row.__ordinaryStage===stage),source.location+' lost Roman Canon paragraph '+stage);
  assert.equal(new Set(spoken.map(row=>row.__ordinaryPairKey)).size,spoken.length,source.location+' duplicated a canonical paragraph');
  assert(!spoken.some(row=>/^He raises his eyes\.?$/iu.test(row['text_'+source.lower])),source.location+' retained a priest action');
}
for(const season of ['ordinary','christmas','epiphany','easter','ascension','pentecost']){
  const lines=alignment.alignCanon(sources,season),communion=lines.filter(row=>row.__ordinaryStage==='communicantes');
  assert.equal(communion.filter(row=>row.text_kr).length,1,season+' repeated Korean Communicantes');
  assert.equal(communion.filter(row=>row.text_zh).length,1,season+' repeated Chinese Communicantes');
  for(const row of lines)for(const key of Object.keys(row).filter(k=>/^rubric_[a-z]{2}$/u.test(k)))assert(row.rubric_kr,season+' retained an instruction absent from Korean');
}
const canon=alignment.alignCanon(sources,'ordinary');
const chinese=Object.fromEntries(canon.filter(x=>x.text_zh).map(x=>[x.__ordinaryStage,x.text_zh]));
assert.match(chinese.quam_oblationem,/聖化並接受/u);assert.match(chinese.supra_quae,/亞伯爾/u);assert.match(chinese.supplices,/聖天使/u);assert.match(chinese.departed,/祖先/u);
assert(!chinese.bread.includes('稍微俯身'));assert.match(chinese.bread,/你們大家拿去吃/u);assert.match(chinese.cup,/你們大家拿去喝/u);
assert.equal(digest(sources),before,'Alignment changed editable source data');
const privateSource={__ordinaryFormSources:{'3':[{rows:[{rubric_zh:'（合掌）使成為祢的聖體。'}]}]}};
alignment.applyRubricPolicy(privateSource);
assert.equal(privateSource.__ordinaryFormSources['3'][0].rows[0].rubric_zh,'（合掌）使成為祢的聖體。','Display rubric filtering deleted unparsed original source text');
for(const [location,lower]of Object.entries(languages)){
  const rows=loaded[location].ordinary.find(x=>x.forms).forms['4'];
  const rendered=alignment.alignFourth([{rows,location,lower}]);
  assert.equal(rendered.length,6,location+' lost a semantic paragraph of Eucharistic Prayer IV');
  assert(rendered[2]['text_'+lower]?.length>20,location+' lost salvation history');
  assert(rendered[3]['text_'+lower]?.length>20,location+' lost the institution narrative');
  assert(rendered[5]['text_'+lower]?.length>20,location+' lost the intercessions');
  if(location==='DE'){assert.match(rendered[0].text_de,/lebendige und wahre Gott/u);assert.match(rendered[1].text_de,/Heilig, heilig, heilig/u);}
  if(rows.length===47){
    const normalize=text=>String(text).replace(/<[^>]*>/gu,'').replace(/\s+/gu,'');
    assert.equal(normalize(rendered.map(row=>row['text_'+lower]||'').join('')),normalize(rows.map(row=>row['text_'+lower]||'').join('')),location+' split, duplicated or dropped spoken words');
  }
}
const row=storage.canonicalMassEntry({sp_kr:'◎',text_kr:'<span class="rubric">먼저</span>앞 문장<span class="rubric">중간</span>뒤 문장<span class="rubric">마지막</span>'});
const ordinary=[{id:'test',type:'part',lines:[row]}];
const source={jurisdiction:'KR',path:__filename+'.fixture',code:`(function(global){const ordinary=Object.freeze(${JSON.stringify(ordinary)});global.countryMassData={};\n global.countryMassData.KR = {jurisdiction:'KR',language:'KR',ordinary};})(globalThis);`};
let block=mass.collectMassBlocks(ordinary,'KR')[0];
assert.deepEqual(block.rows.map(x=>x.text),['먼저','앞 문장','중간','뒤 문장','마지막']);
assert.deepEqual(block.rows.map(x=>x.speaker),['','◎','','','']);
const updates=block.rows.map(x=>({key:x.key,kind:x.kind,expectedKind:x.kind,expectedText:x.text,text:x.text==='뒤 문장'?'고친 뒤 문장':x.text,expectedSpeaker:x.speaker,speaker:x.speaker}));
const saved=mass.prepareMassSourceEdit({jurisdiction:'KR',blockKey:block.key,updates,structure:{revision:block.revision,order:updates.map(x=>x.key)}},[source]);
block=mass.blocksForCountry(mass.getLoadedState(saved.sources),'KR')[0];
assert.deepEqual(block.rows.map(x=>x.text),['먼저','앞 문장','중간','고친 뒤 문장','마지막']);
const savedRows=mass.getLoadedState(saved.sources).runtime.countries.KR.ordinary[0].lines;
assert(savedRows.every(row=>!row.rubricLayout_kr),'A separated instruction kept its old inline offset');
assert.deepEqual(storage.lineParts({text_kr:'<u>앞<span class="rubric">중간 지시</span>뒤</u>'},'KR').map(part=>part.text),['<u>앞</u>','중간 지시','<u>뒤</u>'],'Splitting an inline instruction lost body formatting');
const reference=alignment.prepare([{id:'prayer',lines:[{rubric_kr:'잠깐 침묵한다.',__massEditorPairKeys:{rubric_kr:'0:rubric'}},{text_kr:'본문',__massEditorPairKeys:{text_kr:'0:text'}}]}],'kr');
const foreign=alignment.prepare([{id:'prayer',lines:[{text_en:'Body',rubric_en:'Silence.'}]}],'en');
const paired=alignment.mergeValue(reference,foreign,'en')[0].lines;
assert.equal(paired[0].rubric_en,'Silence.');assert.equal(paired[1].text_en,'Body');
console.log(JSON.stringify({canonLanguages:sources.length,ordinaryFormCases,sourceRecoveryPreservesEdits:true,seasonalForms:6,semanticOrder:true,fourthPrayerTextPreserved:true,sourcePreserved:true,editorLeadingMiddleTrailing:true,editorRoundTrip:true,referencePairKeys:true}));
