const fs = require('fs');
const http = require('http');
const path = require('path');
const { chromium } = require('@playwright/test');

const root = path.resolve(__dirname, '..');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function startServer() {
  const mime = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.png': 'image/png'
  };
  const server = http.createServer((request, response) => {
    const url = new URL(request.url, 'http://127.0.0.1');
    const route = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
    const file = path.resolve(root, route.replace(/^\/+/, ''));
    if (!file.startsWith(root)) return response.writeHead(403).end('Forbidden');
    fs.readFile(file, (error, data) => {
      if (error) return response.writeHead(404).end('Not found');
      response.writeHead(200, { 'content-type': mime[path.extname(file)] || 'application/octet-stream' });
      response.end(data);
    });
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve(server)));
}

const ceiFixture = `Title: Liturgia del giorno 01 Settembre 2026
URL Source: https://www.chiesacattolica.it/liturgia-del-giorno/?data-liturgia=20260901
Markdown Content:
# Messa del Giorno
### MARTEDÌ DELLA XXII SETTIMANA DEL TEMPO ORDINARIO (ANNO PARI)
Colore Liturgico verde
## Antifona
Pietà di me, o Signore, a te grido tutto il giorno:
tu sei buono, o Signore, e perdoni,
sei pieno di misericordia con chi ti invoca. (Sal 85,3.5)
## Colletta
Dio onnipotente, unica fonte di ogni dono perfetto,
infondi nei nostri cuori l’amore per il tuo nome.
Per il nostro Signore Gesù Cristo.
## Prima Lettura
### L’uomo lasciato alle sue forze non comprende le cose dello Spirito di Dio; l’uomo mosso dallo Spirito, invece, giudica ogni cosa.
Dalla prima lettera di san Paolo apostolo ai Corìnzi
1Cor 2,10b-16
Fratelli, lo Spirito conosce bene ogni cosa, anche le profondità di Dio.
Ora, noi abbiamo il pensiero di Cristo.
Parola di Dio.
## Salmo Responsoriale
Dal Sal 144 (145)
R. Giusto è il Signore in tutte le sue vie.
Misericordioso e pietoso è il Signore,
lento all’ira e grande nell’amore.
Buono è il Signore verso tutti,
la sua tenerezza si espande su tutte le creature. R.
Ti lodino, Signore, tutte le tue opere
e ti benedicano i tuoi fedeli.
Dicano la gloria del tuo regno
e parlino della tua potenza. R.
Per far conoscere agli uomini le tue imprese
e la splendida gloria del tuo regno.
Il tuo regno è un regno eterno,
il tuo dominio si estende per tutte le generazioni. R.
Fedele è il Signore in tutte le sue parole
e buono in tutte le sue opere.
Il Signore sostiene quelli che vacillano
e rialza chiunque è caduto. R.
## Acclamazione al Vangelo
Alleluia, alleluia.
Un grande profeta è sorto tra noi,
Dio ha visitato il suo popolo.
Lc 7,16
Alleluia.
## Vangelo
### Io so chi tu sei: il santo di Dio!
Dal Vangelo secondo Luca
Lc 4,31-37
In quel tempo, Gesù scese a Cafàrnao, città della Galilea.
E la sua fama si diffondeva in ogni luogo della regione circostante.
Parola del Signore.
## Sulle offerte
L’offerta che ti presentiamo ci ottenga la tua benedizione, o Signore.
Per Cristo nostro Signore.
## Antifona alla comunione
Quanto è grande la tua bontà, Signore! (Sal 30,20)
Oppure:
Beati gli operatori di pace: saranno chiamati figli di Dio. (Mt 5,9-10)
## Dopo la comunione
O Signore, che ci hai saziati con il pane del cielo,
rafforza i nostri cuori.
Per Cristo nostro Signore.
## Liturgia delle Ore`;

