const assert = require('node:assert/strict');
const { parseLyricsVerses } = require('./hymn-data-entry-tool');

const cases = [
  {
    name: 'Unnumbered sung passages stay separate from the preceding stanza',
    input: '1. First stanza\n\n[가사]\nA shared sung ending',
    expected: [{ label: '1절', text: 'First stanza' }, { label: '가사', text: 'A shared sung ending' }]
  },
  {
    name: 'Vocal-role annotations remain section labels when saving',
    input: '[도입 (남성)]\nMáng lừa chiên\n\n[후렴 (동성 2부)]\nThương Chúa',
    expected: [{ label: '도입 (남성)', text: 'Máng lừa chiên' }, { label: '후렴 (동성 2부)', text: 'Thương Chúa' }]
  },
  {
    name: 'Vietnamese responsorial headings are stored as a refrain',
    input: 'ĐX. Lạy Chúa xin thương\n\n1. Con dâng lời nguyện',
    expected: [{ label: '후렴', text: 'Lạy Chúa xin thương' }, { label: '1절', text: 'Con dâng lời nguyện' }]
  },
  {
    name: 'Japanese stanzas, doxology and refrain retain their boundaries and emphasis',
    input: '1.\n**神**をたたえよ\n\n2.\n**主**にうたえ\n\n栄唱\n栄光は父と子と聖霊に\n\n[コーラス]\nアレルヤ',
    expected: [
      { label: '1절', text: '**神**をたたえよ' },
      { label: '2절', text: '**主**にうたえ' },
      { label: '栄唱', text: '栄光は父と子と聖霊に' },
      { label: '후렴', text: 'アレルヤ' }
    ]
  },
  {
    name: 'Different refrain endings remain separate when the editor saves them',
    input: '1. 첫째 절\n\n[후렴 (1절)]\n첫째 절의 후렴\n\n[후렴 (2절)]\n둘째 절의 후렴',
    expected: [
      { label: '1절', text: '첫째 절' },
      { label: '후렴 (1절)', text: '첫째 절의 후렴' },
      { label: '후렴 (2절)', text: '둘째 절의 후렴' }
    ]
  },
  {
    name: 'Vietnamese harmony annotation stays attached to its refrain',
    input: 'ĐK 3 bè: Hát mừng Chúa\n\n1. Con dâng lời ca [ĐK]',
    expected: [
      { label: '후렴 (3 bè)', text: 'Hát mừng Chúa' },
      { label: '1절', text: 'Con dâng lời ca [ĐK]' }
    ]
  },
  {
    name: 'Named sections use the same parser for other languages',
    input: '[Intro]\nOpening\n\nVerse 1: First stanza [Chorus]\n\n[Bridge]\nMiddle\n\n[Chorus]\nWe praise the Lord\n\n[Coda]\nEnding',
    expected: [
      { label: 'Intro', text: 'Opening' },
      { label: '1절', text: 'First stanza [Chorus]' },
      { label: 'Bridge', text: 'Middle' },
      { label: '후렴', text: 'We praise the Lord' },
      { label: 'Coda', text: 'Ending' }
    ]
  },
  {
    name: 'Standalone stanza numbers and Japanese section notation are supported',
    input: '1\nFirst stanza\n\n第2節\nSecond stanza',
    expected: [{ label: '1절', text: 'First stanza' }, { label: '2절', text: 'Second stanza' }]
  },
  {
    name: 'Ordinary lyric lines do not become section headings',
    input: 'Bridge over the river\nWe sing together',
    expected: []
  }
];

for (const item of cases) {
  assert.deepEqual(parseLyricsVerses(item.input), item.expected, item.name);
}
console.log(`Hymn section parser checks passed (${cases.length} cases).`);
