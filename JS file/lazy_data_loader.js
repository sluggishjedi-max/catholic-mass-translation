(function(global) {
  'use strict';
  const manifest = global.ordoLazyDataManifest || {};
  const base = new URL('./', document.currentScript.src);
  const requests = new Map();
  const loaded = new Set();
  const failures = new Map();
  function fileFor(kind, code) { return (manifest[kind] || {})[code] || ''; }
  function load(file, force) {
    if (!file) return Promise.resolve();
    if (!force && loaded.has(file)) return Promise.resolve();
    if (requests.has(file)) return requests.get(file);
    failures.delete(file);
    const request = new Promise((resolve,reject) => {
      const script = document.createElement('script');
      script.async = true;
      const url = new URL(file,base);
      if (force) url.searchParams.set('refresh',String(Date.now()));
      script.src = url.href;
      const timer = setTimeout(()=>finish(Error('Data download timed out')),20000);
      function finish(error) {
        clearTimeout(timer); script.onload = script.onerror = null;
        script.remove();
        if (error) { failures.set(file,error); reject(error); }
        else { loaded.add(file); resolve(); }
      }
      script.onload = ()=>finish();
      script.onerror = ()=>finish(Error('Data download failed'));
      document.head.appendChild(script);
    }).finally(()=>requests.delete(file));
    requests.set(file,request);
    return request;
  }
  async function ensure(kind, codes, options = {}) {
    await Promise.all([...new Set(codes.map(code=>fileFor(kind,code)).filter(Boolean))].map(file=>load(file,options.force)));
    if (kind === 'hymns') {
      global.hymnData = Object.values(global.countryHymnData || {}).flatMap(module=>module.entries || []);
      global.ordoHymnData = global.hymnData;
    }
  }
  function status(kind,codes) {
    const files = codes.map(code=>fileFor(kind,code)).filter(Boolean);
    return {ready:files.every(file=>loaded.has(file)),error:files.map(file=>failures.get(file)).find(Boolean)};
  }
  global.ordoDataLoader = Object.freeze({ensure,status,manifest});
})(globalThis);
