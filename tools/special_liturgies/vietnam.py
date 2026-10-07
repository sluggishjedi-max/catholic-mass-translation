# Edit this country's special Masses here, then run tools/build-special-liturgies.py.
from common import country_profile

SPECIAL_LITURGIES = country_profile('VN')

# This local observance is date-specific. Add confirmed YYYY-MM-DD dates;
# an empty list does not create an annual nationwide observance.
SPECIAL_LITURGIES['vigils'].append({
    'id': 'saint_joseph_vigil',
    'dates': [],
    'hour': 19,
    'color': 'white',
    'names': {'KR': '복되신 동정 마리아의 배필 성 요셉 대축일 전야미사',
              'VN': 'Lễ vọng Thánh Giuse, bạn trăm năm Đức Maria',
              'EN': 'Saint Joseph, Spouse of the Blessed Virgin Mary – Vigil Mass'},
    'data': {},
    'sourceUrls': {},
})
