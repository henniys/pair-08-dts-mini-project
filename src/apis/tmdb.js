import axios from "axios";

const API_TOKEN = "5a40bd2ee20bfcb4ca8824ca74e3f9cb";
const baseUrl = "https://api.themoviedb.org/3/";

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_TOKEN,
  },
});

export default tmdb;
