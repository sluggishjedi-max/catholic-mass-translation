# 전례 시편 번호 비교 (2026-10-24)

공통 엔진 `JS file/bible/citation.js`는 원문 표기는 보존하고 비교할 때만 히브리어 장절로 정규화한다.
`122(121)`과 `121(122)`처럼 두 번호가 명시되면 그 순서가 언어 기본값보다 우선한다.
괄호 번호를 별개의 히브리어 시편으로도 비교하던 방식은 사용하지 않는다.

| 언어 | 한 번호만 있는 전례 출처의 기본 체계 | 표기 예 |
|---|---|---|
| 한국어 KR | 히브리어 | `시편 122(121),1-2.3-4ㄱㄴ.4ㄷㄹ-5` |
| 베트남어 VN | 그리스어 | `Tv 121,1-2.3-4a.4b-5 (Đ. x. c.1)` |
| 영어 EN | 히브리어 (USCCB); Universalis의 이중 번호는 순서 판독 | `Psalm 122:1-2, 3-4ab, 4cd-5` |
| 독일어 DE | 히브리어 | `Ps 122 (121),1–2.3–4ab.4cd–5 (Kv: vgl. 1)` |
| 일본어 JP | 히브리어 | `詩編122・1+2、3+4ab` |
| 중국어 번체 ZH | 그리스어 | `詠一二一1-2,3-4ab,4cd-5` |
| 이탈리아어 IT | 그리스어 | `Sal 121 (122),1-2.3-4ab.4cd-5` |
| 포르투갈어 PT | 그리스어 | `Salmo 121 (122),1-2.3-4ab.4cd-5` |
| 스페인어 ES | 그리스어 | `Sal 121,1-2.3-4ab.4cd-5` |
| 라틴어 LA | 그리스어 (iBreviary 전례 독서); Nova Vulgata의 이중 번호는 순서 판독 | `Ps 121 (122),1-2.3-4ab.4cd-5` |

합쳐지거나 나뉜 시편 9/10, 114/115/116, 147은 장 번호뿐 아니라 절 번호의 이동도 반영한다.
예를 들어 `Tv 115,1-2`는 `시편 116,10-11`이다. 시편 121과 시편 122처럼 실제로 다른 시편,
같은 시편의 서로 겹치지 않는 구간은 번호만 보고 공통으로 연결하지 않는다.
응답절 표시 `◎`, `Đ.`, `R.`, `Kv:`와 세부 절 문자, 쉼표·점·가운뎃점·더하기 기호를 처리한다.
새 언어 표는 `psalmNumbering: 'hebrew'` 또는 `'greek'`로 기본값을 선언할 수 있다.

확인 근거:

- [주교회의 2026-10-24](https://missa.cbck.or.kr/DailyMissa/20261024): 한국어 122(121).
- KTCG/KPV 프록시의 같은 날짜 원문: 베트남어 121, 한국어와 동일 구간.
- [USCCB 2026-10-24](https://bible.usccb.org/bible/readings/102426.cfm): 영어 122.
- [일본어 2026-10-24](https://higotonofukuin.org/spip.php?page=quotidien&date=2026-10-24%2000:00:00): 詩編122.
- [CEI 2026-10-24](https://www.chiesacattolica.it/liturgia-del-giorno/?data-liturgia=20261024): Dal Sal 121 (122).
- 독일어 SCHOTT 저장 검증 자료와 기존 중국어 전례 비교 자료도 회귀 검사에 유지한다.
- [Nova Vulgata](https://www.vatican.va/archive/bible/nova_vulgata/documents/nova-vulgata_vt_psalmorum_lt.html)는 히브리어 번호가 먼저 나오므로 라틴어라고 무조건 한 칸 이동하지 않는다.

검사: `node tools/verify-psalm-numbering.js` (10언어 100조합 및 합성·분할 시편),
`node tools/browser-check-v29-2.js` (화면 선택지·다른 시편 분리·고유 전례 제목).
