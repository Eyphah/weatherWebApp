const sum = (data=[]) => data.reduce((prev, next) => prev + next);

const dataKeyOperation = {
    temp_min: (data) => Math.min(...data),
    temp_max: (data) => Math.max(...data),
    pluviometrie: sum,
    ensoleillement: sum,
    jours_gel: sum,
};
/**
 * Build more data informations for a set of keys and operations
 * @param data city meteo data
 */
const processData = (data) => {
    let newData = {}
    Object.keys(dataKeyOperation).forEach(key => {
        let key_data = data.map(value => value[key])
        newData[key] = dataKeyOperation[key](key_data);
    });
    return newData;
};

export default processData;