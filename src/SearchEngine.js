import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  const [searchInput, setSearchInput] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a96f5721c6287ed7127e00501efd3d4f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getApiInfo);
  }
  function getApiInfo(response) {
    props.setSearchResults(response.data);
  }
  function updateSearchInput(event) {
    setSearchInput(event.target.value);
  }
  return (
    <form className="SearchEngine" onSubmit={handleSubmit}>
      <input
        type="search"
        className="search-input"
        autoComplete="off"
        placeholder="City"
        onChange={updateSearchInput}
      />
      <button className="search-button" type="submit">
        <span className="search-button-text">Search</span>
        <i className="search-icon fas fa-search"></i>
      </button>
    </form>
  );
}
