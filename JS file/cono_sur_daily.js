(function registerConoSurDaily(global) {
    'use strict';

    const weekdays = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
    const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
    const movableNames = [
        [/epifania/u,'epiphany'], [/bautismo del senor/u,'baptism'], [/sagrada familia/u,'holy_family'],
        [/ascension/u,'ascension'], [/pentecostes/u,'pentecost'], [/santisima trinidad/u,'trinity'],
        [/cuerpo y (?:la )?sangre|corpus christi/u,'corpus_christi'], [/sagrado corazon de jesus/u,'sacred_heart'],
        [/madre de dios/u,'mary_mother_of_god'], [/^navidad$|natividad del senor/u,'christmas_day']
    ];
    const prayerHeadings = [
        ['antifona de entrada','entrance'],['oracion colecta','collect'],['oracion sobre las ofrendas','prayer_offerings'],
        ['antifona de la comunion','communion'],['antifona de comunion','communion'],['oracion despues de la comunion','prayer_after']
    ];
    const normalize = value => String(value || '').replace(/\u0096/gu, '–').replace(/\u0097/gu, '—').replace(/[\s\u00a0]+/gu,' ').trim().normalize('NFC');
    const fold = value => normalize(value).toLowerCase().normalize('NFD').replace(/\p{M}/gu,'');
    const dateKey = date => String(date.getMonth()+1).padStart(2,'0')+'-'+String(date.getDate()).padStart(2,'0');

    function scopeKeys(date, meta, title, variant) {
        const day = date.getDay(), dateId = dateKey(date), titleKey = fold(title);
        if (variant && variant !== 'day' && /vigil/u.test(variant)) {
            if (/christmas/u.test(variant)) return {key:'christmas_vigil'};
            if (/pentecost/u.test(variant)) return {key:'pentecost_vigil'};
            if (/easter/u.test(variant)) return {key:'easter_vigil'};
        }
        if (meta.season === 'lent' && meta.week === 6) {
            return {key:['palm_sunday','holy_monday','holy_tuesday','holy_wednesday','holy_thursday','good_friday','easter_vigil'][day]};
        }
        if (meta.season === 'lent' && meta.week === 0) return {key:'lent-0-'+day};
        if (meta.season === 'easter' && meta.week === 1 && day === 0) return {key:'easter_day'};
        if (dateId === '12-25') return {key:'christmas_day'};
        const named = movableNames.find(([pattern]) => pattern.test(titleKey));
        if (named && (meta.rank || day === 0 || /epifania|ascension|pentecostes/u.test(titleKey))) return {key:named[1]};
        if (day === 0) {
            if (meta.season === 'christmas') return {key:'christmas_sunday_2'};
            return {key:'sunday-'+meta.season+'-'+meta.week};
        }
        if (meta.season === 'advent' && date.getMonth() === 11 && date.getDate() >= 17) return {key:'advent-dates',scope:'date'};
        if (meta.season === 'christmas') return {key:'christmas-dates',scope:'date'};
        return {key:meta.season+'-'+meta.week,scope:'weekday'};
    }

    function readingPlan({date, meta, rank, title, jurisdiction, index, variant, iso, matchTitle}) {
        const day = date.getDay(), dateId = dateKey(date);
        const requireTwo = rank==='solemnity' || day===0;
        if (jurisdiction==='CL' && (!variant || variant==='day' || variant==='first')) {
            return {url:'https://www.eucaristiadiaria.cl/dia_cal.php?fecha='+iso,scope:'dated',rank,title,requireTwo};
        }
        const selection = scopeKeys(date,{...meta,rank},title,variant);
        const fixedOptions = index?.calendar?.[dateId] || [];
        const best = fixedOptions.map(entry=>({entry,score:matchTitle(title,entry.title)})).sort((a,b)=>b.score-a.score)[0];
        const isFixed = ['feast','feastOfLord','solemnity','commemoration'].includes(rank)
            && (selection.scope || selection.key.startsWith('sunday-') && !/domingo|rey del universo/u.test(fold(title)));
        if (isFixed) {
            if (!best || fixedOptions.length>1 && best.score<0.6) return null;
            return {url:best.entry.url,scope:'',rank,title,requireTwo};
        }
        const options = index?.temporal?.[selection.key];
        const cycle = selection.key.startsWith('ordinary-') ? (Number(meta.weekdayCycle)%2===0 || meta.weekdayCycle==='II' ? 1 : 0)
            : ['A','B','C'].indexOf(meta.sundayCycle);
        const url = Array.isArray(options) ? options[options.length===1?0:cycle] : options;
        return url ? {url,scope:selection.scope,rank,title,requireTwo} : null;
    }

    function textLines(document) {
        const output = [];
        let line = '';
        let caption = true;
        const flush = () => {
            const text = normalize(line);
            if (text) output.push({text,caption});
            line = '';
            caption = true;
        };
        function walk(node) {
            if (node.nodeType===3) {
                line += node.textContent;
                if (normalize(node.textContent)) {
                    const emphasis = node.parentElement?.closest('i,em');
                    const paragraph = emphasis?.closest('p');
                    // The lectionary prints reading captions in italic type, either
                    // right-aligned or in a red span on the Chilean dated pages.
                    const color = emphasis?.closest('font[color],span[style]');
                    caption &&= !!paragraph && (paragraph.getAttribute('align')?.toLowerCase()==='right'
                        || /(?:red|#(?:ff0000|f00)\b|rgb\(\s*(?:238|255),\s*0,\s*0\s*\))/iu.test(
                            String(color?.getAttribute('color')||'')+' '+String(color?.getAttribute('style')||'')));
                }
                return;
            }
            if (node.nodeType!==1 || /^(SCRIPT|STYLE|NOSCRIPT)$/u.test(node.tagName)) return;
            const boundary=/^(P|DIV|H[1-6]|BR|HR|LI|TD|TR|BLOCKQUOTE)$/u.test(node.tagName);
            if(boundary) flush();
            Array.from(node.childNodes).forEach(walk);
            if(boundary) flush();
        }
        walk(document.body);flush();
        return output;
    }

    function scoped(document, scope, date, iso) {
        const lines = textLines(document);
        if(scope==='dated'){
            const title=fold(document.querySelector('.titulos')?.textContent);
            const suffix=' de '+months[date.getMonth()]+' de '+date.getFullYear();
            if(!title.includes(date.getDate()+suffix)) throw Error('Chile daily source is not dated '+iso);
            const first=lines.findIndex(({text})=>/^antifona de entrada\b/u.test(fold(text)));
            return first>=0 ? lines.slice(first) : lines;
        }
        if(!['date','weekday'].includes(scope)) return lines;
        const heading = scope==='date'
            ? /^(?:dia\s+)?(\d{1,2})[°º.]?\s+(?:de |del )?(?:diciembre|enero)\b/u
            : /^(lunes|martes|miercoles|jueves|viernes|sabado)(?:\s+(?:de|despues|dentro)\b.*)?$/u;
        const markers=lines.flatMap(({text},index)=> {
            const match=fold(text).match(heading);
            return match?[{index,value:match[1]}]:[];
        });
        const match=markers.findIndex(m=>scope==='date'?Number(m.value)===date.getDate():m.value===weekdays[date.getDay()]);
        if(match<0) throw Error('Cono Sur source does not identify the requested '+scope+' '+iso);
        return lines.slice(markers[match].index+1,markers[match+1]?.index);
    }

    function readingSections(lines) {
        const chapters = [];
        let active;
        let sawPsalm=false;
        let gospelSummary=null;
        const start = (key, header, summary='') => {
            active={key,header,summary,lines:[]};
            chapters.push(active);
        };
        for (let index=0; index<lines.length; index+=1) {
            const line=lines[index].text;
            const key=fold(line);
            const prayer=prayerHeadings.find(([title])=>key===title||key.startsWith(title+' '));
            if(prayer) { start(prayer[1],line.slice(prayer[0].length).trim()); continue; }
            if (/^(?:prefacio|oracion universal|oracion de los fieles|bendicion solemne|liturgia eucaristica|liturgia de la palabra|para celebrar)\b/u.test(key)
                || (active?.key==='entrance' && /^(?:gloria|credo)$/u.test(key))) {
                active=undefined;
                continue;
            }
            if (/^(?:[+✠]\s*)?evangelio (?:de nuestro senor|del senor|segun san)|^lectura del santo evangelio/u.test(key)) {
                start('gospel',line,gospelSummary?.join(' ')||'');
                gospelSummary=null;
                continue;
            }
            if (key==='evangelio') { active=undefined; gospelSummary=[]; continue; }
            if (/^lectura d(?:el|e) |^(?:comienzo|principio) d(?:el |e la )(?:libro|carta|profecia)\b/u.test(key)) {
                const captions=[];
                for (let before=index-1; before>=0 && lines[before].caption; before-=1) {
                    captions.unshift(lines[before].text);
                }
                if (captions.length && active && active.lines.slice(-captions.length).join(' ')===captions.join(' ')) {
                    active.lines.length -= captions.length;
                }
                start(sawPsalm?'reading2':'reading1',line,captions.join(' '));
                continue;
            }
            if (/^salmo(?: responsorial)?(?:\s+(?:[a-z.]+\s*)?\d.*)?$/u.test(key)) {
                sawPsalm=true;
                start('psalm',line.replace(/^Salmo(?: responsorial)?\s*/iu,'')); continue;
            }
            if (/^(?:aclamacion (?:al|antes del) evangelio|versiculo antes del evangelio)(?:\s+|$)|^alelu[iy]a(?:\s+(?:cf\.\s*)?[a-z\d][^!]*\d.*)?$/u.test(key)) {
                gospelSummary=null;
                if (active?.key!=='gospel_accl') start('gospel_accl',line.replace(/^(?:Aclamación (?:al|antes del) Evangelio|Versículo antes del Evangelio|Alelu[iy]a)\s*/iu,''));
                continue;
            }
            if (gospelSummary && !/^[+✠†]$/u.test(key) && !/^o bien[:.]?$/u.test(key)) {
                gospelSummary.push(line);
                continue;
            }
            if (/^o bien[:.]?$/u.test(key)) { active=undefined; continue; }
            if (/^palabra (?:de dios|del senor)\.?$/u.test(key)) {
                if(active) active.lines.push(line);
                active=undefined;
                continue;
            }
            if(active)active.lines.push(line);
        }
        return chapters;
    }

    const citationOnProclamation = /^(.+?)\s+(\d[\da-cªº.,;:–—\s-]*)$/iu;
    const detachedCitation = /^\d[\da-cªº.,;:–—\s-]*$/iu;

    function splitProclamation(header) {
        const parts = header.match(citationOnProclamation);
        if (!parts) return null;
        const title = parts[1].replace(/[,:\s]+$/u, '').replace(/\blsaías$/iu, 'Isaías');
        const ordinal = fold(title).match(/\b(primer|primera|segundo|segunda|tercer|tercera) (?:libro|carta)\b/u);
        const prefix = ordinal ? ({pri:'1 ',seg:'2 ',ter:'3 '})[ordinal[1].slice(0,3)] : '';
        const names = {corinto:'Corintios',efeso:'Efesios',tesalonica:'Tesalonicenses',colosas:'Colosenses',
            filipos:'Filipenses',roma:'Romanos',galacia:'Gálatas',eclesiastico:'Eclo','hechos de los apostoles':'Hechos'};
        const term = Object.keys(names).find(key => fold(title).endsWith(key));
        const words = title.split(/\s+/u);
        const book = term ? prefix + names[term]
            : words.slice(-5).map((_, index, tail) => prefix + tail.slice(index).join(' '))
                .find(name => global.bibleCitation?.resolve(name,'ES')?.id);
        if (!book) return { title, citation:'' };
        const verses = parts[2].trim().replace(/ª/gu,'a').replace(/º/gu,'')
            .replace(/^(\d+)-(\d+-\d+)$/u, '$1, $2');
        return { title, citation:book+' '+verses };
    }

    function parse({document, iso, date, plan, formatSection, summarized, fallbackColor}) {
        const chapters=readingSections(scoped(document,plan.scope,date,iso));
        const data={};
        for(const {key,header,summary,lines} of chapters) {
            if(!lines.length) continue;
            const reading=['reading1','reading2','gospel'].includes(key);
            const displayHeader = !['collect','prayer_offerings','prayer_after'].includes(key);
            const onHeading = reading ? splitProclamation(header) : null;
            const detached = reading && !onHeading && detachedCitation.test(lines[0])
                ? splitProclamation(header+' '+lines[0]) : null;
            const reference = onHeading || detached;
            const citation = reading ? (reference?.citation || '')
                : key==='psalm' && /^\d/u.test(header) ? 'Sal '+header : '';
            const proclamation = reading
                ? (reference?.title || header).replace(/^\s*[+†✠]\s*/u,'') : header;
            const input=[...(summary ? ['<'+summary+'>'] : []),
                ...(proclamation && displayHeader ? [proclamation] : []),
                ...(reading && citation ? [citation] : []),
                ...(detached && citation ? lines.slice(1) : lines)];
            const section=formatSection('ES',key,{text:input.join('\n'),lines:input});
            if(!section?.text) continue;
            if(citation) section.cit_es=citation;
            if(data[key] && reading) {
                const current=data[key];
                const options=current.options || [{...current,id:'A'}];
                data[key]={...current,options:[...options,{...section,id:String.fromCharCode(65+options.length)}]};
            } else if(!data[key]) data[key]=section;
        }
        const required=['reading1','psalm','gospel',...(plan.requireTwo?['reading2']:[])];
        const missing=required.filter(key=>!data[key]?.text);
        if(missing.length) throw Error('Cono Sur lectionary is missing '+missing.join(', '));
        const result=summarized({title:plan.title,sourceRank:plan.rank,color:fallbackColor,data,
            sourceUrl:plan.url,sourceName:plan.scope==='dated'?'Eucaristía Diaria · Arzobispado de Santiago':'Leccionario del Cono Sur · Curas.com.ar',
            sourceMode:'cono-sur-lectionary'},'ES');
        for (const key of ['reading1','reading2','gospel']) {
            const reading = result.data[key];
            if (!reading) continue;
            for (const section of [reading,...(reading.options||[])]) {
                section.lines=section.lines.filter(line=>line.role!=='summary'||line.text);
            }
        }
        return result;
    }

    global.ordoConoSurDaily = Object.freeze({readingPlan,parse});
})(globalThis);
