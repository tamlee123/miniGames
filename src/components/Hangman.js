import React from "react";
import HangManGame from "../gameHangman/HangManGame";
import Instruction from "./Instruction";

function Hangman(props) {
  const instruction = [
    "You will see a number of short lines together that represent the number of letters in the word you have to guess. (e.g. _ _ _ _ _ _ _ ).",
    "In a box about these lines you will see some letters. Click on the letter that you think is included in the word.",
    "If you guess the correct letter, that letter will appear in the appropriate position in the word. It will replace one of the little lines (e.g. _ _ A _ _ _ _ ).",
    "If the letter you guessed is not in the word, a part of the body will appear in the diagram on the left. If the body becomes completed, you are 'hanged' which means you have lost.",
    "If you guess all the letters in the word before you are 'hanged', you win.",
  ];
  return (
    <div>
      <Instruction instruction={instruction} />
      <div>
        <HangManGame />
      </div>
    </div>
  );
}

export default Hangman;
