// Country-owned church directory data.
(function registerCountryChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  global.countryChurchData["US"] = {
    jurisdiction: "US",
    status: "remote-provider",
    provider: "MassTimes / Google Places",
    entries: []
  };

  const order = ['KR', 'VN', 'US', 'JP', 'VA', 'IE'];
  const records = order.flatMap(key => {
    const module = global.countryChurchData[key];
    return module && Array.isArray(module.entries) ? module.entries : [];
  });
  const normalize = value => String(value || '').normalize('NFKC').toLowerCase()
    .replace(/(?:천주교|가톨릭|성당|본당|교회|catholic|church|parish)/gu, '')
    .replace(/[^0-9a-z가-힣ぁ-んァ-ヶ一-龯]+/gu, '');
  const index = {};
  records.forEach(record => {
    const values = [record.name, record.directoryName, record.officialDirectoryName, record.address];
    values.filter(Boolean).forEach(value => {
      index[String(value).trim().toLowerCase()] = record;
      const normalized = normalize(value);
      if (normalized) index[normalized] = record;
    });
  });
  global.churchLocalDetailRecords = records;
  global.churchLocalDetails = index;
  global.churchLocalDetailsMeta = {
    generatedAt: '2026-08-27',
    recordCount: records.length,
    sourceCounts: Object.fromEntries(order.map(key => [key, (global.countryChurchData[key] && global.countryChurchData[key].entries || []).length]))
  };
})(globalThis);
