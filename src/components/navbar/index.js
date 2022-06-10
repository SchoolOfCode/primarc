import "./index.css";
import React, { useState, useEffect } from "react";

function Navbar({ onClick }) {
  function toggleNav(e) {
    e.target.classList.toggle("change");
  }
  return (
    <nav>
      <div className="container" onClick={toggleNav}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <h1 id="navItem" className="title">
        P R I M A R C
      </h1>
      <div className="dark-mode-container">
        <p className="dark-mode-text">Dark Mode</p>
        <label className="switch">
          <input type="checkbox" onClick={onClick} />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
