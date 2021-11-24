import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CityMainInfo from "./CityMainInfo";
import "./App.css";

export default function App() {
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
          <Navbar setSearchResults={setSearchResults} />
          <CityMainInfo searchResults={searchResults} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
