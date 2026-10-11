"""Roman special orders; country files own their approved texts and adaptations."""


def names(kr, en):
    return {"KR": kr, "EN": en}


def section(key, kr, en):
    return {"section": key, "names": names(kr, en)}


def rite(key, kr, en, **extra):
    return {"rite": key, "names": names(kr, en), **extra}


def use(key, **extra):
    return {"use": key, **extra}


WORD = ["reading1", "psalm", "reading2", "gospel_accl", "gospel", "homily"]
EUCHARIST = ["offertory", "prayer_offerings", "eucharist", "lords_prayer", "peace", "lamb", "communion_rite", "communion", "prayer_after"]
CONCLUSION = [section("conclusion", "마침 예식", "Concluding Rites"), "blessing", "dismissal"]

PALM_ORDER = [
    section("palm_commemoration", "주님의 예루살렘 입성 기념", "Commemoration of the Lord's Entrance into Jerusalem"),
    rite("palm_form", "입당 양식", "Form of Entrance", choices={
        "A": names("제1양식: 행렬", "First Form: Procession"),
        "B": names("제2양식: 성대한 입당", "Second Form: Solemn Entrance"),
        "C": names("제3양식: 간단한 입당", "Third Form: Simple Entrance")}),
    rite("palm_antiphon", "따름 노래", "Antiphon", when={"palm_form": ["A", "B"]}),
    use("greeting", when={"palm_form": ["A", "B"]}),
    rite("palm_intro", "시작 권고", "Introduction", when={"palm_form": ["A", "B"]}),
    rite("palm_blessing", "나뭇가지 축복", "Blessing of Branches", when={"palm_form": ["A", "B"]}),
    rite("palm_gospel", "주님의 예루살렘 입성 복음", "Gospel of the Entrance into Jerusalem", when={"palm_form": ["A", "B"]}),
    rite("palm_procession", "행렬과 성당 입당", "Procession and Entrance", when={"palm_form": ["A", "B"]}),
    section("palm_mass", "미사", "Mass"),
    *[use(key, when={"palm_form": ["C"]}) for key in ["entrance", "greeting", "penitential", "kyrie"]],
    "collect", section("word", "말씀 전례", "Liturgy of the Word"), *WORD,
    "creed", "universal", section("eucharist", "성찬 전례", "Liturgy of the Eucharist"), *EUCHARIST, *CONCLUSION,
]

THURSDAY_ORDER = [
    section("intro", "시작 예식", "Introductory Rites"),
    rite("thursday_intro", "주님 만찬 미사 안내", "Mass of the Lord's Supper"),
    "entrance", "greeting", "penitential", "kyrie", "gloria", "collect",
    section("word", "말씀 전례", "Liturgy of the Word"), *WORD,
    rite("washing_feet", "발 씻김 예식 (필요에 따라)", "Washing of Feet (where appropriate)"),
    "universal", section("eucharist", "성찬 전례", "Liturgy of the Eucharist"),
    rite("thursday_offertory", "예물 행렬", "Procession of Gifts"), *EUCHARIST,
    section("reposition", "지극히 거룩하신 성체를 옮겨 모심", "Transfer of the Most Blessed Sacrament"),
    rite("thursday_end_form", "미사 마침의 형태", "Conclusion of the Mass", choices={"A": names("성금요일 예식을 거행하는 성당: 성체 이동", "Transfer for the Good Friday Celebration"), "B": names("성금요일 예식을 거행하지 않는 성당: 보통 마침", "Usual Conclusion without a Good Friday Celebration")}),
    rite("reposition", "성체 이동과 조배", "Transfer and Adoration", when={"thursday_end_form": ["A"]}),
    use("blessing", when={"thursday_end_form": ["B"]}), use("dismissal", when={"thursday_end_form": ["B"]}),
]

FRIDAY_ORDER = [
    rite("friday_intro", "주님 수난 예식", "Celebration of the Passion of the Lord"),
    rite("friday_opening", "기도", "Prayer"),
    section("word", "제1부 말씀 전례", "Part One: Liturgy of the Word"), *WORD,
    section("intercessions", "보편 지향 기도", "Solemn Intercessions"),
    *[rite(f"friday_intercession_{i}", kr, en) for i, kr, en in [
        (1, "Ⅰ. 교회를 위한 기도", "I. For Holy Church"), (2, "Ⅱ. 교황을 위한 기도", "II. For the Pope"),
        (3, "Ⅲ. 모든 성직자와 신자를 위한 기도", "III. For All Orders and Degrees of the Faithful"),
        (4, "Ⅳ. 예비 신자들을 위한 기도", "IV. For Catechumens"), (5, "Ⅴ. 그리스도인들의 일치를 위한 기도", "V. For the Unity of Christians"),
        (6, "Ⅵ. 유다인들을 위한 기도", "VI. For the Jewish People"), (7, "Ⅶ. 그리스도를 믿지 않는 이들을 위한 기도", "VII. For Those Who Do Not Believe in Christ"),
        (8, "Ⅷ. 하느님을 믿지 않는 이들을 위한 기도", "VIII. For Those Who Do Not Believe in God"),
        (9, "Ⅸ. 위정자들을 위한 기도", "IX. For Those in Public Office"), (10, "Ⅹ. 고통받는 이들을 위한 기도", "X. For Those in Tribulation")]],
    section("cross", "제2부 십자가 경배", "Part Two: Adoration of the Holy Cross"),
    rite("cross_showing", "거룩한 십자가를 보여 주는 예식", "Showing of the Holy Cross"),
    rite("cross_adoration", "십자가 경배", "Adoration of the Cross"),
    section("communion", "제3부 영성체", "Part Three: Holy Communion"),
    rite("friday_communion_intro", "성체를 모셔 옴", "Transfer of the Blessed Sacrament"),
    "lords_prayer", "communion_rite", "prayer_after",
    rite("friday_people_prayer", "백성을 위한 기도", "Prayer over the People"),
    rite("friday_departure", "침묵 가운데 돌아감", "Departure in Silence"),
]

