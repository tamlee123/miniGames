import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

function GameCard(props) {
  const game = props;
  const [active, setActive] = useState("false");
  const toggle = () => {
    setActive(!active);
  };
  return (
    <div className="GameCard">
      <div className="card" style={{ width: "18rem", margin: "5rem" }}>
        <img src={game.image} className="card-img-top" alt="game" />
        <div className="card-body">
          <h5 className="card-title">{game.name}</h5>
          <div>
            <IconButton onClick={toggle}>
              <h5>Instruction</h5>
              <ArrowDropDownIcon />
            </IconButton>
            {!active ? (
              <ul>
                {game.instruction.map((guide, i) => (
                  <li className="list-group-item" key={i}>
                    {guide}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div>
            <Link to="/">
              <button variant="contained" className="button">
                Play Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
