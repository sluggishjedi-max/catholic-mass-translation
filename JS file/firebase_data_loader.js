// Loads editor-published Firestore data before the application runtime chooses its data sources.
(function loadPublishedEditorData(global) {
  'use strict';

  const firebaseConfig = Object.freeze({
    apiKey: 'AIzaSyA3yXeo3I3bnhRuUsQT7TymnaDYr32oCUg',
    authDomain: 'ordinary-mass-app.firebaseapp.com',
    projectId: 'ordinary-mass-app',
    storageBucket: 'ordinary-mass-app.firebasestorage.app',
    messagingSenderId: '314851403029',
    appId: '1:314851403029:web:babc9ee9d5f7b5543cf51c'
  });
  const LANGUAGE_BY_JURISDICTION = Object.freeze({
    KR:'KR', VN:'VN', US:'EN', JP:'JP', VA:'LA', IE:'EN', 'GB-EW':'EN',
    'GB-ENG':'EN', 'GB-WLS':'EN', 'GB-SCT':'EN', PH:'EN', TW:'ZH', AU:'EN',
    NZ:'EN', IT:'IT', PT:'PT', MX:'ES', DE:'DE', BR:'PT'
  });

  async function readCollection(db, name) {
    const snapshot = await db.collection(name).get();
    return snapshot.docs.map(doc => {
      const data = Object.assign({}, doc.data() || {});
      data.__firebaseOrder = Number(data.order || 0);
      delete data.order;
      return data;
    }).sort((left, right) => left.__firebaseOrder - right.__firebaseOrder)
      .map(item => {
        delete item.__firebaseOrder;
        return item;
      });
  }

  function groupByJurisdiction(items, field) {
    const registry = {};
    items.forEach(item => {
      const jurisdiction = String(item && item.jurisdiction || '').trim().toUpperCase();
      if (!jurisdiction) return;
      if (!registry[jurisdiction]) {
        registry[jurisdiction] = {
          jurisdiction,
          language: LANGUAGE_BY_JURISDICTION[jurisdiction] || '',
          ordinaryLanguage: LANGUAGE_BY_JURISDICTION[jurisdiction] || '',
          status: 'available',
          [field]: []
        };
      }
      const entry = Object.assign({}, item);
      delete entry.jurisdiction;
      registry[jurisdiction][field].push(entry);
    });
    return registry;
  }

  function metadataByJurisdiction(items) {
    return items.reduce((registry, item) => {
      const jurisdiction = String(item && item.jurisdiction || '').trim().toUpperCase();
      if (!jurisdiction) return registry;
      const metadata = Object.assign({}, item);
      delete metadata.jurisdiction;
      registry[jurisdiction] = Object.assign({ jurisdiction }, metadata);
      return registry;
    }, {});
  }

  async function load() {
    if (!global.firebase || !global.firebase.initializeApp || !global.firebase.firestore) {
      throw new Error('Firebase SDK is unavailable.');
    }
    if (!global.firebase.apps.length) global.firebase.initializeApp(firebaseConfig);
    const db = global.firebase.firestore();
    const names = ['prayer_data', 'hymn_data', 'order_of_mass', 'country_mass_metadata', 'country_special_liturgies'];
    const settled = await Promise.allSettled(names.map(name => readCollection(db, name)));
    const output = {};
    settled.forEach((result, index) => {
      const name = names[index];
      if (result.status === 'fulfilled') output[name] = result.value;
      else console.warn('Firebase published data could not be loaded:', name, result.reason);
    });

    const prayers = output.prayer_data || [];
    const hymns = output.hymn_data || [];
    const mass = output.order_of_mass || [];
    const countryMetadata = output.country_mass_metadata || [];
    const specialLiturgies = output.country_special_liturgies || [];
    if (specialLiturgies.length) global.uploadedCountrySpecialLiturgies = metadataByJurisdiction(specialLiturgies);
    if (prayers.length) {
      const registry = groupByJurisdiction(prayers, 'entries');
      if (Object.keys(registry).length) global.uploadedCountryPrayerData = registry;
      else global.uploadedPrayerData = prayers;
    }
    if (hymns.length) {
      global.uploadedHymnData = hymns;
      const registry = groupByJurisdiction(hymns, 'entries');
      if (Object.keys(registry).length) global.uploadedCountryHymnData = registry;
    }
    if (mass.length) {
      const registry = groupByJurisdiction(mass, 'ordinary');
      if (Object.keys(registry).length) global.uploadedCountryMassData = registry;
      else global.uploadedMassData = mass;
    }
    if (countryMetadata.length) {
      global.uploadedCountryMassMetadata = metadataByJurisdiction(countryMetadata);
    }

    const detail = {
      prayerCount: prayers.length,
      hymnCount: hymns.length,
      massCount: mass.length,
      countryMetadataCount: countryMetadata.length,
      specialLiturgyCount: specialLiturgies.length,
      loadedAt: new Date().toISOString()
    };
    global.ordoFirebaseDataStatus = Object.freeze(detail);
    global.dispatchEvent(new CustomEvent('ordo:firebase-data-ready', { detail }));
    return detail;
  }

  global.ordoFirebaseDataReady = load().catch(error => {
    console.warn('Firebase published data is unavailable; bundled data will be used.', error);
    return { prayerCount:0, hymnCount:0, massCount:0, countryMetadataCount:0, error:error.message || String(error) };
  });
})(globalThis);
