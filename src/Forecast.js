import React from "react";
import "./Forecast.css";
import ForecastIcon from "./ForecastIcon";

export default function Forecast({ fUnits, forecastResults }) {
  console.log(forecastResults[0]);
  //   console.log("aaaaa");
  // let weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
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
    //   {weekdays.map(function(weekday, index){})}
    <div className="Forecast col-sm-4 col-md my-2">
      <div className="card text-center weather-card">
        <div className="card-body">
          <div className="card-title">Mon</div>
          <ForecastIcon />
          <div className="card-text">
            <span className="daily-temp card-CTemp">{forecastTemp()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
