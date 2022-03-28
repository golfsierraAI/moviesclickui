import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpinnerRoundFilled } from "spinners-react";
import { searchDataClear, searchDataLoadStart } from "../HomePage/action";
import MovieList from "../MoviesList";
import searchPageStyles from "./styles";

const SearchPage = () => {
  const dispatch = useDispatch();
  const classes = searchPageStyles();

  const textLength = React.useRef(0);

  React.useEffect(() => {
    return () => {
      dispatch(searchDataClear());
    };
  }, []);

  const storeState = useSelector((state) => {
    return state.homepageReducer;
  });

  const data = storeState.searchData.data ? storeState.searchData.data : [];

  const searchManager = (event) => {
    if (event.target.value.length > 3) {
      textLength.current = event.target.value.length;
      dispatch(searchDataLoadStart({ name: event.target.value }));
    }
  };

  function debounce(func, timeout = 1000) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const processChange = debounce((event) => searchManager(event));

  return (
    <div className={classes.searchWrapper}>
      <input
        type="text"
        className={classes.searchBar}
        placeholder="Search..."
        onKeyUp={processChange}
      />
      {data?.length ? (
        <div className={classes.searchWrapper}>
          {!storeState.loading ? (
            <MovieList data={data} />
          ) : (
            <SpinnerRoundFilled
              className={classes.spinner2}
              size={70}
              thickness={100}
              speed={100}
              color="#ffff"
            />
          )}
        </div>
      ) : !data.length && textLength.current ? (
        <h1 className={classes.heading}>No movie found.</h1>
      ) : (
        <h1 className={classes.heading}>
          Search <br />
          <span style={{ color: "red" }}>any movie with</span>
          <br />
          <span style={{ color: "yellow" }}> title.</span>
        </h1>
      )}
      :
    </div>
  );
};

export default SearchPage;
