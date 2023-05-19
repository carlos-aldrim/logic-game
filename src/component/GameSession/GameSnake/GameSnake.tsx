import React from "react";
import { useInterval } from "hooks/useInterval";
import {
  CANVAS_SIZE,
  SCALE,
} from "config/constants";
import { useStyles } from "./GameSnake.styles";
import {
  ConfirmationPopup,
  EndGameButton,
  Score,
  StartGameButton,
  WinnerPopUp,
} from "component";
import { useGameSnake } from "hooks/useGameSnake";
import { ArrowBack } from "@mui/icons-material";

export const GameSnake: React.FC = () => {
  const styles = useStyles();
  const {
    canvasRef,
    snake,
    apple,
    gameOver,
    gameContainerRef,
    gameLoop,
    speed,
    startGame,
    points,
    showConfirmation,
    showRestart,
    onClickButtonConfirm,
    onClickButtonCancel,
    onClickButtonHome,
    onClickButtonRestart,
    onClickOpenPopUp,
    moveSnake,
    handleBackStep,
    record
  } = useGameSnake();

  React.useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, CANVAS_SIZE[0], CANVAS_SIZE[1]);
        context.fillStyle = "green";
        snake.forEach(([x, y]) => {
          if (x >= 0) {
            context.fillRect(x, y, 1, 1);
          }
        });
        context.fillStyle = "red";
        context.fillRect(apple[0], apple[1], 1, 1);
      }
    }
  }, [snake, apple, gameOver, canvasRef]);

  React.useEffect(() => {
    if (gameContainerRef.current) {
      gameContainerRef.current.focus();
    }
  });

  useInterval(() => gameLoop(), speed);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className={styles.gameContainer}
        role="button"
        tabIndex={0}
        ref={gameContainerRef}
        onKeyDown={(e) => moveSnake(e)}
      >
        <h2 className={styles.title}>Jogo da Cobra</h2>
        <label className={styles.description}>
          Tecla "SPACE" para iniciar e "Esc" para encerrar o jogo.
        </label>
        <canvas
          style={{ border: "3px solid #f4f4f4", borderRadius: "8px" }}
          ref={canvasRef}
          width={`${CANVAS_SIZE[0]}px`}
          height={`${CANVAS_SIZE[1]}px`}
        />
        <ArrowBack className={styles.back} onClick={handleBackStep} />
        <WinnerPopUp
          message={"Parabéns você ganhou " + points + " ponto(s)! Jogue novamente."}
          open={showRestart}
          onRestart={onClickButtonRestart}
          onHome={onClickButtonHome}
        />
      </div>
      <div className={styles.control}>
        <StartGameButton onClick={startGame} />
        <Score points={points} record={record} />
        <div>
          <ConfirmationPopup
            message="Tem certeza que deseja encerrar o jogo?"
            open={showConfirmation}
            onConfirm={onClickButtonConfirm}
            onCancel={onClickButtonCancel}
          />

          <EndGameButton onClick={onClickOpenPopUp} />
        </div>
      </div>
    </div>
  );
};
