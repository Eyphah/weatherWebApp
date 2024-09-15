import '../assets/style/dataTable.style.css'
import '../assets/style/dataComparison.style.css'

const CityDataComparisonTable = ( { city, favoriteCity, meteoData, meteoDataKeys } ) => {

    // get cities data from meteo json object
    const cityMeteo = meteoData.find(value => value.city === city);
    let favoriteCityMeteo = meteoData.find(value => value.city === favoriteCity);

    // get comparison keys (without pour again)
    const dataKeys = meteoDataKeys.keys;
    const dataKeysRow = dataKeys.map(value => <th key={value}>{meteoDataKeys.names[value]}</th>)

    const extractDataRow = (data) => {
        return dataKeys.map(key => {
            const unit = meteoDataKeys.units[key];
            // error checks
            if(data.calculated) return <td key={key} className={key + " dataCell"}>{data.calculated[key]}{unit}</td>
            else                return <td>NaN</td>
        });
    };

    const cityData = (cityMeteo) ? extractDataRow(cityMeteo) : <p>NotFound</p>;
    const favoriteCityData = (favoriteCityMeteo) ? extractDataRow(favoriteCityMeteo) : <p>NotFound</p>;

    return (
        <table className="comparison-table">
            <thead>
                <tr>
                    <th></th>
                    {dataKeysRow}
                </tr>
            </thead>
            <tbody>
                <tr><th>{city}</th>{cityData}</tr>
                <tr className="favorite"><th>{favoriteCity}</th>{favoriteCityData}</tr>
            </tbody>
        </table>
    )
};

export default CityDataComparisonTable;