import React from "react";
import GameCard from "./GameCard";
import data from "./../data";

function MiniGames(props) {
  return (
    <div className="HomeBackground">
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
