import React from "react";
import GameCard from "./GameCard";
import data from "./../data";
import "../styles.css/MiniGame.css";

function MiniGames(props) {
  return (
    <div className="MiniGames">
      <div className="container">
        <div className="row">
          {data.games.map((game) => (
            <div className="col-xl-4" key={game._id}>
              <GameCard
                image={game.image}
                name={game.name}
                description={game.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiniGames;
