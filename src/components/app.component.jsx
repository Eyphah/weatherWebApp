import {useState} from "react";

import CitySelect from './citySelect.component.jsx';
import FavoriteButton from './favoriteButton.component.jsx';
import CityDataTable from './cityDataTable.component.jsx';
import CityDataComparisonTable from './cityDataComparisonTable.component.jsx';
import CityChartZone from "./cityChartZone.component.jsx";
import ToggleSection from "./toggleSection.component.jsx";

import meteoDataByCity from '../data/meteo-data.js';
import meteoDataKeys from "../data/meteo-data-keys.js";

import processData from '../scripts/processData.js'

import '../assets/style/app.style.css'

const App = () => {

    let meteoData = meteoDataByCity;
    let extraMeteoData = {};
    const cities = meteoData.map(value => value.city);
    const [currentCity, setCurrentCity] = useState(cities[0]);
    const [favorite, setFavorite] = useState(cities[0]); // default favorite (could be empty)

    const computeData = () => {
        console.log("Calculating data");
        // init extraMeteoData
        meteoDataKeys.keys.forEach(key => extraMeteoData[key] = { min: Number.MAX_VALUE, max: Number.MIN_VALUE});
        meteoData = meteoDataByCity.map((value, i) => {
            let cityData = processData(value.data);
            meteoDataKeys.keys.forEach(key => {
                extraMeteoData[key].min = Math.min(extraMeteoData[key].min, cityData[key]);
                extraMeteoData[key].max = Math.max(extraMeteoData[key].min, cityData[key]);
            });
            return {...value, calculated: cityData};
        });
    };
    computeData();

    const comparisonData = {city:currentCity, favoriteCity:favorite, meteoData, meteoDataKeys}
    return (
        <div>
            <div id="panel">
                <CitySelect cities={cities} setCurrentCity={setCurrentCity}/>
                <FavoriteButton setFavorite={setFavorite} favorite={favorite} current={currentCity}/>
            </div>
            <div id="content">
            <CityDataTable city={currentCity} meteoData={meteoData} meteoDataKeys={meteoDataKeys}></CityDataTable>
            <CityDataComparisonTable {...comparisonData}></CityDataComparisonTable>
            <ToggleSection>
                <CityChartZone {...comparisonData} extraMeteoData={extraMeteoData}/>
            </ToggleSection>
            </div>
        </div>
    );
}
export default App;
