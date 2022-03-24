import imageCarouselStyles from "./styles";
import PlayArrow from "@mui/icons-material/PlayArrow";
const MovieList = (data) => {
  const classes = imageCarouselStyles();

  return (
    <div className={classes.root}>
      {data.data.map((element) => {
        return (
          <a key={element.id} target="_blank" href={element.streamUrl}>
            <div className={classes.imageDiv}>
              <span className={classes.quality}>{element.quality}</span>
              <span className={classes.ratings}>{element.ratings}</span>
              <PlayArrow className={classes.play} />
              <img height="100%" width="175px" src={element.imageUrl}></img>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default MovieList;
