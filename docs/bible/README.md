# V27.7 언어별 성경명·약어 연결

2026-09-10. 각 언어의 독립 파일을 조회하고 공통 성경 ID로 연결합니다. 독일어 Mk와 베트남어 Mk, 이탈리아어 Gv와 베트남어 Gv는 서로 다른 성경입니다. 포르투갈어 Jo와 Jó도 악센트를 제거하여 합치지 않습니다.

- [한국어: lang-ko](lang-ko.md) → 앱 KR
- [독일어: lang-gm](lang-gm.md) → 앱 DE
- [영어: lang-en](lang-en.md) → 앱 EN
- [베트남어: lang-vn](lang-vn.md) → 앱 VN
- [이탈리아어: lang-it](lang-it.md) → 앱 IT
- [포르투갈어: lang-pt](lang-pt.md) → 앱 PT
- [스페인어: lang-es](lang-es.md) → 앱 ES
- [일본어: lang-jp](lang-jp.md) → 앱 JP
- [라틴어: lang-la](lang-la.md) → 앱 LA
- [중국어 번체: lang-zh](lang-zh.md) → 앱 ZH

코드: `JS file/bible/lang-*.js`, 공통 비교 엔진: `JS file/bible/citation.js`.

사용자가 요청한 gm을 독일어 DE에, ko를 KR에, vn을 VN에 연결합니다. 알 수 없는 약어는 다른 언어 표에서 재검색하지 않습니다. 중국어 若·瑪·厄·雅·Jud, 이탈리아어 Gn은 표 내부 중복이므로 문맥 없이 자동 결정하지 않습니다.

전체 장절 범위를 10개 언어에 같은 방식으로 비교하여 동일한 독서/복음을 한 그룹으로 묶습니다. 장절 순서 표기와 구간/낱절 표기 차이를 정규화하고, 번역본마다 달라지는 세부 절 접미 문자(a/b, ㄱ/ㄴ)는 전체 절이 같을 때 같은 본문으로 봅니다. 여러 선택지가 서로 다른 순서로 들어와도 장절별로 대응시키며, 한 언어 안의 긴/짧은 독서는 합치지 않습니다. 중국어 한자 장수(一二/十二/廿/卅), 전각 구두점, 명시된 시편 이중 번호도 처리합니다. 새 언어처럼 아직 해석하지 못하는 단일 장절 표기는 그 사실만으로 별도 선택지를 만들지 않지만, 양쪽 장절이 정상 해석되어 실제 본문 범위가 다르면 별도 옵션으로 유지합니다. 화답송은 같은 시편의 국가별 절 번호·연 표기 차이만으로 분리하지 않습니다.

V27.7에는 기존 기도문 끝맺음 플레이스홀더, 복음/독서 종료문 중복 제거, 중국어 매일미사 추출, 중국어 미사통상문 분절 수정도 포함합니다. 주요 고정 기도문은 한국어 구절 행에 맞췄고 감사기도는 자연 문장 단위 분절로 개선했습니다. 감사기도 전체가 한국어와 일대일 의미 정렬되었다는 뜻은 아닙니다.

검사: `node tools/verify-v27-7-bible-aliases.js`, `node tools/browser-check-v27-7.js`, `ORDO_CHECK_HTML=V27.7.html node tools/browser-check-v27-6.js`, `node tools/verify-v27-6-ordinary-structure.js`.

Firebase 설정은 functions만 포함합니다. 정적 웹 앱은 GitHub Pages에 배포되며, Firebase Hosting이 설정된 것은 아닙니다.