VIGIL_ORDER = [
    section("light", "제1부 성야의 장엄한 시작: 빛의 예식", "Part One: The Solemn Beginning of the Vigil, Lucernarium"),
    rite("vigil_intro", "성야 예식 안내", "Introduction to the Vigil"),
    "greeting", rite("fire_blessing", "불 축복", "Blessing of the Fire"),
    rite("paschal_candle", "파스카 초의 마련", "Preparation of the Paschal Candle"),
    rite("light_procession", "행렬", "Procession"), rite("exsultet", "파스카 찬송", "Easter Proclamation"),
    section("word", "제2부 말씀 전례", "Part Two: Liturgy of the Word"),
    rite("vigil_word_intro", "말씀 전례 권고", "Introduction to the Readings"),
    *[part for i in range(1, 8) for part in [
        rite(f"vigil_reading_{i}", f"제{i}독서", f"Old Testament Reading {i}"),
        rite(f"vigil_psalm_{i}", "화답송" if i != 3 else "찬가", "Responsorial Psalm" if i != 3 else "Canticle"),
        rite(f"vigil_prayer_{i}", f"제{i}독서 후 기도", f"Prayer after Reading {i}")]],
    "gloria", "collect", rite("vigil_epistle", "서간", "Epistle"),
    rite("vigil_alleluia", "알렐루야와 화답송", "Alleluia and Responsorial Psalm"), "gospel", "homily",
    section("baptism", "제3부 세례 전례", "Part Three: Baptismal Liturgy"),
    rite("baptism_form", "세례 전례의 형태", "Form of the Baptismal Liturgy", choices={
        "A": names("세례를 거행함", "Baptism is Celebrated"), "B": names("세례 샘만 축복함", "Blessing of the Baptismal Font"),
        "C": names("세례와 세례 샘 축복이 없음", "Neither Baptism nor Blessing of the Font")}, default="C"),
    rite("baptism_intro", "시작 권고", "Introduction", when={"baptism_form": ["A", "B"]}),
    rite("litany", "성인 호칭 기도", "Litany of the Saints", when={"baptism_form": ["A", "B"]}),
    rite("baptism_water", "세례수 축복", "Blessing of Baptismal Water", when={"baptism_form": ["A", "B"]}),
    rite("baptism", "세례와 견진", "Baptism and Confirmation", when={"baptism_form": ["A"]}),
    rite("water_blessing", "물 축복", "Blessing of Water", when={"baptism_form": ["C"]}),
    rite("baptism_renewal", "세례 서약 갱신", "Renewal of Baptismal Promises"),
    rite("sprinkling", "성수 뿌림", "Sprinkling with Blessed Water"), "universal",
    section("eucharist", "제4부 성찬 전례", "Part Four: Liturgy of the Eucharist"),
    rite("vigil_eucharist_intro", "성찬 전례 안내", "Introduction to the Liturgy of the Eucharist"), *EUCHARIST,
    rite("vigil_blessing", "장엄 강복", "Solemn Blessing"), rite("vigil_dismissal", "파견", "Dismissal"),
]

CELEBRATIONS = [
    {"id": "palm_sunday", "easterOffset": -7, "color": "red", "names": names("주님 수난 성지 주일", "Palm Sunday of the Passion of the Lord"), "order": PALM_ORDER, "passionGospel": True, "mergeDaily": True, "prefaceKey": "palm_sunday", "allowedForms": ["1", "2", "3"]},
    {"id": "holy_thursday", "easterOffset": -3, "color": "white", "names": names("주님 만찬 성목요일", "Holy Thursday: Evening Mass of the Lord's Supper"), "order": THURSDAY_ORDER, "mergeDaily": True, "prefaceKey": "eucharist_1", "allowedForms": ["1", "2", "3"]},
    {"id": "good_friday", "easterOffset": -2, "color": "red", "names": names("주님 수난 성금요일", "Friday of the Passion of the Lord"), "order": FRIDAY_ORDER, "passionGospel": True, "mergeDaily": True},
    {"id": "holy_saturday", "easterOffset": -1, "color": "purple", "names": names("성토요일", "Holy Saturday"), "order": [rite("holy_saturday_rest", "주님의 무덤 곁에 머무름", "At the Lord's Tomb")], "fetchDaily": False},
]

EASTER_VIGIL_ORDER = {"order": VIGIL_ORDER, "mergeDaily": True, "prefaceKey": "easter_1", "allowedForms": ["1", "2", "3"]}
