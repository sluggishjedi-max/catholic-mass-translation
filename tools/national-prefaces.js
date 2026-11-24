'use strict';

const fs = require('node:fs');
const { ordinal } = require('../JS file/preface_matching');

const editions = {
  it: {
    count: 75,
    marker: /^(?:★\s*)?Prefazio /u,
    continuation: /^(?:del Tempo Ordinario|sposo della beata Vergine Maria|e dei santi religiosi)\b/u,
    families: [
      ["dell’Avvento", "advent"], ["di Natale", "nativity"], ["di Quaresima", "lent"],
      ["della Passione del Signore", "passion"], ["Pasquale", "easter"],
      ["dell’Ascensione del Signore", "ascension"],
      ["delle domeniche del Tempo Ordinario", "ordinary"],
      ["della Santissima Eucaristia", "eucharist"], ["della beata Vergine Maria", "mary"],
      ["degli apostoli", "apostles"], ["dei santi martiri", "martyrs"],
      ["dei santi pastori", "pastors"], ["dei santi dottori della Chiesa", "doctors"],
      ["dei santi", "saints"], ["comune", "common"], ["dei defunti", "dead"]
    ].map(([name, key]) => [new RegExp('^Prefazio ' + name + ' ([IVX]+)(/A)?(?=\\s|$)', 'u'), key]),
    headings: [
      ["dell’Epifania", "epiphany"], ["dopo l’Ascensione", "after_ascension"],
      ["del Battesimo", "baptism"], ["della Confermazione", "confirmation"],
      ["dell’Ordine", "holy_orders_ministries"], ["del Matrimonio", "marriage_1"],
      ["della Penitenza", "penance"], ["dell’Unzione degli infermi", "sick_paschal"],
      ["degli angeli", "angels"], ["di san Giuseppe sposo della beata Vergine Maria", "saint_joseph"],
      ["delle sante vergini e dei santi religiosi", "virgins_and_religious"]
    ].map(([name, key]) => ['Prefazio ' + name, key]),
    rubricStart: /^(?:Il seguente prefazio|Questo prefazio|Si dice|Nelle Messe|V\s*[/.:]+\s*|Il Signore sia con voi)/iu,
    bodyStart: /^[ÈE]\s*(?:veramente|giusto)\b/iu,
    pageHeader: /^(?:\d{3}\s*)?(?:Preghiera Eucaristica|Rito della Messa con il popolo)(?:\s*\d{3})?$|^\d{3}$/iu
  },
  es: {
    count: 67,
    marker: /^PREFACIO /u,
    families: [
      [/^PREFACIO ([IVX]+) DE ADVIENTO\b/u, "advent"],
      [/^PREFACIO ([IVX]+) DE NAVIDAD\b/u, "nativity"],
      [/^PREFACIO ([IVX]+) DE CUARESMA\b/u, "lent"],
      [/^PREFACIO ([IVX]+) DE LA PASIÓN DEL SEÑOR\b/u, "passion"],
      [/^PREFACIO PASCUAL ([IVX]+)\b/u, "easter"],
      [/^PREFACIO ([IVX]+) DE LA ASCENSIÓN DEL SEÑOR\b/u, "ascension"],
      [/^PREFACIO ([IVX]+) PARA LOS DOMINGOS DEL TIEMPO ORDINARIO\b(?: \([^)]*\))?/u, "ordinary"],
      [/^PREFACIO ([IVX]+) DE LA SANTÍSIMA EUCARISTÍA\b/u, "eucharist"],
      [/^PREFACIO ([IVX]+) DE SANTA MARÍA VIRGEN\b/u, "mary"],
      [/^PREFACIO ([IVX]+) DE LOS APÓSTOLES\b/u, "apostles"],
      [/^PREFACIO ([IVX]+) DE LOS SANTOS MÁRTIRES\b/u, "martyrs"],
      [/^PREFACIO ([IVX]+) DE LOS SANTOS\b/u, "saints"],
      [/^PREFACIO COMÚN ([IVX]+)\b/u, "common"],
      [/^PREFACIO ([IVX]+) DE DIFUNTOS\b/u, "dead"]
    ],
    headings: [
      ["DE LA EPIFANÍA DEL SEÑOR", "epiphany"], ["PARA DESPUÉS DE LA ASCENSIÓN", "after_ascension"],
      ["DEL BAUTISMO", "baptism"], ["DE LA CONFIRMACIÓN", "confirmation"],
      ["DE LA PENITENCIA", "penance"], ["DE LA UNCIÓN DE ENFERMOS", "sick_paschal"],
      ["DE LOS SANTOS PASTORES", "pastors"], ["DE SANTAS VÍRGENES Y RELIGIOSOS", "virgins_and_religious"]
    ].map(([name, key]) => ['PREFACIO ' + name, key]),
    rubricStart: /^(?:\d+\.|Este prefacio|El siguiente prefacio|En las misas|El Señor esté con ustedes)/iu,
    bodyStart: /^En verdad\b/iu,
    pageHeader: /^(?:\d+\s*)?(?:PLEGARIA EUCAR[IÍ]STICA|ORDINARIO DE LA MISA)(?:\s*\d+)?$|^\d+\.?$/iu
  }
};

