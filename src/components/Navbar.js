import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
class Narbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink exact activeClassName="Navbar-active" to="/">
          MiniGames
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/lightouts">
          Lights-Out
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/hangman">
          Hangman
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/yahtzee">
          Yahtzee
        </NavLink>
      </div>
    );
  }
}

export default Narbar;
