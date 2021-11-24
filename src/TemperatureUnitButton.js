import React from "react";

export default function TemperatureUnitButton({ setFUnits, fUnits }) {
  function convertTemperature() {
    setFUnits(!fUnits);
  }

  function displayUnit() {
    return fUnits ? "C" : "F";
  }
  return (
    <button
      type="button"
      className="temperature-unit-button"
      onClick={convertTemperature}
    >
      {displayUnit()}°
    </button>
  );
}
