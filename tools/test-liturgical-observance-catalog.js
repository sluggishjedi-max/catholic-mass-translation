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
    const [,scope,codeDate] = id.match(/^(roman|particular)-(\d{2}-\d{2})-[a-z0-9]+$/u) || [];
    assert.equal(scope,calendar==='roman' ? 'roman' : 'particular', id);
    const expectedDate = id==='particular-00-00-andrewkimclergyvotive' ? '00-00' : date || '00-00';
    assert.equal(codeDate,expectedDate,id);
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
assert(ids.has('roman-00-00-wedholyweek'));
assert(ids.has('particular-01-15-saintitavirgin'));
assert(ids.has('particular-00-00-thanksgiving'));
assert.equal(rows.find(([id])=>id==='particular-00-00-andrewkimclergyvotive')[1],'07-05');

for (const [lang,title,expected] of [
    ['EN','Optional Memorial of St. John Henry Newman, Priest and Doctor of the Church','roman-10-09-stjohnnewman'],
    ['KR','[녹] 연중 제34주간 목요일','roman-00-00-ordinary34thu'],
    ['VN','Thứ Năm tuần XXXIV Thường Niên','roman-00-00-ordinary34thu'],
    ['VN','Thứ Năm tuần 34 thường niên','roman-00-00-ordinary34thu'],
    ['EN','Thursday of the Thirty-fourth Week in Ordinary Time','roman-00-00-ordinary34thu'],
    ['EN','Thursday of the 34th Week in Ordinary Time','roman-00-00-ordinary34thu'],
    ['IT','GIOVEDÌ DELLA XXXIV SETTIMANA DEL TEMPO ORDINARIO (ANNO PARI)','roman-00-00-ordinary34thu'],
    ['JP','第34木曜日','roman-00-00-ordinary34thu'],
    ['PT','5ª Feira da 34ª Semana do Tempo Comum','roman-00-00-ordinary34thu'],
    ['KR','대림 제1주간 월요일','roman-00-00-advent1mon'],
    ['EN','Thursday after Ash Wednesday','roman-00-00-thuafterashwednesday'],
    ['EN','Wednesday within the Octave of Easter','roman-00-00-wedoctaveeaster'],
    ['EN','Friday after Epiphany','roman-00-00-friafterepiphany'],
    ['KR','성탄 팔일 축제 제5일','roman-12-29-christmasoctave5'],
    ['EN','Feast of St. Andrew, Apostle','roman-11-30-andrewapostle'],
    ['JP','聖ブラジオ司教殉教者〖任意〗','roman-02-03-stblase'],
    ['JP','日本の信徒発見の聖母（祝日）','particular-03-17-ourladyofjapandiscovery'],
    ['JP','日本二十六聖人','roman-02-06-stspaulmiki'],
    ['JP','日本26聖人殉教者（聖パウロ三木と同志殉教者）','roman-02-06-stspaulmiki'],
    ['JP','聖アガタおとめ殉教者','roman-02-05-stagatha'],
    ['JP','福者セバスチャン木村司祭と204殉教者','particular-09-10-blessedsebastiankimuraand204martyrs'],
    ['ZH','乙年 基督普世君王節主日','roman-00-00-christking'],
    ['JP','復活徹夜祭','roman-00-00-eastervigil'],
    ['ZH','聖油彌撒','roman-00-00-holythurschrism'],
    ['KR','성유 축성 미사','roman-00-00-holythurschrism'],
    ['VN','CN IV MV Năm B','roman-00-00-advent4'],
    ['VN','CN XXXIV TN','roman-00-00-christking'],
    ['VN','Thánh lễ kính Đức Mẹ La Vang','particular-00-00-ourladyoflavang'],
    ['KR','[백] 설','particular-00-00-lunarnewyear'],
    ['KR','[홍] 한국 성직자들의 수호자 성 김대건 안드레아 사제 순교자 - 신심 미사','particular-00-00-andrewkimclergyvotive'],
    ['VN','Thánh lễ Mồng Hai Tết','particular-00-00-tetsecondday'],
    ['VN','Lễ Giao Thừa','particular-00-00-teteve'],
    ['IT','S. Tommaso d’Aquino, presbitero e dottore della Chiesa','roman-01-28-stthomasaquinas'],
    ['PT','S. Isabel da Hungria, religiosa','roman-11-17-elizabethofhungary'],
    ['DE','Hl. Franz Xaver Ordenspriester, Glaubensbote','roman-12-03-francisxavier'],
    ['ES','Nuestra Señora de Guadalupe','roman-12-12-guadalupe'],
    ['LA','In Annuntiatione Domini','roman-03-25-annunciation']
]) assert.equal(catalog.identify(title,lang),expected,lang+' '+title);
for (const [lang,title] of [['EN','St. Mary'],['ES','Memoria. Blanco'],['VN','CN'],['VN','CN IL TN'],['JP','〖祝日〗'],['KR','축일']]) {
    assert.equal(catalog.identify(title,lang),'',title);
}

const runtime = createRuntime({country:'KR',date:'2026-01-04',source:'official'});
try {
    const title = 'Saturday of the Third Week of Advent';
    runtime.window.__markdown = 'Title: '+title+'\n\nURL Source: https://bible.usccb.org/bible/readings/121926.cfm\n\nMarkdown Content:\n### Reading 1\n';
    assert.equal(runtime.run("sourceMetadataTitle(__markdown,'EN')"),title);
    assert.equal(runtime.run("sourceMetadataTitle(__markdown.replace('bible.usccb.org','example.com'),'EN')"),'');
    const actual = runtime.run(`(() => {
        const dates = [
            ['KR',2026,1,4], ['KR',2027,4,5],
            ['JP',2026,2,5], ['KR',2026,2,6],
            ['MX',2026,12,12], ['US',2026,12,12], ['KR',2026,9,20],
            ['KR',2026,11,26], ['VN',2026,11,26], ['KR',2026,11,24]
        ];
        return dates.map(([country,year,month,day])=>{
            const info = calendarInfoForCountry(new Date(year,month-1,day,12),country);
            return [calendarObservanceId(info),primaryCalendarRank(info)];
        });
    })()`);
    assert.equal(actual[0][0],'roman-00-00-epiphany');
    assert.equal(actual[1][0],'roman-03-25-annunciation');
    assert.equal(actual[2][0],'roman-02-06-stspaulmiki');
    assert.equal(actual[3][0],'roman-02-06-stspaulmiki');
    assert.notEqual(actual[2][1],actual[3][1]);
    assert.equal(actual[4][0],'roman-12-12-guadalupe');
    assert.equal(actual[5][0],'roman-12-12-guadalupe');
    assert.equal(actual[4][1],'solemnity');
    assert.equal(actual[5][1],'feast');
    assert.equal(actual[6][0],'roman-09-20-standrewkimtaegon');
    assert.deepEqual(Array.from(actual[7]),['roman-00-00-ordinary34thu','weekday']);
    assert.deepEqual(Array.from(actual[8]),['roman-00-00-ordinary34thu','weekday']);
    assert.equal(actual[9][0],'roman-11-24-vietnammartyrs');
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
