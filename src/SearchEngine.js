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
    return <div>Loading....</div>;
  }
  function makeAPIrequest() {
    console.log(111)
    setIsLoaded(true);
    let apiKey = "999ce561ec0a25a794172c87e6a0379b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getApiInfo);
  }
  function getApiInfo(response) {
    console.log("callback");
    props.setSearchResults(response.data);
    forecastAPIrequest(response.data.coord);
  }

  function handleSubmit(event) {
    event.preventDefault();
    makeAPIrequest();
  }

  function updateSearchInput(event) {
    setSearchInput(event.target.value);
  }
  ////////////////////////////Forecast
  function forecastAPIdata(response) {
    props.setForecastResults(response.data.daily);
  }
  function forecastAPIrequest(props) {
    console.log(222);
    let longitude = props.lon;
    let latitude = props.lat;
    console.log(longitude);
    let apiKey = "999ce561ec0a25a794172c87e6a0379b";
    let forecastAPIurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,hourly,minutely,alerts&appid=${apiKey}&units=metric`;
    console.log(forecastAPIurl);
    axios.get(forecastAPIurl).then(forecastAPIdata);
  }
}
