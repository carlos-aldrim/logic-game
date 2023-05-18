import { createContext } from "react";
import { Option } from "config/options";

interface JokenpoGameContextData {
  gameContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  playerOption: Option | null;
  computerOption: Option | null;
  winner: string;
  points: number;
  showConfirmation: boolean;
  getWinner: (playerOption: Option, computerOption: Option) => string;
  handlePlayerOption: (option: Option) => void;
  gameOption: ({ keyCode }: { keyCode: number }) => void;
  onClickOpenPopUp: () => void;
  onClickButtonConfirm: () => void;
  onClickButtonCancel: () => void;
  startGame: boolean;
  currentStep: number;
  handleNextStep: () => void;
  handleBackStep: () => void;
  record: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const JokenpoGameContext = createContext({} as JokenpoGameContextData);