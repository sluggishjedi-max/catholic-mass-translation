# 관리자 날짜 검토

설정에서 **Google로 관리자 로그인**을 누른 뒤 관리자로 등록된 계정으로 로그인한다. 모바일에서는 기존 Firebase 인증 도메인의 로그인 전용 페이지로 이동해 Google 인증을 마치고 같은 탭의 앱으로 돌아온다. 데스크톱에서는 팝업을 사용하며 팝업이 차단되면 전용 페이지로 이동한다. **검토 날짜 → 검토하기**를 누르면 해당 날짜를 기준으로 전후 7일을 탐색한다. 위령의 날의 세 미사와 국가별 전야미사도 같은 탐색 목록에 들어간다. 화면 상단에 검토 기준일을 표시하며 **오늘로 돌아가기**로 실시간 전례 화면을 복구한다.

모바일 인증 페이지와 Firebase 인증 도우미는 같은 `ordinary-mass-app.firebaseapp.com` 도메인을 사용한다. [Firebase 공식 지침](https://firebase.google.com/docs/auth/web/redirect-best-practices)에 따라 교차 도메인 저장소 분할에 의존하지 않는다. 앱 복귀 주소는 기존 GitHub Pages 앱 경로로 제한하며, 앱은 암호학적으로 생성한 일회용 nonce와 10분 유효시간을 검증한다. Google 자격 증명은 URL fragment로 전달한 뒤 즉시 주소·방문 기록에서 제거하며 저장소에 기록하지 않는다. Firebase 세션 저장소를 사용할 수 없으면 앱에서는 메모리 인증을 사용한다. 서버의 Google 계정·관리자 목록 검사는 동일하게 적용된다.

검토 날짜는 메모리에만 보관한다. 새로고침 후에는 오늘로 돌아간다. 로그아웃, 계정 변경, 서버 권한 확인 실패 때도 오늘 기준으로 복구한다. 로그인은 현재 탭의 세션에만 유지하며, 토큰 갱신은 검토 날짜를 유지한다. 각국 시간대와 GPS가 바뀌어도 지정한 달력 날짜는 유지된다. 일반 이용자의 오늘 전후 7일 범위는 유지된다.

날짜를 지정할 때 `adminReviewAccess`가 Firebase ID 토큰의 서명, 프로젝트, 만료, 폐기 여부를 검사한다. 이메일 검증이 완료된 Google 계정이며 Secret Manager의 `ADMIN_REVIEW_EMAILS` 목록에 있을 때만 허용한다. 이메일 목록은 쉼표로 구분하고 공개 저장소·Firestore에 저장하지 않는다. 권한은 최대 5분 유효하며 매분과 창 활성화 시 다시 확인한다. 로그인 버튼과 날짜 선택은 공통 다국어 경로로 제공한다.

해당 날짜의 원문 공개 여부는 전례 제공 사이트에 달려 있다. 날짜 선택 기능이 원문이 없는 날짜의 전례문을 보장하지는 않는다.

## 서버 설정과 배포

- Firebase 프로젝트: `ordinary-mass-app`.
- Google 로그인 활성화 및 승인 도메인: `sluggishjedi-max.github.io`, 기존 Firebase 인증 도메인.
- `ADMIN_REVIEW_EMAILS`는 `firebase functions:secrets:set ADMIN_REVIEW_EMAILS --project ordinary-mass-app --data-file <비공개 이메일 목록 파일>`로 등록한다. 함수 배포 시 비밀 값 접근 권한을 연결한다.
- Google 공급자 설정은 [Firebase CLI 공식 문서](https://firebase.google.com/docs/auth/configure-providers-cli)에 따라 비공개 임시 설정의 `auth.providers.googleSignIn`으로 배포한다. OAuth 지원 이메일은 공개 Git 저장소에 넣지 않는다.
- 함수·규칙·로그인 페이지는 `firebase.json`으로 `firebase deploy --project ordinary-mass-app --only functions,firestore:rules,hosting`를 실행한다. Hosting은 기존 `ordinary-mass-app` 사이트에 `auth-hosting/`의 두 파일만 게시한다. `firebase-admin`은 토큰 및 폐기 검증에 사용한다. [공식 검증 문서](https://firebase.google.com/docs/auth/admin/verify-id-tokens).

## 검사

```powershell
node tools/check-admin-review-auth.js
node tools/check-admin-mobile-login.js
node tools/browser-check-admin-mobile-login.js
node tools/browser-check-admin-date-review.js
node tools/browser-check-special-liturgies.js
node tools/browser-check-v28.js
node --check functions/index.js
```

브라우저 검사는 데스크톱과 모바일에서 일반 계정 거절, 먼 날짜·윤일·연말·시간대 변경, 위령의 날 순서, 성탄·부활 전야미사, 기준일 전후 7일 경계, 토큰 갱신과 권한 취소·로그아웃 복귀를 확인한다. Google 로그인 UI 자체는 사용자의 실제 계정으로 확인해야 한다.
