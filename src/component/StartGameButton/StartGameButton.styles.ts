import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  button: {
    background: "#15c",
    borderRadius: "8px",
    border: "none",
    textAlign: "center",
    cursor: "pointer",
    padding: "0px 15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40px",
    width: "auto",
    fontSize: "18px",
    color: "#fff",
    "&:hover": {
      opacity: 0.9,
    },
    "& svg": {
      marginRight: "5px",
    },
  },
});