import React from 'react'
import ReactWeather from "react-open-weather";
import "react-open-weather/lib/css/ReactWeather.css";

function WeatherCard(){
  
    return (
      <section className="mt-4 shadow">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css"
          type="text/css"
        />
        <ReactWeather
          forecast="5days"
          apikey={`${process.env.REACT_APP_WEATHER_ID}`}
          type="geo"
          lat="-31.6333"
          lon="-60.7"
          lang="es"
        />
      </section>
    );
}
// http://api.openweathermap.org/data/2.5/weather?lat=-31.6333&lon=-60.7&appid=a1cad7375df343ae073262a6ba4db56f&lang=es

export default WeatherCard;