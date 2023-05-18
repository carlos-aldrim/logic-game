import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  hand: {
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "350px",
    height: "160px",
    flexDirection: "row",
    overflow: "hidden",
  },
  "@keyframes handShake": {
    "0%, 100%": {
      transform: "rotate(10deg)",
    },
    "50%": {
      transform: "rotate(-10deg)",
    },
  },
  img: {
    width: "130px",
    animation: "$handShake 2s infinite",
  },
  inverted: {
    width: "130px",
    animation: "$handShakeInverted 2s infinite",
  },
  "@keyframes handShakeInverted": {
    "0%, 100%": {
      transform: "rotate(0deg) rotate(-10deg)",
    },
    "50%": {
      transform: "rotate(0deg) rotate(10deg)",
    },
  },
});