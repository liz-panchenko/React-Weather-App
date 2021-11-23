import React from "react";
import WeatherImg from "./images/3.4.clouds.png";
import "./CityMainInfo.css";
import CurrentDate from "./CurrentDate";

export default function CityMainInfo(props) {
  return (
    <div className="CityMainInfo">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-xl-7 mt-5">
          <h1 id="main-city">{props.searchResults.name}</h1>
          <div className="row">
            <div className="col-7">
              <img
                src={WeatherImg}
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
