'use strict';
const assert=require('assert/strict'),{createRuntime}=require('../functions/daily-runtime'),r=createRuntime({country:'KR',date:'2026-11-17',source:'official'});
try{let cases=0;for(const key of ['entrance','communion'])for(const marker of ['참조','참고'])for(const lines of [[`마태 25,34.36.40 ${marker} 주님이 말씀하신다. 내 아버지께 복을 받은 이들아, 오너라.`],[`마태 25,34.36.40 ${marker}`,'주님이 말씀하신다. 내 아버지께 복을 받은 이들아, 오너라.']]){r.window.__section={lines};r.window.__key=key;const part=r.run("ordoDailyContent.normalizeSection(strictFormatSection('KR',__key,__section))");assert.equal(part.cit_kr,'마태 25,34.36.40 '+marker);assert.equal(part.lines[0].text,'주님이 말씀하신다. 내 아버지께 복을 받은 이들아, 오너라.');assert(!part.text.includes(marker));cases++;}
r.window.__section={lines:['마태 25,34.36.40 참조 주님이 말씀하신다. 첫째 본문입니다.','또는','시편 112(111),9 그는 가난한 이에게 넉넉히 나누어 주니.']};const alternatives=r.run("ordoDailyContent.normalizeSection(strictFormatSection('KR','entrance',__section))");assert.equal(alternatives.options.length,2);assert(alternatives.options[0].cit_kr.endsWith('참조'));assert(!alternatives.options[1].cit_kr.includes('참조'));assert(!alternatives.options.some(option=>option.text.includes('참조')));
assert.equal(r.run("strictFormatSection('KR','entrance',{lines:['주님은 말씀하신다. 이 본문 중간의 참조 표현은 그대로 둔다.']}).text"),'주님은 말씀하신다. 이 본문 중간의 참조 표현은 그대로 둔다.');
for(const [name,book,reference] of [['마태오','마태','28,16-20'],['마르코','마르','16,15-20ㄴ'],['루카','루카','24,46-53']]){
 const intro=name+'가 전한 거룩한 복음의 끝입니다.';
 for(const proclamation of [['✠ '+intro,reference],['✠ '+intro+' '+reference]]) {
  r.window.__section={lines:['<주님께서 말씀하셨다.>',...proclamation,'그때에 예수님께서 제자들에게 이르셨다.','주님의 말씀입니다.']};
  const gospel=r.run("strictFormatSection('KR','gospel',__section)");
  assert.equal(gospel.cit_kr,book+' '+reference);
  assert.equal(gospel.lines.find(line=>line.role==='intro')?.text,intro);
  assert.equal(gospel.lines.find(line=>line.role==='intro')?.sp,'✠');
  assert.equal(gospel.lines.find(line=>line.role==='body')?.text,'그때에 예수님께서 제자들에게 이르셨다.');
 }
}
assert.equal(r.run("passageCitationsEquivalent('gospel_accl','묵시 2,10 참조','Apoc 2, 10c','KR','ES')"),true);
assert.deepEqual(JSON.parse(JSON.stringify(r.run("strictFormatSection('ES','gospel_accl',{lines:['Apoc 2,10c','Aleluia. Sé fiel hasta la muerte y te daré la corona de la vida. Aleluia.']}).lines.map(line=>line.sp)"))),['R.','V.','R.']);
for(const caption of ['', 'El Maestro instruye a sus discípulos']){
 r.window.__conoFixture='<html><body><p>Evangelio</p>'+ (caption?'<p>'+caption+'</p>':'')
  +'<p>✠ Evangelio de nuestro Señor Jesucristo según san Lucas 21, 12-19</p><p>Jesús habló a sus discípulos.</p><p>Palabra del Señor.</p>';
 const plan="ordoConoSurDaily.parse({document:parseHtml(__conoFixture),plan:{url:'fixture',title:'Día',requireTwo:false},date:new Date(2026,10,25),formatSection:strictFormatSection,summarized:strictEnsureReadingSummarySlots})";
 r.window.__conoFixture=r.window.__conoFixture.replace('<body>','<body><p>Lectura del libro del Apocalipsis 15, 1-4</p><p>Juan fue testigo.</p><p>Palabra de Dios.</p><p>Salmo 97, 1</p><p>Un canto al Señor.</p>');
 const gospel=r.run(plan+".data.gospel");
 assert.equal(gospel.cit_es,'Lucas 21, 12-19');
 assert.equal(gospel.lines.find(row=>row.role==='intro')?.text,'Evangelio de nuestro Señor Jesucristo según san Lucas');
 assert.equal(gospel.lines.find(row=>row.role==='summary')?.text,caption||undefined);
 assert.equal(gospel.lines.find(row=>row.role==='body')?.text,'Jesús habló a sus discípulos.');
}
const conoReadingFixture = '<p>Antífona de entrada</p><p>Alaben al Señor todas las naciones.</p>'
  + '<p>Gloria</p><p>Liturgia de la Palabra</p><p>(Ver Ordinario de la Misa)</p>'
  + '<p align="right"><font color="red"><i>El pueblo escucha.<br>La palabra de Dios.</i></font></p>'
  + '<p><b>Lectura del libro de Isaías</b> <font color="red">40, 1-5</font><br>Consuelen a mi pueblo.<br>Palabra de Dios.</p>'
  + '<p>SALMO Sal 84, 9</p><p>El Señor habla de paz.</p>'
  + '<p>Lectura de la segunda carta del apóstol san Pedro<br>3, 8-14<br>Esperamos cielos nuevos.<br>Palabra de Dios.</p>'
  + '<p>Evangelio</p><p>Evangelio de nuestro Señor Jesucristo según san Marcos 1, 1-8<br>Juan pregonaba el bautismo.<br>Palabra del Señor.</p>';
r.window.__conoReadingFixture=conoReadingFixture;
const conoReadings=r.run("ordoConoSurDaily.parse({document:parseHtml(__conoReadingFixture),plan:{url:'fixture',title:'Día',requireTwo:true},date:new Date(2026,10,25),formatSection:strictFormatSection,summarized:strictEnsureReadingSummarySlots}).data");
assert.equal(conoReadings.entrance.text,'Alaben al Señor todas las naciones.');
for(const [key,summary,intro,body,citation] of [
 ['reading1','El pueblo escucha. La palabra de Dios','Lectura del libro de Isaías','Consuelen a mi pueblo.','Isaías 40, 1-5'],
 ['reading2',undefined,'Lectura de la segunda carta del apóstol san Pedro','Esperamos cielos nuevos.','2 Pedro 3, 8-14']
]){
 const reading=conoReadings[key];
 assert.equal(reading.lines.find(row=>row.role==='summary')?.text,summary);
 assert.equal(reading.lines.filter(row=>row.role==='intro').length,1);
 assert.equal(reading.lines.find(row=>row.role==='intro').text,intro);
 assert.equal(reading.lines.find(row=>row.role==='body').text,body);
 assert.equal(reading.cit_es,citation);
}
console.log(JSON.stringify({cases,referenceKeptInCitation:true,optionsIndependent:true,ordinaryBodyWordsPreserved:true}));}finally{r.close();}
