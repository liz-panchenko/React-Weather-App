import React from "react";
import "./Forecast.css";
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


export default function Forecast({ fUnits, forecastResults }) {
//   console.log(forecastIconCode);
  //   console.log("aaaaa");
  // let weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  function forecastDay() {
 let forecastWeekday = new Date(forecastResults[0].dt * 1000);
 let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 let day = days[forecastWeekday.getDay()];
 return day;
  }
  function forecastIcon() {
 let forecastIconCode = iconCode.weather[0].icon;
 let forecastIconObject = {
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
 console.log(iconCode);
 return (
   <img
     src={forecastIconObject[forecastIconCode]}
     className="card-img img-fluid"
     alt="weather icon"
   />
 );
  }
  function forecastTemp() {
    let forecastMaxCTemp = Math.round(forecastResults[0].temp.max);
    let forecastMinCTemp = Math.round(forecastResults[0].temp.min);
    let forecastMaxFTemp = Math.round((forecastMaxCTemp * 9) / 5 + 32);
    let forecastMinFTemp = Math.round((forecastMinCTemp * 9) / 5 + 32);
    if (fUnits) {
      return (
        <span>
          <span>
            <strong>{forecastMaxFTemp}</strong> | {forecastMinFTemp}
          </span>
          °F
        </span>
      );
    } else {
      return (
        <div>
          <span>
            <strong>{forecastMaxCTemp}</strong> | {forecastMinCTemp}
          </span>
          °C
        </div>
      );
    }
  }
  return (
    <div className="Forecast col-sm-4 col-md my-2">
      <div className="card text-center weather-card">
        <div className="card-body">
          <div className="card-title">{forecastDay()}</div>
          {forecastIcon()}
          <div className="card-text">
            <span className="daily-temp card-CTemp">{forecastTemp()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
