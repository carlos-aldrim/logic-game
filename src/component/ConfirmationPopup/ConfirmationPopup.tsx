import React from "react";
import { Drawer } from "@material-ui/core";
import { useStyles } from "./ConfirmationPopup.styles";

interface ConfirmationPopupProps {
  message: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({
  message,
  open,
  onConfirm,
  onCancel,
}) => {
  const styles = useStyles();

  return (
    <Drawer className={styles.drawer} anchor="bottom" open={open}>
      <div className={styles.popup}>
        <div className={styles.popupContent}>
          <h2>{message}</h2>
          <div className={styles.buttonContainer}>
            <button className={styles.confirmButton} onClick={onConfirm}>Confirmar</button>
            <button className={styles.cancelButton} onClick={onCancel}>Cancelar</button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};
