import React from "react";
import "./Forecast.css";

export default function Forecast({ fUnits, weekday }) {
  function forecastTemp() {
    //   let forecastCTemp = Math.round(searchResults.main.temp);
    let forecastCTemp = 18;
    let forecastFTemp = Math.round((forecastCTemp * 9) / 5 + 32);
    if (fUnits) {
      return (
        <span>
          <span>{forecastFTemp}</span>
          °F
        </span>
      );
    } else {
      return (
        <div>
          <span>{forecastCTemp}</span>
          °C
        </div>
      );
    }
  }
  return (
    <div className="Forecast col-sm-4 col-md my-2">
      <div className="card text-center weather-card">
        <div className="card-body">
          <div className="card-title">{weekday}</div>
          <img
            src="${cardIcon(dailyForecast.weather[0].icon)}"
            className="card-img"
            alt="clouds"
          />
          <p className="card-text">
            <span className="daily-temp card-CTemp">{forecastTemp()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
