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
            <div className="col-xl-4 col-lg-6" key={game._id}>
              <GameCard
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
