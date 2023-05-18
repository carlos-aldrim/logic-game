import React from "react";
import { useStyles } from "./Scissors.styles";
import ScissorsImg from "assets/img/TesouraImg.png";
import ScissorsInvertidaImg from "assets/img/TesouraInvertidaImg.png";
import { RenderConditional } from "component/RenderConditional";

interface ScissorsProps {
  inverted?: boolean;
};

export const Scissors: React.FC<ScissorsProps> = ({ inverted = false }) => {
  const styles = useStyles();

  return (
    <div className={styles.hand}>
      <RenderConditional condition={inverted === false}>
        <img style={{ marginRight: "10px "}} src={ScissorsInvertidaImg} alt="Scissors" />
      </RenderConditional>
      <RenderConditional condition={inverted === true}>
        <img src={ScissorsImg} alt="Scissors" />
      </RenderConditional>
    </div>
  );
};