import { makeStyles } from "@material-ui/core";

const searchPageStyles = makeStyles({
  searchWrapper: {
    padding: "20px 50px",
    textAlign: "center",
  },
  searchBar: {
    width: "50%",
    padding: "10px 30px ",
    margin: "auto",
    fontFamily: "Montserrat ,cursive",
    backgroundColor: "transparent",
    color: "#F5F5F5",
    borderRadius: 0,
    border: "1px solid #F5F5F5",
    "&:focus": {
      outline: "none",
    },
    "&::placeholder": {
      color: "#F5F5F5",
    },
  },
  spinner2: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    "@media (max-width: 700px)": {
      alignItems: "center",
      top: "50%",
      left: "50%",
    },
  },
  heading: {
    color: "white",
    fontSize: "80px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontWeight: 700,
    "@media (max-width: 700px)": {
      fontSize: "2rem",
      "@media (max-width: 700px)": {
        textAlign: "center",
      },
    },
  },
});

export default searchPageStyles;
