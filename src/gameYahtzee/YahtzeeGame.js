import React, { useState } from "react";
import Dice from "./Dice";
import "./Game.css";
const NUM_DICE = 5;
const NUM_ROLL = 3;

function YahtzeeGame(props) {
  const [state, setState] = useState({
    dice: Array.from({ length: NUM_DICE }),
    locked: Array(NUM_DICE).fill(false),
    rollsLeft: NUM_ROLL,
    rolling: false,
    scores: {
      ones: undefined,
      twos: undefined,
      threes: undefined,
      fours: undefined,
      fives: undefined,
      sixes: undefined,
      threeOfKind: undefined,
      fourOfKind: undefined,
      fullHouse: undefined,
      smallStraight: undefined,
      largeStraight: undefined,
      yahtzee: undefined,
      chance: undefined,
    },
  });
  function toggleLocked(idx) {
    // toggle whether idx is in locked or not

    if (state.rollsLeft > 0 && !state.rolling) {
      setState((st) => ({
        ...state,
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1),
        ],
      }));
    }
  }
  return (
    <div className="Game">
      <header className="Game-header">
        <h1 className="App-title">Yahtzee</h1>

        <section className="Game-dice-section">
          <Dice
            dice={state.dice}
            locked={state.locked}
            handleClick={toggleLocked}
            disabled={state.rollsLeft === 0}
            rolling={state.rolling}
          />
        </section>
      </header>
    </div>
  );
}

export default YahtzeeGame;
