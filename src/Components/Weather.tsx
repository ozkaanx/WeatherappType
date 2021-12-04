import React from 'react'
import { WeatherType } from '../Type';

interface WeatherProps {

    weather: WeatherType | null

}

const Weather: React.FC<WeatherProps> = (props) => {

    const { weather } = props;
    return (
        <div className="weather-card">
            <div className="weather-card-temperature">
                <h2>{weather?.main.temp.toFixed(1)}°</h2>
            </div>
            <div className="weather-card-status">
                <h2>Hava Durumu </h2>
                <h3>{weather?.weather[0].description}</h3>
            </div>
            <div className="weather-card-city">
                <h2>{weather?.name}</h2>
            </div>
        </div>
    );
}

export default Weather