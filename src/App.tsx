import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { usePosition } from 'use-position'
import Weather from './Components/Weather'
import './style.scss'
import { WeatherType } from './Type'

function App() {

  let api_Key = "99519e96df6e89405a726de17dd421ce"
  const [weather, setWeather] = useState<WeatherType | null>(null)
  const { latitude, longitude } = usePosition(true);
  const lang = navigator.language;
  const langType = lang.split('-')[0];

  const getWeatherData = async (lat: number, lon: number) => {
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_Key}&units=metric&lang=${langType}`)
      setWeather(data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude])

  return (
    <div className="section-grid">
      {weather !== null ? <Weather weather={weather} /> : <div className="loading">
        <span>Lütfen Konum Erişimine İzin Verip Sayfayı Yenileyiniz...</span>
      </div>}
    </div>
  )
}

export default App
