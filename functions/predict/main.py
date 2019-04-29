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
    if request.method == 'OPTIONS':
        # Allows GET requests from any origin with the Content-Type
        # header and caches preflight response for an 3600s
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '3600'
        }

        return ('', 204, headers)

    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
    }


    def default(o):
        if isinstance(o, np.int64): return int(o)
        raise TypeError

    args = request.get_json(silent=True)
    value_dict = args['value_dict']
    weight_dict = args['weight_dict']

    weighted_value_dict = {k:weight_dict[k]*value_dict[k] for k in weight_dict.keys() & value_dict.keys()}


    df = pd.read_csv('binned_data.csv')
    for item in weight_dict.items():
        df[item[0]] = df[item[0]].apply(lambda a: a*item[1])
    df = df[['Neighborhood'] + list(weighted_value_dict.keys())]
    knc = KNeighborsClassifier(n_neighbors=1)
    col_names = list(df)
    features = df[col_names[1:]]
    labels = df[col_names[:1]]
    knc.fit(X=features, y=labels)
    wv_input = list(weighted_value_dict.values())
    X = np.reshape(a=wv_input, newshape=(1, -1))
    kneighbors = knc.kneighbors(X, 92, True)
    indexes = kneighbors[1].tolist()[0]
    distances = kneighbors[0].tolist()[0]
    result = []
    weights = [weight_dict[k] for k in weight_dict.keys()]
    weights = np.square([weight*4 for weight in weights])
    weight_sum = reduce(lambda a,b: a + b, weights)
    max_dist = np.sqrt(weight_sum)

    result = []
    weights = [weight_dict[k] for k in value_dict.keys()]
    weights = np.square([weight*4 for weight in weights])
    weight_sum = reduce(lambda a,b: a + b, weights)
    max_dist = np.sqrt(weight_sum)
    udf = pd.read_csv('unbinned_data.csv')
    for i in range(len(indexes)):
        ndict = {}
        ndict['u_neighborhood'] = udf.iloc[indexes[i]].to_dict()
        ndict['b_neighborhood'] = df.iloc[indexes[i]].to_dict()
        distance = (distances[i]/max_dist)*100
        closeness = 100-distance
        ndict['closeness'] = closeness
        result.append(ndict)
    return (json.dumps(result, default=default),200,headers)
