const assert = require('assert/strict');
const { mergeHymnDuplicates } = require('./hymn-merge');
const { encode, decodeFields, updatedDocument } = require('./merge-firebase-hymns');

const complete = { id: 'full', country: 'KR', book: '가톨릭성가', number: '002', title: '같은 성가',
  lyrics: '첫째 절의 전체 가사. 둘째 절의 전체 가사.', text: '첫째 절의 전체 가사. 둘째 절의 전체 가사.',
  verses: [{ label: '1절', text: '첫째 절의 전체 가사.' }, { label: '2절', text: '둘째 절의 전체 가사.' }],
  scoreImages: [{ src: 'score-1.webp', label: '1/1' }], translations: { EN: { title: 'Existing title' } }, tags: ['연중'] };
const index = { id: 'index', country: 'KR', number: '2', title: '같은  성가', lyrics: '',
  translations: { VN: { title: 'Vietnamese title' } }, media: { scoreUrl: 'https://example.com/score' }, tags: ['옛 목록'] };
const original = JSON.stringify([complete, index]);
const merged = mergeHymnDuplicates([complete, index]);
assert.equal(merged.entries.length, 1);
assert.equal(merged.entries[0].id, 'full');
assert.equal(merged.entries[0].lyrics, complete.lyrics);
assert.deepEqual(merged.entries[0].verses, complete.verses);
assert.deepEqual(merged.entries[0].scoreImages, complete.scoreImages);
assert.equal(merged.entries[0].media.scoreUrl, index.media.scoreUrl);
assert.equal(merged.entries[0].translations.EN.title, 'Existing title');
assert.equal(merged.entries[0].translations.VN.title, 'Vietnamese title');
assert.deepEqual(merged.entries[0].tags, ['연중', '옛 목록']);
assert.deepEqual(merged.entries[0].mergedIds, ['index']);
assert.equal(JSON.stringify([complete, index]), original, 'Inputs were modified');
assert.equal(mergeHymnDuplicates(merged.entries).merges.length, 0);

const excerpt = { ...index, lyrics: '첫째 절의 전체 가사.', verses: [{ label: '1)', text: '첫째 절의 전체 가사.' }] };
assert.deepEqual(mergeHymnDuplicates([excerpt, complete]).entries[0].verses, complete.verses, 'Excerpt replaced full verses');
assert.equal(mergeHymnDuplicates([complete, { ...index, book: '다른 성가집' }]).merges.length, 0);
assert.equal(mergeHymnDuplicates([complete, { ...index, country: 'VN' }]).merges.length, 0);
assert.equal(mergeHymnDuplicates([complete, index, { ...complete, id: 'another-book', book: '다른 성가집' }]).merges.length, 0, 'Unknown book bridged two hymnals');
assert.equal(mergeHymnDuplicates([complete, { ...index, book: complete.book, lyrics: '다른 곡의 가사.' }]).merges.length, 0);
assert.equal(mergeHymnDuplicates([{ ...complete, voiceType: '4성부' }, { ...index, voiceType: '단성' }]).merges.length, 0);
assert.equal(mergeHymnDuplicates([{ ...complete, country: 'ZH' }, { ...index, country: 'ZH' }]).entries.length, 1, 'Merge did not support another language');
assert.equal(mergeHymnDuplicates([{ ...complete, number: '' }, { ...index, number: '' }]).merges.length, 0);

const document = { name: 'canonical', fields: Object.fromEntries(Object.entries(complete).map(([key, value]) => [key, encode(value)])) };
document.fields.importedAt = { timestampValue: '2026-09-11T00:00:00Z' };
const update = updatedDocument(document, { ...merged.entries[0], importedAt: document.fields.importedAt });
assert.deepEqual(update.fields.importedAt, document.fields.importedAt, 'An unrelated Firestore type changed');
assert.equal(decodeFields(update.fields).media.scoreUrl, index.media.scoreUrl);
console.log('Hymn merge preservation, identity boundaries, and Firestore field checks passed.');
