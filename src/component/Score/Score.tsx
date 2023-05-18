import React from "react";
import { useStyles } from "./Score.styles";

interface ScoreProps {
  points: number;
  record: number;
};

export const Score: React.FC<ScoreProps> = ({ points, record }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <label className={styles.score} >{points} ponto(s)</label>
      <label className={styles.record} >Recorde: {record}</label>
    </div>
  );
};