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
console.log(JSON.stringify({cases,referenceKeptInCitation:true,optionsIndependent:true,ordinaryBodyWordsPreserved:true}));}finally{r.close();}
