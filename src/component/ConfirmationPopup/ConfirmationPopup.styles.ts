import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  drawer: {
    "& .MuiDrawer-paper": {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: 'transparent',
    },
  },
  popup: {
    backgroundColor: "#333",
    border: "3px solid #f4f4f4",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",
    overflow: "hidden",
    marginLeft: "-17px",
  },
  popupContent: {
    width: "300px",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    "& h2": {
      fontSize: "20px",
      marginTop: "40px",
      width: "75%",
      color: "#fff",
    },
  },
  buttonContainer: {
    width: "100%",
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    "& button": {
      border: "none",
      padding: "15px 20px",
      color: "#fff",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: 600,
      "&:hover": {
        opacity: 0.9,
      },
    },
  },
  confirmButton: {
    width: "50%",
    backgroundColor: "green",
  },
  cancelButton: {
    width: "50%",
    backgroundColor: "red",
  },
});