const cemFixture = `Title: Misal CEM
URL Source: https://sistemas.cem.org.mx/Controller/Misal/get_misal.php
Markdown Content:
2026-09-02 00:00:00
2 de septiembre
Miércoles XXII del Tiempo Ordinario
Feria. Verde
ANTÍFONA DE ENTRADA. Sal 85, 3. 5
Piedad de mí, Señor, que a ti clamo todo el día.
ORACIÓN COLECTA
Dios todopoderoso, de quien procede todo don perfecto, infunde en nuestros corazones el amor de tu nombre.
Por nuestro Señor Jesucristo.
PRIMERA LECTURA
El hombre natural no capta las cosas del Espíritu de Dios.
De la primera carta del apóstol san Pablo a los corintios
1 Cor 3, 1-9
Hermanos: No pude yo hablarles como a hombres movidos por el Espíritu.
Nosotros somos colaboradores de Dios.
Palabra de Dios.
R. Te alabamos, Señor.
SALMO RESPONSORIAL
Del salmo 32
R. Dichoso el pueblo escogido por Dios.
∙ Que los justos aclamen al Señor; es propio de los justos alabarlo.
R. Dichoso el pueblo escogido por Dios.
∙ Feliz la nación cuyo Dios es el Señor, dichoso el pueblo que escogió por suyo.
R. Dichoso el pueblo escogido por Dios.
ACLAMACIÓN ANTES DEL EVANGELIO
Lc 4, 18
R. Aleluya, aleluya.
El Señor me ha enviado para anunciar a los pobres la buena nueva.
R. Aleluya, aleluya.
EVANGELIO
También a los otros pueblos tengo que anunciarles el Reino de Dios, pues para eso he sido enviado.
Del santo Evangelio según san Lucas
Lc 4, 38-44
En aquel tiempo, Jesús salió de la sinagoga y entró en la casa de Simón.
Iba predicando en las sinagogas de Judea.
Palabra del Señor.
R. Gloria a ti, Señor Jesús.
ORACIÓN SOBRE LAS OFRENDAS
Que esta ofrenda sagrada, Señor, nos alcance siempre tu bendición salvadora.
Por Jesucristo, nuestro Señor.
PREFACIO
El Señor esté con ustedes.
Y con tu espíritu.
En verdad es justo y necesario darte gracias siempre y en todo lugar.
ANTÍFONA DE LA COMUNIÓN. Sal 30, 20
Qué grande es tu bondad, Señor, que tienes reservada para tus fieles.
ORACIÓN DESPUÉS DE LA COMUNIÓN
Saciados con el pan de la mesa celestial, te suplicamos, Señor, que este alimento de caridad fortalezca nuestros corazones.
Por Jesucristo, nuestro Señor.
RITO DE CONCLUSIÓN
2026-09-01 00:00:00
ANTÍFONA DE ENTRADA
This row must not be parsed.`;
const cemSource = process.env.CEM_LIVE_SOURCE
  ? fs.readFileSync(process.env.CEM_LIVE_SOURCE, 'utf8')
  : cemFixture;

const cepFixture = `Title: Secretariado Nacional de Liturgia :: Portugal
URL Source: https://www.liturgia.pt/liturgiadiaria/
Markdown Content:
#### Quarta-feira da semana XXII
Verde – Ofício da féria.
### Missa
Antífona de entrada Cf. Sl 85, 3.5
Tende compaixão de mim, Senhor, que a Vós clamo o dia inteiro.
Oração coleta
Deus todo-poderoso, de quem procede todo o dom perfeito,
infundi em nossos corações o amor do vosso nome.
Por nosso Senhor Jesus Cristo, vosso Filho, que é Deus e convosco vive e reina por todos os séculos dos séculos.
LEITURA I (anos pares) 1Cor 3, 1-9
«Nós somos colaboradores de Deus;
vós sois o campo de Deus; vós sois o edifício de Deus»
Este comentário editorial não deve integrar o texto bíblico.
Leitura da Primeira Epístola do apóstolo São Paulo aos Coríntios
Irmãos: Não pude falar-vos como a pessoas espirituais.
Nós somos colaboradores de Deus e vós sois o campo de Deus.
Palavra do Senhor.
SALMO RESPONSORIAL Salmo 32 (33), 12-13.14-15.20-21 (R. 12b)
Refrão: Feliz o povo que o Senhor escolheu para sua herança. Repete-se
Feliz a nação que tem o Senhor por seu Deus,
o povo que Ele escolheu para sua herança. Refrão
Do lugar onde habita,
contempla todos os habitantes da terra. Refrão
A nossa alma espera o Senhor,
Ele é o nosso amparo e protetor. Refrão
ALELUIA Lc 4, 18
Refrão: Aleluia Repete-se
O Senhor enviou-Me para anunciar a boa nova aos pobres
e proclamar aos cativos a redenção. Refrão
EVANGELHO Lc 4, 38-44
«Tenho de ir também às outras cidades
anunciar a boa nova do reino de Deus»
Este comentário editorial também deve ser excluído.
Evangelho de Nosso Senhor Jesus Cristo segundo São Lucas
Naquele tempo, Jesus saiu da sinagoga e entrou em casa de Simão.
E pregava pelas sinagogas da Judeia.
Palavra da salvação.
Oração sobre as oblatas
Santificai, Senhor, a oferta que Vos apresentamos.
Por Cristo nosso Senhor.
Antífona da comunhão Sl 30, 20
Como é grande, Senhor, a vossa bondade para aqueles que Vos servem!
Oração depois da comunhão
Senhor, que nos alimentastes com o pão da mesa celeste,
fortalecei os nossos corações.
Por Cristo nosso Senhor.
### Martirológio Romano`;
const cepSource = process.env.CEP_LIVE_SOURCE
  ? fs.readFileSync(process.env.CEP_LIVE_SOURCE, 'utf8')
  : cepFixture;

