import { Grid } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../MoviesList";
import { homePageDataLoadStart, posterDataLoadStart } from "./action";
import homepageStyles from "./styles";
import { Search } from "@mui/icons-material";
import { SpinnerDotted } from "spinners-react";

const Homepage = () => {
  const classes = homepageStyles();
  const dispatch = useDispatch();
  const backgroundElement = React.useRef(null);

  const posterRef = React.useRef(Math.floor(Math.random() * 14));

  const storeState = useSelector((state) => {
    return state.homepageReducer;
  });

  const { data } = storeState.data;

  const posterData = useSelector((state) => {
    return state.posterReducer;
  });

  const poster =
    "https://image.tmdb.org/t/p/w1280" + posterData.data.backdrop_path;

  React.useEffect(() => {
    dispatch(homePageDataLoadStart());
  }, []);

  React.useEffect(() => {
    data && dispatch(posterDataLoadStart(data[posterRef.current].movieName));
  }, [data]);

  if (posterData.data?.backdrop_path && backgroundElement.current)
    backgroundElement.current.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${poster})`;

  return data ? (
    <>
      <Grid
        className={classes.root}
        container
        direction="column"
        ref={backgroundElement}
      >
        <Grid className={classes.navbar} container direction="row">
          <Grid item xs={9} container direction="column">
            <h2 className={classes.name}>MoviesClick</h2>
          </Grid>
          <Grid
            item
            xs={3}
            container
            justifyContent="space-between"
            direction="row"
            className={classes.seachWrapper}
          >
            <Search className={classes.searchIcon} />
            <input
              type="text"
              className={classes.searchBar}
              placeholder="Search..."
            />
          </Grid>
        </Grid>
        <div className={classes.introDiv}>
          <h1 className={classes.heading}>Watch movies on the go.</h1>
          <div className={classes.movieInfo}>
            <h3 className={classes.movieName}>
              {data && data[posterRef.current].movieName}
            </h3>
            <h3 className={classes.movieDesc}>
              {posterData && posterData.data.overview}
            </h3>
            <div className={classes.genreWrapper}>
              <h3>{data && data[posterRef.current].genre}</h3>
              <h3 className={classes.quality}>
                {data && data[posterRef.current].quality}
              </h3>
              <h3>{data && data[posterRef.current].ratings}</h3>
              <h3>{data && data[posterRef.current].releaseYear}</h3>
            </div>
            <div className={classes.buttonsDiv}>
              <a
                target="_blank"
                href={data && data[posterRef.current].streamUrl}
              >
                <button className={classes.playButton}>Play</button>
              </a>
            </div>
          </div>
        </div>
      </Grid>
      <div className={classes.movieListWrapper}>
        {data?.length && posterRef.current && (
          <>
            <h1 className={classes.movieListHeading}>Watch latest movies</h1>
            <MovieList data={data} />
          </>
        )}
      </div>
    </>
  ) : (
    <SpinnerDotted
      className={classes.spinner}
      size={70}
      thickness={100}
      speed={100}
      color="#ffff"
    />
  );
};
export default Homepage;
