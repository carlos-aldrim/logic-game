import React from "react";
import { useStyles } from "./Paper.styles";
import PapelImg from "assets/img/PapelImg.png";
import PapelInvertidalImg from "assets/img/PapelInvertidaImg.png";
import { RenderConditional } from "component/RenderConditional";

interface PaperProps {
  inverted?: boolean;
};

export const Paper: React.FC<PaperProps> = ({ inverted = false }) => {
  const styles = useStyles();

  return (
    <div className={styles.hand}>
      <RenderConditional condition={inverted === false}>
        <img src={PapelInvertidalImg} alt="Papel" />
      </RenderConditional>
      <RenderConditional condition={inverted === true}>
        <img src={PapelImg} alt="Papel" />
      </RenderConditional>
    </div>
  );
};