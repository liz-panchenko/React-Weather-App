import React from "react";
import "./Forecast.css";

export default function Forecast({ fUnits, weekday }) {
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
              <span className="daily-temp card-CTemp">18</span>
              °C
            </p>
          </div>
        </div>
      </div>
  );
}
