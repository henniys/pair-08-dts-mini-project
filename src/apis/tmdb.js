import axios from "axios";

// const API_TOKEN = '5a40bd2ee20bfcb4ca8824ca74e3f9cb'
const API_TOKEN = process.env.REACT_APP_TMDB_KEY;
const uri = "https://api.themoviedb.org/3/";

const tmdb = axios.create({
  baseURL: uri,
  params: {
    api_key: API_TOKEN,
  },
});

export default tmdb;
