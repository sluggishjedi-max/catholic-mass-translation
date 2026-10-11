# 가톨릭 다국어 매일미사 Android 앱

이 앱은 웹 콘텐츠를 APK에 복사하지 않고 아래 GitHub Pages 주소를 전체 화면
WebView로 표시합니다.

`https://sluggishjedi-max.github.io/catholic-mass-translation/`

따라서 GitHub Pages를 갱신하면 앱을 다시 빌드하거나 설치하지 않아도 다음 접속부터
최신 페이지를 사용합니다. 앱 실행 시 첫 문서는 캐시 재검사를 요청합니다.

## 빌드

PowerShell에서 다음 명령을 실행합니다.

```powershell
.\build-apk.ps1
```

완성 파일은 `dist\ordo-missae.apk`입니다. 빌드 스크립트는 환경 변수에 설정된
Android SDK/JDK를 먼저 사용하고, 현재 PC에서는 같은 `AI Project` 폴더의
`Ssutzpah\android\tools`도 자동으로 찾습니다.

## 주요 설정

- 앱 ID: `com.sluggishjedimax.ordomissae`
- 최소 Android: 7.0 (API 24)
- 대상 Android: API 35
- 웹 주소 변경: `MainActivity.java`의 `HOME_URL`

