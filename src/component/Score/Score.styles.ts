import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    backgroundColor: "#666",
    borderRadius: "8px",
    padding: "0px 15px",
    color: "#fff",
    width: "auto",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  score: {
    width: "auto",
    fontSize: "14px",
  },
  record: {
    fontSize: "9px",
  },
});