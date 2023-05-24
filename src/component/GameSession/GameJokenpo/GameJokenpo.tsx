import React from "react";
import { useStyles } from "./GameJokenpo.styles";
import { RenderConditional } from "component/RenderConditional";
import {
  ConfirmationPopup,
  EndGameButton,
  LoadingJokenpo,
  WinnerPopUp,
} from "component";
import { useGameJokenpo } from "hooks/useJokenpoGame";
import { Option } from "config/options";
import { ArrowBack } from "@mui/icons-material";
import { Paper, Rock, Scissors } from "views/components";

export const GameJokenpo: React.FC = () => {
  const styles = useStyles();
  const {
    gameContainerRef,
    gameOption,
    handlePlayerOption,
    winner,
    playerOption,
    computerOption,
    showConfirmation,
    onClickButtonHome,
    onClickButtonConfirm,
    onClickButtonCancel,
    onClickButtonRestart,
    onClickOpenPopUp,
    startGame,
    handleBackStep,
    showRestart,
  } = useGameJokenpo();

  React.useEffect(() => {
    if (gameContainerRef.current) {
      gameContainerRef.current.focus();
    }
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={styles.mainContainer}
      role="button"
      tabIndex={0}
      autoFocus
      ref={gameContainerRef}
      onKeyDown={(e) => gameOption(e)}
    >
      <div className={styles.gameContainer}>
        <h2 className={styles.title}>Jokenpô</h2>
        <label className={styles.description}>
          Tecla "R" é pedra, "P" é papel e "S" é tesoura.
        </label>
        <div className={styles.control}>
          <button onClick={() => handlePlayerOption(Option.Rock)}>
            Pedra (R)
          </button>
          <button onClick={() => handlePlayerOption(Option.Paper)}>
            Papel (P)
          </button>
          <button onClick={() => handlePlayerOption(Option.Scissors)}>
            Tesoura (S)
          </button>
        </div>
        <ArrowBack className={styles.back} onClick={handleBackStep} />
        {startGame && (
          <RenderConditional condition={startGame === true}>
            <LoadingJokenpo />
          </RenderConditional>
        )}
        {playerOption && computerOption && (
          <div>
            <WinnerPopUp
              message={winner}
              open={showRestart}
              onRestart={onClickButtonRestart}
              onHome={onClickButtonHome}
            />
            <div className={styles.hands}>
              <RenderConditional condition={playerOption === "Papel"}>
                <Paper />
              </RenderConditional>
              <RenderConditional condition={playerOption === "Pedra"}>
                <Rock />
              </RenderConditional>
              <RenderConditional condition={playerOption === "Tesoura"}>
                <Scissors />
              </RenderConditional>
              <label className={styles.versus}>vs</label>
              <RenderConditional condition={computerOption === "Papel"}>
                <Paper inverted={true} />
              </RenderConditional>
              <RenderConditional condition={computerOption === "Pedra"}>
                <Rock inverted={true} />
              </RenderConditional>
              <RenderConditional condition={computerOption === "Tesoura"}>
                <Scissors inverted={true} />
              </RenderConditional>
            </div>
          </div>
        )}
      </div>
      <div className={styles.result}>
        <div className={styles.endGame}>
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
