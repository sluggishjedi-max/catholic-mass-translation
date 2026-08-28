// Taiwan beta church directory data.
(function registerTaiwanChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  global.countryChurchData.TW = {
    jurisdiction: 'TW',
    status: 'available',
    provider: 'official diocesan directory',
    entries: [{
      country: 'TW',
      name: 'Immaculate Conception Cathedral, Taipei',
      aliases: ['聖母無原罪主教座堂', '台北主教座堂', 'Taipei Cathedral'],
      diocese: 'Archdiocese of Taipei',
      address: 'No. 245, Minsheng West Road, Datong District, Taipei City, Taiwan',
      phone: '+886 2 2557 4874',
      website: 'https://taipei.catholic.org.tw/eng/deanery/1/',
      officialDioceseUrl: 'https://taipei.catholic.org.tw/eng/deanery/1/',
      sourceUrl: 'https://taipei.catholic.org.tw/eng/deanery/1/',
      sourceName: 'Archdiocese of Taipei parish directory',
      sourceAuthority: 'Archdiocese of Taipei',
      massTimes: ['Saturday 17:00', 'Sunday 09:00', 'Weekdays 07:30'],
      lat: 25.0577,
      lng: 121.5112
    }]
  };

  global.rebuildCountryChurchDirectory = global.rebuildCountryChurchDirectory || function rebuildCountryChurchDirectory() {
    const order = ['KR', 'VN', 'US', 'JP', 'VA', 'IE', 'TW', 'CN', 'PH', 'ID', 'TH', 'KH', 'SG', 'MY', 'BN', 'HK', 'MO'];
    const records = order.flatMap(key => {
      const module = global.countryChurchData[key];
      return module && Array.isArray(module.entries) ? module.entries : [];
    });
    const normalize = value => String(value || '').normalize('NFKC').toLowerCase()
      .replace(/(?:천주교|가톨릭|성당|본당|교회|catholic|church|parish)/gu, '')
      .replace(/[^\p{L}\p{N}]+/gu, '');
    const index = {};
    records.forEach(record => {
      const values = [record.name, record.directoryName, record.officialDirectoryName, record.address]
        .concat(Array.isArray(record.aliases) ? record.aliases : []);
      values.filter(Boolean).forEach(value => {
        index[String(value).trim().toLowerCase()] = record;
        const normalized = normalize(value);
        if (normalized) index[normalized] = record;
      });
    });
    global.churchLocalDetailRecords = records;
    global.churchLocalDetails = index;
    global.churchLocalDetailsMeta = {
      generatedAt: '2026-08-28',
      recordCount: records.length,
      sourceCounts: Object.fromEntries(order.map(key => [key, (global.countryChurchData[key] && global.countryChurchData[key].entries || []).length]))
    };
  };
  global.rebuildCountryChurchDirectory();
})(globalThis);
