import React from "react";
import { useStyles } from "./Rock.styles";
import PedraImg from "assets/img/PedraImg.png";
import PedraInvertidaImg from "assets/img/PedraInvertidaImg.png";
import { RenderConditional } from "component/RenderConditional";

interface RockProps {
  inverted?: boolean;
};

export const Rock: React.FC<RockProps> = ({ inverted = false }) => {
  const styles = useStyles();

  return (
    <div className={styles.hand}>
      <RenderConditional condition={inverted === false}>
        <img src={PedraInvertidaImg} alt="Pedra" />
      </RenderConditional>
      <RenderConditional condition={inverted === true}>
        <img src={PedraImg} alt="Pedra" />
      </RenderConditional>
    </div>
  );
};