import React from "react";
import { Link } from "react-router-dom";
import "../styles.css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="Navbar-active navbar-brand">
        MiniGames
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/lightsout" className=" nav-link">
              Lights-Out
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hangman" className="nav-link">
              Hangman
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/yahtzee" className="nav-link">
              Yahtzee
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
