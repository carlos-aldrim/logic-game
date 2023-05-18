import { SnakeGameContext } from "contexts";
import React from "react";

export const useGameSnake = () => {
  return React.useContext(SnakeGameContext);
};