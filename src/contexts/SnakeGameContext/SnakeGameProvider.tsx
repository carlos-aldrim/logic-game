import React from "react";
import { SnakeGameContext } from "./types";
import {
  APPLE_START,
  CANVAS_SIZE,
  DIRECTIONS,
  SCALE,
  SNAKE_START,
  SPEED,
} from "config/constants";
import { useToast } from "hooks/useToast";
import { useNavigate } from "react-router-dom";

export const SnakeGameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialCurrentStep = React.useMemo(() => {
    const currentStepSaved = localStorage.getItem("currentStepSnake");
    return currentStepSaved !== null ? parseInt(currentStepSaved) : 0;
  }, []);

  const navigate = useNavigate();
  const gameContainerRef = React.useRef<HTMLDivElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [snake, setSnake] = React.useState(SNAKE_START);
  const [apple, setApple] = React.useState(APPLE_START);
  const [dir, setDir] = React.useState([0, -1]);
  const [speed, setSpeed] = React.useState<number | null>(null);
  const [previousSpeed, setPreviousSpeed] = React.useState<number | null>(null);
  const [gameOver, setGameOver] = React.useState(false);
  const [points, setPoints] = React.useState(0);
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [showRestart, setShowRestart] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(initialCurrentStep);
  const { handleToastSnake } = useToast();
  const [record, setRecord] = React.useState<number>(
    localStorage.getItem("snakeRecord")
      ? parseInt(localStorage.getItem("snakeRecord")!)
      : 0
  );

  React.useEffect(() => {
    const currentStepSaved = localStorage.getItem("currentStepSnake");
    if (currentStepSaved !== null) {
      setCurrentStep(parseInt(currentStepSaved));
    }
  }, []);

  React.useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("currentStepSnake", currentStep.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [currentStep]);

  const startGame = React.useCallback(() => {
    handleToastSnake("Jogo iniciado. Boa sorte!");
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
    setPoints(0);
  }, [handleToastSnake]);

  const endGame = React.useCallback(() => {
    setShowRestart(true);
    setSpeed(null);
    setGameOver(true);
    handleToastSnake("Parabéns, você conseguiu " + points + " ponto(s)!");
    if (points > record) {
      setRecord(points);
      handleToastSnake("Parabéns, novo recorde!");
      localStorage.setItem("snakeRecord", points.toString());
    }
  }, [points, record, setSpeed, setGameOver, handleToastSnake, setRecord]);

  const onClickOpenPopUp = React.useCallback(() => {
    setShowConfirmation(true);
    if (speed !== null) setPreviousSpeed(speed);
    setSpeed(null);
  }, [setShowConfirmation, setPreviousSpeed, setSpeed, speed]);

  const moveSnake = React.useCallback(
    ({ keyCode }: { keyCode: number }) => {
      const handleKeyDown = (event: KeyboardEvent) => {
        const keysToPreventScroll = [32, 33, 34, 35, 36, 37, 38, 39, 40];

        if (keysToPreventScroll.includes(event.keyCode)) {
          event.preventDefault();
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      if (keyCode === 27) {
        if (gameContainerRef.current) {
          gameContainerRef.current.focus();
        }
        onClickOpenPopUp();
      }
      if (keyCode === 32 || keyCode === 13) return startGame();
      if (keyCode >= 37 && keyCode <= 40) setDir(DIRECTIONS[keyCode]);
      else return;

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    },
    [gameContainerRef, onClickOpenPopUp, startGame, setDir]
  );

  const createApple = React.useCallback(
    () =>
      apple.map((_, i) => Math.floor((Math.random() * CANVAS_SIZE[i]) / SCALE)),
    [apple]
  );

  const checkCollision = React.useCallback(
    (piece: any[], snk = snake) => {
      if (
        piece[0] * SCALE >= CANVAS_SIZE[0] ||
        piece[0] < 0 ||
        piece[1] * SCALE >= CANVAS_SIZE[1] ||
        piece[1] < 0
      ) return true;
      for (const segment of snk) if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
      return false;
    },
    [snake]
  );

  const checkAppleCollision = React.useCallback(
    (newSnake: number[][]) => {
      if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
        let newApple = createApple();
        while (checkCollision(newApple, newSnake)) {
          newApple = createApple();
        }
        setApple(newApple);
        setPoints(points + 1);
        if (speed !== null) setSpeed(speed - 1);
        return true;
      }
      return false;
    },
    [apple, createApple, checkCollision, points, speed]
  );

  const gameLoop = React.useCallback(() => {
    const snakeCopy = JSON.parse(JSON.stringify(snake));
    const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
    snakeCopy.unshift(newSnakeHead);
    if (checkCollision(newSnakeHead)) endGame();
    if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
    setSnake(snakeCopy);
  }, [snake, dir, checkCollision, endGame, checkAppleCollision]);

  const onClickButtonConfirm = React.useCallback(() => {
    setShowConfirmation(false);
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(null);
    setGameOver(false);
    setPoints(0);
    navigate("/");
  }, [navigate]);

  const onClickButtonHome = React.useCallback(() => {
    setShowRestart(false);
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(null);
    setGameOver(false);
    setPoints(0);
    navigate("/");
  }, [navigate]);

  const onClickButtonCancel = React.useCallback(() => {
    setShowConfirmation(false);
    setSpeed(previousSpeed);
  }, [previousSpeed]);

  const onClickButtonRestart = React.useCallback(() => {
    setShowRestart(false);
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(null);
    setGameOver(false);
    setPoints(0);
  }, []);

  const handleNextStep = React.useCallback(() => {
    setCurrentStep(currentStep + 1);
  }, [currentStep]);

  const handleBackStep = React.useCallback(() => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }, [currentStep]);

  const values = React.useMemo(
    () => ({
      snake,
      apple,
      gameOver,
      points,
      startGame,
      endGame,
      moveSnake,
      createApple,
      canvasRef,
      gameContainerRef,
      checkCollision,
      checkAppleCollision,
      onClickButtonHome,
      onClickButtonRestart,
      gameLoop,
      showConfirmation,
      showRestart,
      onClickOpenPopUp,
      onClickButtonConfirm,
      onClickButtonCancel,
      speed,
      handleNextStep,
      handleBackStep,
      currentStep,
      record,
      setCurrentStep,
    }),
    [
      apple,
      checkAppleCollision,
      checkCollision,
      createApple,
      currentStep,
      endGame,
      gameLoop,
      gameOver,
      handleBackStep,
      handleNextStep,
      moveSnake,
      onClickButtonCancel,
      onClickButtonConfirm,
      onClickButtonHome,
      onClickButtonRestart,
      onClickOpenPopUp,
      points,
      record,
      showConfirmation,
      showRestart,
      snake,
      speed,
      startGame,
    ]
  );

  return (
    <SnakeGameContext.Provider value={values}>
      {children}
    </SnakeGameContext.Provider>
  );
};
