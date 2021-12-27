import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import "../styles.css/GameCard.css";

function GameCard(props) {
  const game = props;

  const [active, setActive] = useState("false");
  const toggle = () => {
    setActive(!active);
  };
  return (
    <div className="game-card">
      <div className="card" style={{ width: "18rem" }}>
        <img src={game.image} className="card-img-top" alt="game" />
        <div className="card-body">
          <h5 className="card-title">{game.name}</h5>
          <div>
            <IconButton onClick={toggle}>
              <h5 className="desc">Description</h5>
              <ArrowDropDownIcon />
            </IconButton>
            {!active ? <ul>{game.description}</ul> : null}
          </div>
          <div>
            <Link to={`/${game.name.toLowerCase()}`}>
              <button variant="contained" className="button">
                Play Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
