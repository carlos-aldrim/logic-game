import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    marginTop: "20px",
    "&:focus": {
      outline: "none",
    },
  },
  title: {
    fontSize: "40px",
    marginBottom: "5px",
    color: "#fff",
    margin: 0,
    width: "max-content",
  },
  description: {
    fontSize: "10px",
    marginBottom: "10px",
    color: "#fff",
    width: "max-content",
  },
  control: {
    margin: "10px 0px 10px 0px", 
    width: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    "& button": {
      background: "#666",
      borderRadius: "8px",
      border: "none",
      textAlign: "center",
      cursor: "pointer",
      padding: "0px 15px",
      height: "40px",
      width: "auto",
      fontSize: "18px",
      color: "#fff",
    },
  },
  hands: {
    width: "400px",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  winner: {
    fontSize: "30px",
    marginBottom: "5px",
    color: "#fff",
    margin: 0,
    width: "max-content",
  },
  versus: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#fff",
    width: "max-content",
  },
  result: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
  },
  endGame: {
    marginTop: "20px",
  },
  back: {
    color: "#fff",
    position: "absolute",
    top: "10px",
    left: "0px",
    "&:hover": {
      opacity: 0.9,
    },
  },
});