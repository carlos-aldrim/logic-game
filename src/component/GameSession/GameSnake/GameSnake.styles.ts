import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  gameContainer: {
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