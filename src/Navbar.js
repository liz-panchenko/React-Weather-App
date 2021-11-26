import React from "react";
import "./Navbar.css";
import LocationImg from "./images/location.png";
import SearchEngine from "./SearchEngine";
import TemperatureUnitButton from "./TemperatureUnitButton";

export default function Navbar({ setSearchResults, setforecastResults, setFUnits, fUnits }) {
  return (
    <div className="Navbar">
      <div className="row navbar">
        <div className="col-6 d-flex">
          <SearchEngine
            setSearchResults={setSearchResults}
            // setforecastResults={setforecastResults}
          />
        </div>
        <div className="col-6 d-flex justify-content-end gap-1">
          <button type="button" className="current-location-button">
            <img src={LocationImg} alt="location-icon" />
            <span className="current-location-button-text">
              Current location
            </span>
          </button>
          <TemperatureUnitButton setFUnits={setFUnits} fUnits={fUnits} />
        </div>
      </div>
    </div>
  );
}
