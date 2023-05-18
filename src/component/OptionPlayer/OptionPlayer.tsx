import React from "react";
import { SportsEsports, ArrowBack } from "@mui/icons-material";
import { useStyles } from "./OptionPlayer.styles";
import { useNavigate } from "react-router-dom";

interface OptionPlayerProps {
  disabledSoloMode?: boolean;
  disabledTeamMode?: boolean;
  onClickSoloMode?: () => void;
  onClickTeamMode?: () => void;
};

export const OptionPlayer: React.FC<OptionPlayerProps> = ({ disabledSoloMode, disabledTeamMode, onClickSoloMode, onClickTeamMode }) => {
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <div className={styles.cardContent}>
      <ArrowBack className={styles.back} onClick={() => navigate("/")}/>
      <button className={styles.card} onClick={onClickSoloMode} disabled={disabledSoloMode}>
        <SportsEsports/>
        <h1 className={styles.title}>Solo</h1>
        <label className={styles.description}>Domine o desafio solo, onde você enfrentará um adversário controlado pelo computador e provará sua habilidade como um verdadeiro campeão.</label>
      </button>
      <button className={styles.card} onClick={onClickTeamMode} disabled={disabledTeamMode}>
        <SportsEsports/>
        <h1 className={styles.title}>Equipe</h1>
        <label className={styles.description}>Ou reúna seus amigos e mergulhe em batalhas multiplayer emocionantes, onde a cooperação e a estratégia são a chave para a vitória. Escolha seu modo de jogo e embarque nessa aventura épica!</label>
      </button>
    </div>
  );
};
