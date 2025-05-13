import pandas as pd
import tqdm
import csv
import os

script_path = os.path.realpath(__file__)
dir_path = os.path.dirname(script_path)
os.chdir(dir_path)

df = pd.read_csv('zye.csv')

data_word=[]
data_value=[]
data_ok=[]

for index,row in tqdm.tqdm(df.iterrows()):
    word=row['字']
    value=row['等呼']

    if word in data_word:
        index=data_word.index(word)
        if data_value[index]!=value:
            data_ok[index]=False
    else:
        data_word.append(word)
        data_value.append(value)
        data_ok.append(True)

data=[]
len_=len(data_word)
for i in tqdm.tqdm(range(len_)):
    if data_ok[i]:
        data.append([data_word[i],data_value[i]])

with open('等呼.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerows(data)