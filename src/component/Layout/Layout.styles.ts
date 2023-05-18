import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    width: "calc(100vw - 15px)",
    minWidth: "420px",
    minHeight: "calc(100vh - 90px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "column",
    textAlign: "center",
    paddingTop: "90px",
  },
});