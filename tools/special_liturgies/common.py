"""Country-editable special Mass definitions, compiled for the browser."""
from _holy_week import CELEBRATIONS, EASTER_VIGIL_ORDER
from _fixed_formularies import fixed_formulary

ALL_SOULS_NAMES = {
    "first": {"KR": "죽은 모든 이를 위한 위령의 날 - 첫째 미사", "VN": "Lễ cầu cho các tín hữu đã qua đời – Lễ I", "EN": "All Souls' Day – First Mass", "JP": "死者の日 第一ミサ", "LA": "In Commemoratione Omnium Fidelium Defunctorum – Missa I", "ZH": "追思已亡諸靈日 第一台彌撒", "IT": "Commemorazione dei fedeli defunti – Prima Messa", "PT": "Comemoração dos fiéis defuntos – Primeira Missa", "ES": "Conmemoración de los fieles difuntos – Primera Misa", "DE": "Allerseelen – Erste Messe"},
    "second": {"KR": "죽은 모든 이를 위한 위령의 날 - 둘째 미사", "VN": "Lễ cầu cho các tín hữu đã qua đời – Lễ II", "EN": "All Souls' Day – Second Mass", "JP": "死者の日 第二ミサ", "LA": "In Commemoratione Omnium Fidelium Defunctorum – Missa II", "ZH": "追思已亡諸靈日 第二台彌撒", "IT": "Commemorazione dei fedeli defunti – Seconda Messa", "PT": "Comemoração dos fiéis defuntos – Segunda Missa", "ES": "Conmemoración de los fieles difuntos – Segunda Misa", "DE": "Allerseelen – Zweite Messe"},
    "third": {"KR": "죽은 모든 이를 위한 위령의 날 - 셋째 미사", "VN": "Lễ cầu cho các tín hữu đã qua đời – Lễ III", "EN": "All Souls' Day – Third Mass", "JP": "死者の日 第三ミサ", "LA": "In Commemoratione Omnium Fidelium Defunctorum – Missa III", "ZH": "追思已亡諸靈日 第三台彌撒", "IT": "Commemorazione dei fedeli defunti – Terza Messa", "PT": "Comemoração dos fiéis defuntos – Terceira Missa", "ES": "Conmemoración de los fieles difuntos – Tercera Misa", "DE": "Allerseelen – Dritte Messe"},
}

UNIVERSAL = {
    "celebrations": CELEBRATIONS,
    "allSouls": {choice: {"names": names, "mergeDaily": True, **fixed_formulary('allSouls', choice)} for choice, names in ALL_SOULS_NAMES.items()},
    "vigils": [
        {"id": "christmas_vigil", "monthDay": "12-24", "hour": 19, "color": "gold", "names": {
            "KR": "주님 성탄 대축일 전야미사", "VN": "Lễ Vọng Giáng Sinh", "EN": "The Nativity of the Lord – Vigil Mass", "JP": "主の降誕 前晩のミサ", "LA": "In Vigilia Nativitatis Domini", "ZH": "耶穌聖誕節 前夕彌撒", "IT": "Natale del Signore – Messa vespertina nella vigilia", "PT": "Natal do Senhor – Missa da vigília", "ES": "Natividad del Señor – Misa de la vigilia", "DE": "Weihnachten – Messe am Heiligen Abend"}, "mergeDaily": True, "sourceSelectors": {"KR": {"labelPattern": r"전야\s*미사"}}, **fixed_formulary('vigils', 'christmas_vigil')},
        {"id": "easter_vigil", "easterOffset": -1, "hour": 19, "color": "gold", "names": {
            "KR": "주님 부활 대축일 파스카 성야", "VN": "Đêm Canh Thức Vượt Qua", "EN": "Easter Vigil in the Holy Night", "JP": "復活の聖なる徹夜祭", "LA": "Vigilia Paschalis in Nocte Sancta", "ZH": "復活節前夕守夜禮", "IT": "Veglia pasquale nella notte santa", "PT": "Vigília Pascal na Noite Santa", "ES": "Vigilia Pascual en la Noche Santa", "DE": "Die Feier der Osternacht"}, "data": {}, **EASTER_VIGIL_ORDER},
    ],
}


def country_profile(jurisdiction):
    # Overrides and additional vigils belong to the individual country file.
    return {"jurisdiction": jurisdiction, "vigils": [], "allSouls": {}, "celebrations": []}
