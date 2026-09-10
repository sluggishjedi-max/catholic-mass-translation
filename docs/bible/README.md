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

전체 장절 범위를 비교하여 동일한 독서/복음을 한 그룹으로 묶습니다. 시작 절만 같고 끝 절이 다른 긴/짧은 독서는 별도 옵션으로 남깁니다. 중국어 한자 장수(一二/十二/廿/卅), 전각 구두점, 한글 세부 절 표기를 처리합니다. 모든 판본의 절 번호 체계나 범위의 의미적 동등성을 해결한 것은 아닙니다. 특히 시편 번호는 출처별 번호 체계·절 대응이 검증되지 않은 경우 억지로 합치지 않습니다.

V27.7에는 기존 기도문 끝맺음 플레이스홀더, 복음/독서 종료문 중복 제거, 중국어 매일미사 추출, 중국어 미사통상문 분절 수정도 포함합니다. 주요 고정 기도문은 한국어 구절 행에 맞췄고 감사기도는 자연 문장 단위 분절로 개선했습니다. 감사기도 전체가 한국어와 일대일 의미 정렬되었다는 뜻은 아닙니다.

검사: `node tools/verify-v27-7-bible-aliases.js`, `node tools/browser-check-v27-7.js`, `ORDO_CHECK_HTML=V27.7.html node tools/browser-check-v27-6.js`, `node tools/verify-v27-6-ordinary-structure.js`.

Firebase 설정은 functions만 포함합니다. 정적 웹 앱은 GitHub Pages에 배포되며, Firebase Hosting이 설정된 것은 아닙니다.
