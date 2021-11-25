import React from "react";

export default function CurrentDate(props) {
  let formattedDate = new Date(props.dt * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[formattedDate.getDay()];
  let date = formattedDate.getDate();
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  let month = months[formattedDate.getMonth()];
  let hours = formattedDate.getHours();
  if (hours < 10 ) {
    hours = `0${hours}`
  }
  let minutes = formattedDate.getMinutes();
  if (minutes < 10 ) {
    minutes = `0${minutes}`
  }
  return (
    <ul>
      <li>Last update</li>
      <li>
        {" "}
        {day} {date} {month}{" "}
      </li>
      <li>
        {hours}:{minutes}
      </li>
    </ul>
  );
}
