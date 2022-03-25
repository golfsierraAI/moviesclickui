import imageCarouselStyles from "./styles";
import PlayArrow from "@mui/icons-material/PlayArrow";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@material-ui/core";
const MovieList = (props) => {
  const classes = imageCarouselStyles();
  return (
    <div className={classes.wrapper}>
      <IconButton name="backward" onClick={props.navigationManager}>
        <ArrowBackIosIcon className={classes.navIcon} />
      </IconButton>
      <div className={classes.root}>
        {props.data.map((element) => {
          return (
            <a key={element.id} target="_blank" href={element.streamUrl}>
              <div className={classes.imageDiv}>
                <span className={classes.quality}>{element.quality}</span>
                <span className={classes.ratings}>{element.ratings}</span>
                <PlayArrow className={classes.play} />
                <img className={classes.image} src={element.imageUrl}></img>
              </div>
            </a>
          );
        })}
      </div>
      <IconButton name="forward" onClick={props.navigationManager}>
        <ArrowForwardIosIcon className={classes.navIcon} />
      </IconButton>
    </div>
  );
};

export default MovieList;
