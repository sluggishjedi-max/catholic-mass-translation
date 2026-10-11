import sys, json
import pandas as pd

file_path = r'C:\Users\slugg\OneDrive\My Personal\문서\AI Project\Order of Mass\참고자료\미사\전례력\2026_Liturgical_Calendar_completed.xlsx'
df = pd.read_excel(file_path)

with open('excel_dump_utf8.txt', 'w', encoding='utf-8') as f:
    f.write('COLUMNS: ' + str(df.columns.tolist()) + '\n')
    for i in range(10):
        if i < len(df):
            f.write(f'ROW {i+1}: ' + json.dumps(df.iloc[i:i+1].to_dict('records')[0], ensure_ascii=False) + '\n')
