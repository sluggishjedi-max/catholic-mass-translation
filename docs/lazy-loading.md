# Country and feature data loading

The V30 entrypoints share `JS file/app_v30.js`. V30 loads auxiliary data by
country when its tab is opened, rather than eagerly executing every country's
prayer, hymn and church directory. The generated manifest discovers countries
from their canonical files, including newly added modules.

- Prayer panels load the selected country, translation country and Latin source.
- Hymn panels load the country chosen by the hymn selector.
- Church panels load the selected country and then rebuild the local search index.
- Mass loads the selected countries' special liturgies and selected languages'
  local Missal prayers. The Traditional Chinese archive loads only for Taiwan.
- The ordinary Mass still comes from Firebase. Queries use `jurisdiction`, with
  Korean structural rows and any required shared English reference.
- Firestore snapshots are cached per collection/country in IndexedDB for ten
  minutes. An unavailable server can fall back to its previously saved snapshot.
- Pull to refresh reloads the current feature/countries and bypasses that cache.
- Reopening a tab coalesces downloads; failed downloads offer a retry action.
  A late response for another country does not change the selected view.

The fixed script list is approximately 1.89 MB before compression. Including the
default KR/US special liturgies and KR/EN local Missal chunks gives approximately
3.65 MB of scripts, compared with 55.63 MB before this change. These figures exclude
Firebase SDKs and document responses, images and external daily-source requests.
They are byte budgets, not promises about download or render time.

## Updating source data

The existing country files and full generated Missal/special-liturgy registries
remain canonical for their editors. After editing those sources, run:

```text
npm run data:lazy:build
npm run data:lazy:check
npm run browser:check:lazy-data
```

Publish the regenerated `JS file/lazy/`, manifest and prayer API along with the
changed canonical files. Editors discover their sources from the country folders
and do not depend on eager `<script>` tags in the homepage. The prayer preview
loads the shared prayer API without initiating Firebase or corpus downloads.

## Server collection within the existing deployment

The `ordinary-mass-app` project already has a native default Firestore database
in `asia-northeast3`. Its existing functions run in `us-central1`. The Storage
buckets currently present are deployment-source buckets, not an app content
bucket. A new Firebase Storage bucket is not necessary for daily JSON records.

A subsequent server collection implementation can use the existing Functions
project to fetch and validate each source, save a result in Firestore and return
only the selected record to the Pages client. Use country, source/profile,
liturgical date, Mass choice and parser revision in the cache identity. Store the
original source URL, retrieval time and validation state. Apply a refresh policy
and request coalescing so concurrent visitors do not all refetch the same source.
Scheduled collection additionally needs Cloud Scheduler; its API was not enabled
at the time of this inspection. Do not use the function deployment buckets as an
application cache. This release implements client loading and country-scoped
Firestore reads; it does not create a scheduled collector or a new storage bucket.

## Validation

The dedicated lazy-data browser check covers both entrypoints, desktop/mobile,
country-scoped queries, deferred auxiliary and Taiwan downloads, tab reuse,
country changes while downloads are pending, retry and persistent cache reuse.
Existing startup/editor-preview, multilingual prayer rendering, reading-frame,
V29 special-liturgy and editor integration checks also cover the changed paths.

V30 also keeps the primary country's seasonal liturgy title when a supplementary
source supplies a different local memorial title. The source title remains in
provenance; it cannot replace the translated primary title in the main header or
floating banner. This rule applies to every language and to either load order.
