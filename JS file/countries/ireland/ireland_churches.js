// All-island Catholic church directory data (Republic of Ireland and Northern Ireland).
(function registerIrelandChurches(global) {
  'use strict';
  global.countryChurchData = global.countryChurchData || {};
  global.countryChurchData.IE = {
    jurisdiction: 'IE',
    jurisdictions: ['IE', 'GB-NIR'],
    status: 'available',
    provider: 'local-directory / Google Places',
    entries: [{"country":"IE","name":"St Mary’s Cathedral (Pro-Cathedral)","aliases":["St Mary’s Pro-Cathedral","Saint Mary’s Pro Cathedral","St Marys Cathedral Dublin"],"diocese":"Archdiocese of Dublin","address":"Marlborough Street, Dublin 1, D01 TX49, Ireland","phone":"+353 1 874 5441","website":"https://www.dublindiocese.ie/cathedral/","officialDioceseUrl":"https://www.dublindiocese.ie/parish/cathedral/","sourceUrl":"https://www.dublindiocese.ie/parish/cathedral/","sourceName":"Archdiocese of Dublin parish directory","sourceAuthority":"Archdiocese of Dublin","lat":53.35236,"lng":-6.25914},{"country":"IE","name":"Cathedral of Our Lady Assumed into Heaven and Saint Nicholas","aliases":["Galway Cathedral","Cathedral of Our Lady Assumed into Heaven Galway"],"diocese":"Diocese of Galway, Kilmacduagh and Kilfenora","address":"Gaol Road, Galway, H91 A780, Ireland","website":"https://www.galwaycathedral.ie/","officialDioceseUrl":"https://www.galwaydiocese.ie/","sourceUrl":"https://www.galwaycathedral.ie/","sourceName":"Galway Cathedral","sourceAuthority":"Galway Cathedral","lat":53.27532,"lng":-9.05755},{"country":"IE","name":"Cathedral of Saint Mary and Saint Anne","aliases":["North Cathedral Cork","Saint Mary and Saint Anne Cathedral Cork"],"diocese":"Diocese of Cork and Ross","address":"Cathedral Street, Cork, T23 NX76, Ireland","website":"https://www.corkcathedral.ie/","officialDioceseUrl":"https://corkandross.org/","sourceUrl":"https://www.corkcathedral.ie/","sourceName":"Cathedral of Saint Mary and Saint Anne","sourceAuthority":"Diocese of Cork and Ross","lat":51.90331,"lng":-8.47742},{"country":"GB-NIR","name":"Saint Peter’s Cathedral, Belfast","aliases":["St Peter’s Cathedral Belfast","Saint Peters Cathedral Belfast"],"diocese":"Diocese of Down and Connor","address":"St Peter’s Square, Belfast, BT12 4BU, Northern Ireland","phone":"+44 28 9032 7573","website":"https://www.stpetersbelfast.ie/","officialDioceseUrl":"https://www.downandconnor.org/","sourceUrl":"https://www.stpetersbelfast.ie/","sourceName":"Saint Peter’s Cathedral Parish","sourceAuthority":"Diocese of Down and Connor","lat":54.59804,"lng":-5.95603},{"country":"GB-NIR","name":"Saint Patrick’s Cathedral, Armagh","aliases":["St Patrick’s Cathedral Armagh","Saint Patricks Cathedral Armagh"],"diocese":"Archdiocese of Armagh","address":"41 Cathedral Road, Armagh, BT61 7QX, Northern Ireland","phone":"+44 28 3752 2813","website":"https://www.armagharchdiocese.org/stpatrickscathedral/","officialDioceseUrl":"https://www.armagharchdiocese.org/","sourceUrl":"https://www.armagharchdiocese.org/stpatrickscathedral/","sourceName":"Archdiocese of Armagh","sourceAuthority":"Archdiocese of Armagh","lat":54.35274,"lng":-6.65697},{"country":"GB-NIR","name":"Saint Eugene’s Cathedral, Derry","aliases":["St Eugene’s Cathedral Derry","Saint Eugenes Cathedral Derry"],"diocese":"Diocese of Derry","address":"Francis Street, Derry, BT48 9AP, Northern Ireland","phone":"+44 28 7126 2302","website":"https://www.steugenescathedral.com/","officialDioceseUrl":"https://www.derrydiocese.org/","sourceUrl":"https://www.derrydiocese.org/index.php/contact","sourceName":"Diocese of Derry","sourceAuthority":"Diocese of Derry","lat":54.99912,"lng":-7.32569}]
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
