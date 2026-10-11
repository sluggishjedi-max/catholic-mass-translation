"""Bind country-editable approved texts to the shared Roman order."""
import re
from copy import deepcopy
from _holy_week import CELEBRATIONS, EASTER_VIGIL_ORDER


def lines(text):
    result = []
    for raw in text.strip().splitlines():
        value = raw.strip()
        if not value:
            continue
        if value.startswith('<') and value.endswith('>'):
            result.append({'rubric':value[1:-1]})
        elif value[:1] in '╋◎○●':
            result.append({'sp':value[0], 'text':value[1:].strip()})
        elif re.match(r'^(?:R\.|R/\.|Đ\.|Ð\.|Omnes:)\s*',value):
            result.append({'sp':'◎', 'text':re.sub(r'^(?:R\.|R/\.|Đ\.|Ð\.|Omnes:)\s*','',value)})
        else:
            result.append({'sp':'', 'text':value})
    return result


def apply_missal_parts(profile, language, texts):
    for key, source in texts.items():
        kind = 'vigils' if key.endswith('_vigil') else 'celebrations'
        existing = next((entry for entry in profile[kind] if entry['id']==key),None)
        if existing is None:
            base = next((entry for entry in CELEBRATIONS if entry['id']==key),{})
            if kind == 'vigils':
                from common import UNIVERSAL
                base = next((entry for entry in UNIVERSAL['vigils'] if entry['id']==key),base)
            if not base:
                raise ValueError(f'Register the date rule for {key} before its Missal text')
            existing = deepcopy(base)
            if key == 'easter_vigil':
                existing.update(deepcopy(EASTER_VIGIL_ORDER))
                existing.update(id=key,easterOffset=-1,hour=19,color='gold')
            profile[kind].append(existing)
        existing.setdefault('names',{}).update(source.get('names',{}))
        rites = existing.setdefault('riteData',{}).setdefault(language,{})
        for rite_key, text in source.get('rites',{}).items():
            if isinstance(text,str):
                rites[rite_key]={'lines':lines(text)}
            else:
                rites[rite_key]=deepcopy(text)
        data = existing.setdefault('data',{}).setdefault(language,{})
        for section, text in source.get('prayers',{}).items():
            data[section]={'text':text,'lines':lines(text)}
        existing['missalTextRegistered']=True
        for field in ('sourceParts','requiredSourceSections','prefaceText','eucharistEdits','sourceSelectors','order','prefaceKey'):
            if field in source:
                if isinstance(source[field],dict):
                    existing.setdefault(field,{}).update(deepcopy(source[field]))
                else:
                    existing[field]=deepcopy(source[field])
