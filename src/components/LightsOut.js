import React from "react";
import Board from "../gameLightsout/Board";
import "../styles.css/LightsOut.css";
import Instruction from "./Instruction";

function LightsOut(props) {
  const instruction = [
    "The board has 25 lights, some are on, and some are off.",
    "Clicking a light will toggle it (on to off, and off to on).",
    "It will also toggle the 4 lights around it(left, right, above and below).",
    "To solve the puzzle, you have to turn off the lights on the board.",
  ];
  return (
    <div>
      <Instruction instruction={instruction} />
      <div className="LightsOut">
        <Board />
      </div>
    </div>
  );
}

export default LightsOut;
