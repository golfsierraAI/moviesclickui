import axios from "axios";

export const dataLoader = () =>
  axios
    .get("https://moviesclick.herokuapp.com/get/1")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

export const posterLoader = (term) =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${term}`
    )
    .then((response) => {
      return response.data.results[0];
    })
    .catch((error) => {
      return error;
    });
