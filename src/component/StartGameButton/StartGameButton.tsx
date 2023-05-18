import React from "react";
import { useStyles } from "./StartGameButton.styles";
import { PlayArrow } from "@mui/icons-material";

interface StartGameButtonProps {
  onClick: () => void;
};

export const StartGameButton: React.FC<StartGameButtonProps> = ({ onClick }) => {
  const styles = useStyles();

  return (
    <button className={styles.button} onClick={onClick} >
      <PlayArrow/>
      Jogar
    </button>
  );
};