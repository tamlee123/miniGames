import React from "react";
import HangManGame from "../gameHangman/HangManGame";
import "../styles.css/Hangman.css";

function Hangman(props) {
  return (
    <div className="HangMan">
      <HangManGame />
    </div>
  );
}

export default Hangman;
