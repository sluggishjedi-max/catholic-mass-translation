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

  async function readCollection(db, name, jurisdiction) {
    const snapshot = await db.collection(name).where('jurisdiction', '==', jurisdiction).get();
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

  const collections = {
    mass:['order_of_mass','country_mass_metadata','country_special_liturgies'],
    prayers:['prayer_data'], hymns:['hymn_data']
  };
  const requests = new Map();
  const complete = new Set();
  const counts = {prayerCount:0,hymnCount:0,massCount:0,countryMetadataCount:0,specialLiturgyCount:0};
  const cacheAge = 10 * 60 * 1000;
  let cacheDb;
  function openCache() {
    if (!global.indexedDB) return Promise.resolve(null);
    if (!cacheDb) cacheDb = new Promise(resolve => {
      const request = indexedDB.open('ordo-published-country-data-v1',1);
      request.onupgradeneeded = () => request.result.createObjectStore('scopes');
      request.onsuccess = () => resolve(request.result);
      request.onerror = request.onblocked = () => resolve(null);
    });
    return cacheDb;
  }
  async function cached(key, value) {
    try {
      const database = await openCache();
      if (!database) return null;
      return await new Promise(resolve => {
        const transaction = database.transaction('scopes',value ? 'readwrite':'readonly');
        const request = value ? transaction.objectStore('scopes').put(value,key) : transaction.objectStore('scopes').get(key);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => resolve(null);
      });
    } catch { return null; }
  }
  function publish(name, items) {
    if (!items.length) return;
    const definition = {
      prayer_data:['uploadedCountryPrayerData','entries','prayerCount'],
      hymn_data:['uploadedCountryHymnData','entries','hymnCount'],
      order_of_mass:['uploadedCountryMassData','ordinary','massCount'],
      country_mass_metadata:['uploadedCountryMassMetadata',null,'countryMetadataCount'],
      country_special_liturgies:['uploadedCountrySpecialLiturgies',null,'specialLiturgyCount']
    }[name];
    const [registryName, field, countName] = definition;
    const registry = field ? groupByJurisdiction(items,field) : metadataByJurisdiction(items);
    global[registryName] = Object.assign(global[registryName] || {},registry);
    counts[countName] = field
      ? Object.values(global[registryName]).reduce((sum,module)=>sum+(module[field] || []).length,0)
      : Object.keys(global[registryName]).length;
    if (name === 'hymn_data') global.uploadedHymnData = Object.values(global[registryName]).flatMap(module=>module.entries || []);
  }
  function database() {
    if (!global.firebase?.initializeApp || !global.firebase.firestore) throw Error('Firebase SDK is unavailable.');
    if (!global.firebase.apps.length) global.firebase.initializeApp(firebaseConfig);
    return global.firebase.firestore();
  }
  async function loadScope(name, code, force) {
    const key = name+':'+code;
    if (!force && complete.has(key)) return;
    if (requests.has(key)) return requests.get(key);
    const request = (async () => {
      const previous = await cached(key);
      if (!force && previous && Date.now()-previous.savedAt < cacheAge) {
        publish(name,previous.items); complete.add(key); return;
      }
      let timer;
      try {
        const items = await Promise.race([
          readCollection(database(),name,code),
          new Promise((_,reject)=>{timer=setTimeout(()=>reject(Error('Firebase country data timed out')),8000);})
        ]);
        publish(name,items);
        complete.add(key);
        void cached(key,{savedAt:Date.now(),items});
      } catch (error) {
        if (previous) { publish(name,previous.items); complete.add(key); }
        else console.warn('Firebase country data unavailable:',name,code,error.message);
      } finally { clearTimeout(timer); }
    })().finally(()=>requests.delete(key));
    requests.set(key,request);
    return request;
  }
  async function ensure(kind,codes,options = {}) {
    await Promise.all([...new Set(codes.filter(Boolean))].flatMap(code=>(collections[kind] || []).map(name=>loadScope(name,code,options.force))));
    if (kind === 'mass' && codes.includes('GB-WLS') && !global.uploadedCountryMassData?.['GB-WLS'] && global.uploadedCountryMassData?.['GB-ENG']) {
      global.uploadedCountryMassData['GB-WLS'] = Object.assign({},global.uploadedCountryMassData['GB-ENG'],{jurisdiction:'GB-WLS'});
    }
    const detail = Object.freeze({...counts,loadedAt:new Date().toISOString(),kind,jurisdictions:codes.slice()});
    global.ordoFirebaseDataStatus = detail;
    global.dispatchEvent(new CustomEvent('ordo:firebase-data-ready',{detail}));
    return detail;
  }
  // Initialize identity for the existing admin flow, without downloading datasets.
  try { database(); } catch { /* The app can still open bundled auxiliary data. */ }
  global.ordoFirebaseDataApi = Object.freeze({ensure});
  global.ordoFirebaseDataReady = Promise.resolve({...counts,deferred:true});
})(globalThis);
