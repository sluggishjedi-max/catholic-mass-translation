// Country-owned church directory data.
(function registerCountryChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  global.countryChurchData["VA"] = {
    jurisdiction: "VA",
    status: "available",
    provider: "local-directory",
    entries: [{"country":"VA","name":"Papal Basilica of Saint Peter - Vatican","address":"Piazza San Pietro, 00120 Città del Vaticano","phone":"+39 06 698 83712","website":"https://www.vatican.va/content/basilicas/en.html","massTimes":["Monday-Saturday: 07:00, 07:30, 08:00, 08:30, 09:00, 10:00, 11:00, 12:00, 17:00","Sunday and holy days: 07:00, 08:00, 09:00, 10:30, 12:30, 13:00, 16:00, 17:00, 18:00"],"sourceUrl":"https://www.vatican.va/content/vatican/en/info.html","sourceName":"Holy See - Useful Information","sourceAuthority":"Holy See"},{"country":"VA","name":"Papal Basilica of Saint John Lateran","address":"Piazza di San Giovanni in Laterano, 4, Roma","phone":"+39 06 698 86433","website":"https://press.vatican.va/various/basiliche/san_giovanni/it/orari/orari.htm","massTimes":["Monday-Saturday: 07:00, 07:30, 08:00, 09:00, 10:00, 11:00, 12:00, 17:30","Sunday and holy days: 07:00, 08:00, 09:00, 09:45, 10:30, 12:00, 15:45 (confirmation Saturdays only), 17:30"],"openingHours":["Basilica: 07:00-18:30"],"sourceUrl":"https://www.vatican.va/content/vatican/en/info.html","sourceName":"Holy See - Useful Information","sourceAuthority":"Holy See"},{"country":"VA","name":"Papal Basilica of Saint Mary Major","address":"Via Liberiana, 27, Roma","phone":"+39 06 698 86800","website":"https://www.vatican.va/content/basilicas/en.html","massTimes":["Monday-Saturday: 07:00, 08:00, 09:00, 10:00, 12:00, 18:00","Sunday and holy days: 07:00, 08:00, 09:00, 10:00, 11:00, 12:00, 18:00"],"sourceUrl":"https://www.vatican.va/content/vatican/en/info.html","sourceName":"Holy See - Useful Information","sourceAuthority":"Holy See"},{"country":"VA","name":"Papal Basilica of Saint Paul Outside the Walls","address":"Via Ostiense, 186, Roma","phone":"+39 06 454 34185","website":"https://www.vatican.va/various/basiliche/san_paolo/en/orari/ufficio.htm","openingHours":["Sacristy: daily 08:00-12:00 and 16:00-19:00"],"sourceUrl":"https://www.vatican.va/content/vatican/en/info.html","sourceName":"Holy See - Useful Information","sourceAuthority":"Holy See"}]
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
