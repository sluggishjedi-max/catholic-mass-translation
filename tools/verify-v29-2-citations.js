const assert=require('node:assert/strict');
for(const lang of ['ko','gm','en','vn','it','pt','es','jp','la','zh']) require('../JS file/bible/lang-'+lang+'.js');
const b=require('../JS file/bible/citation.js');
for(const [source,from,to,expected] of [
  ['마태 5,1-12ㄴ','KR','EN','Mt 5:1-12b'],
  ['Romans 5:5-11','EN','KR','로마 5,5-11'],
  ['Romans 6:3-4, 8-9','EN','KR','로마 6,3-4.8-9'],
  ['로마 5,20-6,2','KR','EN','Rom 5:20-6:2'],
  ['시편 27(26),1.4.13-14','KR','EN','Ps 27(26):1, 4, 13-14'],
  ['마태 25,34 참조','KR','EN','cf. Mt 25:34'],
  ['cf. Mt 25:34','EN','KR','마태 25,34 참조'],
  ['요한 12,1.12-13; 시편 24(23),9-10','KR','EN','Jn 12:1, 12-13; Ps 24(23):9-10'],
  ['Rom 5:5-11; 6:3-9','EN','KR','로마 5,5-11; 6,3-9']
]) assert.equal(b.format(source,from,to),expected,`${from} → ${to}: ${source}`);
for(const lang of Object.keys(globalThis.bibleLanguageTables)) {
  const out=b.format('마태 5,1-12ㄴ','KR',lang);
  assert(b.equivalent(out,lang,'Mt 5:1-12b','EN'),lang+': localized citation lost its range: '+out);
  assert(out.includes(lang==='EN'?'5:':'5,'),lang+': wrong chapter separator');
}
assert.equal(b.format('Unidentified source 1,2','EN','KR'),'','Unknown source must not acquire an inferred book');
assert.equal(b.parse('시편 27(26),1.4.7과 8ㄷ과 9ㄱ.13-14(◎ 1ㄱ 또는 13)','KR')?.chapter,27,'Real Korean All Souls Psalm citation');
assert(!b.equivalent('시편 27(26),1.4.7과 8ㄷ과 9ㄱ.13-14(◎ 1ㄱ 또는 13)','KR','Ps 23:1-3a,3b-4,5,6','EN',{ignoreSubverses:true}));
assert.equal(b.parse('시편 116(114─115),5-6.10-11.15와 16ㄱㄴㄹ(◎ 9)','KR')?.chapter,116,'Composite alternate Psalm numbering');
assert.equal(b.format('시편 119,1ㅅ','KR','EN'),'Ps 119:1g','Extended Korean subverse labels');
assert(b.equivalent('창세 1,1―2,2','KR','Genesis 1:1-2:2','EN'),'Typographic cross-chapter range');
assert(b.format('1코린 8,1-7,11-13','KR','EN').endsWith('8:1-7, 11-13'),'Nonconsecutive verses must not become a chapter boundary');
assert.equal(b.format('若十七7,17','ZH','EN'),'','Ambiguous alias must not acquire the wrong book title');
assert.equal(b.format('시편 19(18),8.9.10.11(◎ 요한 6,68ㄷ)','KR','EN'),'Ps 19(18):8, 9, 10, 11 (Jn 6:68c)','Nested response reference');
assert.equal(b.format('시편 27(26),1.4(◎ 1ㄱ또는13)','KR','EN'),'Ps 27(26):1, 4 (1a or 13)','Localized response notation');
console.log('Localized citation punctuation, subverses, cf., multiple books and cross-chapter ranges passed.');
