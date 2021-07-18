import React from "react";
import GameCard from "./GameCard";
import HomeGameBackground from "../bgr.png";
import data from "./../data";
import "../styles/games.css";

function MiniGames(props) {
  return (
    <div
      className="HomeBackground"
      style={{ backgroundImage: `url(${HomeGameBackground})` }}
    >
      <div className="container">
        <div className="row">
          {data.games.map((game) => (
            <div className="col-lg-4">
              <GameCard
                key={game._id}
                image={game.image}
                name={game.name}
                instruction={game.instruction}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiniGames;
