import { makeStyles } from "@material-ui/core";

const imageCarouselStyles = makeStyles({
  imageDiv: {
    marginBottom: "20px",
    height: "250px",
    transition: "transform .3s",
    position: "relative",
    cursor: "pointer",
    border: "1px solid grey",
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
    padding: "2px 5px",
    fontWeight: 700,
    right: 5,
    top: 5,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "50%",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "50px",
    margin: "auto",
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
});
export default imageCarouselStyles;
