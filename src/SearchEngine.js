import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchInput, setSearchInput] = useState("London");
  if (isLoaded) {
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
  } else {
    makeAPIrequest();
    // forecastAPIrequest();
    return <div>Loading....</div>;
  }
  function makeAPIrequest() {
    let apiKey = "999ce561ec0a25a794172c87e6a0379b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getApiInfo);
    setIsLoaded(true);
  }
  function getApiInfo(response) {
    props.setSearchResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    makeAPIrequest();
  }

  function updateSearchInput(event) {
    setSearchInput(event.target.value);
  }
}
