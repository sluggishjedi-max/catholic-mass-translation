'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');
const { countryMetadataItems } = require('./country-metadata-upload-tool');

const revision = '0eb0504271b0fb4be4103b4dd08cbff135c457ac';
const upstream = 'https://raw.githubusercontent.com/Liturgical-Calendar/LiturgicalCalendarAPI/'
    + revision + '/jsondata/sourcedata/rite/roman/';
const root = path.resolve(__dirname, '..');
const input = process.argv[2] || path.join(require('node:os').tmpdir(), 'ordo-annual-sources');
const output = path.join(root, 'JS file', 'liturgical_observance_catalog.js');

const langs = { EN:'en', VN:'vi', LA:'la', IT:'it', PT:'pt', ES:'es', DE:'de' };
const missals = ['propriumdesanctis_1970','propriumdesanctis_2002','propriumdesanctis_2008','propriumdetempore'];
const years = [2025,2026,2027,2028];
const parallelCalendars = { KR:['KR-ko'], JP:['JP-ja'], ZH:['TW-zt'], PT:['PT-pt','BR-pt'], DE:['DE-de'] };

const existingIds = {
    AllSaints:'all-saints', AllSouls:'all-souls', DedicationLateran:'lateran-dedication',
    PresentationMary:'presentation-mary', ChristKing:'christ-king', StAndrewDungLac:'vietnam-martyrs',
    StAndrewAp:'andrew-apostle', StFrancisXavier:'francis-xavier', ImmaculateConception:'immaculate-conception',
    OurLadyOfGuadalupe:'guadalupe', ThanksgivingDay:'us-thanksgiving', StSimonStJudeAp:'simon-jude',
    StCharlesBorromeo:'charles-borromeo', StLeoGreat:'leo-the-great', StMartinTours:'martin-of-tours',
    StJosaphat:'josaphat', StElizabethHungary:'elizabeth-of-hungary', StAmbrose:'ambrose', StJohnCross:'john-of-the-cross'
};

