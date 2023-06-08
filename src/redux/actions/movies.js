import axios from "axios";

const url = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const getMovieListLimit = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/movie/popular?page=1&api_key=${apiKey}`);
      const movieListLimit = response.data.results.slice(0, 10);
      dispatch({
        type: "GET_MOVIE_LIST_LIMIT",
        payload: movieListLimit,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getMovieList = () => {
  return async (dispatch) => {
    try {
      const movie = await axios.get(`${url}/movie/popular?page=1&api_key=${apiKey}`);
      const movieList = movie.data.results;
      dispatch({ type: "GET_MOVIE_LIST", payload: movieList });
    } catch (error) {
      // Handle error
    }
  };
};

export const searchMovie = (q) => {
  return async (dispatch) => {
    try {
      const search = await axios.get(`${url}/search/movie?page=1&query=${q}&api_key=${apiKey}`);
      dispatch({ type: "SEARCH_MOVIE", payload: search.data });
    } catch (error) {
      // Handle error
    }
  };
};