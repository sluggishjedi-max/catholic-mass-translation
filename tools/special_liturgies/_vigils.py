"""Proper vigil formularies follow the feast's observed date in each country."""
from copy import deepcopy

NAMES = {
    'epiphany': {'KR':'주님 공현 대축일', 'VN':'Chúa Hiển Linh', 'EN':'The Epiphany of the Lord', 'JP':'主の公現', 'LA':'In Epiphania Domini', 'ZH':'主顯節', 'IT':'Epifania del Signore', 'PT':'Epifania do Senhor', 'ES':'Epifanía del Señor', 'DE':'Erscheinung des Herrn'},
    'ascension': {'KR':'주님 승천 대축일', 'VN':'Chúa Thăng Thiên', 'EN':'The Ascension of the Lord', 'JP':'主の昇天', 'LA':'In Ascensione Domini', 'ZH':'耶穌升天節', 'IT':'Ascensione del Signore', 'PT':'Ascensão do Senhor', 'ES':'Ascensión del Señor', 'DE':'Christi Himmelfahrt'},
    'pentecost': {'KR':'성령 강림 대축일', 'VN':'Chúa Thánh Thần Hiện Xuống', 'EN':'Pentecost Sunday', 'JP':'聖霊降臨', 'LA':'Dominica Pentecostes', 'ZH':'聖神降臨節', 'IT':'Pentecoste', 'PT':'Domingo de Pentecostes', 'ES':'Domingo de Pentecostés', 'DE':'Pfingsten'},
    'assumption': {'KR':'성모 승천 대축일', 'VN':'Đức Mẹ Hồn Xác Lên Trời', 'EN':'The Assumption of the Blessed Virgin Mary', 'JP':'聖母の被昇天', 'LA':'In Assumptione Beatae Mariae Virginis', 'ZH':'聖母蒙召升天節', 'IT':'Assunzione della Beata Vergine Maria', 'PT':'Assunção da Virgem Santa Maria', 'ES':'Asunción de la Bienaventurada Virgen María', 'DE':'Mariä Aufnahme in den Himmel'},
    'peter_paul': {'KR':'성 베드로와 성 바오로 사도 대축일', 'VN':'Thánh Phêrô và Thánh Phaolô Tông Đồ', 'EN':'Saints Peter and Paul, Apostles', 'JP':'聖ペトロ・聖パウロ使徒', 'LA':'Sanctorum Petri et Pauli Apostolorum', 'ZH':'聖伯多祿及聖保祿宗徒節', 'IT':'Santi Pietro e Paolo, Apostoli', 'PT':'São Pedro e São Paulo, Apóstolos', 'ES':'San Pedro y San Pablo, Apóstoles', 'DE':'Petrus und Paulus, Apostel'},
    'john_baptist': {'KR':'성 요한 세례자 탄생 대축일', 'VN':'Sinh Nhật Thánh Gioan Tẩy Giả', 'EN':'The Nativity of Saint John the Baptist', 'JP':'洗礼者聖ヨハネの誕生', 'LA':'In Nativitate Sancti Ioannis Baptistae', 'ZH':'聖若翰洗者誕辰', 'IT':'Natività di San Giovanni Battista', 'PT':'Nascimento de São João Batista', 'ES':'Natividad de San Juan Bautista', 'DE':'Geburt des heiligen Johannes des Täufers'},
}
SUFFIX = {'KR':' 전야미사','VN':' – Lễ Vọng','EN':' – Vigil Mass','JP':' 前晩のミサ','LA':' – Missa in Vigilia','ZH':' 前夕彌撒','IT':' – Messa vespertina nella vigilia','PT':' – Missa da Vigília','ES':' – Misa de la Vigilia','DE':' – Vorabendmesse'}
PREFACES = {'epiphany':'epiphany','ascension':'ascension_1','pentecost':'pentecost','assumption':'assumption','peter_paul':'peter_and_paul','john_baptist':'john_the_baptist'}
VIGILS = [{
    'id': key + '_vigil', 'observedFeast': key, 'dayOffset': -1,
    'hour': 19, 'color': 'red' if key in {'pentecost','peter_paul'} else 'gold',
    'names': {lang: name + SUFFIX[lang] for lang,name in names.items()},
    'mergeDaily': True, 'data': {}, 'formulary': 'proper-vigil',
    'prefaceKey': PREFACES[key],
    'requiresVigilSource': key not in {'epiphany','ascension'},
    'sourceSelectors': {lang: {'dateOffset': 1, 'labelPattern': r'전야\s*미사|Vigil|vigilia|Lễ\s+Vọng|前夕|前晩|Vigília|Vorabend'} for lang in SUFFIX},
} for key,names in NAMES.items()]


def country_vigils(feasts):
    return [deepcopy(entry) for entry in VIGILS if entry['observedFeast'] in feasts]
