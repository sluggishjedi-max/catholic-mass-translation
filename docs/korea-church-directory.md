# 대한민국 성당 공개 정보

한국 천주교 주소록의 전국 본당 목록, 가톨릭 굿뉴스의 16개 교구 본당 정보, 수원·대전·부산·대구·광주·전주·청주 교구의 공식 안내를 조회한다. 시간표가 없는 본당은 공식 주소록에 연결된 본당 홈페이지의 미사 안내도 확인한다. 출처가 제공하지 않는 시간을 추측해서 넣지 않는다.

교구와 공식 식별번호로 본당을 연결한다. 굿뉴스의 `cbckid`가 같은 중복 항목을 합치며, 옛 이름과 다른 표기는 검색 별칭으로 보존한다. 같은 이름이라도 교구가 다른 본당은 합치지 않는다.

사제 명단에는 공개된 현재 보직과 출처를 함께 보관한다. 이전 수집기의 `sisterNames`에는 수녀회 명칭·약칭·인원수·전화번호가 섞여 있었으므로 소속 수녀회는 `sisterCongregations`로 옮기고 인원수·전화번호는 명단에서 제거한다. 개인 수녀 이름은 현재 부임이 명시된 공식 본당 자료에서 확인한 경우에만 입력한다. 이름을 확인하지 못했다는 표시는 본당에 수녀님이 없다는 뜻이 아니다.

`directoryCheckedAt`은 자료를 조회한 날짜이며 출처의 자체 갱신일과 구분한다. 날짜 또는 특정 주간이 표시된 시간표의 적용 기준은 `massTimesPeriod`에 보존한다. 이전에 공개됐으나 이번 조회에서 다시 확인하지 못한 시간표는 별도 표시한다.

각 본당 팝업에 시간표·사제·수녀 정보별 출처와 확인일을 표시한다. 미확인 항목에는 공식 안내 링크를 제공한다. 방문 전 변경 사항은 해당 본당에서 확인할 수 있다.

## 갱신과 검증

```powershell
npm run church:korea:refresh
npm run church:korea:check
```

새 날짜마다 임시 폴더에 별도 응답 캐시를 만든다. 중단된 당일 작업은 같은 캐시를 사용해 이어서 실행한다. 원본 응답 캐시는 Git에 포함하지 않는다.

[교구별 반영 수와 미확인 목록](korea-church-coverage.json)에 조회 결과, 사이트 연결 실패, 기존 공개 시간표 여부를 기록한다. 미공개 또는 연결 실패 항목을 채워졌다고 집계하지 않는다. `massTimes`는 보관된 시간표 수, `massTimesCheckedToday`는 이번 조회에서 실제 시간표를 확인한 수, `previousTimetables`는 이번 조회에서 다시 확인하지 못한 이전 시간표 수다.

기본 출처: [한국 천주교 주소록](https://directory.cbck.or.kr/m/), [가톨릭 굿뉴스](https://maria.catholic.or.kr/mobile/church/), [수원교구](https://www.casuwon.or.kr/parish/parish/1), [대전교구](https://www.djcatholic.or.kr/home/pages/church.php), [부산교구](https://www.catholicbusan.or.kr/church/parish), [대구대교구](https://www.daegu-archdiocese.or.kr/page/area.html?srl=church_search), [광주대교구](https://www.gjcatholic.or.kr/church/parish), [전주교구](https://www.jcatholic.or.kr/theme/main/pages/area.php), [청주교구](https://www.cdcj.or.kr/parish/parish).
