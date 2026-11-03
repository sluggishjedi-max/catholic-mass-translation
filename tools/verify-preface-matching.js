const assert=require('node:assert/strict'),matcher=require('../JS file/preface_matching');
const catalog=Object.fromEntries(Object.keys(matcher.aliases).map(key=>[key,{title:{en:key},content:[]}]));
catalog.common_1={title:{en:'COMMON PREFACE I - The renewal of all things in Christ'},content:[]};
catalog.common_2.title.en='COMMON PREFACE II - Salvation through Christ';
let titles=0;
for(const[key,aliases]of Object.entries(matcher.aliases))for(const title of aliases){
 const number=key.match(/_(\d+)$/u)[1],section={lines:[{text:'（'+number+'）（'+title+'）'},{text:'正文保留。'},{text:'（另有其他五式「通用頌謝詞」供選擇使用，請看《感恩祭典》。）'}]};
 const result=matcher.match(section,'zh',catalog);assert.equal(result.key,key,title);assert.equal(result.body,'正文保留。');titles++;
}
for(const title of ['COMMON PREFACE II','공통 감사송 2','通用頌謝詞（二）','共通叙唱二','Kinh Tiền Tụng Chung II','Præfatio II communis','Prefazio comune II','Prefácio comum II','Prefacio común II','Allgemeine Präfation II']){
 const result=matcher.match({lines:[{text:title},{text:'The authorized prayer body.'}]},'en',catalog);
 assert.equal(result.key,'common_2',title);assert.equal(result.body,'The authorized prayer body.',title+' heading leaked into body');
}
assert.equal(matcher.match({text:'（二）（未辨識的標題）\n正文。'},'zh',catalog).key,'','An ordinal alone must not identify a preface');
assert.equal(matcher.match({text:'（三）（藉基督獲救恩）\n正文。'},'zh',catalog).key,'','Contradictory title and number must stay unresolved');
assert.equal(matcher.match({text:'COMMON PREFACE II - The renewal of all things in Christ\nPrayer.'},'en',catalog).key,'','A different known subtitle must not be merged by its number');
const text='A complete authoritative prayer paragraph that is long enough to establish an exact same-language body match without guessing its title.';
catalog.custom={title:{en:'Custom verified title'},content:[{text_en:text}]};
assert.equal(matcher.match({text},'en',catalog).key,'custom','Exact known bodies must work for future catalogue entries');
catalog.future={title:{future:'Название проверенного предисловия'},content:[]};
const future=matcher.match({lines:[{text:catalog.future.title.future},{text:'Authorized future-language body.'}]},'future',catalog);
assert.equal(future.key,'future');assert.equal(future.body,'Authorized future-language body.','A future language catalogue heading leaked into body text');
for(const note of ['다른 감사송은 123쪽을 참조하세요.','Other prefaces: see page 123.','他の叙唱は123頁を参照。','Aliae praefationes: vide paginam 123.','Altre prefazioni: vedi pagina 123.','Outros prefácios: ver página 123.','Otros prefacios: véase página 123.','Andere Präfationen: siehe Seite 123.','Các kinh tiền tụng khác: xem trang 123.']){
 assert.equal(matcher.extract({lines:[{text:'Authorized prayer.'},{text:note}]}).body,'Authorized prayer.',note);
}
assert.equal(matcher.extract({lines:[{text:'Future title',role:'preface_title'},{text:'Prayer.'},{text:'Future-language footer',role:'preface_reference'}]}).body,'Prayer.');
for(const[value,number]of [['卅一',31],['三一',31],['XIV',14],['二',2],['12',12]])assert.equal(matcher.ordinal(value),number);
console.log(JSON.stringify({chineseTitles:titles,languages:10,bodyAndTitleMatching:true,ambiguousPrefacesPreserved:true}));
