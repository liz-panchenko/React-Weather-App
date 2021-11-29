import React from "react";
import "./Navbar.css";
import SearchEngine from "./SearchEngine";
import TemperatureUnitButton from "./TemperatureUnitButton";

export default function Navbar({
  setSearchResults,
  setForecastResults,
  setFUnits,
  fUnits,
}) {
  return (
    <div className="Navbar">
      <div className="row navbar">
        <div className="col-6 d-flex">
          <SearchEngine
            setSearchResults={setSearchResults}
            setForecastResults={setForecastResults}
          />
        </div>
        <div className="col-6 d-flex justify-content-end gap-1">
          <TemperatureUnitButton setFUnits={setFUnits} fUnits={fUnits} />
        </div>
      </div>
    </div>
  );
}
