# V31 server collection and daily Mass editor

The public app remains on GitHub Pages. `dailyMassData` reads the published
country/date/source record from the existing Seoul Firestore database. The app
falls back to its existing source adapters while a record is missing. A bounded,
deduplicated on-demand collection request can fill missing dates.

## Storage and history

Day IDs use the Korean country name and ISO liturgical date, for example:

```text
daily_mass/베트남_2026-11-10/records/hanoi__day
daily_mass/베트남_2026-11-10/records/ktcg_south__day
daily_mass/베트남_2026-11-10/records/ktcg_north__day
```

The country/date document groups sources and Mass choices. Each source/choice
has its own ascending version number and immutable `versions/v000001` documents.
The editor displays these as v1, v2, etc. Responses are retained as gzip/base64
chunks below the version, with source URLs. They are downloadable by an
administrator. Earlier versions are not deleted.

Example: collection v1, edit v2, changed collection v3. An unchanged collection
does not create a version merely because v2 differs from v1. A changed collection
is compared with the last collection, creates v3, and leaves edited v2 published.
The editor checks for updates and asks:

> 더 높은 버전의 파일이 있습니다. 해당 파일을 불러올까요?

Before loading another version, the editor saves the in-progress draft locally.
Declining the prompt keeps that draft open. Loading v3 does not publish it.
Saving edits or explicitly applying a selected version appends a new edited
version and updates the published pointer. Saves include an expected latest
version; concurrent changes produce a conflict instead of overwriting history.

The public app cannot write the new collections or read private version/raw/job
documents directly. The admin API validates a verified Google identity against
the existing `ADMIN_REVIEW_EMAILS` allowlist. Original editor identities remain
private. The old data editors' collection permissions are preserved.

## Sources

`tools/build-server-daily-runtime.js` packages the V31 browser parsers and data for
server execution with jsdom; it does not maintain a second parser implementation.
The generated package is ignored by Git and rebuilt before Firebase deployment.
It is included in the deployed functions bundle. Crawlers do not invoke Gemini.

Vietnam is collected independently from Hanoi and KTCG, including KTCG's north
and south profiles. The current and legacy KTCG JSON are compared by antiphons,
reading/Gospel references and text. Verse-number markup, punctuation and repeated
Psalm refrains are normalized without ignoring wording changes. When equal,
the legacy data is selected and the comparison is recorded. Different content
uses the current source.

The current site limits guest date access. For future southern-calendar dates
where the legacy endpoint is public, a verified same-day sample can establish
source equivalence; metadata explicitly labels this as sample-based and not a
per-date comparison. The northern calendar is not inferred from that sample.
Unpublished or unverifiable sources are recorded as unavailable, retaining the
last good published version. The editor exposes source/comparison metadata.

## Scheduling and operation

`scheduleDailyMassCollection` runs at 04:00 Asia/Seoul on the 10th, 20th and 30th of
each month and queues 30 dates, including the execution date. Calendar months
without the 30th have no 30th execution. The existing 18 country configurations
produce 600 source tasks per full run, before each task enumerates Mass choices.

`collectDailyMassTask` uses Cloud Tasks with at most two concurrent workers and
bounded retries. Country/date/provider jobs are idempotent for each scheduled
run. Progress and unavailable sources are retained in job/run documents. The
editor can request a selected country's date or 30-day recollection.

Opening a missing date in the verified administrator app or editor automatically
requests that country's date, waits for its collection job, and loads the saved
server version. Vietnam still queues both providers and the two KTCG profiles.
These requests use a separate single-worker on-demand queue so a 30-day scheduled
batch does not hold them up. The editor shows elapsed waiting time and can stop
waiting while allowing the server job to finish. Unavailable source dates show
the reason after the attempt; they are not presented as successful downloads.

All new functions use `asia-northeast3`, beside Firestore. Existing functions keep
their existing region and purpose. No Firebase Storage bucket is needed.

## Validation and deployment

```text
npm run daily:server:build
npm run daily:server:check
node tools/test-daily-queue.js
npm run browser:check:daily-editor
node tools/browser-check-daily-server.js
npm run browser:check:v31
```

Deploy configured functions, Firestore rules and Firebase Hosting, then publish
the scoped V31 files to the existing main branch. Confirm the Scheduler job,
Cloud Tasks queue and worker IAM, run an initial collection, and verify public
cached records and unauthorized admin rejection. Do not commit credentials or
the temporary cloud-audit helpers.
