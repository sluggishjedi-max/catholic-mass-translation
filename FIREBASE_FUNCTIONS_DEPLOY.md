# Firebase Functions 배포 안내

현재 웹 앱은 `index.html`과 `JS file/app_v27_7.js`를 GitHub Pages에서 제공하고, 외부 API 프록시만 Firebase Functions에 배포한다. Firebase Hosting과 Firestore는 사용하지 않는다.

## 배포 대상

`functions/index.js`가 다음 함수를 내보낸다.

- `geminiProxy`: 번역·구문 정렬·음성 관련 Gemini 요청
- `ktcgProxy`: 한국 천주교 전례 독서 프록시
- `mapsConfig`: 제한된 Google Maps 브라우저 키 전달
- `usMassTimesProxy`: 미국 성당 미사 시간 프록시
- `bishopDirectoryProxy`: 국가별 주교단 명단 프록시

국가별 성가·기도문 파일은 Firebase Functions 대상이 아니다. 해당 정적 데이터는 `JS file/countries/<국가>/` 아래에 두고 GitHub Pages에 배포한다.

## 로컬 설정

프로젝트는 `.firebaserc`의 `ordinary-mass-app`을 기본 Firebase 프로젝트로 사용한다. 비밀 값은 저장소 파일에 기록하지 말고 Secret Manager에 설정한다.

```powershell
firebase login
firebase use ordinary-mass-app
firebase functions:secrets:set GEMINI_API_KEY_TRANSLATE
firebase functions:secrets:set GEMINI_API_KEY_SYNTAX
firebase functions:secrets:set GEMINI_API_KEY_VOICE
firebase functions:secrets:set GOOGLE_MAPS_BROWSER_KEY
```

`functions/.env`에는 허용 Origin만 둔다.

```text
ALLOWED_ORIGINS=https://sluggishjedi-max.github.io,local
```

`functions/.env`, `functions/.env.*`, `functions/.secret.local`은 커밋하지 않는다.

## 검사와 배포

```powershell
npm --prefix functions install
npm run firebase:check
$env:FUNCTIONS_DISCOVERY_TIMEOUT='60000'
firebase deploy --only functions
```

`firebase.json`의 predeploy 검사도 `functions/index.js` 문법을 다시 확인한다. 배포 후 CLI가 위 다섯 함수의 갱신 성공을 보고하는지 확인한다.
