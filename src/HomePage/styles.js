import { makeStyles } from "@material-ui/core";

const homepageStyles = makeStyles({
  root: {
    backgroundColor: "black",
    padding: "20px 50px",
    backgroundSize: "cover",
    textShadow: "rgba(0, 0, 0, 1) 0px 0px 50px",
    backgroundPosition: "center",
    "@media (max-width: 700px)": {
      padding: "10px 10px",
    },
  },
  navbar: {
    padding: "10px 0px",
    flex: 1,
  },
  nameWrapper: {
    flex: 7,
    "@media (max-width: 700px)": {
      flex: 2,
    },
  },
  seachWrapper: {
    position: "relative",
    flex: 2,
    "@media (max-width: 700px)": {
      flex: 1,
    },
  },
  searchIcon: {
    position: "absolute",
    fontSize: "20px !important",
    color: "#F5F5F5",
    top: "50%",
    left: "4%",
    transform: "translate(-50%, -50%)",
    "@media (max-width: 700px)": {
      left: "10%",
    },
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
    marginTop: "50px",
    minHeight:"80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    "@media (max-width: 700px)": {
      minHeight:"75vh",
    },
    
  },
  heading: {
    color: "white",
    fontSize: "100px",
    fontWeight: 700,
    "@media (max-width: 700px)": {
      textAlign: "center",
      fontSize: "3rem",
    },
  },
  movieInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    "@media (max-width: 700px)": {
      alignItems: "center",
      textAlign:"center"
    },
  },
  movieName: {
    color: "white",
    fontSize: "80px",
    fontWeight: 700,
    marginBottom:"30px",
    "@media (max-width: 700px)": {
      fontSize: "2rem",
      "@media (max-width: 700px)": {
        textAlign: "center",
      },
    },
  },
  movieDesc: {
    color: "white",
    fontSize: "20px",
    fontWeight: 500,
    width: "60%",
    "@media (max-width: 700px)": {
      margin: "auto",
      width: "80%",
      fontSize: "0.9rem",
    },
  },
  playButton: {
    backgroundColor: "#EEEEEE",
    fontFamily: "Montserrat ,cursive",
    fontWeight: 600,
    border: "none",
    borderRadius: 0,
    width: "80px",
    height: "30px",
    marginTop: "20px",
    color: "black",
    cursor: "pointer",
    "@media (max-width: 700px)": {
      width: "80vw",
      marginTop: "20px",
    },
  },
  movieListWrapper: {
    color: "white",
    textAlign: "center",
    paddingTop: "50px",
    height: "100vh",
    position: "relative",
  },
  movieListHeading: {
    fontSize: "60px",
    "@media (max-width: 700px)": {
      fontSize: "2rem",
    },
  },
  genreWrapper: {
    color: "white",
    display: "flex",
    width: "10%",
    marginTop:"20px",
    minHeight:"12vh",
    justifyContent: "space-between",
    flexDirection: "column",
    "@media (max-width: 700px)": {
      justifyContent: "space-around",
      width: "100%",
      alignItems: "center",
    },
  },
  spinner: {
    position: "absolute",
    top: "45%",
    left: "50%",
    translate: "transform(-50%,-50%)",
    "@media (max-width: 700px)": {
      alignItems: "center",
      top: "40%",
      left: "40%",
    },
  },
  spinner2: {
    position: "absolute",
    top: "50%",
    left: "50%",
    translate: "transform(-50%,-50%)",
    "@media (max-width: 700px)": {
      alignItems: "center",
      top: "40%",
      left: "40%",
    },
  },
});

export default homepageStyles;
