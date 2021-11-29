import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CityMainInfo from "./CityMainInfo";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  const [fUnits, setFUnits] = useState(false);
  const [forecastResults, setForecastResults] = useState([]);
  const [searchResults, setSearchResults] = useState(null);

  function displayForecasts(forecastResults) {
    if (forecastResults.length) {
      return (
        <div className="row justify-content-center px-3">
          <Forecast fUnits={fUnits} forecastResultsDay={forecastResults[0]} />
          <Forecast fUnits={fUnits} forecastResultsDay={forecastResults[1]} />
          <Forecast fUnits={fUnits} forecastResultsDay={forecastResults[2]} />
          <Forecast fUnits={fUnits} forecastResultsDay={forecastResults[3]} />
          <Forecast fUnits={fUnits} forecastResultsDay={forecastResults[4]} />
        </div>
      );
    } else {
      return null;
    }
  }

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
          {displayForecasts(forecastResults)}
        </div>
        <Footer />
      </div>
    </div>
  );
}
