(function (global) {
  'use strict';

  const entries = Array.isArray(global.ordoHymnData) ? global.ordoHymnData : [];
  const canonicalAllLanguageTitles = new Set([
    '자비송', '대영광송', '거룩하시도다', '하느님의 어린양', '신앙의 신비여',
    '주님의 기도', '주님의 기도 – 주님께 나라와', '미사시작', '미사 시작', '영광송',
    '복음 환호송', '복음환호송', '봉헌', '마침 성가', '미사 끝', '입당송', '화답송',
    '연송', '영성체', '영성체송', '보편 지향 기도 응답', '보편지향기도 응답', '아멘',
    '알렐루야', '사도신경', '성모송', '평화의 인사', '마침영광송 - 아멘',
    '마침영광송 – 아멘', '주님의 몸 주님의 피', '나의 주님 나의 하느님',
    '주님께 나라와 권능과', '병인 순교자 노래', '순교자 믿음'
  ]);
  const canonicalJapaneseTitles = new Set([
    '글로리아 높으신 이의 탄생', '거룩한 주의 십자가', '주의 승천 찬미하네', '주의 얼이',
    '주의 잔치', '주의 성심 홀로', '간절한 주의 사랑', '주의 영광', '부드러운 주의 손이',
    '주의 나라 임하면', '우리는 주의 사랑을', '주의 말씀 듣고', '주의 빵을 서로 나누세',
    '오 나의 자비로운 주여 Spirit song', '주의 거룩하심 생각할 때 When I look into Your holiness',
    '주의 길을 버리고', '주의 사랑으로 사랑합니다 I love you with the love of the Lord',
    '주의 이름 높이며 Lord I lift Your name on high', '주의 인자는 끝이 없고 The steadfast love',
    '주의 자비가 내려와 Mercy is falling', '주의 정결한 피로', '어둠도 La ténèbre',
    '우리 모일 때 주 성령 As we gather may Your Spirit work',
    '경배하리 내 온 맘 다해 You’re worthy of my praise', '오라 우리가 Come and let us go',
    '온 맘 다해 With all my heart'
  ]);
  const languages = ['KR', 'EN', 'VN', 'LA', 'JP'];
  const canonicalTitles = {};

  function text(value) {
    return String(value || '').trim();
  }

  function koreanTitle(entry) {
    return text(entry?.translations?.KR?.title || (entry?.language === 'KR' ? entry.title : ''));
  }

  entries.forEach((entry) => {
    const source = koreanTitle(entry);
    if (!source) return;
    if (canonicalAllLanguageTitles.has(source) && !canonicalTitles[source]) {
      canonicalTitles[source] = Object.freeze(Object.fromEntries(
        languages.map((language) => [language, text(entry?.translations?.[language]?.title)])
      ));
    }
    if (canonicalJapaneseTitles.has(source) && entry?.translations?.JP?.title) {
      canonicalTitles[source] = Object.freeze({ JP: text(entry.translations.JP.title) });
    }
  });

  function normalizedLanguage(value) {
    const language = text(value).toUpperCase();
    return ({ KO: 'KR', KOR: 'KR', VI: 'VN', VIE: 'VN', JA: 'JP', JPN: 'JP' })[language] || language;
  }

  function canonicalTitle(sourceTitle, language) {
    const source = text(sourceTitle);
    const direct = canonicalTitles[source];
    if (direct?.[language]) return direct[language];
    const prefix = ['주님의 기도', '주님께 나라와 권능과', '마침영광송'].find(
      (key) => source === key || source.startsWith(`${key} `) || source.startsWith(`${key} -`) || source.startsWith(`${key} –`)
    );
    return prefix && canonicalTitles[prefix]?.[language] ? canonicalTitles[prefix][language] : '';
  }

  function normalizeCatholicHymnTitle(entryOrTitle, targetLanguage, value) {
    const language = normalizedLanguage(targetLanguage);
    const source = typeof entryOrTitle === 'object' && entryOrTitle
      ? koreanTitle(entryOrTitle) || text(entryOrTitle.title)
      : text(entryOrTitle);
    const canonical = canonicalTitle(source, language);
    if (canonical) return canonical;

    let normalized = text(value);
    if (language === 'VN') {
      normalized = normalized.replace(/Bài hát Zabi/giu, 'Kinh Thương Xót').replace(/Bài hát Gloria/giu, 'Kinh Vinh Danh');
    } else if (language === 'EN' || language === 'LA') {
      normalized = normalized.replace(/Zabi Song/giu, 'Kyrie').replace(/Gloria Song/giu, 'Gloria');
    } else if (language === 'JP') {
      normalized = normalized.replace(/自費ソング/gu, 'あわれみの賛歌').replace(/注意/gu, '主').replace(/主人/gu, '主');
    }
    return normalized;
  }

  global.ordoCatholicTitleData = Object.freeze({ hymn: Object.freeze(canonicalTitles) });
  global.ordoNormalizeCatholicHymnTitle = normalizeCatholicHymnTitle;
})(typeof window !== 'undefined' ? window : globalThis);