(async () => {
  const server = await startServer();
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 412, height: 915 } });
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.stack || String(error)));
  await page.addInitScript(() => {
    const localFetch = window.fetch.bind(window);
    window.fetch = async (url, options) => {
      if (String(url).startsWith(location.origin)) return localFetch(url, options);
      throw new Error('Remote fetch disabled by V27.5 browser check');
    };
    Object.defineProperty(navigator, 'geolocation', {
      configurable: true,
      value: {
        getCurrentPosition(success) {
          success({ coords: { latitude: 41.9028, longitude: 12.4964, accuracy: 20 } });
        }
      }
    });
  });

  try {
    await page.goto(`http://127.0.0.1:${server.address().port}/index.html`, {
      waitUntil: 'domcontentloaded',
      timeout: 120000
    });
    await page.waitForFunction(() => (
      typeof strictParseDailyMass === 'function'
      && typeof syncLocalizedChromeAndSettings === 'function'
      && state.selectedLocationCode === 'IT'
    ), null, { timeout: 120000 });

    const result = await page.evaluate(fixtures => {
      const parsed = strictParseDailyMass('IT', fixtures.cei, new Date(2026, 8, 1, 12), 'IT');
      const mexicoParsed = strictParseDailyMass('ES', fixtures.cem, new Date(2026, 8, 2, 12), 'MX');
      const portugalParsed = strictParseDailyMass('PT', fixtures.cep, new Date(2026, 8, 2, 12), 'PT');
      state.uiLang = 'ZH';
      syncLocalizedChromeAndSettings();
      const inspect = selectId => {
        const select = document.getElementById(selectId);
        return {
          labels: Object.fromEntries(Array.from(select.options)
            .filter(option => locationMeta[option.value] && option.value !== 'INTL')
            .map(option => [option.value, option.textContent])),
          regions: Object.fromEntries(Array.from(select.querySelectorAll('optgroup[data-region-key]'))
            .map(group => [group.dataset.regionKey, group.label]))
        };
      };
      const italyMass = globalThis.countryMassData.IT;
      const churches = globalThis.countryChurchData.IT;
      const mexicoMass = globalThis.countryMassData.MX;
      const mexicoChurches = globalThis.countryChurchData.MX;
      const portugalMass = globalThis.countryMassData.PT;
      const portugalChurches = globalThis.countryChurchData.PT;
      return {
        version: APP_VERSION,
        versionLabel: document.getElementById('settings-version-label').textContent,
        gps: {
          code: state.selectedLocationCode,
          language: state.currentLoc,
          useGps: state.useGps,
          checkbox: document.getElementById('set-gps').checked,
          locationDisabled: document.getElementById('set-loc').disabled,
          rome: gpsLocationForCoordinates(41.9028, 12.4964),
          romeZone: gpsLanguageForTimeZone('Europe/Rome'),
          vatican: gpsLocationForCoordinates(41.9029, 12.4534),
          mexicoCity: gpsLocationForCoordinates(19.4326, -99.1332),
          mexicoZone: gpsLanguageForTimeZone('America/Mexico_City'),
          mexicoLanguage: targetLanguageForLocationCode('MX'),
          lisbon: gpsLocationForCoordinates(38.7223, -9.1393),
          lisbonZone: gpsLanguageForTimeZone('Europe/Lisbon'),
          portugalLanguage: targetLanguageForLocationCode('PT')
        },
        zh: { left: inspect('set-loc'), target: inspect('set-target-lang') },
        parsed,
        mexicoParsed,
        portugalParsed,
        mass: {
          beta: italyMass.beta,
          ordinaryLength: italyMass.ordinary.length,
          corpusLength: italyMass.officialOrderCorpus.text_it.length,
          parser: italyMass.dailyReadings.parser,
          url: italyMass.dailyReadings.url('20260901'),
          preface: italyMass.ordinary.find(item => item.id === '3.3 eucharist').songs.cei_complete_prefaces.content[0].text_it.length,
          forms: Object.fromEntries(Object.entries(italyMass.ordinary.find(item => item.id === '3.3 eucharist').forms)
            .map(([key, lines]) => [key, lines[0].text_it.length]))
        },
        prayers: globalThis.countryPrayerData.IT,
        hymns: globalThis.countryHymnData.IT,
        churchCount: churches.entries.length,
        churchCoordinates: churches.entries.filter(entry => Number.isFinite(entry.lat) && Number.isFinite(entry.lng)).length,
        directoryCount: churches.source.publishedCount,
        runtimeChurchCount: globalThis.churchLocalDetailsMeta.sourceCounts.IT
        ,mexico: {
          beta: mexicoMass.beta,
          ordinaryLength: mexicoMass.ordinary.length,
          corpusLength: mexicoMass.officialOrderCorpus.text_es.length,
          parser: mexicoMass.dailyReadings.parser,
          url: mexicoMass.dailyReadings.url('20260902'),
          preface: mexicoMass.ordinary.find(item => item.id === '3.3 eucharist').songs.cem_complete_prefaces.content[0].text_es.length,
          forms: Object.fromEntries(Object.entries(mexicoMass.ordinary.find(item => item.id === '3.3 eucharist').forms)
            .map(([key, lines]) => [key, lines[0].text_es.length])),
          prayers: globalThis.countryPrayerData.MX,
          hymns: globalThis.countryHymnData.MX,
          churchCount: mexicoChurches.entries.length,
          exhaustive: mexicoChurches.exhaustive,
          runtimeChurchCount: globalThis.churchLocalDetailsMeta.sourceCounts.MX
        },
        portugal: {
          beta: portugalMass.beta,
          ordinaryLength: portugalMass.ordinary.length,
          corpusLength: portugalMass.officialOrderCorpus.text_pt.length,
          parser: portugalMass.dailyReadings.parser,
          url: portugalMass.dailyReadings.url('20260902'),
          preface: portugalMass.ordinary.find(item => item.id === '3.3 eucharist').songs.cep_complete_prefaces.content[0].text_pt.length,
          forms: Object.fromEntries(Object.entries(portugalMass.ordinary.find(item => item.id === '3.3 eucharist').forms)
            .map(([key, lines]) => [key, lines[0].text_pt.length])),
          prayers: globalThis.countryPrayerData.PT,
          hymns: globalThis.countryHymnData.PT,
          churchCount: portugalChurches.entries.length,
          exhaustive: portugalChurches.exhaustive,
          runtimeChurchCount: globalThis.churchLocalDetailsMeta.sourceCounts.PT
        }
      };
    }, { cei: ceiFixture, cem: cemSource, cep: cepSource });

    const required = ['entrance', 'collect', 'reading1', 'psalm', 'gospel_accl', 'gospel', 'prayer_offerings', 'communion', 'prayer_after'];
    assert(/^V27\.5-/.test(result.version) && result.versionLabel === 'V27.5', `Wrong version: ${result.version}`);
    assert(result.gps.code === 'IT' && result.gps.language === 'IT' && result.gps.useGps
      && !result.gps.checkbox && result.gps.locationDisabled
      && result.gps.rome === 'IT' && result.gps.romeZone === 'IT' && result.gps.vatican === 'VA',
    `Italy GPS or inverted checkbox regression: ${JSON.stringify(result.gps)}`);
    assert(result.gps.mexicoCity === 'MX' && result.gps.mexicoZone === 'MX' && result.gps.mexicoLanguage === 'ES',
    `Mexico GPS detection is wrong: ${JSON.stringify(result.gps)}`);
    assert(result.gps.lisbon === 'PT' && result.gps.lisbonZone === 'PT' && result.gps.portugalLanguage === 'PT',
    `Portugal GPS detection is wrong: ${JSON.stringify(result.gps)}`);
    assert(result.zh.left.regions.WESTERN_EUROPE === '西歐地區'
      && result.zh.left.regions.NORTHEAST_ASIA === '東北亞'
      && result.zh.left.labels.VA === '普世羅馬禮 | Lingua Latina'
      && result.zh.left.labels.IT === '義大利(CEI) | Italiano (Beta)'
      && result.zh.left.labels.PT === '葡萄牙(CEP) | Português (Beta)'
      && result.zh.left.labels.TW === '臺灣(CRCB) | 繁體中文 (Beta)'
      && result.zh.left.labels.MX === '墨西哥(CEM) | Español (Beta)'
      && result.zh.left.regions.LATIN_AMERICA === '拉丁美洲',
    `Traditional Chinese region/country labels are wrong: ${JSON.stringify(result.zh.left)}`);
    assert(JSON.stringify(result.zh.left) === JSON.stringify(result.zh.target), 'Left/right localized location selectors differ.');
    assert(required.every(key => result.parsed.data[key]), `CEI parser missing sections: ${Object.keys(result.parsed.data)}`);
    assert(result.parsed.data.reading1.lines.map(line => line.role).join(',') === 'summary,intro,body'
      && result.parsed.data.gospel.lines.map(line => line.role).join(',') === 'summary,intro,body',
    `Italian summary/intro/body order is wrong: ${JSON.stringify(result.parsed.data)}`);
    assert(result.parsed.data.psalm.lines.length === 5
      && result.parsed.data.psalm.lines[0].sp === 'R.'
      && result.parsed.data.psalm.lines.slice(1).every(line => line.sp === 'V.' && /- R\.$/.test(line.text)),
    `Italian Psalm stanzas are not grouped: ${JSON.stringify(result.parsed.data.psalm)}`);
    assert(result.parsed.data.gospel_accl.lines.length === 3
      && result.parsed.data.gospel_accl.lines.map(line => line.sp).join(',') === 'R.,V.,R.',
    `Italian acclamation response/verse structure is wrong: ${JSON.stringify(result.parsed.data.gospel_accl)}`);
    assert(result.mass.beta && result.mass.ordinaryLength === 32 && result.mass.corpusLength > 170000
      && result.mass.preface > 90000 && Object.values(result.mass.forms).every(length => length > 8000)
      && result.mass.parser === 'strict-italian-daily-mass' && /chiesacattolica\.it/.test(result.mass.url),
    `Italy Mass module is incomplete: ${JSON.stringify(result.mass)}`);
    assert(result.prayers.status === 'under-development' && result.prayers.entries.length === 0
      && result.hymns.status === 'under-development' && result.hymns.entries.length === 0,
    'Italy prayer/hymn placeholders are wrong.');
    assert(result.churchCount === 25486 && result.directoryCount === 25486 && result.runtimeChurchCount === 25486
      && result.churchCoordinates >= 25000,
    `Italy CEI church directory is incomplete: ${JSON.stringify({ count: result.churchCount, coordinates: result.churchCoordinates })}`);
    const mexicoRequired = [...required.slice(0, 7), 'preface', ...required.slice(7)];
    assert(mexicoRequired.every(key => result.mexicoParsed.data[key]),
    `CEM parser missing sections: ${Object.keys(result.mexicoParsed.data)}`);
    assert(result.mexicoParsed.data.reading1.lines.map(line => line.role).join(',') === 'summary,intro,body'
      && result.mexicoParsed.data.gospel.lines.map(line => line.role).join(',') === 'summary,intro,body',
    `Spanish summary/intro/body order is wrong: ${JSON.stringify(result.mexicoParsed.data)}`);
    assert(result.mexicoParsed.data.psalm.lines.length >= 3
      && result.mexicoParsed.data.psalm.lines[0].sp === 'R.'
      && result.mexicoParsed.data.psalm.lines.slice(1).every(line => line.sp === 'V.' && /- R\.$/.test(line.text)),
    `Spanish Psalm stanzas are not grouped: ${JSON.stringify(result.mexicoParsed.data.psalm)}`);
    assert(result.mexicoParsed.data.gospel_accl.lines.length === 3
      && result.mexicoParsed.data.gospel_accl.lines.map(line => line.sp).join(',') === 'R.,V.,R.'
      && !/\bR\.$/.test(result.mexicoParsed.data.gospel_accl.lines[1].text),
    `Spanish acclamation response/verse structure is wrong: ${JSON.stringify(result.mexicoParsed.data.gospel_accl)}`);
    assert(!/ACTO PENITENCIAL|Terminado el canto de entrada/iu.test(result.mexicoParsed.data.entrance.text)
      && !/LITURGIA DE LA PALABRA/iu.test(result.mexicoParsed.data.collect.text)
      && !/PLEGARIA EUCARÍSTICA I/iu.test(result.mexicoParsed.data.preface.text)
      && !/Palabra de (?:Dios|l Señor)/iu.test(result.mexicoParsed.data.reading1.lines.at(-1).text)
      && !/Palabra de (?:Dios|l Señor)/iu.test(result.mexicoParsed.data.gospel.lines.at(-1).text),
    `CEM proper/reading tails were not trimmed: ${JSON.stringify(result.mexicoParsed.data)}`);
    assert(result.mexico.beta && result.mexico.ordinaryLength === 32 && result.mexico.corpusLength > 100000
      && result.mexico.preface > 40000 && Object.values(result.mexico.forms).every(length => length > 4000)
      && result.mexico.parser === 'strict-mexican-cem-daily-mass' && /sistemas\.cem\.org\.mx/.test(result.mexico.url),
    `Mexico Mass module is incomplete: ${JSON.stringify(result.mexico)}`);
    assert(result.mexico.prayers.status === 'under-development' && result.mexico.prayers.entries.length === 0
      && result.mexico.hymns.status === 'under-development' && result.mexico.hymns.entries.length === 0,
    'Mexico prayer/hymn placeholders are wrong.');
    assert(result.mexico.churchCount === 19 && result.mexico.runtimeChurchCount === 19 && result.mexico.exhaustive === false,
    `Mexico cathedral seed directory is wrong: ${JSON.stringify(result.mexico)}`);
    assert(required.every(key => result.portugalParsed.data[key]),
    `CEP parser missing sections: ${Object.keys(result.portugalParsed.data)}`);
    assert(result.portugalParsed.data.reading1.lines.map(line => line.role).join(',') === 'summary,intro,body'
      && result.portugalParsed.data.gospel.lines.map(line => line.role).join(',') === 'summary,intro,body'
      && /^Irmãos:/u.test(result.portugalParsed.data.reading1.lines.find(line => line.role === 'body').text)
      && /^Naquele tempo,/u.test(result.portugalParsed.data.gospel.lines.find(line => line.role === 'body').text)
      && !/comentário editorial/iu.test(result.portugalParsed.data.reading1.text)
      && !/comentário editorial/iu.test(result.portugalParsed.data.gospel.text),
    `Portuguese summary/intro/body order is wrong: ${JSON.stringify(result.portugalParsed.data)}`);
    assert(result.portugalParsed.data.psalm.lines.length === 4
      && result.portugalParsed.data.psalm.lines[0].sp === 'R.'
      && result.portugalParsed.data.psalm.lines.slice(1).every(line => line.sp === 'V.' && /- R\.$/.test(line.text)),
    `Portuguese Psalm stanzas are not grouped: ${JSON.stringify(result.portugalParsed.data.psalm)}`);
    assert(result.portugalParsed.data.gospel_accl.lines.length === 3
      && result.portugalParsed.data.gospel_accl.lines.map(line => line.sp).join(',') === 'R.,V.,R.',
    `Portuguese acclamation response/verse structure is wrong: ${JSON.stringify(result.portugalParsed.data.gospel_accl)}`);
    assert(result.portugal.beta && result.portugal.ordinaryLength === 32 && result.portugal.corpusLength > 150000
      && result.portugal.preface > 70000 && Object.values(result.portugal.forms).every(length => length > 5000)
      && result.portugal.parser === 'strict-portuguese-daily-mass' && /liturgia\.pt/.test(result.portugal.url),
    `Portugal Mass module is incomplete: ${JSON.stringify(result.portugal)}`);
    assert(result.portugal.prayers.status === 'under-development' && result.portugal.prayers.entries.length === 0
      && result.portugal.hymns.status === 'under-development' && result.portugal.hymns.entries.length === 0,
    'Portugal prayer/hymn placeholders are wrong.');
    assert(result.portugal.churchCount === 20 && result.portugal.runtimeChurchCount === 20 && result.portugal.exhaustive === false,
    `Portugal cathedral seed directory is wrong: ${JSON.stringify(result.portugal)}`);
    assert(pageErrors.length === 0, `Page errors:\n${pageErrors.join('\n')}`);
    console.log(JSON.stringify(result, null, 2));
  } finally {
    await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
