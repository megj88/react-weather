import "./weather.css";
import React, { useState } from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="mb-3 searchForm">
           <div className="row">
            <div className="col-9">
      <input type="search" placeholder="Enter a city.." onChange={updateCity} /></div>
      <div className="col-4">
      <button type="Submit" className="btn btn-primary w-40">Search</button>
      </div></div>
    </form>
  );


  if (loaded) {

 return (
    <div className="Weather">
      <div className="weatherWrapper">
     {form}
        <div className="overview">
          <h1 id="city">{city}</h1>
          <ul>
            <li>Last updated: 16:24</li>
            <li>{weather.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
            <img src={weather.icon} alt={weather.description} />
              <div className="float-left">
                <strong>{Math.round(weather.temperature)}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} else {
  return form;
}
}

