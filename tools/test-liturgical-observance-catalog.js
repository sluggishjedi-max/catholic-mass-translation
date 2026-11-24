'use strict';

const assert = require('node:assert/strict');
const { createRuntime } = require('../functions/daily-runtime');
require('../JS file/liturgical_observance_catalog');
require('../JS file/liturgical_observances');

const catalog = globalThis.ordoLiturgicalObservances;
const rows = globalThis.ordoAnnualObservanceCatalog;
const languages = ['KR','VN','EN','JP','LA','ZH','IT','PT','ES','DE'];
const roman = rows.filter(([, , calendar])=>calendar==='roman');
const months = Object.fromEntries(Array.from({length:12},(_,i)=>[String(i+1).padStart(2,'0'),0]));
const ids = new Set();
for (const [id,date,calendar,names] of rows) {
    assert(!ids.has(id),id);
    ids.add(id);
    if (date && calendar==='roman') months[date.slice(0,2)]++;
    if (calendar==='roman') assert.deepEqual(Object.keys(names).sort(), [...languages].sort(),id);
    for (const [lang, spellings] of Object.entries(names)) {
        assert(languages.includes(lang),lang);
        for (const title of spellings) assert.equal(catalog.identify(title,lang),id,JSON.stringify({id,lang,title}));
    }
}
assert(Object.values(months).every(count=>count>0));
assert(roman.length>=295);

for (const [lang,title,expected] of [
    ['EN','Optional Memorial of St. John Henry Newman, Priest and Doctor of the Church','StJohnNewman'],
    ['EN','Feast of St. Andrew, Apostle','andrew-apostle'],
    ['JP','聖ブラジオ司教殉教者〖任意〗','StBlase'],
    ['JP','日本の信徒発見の聖母（祝日）','our-lady-of-japan-discovery'],
    ['JP','日本二十六聖人','StsPaulMiki'],
    ['JP','復活徹夜祭','EasterVigil'],
    ['ZH','聖油彌撒','HolyThursChrism'],
    ['KR','성유 축성 미사','HolyThursChrism'],
    ['VN','CN IV MV Năm B','Advent4'],
    ['VN','CN XXXIV TN','christ-king'],
    ['VN','Thánh lễ kính Đức Mẹ La Vang','our-lady-of-la-vang'],
    ['KR','[백] 설','kr-lunar-new-year'],
    ['KR','[홍] 한국 성직자들의 수호자 성 김대건 안드레아 사제 순교자 - 신심 미사','kr-andrew-kim-clergy-votive'],
    ['VN','Thánh lễ Mồng Hai Tết','vn-tet-second-day'],
    ['VN','Lễ Giao Thừa','vn-tet-eve'],
    ['IT','S. Tommaso d’Aquino, presbitero e dottore della Chiesa','StThomasAquinas'],
    ['PT','S. Isabel da Hungria, religiosa','elizabeth-of-hungary'],
    ['DE','Hl. Franz Xaver Ordenspriester, Glaubensbote','francis-xavier'],
    ['ES','Nuestra Señora de Guadalupe','guadalupe'],
    ['LA','In Annuntiatione Domini','Annunciation']
]) assert.equal(catalog.identify(title,lang),expected,lang+' '+title);
for (const [lang,title] of [['EN','St. Mary'],['ES','Memoria. Blanco'],['VN','CN'],['VN','CN IL TN'],['JP','〖祝日〗'],['KR','축일']]) {
    assert.equal(catalog.identify(title,lang),'',title);
}

const runtime = createRuntime({country:'KR',date:'2026-01-04',source:'official'});
try {
    const actual = runtime.run(`(() => {
        const dates = [
            ['KR',2026,1,4], ['KR',2027,4,5],
            ['JP',2026,2,5], ['KR',2026,2,6],
            ['MX',2026,12,12], ['US',2026,12,12], ['KR',2026,9,20]
        ];
        return dates.map(([country,year,month,day])=>{
            const info = calendarInfoForCountry(new Date(year,month-1,day,12),country);
            return [calendarObservanceId(info),primaryCalendarRank(info)];
        });
    })()`);
    assert.equal(actual[0][0],'Epiphany');
    assert.equal(actual[1][0],'Annunciation');
    assert.equal(actual[2][0],'StsPaulMiki');
    assert.equal(actual[3][0],'StsPaulMiki');
    assert.notEqual(actual[2][1],actual[3][1]);
    assert.equal(actual[4][0],'guadalupe');
    assert.equal(actual[5][0],'guadalupe');
    assert.equal(actual[4][1],'solemnity');
    assert.equal(actual[5][1],'feast');
    assert.equal(actual[6][0],'StAndrewKimTaegon');
    runtime.window.uploadedCountryMassMetadata.AU = {
        jurisdiction:'AU', calendar:{'01-26':[{title:'Australia Day', names:{EN:'Australia Day'}, rank:'optional', color:'white'}]}
    };
    const local = runtime.run(`(() => {
        const date = new Date(2026,0,26,12);
        return calendarInfoForCountry(date,'AU').names;
    })()`);
    assert.equal(local.EN,'Australia Day');
    assert.equal(local.ZH,undefined);
} finally { runtime.close(); }

console.log(JSON.stringify({events:rows.length,roman:roman.length,languages:languages.length,months}));
