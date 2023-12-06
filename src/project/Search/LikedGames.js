// LikedGames.js
import React from "react";
import { useLikedGames } from "./LikedGamesContext"; // Update the path based on your project structure

function LikedGames() {
  const { likedGames } = useLikedGames();

  return (
    <div className="container">
      <h1>Liked Games</h1>
      <ul>
        {likedGames.map((game, index) => (
          <li key={index}>
            {/* Display information about the liked game */}
            {game.teams.home.name} vs {game.teams.away.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LikedGames;
