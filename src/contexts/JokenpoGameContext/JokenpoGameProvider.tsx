import React from "react";
import { JokenpoGameContext } from "./JokenpoGameContext";
import { Option, options } from "config/options";
import { useToast } from "hooks/useToast";
import { useNavigate } from "react-router-dom";

export const JokenpoGameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const initialCurrentStep = React.useMemo(() => {
    const currentStepSaved = localStorage.getItem("currentStepJokenpo");
    return currentStepSaved !== null ? parseInt(currentStepSaved) : 0;
  }, []);

  const navigate = useNavigate();
  const gameContainerRef = React.useRef<HTMLDivElement | null>(null);
  const [playerOption, setPlayerOption] = React.useState<Option | null>(null);
  const [computerOption, setComputerOption] = React.useState<Option | null>(
    null
  );
  const [winner, setWinner] = React.useState("");
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [showRestart, setShowRestart] = React.useState(false);
  const [startGame, setStartGame] = React.useState(true);
  const [currentStep, setCurrentStep] = React.useState(initialCurrentStep);
  const { handleToastJokenpo } = useToast();

  React.useEffect(() => {
    const currentStepSaved = localStorage.getItem("currentStepJokenpo");
    if (currentStepSaved !== null) {
      setCurrentStep(parseInt(currentStepSaved));
    }
  }, []);

  React.useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("currentStepJokenpo", currentStep.toString());
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [currentStep, handleToastJokenpo]);

  const getWinner = React.useCallback(
    (playerOption: Option, computerOption: Option): string => {
      if (
        (playerOption === Option.Rock && computerOption === Option.Scissors) ||
        (playerOption === Option.Paper && computerOption === Option.Rock) ||
        (playerOption === Option.Scissors && computerOption === Option.Paper)
      ) {
        handleToastJokenpo("Você ganhou, Parabéns!");
        return "Parabéns, você GANHOU!";
      } else if (playerOption === computerOption) {
        handleToastJokenpo("Empate! jogue novamente.");
        return "EMPATE! jogue novamente.";
      } else {
        handleToastJokenpo("Você perdeu! jogue novamente.");
        return "Que pena, você PERDEU! jogue novamente.";
      }
    },
    [handleToastJokenpo]
  );

  const handlePlayerOption = React.useCallback(
    (option: Option) => {
      setStartGame(false);
      const randomOption = options[Math.floor(Math.random() * options.length)];
      const result = getWinner(option, randomOption);
      setPlayerOption(option);
      setComputerOption(randomOption);
      setWinner(result);
      setShowRestart(true);
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
    setWinner("");
    setPlayerOption(null);
    setComputerOption(null);
    setStartGame(true);
    setCurrentStep(0);
    navigate("/");
  }, [navigate]);

  const onClickButtonHome = React.useCallback(() => {
    setShowRestart(false);
    setWinner("");
    setPlayerOption(null);
    setComputerOption(null);
    setStartGame(true);
    setCurrentStep(0);
    navigate("/");
  }, [navigate]);

  const onClickButtonCancel = React.useCallback(() => {
    setShowConfirmation(false);
  }, []);

  const onClickButtonRestart = React.useCallback(() => {
    setShowRestart(false);
    setWinner("");
    setPlayerOption(null);
    setComputerOption(null);
    setStartGame(true);
  }, []);

  const handleNextStep = React.useCallback(() => {
    setCurrentStep(currentStep + 1);
  }, [currentStep]);

  const handleBackStep = React.useCallback(() => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  }, [currentStep]);

  const values = React.useMemo(
    () => ({
      gameContainerRef,
      playerOption,
      computerOption,
      winner,
      showConfirmation,
      showRestart,
      getWinner,
      handlePlayerOption,
      gameOption,
      onClickOpenPopUp,
      onClickButtonConfirm,
      onClickButtonHome,
      onClickButtonCancel,
      onClickButtonRestart,
      startGame,
      currentStep,
      handleNextStep,
      handleBackStep,
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
      onClickButtonHome,
      onClickButtonRestart,
      playerOption,
      showConfirmation,
      showRestart,
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
