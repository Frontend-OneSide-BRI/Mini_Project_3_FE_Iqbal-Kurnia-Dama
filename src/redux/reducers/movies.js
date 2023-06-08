const initialState = {
  movieListLimit: [],
  movieList: [],
  searchedMovies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_LIST_LIMIT":
      return {
        ...state,
        movieListLimit: action.payload,
      };
    case "GET_MOVIE_LIST":
      return { ...state, movieList: action.payload };
    case "SEARCH_MOVIE":
      return { ...state, searchedMovies: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
