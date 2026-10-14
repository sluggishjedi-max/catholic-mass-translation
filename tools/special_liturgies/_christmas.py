"""Crib blessing at the conclusion of the Universal Prayer.

Only supplied original-language rite texts belong here; no generated translation.
Position: Book of Blessings 1563-1564; Archdiocese of Louisville Christmas
Season 2020-21, page 4. The supplied separate rite is retained for use outside
Mass, while the full prayer of blessing is used at the in-Mass position.
"""

CHRISTMAS_CRIB = {
    "insertRites": [{
        "after": "universal",
        "replaceAnchorConclusion": True,
        "rite": "christmas_crib",
        "sourceOnly": True,
        "names": {"KR": "구유 경배 · 구유 축복 (선택)", "EN": "Veneration and Blessing of the Christmas Crib (Optional)"},
    }],
    "riteData": {
        "EN": {"christmas_crib": {"lines": [
            {"rubric": "All make the sign of the cross as the leader says:"},
            {"text": "Our help is in the name of the Lord."},
            {"sp": "R/.", "text": "Who made heaven and earth."},
            {"rubric": "One of those present or the leader reads a text of sacred Scripture, for example, Luke 2:1 (lines 1-8) or Isaiah 7:10 (lines 10-15, the birth of Emmanuel)."},
            {"sp": "Reader:", "text": "The Gospel of the Lord."},
            {"sp": "R/.", "text": "Praise to you, Lord Jesus Christ."},
            {"rubric": "The leader prays with hands joined:"},
            {"text": "God of every nation and people,\nfrom the very beginning of creation\nyou have made manifest your love:\nwhen our need for a Savior was great\nyou sent your Son to be born of the Virgin Mary.\nTo our lives he brings joy and peace,\njustice, mercy, and love.\n\nLord,\nbless all who look upon this manger;\nmay it remind us of the humble birth of Jesus,\nand raise our thoughts to him,\nwho is God-with-us and Savior of all,\nand who lives and reigns forever and ever."},
            {"sp": "R/.", "text": "Amen."},
        ]}},
    },
}

english = CHRISTMAS_CRIB['riteData']['EN']['christmas_crib']
english['standaloneLines'] = english['lines']
english['lines'] = [
    {'rubric': 'With hands outstretched, the celebrant says the prayer of blessing:'},
    *english['standaloneLines'][7:],
]
