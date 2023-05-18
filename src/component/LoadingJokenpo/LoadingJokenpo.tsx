import React from "react";
import { useStyles } from "./LoadingJokenpo.styles";
import PedraImg from "assets/img/PedraImg.png";
import PedraInvertidaImg from "assets/img/PedraInvertidaImg.png";

export const LoadingJokenpo: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.hand}>
      <img className={styles.img} src={PedraInvertidaImg} alt="Pedra" />
      <img className={styles.inverted} src={PedraImg} alt="Pedra" />
    </div>
  );
};