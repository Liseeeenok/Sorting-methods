import pandas as pd
import numpy as np

DaB = pd.read_csv('BD.txt', sep="|",encoding="cp1251", index_col=False)
DaF = pd.DataFrame(DaB)
Json = DaF.to_json(path_or_buf='BD.json', orient='records', indent=2, force_ascii=False)
print(DaF)
