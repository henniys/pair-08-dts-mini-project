import axios from "axios";

const API_KEY = "5a40bd2ee20bfcb4ca8824ca74e3f9cb";
const baseUrl = "https://api.themoviedb.org/3/";

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
