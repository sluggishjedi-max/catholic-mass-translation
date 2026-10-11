"""Fixed formularies from the user-provided Missals, independent of civil year."""
import json
from copy import deepcopy
from pathlib import Path

FORMULARIES = json.loads(Path(__file__).with_name('fixed_formularies.json').read_text(encoding='utf-8'))


def fixed_formulary(group, key):
    return deepcopy(FORMULARIES[group][key])
