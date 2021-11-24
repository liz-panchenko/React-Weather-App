import React from "react";
import "./CityMainInfo.css";
import CurrentDate from "./CurrentDate";
import ClearSky from "./images/1.clear_sky.png";
import NightClearSky from "./images/1n.clear_sky.png";
import FewClouds from "./images/2.few_clouds.png";
import NightFewClouds from "./images/2n.few_clouds.png";
import Clouds from "./images/3.4.clouds.png";
import Rain from "./images/09.10.rain.png";
import Thunderstorm from "./images/11.thunderstorm.png";
import Snow from "./images/13.snow.png";
import Mist from "./images/50.mist.png";
import NightMist from "./images/50n.mist.png";

export default function CityMainInfo({ searchResults, fUnits }) {
  let apiIcon = searchResults.weather[0].icon;
  let iconObject = {
    "01d": ClearSky,
    "01n": NightClearSky,
    "02d": FewClouds,
    "02n": NightFewClouds,
    "03d": Clouds,
    "03n": Clouds,
    "04d": Clouds,
    "04n": Clouds,
    "09d": Rain,
    "09n": Rain,
    "10d": Rain,
    "10n": Rain,
    "11d": Thunderstorm,
    "11n": Thunderstorm,
    "13d": Snow,
    "13n": Snow,
    "50d": Mist,
    "50n": NightMist,
  };

  function mainTemp(searchResults) {
    let mainCTemp = Math.round(searchResults.main.temp);
    let mainFTemp = Math.round((mainCTemp * 9) / 5 + 32);
    if (fUnits) {
      return (
        <div>
          <span>{mainFTemp}</span>
          °F
        </div>
      );
    } else {
      return (
        <div>
          <span>{mainCTemp}</span>
          °C
        </div>
      );
    }
  }

  function feelsLikeTemp(searchResults) {
    let feelsLikeTempC = Math.round(searchResults.main.feels_like);
    let feelsLikeTempF = Math.round((feelsLikeTempC * 9) / 5 + 32);
    if (fUnits) {
      return (
        <span>
          <span> {feelsLikeTempF}</span>
          °F
        </span>
      );
    } else {
      return (
        <span>
          <span> {feelsLikeTempC}</span>
          °C
        </span>
      );
    }
  }
  
  return (
    <div className="CityMainInfo">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-xl-7 mt-5">
          <h1>{searchResults.name}</h1>
          <div className="row">
            <div className="col-7">
              <img
                src={iconObject[apiIcon]}
                className="main-icon img-fluid"
                alt={searchResults.weather[0].description}
              />
            </div>
            <h2 className="col-5 main-temp-container">
              {mainTemp(searchResults)}
              <div className="weather-description">
                {searchResults.weather[0].main}
              </div>
            </h2>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-xl-5 mt-5">
          <div className="container-radius">
            <div className="row date-details-container">
              <div className="col-xs-12 col-sm-7 details-container">
                <ul>
                  <li>Humidity: {searchResults.main.humidity}%</li>
                  <li>Wind: {Math.round(searchResults.wind.speed)} m/s</li>
                  <li>
                    Feels like:
                    {feelsLikeTemp(searchResults)}
                  </li>
                </ul>
              </div>

              <div className="col-xs-12 col-sm-5 date-container">
                <CurrentDate dt={searchResults.dt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
