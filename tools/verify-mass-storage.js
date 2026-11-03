const assert=require('node:assert/strict'),mass=require('./mass-data-editor'),{canonicalMassEntry,hydrateMassEntry}=require('./mass-storage-schema');
const sources=mass.readCountryMassSources(),loaded=mass.getLoadedState(sources);
let rubrics=0,saved=0;
function inspect(value){
 if(!value||typeof value!=='object')return;
 assert(!Array.isArray(value.variants?.lines),'Legacy instruction container survived');
 for(const [key,item] of Object.entries(value)){
  if(key==='rubric'||key.startsWith('rubric_')){assert.match(key,/^rubric_[a-z]{2}$/u);assert.equal(typeof item,'string');rubrics++;}
  if(/^text_[a-z]{2}$/u.test(key)&&typeof item==='string')assert(!/<span[^>]*class=["'][^"']*\brubric\b/iu.test(item),'Instruction remained embedded in body text');
  if(Array.isArray(item))item.forEach(inspect);else inspect(item);
 }
}
for(const module of Object.values(loaded.runtime.registry))module.ordinary.forEach(entry=>{
 inspect(entry);assert.deepEqual(canonicalMassEntry(hydrateMassEntry(entry)),canonicalMassEntry(entry),'Instruction placement did not round-trip');
});
for(const country of loaded.countries){
 const blocks=mass.blocksForCountry(loaded,country.jurisdiction),entrance=blocks.find(block=>block.entryId==='1.1 entrance');
 assert.deepEqual(Array.from(entrance.relativePath),['lines'],country.jurisdiction+' entrance instructions use a different container');
 const block=entrance.rows.some(row=>row.kind==='rubric')?entrance:blocks.find(block=>block.rows.some(row=>row.kind==='rubric'));
 const row=block.rows.find(row=>row.kind==='rubric');
 const text=row.text+' [storage verification]';
 const prepared=mass.prepareMassSourceEdit({jurisdiction:country.jurisdiction,blockKey:block.key,updates:[{
  key:row.key,kind:'rubric',text,expectedText:row.text,speaker:row.speaker,expectedSpeaker:row.speaker
 }]},sources);
 const entry=mass.getLoadedState(prepared.sources).runtime.countries[country.jurisdiction].ordinary.find(item=>item.id===block.entryId);
 if(entry.id==='1.1 entrance'){assert.equal(entry.type,'part');assert(!entry.variants);}
 const lines=block.relativePath.reduce((value,key)=>value[key],entry);
 assert(lines.some(line=>line['rubric_'+country.language.toLowerCase()]===text),country.jurisdiction+' editor wrote its instruction to a different field');saved++;
}
const mixed=canonicalMassEntry({id:'legacy',type:'part',lines:[{rubric_zh:'Chinese instruction'},{text_zh:'Chinese body'}],variants:{header:[{cit_kr:'Reference'}],lines:[{rubric_kr:'Korean instruction'},{text_kr:'Korean body'}]}});
assert.deepEqual(mixed.lines,[{rubric_kr:'Korean instruction',rubric_zh:'Chinese instruction'},{text_kr:'Korean body',text_zh:'Chinese body'}]);
assert.equal(mixed.cit.cit_kr,'Reference');assert(!mixed.variants);
assert.deepEqual(canonicalMassEntry(mixed),mixed,'Normalization must be idempotent');
const choices={id:'choices',type:'selectable',variants:{A:{lines:[{rubric_kr:'First'}]},B:{lines:[{rubric_kr:'Second'}]}}};
assert.deepEqual(canonicalMassEntry(choices),choices,'Genuine alternatives must retain their own instructions');
for(const text of ['<span class="rubric">Strike the breast. </span>My fault.', 'Lord, have mercy. <span class="rubric">Or</span> Kyrie, eleison.', '<span class="rubric">First</span>A<span class="rubric">Second</span>B']){
 const original={lines:[{text_en:text}]},stored=canonicalMassEntry(original);
 assert(stored.lines[0].rubric_en);assert.deepEqual(hydrateMassEntry(stored),original,'Inline instruction moved or lost text');
}
const edited=canonicalMassEntry({text_en:'Before. <span class="rubric">Or</span> After.'});
edited.text_en='A longer beginning.  After.';edited.rubric_en='Alternatively';
assert.equal(hydrateMassEntry(edited).text_en,'A longer beginning. <span class="rubric">Alternatively</span> After.','Editing body or instruction lost its placement');
mass.firebaseMassItems().forEach(inspect);
const actions=canonicalMassEntry({text_zh:'祢的僕婢(某某)(合掌默禱片刻,伸手)與我們。'});
assert(actions.text_zh.includes('(某某)'),'A spoken name placeholder became an instruction');
assert.equal(actions.rubric_zh,'(合掌默禱片刻,伸手)');
assert.equal(canonicalMassEntry(hydrateMassEntry(actions)).rubric_zh,actions.rubric_zh,'Chinese action instruction duplicated during reload');
console.log(JSON.stringify({countries:Object.keys(loaded.runtime.registry).length,editorRubricSaves:saved,checkedRubrics:rubrics,canonicalInstructions:true,genuineChoicesPreserved:true}));