const sourceEnglishAliases = {
    "guadalupe": ["Our Lady of Guadalupe, Heavenly Patroness of the Philippines"],
    "NameJesus": [
        "Holy Name of Jesus"
    ],
    "MaryMotherOfGod": [
        "The Blessed Virgin Mary, the Mother of God",
        "Solemnity of Mary, the Holy Mother of God"
    ],
    "Epiphany": [
        "The Epiphany of the Lord"
    ],
    "Ascension": [
        "The Ascension of the Lord",
        "Ascension of the Lord"
    ],
    "Christmas": [
        "The Nativity of the Lord (Christmas)",
        "The Nativity of the Lord"
    ],
    "Christmas2": [
        "Second Sunday after the Nativity",
        "2nd Sunday of Christmas"
    ],
    "PalmSun": [
        "Palm Sunday of the Lord’s Passion",
        "Palm Sunday of the Passion of the Lord"
    ],
    "HolyThurs": [
        "Holy Thursday of the Lord’s Supper",
        "Holy Thursday - Evening Mass of the Lord’s Supper",
        "Mass of the Lord’s Supper"
    ],
    "GoodFri": [
        "Good Friday of the Lord’s Passion",
        "Friday of the Passion of the Lord"
    ],
    "Easter": [
        "Easter Sunday of the Lord’s Resurrection",
        "Easter Sunday of the Resurrection of the Lord"
    ],
    "Pentecost": [
        "Pentecost Sunday"
    ],
    "Trinity": [
        "The Most Holy Trinity",
        "The Solemnity of the Most Holy Trinity"
    ],
    "CorpusChristi": [
        "The Most Holy Body and Blood of Christ",
        "The Solemnity of the Most Holy Body and Blood of Christ"
    ],
    "SacredHeart": [
        "The Most Sacred Heart of Jesus",
        "The Solemnity of the Most Sacred Heart of Jesus"
    ],
    "christ-king": [
        "Our Lord Jesus Christ, King of the Universe",
        "The Solemnity of Our Lord Jesus Christ, King of the Universe"
    ],
    "lateran-dedication": [
        "The Dedication of the Lateran Basilica in Rome"
    ],
    "ConversionStPaul": [
        "The Conversion of Saint Paul",
        "Conversion of Saint Paul, apostle"
    ],
    "SevenHolyFounders": [
        "The Seven Founders of the Order of Servites, religious"
    ],
    "ChairStPeter": [
        "The Chair of Saint Peter",
        "The Chair of Saint Peter, apostle"
    ],
    "StJoseph": [
        "Saint Joseph, husband of Mary",
        "Saint Joseph, Spouse of the Blessed Virgin Mary"
    ],
    "StTuribius": [
        "Saint Turibius de Mongrovejo, bishop"
    ],
    "StMarkEvangelist": [
        "Saint Mark, evangelist"
    ],
    "StMatthiasAp": [
        "Saint Matthias, Apostle"
    ],
    "StRitaCascia": [
        "Saint Rita of Cassia, religious"
    ],
    "StJustinMartyr": [
        "Saint Justin, Martyr"
    ],
    "StBarnabasAp": [
        "Saint Barnabas, apostle"
    ],
    "StThomasAp": [
        "Saint Thomas, apostle"
    ],
    "FirstMartyrsRome": [
        "The First Martyrs of the Church of Rome"
    ],
    "StSharbelMakhluf": [
        "Saint Sharbel Makhluf, priest"
    ],
    "StAlphonsusMariaDeLiguori": [
        "Saint Alphonsus Liguori, bishop and doctor of the Church"
    ],
    "StJeanVianney": [
        "Saint John Vianney, priest"
    ],
    "DedicationStMaryMajor": [
        "The Dedication of the Basilica of Saint Mary Major in Rome"
    ],
    "StMaximilianKolbe": [
        "Saint Maximilian Kolbe, priest and martyr"
    ],
    "BeheadingJohnBaptist": [
        "The Passion of Saint John the Baptist, martyr"
    ],
    "HolyNameMary": [
        "The Most Holy Name of Mary"
    ],
    "StAndrewKimTaegon": [
        "Saint Andrew Kim Taegŏn, priest, Saint Paul Chŏng Hasang and companions, martyrs",
        "Saints Andrew Kim Tae-gon, Paul Chong Ha-sang, and Companions, Martyrs",
        "Korean Martyrs"
    ],
    "StsJeanBrebeuf": [
        "Saint John de Brébeuf, Saint Isaac Jogues, priests, and companions, martyrs"
    ],
    "StJohnCapistrano": [
        "Saint John of Capistrano, priest"
    ],
    "StGertrudeGreat": [
        "Saint Gertrude, virgin"
    ],
    "DedicationStsPeterPaul": [
        "The Dedication of the Basilicas of Saint Peter and Saint Paul in Rome, apostles"
    ],
    "OurLadyOfLoreto": [
        "Our Lady of Loreto"
    ],
    "StLucySyracuse": [
        "Saint Lucy, virgin and martyr"
    ],
    "StStephenProtomartyr": [
        "Saint Stephen, first martyr"
    ],
    "MonOctaveEaster": [
        "Monday in the Octave of Easter"
    ],
    "TueOctaveEaster": [
        "Tuesday in the Octave of Easter"
    ],
    "WedOctaveEaster": [
        "Wednesday in the Octave of Easter"
    ],
    "ThuOctaveEaster": [
        "Thursday in the Octave of Easter"
    ],
    "FriOctaveEaster": [
        "Friday in the Octave of Easter"
    ],
    "SatOctaveEaster": [
        "Saturday in the Octave of Easter"
    ]
};

const dateKey = (month,day) => String(month).padStart(2,'0') + '-' + String(day).padStart(2,'0');
const key = value => String(value || '').normalize('NFKD').toLowerCase().replace(/\p{M}/gu,'')
    .replace(/[^\p{L}\p{N}]/gu,'');
const designation = /,\s*(?:apostles?|bishops?|pope|presbyters?|priests?|virgins?|martyrs?|religious|deacons?|abbots?|abbess|monks?|hermits?|evangelists?|doctor(?:s)? of the church)\b/i;
const englishKeys = title => [title, title?.split(designation)[0]].map(value=>key(value
    ?.replace(/^the\s+/iu,'').replace(/\b(?:saints?|st\.?)\s+(?=\p{L})/giu,'')
    .replace(/\s*\([^)]*\)\s*$/u,''))).filter(Boolean);

async function acquire(url, filename) {
    const file = path.join(input, filename);
    if (!fs.existsSync(file)) {
        const response = await fetch(url, {signal:AbortSignal.timeout(20000)});
        if (!response.ok) throw Error('HTTP ' + response.status + ' ' + url);
        fs.writeFileSync(file, await response.text());
    }
    return fs.readFileSync(file, 'utf8');
}

