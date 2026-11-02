const assert=require('node:assert/strict');
for(const lang of ['ko','gm','en','vn','it','pt','es','jp','la','zh']) require('../JS file/bible/lang-'+lang+'.js');
const b=require('../JS file/bible/citation');
const samples={
  KR:'시편 122(121),1-2.3-4ㄱㄴ.4ㄷㄹ-5(◎ 1 참조)',
  VN:'Tv 121,1-2.3-4ab.4cd-5 Đ. c.1',EN:'Psalm 122:1-2,3-4ab,4cd-5 (1)',
  DE:'Ps 122 (121),1–2.3–4ab.4cd–5 (Kv: vgl. 1)',JP:'詩編122,1-2.3-4ab.4cd-5',
  ZH:'詠一二一1-2,3-4ab,4cd-5',IT:'Sal 121 (122),1-2.3-4ab.4cd-5',
  PT:'Salmo 121 (122),1-2.3-4ab.4cd-5',ES:'Sal 121 (122),1-2.3-4ab.4cd-5',LA:'Ps 121 (122),1-2.3-4ab.4cd-5'
};
for(const [left,a] of Object.entries(samples))for(const [right,c] of Object.entries(samples))
  assert(b.equivalent(a,left,c,right,{ignoreSubverses:true}),left+' / '+right+' Psalm identity');
for(const [hebrew,greek] of [
  ['시편 10,1-3','Tv 9,22-24'],['시편 114,1-8','Tv 113,1-8'],
  ['시편 115,1-3','Tv 113,9-11'],['시편 116,1-9','Tv 114,1-9'],
  ['시편 116,10-11','Tv 115,1-2'],['시편 147,1-11','Tv 146,1-11'],
  ['시편 147,12-20','Tv 147,1-9'],['시편 115,1-3','Tv 113b,1-3']
])assert(b.equivalent(hebrew,'KR',greek,'VN',{ignoreSubverses:true}),hebrew+' / '+greek);
assert(!b.equivalent(samples.KR,'KR','Ps 121:1-5','EN',{ignoreSubverses:true}),'Adjacent Hebrew Psalm is different');
assert(!b.psalmsShareChapter(b.parse(samples.KR,'KR'),b.parse('Ps 121:1-5','EN')),'Alternate number must not match another Hebrew Psalm');
assert(!b.equivalent('Tv 115,1-2','VN','시편 116,1-2','KR',{ignoreSubverses:true}),'Split Psalms need verse offsets');
assert(!b.equivalent('Ps 122(119):1-5','EN',samples.KR,'KR',{ignoreSubverses:true}),'Invalid dual numbering must remain unresolved');
globalThis.bibleLanguageTables.XX={psalmNumbering:'greek',books:{PSA:{aliases:['TestPsalm'],koreanKey:'시편'}}};
assert(b.equivalent('TestPsalm 121,1-5','XX','시편 122,1-5','KR',{ignoreSubverses:true}),'Future table numbering metadata');
console.log('Psalm comparison: 10 languages / 100 pairs, dual/bare numbering, response markers, split/combined verse offsets and adjacent-Psalm rejection passed.');
const allSouls = {
  KR:'시편 27(26),1.4.7과 8ㄷ과 9ㄱ.13-14(◎ 1ㄱ 또는 13)',
  VN:'Tv 26,1.4.7 và 8b và 9a.13-14 Đ. c.13',
  EN:'Ps 27(26):1.4.7 and 8c and 9a.13-14. ℟1a or 13',
  JP:'詩編27,1.4.7と8cと9a.13-14', ZH:'詠二六1.4.7及8c及9a.13-14',
  IT:'Sal 26 (27),1.4.7 e 8c e 9a.13-14', PT:'Sl 26 (27),1.4.7 e 8c e 9a.13-14',
  ES:'Sal 26 (27),1.4.7 y 8c y 9a.13-14', DE:'Ps 27 (26),1.4.7 und 8c und 9a.13-14',
  LA:'Ps 26 (27),1.4.7 et 8c et 9a.13-14'
};
for(const [left,a] of Object.entries(allSouls))for(const [right,c] of Object.entries(allSouls))
  assert(b.equivalent(a,left,c,right,{ignoreSubverses:true}),left+' / '+right+' All Souls conjunction/refrain');
for(const [lang,table] of Object.entries(globalThis.bibleLanguageTables).filter(([lang])=>lang!=='XX')){
  const connector={KR:'과',VN:' và ',EN:' and ',JP:'と',ZH:'及',IT:' e ',PT:' e ',ES:' y ',DE:' und ',LA:' et '}[lang];
  for(const id of ['JOB','ROM','MAT','JHN']){
    const book=table.books[id].aliases.find(alias=>b.resolve(alias,lang));
    assert(b.equivalent(book+' 5,1'+connector+'3-4',lang,book+' 5,1.3-4',lang,{ignoreSubverses:true}),lang+' '+id+' numeric conjunction');
  }
}
assert(b.equivalent('詠一Ο二 10,13-18','ZH','시편 103(102),10.13-18','KR',{ignoreSubverses:true}),'PDF omicron zero');
assert(b.equivalent('聖保祿宗徒致斐理伯仁書 3,20-21','ZH','필리 3,20-21','KR',{ignoreSubverses:true}),'Attested full PDF book label');
assert.equal(b.format('Tv 26,7 và 8b và 9a','VN','EN'),'Ps 26:7, 8b, 9a','Translated citation conjunction punctuation');
assert.equal(b.parse('Gospel of imaginary book 5,1 and 3','EN'),null,'Conjunction normalization guessed a book');
assert(!b.equivalent('Rm 5,1 và 3','VN','Rm 5,1-3','VN',{ignoreSubverses:true}),'Conjunction is a list, not a range');
console.log('All Souls references: 100 language pairs, numeric conjunctions across four reading books, bare refrains and PDF zero/book labels passed.');
