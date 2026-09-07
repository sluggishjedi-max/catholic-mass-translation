'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dataDir = path.join(root, 'JS file', 'bishop_conferences');
const loaderPath = path.join(root, 'JS file', 'bishop_data_loader.js');

function assert(value, message) {
    if (!value) throw new Error(message);
}

function runtime() {
    const context = { URL, console, setTimeout, clearTimeout };
    context.globalThis = context;
    context.document = {
        currentScript: { src: 'https://local.test/JS%20file/bishop_data_loader.js' },
        createElement() { return {}; },
        head: {
            appendChild(script) {
                try {
                    const file = decodeURIComponent(new URL(script.src).pathname.split('/').pop());
                    vm.runInContext(fs.readFileSync(path.join(dataDir, file), 'utf8'), context, { filename: file });
                    script.onload();
                } catch (error) {
                    if (script.onerror) script.onerror(error);
                }
            }
        }
    };
    vm.createContext(context);
    vm.runInContext(fs.readFileSync(loaderPath, 'utf8'), context, { filename: 'bishop_data_loader.js' });
    return context;
}

const gpsCases = [
    ['KR', 37.5665, 126.9780, /Seoul/i],
    ['VN', 10.7769, 106.7009, /Minh/i],
    ['US', 34.0522, -118.2437, /Los Angeles/i],
    ['IE', 53.3498, -6.2603, /Dublin/i],
    ['GB-NIR', 54.5973, -5.9301, /Down and Connor/i],
    ['GB-ENG', 51.5074, -0.1278, /Westminster/i],
    ['GB-WLS', 51.4816, -3.1791, /Cardiff/i],
    ['GB-SCT', 55.9533, -3.1883, /Edinburgh/i],
    ['PH', 14.5995, 120.9842, /Manila/i],
    ['TW', 25.0330, 121.5654, /Taipei/i],
    ['AU', -33.8688, 151.2093, /Sydney/i],
    ['NZ', -36.8509, 174.7645, /Auckland/i],
    ['JP', 35.6762, 139.6503, /T.+ky/i],
    ['IT', 41.9028, 12.4964, /Roma|Rome/i],
    ['PT', 38.7223, -9.1393, /Lisboa|Lisbon/i],
    ['MX', 19.4326, -99.1332, /M.+xico/i],
    ['DE', 52.5200, 13.4050, /Berlin/i],
    ['BR', -23.5505, -46.6333, /S.+o Paulo/i],
    ['VA', 41.9029, 12.4534, /Vatican/i]
];

(async () => {
    const context = runtime();
    const api = context.ordoBishopDataApi;
    const expectedLocations = gpsCases.map(item => item[0]);
    assert(Object.keys(api.conferences).length === 17, 'Expected 17 conference/Holy See modules');
    assert(expectedLocations.every(code => api.locationToConference[code]), 'A supported location is missing from the conference manifest');
    assert(!context.diocesanBishopData, 'Legacy combined bishop directory must not be loaded');

    const first = await api.loadForLocation('KR');
    assert(first && first.id === 'CBCK', 'Lazy CBCK load failed');
    assert(api._dataByConference.size === 1, 'Lazy loader fetched more than the selected conference');

    const results = [];
    for (const [location, lat, lon, expectedName] of gpsCases) {
        const resolved = await api.resolveForCoordinates(lat, lon, location);
        assert(resolved, `No GPS diocese returned for ${location}`);
        assert(expectedName.test(resolved.diocese), `Unexpected GPS diocese for ${location}: ${resolved.diocese}`);
        assert(resolved.ordinary && resolved.ordinary.en, `No current ordinary returned for ${location}: ${resolved.diocese}`);
        results.push({ location, diocese: resolved.diocese, bishop: resolved.ordinary.en });
    }

    assert(api._dataByConference.size === 17, 'Not every conference module was loaded by the regional GPS checks');
    let dioceses = 0;
    let polygons = 0;
    let points = 0;
    const seen = new Set();
    for (const [conferenceId, payload] of api._dataByConference.entries()) {
        assert(payload.id === conferenceId && payload.updatedAt, `Invalid module metadata: ${conferenceId}`);
        assert(Array.isArray(payload.sources) && payload.sources.length >= 2, `Missing sources: ${conferenceId}`);
        for (const diocese of payload.dioceses) {
            const id = `${conferenceId}:${diocese.key}`;
            assert(!seen.has(id), `Duplicate jurisdiction key: ${id}`);
            seen.add(id);
            assert(diocese.name && Array.isArray(diocese.sourceUrls), `Invalid jurisdiction record: ${id}`);
            assert(['active', 'vacant'].includes(diocese.status), `Invalid ordinary status: ${id}`);
            assert((diocese.status === 'active') === !!diocese.ordinary, `Ordinary/status mismatch: ${id}`);
            assert(diocese.territory && Array.isArray(diocese.territory.center), `Missing GPS territory: ${id}`);
            if (diocese.territory.kind === 'polygon') {
                polygons += 1;
                assert(Array.isArray(diocese.territory.bounds) && Array.isArray(diocese.territory.rings) && diocese.territory.rings.length, `Invalid polygon: ${id}`);
            } else {
                points += 1;
                assert(diocese.territory.kind === 'point' && diocese.territory.approximate, `Invalid fallback territory: ${id}`);
            }
            dioceses += 1;
        }
    }
    assert(dioceses >= 1000, `Jurisdiction coverage is unexpectedly small: ${dioceses}`);
    assert(polygons >= 1000, `Polygon coverage is unexpectedly small: ${polygons}`);
    assert(points > 0, 'Expected explicit point fallbacks for post-snapshot jurisdictions');

    const berlin = await api.contextForDiocese('Archdiocese of Berlin', 'DE');
    assert(berlin && berlin.ordinary && berlin.ordinary.en, 'Diocese-name lookup failed after lazy loading');
    console.log(JSON.stringify({ conferences: api._dataByConference.size, dioceses, polygons, pointFallbacks: points, gpsCases: results }, null, 2));
})().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