function addName(row, lang, value) {
    if (typeof value !== 'string') return;
    const title = value.trim().replace(/\s+/gu,' ');
    if (!title) return;
    const titles = row.names[lang] ||= [];
    if (!titles.some(name=>key(name)===key(title))) titles.push(title);
}

function parseCalendar(html) {
    const dom = new JSDOM(html);
    const days = new Map();
    let entries;
    for (const tr of dom.window.document.querySelectorAll('tr')) {
        if (/^\d{4}$/u.test(tr.id)) {
            entries = [];
            days.set(tr.id.slice(0,2)+'-'+tr.id.slice(2), entries);
        }
        if (!entries) continue;
        const label = tr.querySelector('p.indent');
        if (!label) continue;
        const grade = label.querySelector('.feast1,.feast2,.feast3,.feast4')?.className;
        const color = label.firstElementChild?.className || '';
        const links = [...label.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')).sort();
        const title = label.textContent.replace(/\s+/gu,' ').trim();
        entries.push({title, grade, color, signature:links.join('|')});
    }
    dom.window.close();
    if (days.size < 365) throw Error('Incomplete annual calendar');
    return days;
}

async function run() {
    fs.mkdirSync(input,{recursive:true});
    const read = async (location,file) => JSON.parse(await acquire(upstream+location,file+'.json'));
    const datasets = await Promise.all([...missals,'decrees'].map(async name=>{
        const prefix = name==='decrees' ? 'decrees/' : 'missals/'+name+'/';
        const entries = await read(prefix+name+'.json', name);
        const titles = Object.fromEntries(await Promise.all(Object.entries(langs).map(async ([lang, code])=>
            [lang,await read(prefix+'i18n/'+code+'.json',name+'-'+code)])));
        return {name,entries,titles};
    }));
    const rows = new Map();
    function addEvent(event, group) {
        const id = existingIds[event.event_key] || event.event_key;
        if (!id) return null;
        if (!rows.has(id)) rows.set(id,{id, month:event.month || 0, day:event.day || 0, group, names:{}});
        return rows.get(id);
    }
    for (const {name,entries,titles} of datasets) {
        for (const entry of entries) {
            const decree = name === 'decrees';
            const event = decree ? entry.liturgical_event : entry;
            const row = !decree || entry.metadata.action==='createNew' ? addEvent(event,'roman') : rows.get(existingIds[event.event_key] || event.event_key);
            if (!row) continue;
            for (const [lang, labels] of Object.entries(titles)) addName(row,lang,labels[event.event_key]);
        }
    }
    const nationals = [['US','en_US','EN'],['IT','it_IT','IT']];
    for (const [country,locale,lang] of nationals) {
        const prefix = 'calendars/nations/'+country+'/';
        const [data,titles] = await Promise.all([
            read(prefix+country+'.json','nation-'+country),
            read(prefix+'i18n/'+locale+'.json','nation-'+country+'-'+locale)
        ]);
        for (const entry of data.litcal) {
            const event = entry.liturgical_event;
            const row = entry.metadata.action==='createNew' ? addEvent(event,country) : rows.get(existingIds[event.event_key] || event.event_key);
            if (row) addName(row,lang,titles[event.event_key]);
        }
    }
    for (const [id,day,group,labels] of require('./liturgical-observance-supplement.json')) {
        const row = addEvent({event_key:id,month:Number(day.slice(0,2)),day:Number(day.slice(3,5))},group);
        for (const [lang,names] of Object.entries(labels)) for (const name of names) addName(row,lang,name);
    }
    for (const [id,names] of Object.entries(sourceEnglishAliases)) for (const name of names) addName(rows.get(id), 'EN', name);
    const english = new Map();
    for (const row of rows.values()) for (const title of row.names.EN || []) {
        for (const token of englishKeys(title)) {
            const ids = english.get(token) || new Set();
            ids.add(row.id);
            english.set(token,ids);
        }
    }
    const sundayOrdinals = ['','first','second','third','fourth','fifth','sixth','seventh'];
    function matchEnglish(title, day) {
        const normalized = title.normalize('NFKC').toLowerCase();
        const ordinary = normalized.match(/^(\d+)(?:st|nd|rd|th)? sunday (?:in|of) (?:the )?ordinary time$/u);
        if (ordinary) return rows.get('OrdSunday'+Number(ordinary[1]));
        const sunday = normalized.match(/^(\d+(?:st|nd|rd|th)?|first|second|third|fourth|fifth|sixth|seventh) sunday (?:in|of) (?:the )?(advent|lent|easter)\b/u);
        if (sunday) {
            const number = Number.parseInt(sunday[1],10) || sundayOrdinals.indexOf(sunday[1]);
            return rows.get(sunday[2][0].toUpperCase()+sunday[2].slice(1)+number);
        }
        const candidates = [...new Set(englishKeys(title).flatMap(token=>[...(english.get(token) || [])]))]
            .map(id=>rows.get(id));
        const fixed = candidates.filter(row=>row.month && dateKey(row.month,row.day)===day);
        if (fixed.length === 1) return fixed[0];
        return candidates.length===1 ? candidates[0] : null;
    }
    const calendarUrl = (year,code) => 'https://gcatholic.org/calendar/'+year+'/'+code+'.htm';
    for (const [lang,locales] of Object.entries(parallelCalendars)) for (const locale of locales) {
        for (const year of years) {
            const localeEn = locale.slice(0,2)+'-en';
            const [local,en] = await Promise.all([locale,localeEn].map(async code=>
                parseCalendar(await acquire(calendarUrl(year,code),'gc-'+year+'-'+code+'.html'))));
            for (const [day, entries] of en) {
                const translations = local.get(day);
                if (!translations) continue;
                const identity = entry => [entry.grade,entry.color,entry.signature].join(':');
                for (const entry of entries) {
                    const row = matchEnglish(entry.title,day);
                    if (!row || !entry.grade) continue;
                    const signature = identity(entry);
                    const matches = translations.filter(other=>identity(other)===signature);
                    if (matches.length!==1 || entries.filter(other=>identity(other)===signature).length!==1) continue;
                    addName(row,lang,matches[0].title);
                    addName(row,'EN',entry.title);
                }
            }
        }
    }
    // The app's particular calendars already contain bilingual titles from their source documents.
    // Only an unambiguous English match can join an event. Observer dates and ranks stay in the app calendars.
    for (const module of countryMetadataItems()) {
        for (const [day,items] of Object.entries(module.calendar || {})) {
            for (const entry of Array.isArray(items) ? items : [items]) {
                const title = entry.names?.EN || (module.language==='EN' ? entry.title : '');
                if (!title) continue;
                const row = matchEnglish(title,day) || addEvent({
                    event_key:/^All (?:the )?Saints of Ireland$/iu.test(title) ? 'ireland-all-saints' : 'particular-'+day+'-'+key(title),
                    month:Number(day.slice(0,2)),day:Number(day.slice(3,5))
                }, module.jurisdiction);
                for (const [lang,value] of Object.entries(entry.names || {})) addName(row,lang,value);
                if (!row.names.EN) addName(row,'EN',title);
            }
        }
    }
    const catalog = [...rows.values()].filter(row=>Object.keys(row.names).length).sort((a,b)=>
        a.month-b.month || a.day-b.day || a.id.localeCompare(b.id,'en'));
    const lines = catalog.map(({id,month,day,group,names})=>'    '+JSON.stringify([id,month?dateKey(month,day):'',group,names]));
    const banner = [
        '// Generated by tools/build-liturgical-observance-catalog.js.',
        '// Roman data adapted from LiturgicalCalendarAPI, Apache-2.0 (see licenses/LiturgicalCalendarAPI.txt).',
        '// Rows contain an identity, nominal month/day, source calendar, and language titles.',
        'globalThis.ordoAnnualObservanceCatalog = [',
        lines.join(',\n'),
        '];',''
    ];
    fs.writeFileSync(output,banner.join('\n'));
    const roman = catalog.filter(row=>row.group==='roman');
    const summary = keys=>Object.fromEntries(keys.map(lang=>[lang,roman.filter(row=>row.names[lang]).length]));
    console.log(JSON.stringify({events:catalog.length,roman:roman.length, fixed:roman.filter(row=>row.month).length,
        byLanguage:summary(['KR','VN','EN','JP','ZH','IT','PT','ES','DE','LA']), missingIdentityKeys:Object.entries(existingIds).filter(([,id])=>!rows.has(id))}));
}

run().catch(error=>{console.error(error); process.exitCode=1;});
