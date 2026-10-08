#!/usr/bin/env python3
"""Compile per-country Python definitions into the static browser registry."""

import argparse
import datetime as dt
import json
import re
import runpy
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEFINITIONS = Path(__file__).with_name("special_liturgies")
OUTPUT = ROOT / "JS file" / "country_special_liturgies_v29.js"
sys.path.insert(0, str(DEFINITIONS))
from common import UNIVERSAL  # noqa: E402

LANGUAGES = {"KR", "VN", "EN", "JP", "LA", "ZH", "IT", "PT", "ES", "DE"}
SECTIONS = {"entrance", "collect", "reading1", "psalm", "reading2", "Sequence", "gospel_accl", "gospel", "prayer_offerings", "preface", "communion", "prayer_after"}


def validate_text(value):
    assert isinstance(value, (str, dict)), "Text part must be a string or object"
    if isinstance(value, str):
        return
    if "text" in value:
        assert isinstance(value["text"], str), "text must be a string"
    if "lines" in value:
        assert isinstance(value["lines"], list), "lines must be an array"
        for line in value["lines"]:
            assert isinstance(line, dict) and ("text" in line or "rubric" in line), "Each line needs text or rubric"
            for key in ("sp", "text", "rubric"):
                if key in line:
                    assert isinstance(line[key], str), f"{key} must be a string"
    for field in ("variants", "byCycle"):
        if field in value:
            assert isinstance(value[field], dict), f"{field} must be an object"
            for part in value[field].values():
                validate_text(part)


def validate_mass(entry):
    assert isinstance(entry.get("names", {}), dict), "names must be a language map"
    assert all(lang in LANGUAGES and isinstance(text, str) for lang, text in entry.get("names", {}).items()), "Invalid translated name"
    for lang, data in entry.get("data", {}).items():
        assert lang in LANGUAGES, f"Unsupported language: {lang}"
        assert isinstance(data, dict), "data must contain parsed section maps"
        assert set(data) <= SECTIONS, f"Unknown sections: {set(data) - SECTIONS}"
        for value in data.values():
            validate_text(value)
    for url in entry.get("sourceUrls", {}).values():
        assert re.match(r"^https?://", url), "sourceUrls must be HTTP(S) URLs"
    assert isinstance(entry.get("order", []), list), "order must be an array"
    rite_ids = set()
    for node in entry.get("order", []):
        if isinstance(node, str):
            assert re.fullmatch(r"[A-Za-z][a-z0-9_]*", node), f"Invalid ordinary reference: {node}"
            continue
        assert isinstance(node, dict) and sum(key in node for key in ("section", "use", "rite")) == 1, "Order item needs section, use or rite"
        assert re.fullmatch(r"[a-z][a-z0-9_]*", next(node[key] for key in ("section", "use", "rite") if key in node)), "Invalid order ID"
        if "rite" in node:
            assert node["rite"] not in rite_ids, f"Duplicate rite ID: {node['rite']}"
            rite_ids.add(node["rite"])
    for lang, parts in entry.get("riteData", {}).items():
        assert lang in LANGUAGES and isinstance(parts, dict), "riteData must contain language part maps"
        for value in parts.values():
            validate_text(value)
    for lang, selector in entry.get("sourceSelectors", {}).items():
        assert lang in LANGUAGES and isinstance(selector, dict)
        if selector.get("labelPattern"):
            re.compile(selector["labelPattern"])
    for lang, text in entry.get("sourceTextFallbacks", {}).items():
        assert lang in LANGUAGES and isinstance(text, str)
    for lang, specs in entry.get("sourceParts", {}).items():
        assert lang in LANGUAGES
        for spec in specs.values():
            for field in ("start", "stop"):
                re.compile(spec[field])
            assert spec.get("kind", "reading") in {"reading", "gospel", "psalm"}


def validate_profile(profile):
    seen = set()
    for entry in [*profile.get("vigils", []), *profile.get("celebrations", [])]:
        key = entry["id"]
        assert re.fullmatch(r"[a-z][a-z0-9_]*", key) and key not in seen, f"Invalid/duplicate vigil ID: {key}"
        seen.add(key)
        validate_mass(entry)
        rules = [rule for rule in ("dates", "monthDay", "easterOffset", "observedFeast") if rule in entry]
        assert len(rules) == 1, f"{key}: specify exactly one date rule"
        for date in entry.get("dates", []):
            assert dt.date.fromisoformat(date).isoformat() == date
        if "monthDay" in entry:
            assert dt.date.fromisoformat(f"2000-{entry['monthDay']}").strftime("%m-%d") == entry["monthDay"]
        if "easterOffset" in entry:
            assert isinstance(entry["easterOffset"], int)
        if "observedFeast" in entry:
            assert entry['observedFeast'] in {'epiphany','ascension','pentecost','assumption','peter_paul','john_baptist'}
            assert entry.get('dayOffset', -1) == -1, 'Proper vigils belong to the evening before the observed feast'
        assert 0 <= entry.get("hour", 19) <= 23
        assert entry.get("color", "gold") in {"gold", "white", "red", "purple", "green", "black", "rose"}
    for choice, entry in profile.get("allSouls", {}).items():
        assert choice in {"first", "second", "third"}
        validate_mass(entry)


def merge_profile(base, patch):
    """Country editor sidecars override entries by ID without erasing other rites."""
    result = dict(base)
    for kind in ("vigils", "celebrations"):
        entries = {entry["id"]: entry for entry in base.get(kind, [])}
        for entry in patch.get(kind, []):
            entries[entry["id"]] = entry
        result[kind] = list(entries.values())
    result["allSouls"] = {**base.get("allSouls", {}), **patch.get("allSouls", {})}
    return result


def build():
    validate_profile(UNIVERSAL)
    countries = {}
    for file in sorted(DEFINITIONS.glob("*.py")):
        if file.name == "common.py" or file.name.startswith("_"):
            continue
        profile = runpy.run_path(str(file))["SPECIAL_LITURGIES"]
        sidecar = DEFINITIONS / "editor_overrides" / f"{file.stem}.json"
        if sidecar.exists():
            patch = json.loads(sidecar.read_text(encoding="utf-8"))
            validate_profile(patch)
            profile = merge_profile(profile, patch)
        profile["definitionFile"] = f"tools/special_liturgies/{file.name}"
        validate_profile(profile)
        keys = profile["jurisdiction"]
        for key in keys if isinstance(keys, list) else [keys]:
            assert key not in countries, f"Duplicate country: {key}"
            countries[key] = profile
    payload = {"schemaVersion": 3, "universal": UNIVERSAL, "countries": countries}
    return "// Generated by tools/build-special-liturgies.py; edit country Python definitions or editor_overrides/*.json.\n" + "globalThis.countrySpecialLiturgies = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Verify the committed browser registry is current")
    parser.add_argument("--validate-profile", type=Path, help="Validate an editor candidate without writing the registry")
    args = parser.parse_args()
    if args.validate_profile:
        validate_profile(json.loads(args.validate_profile.read_text(encoding="utf-8")))
        print("Special liturgy profile is valid.")
        return
    source = build()
    if args.check:
        if not OUTPUT.exists() or OUTPUT.read_text(encoding="utf-8") != source:
            raise SystemExit("Special liturgy registry is stale; run python tools/build-special-liturgies.py")
        print("Special liturgy registry is valid and current.")
    else:
        OUTPUT.write_text(source, encoding="utf-8", newline="\n")
        print(f"Built {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
