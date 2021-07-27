import React from "react";
import YahtzeeGame from "../gameYahtzee/YahtzeeGame";
import "../styles.css/Yahtzee.css";
function Yahtzee(props) {
  return (
    <div className="Yahtzee">
      <YahtzeeGame />
    </div>
  );
}

export default Yahtzee;
