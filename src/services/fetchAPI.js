import axios from "axios";

const MY_KEY = "f5731f3899e62d74de308a43a46841fa";
const BASE_URL = "https://api.themoviedb.org/3/";
//чомусь не працює
// axios.defaults.baseUrl = 'https://api.themoviedb.org/3/';

const fetchMovieData = async ({ path, id = "", query = "", currentPage = 1, param = "" }) => {
  const response = await axios.get(
    `${BASE_URL}${path}${id}${param}?&page=${currentPage}&query=${query}&api_key=${MY_KEY}`
  );

  return response.data.results ? response.data.results : response.data;
};

const homePageAPI = {
  fetchMovieData,
};

export default homePageAPI;
