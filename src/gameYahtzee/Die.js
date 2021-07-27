import React from "react";
import "./Die.css";
const numberWords = ["one", "two", "three", "four", "five", "six"];

function Die({ locked, handleClick, val, idx, disabled, rolling }) {
  const handleClicked = () => {
    handleClick(idx);
  };

  let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x`;
  if (locked) classes += " Die-locked";
  if (rolling) classes += " Die-rolling";
  return <i className={classes} onClick={handleClicked} disabled={disabled} />;
}

export default Die;
