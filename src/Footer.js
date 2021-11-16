import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        This project was coded by
        <span className="codder-name">Liz Panchenko</span>
        and is open-sourced on
        <a
          href="https://github.com/liz-panchenko/my-weather-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
