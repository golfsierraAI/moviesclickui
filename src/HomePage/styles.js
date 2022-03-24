import { makeStyles } from "@material-ui/core";

const homepageStyles = makeStyles({
  root: {
    backgroundColor: "black",
    padding: "20px 50px",
    backgroundSize: "cover",
    textShadow: "rgba(0, 0, 0, 1) 0px 0px 50px",
    backgroundSize: "cover",
  },
  navbar: {
    padding: "10px 0px",
  },
  seachWrapper: {
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    fontSize: "20px !important",
    color: "#F5F5F5",
    top: "50%",
    left: "4%",
    transform: "translate(-50%, -50%)",
  },
  name: {
    fontFamily: "Montserrat ,cursive",
    fontSize: "30px",
    fontWeight: 700,
    color: "white",
  },
  searchBar: {
    width: "70%",
    padding: "0 30px ",
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
  moviesDiv: {
    color: "white",
  },
  introDiv: {
    height: "80vh",
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  heading: {
    color: "white",
    fontSize: "100px",
    fontWeight: 700,
    textAlign: "left",
  },
  movieInfo: {
    display: "flex",
    height: "60vh",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  movieName: {
    color: "white",
    fontSize: "80px",
    fontWeight: 700,
  },
  movieDesc: {
    color: "white",
    fontSize: "20px",
    fontWeight: 500,
    width: "60%",
  },
  playButton: {
    backgroundColor: "#EEEEEE",
    fontFamily: "Montserrat ,cursive",
    fontWeight: 500,
    border: "none",
    borderRadius: 0,
    width: "80px",
    height: "30px",
    color: "black",
    cursor: "pointer",
  },

  buttonsDiv: {
    display: "flex",
    width: "10%",
  },
  movieListWrapper: {
    color: "white",
    textAlign: "center",
    paddingTop: "50px",
  },
  movieListHeading: {
    fontSize: "60px",
  },
  genreWrapper: {
    color: "white",
    display: "flex",
    width: "10%",
    height: "10vh",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  spinner: {
    position: "absolute",
    top: "45%",
    left: "50%",
    translate: "transform(-50%,-50%)",
  },
});

export default homepageStyles;
