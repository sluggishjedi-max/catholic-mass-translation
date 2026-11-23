
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { createRuntime } = require('../functions/daily-runtime');
const { COUNTRIES, providers, sourceId } = require('../functions/daily-schema');

// Read captured official publication records, including their alternative forms.
// Publisher text and credentials stay outside the report.
const [snapshotFile, metadataFile, outputFile] = process.argv.slice(2);
if (!snapshotFile || !metadataFile || !outputFile) throw Error('Usage: audit-published-observances.js <snapshots.json> <metadata.json> <report.json>');
const snapshots = JSON.parse(fs.readFileSync(snapshotFile, 'utf8'));
const metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
const dates = [...new Set(snapshots.map(({ request }) => request.date))].sort();
const runtime = createRuntime({country:'KR',date:dates[0],source:'official'}, {metadata});
const result = {dates:[], countries:Object.keys(COUNTRIES), languages:[...new Set(Object.values(COUNTRIES).map(row=>row[1]))]};
const hasCore = data => ['reading1','gospel'].every(key=>data?.[key]?.text || data?.[key]?.lines?.some(line=>line.text));
const profiles = Object.keys(COUNTRIES).flatMap(country=>providers(country).map(provider=>({
    country, ...provider, id:sourceId(country, provider.source, provider.profile)
})));

try {
    for (const lang of result.languages) {
        try { runtime.window.__loadServerModule('JS file/lazy/missal-'+lang+'.js'); }
        catch (error) { assert.match(error.message,/server-module-not-packaged/); }
    }
    runtime.run('primaryCalendarMissalEntry=()=>null;');
    const rowsByDate = Map.groupBy(snapshots, row=>row.request.date);
    for (const date of dates) {
        const rows = rowsByDate.get(date);
        const records = profiles.map(profile=>{
            const items = rows.filter(row=>row.request.country===profile.country && row.request.sourceId===profile.id);
            const row = items.find(row=>row.request.variant==='day');
            // All Souls has three independent publications and no obligatory day record.
            const primary = date.endsWith('-11-02') && !hasCore(row?.record?.parsed?.data)
                ? items.find(row=>row.request.variant==='first' && hasCore(row.record?.parsed?.data)) || row : row;
            const stored = primary?.record;
            if (!hasCore(stored?.parsed?.data)) {
                const error = stored?.lastError || '';
                const status = /public-window|only serves|(?:CEM daily Mass row is unavailable)|KTCG-current-unavailable-for-comparison/iu.test(error)
                    ? 'publisher-unavailable' : error ? 'collection-error' : stored ? 'partial' : 'missing';
                return {...profile,status,error};
            }
            return {...profile,status:'published',parsed:{...stored.parsed, sourceMasses:items.filter(other=>other!==primary&&hasCore(other.record?.parsed?.data))
                .map(other=>({...other.record.parsed,id:other.request.variant})).concat(stored.parsed.sourceMasses || []),
                serverRecord:{kind:stored.publishedKind}}};
        });
        runtime.window.__review={date,records};
        const stats=JSON.parse(JSON.stringify(runtime.run(String.raw`(() => {
            const date=new Date(__review.date+'T12:00:00');
            getActiveLiturgicalSourceDate=()=>date;
            const countries=[...new Set(__review.records.map(record=>record.country))];
            const info=Object.fromEntries(countries.map(country=>[country,calendarInfoForCountry(date,country)]));
            // Keep option citations and compress the bodies for this pairwise eligibility audit.
            const citations=section=>Object.fromEntries(Object.entries(section).filter(([field])=>field.startsWith('cit_')));
            const compact=data=>Object.fromEntries(Object.entries(data||{}).filter(([,section])=>sourceSectionHasContent(section)).map(([key,section])=>[key,{
                ...citations(section),text:'published',lines:[{text:'published'}],
                optionCits:section.optionCits,optionKinds:section.optionKinds,optionLabels:section.optionLabels,
                options:section.options?.map(value=>({...citations(value),text:'published',lines:[{text:'published'}]}))
            }]));
            const available=__review.records.filter(record=>record.status==='published').map(record=>({...record,parsed:{
                ...record.parsed,data:compact(record.parsed.data),sourceMasses:record.parsed.sourceMasses.map(mass=>({...mass,data:compact(mass.data)}))
            }}));
            const readings=['reading1','gospel'];
            const resolved={pairs:0,differentObservances:0,matchingReadings:0,matchedPropers:0,missedReadingPairs:0,missingSameObservancePropers:0,flaws:[]};
            for(const original of available) for(const target of available) {
                if (original===target) continue;
                const primaryLang=getLangFromLocation(original.country), lang=getLangFromLocation(target.country);
                const primary=info[original.country], native=info[target.country];
                state.currentLoc=primaryLang;state.selectedLocationCode=original.country;state.targetLang=lang;state.targetLocationCode=target.country;state.liturgyInfo=primary;
                const projected=projectDailySourceToPrimaryCalendar(target.parsed,lang,original.parsed,date,primary,native);
                const same=calendarInfosShareObservance(primary,native), equivalent=[target.parsed,...target.parsed.sourceMasses].some(candidate=>readings.every(key=>primaryCalendarScriptureSection(key,original.parsed.data[key],candidate.data[key],primaryLang,lang)));
                const missed=equivalent && (!projected.data.reading1 || !projected.data.gospel);
                resolved.pairs++;if(!same)resolved.differentObservances++;
                if(equivalent)resolved.matchingReadings++;
                if(missed){resolved.missedReadingPairs++;resolved.flaws.push({original:original.country,target:target.country,source:target.id,reason:'matching-citations-not-displayed'});}
                if(projected.primaryCalendarProjection.sameCelebration)resolved.matchedPropers++;
                if(!projected.primaryCalendarProjection.sameCelebration&&same&&primaryCalendarRank(primary)===primaryCalendarRank(native)&&equivalent&&['entrance','collect','communion'].every(key=>target.parsed.data[key]?.text)){resolved.missingSameObservancePropers++;if(resolved.flaws.length<32)resolved.flaws.push({original:original.country,target:target.country,source:target.id,sourceTitle:target.parsed.title,expected:native.names[lang],reason:'proper-form-not-confirmed'});}
                if(!sourceSectionHasContent(original.parsed.data.reading2) && projected.data.reading2)throw Error('Secondary country introduced Reading II on '+__review.date);
            }
            return {...resolved, calendar:Object.fromEntries(countries.map(country=>{const calendar=info[country],lang=getLangFromLocation(country);return [country,{title:calendar.names[lang]||'',rank:primaryCalendarRank(calendar),observance:calendarObservanceId(calendar)}];}))};
        })()`)));
        result.dates.push({date,...stats, sources:records.map(({parsed,...row})=>({...row,...(parsed?{title:parsed.title,sourceUrl:parsed.sourceUrl||''}:{})}))});
    }
} finally { runtime.close(); }

fs.writeFileSync(outputFile,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({dates:dates.length,sourceChecks:dates.length*profiles.length,
    availablePairs:result.dates.reduce((n,row)=>n+row.pairs,0),
    missingScriptureMatches:result.dates.reduce((n,row)=>n+row.missedReadingPairs,0),
    sameObservancePropersMissing:result.dates.reduce((n,row)=>n+row.missingSameObservancePropers,0),outputFile}));
