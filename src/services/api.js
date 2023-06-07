import axios from "axios";

const url = process.env.REACT_APP_BASE_URL
const apiKey = process.env.REACT_APP_API_KEY

export const getMovieListLimit = async () => {
  const movie = await axios.get(`${url}/movie/popular?page=1&api_key=${apiKey}`)
  // console.log(movie);
  return movie.data.results.slice(0,10)
}

export const getMovieList = async () => {
  const movie = await axios.get(`${url}/movie/popular?page=1&api_key=${apiKey}`)
  // console.log(movie);
  return movie.data.results
}

export const searchMovie = async (q) => {
  const search = await axios.get(`${url}/search/movie?page=1&query=${q}&api_key=${apiKey}`)
  // console.log(q);
  return search.data
}


