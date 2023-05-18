import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    backgroundColor: "#666",
    width: "100%",
    maxWidth: "500px",
    height: "80px",
    zIndex: "10",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: "0px 40px",
    borderRadius: "8px",
    position: "fixed",
    top: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    "& a": {
      textDecoration: "none",
      color: "#fff",
      fontWeight: 600,
      "&:hover": {
        borderBottom: "2px solid white",
        transition: "all",
      },
    },
    "@media (max-width: 600px)": {
      maxWidth: "300px",
    },
  },
  main: {
  },
  games: {
    display: "flex",
    gap: 10,
  }
});