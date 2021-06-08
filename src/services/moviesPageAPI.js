import axios from "axios";

const MY_KEY = "f5731f3899e62d74de308a43a46841fa";
const BASE_URL = "https://api.themoviedb.org/3/";
//чомусь не працює
// axios.defaults.baseUrl = 'https://api.themoviedb.org/3/';

const fetchMoviesByQuery = async ({ query = "", currentPage = 1 }) => {
  const response = await axios.get(`${BASE_URL}search/movie?query=${query}&page=${currentPage}&api_key=${MY_KEY}`);

  return response.data.results;
};

const moviesPageAPI = {
  fetchMoviesByQuery,
};

export default moviesPageAPI;
