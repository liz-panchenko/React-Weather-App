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

export default function CityMainInfo(props) {
  let apiIcon = props.searchResults.weather[0].icon;
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

  return (
    <div className="CityMainInfo">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-xl-7 mt-5">
          <h1 id="main-city">{props.searchResults.name}</h1>
          <div className="row">
            <div className="col-7">
              <img
                src={iconObject[apiIcon]}
                className="main-icon img-fluid"
                id="main-icon"
                alt="cloudy"
              />
            </div>
            <h2 className="col-5 main-temp-container">
              <div id="main-city-temp">
                <span className="cTemp">
                  {Math.round(props.searchResults.main.temp)}
                </span>
                °C
              </div>
              <div className="weather-description" id="weather-description">
                Clouds
              </div>
            </h2>
          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-xl-5 mt-5">
          <div className="container-radius">
            <div className="row date-details-container">
              <div className="col-xs-12 col-sm-7 details-container">
                <ul>
                  <li>Humidity: {props.searchResults.main.humidity}%</li>
                  <li>
                    Wind: {Math.round(props.searchResults.wind.speed)} m/s
                  </li>
                  <li>
                    Feels like:
                    <span className="feelsLikecTemp">
                      {" "}
                      {Math.round(props.searchResults.main.feels_like)}
                    </span>
                    °C
                  </li>
                </ul>
              </div>

              <div className="col-xs-12 col-sm-5 date-container">
                <CurrentDate dt={props.searchResults.dt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
