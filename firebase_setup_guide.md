# Firebase 설정 요약

현재 구조의 기준 문서는 `FIREBASE_FUNCTIONS_DEPLOY.md`이다.

- 정적 앱과 국가별 `*_mass.js`, `*_prayers.js`, `*_hymns.js`, `*_churches.js` 파일: GitHub Pages
- 서버 측 외부 API 프록시: Firebase Functions (`functions/index.js`)
- Firebase 프로젝트: `ordinary-mass-app`
- Firebase Hosting/Firestore: 사용하지 않음

전체 함수 배포:

```powershell
npm run firebase:check
$env:FUNCTIONS_DISCOVERY_TIMEOUT='60000'
firebase deploy --only functions
```

필요한 비밀 값과 Origin 설정은 `FIREBASE_FUNCTIONS_DEPLOY.md`를 따른다.
