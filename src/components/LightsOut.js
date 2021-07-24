import React from "react";
import Board from "../gameLightsout/Board";
import "../styles.css/LightsOut.css";

function LightsOut(props) {
  return (
    <div className="LightsOut">
      <Board />;
    </div>
  );
}

export default LightsOut;
