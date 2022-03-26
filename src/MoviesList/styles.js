import { makeStyles } from "@material-ui/core";

const imageCarouselStyles = makeStyles({
  imageDiv: {
    marginBottom: "20px",
    transition: "transform .3s",
    position: "relative",
    cursor: "pointer",
    "& > svg": {
      visibility: "hidden",
    },
    "&:hover": {
      transform: "scale(1.1)",
      "& > svg": {
        visibility: "visible",
      },
    },
  },
  quality: {
    position: "absolute",
    backgroundColor: "yellow",
    color: "black",
    padding: "2px 4px",
    fontWeight: 600,
    right: 5,
    top: 5,
  },
  wrapper: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    marginTop: "20px",
    width: "70%",
    margin: "auto",
    "@media (max-width: 700px)": {
      width: "100%",
      alignItems: "flex-end",
    },
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "auto",
    marginBottom: "20px",
    "@media (max-width: 700px)": {
      width: "100%",
    },
  },
  ratings: {
    position: "absolute",
    backgroundColor: "black",
    color: "white",
    padding: "2px 5px",
    fontWeight: 400,
    left: 5,
    top: 5,
  },
  play: {
    position: "absolute",
    fontSize: "50px !important",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  navIcon: {
    fontSize: "50px !important",
    color: "white !important",
    cursor: "pointer",
    transition: "transform 0.3s !important",
    "&:hover": {
      transform: "scale(1.3)",
    },
    "@media (max-width: 700px)": {
      marginBottom:"50px",
    },
  },
  image: {
    height: "100%",
    width: "150px",
    "@media (max-width: 700px)": {
      height: "80%",
    width: "110px",
    },
  },
});
export default imageCarouselStyles;
