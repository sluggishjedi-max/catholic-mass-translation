# Edit this country's special Masses here, then run tools/build-special-liturgies.py.
from common import country_profile

SPECIAL_LITURGIES = country_profile('DE')
from _vigils import country_vigils
SPECIAL_LITURGIES['vigils'].extend(country_vigils(['pentecost', 'assumption', 'peter_paul', 'john_baptist']))
