import React from "react";
import { NavLink } from "react-router-dom";
//import "../styles/Navbar.css";
function Narbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink to="/" className="navbar-brand">
        MiniGames
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/lightsout" className="nav-link">
              Lights-Out
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/hangman" className="nav-link">
              Hangman
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/yahtzee" className="nav-link">
              Yahtzee
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Narbar;
