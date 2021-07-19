import React from "react";
import { Route, Switch } from "react-router-dom";
import MiniGames from "./components/MiniGames";
import Navbar from "./components/Navbar";
import LightsOut from "./components/LightsOut";
import Hangman from "./components/Hangman";
import Yahtzee from "./components/Yahtzee";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/lightsout" component={LightsOut} />
        <Route path="/hangman" component={Hangman} />
        <Route path="/yahtzee" component={Yahtzee} />
        <Route path="/" component={MiniGames} exact />
      </Switch>
    </div>
  );
}

export default App;
