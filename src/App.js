import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CityMainInfo from "./CityMainInfo";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  const [fUnits, setFUnits] = useState(false);
  const [forecastResults, setForecastResults] = useState(null);
  const [searchResults, setSearchResults] = useState({
    name: "London",
    main: {
      temp: 16,
      feels_like: 15,
      humidity: 70,
    },
    wind: {
      speed: 5.33,
    },
    dt: "1637668833",
    weather: [{ icon: "10d", main: "Clouds", description: "few clouds" }],
  });

  return (
    <div className="App">
      <div className="container">
        <div className="main-container px-md-2">
          <Navbar
            setSearchResults={setSearchResults}
            setForecastResults={setForecastResults}
            setFUnits={setFUnits}
            fUnits={fUnits}
          />
          <CityMainInfo searchResults={searchResults} fUnits={fUnits} />
          <div className="row justify-content-center px-3">
            <Forecast
              fUnits={fUnits}
              forecastResults={forecastResults}
              weekday={"Mon"}
            />
            <Forecast
              fUnits={fUnits}
              forecastResults={forecastResults}
              weekday={"Tue"}
            />
            <Forecast
              fUnits={fUnits}
              forecastResults={forecastResults}
              weekday={"Wed"}
            />
            <Forecast
              fUnits={fUnits}
              forecastResults={forecastResults}
              weekday={"Thu"}
            />
            <Forecast
              fUnits={fUnits}
              forecastResults={forecastResults}
              weekday={"Fri"}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
