// LikedGamesContext.js
import React, { createContext, useContext, useState } from "react";

const LikedGamesContext = createContext();

export const LikedGamesProvider = ({ children }) => {
  const [likedGames, setLikedGames] = useState([]);

  const addLikedGame = (game) => {
    setLikedGames((prevLikedGames) => [...prevLikedGames, game]);
  };

  return (
    <LikedGamesContext.Provider value={{ likedGames, addLikedGame }}>
      {children}
    </LikedGamesContext.Provider>
  );
};

export const useLikedGames = () => {
  return useContext(LikedGamesContext);
};
