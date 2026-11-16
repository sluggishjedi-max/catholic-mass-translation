# Daily source audit: 2026-11-16 through 2026-11-30

Release: `V31.2-20261117-1`; server parser: `v31.2-20261117-1`.

All 300 date/provider combinations across 18 countries and 20 source profiles were examined. 197 dated day records are published; 103 are partial or unavailable. Availability is not treated as a parser pass.

The same shared parser is packaged into Firebase collection. Every discovered publisher Mass is collected separately; raw responses and version history are retained. Edited publications are protected. Ordinary Mass content remains controlled by the editable country datasets.

Equivalent passages share an option. A different regional passage for the same observance remains a language-specific option. A different observance or incompatible national rank does not supply the original calendar prayers.

## Verification

- 26 automated checks passed, including server collection/storage, native variants, literal editor data, and citation handling.
- 438,400 country-calendar comparisons over 1,096 dates passed.
- Real browser checks passed at 1280, 390, and 320 pixels: 18 cases and 123 stored text options per width.
- Stored-data replay: 0 parser errors, 0 provided same-observance Scripture sections lost, and 0 duplicated speaker prefixes.
- 89 collected revisions were saved (88 complete; one partial source retained without publication).

## Availability

| Country | Profiles/dates | Published | Partial | Unavailable |
| --- | ---: | ---: | ---: | ---: |
| KR | 15 | 15 | 0 | 0 |
| VN | 45 | 43 | 0 | 2 |
| US | 15 | 15 | 0 | 0 |
| IE | 15 | 3 | 12 | 0 |
| GB-ENG | 15 | 6 | 9 | 0 |
| GB-WLS | 15 | 6 | 9 | 0 |
| GB-SCT | 15 | 6 | 9 | 0 |
| PH | 15 | 15 | 0 | 0 |
| TW | 15 | 15 | 0 | 0 |
| AU | 15 | 3 | 12 | 0 |
| NZ | 15 | 3 | 12 | 0 |
| JP | 15 | 15 | 0 | 0 |
| IT | 15 | 15 | 0 | 0 |
| PT | 15 | 0 | 0 | 15 |
| MX | 15 | 6 | 0 | 9 |
| DE | 15 | 15 | 0 | 0 |
| BR | 15 | 15 | 0 | 0 |
| VA | 15 | 1 | 0 | 14 |

## Source limitations

- PT: The official lectionary index is blocked with HTTP 403; no text was fabricated.
- MX: The dated CEM rows for November 22-29 were not available; November 30 returned HTTP 429. CEM also prints week XXXII for some dated week XXXIII rows; the printed title and actual body are retained.
- VA: iBreviary exposes its current Roman day only; future dated lectionaries are not published from a current-day substitute.
- IE, GB-ENG, GB-WLS, GB-SCT, AU, NZ: Universalis future dates outside its public window have incomplete readings. Partial collections remain stored and unpublished.
- VN / hanoi: No complete matching Hanoi source was resolved. November 29 redirects to a Sunday cycle A article although cycle B is required. KPV remains separately available.

The JSON companion contains all 300 individual results. A missing original-calendar prayer may be intentional when the native source supplies another observance or a higher national rank; an alternate weekday Mass is not used to fill a saint memorial prayer.
