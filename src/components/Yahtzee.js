import React from "react";
import YahtzeeGame from "../gameYahtzee/YahtzeeGame";
import Instruction from "./Instruction";
import "../styles.css/Yahtzee.css";

function Yahtzee(props) {
  const instruction = [
    "A game is played over 13 rounds.",
    "Each round, you roll five 6-sided dice.",
    "You may click on any number of dice to “freeze” or “unfreeze” them",
    "You may re-roll the unfrozen dice up to 2 times.",
    "Each round, you must assign their dice to any unclaimed scoring category. Each category scores differently.",
    "After 13 rounds, the game is over, and your score is the total of each scoring category.",
  ];
  return (
    <div>
      <Instruction instruction={instruction} />
      <div className="Yahtzee">
        <YahtzeeGame />
      </div>
    </div>
  );
}

export default Yahtzee;
