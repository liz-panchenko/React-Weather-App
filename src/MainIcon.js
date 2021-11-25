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

export default function MainIcon({ searchResults }) {
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
    
    return (
      <img
        src={iconObject[apiIcon]}
        className="main-icon img-fluid"
        alt={searchResults.weather[0].description}
      />
    );
}