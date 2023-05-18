import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  hand: {
    width: "160px",
    height: "160px",
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px 10px",
    "& img": {
      width: "130px",
    },
  },
});