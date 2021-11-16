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
    },
  });

  return (
    <div className="App">
      <div className="container">
        <div className="main-container">
          <Navbar setSearchResults={setSearchResults} />
          <CityMainInfo searchResults={searchResults} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
