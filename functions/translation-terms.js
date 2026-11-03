'use strict';

function enforceCatholicKoreanFallbackTerms(value, targetLang) {
  let translated = String(value || "");
  if (targetLang !== "ko") return translated;
  const replacements = [
    [/여호와로/gu, "주님 때문에"],
    [/여호와를/gu, "주님을"], [/여호와가/gu, "주님이"], [/여호와는/gu, "주님은"], [/여호와와/gu, "주님과"],
    [/평강을/gu, "평화를"], [/평강이/gu, "평화가"], [/평강은/gu, "평화는"], [/평강과/gu, "평화와"], [/평강으로/gu, "평화로"],
    [/방언을/gu, "언어를"], [/방언이/gu, "언어가"], [/방언은/gu, "언어는"], [/방언과/gu, "언어와"], [/방언으로/gu, "언어로"],
    [/주기도문을/gu, "주님의 기도를"], [/주기도문이/gu, "주님의 기도가"], [/주기도문은/gu, "주님의 기도는"], [/주기도문과/gu, "주님의 기도와"], [/주기도문으로/gu, "주님의 기도로"],
    [/성찬식을/gu, "성찬례를"], [/성찬식이/gu, "성찬례가"], [/성찬식은/gu, "성찬례는"], [/성찬식과/gu, "성찬례와"], [/성찬식으로/gu, "성찬례로"],
    [/하나님/gu, "하느님"], [/성도/gu, "신도"],
    [/여호와/gu, "주님"], [/(?:갈람|감람)나무/gu, "올리브나무"], [/강팍/gu, "완고"],
    [/열방/gu, "모든 민족"], [/그\s*발\s*등상/gu, "그분의 발판"], [/족속/gu, "민족"],
    [/초장/gu, "풀밭"], [/평강/gu, "평화"], [/할렐루야/giu, "알렐루야"],
    [/방언/gu, "언어"], [/합력/gu, "협력"], [/아바/gu, "아빠"], [/희락/gu, "기쁨"],
    [/찬송가/gu, "성가"], [/침례/gu, "세례"], [/주기도문/gu, "주님의 기도"],
    [/성찬식/gu, "성찬례"]
  ];
  replacements.forEach(([pattern, replacement]) => {
    translated = translated.replace(pattern, replacement);
  });
  return translated;
}

module.exports = { enforceCatholicKoreanFallbackTerms };
