import {useEffect, useState} from "react";

import '../assets/style/chartZone.style.css'
import { Bar } from "react-chartjs-2";
import { Chart, LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip } from "chart.js";
Chart.register(LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip);

const LABELS = ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const CITY_COLOR = '#455d7a';
const FAVORITE_COLOR = '#f95959';

const CityChartZone = ( { city, favoriteCity, meteoData, meteoDataKeys, extraMeteoData } ) => {

    const dataKeys = meteoDataKeys.keys;
    const [comparisonKey, setComparisonKey] = useState(meteoDataKeys.keys[0]);

    const buildChart = (key) => {
        const cityData = meteoData.find(value => value.city === city);
        const favoriteCityData = meteoData.find(value => value.city === favoriteCity);
        const cityDataForKey = cityData.data.map(value => value[key]);
        const favoriteCityDataForKey = favoriteCityData.data.map(value => value[key]);
        return ({
            value: meteoDataKeys.names[key] + ' (' + meteoDataKeys.units[key] + ')',
            min: extraMeteoData[key].min,
            max: extraMeteoData[key].max,
            data: {
                labels: LABELS,
                datasets : [
                    {
                        label : city,
                        data : cityDataForKey,
                        backgroundColor: CITY_COLOR,
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        borderWidth: 0
                    },
                    {
                        label : favoriteCity,
                        data : favoriteCityDataForKey,
                        backgroundColor: FAVORITE_COLOR,
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        borderWidth: 0
                    }
                ]
            }
        })
    }
    const [chartData, setChartData] = useState(buildChart(comparisonKey)); // first key

    // update if favoriteCity or city changes
    useEffect(() => {
        setChartData(buildChart(comparisonKey));
        return () => {}
    }, [favoriteCity, city, comparisonKey]);

    // chart elem
    const chart = <div className="chartZone">
        <Bar
            data = { chartData.data }
            options =  {{
                animation: {
                    duration : 500,
                    easing : 'easeIn'
                },
                plugins : {
                    title: {
                        display : true,
                        text : chartData.value
                    },
                    tooltip: {
                        enabled: true
                    },
                    legend: {
                        labels: {
                            fontSize: 14
                        }
                    }
                },

            }}
        />
    </div>

    const changeData = (key) => {
        setComparisonKey(key);
    }
    const buttons = dataKeys.map(key =>
        <button onClick={() => changeData(key)} key={key}>
            {meteoDataKeys.names[key]} ({meteoDataKeys.units[key]})
        </button>
    );

    return (
        <div>
            <div id="chart-buttons">
                {buttons}
            </div>
            {chart}
        </div>
    )
}

export default CityChartZone;