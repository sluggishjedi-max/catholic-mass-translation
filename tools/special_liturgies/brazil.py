# Edit this country's special Masses here, then run tools/build-special-liturgies.py.
from common import country_profile

SPECIAL_LITURGIES = country_profile('BR')
from _vigils import country_vigils
SPECIAL_LITURGIES['vigils'].extend(country_vigils(['epiphany', 'ascension', 'pentecost', 'assumption', 'peter_paul', 'john_baptist']))
SPECIAL_LITURGIES['feastTransfers'] = {'assumption': 'following-sunday', 'peter_paul': 'nearest-sunday'}
