import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  cardContent: {
    width: "450px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    margin: "70px 0px 20px 0px",
    position: "relative",
  },
  card: {
    height: "300px",
    backgroundColor: "#666",
    borderRadius: "8px",
    overflow: "hidden",
    position: "relative",
  },
  playButton: {
    backgroundColor: "#15c",
    borderRadius: "100%",
    height: "40px",
    width: "40px",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 2px 10px #555",
    },
  },
  image: {
    backgroundColor: "#000",
    height: "50%",
    width: "100%",
    overflow: "hidden",
    "& img": {
      width: "100%",
    },
  },
  details: {
    backgroundColor: "#666",
    height: "50%",
    width: "calc(100% - 30px)",
    padding: "0px 15px",
    marginTop: "18px",
    textAlign: "left",
  },
  description: {
    color: "#fff",
    fontSize: "12px",
    letterSpacing: 0,
  },
  title: {
    zIndex: 3,
    color: "#fff",
    fontWeight: 600,
    position: "absolute",
    top: "-30px",
    left: "22px",
  },
});