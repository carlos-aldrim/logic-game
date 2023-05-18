import React from "react";
import { Link } from "react-router-dom";
import { PagesRoutes } from "views";
import { useStyles } from "./Header.styles";
import { useGameSnake } from "hooks/useGameSnake";
import { useGameJokenpo } from "hooks/useJokenpoGame";

export const Header: React.FC = () => {
  const styles = useStyles();

  const { setCurrentStep: setCurrentStepSnake } = useGameSnake();
  const { setCurrentStep: setCurrentStepJokenpo } = useGameJokenpo();

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Link to={PagesRoutes.home}>
          Início
        </Link>
      </div>
      <div className={styles.games}>
        <Link to={PagesRoutes.gameSnake} onClick={() => setCurrentStepSnake(0)}>
          Snake Game
        </Link>
        <Link to={PagesRoutes.jokenpo} onClick={() => setCurrentStepJokenpo(0)}>
          Jokenpô
        </Link>
      </div>
    </div>
  );
};