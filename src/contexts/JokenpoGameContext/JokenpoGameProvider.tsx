import React from "react";
import { JokenpoGameContext } from "./JokenpoGameContext";
import { Option, options } from "config/options";
import { useToast } from "hooks/useToast";

export const JokenpoGameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialCurrentStep = React.useMemo(() => {
    const currentStepSaved = localStorage.getItem("currentStepJokenpo");
    return currentStepSaved !== null ? parseInt(currentStepSaved) : 0;
  }, []);

  const gameContainerRef = React.useRef<HTMLDivElement | null>(null);
  const [playerOption, setPlayerOption] = React.useState<Option | null>(null);
  const [computerOption, setComputerOption] = React.useState<Option | null>(
    null
  );
  const [winner, setWinner] = React.useState("");
  const [points, setPoints] = React.useState(0);
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [startGame, setStartGame] = React.useState(true);
  const [currentStep, setCurrentStep] = React.useState(initialCurrentStep);
  const { handleToast } = useToast();
  const [record, setRecord] = React.useState<number>(
    localStorage.getItem("snakeRecord")
      ? parseInt(localStorage.getItem("snakeRecord")!)
      : 0
  );

  React.useEffect(() => {
    const currentStepSaved = localStorage.getItem("currentStepJokenpo");
    if (currentStepSaved !== null) {
      setCurrentStep(parseInt(currentStepSaved));
    }
  }, []);

  React.useEffect(() => {
    if (points > record) {
      setRecord(points);
      handleToast("Parabéns, novo recorde!");
      localStorage.setItem("snakeRecord", points.toString());
    }
  }, [handleToast, points, record]);

  React.useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("currentStepJokenpo", currentStep.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [currentStep, handleToast, points, record]);

  const getWinner = React.useCallback(
    (playerOption: Option, computerOption: Option): string => {
      if (
        (playerOption === Option.Rock && computerOption === Option.Scissors) ||
        (playerOption === Option.Paper && computerOption === Option.Rock) ||
        (playerOption === Option.Scissors && computerOption === Option.Paper)
      ) {
        handleToast("Você ganhou, Parabéns!");
        setPoints(points + 1);
        return "Parabéns, você ganhou!";
      } else if (playerOption === computerOption) {
        handleToast("Empate.");
        return "Empate";
      } else {
        handleToast("Que pena, você perdeu!");
        return "Você perdeu!";
      }
    },
    [handleToast, points]
  );

  const handlePlayerOption = React.useCallback(
    (option: Option) => {
      setStartGame(false);
      const randomOption = options[Math.floor(Math.random() * options.length)];
      const result = getWinner(option, randomOption);
      setPlayerOption(option);
      setComputerOption(randomOption);
      setWinner(result);
      setTimeout(() => {
        setPlayerOption(null);
        setComputerOption(null);
        setStartGame(true);
      }, 2000);
    },
    [getWinner]
  );

  const gameOption = React.useCallback(
    ({ keyCode }: { keyCode: number }) => {
      if (keyCode === 82) handlePlayerOption(Option.Rock);
      if (keyCode === 80) handlePlayerOption(Option.Paper);
      if (keyCode === 83) handlePlayerOption(Option.Scissors);
    },
    [handlePlayerOption]
  );

  const onClickOpenPopUp = () => {
    setShowConfirmation(true);
  };

  const onClickButtonConfirm = React.useCallback(() => {
    setShowConfirmation(false);
    handleToast("Parabéns você conseguiu " + points + " ponto(s)!");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }, [handleToast, points]);

  const onClickButtonCancel = React.useCallback(() => {
    setShowConfirmation(false);
  }, []);

  const handleNextStep = React.useCallback(() => {
    setCurrentStep(currentStep + 1);
  }, [currentStep]);

  const handleBackStep = React.useCallback(() => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }, [currentStep]);

  React.useEffect(() => {
    if (currentStep !== 1) setPoints(0);
  }, [currentStep]);

  const values = React.useMemo(
    () => ({
      gameContainerRef,
      playerOption,
      computerOption,
      winner,
      points,
      showConfirmation,
      getWinner,
      handlePlayerOption,
      gameOption,
      onClickOpenPopUp,
      onClickButtonConfirm,
      onClickButtonCancel,
      startGame,
      currentStep,
      handleNextStep,
      handleBackStep,
      record,
      setCurrentStep,
    }),
    [
      computerOption,
      currentStep,
      gameOption,
      getWinner,
      handleBackStep,
      handleNextStep,
      handlePlayerOption,
      onClickButtonCancel,
      onClickButtonConfirm,
      playerOption,
      points,
      record,
      showConfirmation,
      startGame,
      winner,
    ]
  );

  return (
    <JokenpoGameContext.Provider value={values}>
      {children}
    </JokenpoGameContext.Provider>
  );
};
