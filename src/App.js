import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CityMainInfo from "./CityMainInfo";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  console.log("vvv");
  const [fUnits, setFUnits] = useState(false);
  const [forecastResults, setForecastResults] = useState([]);
  const [searchResults, setSearchResults] = useState(null);

  function displayForecasts(forecastResults) {
    if (forecastResults.length) {
      //  return forecastResults.map((forecast, index) => {

      //             return <Forecast
      //                         key={index}
      //                         searchResults={searchResults}
      //                         fUnits={fUnits}
      //                         forecastResults={forecastResults}
      //                         weekday={"Mon"}
      //                       />
      // })
      return (
        <Forecast
          fUnits={fUnits}
          forecastResults={forecastResults}
        />
      );
    } else {
      return <p>loading...</p>;
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
          <div className="row justify-content-center px-3">
            {displayForecasts(forecastResults)}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
