
const CitySelect = ( { cities, setCurrentCity } ) => {
    const citiesOptions = cities.map(value => (<option value={value} key={value}>{value}</option>));

    return (
        <select onChange={event => setCurrentCity(event.target.value)}>
            {citiesOptions}
        </select>
    )
}
export default CitySelect;