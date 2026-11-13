// Runs only inside the local editor's frame, after the unmodified app runtime.
(() => {
  'use strict';
  if (window.parent === window || !window.ordoPrayerEditorPreview) return;
  const preview = document.getElementById('hymn-editor-preview');
  document.body.classList.remove('consent-pending', 'startup-loading');
  let lastHeight = 0;
  function notifyHeight() {
    const height = Math.ceil(preview.getBoundingClientRect().height + 24);
    if (height === lastHeight) return;
    lastHeight = height;
    parent.postMessage({ type:'ordo:hymn-preview-rendered', height }, location.origin);
  }
  window.addEventListener('message', event => {
    if (event.source !== parent || event.origin !== location.origin || event.data?.type !== 'ordo:hymn-preview') return;
    const draft = event.data.entry;
    if (!draft || typeof draft !== 'object') return;
    window.countryHymnData = {};
    window.uploadedCountryHymnData = {};
    window.uploadedHymnData = [draft];
    const entry = getUploadedHymnData()[0];
    if (!entry) { preview.replaceChildren(); notifyHeight(); return; }
    state.currentLoc = entry.country;
    state.targetLang = normalizeDistinctTargetLang(event.data.targetLanguage || 'EN', entry.country);
    state.uiLang = 'KR';
    state.layoutStacked = false;
    preview.className = 'lang-' + entry.country;
    preview.innerHTML = renderHymnDetail(entry, entry.country);
    notifyHeight();
  });
  // Retain the real app button's appearance while preventing paid requests.
  document.addEventListener('click', event => {
    if (event.target.closest('.btn-ai-trans')) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, true);
  new ResizeObserver(notifyHeight).observe(preview);
  parent.postMessage({ type:'ordo:hymn-preview-ready' }, location.origin);
})();
