
'use strict';

const roman = require('../JS file/preface_matching').ordinal;

const numbered = [
  [/^PREFÁCIO (I{1,3}|IV|V|VI{1,3}|IX|X)(-A)? DO ADVENTO$/u, 'advent'],
  [/^PREFÁCIO ([IVX]+) DO NATAL DO SENHOR$/u, 'nativity'],
  [/^PREFÁCIO ([IVX]+) DA QUARESMA$/u, 'lent'],
  [/^PREFÁCIO ([IVX]+) DA PAIXÃO DO SENHOR$/u, 'passion'],
  [/^PREFÁCIO PASCAL ([IVX]+)$/u, 'easter'],
  [/^PREFÁCIO ([IVX]+) DA ASCENSÃO DO SENHOR$/u, 'ascension'],
  [/^PREFÁCIO ([IVX]+) DOMINICAL DO TEMPO COMUM$/u, 'ordinary'],
  [/^PREFÁCIO ([IVX]+) DA SANTÍSSIMA EUCARISTIA$/u, 'eucharist'],
  [/^PREFÁCIO ([IVX]+) DA VIRGEM SANTA MARIA$/u, 'mary'],
  [/^PREFÁCIO ([IVX]+) DOS APÓSTOLOS$/u, 'apostles'],
  [/^PREFÁCIO ([IVX]+) DOS SANTOS$/u, 'saints'],
  [/^PREFÁCIO ([IVX]+) DOS SANTOS MÁRTIRES$/u, 'martyrs'],
  [/^PREFÁCIO COMUM ([IVX]+)$/u, 'common'],
  [/^PREFÁCIO ([IVX]+) DOS DEFUNTOS$/u, 'dead']
];
const unique = new Map([
  ['PREFÁCIO DA EPIFANIA DO SENHOR','epiphany'],
  ['PREFÁCIO DOS ANJOS','angels'],
  ['PREFÁCIO DE SÃO JOSÉ','saint_joseph'],
  ['PREFÁCIO DOS SANTOS PASTORES DA IGREJA','pastors'],
  ['PREFÁCIO DAS SANTAS VIRGENS','virgins_and_religious']
]);
const text = row => String(row.rubric_pt || row.text_pt || '').trim();

function prefaceKey(heading) {
  if (unique.has(heading)) return unique.get(heading);
  for (const [pattern, family] of numbered) {
    const match = heading.match(pattern);
    if (!match) continue;
    const number = roman(match[1]);
    if (family === 'martyrs' && number === 1) return family;
    return family + '_' + number + (match[2] ? 'a' : '');
  }
  return '';
}

function splitPortugalPrefaces(rows) {
  const result = {};
  const boundaries = rows.map((row,index)=>[prefaceKey(text(row)),index]).filter(([key])=>key);
  if (boundaries.length < 50) throw Error('Portugal Missal preface headings are incomplete.');
  boundaries.forEach(([key,start],index)=>{
    if (result[key]) throw Error('Duplicate Portugal preface ' + key);
    const end = boundaries[index+1]?.[1] ?? rows.length;
    const block = rows.slice(start+1,end);
    let heading = text(rows[start]);
    if (/^(?:ESPOSO DA VIRGEM SANTA MARIA|E DOS SANTOS RELIGIOSOS)$/u.test(text(block[0]))) heading += ' ' + text(block.shift());
    const subtitle = text(block.shift());
    const first = block.findIndex(row=>/^V\.\s*(?:O Senhor esteja|O Senhor esteja convosco)/iu.test(text(row)));
    const prayer = block.findIndex(row=>/^(?:Senhor,\s*)?Pai santo/iu.test(text(row)));
    const sanctus = block.findIndex(row=>/^Santo,\s*Santo,\s*Santo/iu.test(text(row)));
    if (prayer<0 || sanctus<=prayer) throw Error('Invalid Portugal preface boundaries for ' + heading);
    const rubrics = block.slice(0,first>=0 ? first : prayer).map(row=>({rubric_pt:text(row)}));
    result[key] = {title:{pt:heading+' — '+subtitle},content:[...rubrics,...block.slice(prayer,sanctus)]};
  });
  return result;
}

module.exports = { splitPortugalPrefaces };
if (require.main === module) {
  const fs = require('node:fs');
  const rows = JSON.parse(fs.readFileSync(0,'utf8'));
  process.stdout.write(JSON.stringify(splitPortugalPrefaces(rows)));
}
