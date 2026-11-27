'use strict';
const assert=require('assert/strict'),{createRuntime}=require('../functions/daily-runtime'),fixture=require('./fixtures/psalm-refrains-20261117.json');
for(const sample of fixture){const r=createRuntime({country:'US',date:sample.date,source:'official'});try{r.window.__source=sample.html;const part=r.run("ordoDailyContent.normalizeParsed(strictParseDailyMass('EN',__source,getActiveLiturgicalSourceDate(),'US')).data.psalm");assert(!part.options,sample.date+' refrain-only differences became different psalms');assert.equal(part.lines.filter(line=>line.sp==='R.').length,2);assert.equal(part.lines.filter(line=>line.rubric==='or:'||line.rubric==='Or:').length,1);const verses=part.lines.filter(line=>line.sp==='Versicle');assert.equal(verses.length,sample.stanzas,sample.date+' stanza boundaries collapsed');assert(verses.every(line=>line.text.length>35));assert(!part.lines.some(line=>/^(?:or|Or):?$/u.test(line.text)));if(sample.date==='2026-11-17'){assert(verses.at(-1).text.includes('want for no good thing'));assert(part.lines.some(line=>line.text==='Taste and see the goodness of the Lord.'));}}finally{r.close();}}
const korean=createRuntime({country:'KR',date:'2026-11-17',source:'official'});try{const part=korean.run("ordoDailyContent.normalizeSection(strictFormatSection('KR','psalm',{heading:'화답송',lines:['시편 34(33),2-3.4-5','◎ 첫째 응답입니다.','또는','◎ 둘째 응답입니다.','○ 첫 선창 본문을 보존합니다.','◎ 첫째 응답입니다.','또는','◎ 둘째 응답입니다.','○ 마지막 선창 본문도 보존합니다.','◎ 첫째 응답입니다.','또는','◎ 둘째 응답입니다.']}))");assert(!part.options);assert.equal(part.lines.filter(line=>line.sp==='◎').length,2);assert.equal(part.lines.filter(line=>line.sp==='○').length,2);assert.equal(part.lines.find(line=>line.rubric)?.rubric,'또는');}finally{korean.close();}
const japanese = createRuntime({country:'JP',date:'2026-11-25',source:'official'});
try {
    const result = japanese.run(`(() => {
        const korean = { __dailySourceIndexes:{kr:0}, cit:{cit_kr:'시편 97(96),1-3.7-9'} };
        const japanese = { __dailySourceIndexes:{jp:0}, cit:{cit_jp:'詩編 97,1-3.7-9'} };
        const different = {...japanese, cit:{cit_jp:'詩編 121,1-2'}};
        return [
            hasDistinctPsalmSourceOption({A:korean,B:japanese}, korean, 'kr', 'jp'),
            hasDistinctPsalmSourceOption({A:korean,B:different}, korean, 'kr', 'jp'),
            hasDistinctPsalmSourceOption({A:korean,B:{...different,__dailySourceIndexes:{kr:1,jp:0}}}, korean, 'kr', 'jp'),
            hasDistinctPsalmSourceOption({A:different,B:korean}, different, 'jp', 'kr'),
            hasDistinctPsalmSourceOption({A:korean}, korean, 'kr', 'jp'),
            shouldSuppressAIFallbackForLine({text_kr:'첫 단락'}, 'psalm', 'jp', true)
        ];
    })()`);
    assert.deepEqual(Array.from(result), [false,true,true,true,false,true]);
} finally { japanese.close(); }
console.log(JSON.stringify({realSourcePsalms:fixture.length,stanzasPerPsalm:5,responses:2,singleChoice:true,alternativeAsRubric:true,koreanAlternativePreserved:true}));
