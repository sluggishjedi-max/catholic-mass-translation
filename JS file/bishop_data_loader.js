(function (global) {
    'use strict';

    const CONFERENCES = {
        CBCK: { file: 'cbck.js', locations: ['KR'] },
        CBCV: { file: 'cbcv.js', locations: ['VN'] },
        USCCB: { file: 'usccb.js', locations: ['US'] },
        ICBC: { file: 'icbc.js', locations: ['IE', 'GB-NIR'] },
        CBCEW: { file: 'cbcew.js', locations: ['GB-ENG', 'GB-WLS'] },
        BCOS: { file: 'bcos.js', locations: ['GB-SCT'] },
        CBCP: { file: 'cbcp.js', locations: ['PH'] },
        CRBC: { file: 'crbc.js', locations: ['TW'] },
        ACBC: { file: 'acbc.js', locations: ['AU'] },
        NZCBC: { file: 'nzcbc.js', locations: ['NZ'] },
        CBCJ: { file: 'cbcj.js', locations: ['JP'] },
        CEI: { file: 'cei.js', locations: ['IT'] },
        CEP: { file: 'cep.js', locations: ['PT'] },
        CEM: { file: 'cem.js', locations: ['MX'] },
        DBK: { file: 'dbk.js', locations: ['DE'] },
        CNBB: { file: 'cnbb.js', locations: ['BR'] },
        HOLY_SEE: { file: 'holy_see.js', locations: ['VA'] }
    };
    const LOCATION_TO_CONFERENCE = Object.keys(CONFERENCES).reduce((map, conferenceId) => {
        CONFERENCES[conferenceId].locations.forEach(location => { map[location] = conferenceId; });
        return map;
    }, {});
    const dataByConference = new Map();
    const loadPromises = new Map();
    const currentScriptUrl = document.currentScript && document.currentScript.src;
    const baseUrl = currentScriptUrl
        ? new URL('bishop_conferences/', currentScriptUrl).href
        : 'JS%20file/bishop_conferences/';

    function normalize(value) {
        return String(value || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\b(?:the\s+)?(?:roman\s+catholic\s+)?(?:metropolitan\s+)?(?:arch)?diocese\s+of\b/gi, '')
            .replace(/\b(?:archdiocese|diocese|tong giao phan|giao phan)\b/gi, '')
            .replace(/[^\p{L}\p{N}]+/gu, '')
            .toLowerCase();
    }

    function register(payload) {
        if (!payload || !payload.id || !Array.isArray(payload.dioceses)) return;
        dataByConference.set(payload.id, payload);
    }

    function loadConference(conferenceId) {
        if (dataByConference.has(conferenceId)) return Promise.resolve(dataByConference.get(conferenceId));
        if (!CONFERENCES[conferenceId]) return Promise.resolve(null);
        if (loadPromises.has(conferenceId)) return loadPromises.get(conferenceId);
        const promise = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.async = true;
            script.src = new URL(CONFERENCES[conferenceId].file, baseUrl).href;
            script.onload = () => resolve(dataByConference.get(conferenceId) || null);
            script.onerror = () => reject(new Error(`Failed to load bishops conference data: ${conferenceId}`));
            document.head.appendChild(script);
        }).catch(error => {
            loadPromises.delete(conferenceId);
            throw error;
        });
        loadPromises.set(conferenceId, promise);
        return promise;
    }

    function loadForLocation(locationCode) {
        return loadConference(LOCATION_TO_CONFERENCE[String(locationCode || '').toUpperCase()]);
    }

    function matchesLocation(diocese, locationCode) {
        if (!locationCode) return true;
        const allowed = Array.isArray(diocese.locations) ? diocese.locations : [];
        return !allowed.length || allowed.includes(locationCode);
    }

    function isArchdioceseRecord(diocese) {
        const labels = [diocese && diocese.name].concat(diocese && diocese.aliases || []).join(' ');
        return /\barchdiocese\b|\barcidiocesi\b|\barquidiocese\b|\barquidiócesis\b|\berzbistum\b|tổng\s+giáo\s+phận|대교구|大司教区|總教區/iu.test(labels);
    }

    function contextForRecord(diocese, conference) {
        if (!diocese) return null;
        return {
            diocese: diocese.name,
            ordinary: diocese.ordinary || null,
            auxiliaries: Array.isArray(diocese.auxiliaries) ? diocese.auxiliaries : [],
            collaboratorSummary: !!diocese.collaboratorSummary,
            isArchdiocese: isArchdioceseRecord(diocese),
            sourceUrls: Array.isArray(diocese.sourceUrls) ? diocese.sourceUrls : [],
            conference: conference ? { id: conference.id, name: conference.name } : null
        };
    }

    function findByName(dioceseName, locationCode) {
        const conferenceId = LOCATION_TO_CONFERENCE[String(locationCode || '').toUpperCase()];
        const conferences = conferenceId && dataByConference.has(conferenceId)
            ? [dataByConference.get(conferenceId)]
            : Array.from(dataByConference.values());
        const wanted = normalize(dioceseName);
        if (!wanted) return null;
        for (const conference of conferences) {
            const record = conference.dioceses.find(diocese => {
                if (!matchesLocation(diocese, locationCode)) return false;
                return [diocese.name].concat(diocese.aliases || []).some(alias => normalize(alias) === wanted);
            });
            if (record) return contextForRecord(record, conference);
        }
        return null;
    }

    async function contextForDiocese(dioceseName, locationCode) {
        await loadForLocation(locationCode);
        return findByName(dioceseName, locationCode);
    }

    function pointInRing(lon, lat, ring) {
        let inside = false;
        for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
            const xi = Number(ring[i][0]);
            const yi = Number(ring[i][1]);
            const xj = Number(ring[j][0]);
            const yj = Number(ring[j][1]);
            if ((yi > lat) !== (yj > lat) && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
        }
        return inside;
    }

    function pointInTerritory(lon, lat, territory) {
        if (!territory || territory.kind !== 'polygon' || !Array.isArray(territory.rings)) return false;
        const bounds = territory.bounds;
        if (bounds && (lon < bounds[0] || lat < bounds[1] || lon > bounds[2] || lat > bounds[3])) return false;
        return territory.rings.reduce((inside, ring) => Array.isArray(ring) && ring.length > 2 && pointInRing(lon, lat, ring) ? !inside : inside, false);
    }

    function haversineKm(lat1, lon1, lat2, lon2) {
        const radians = degrees => degrees * Math.PI / 180;
        const dLat = radians(lat2 - lat1);
        const dLon = radians(lon2 - lon1);
        const a = Math.sin(dLat / 2) ** 2 + Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * Math.sin(dLon / 2) ** 2;
        return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    async function resolveForCoordinates(lat, lon, locationCode) {
        const latitude = Number(lat);
        const longitude = Number(lon);
        if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
        const conference = await loadForLocation(locationCode);
        if (!conference) return null;
        const candidates = conference.dioceses.filter(diocese => matchesLocation(diocese, locationCode));
        const exact = candidates
            .filter(diocese => pointInTerritory(longitude, latitude, diocese.territory))
            .sort((a, b) => Number(a.territory.areaSqKm || Infinity) - Number(b.territory.areaSqKm || Infinity))[0];
        if (exact) return contextForRecord(exact, conference);

        const nearest = candidates
            .filter(diocese => diocese.territory && Array.isArray(diocese.territory.center))
            .map(diocese => ({
                diocese,
                distance: haversineKm(latitude, longitude, diocese.territory.center[1], diocese.territory.center[0])
            }))
            .sort((a, b) => a.distance - b.distance)[0];
        return nearest ? contextForRecord(nearest.diocese, conference) : null;
    }

    const api = {
        conferences: CONFERENCES,
        locationToConference: LOCATION_TO_CONFERENCE,
        register,
        loadConference,
        loadForLocation,
        contextForDiocese,
        resolveForCoordinates,
        _findByName: findByName,
        _dataByConference: dataByConference
    };
    global.ordoBishopDataApi = api;
    (global.pendingBishopConferenceData || []).forEach(register);
    delete global.pendingBishopConferenceData;
})(globalThis);
