import pandas as pd
import numpy as np
import sklearn as sk
import json
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import FunctionTransformer
from functools import reduce

def predict(request):
    def default(o):
        if isinstance(o, np.int64): return int(o)
        raise TypeError

    args = request.get_json(silent=True)
    value_dict = args['value_dict']
    weight_dict = args['weight_dict']

#     sort the input out
#     if 'Majority Age' in value_dict:
#         value_dict['Majority Age'] = value_dict['Majority Age']#*(5/3)
    weighted_value_dict = {k:weight_dict[k]*value_dict[k] for k in weight_dict.keys() & value_dict.keys()}

    # print(weighted_value_dict)
#     print(weighted_value_dict)

#     sort the dataframe out
    df = pd.read_csv('binned_data.csv')
    for item in weight_dict.items():
        df[item[0]] = df[item[0]].apply(lambda a: a*item[1])
#     print(df)
    df = df[['Neighborhood'] + list(weighted_value_dict.keys())]
#     train the model
    knc = KNeighborsClassifier(n_neighbors=1)
    col_names = list(df)
    features = df[col_names[1:]]
    labels = df[col_names[:1]]
#     print(labels)
    knc.fit(X=features, y=labels)
#     predict
    wv_input = list(weighted_value_dict.values())
#     print(wv_input)
    X = np.reshape(a=wv_input, newshape=(1, -1))
    # print(knc.kneighbors(X, 20, True))
    # print(knc.kneighbors_graph(X, 5, 'distance'))
    kneighbors = knc.kneighbors(X, 5, True)
    indexes = kneighbors[1].tolist()[0]
    distances = kneighbors[0].tolist()[0]
#     print(indexes)
    result = []
    weights = [weight_dict[k] for k in weight_dict.keys()]
    weights = np.square([weight*4 for weight in weights])
#     print(weights)
    weight_sum = reduce(lambda a,b: a + b, weights)
#     print(weight_sum)
    max_dist = np.sqrt(weight_sum)
#     print(max_dist)
#     print()

    result = []
    weights = [weight_dict[k] for k in weight_dict.keys()]
    weights = np.square([weight*4 for weight in weights])
#     print(weights)
    weight_sum = reduce(lambda a,b: a + b, weights)
#     print(weight_sum)
    max_dist = np.sqrt(weight_sum)
#     print(max_dist)
#     print()
    for i in range(len(indexes)):
        ndict = {}
        ndict['neighborhood'] = df.iloc[indexes[i]].to_dict()
#         print(distances[i])
        distance = (distances[i]/max_dist)*100
#         print(distance)
        closeness = 100-distance
#         print(ndict['neighborhood'])
#         print(closeness)
        ndict['closeness'] = closeness
        result.append(ndict)
#         print()
    return json.dumps(result, default=default)
