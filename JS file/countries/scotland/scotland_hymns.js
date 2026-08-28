// Scotland hymn placeholder.
(function registerScotlandHymns(global) {
  'use strict';
  global.countryHymnData = global.countryHymnData || {};
  global.countryHymnData['GB-SCT'] = Object.freeze({
    schemaVersion: 1,
    jurisdiction: 'GB-SCT',
    status: 'under-development',
    statusLabels: Object.freeze({ KR: '(제작중)', EN: '(Under development)' }),
    entries: Object.freeze([])
  });
})(globalThis);
