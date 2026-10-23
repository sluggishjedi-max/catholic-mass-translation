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
