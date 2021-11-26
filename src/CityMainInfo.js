import React from "react";
import "./CityMainInfo.css";
import LastUpdateDate from "./LastUpdateDate";
import MainIcon from "./MainIcon";

export default function CityMainInfo({ searchResults, fUnits }) {
  if (!searchResults) return <div>loading...</div>
  
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
              <MainIcon searchResults={searchResults} />
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
                <LastUpdateDate dt={searchResults.dt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