const sanctus = /Santo,\s*Santo,\s*Santo\b/iu;
const dialogue = /^(?:[VR]\s*[/.:]+\s*|Il Signore sia con voi|El Señor esté con ustedes)/iu;
const inlineSpanishRubric = /(?=Este prefacio\b)/iu;

function parseHeading(value, edition, lang) {
  const title = value.normalize('NFC').replace(/^★\s*|\s*\*$/gu, '');
  for (const [pattern, family] of edition.families) {
    const match = title.match(pattern);
    if (!match) continue;
    const number = ordinal(match[1]);
    let key = family + '_' + number + (match[2] ? 'a' : '');
    if (number === 1 && ['martyrs', 'pastors'].includes(family)) key = family;
    if (lang === 'es' && family === 'advent' && number > 2) key = 'advent_' + (number - 2) + 'a';
    return [key, match[0], title.slice(match[0].length).trim()];
  }
  for (const [heading, key] of edition.headings) {
    if (title === heading || title.startsWith(heading + ' ')) {
      return [key, heading, title.slice(heading.length).trim()];
    }
  }
  throw Error('Unrecognized preface heading: ' + value);
}

function splitNationalPrefaces(rows, lang) {
  const edition = editions[lang];
  if (!edition) throw Error('Unknown missal language: ' + lang);
  const textField = 'text_' + lang;
  const rubricField = 'rubric_' + lang;
  const text = row => String(row?.[rubricField] || row?.[textField] || '').trim();
  const entries = rows.filter(row => text(row) && !edition.pageHeader.test(text(row)));
  const boundaries = entries.flatMap((row, index) => edition.marker.test(text(row)) ? [index] : []);
  if (boundaries.length !== edition.count) {
    throw Error(lang + ' preface count: expected ' + edition.count + ', found ' + boundaries.length);
  }
  const result = {};
  boundaries.forEach((start, index) => {
    const block = entries.slice(start + 1, boundaries[index + 1]);
    let headingRow = text(entries[start]);
    if (edition.continuation?.test(text(block[0]))) headingRow += ' ' + text(block.shift());
    const [key, heading, remaining] = parseHeading(headingRow, edition, lang);
    if (result[key]) throw Error('Duplicate preface: ' + heading);
    const bodyStart = block.findIndex(row => edition.bodyStart.test(text(row)));
    const bodyEnd = block.findIndex((row, i) => i >= bodyStart && sanctus.test(text(row)));
    if (bodyStart < 0 || bodyEnd <= bodyStart) throw Error('Invalid preface boundaries: ' + heading);
    const [inlineSubtitle, inlineRubric] = lang === 'es' ? remaining.split(inlineSpanishRubric, 2) : [remaining];
    const front = block.slice(0, bodyStart);
    const subtitle = [inlineSubtitle.trim()];
    if (lang === 'it') subtitle.push(text(front.shift()));
    else while (front.length && !edition.rubricStart.test(text(front[0])) &&
      !front[0][rubricField] && text(front[0]) === text(front[0]).toLocaleUpperCase(lang)) {
      subtitle.push(text(front.shift()));
    }
    if (!subtitle.some(Boolean)) throw Error('Missing preface subtitle: ' + heading);
    const rubrics = [];
    if (inlineRubric) rubrics.push({[rubricField]: inlineRubric.trim()});
    for (const row of front) {
      if (dialogue.test(text(row))) break;
      rubrics.push({[rubricField]:text(row)});
    }
    const prayer = block.slice(bodyStart, bodyEnd).map(row => row[textField] ? row : {[textField]: text(row)});
    const closing = text(block[bodyEnd]).split(sanctus)[0].trim();
    if (closing) prayer.push({...block[bodyEnd], [textField]:closing});
    result[key] = {title:{[lang]:heading + ' — ' + subtitle.filter(Boolean).join(' ')}, content:[...rubrics, ...prayer]};
  });
  return result;
}

module.exports = { splitNationalPrefaces };
if (require.main === module) {
  const rows = JSON.parse(fs.readFileSync(0, 'utf8'));
  process.stdout.write(JSON.stringify(splitNationalPrefaces(rows, process.argv[2])));
}
