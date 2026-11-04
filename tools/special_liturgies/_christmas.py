"""Pastoral instruction for placing the infant Jesus in the Christmas crib."""

CRIB_SECTION_NAMES = {
    "KR": "구유경배예식",
    "EN": "Rite of Veneration at the Crib",
    "VN": "Nghi thức kính viếng máng cỏ",
    "JP": "飼い葉桶の礼拝式",
    "LA": "Ritus adorationis ad praesepium",
    "ZH": "朝拜馬槽禮",
    "IT": "Rito di adorazione al presepe",
    "PT": "Rito de adoração do presépio",
    "ES": "Rito de adoración del pesebre",
    "DE": "Ritus der Anbetung an der Krippe",
}

CRIB_NAMES = {
    "KR": "구유 안치 예식 및 경배",
    "EN": "Placing the Infant Jesus in the Crib and Veneration",
    "VN": "Nghi thức đặt Hài Nhi Giêsu vào máng cỏ và kính viếng",
    "JP": "幼子イエスを飼い葉桶に安置する式と礼拝",
    "LA": "Depositio Infantis Iesu in praesepio et adoratio",
    "ZH": "安放耶穌聖嬰及朝拜馬槽禮",
    "IT": "Deposizione di Gesù Bambino nella mangiatoia e adorazione",
    "PT": "Colocação do Menino Jesus na manjedoura e adoração",
    "ES": "Colocación del Niño Jesús en el pesebre y adoración",
    "DE": "Einlegen des Jesuskindes in die Krippe und Anbetung",
}

CRIB_RUBRICS = {
    "KR": "지역에따라 미사 전 혹은 미사 후에 아기예수님을 구유에 모시는 행렬과 신자들의 구유경배를 실시한다.",
    "EN": "According to local custom, a procession to place the Infant Jesus in the crib and the veneration of the crib by the faithful take place before or after Mass.",
    "VN": "Tùy theo tập quán địa phương, trước hoặc sau Thánh lễ, cử hành cuộc rước đặt Hài Nhi Giêsu vào máng cỏ và để các tín hữu kính viếng máng cỏ.",
    "JP": "地域の慣習に従い、ミサの前または後に、幼子イエスを飼い葉桶に安置する行列と、信者による飼い葉桶の礼拝を行う。",
    "LA": "Pro locorum consuetudine, ante vel post Missam fit processio ad Infantem Iesum in praesepio deponendum et adoratio praesepii a fidelibus.",
    "ZH": "按照當地習慣，在彌撒前或彌撒後，舉行恭迎耶穌聖嬰安放於馬槽的遊行，並由信友朝拜馬槽。",
    "IT": "Secondo l’uso locale, prima o dopo la Messa si svolgono la processione per deporre Gesù Bambino nella mangiatoia e l’adorazione del presepe da parte dei fedeli.",
    "PT": "Conforme o costume local, antes ou depois da Missa, realizam-se a procissão para colocar o Menino Jesus na manjedoura e a adoração do presépio pelos fiéis.",
    "ES": "Según la costumbre local, antes o después de la Misa se realizan la procesión para colocar al Niño Jesús en el pesebre y la adoración del pesebre por los fieles.",
    "DE": "Je nach örtlichem Brauch finden vor oder nach der Messe die Prozession zum Einlegen des Jesuskindes in die Krippe und die Anbetung an der Krippe durch die Gläubigen statt.",
}

CHRISTMAS_CRIB = {
    "insertRites": [{
        "at": "start",
        "section": "christmas_crib",
        "names": CRIB_SECTION_NAMES,
    }, {
        "at": "start",
        "rite": "christmas_crib",
        "sourceOnly": True,
        "names": CRIB_NAMES,
    }],
    "riteData": {
        lang: {"christmas_crib": {"lines": [{"rubric": rubric}]}}
        for lang, rubric in CRIB_RUBRICS.items()
    },
}
