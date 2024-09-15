import '../assets/style/dataTable.style.css'

const CityDataTable = ( { city, meteoData, meteoDataKeys } ) => {

    const meteoCity = meteoData.find(value => value.city === city);
    if(!meteoCity) return <p>NotFound</p>; // error check

    const meteoCityData = meteoCity.data;
    const headingDataCell = meteoCityData.map((value,i) => <th className="dataCell" key={i}>{value.pour}</th>)

    const dataKeys = meteoDataKeys.keys;
    const rowDataCells = dataKeys.map((key,i) => {
        const unit = meteoDataKeys.units[key];
        const cells = meteoCityData.map((value,i) =>
            <td className={key + " dataCell"} key={i}>{value[key]}{unit}</td>
        );
        const rowName = meteoDataKeys.names[key] || key;
        return (
            <tr key={i}>
                <th>{rowName}</th>
                {cells}
            </tr>
        )
    });


    return (
        <table className="dataTable">
            <caption>Data for {city}</caption>
            <thead>
                <tr>
                    <th></th>
                    {headingDataCell}
                </tr>
            </thead>
            <tbody>
                {rowDataCells}
            </tbody>
        </table>
    )
}
export default CityDataTable;