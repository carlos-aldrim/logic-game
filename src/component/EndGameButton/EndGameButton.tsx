import React from "react";
import { useStyles } from "./EndGameButton.styles";
import { Pause } from "@mui/icons-material";

interface EndGameButtonProps {
  onClick: () => void;
}

export const EndGameButton: React.FC<EndGameButtonProps> = ({ onClick }) => {
  const styles = useStyles();

  return (
    <button className={styles.button} onClick={onClick}>
      <Pause/>
      Encerrar
    </button>
  );
};