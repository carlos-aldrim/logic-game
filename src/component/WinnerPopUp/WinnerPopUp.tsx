import React from "react";
import { Drawer } from "@material-ui/core";
import { useStyles } from "./WinnerPopUp.styles";
import { RenderConditional } from "component";
import { EmojiEvents, Home, RestartAlt, SentimentVeryDissatisfied, SportsEsports } from "@mui/icons-material";

interface WinnerPopUpProps {
  message: string;
  open: boolean;
  onRestart: () => void;
  onHome: () => void;
};

export const WinnerPopUp: React.FC<WinnerPopUpProps> = ({
  message,
  open,
  onRestart,
  onHome,
}) => {
  const styles = useStyles();

  return (
    <Drawer className={styles.drawer} anchor="bottom" open={open}>
      <div className={styles.popup}>
        <div className={styles.popupContent}>
          <div className={styles.winnerIcon}>
            <RenderConditional condition={message === "Parabéns, você GANHOU!"}>
              <EmojiEvents/>
            </RenderConditional>
            <RenderConditional condition={message === "EMPATE! jogue novamente."}>
              <SportsEsports/>
            </RenderConditional>
            <RenderConditional condition={message === "Que pena, você PERDEU! jogue novamente."}>
              <SentimentVeryDissatisfied/>
            </RenderConditional>
          </div>
          <div className={styles.messageContent}>
            <h2>{message}</h2>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.restartButton} onClick={onRestart}><RestartAlt/></button>
            <button className={styles.homeButton} onClick={onHome}><Home/></button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};
