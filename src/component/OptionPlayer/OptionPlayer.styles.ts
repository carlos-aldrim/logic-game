import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  cardContent: {
    width: "450px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginTop: "70px",
    position: "relative",
  },
  card: {
    height: "248px",
    backgroundColor: "#666",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
    padding: "16px",
    border: "none",
    color: "#fff",
    "& .MuiSvgIcon-root": {
      height: "80px",
      width: "80px",
    },
    "&:hover": {
      opacity: 0.9,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
  title: {
    margin: "0px",
    fontSize: "18px",
    letterSpacing: 0,
  },
  description: {
    letterSpacing: 0,
    fontSize: "10px",
  },
  back: {
    zIndex: 3,
    color: "#fff",
    position: "absolute",
    top: "-40px",
    left: "22px",
    "&:hover": {
      opacity: 0.9,
    },
  },
});