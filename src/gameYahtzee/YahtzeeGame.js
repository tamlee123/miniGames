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
  function animateRoll() {
    setState(() => ({
      ...state,
      rolling: true,
    }));
    setTimeout(roll, 1000);
  }
  function roll(e) {
    // roll dice whose indexes are in reroll
    setState((st) => ({
      ...state,
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft > 0 ? st.rollsLeft - 1 : 0,
      rolling: false,
    }));
  }
  function displayRollInfo() {
    const messages = [
      "0 Rolls Left",
      "1 Roll Left",
      "2 Rolls Left",
      "Starting Round",
    ];
    return messages[state.rollsLeft];
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
          <div className="Game-button-wrapper">
            <button
              disabled={
                state.locked.every((x) => x) ||
                state.rollsLeft === 0 ||
                state.rolling
              }
              onClick={animateRoll}
              className="Game-reroll"
            >
              {displayRollInfo()}
            </button>
          </div>
        </section>
      </header>
    </div>
  );
}

export default YahtzeeGame;
