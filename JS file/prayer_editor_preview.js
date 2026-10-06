// Render drafts with the application's own prayer renderer and stylesheet.
(function connectPrayerEditorPreview(global) {
    'use strict';
    if (!global.ordoPrayerEditorPreview || global.parent === global) return;

    document.body.classList.remove('consent-pending');
    global.addEventListener('message', event => {
        if (event.source !== global.parent || event.origin !== global.location.origin
            || !event.data || event.data.type !== 'ordo:prayer-preview') return;
        const draft = event.data.entry;
        if (!draft || typeof draft !== 'object') return;
        const jurisdiction = String(event.data.jurisdiction || 'KR');
        const registry = structuredClone(event.data.registry || {});
        const module = registry[jurisdiction] || { jurisdiction, language: event.data.language, entries: [] };
        module.entries = [draft];
        registry[jurisdiction] = module;
        // An edited ID keeps the same existing language counterparts in the preview.
        Object.values(registry).forEach(country => {
            (country.entries || []).forEach(entry => { entry.id = draft.id; });
        });
        global.uploadedCountryPrayerData = registry;
        delete global.uploadedPrayerData;
        fallbackPrayerDataByJurisdiction.clear();
        const locationCode = code => code === 'GB-EW' ? 'GB-ENG' : code;
        state.selectedLocationCode = locationCode(jurisdiction);
        state.currentLoc = normalizeSelectableLang(event.data.language, 'KR');
        state.targetLocationCode = locationCode(event.data.targetJurisdiction || 'US');
        state.targetLang = normalizeDistinctTargetLang(event.data.targetLanguage, state.currentLoc);
        state.uiLang = state.currentLoc;
        state.activeTab = 'prayers';
        openPrayerEntryKeys.clear();
        document.getElementById('prayer-category').value = '';
        document.getElementById('prayer-search').value = '';
        renderPrayerPanel();
        const card = document.querySelector('#prayer-results details');
        if (card) {
            // Previewing markup never starts paid translation requests.
            card.removeAttribute('ontoggle');
            card.open = true;
        }
        global.parent.postMessage({ type: 'ordo:prayer-preview-rendered' }, global.location.origin);
    });
    document.addEventListener('click', event => {
        if (event.target.closest('.btn-ai-trans')) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }, true);
    global.parent.postMessage({ type: 'ordo:prayer-preview-ready' }, global.location.origin);
})(window);
