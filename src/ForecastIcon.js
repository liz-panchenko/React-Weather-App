import React from "react";
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

export default function ForecastIcon(forecastResults) {
  return (
    <img
      src={ClearSky}
      className="card-img img-fluid"
      alt="weather icon"
    />
  );
}
