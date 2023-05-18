import { createContext } from "react";

interface SnakeGameContextData {
  snake: number[][];
  apple: number[];
  gameOver: boolean;
  points: number;
  startGame: () => void;
  endGame: () => void;
  moveSnake: ({ keyCode }: { keyCode: number }) => void;
  createApple: () => number[]
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>;
  gameContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  checkCollision: (piece: any[], snk?: number[][]) => boolean;
  checkAppleCollision: (newSnake: number[][]) => boolean;
  gameLoop: () => void;
  showConfirmation: boolean;
  onClickOpenPopUp: () => void;
  onClickButtonConfirm: () => void;
  onClickButtonCancel: () => void;
  speed: number | null;
  currentStep: number;
  handleNextStep: () => void;
  handleBackStep: () => void;
  record: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const SnakeGameContext = createContext({} as SnakeGameContextData);