const assert = require('assert');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const missaDataPath = path.join(root, 'JS file', 'missa_data.js');
require(missaDataPath);

const eucharist = globalThis.missaData.find(item => item.id === '3.3 eucharist');
assert(eucharist, 'Eucharistic Prayer data is missing');
assert.strictEqual(Object.keys(eucharist.songs).length, 84, 'Unexpected preface count');

const anchors = {
  common_1: ['renew all things', 'canh tân mọi sự', 'ómnia instauráre'],
  common_2: ['in goodness you created man', 'lòng nhân hậu', 'bonitáte hóminem'],
  common_3: ['created the human race', 'tác thành nhân loại', 'cónditor géneris'],
  common_4: ['no need of our praise', 'không cần chúng con ca tụng', 'nostra laude non égeas'],
  common_5: ['Death we celebrate in love', 'tôn vinh Người chịu chết', 'mortem in caritáte'],
  common_6: ['your beloved Son, Jesus Christ', 'Con yêu quý của Cha', 'Fílium dilectiónis tuæ']
};

for (const [key, expected] of Object.entries(anchors)) {
  const item = eucharist.songs[key];
  assert(item, `${key} is missing`);
  const joined = {
    en: item.content.map(line => line.text_en || '').join(' '),
    vn: item.content.map(line => line.text_vn || '').join(' '),
    la: item.content.map(line => line.text_la || '').join(' ')
  };
  assert(joined.en.includes(expected[0]), `${key} English source mismatch`);
  assert(joined.vn.includes(expected[1]), `${key} Vietnamese source mismatch`);
  assert(joined.la.includes(expected[2]), `${key} Latin source mismatch`);
}

for (const formKey of ['1', '3', '4']) {
  const form = eucharist.forms[formKey];
  assert(Array.isArray(form) && form.length > 0, `Prayer ${formKey} should have aligned content`);
  for (const lang of ['kr', 'en', 'la', 'vn', 'jp']) {
    const value = form.map(line => line && line[`text_${lang}`] || '').join(' ');
    assert(value.length > 500, `Prayer ${formKey} ${lang} is incomplete`);
    assert(!/업데이트 중|Updating|Đang cập nhật|In opere|更新中/i.test(value), `Prayer ${formKey} ${lang} still has a placeholder`);
  }
}

const digest = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
assert.strictEqual(
  digest(missaDataPath),
  digest(path.join(root, 'JS file', 'missa_data.mass-data-copy.js')),
  'The canonical and preserved missa_data.js copies differ'
);

console.log('V20 missa data verification passed');
