const assert = require('node:assert/strict');
const languages = ['ko','gm','en','vn','it','pt','es','jp','la','zh'];
for (const lang of languages) require('../JS file/bible/lang-'+lang+'.js');
const bible = require('../JS file/bible/citation.js');
for (const table of Object.values(globalThis.bibleLanguageTables)) {
  assert.equal(Object.keys(table.books).length,73,table.language+' book count');
  for (const [id,book] of Object.entries(table.books)) {
    assert.equal(bible.resolve(book.name,table.appLanguage)?.id,id,table.language+':'+book.name);
    for (const alias of book.aliases) {
      const actual = bible.resolve(alias,table.appLanguage);
      assert(!actual || actual.id === id,'Wrong-language or ambiguous alias silently selected: '+alias);
    }
  }
}
for (const [lang,alias,id] of [['DE','Mk','MRK'],['VN','Mk','MIC'],['IT','Gv','JHN'],['VN','Gv','ECC'],['PT','Jo','JHN'],['ES','Hch','ACT'],['ZH','若蘇厄書','JOS'],['ZH','聖瑪谷福音','MRK'],['EN','Mark','MRK']]) assert.equal(bible.resolve(alias,lang)?.id,id);
for (const alias of ['若','瑪','厄','雅','Jud']) assert.equal(bible.resolve(alias,'ZH'),null,alias+' must remain ambiguous');
assert.equal(bible.resolve('Gn','IT'),null,'Ambiguous Italian Gn');
assert.equal(bible.resolve('Mk','ZH'),null,'No cross-language fallback');
assert.equal(bible.resolve('約書亞記','ZH'),null,'Withdrawn source must not be imported');
assert.equal(bible.key('마태 1,18-23','KR'),bible.key('聖瑪竇福音 一，18～23','ZH'));
assert.equal(bible.key('마르 1,1-8','KR'),bible.key('Mk 1:1–8','DE'));
assert.equal(bible.key('요한 3,16-18','KR'),bible.key('Gv 3,16-18','IT'));
assert.equal(bible.key('시편 13,6ㄱㄴ','KR'),bible.key('詠十三,6ab','ZH'));
assert.notEqual(bible.key('마태 1,1-25','KR'),bible.key('聖瑪竇福音 1,1-23','ZH'));
assert.notEqual(bible.key('시편 13,6','KR'),bible.key('詠12,6','ZH'),'Do not invent Psalm numbering equivalence');
assert.equal(bible.key('시편 13,6ㄱㄴ.6ㄷㄹ','KR'),bible.key('詠一三6ab,6cd','ZH'));
assert.equal(bible.key('2코린 5,20-6,2','KR'),bible.key('聖保祿宗徒致格林多人後書五20-六2','ZH'));
assert.equal(bible.key('미카 5,1-4','KR'),bible.key('米該亞先知書五1-4','ZH'));
for (const [han,number] of [['一二',12],['十二',12],['廿三',23],['卅四',34],['一百五十',150]]) assert.equal(bible.hanNumber(han),number);
assert.equal(bible.parse('1코린 9,16-19.22ㄴ-27','KR').verses,'16-19.22b-27');
assert.equal(bible.parse('聖保祿宗徒致格林多人前書 9,16-19, 22-27','ZH').verses,'16-19.22-27');
assert.equal(bible.parse('시편 84(83),3.4.5-6.12(◎ 2)','KR').alternateChapter,83);
assert.equal(bible.parse('詠八三3-6, 8, 12','ZH').verses,'3-6.8.12');
assert.equal(bible.parse('1코린 8,1-7,11-13','KR').verses,'1-7.11-13');
console.log('10 language tables × 73 books; collisions, discontinuous verses, Psalm response notes and cross-chapter checks passed.');
