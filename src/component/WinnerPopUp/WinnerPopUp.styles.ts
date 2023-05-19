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
    height: "200px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  messageContent: {
    margin: "10px 0px",
    fontSize: "14px",
    padding: "0px 10px",
    width: "auto",
    color: "#fff",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    "& h2": {
      margin: 0,
    },
  },
  buttonContainer: {
    width: "100%",
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    "& button": {
      border: "none",
      padding: "10px 20px",
      color: "#fff",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: 600,
      "&:hover": {
        opacity: 0.9,
      },
    },
  },
  restartButton: {
    width: "50%",
    backgroundColor: "green",
  },
  homeButton: {
    width: "50%",
    backgroundColor: "red",
  },
  winnerIcon: {
    marginTop: "10px",
    "& svg": {
      color: "#fff",
      width: "70px",
      height: "70px",
    },
  },
});