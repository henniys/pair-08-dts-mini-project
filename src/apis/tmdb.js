import axios from 'axios'

const API_TOKEN = 'df7934f249ad19ef751a3c7ae05883e7'
const uri = 'https://api.themoviedb.org/3/'

const tmdb = axios.create({
    baseURL: uri,
    params:{
        api_key: API_TOKEN,
    },
})

export default tmdb