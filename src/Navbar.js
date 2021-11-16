import React from "react";
import "./Navbar.css";
import LocationImg from "./images/location.png";
import SearchEngine from "./SearchEngine";

export default function Navbar({ setSearchResults }) {
  return (
    <div className="Navbar">
      <div className="row navbar">
        <div className="col-6 d-flex">
          <SearchEngine setSearchResults={setSearchResults} />
        </div>
        <div className="col-6 d-flex justify-content-end gap-1">
          <button
            type="button"
            className="current-location-button"
            id="current-location-button"
          >
            <img src={LocationImg} alt="location-icon" />
            <span className="current-location-button-text">
              Current location
            </span>
          </button>
          <button
            type="button"
            id="temperature-unit-button"
            className="temperature-unit-button"
          >
            °F
          </button>
        </div>
      </div>
    </div>
  );
}
