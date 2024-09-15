const meteoDataKeys = {
    keys: ["temp_min", "temp_max", "pluviometrie", "ensoleillement", "jours_gel"],
    names: {
        temp_min: "Temperature minimale",
        temp_max: "Temperature maximale",
        pluviometrie: "Pluviométrie",
        ensoleillement: "Ensoleillement",
        jours_gel: "Jours de gel",
    },
    units: {
        temp_min: "°C",
        temp_max: "°C",
        pluviometrie: "mm",
        ensoleillement: "h",
        jours_gel: "j",
    }
};

export default meteoDataKeys;