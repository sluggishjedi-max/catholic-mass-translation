const FIREBASE_CONFIG = Object.freeze({
  apiKey: 'AIzaSyA3yXeo3I3bnhRuUsQT7TymnaDYr32oCUg',
  authDomain: 'ordinary-mass-app.firebaseapp.com',
  projectId: 'ordinary-mass-app',
  storageBucket: 'ordinary-mass-app.firebasestorage.app',
  messagingSenderId: '314851403029',
  appId: '1:314851403029:web:babc9ee9d5f7b5543cf51c'
});

const FIREBASE_UPLOAD_CLIENT = String.raw`(function () {
  'use strict';

  const firebaseConfig = ${JSON.stringify(FIREBASE_CONFIG)};
  const sdkUrls = [
    'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js',
    'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js'
  ];
  let sdkPromise = null;

  function loadScript(url) {
    return new Promise((resolve, reject) => {
      const existing = Array.from(document.scripts).find(script => script.src === url);
      if (existing && existing.dataset.loaded === 'true') return resolve();
      const script = existing || document.createElement('script');
      script.src = url;
      script.async = true;
      script.addEventListener('load', () => {
        script.dataset.loaded = 'true';
        resolve();
      }, { once: true });
      script.addEventListener('error', () => reject(new Error('Firebase SDK를 불러오지 못했습니다. 인터넷 연결을 확인해 주세요.')), { once: true });
      if (!existing) document.head.appendChild(script);
    });
  }

  async function firebaseDb() {
    if (!sdkPromise) {
      sdkPromise = (async () => {
        await loadScript(sdkUrls[0]);
        await loadScript(sdkUrls[1]);
        if (!window.firebase.apps.length) window.firebase.initializeApp(firebaseConfig);
        return window.firebase.firestore();
      })();
    }
    return sdkPromise;
  }

  async function upload(options) {
    const settings = options || {};
    const endpoint = settings.endpoint || '/api/firebase-export';
    const setStatus = typeof settings.setStatus === 'function' ? settings.setStatus : function () {};
    const button = settings.button || null;
    const response = await fetch(endpoint, { cache: 'no-store' });
    const payload = await response.json();
    if (!response.ok || !payload.ok) throw new Error(payload.error || 'Firebase 업로드 데이터를 준비하지 못했습니다.');
    const items = Array.isArray(payload.items) ? payload.items : [];
    if (!items.length) throw new Error(payload.label + ' 업로드 항목이 없습니다.');
    if (!window.confirm(payload.label + ' ' + items.length + '개 항목을 Firebase ' + payload.collectionName + ' 컬렉션에 업로드할까요?')) {
      return { cancelled: true };
    }

    if (button) button.disabled = true;
    setStatus('Firebase 연결 중…');
    try {
      const db = await firebaseDb();
      const chunkSize = 400;
      for (let start = 0; start < items.length; start += chunkSize) {
        const chunk = items.slice(start, start + chunkSize);
        const batch = db.batch();
        chunk.forEach(item => batch.set(db.collection(payload.collectionName).doc(item.docId), item.data));
        await batch.commit();
        setStatus('Firebase 업로드 중… ' + Math.min(start + chunk.length, items.length) + ' / ' + items.length);
      }
      const expectedIds = new Set(items.map(item => item.docId));
      const snapshot = await db.collection(payload.collectionName).get();
      const stale = snapshot.docs.filter(doc => !expectedIds.has(doc.id));
      for (let start = 0; start < stale.length; start += chunkSize) {
        const chunk = stale.slice(start, start + chunkSize);
        const batch = db.batch();
        chunk.forEach(doc => batch.delete(doc.ref));
        await batch.commit();
        setStatus('Firebase 이전 데이터 정리 중… ' + Math.min(start + chunk.length, stale.length) + ' / ' + stale.length);
      }
      setStatus('Firebase 업로드 완료 · 홈페이지 반영 데이터 ' + items.length + '개' +
        (stale.length ? ' · 이전 데이터 ' + stale.length + '개 정리' : ''), 'ok');
      return { cancelled: false, uploaded: items.length, removed: stale.length, collectionName: payload.collectionName };
    } finally {
      if (button) button.disabled = false;
    }
  }

  window.ordoFirebaseUploader = Object.freeze({ upload: upload });
})();`;

function cloneForUpload(value) {
  const clone = JSON.parse(JSON.stringify(value || {}));
  delete clone.__firebaseDocId;
  return clone;
}

function firebaseDocumentId(item, idPrefix, index) {
  const raw = item && (item.__firebaseDocId || item.id) ? (item.__firebaseDocId || item.id) : `${idPrefix}_${index}`;
  return String(raw).replace(/\//gu, '%2F');
}

function buildFirebaseUploadPayload({ collectionName, label, items, idPrefix }) {
  if (!collectionName || !label || !Array.isArray(items) || !idPrefix) {
    throw new Error('Invalid Firebase upload payload configuration');
  }
  const documents = new Map();
  items.forEach((item, index) => {
    const docId = firebaseDocumentId(item, idPrefix, index);
    documents.set(docId, {
      docId,
      data: Object.assign(cloneForUpload(item), { order: (index + 1) * 10 })
    });
  });
  return {
    ok: true,
    projectId: FIREBASE_CONFIG.projectId,
    collectionName,
    label,
    items: Array.from(documents.values())
  };
}

function serveFirebaseUploadClient(res) {
  res.writeHead(200, {
    'content-type': 'application/javascript; charset=utf-8',
    'cache-control': 'no-store'
  });
  res.end(FIREBASE_UPLOAD_CLIENT);
}

module.exports = {
  FIREBASE_CONFIG,
  FIREBASE_UPLOAD_CLIENT,
  buildFirebaseUploadPayload,
  serveFirebaseUploadClient
};
