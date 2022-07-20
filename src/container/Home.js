import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import tmdb from "../apis/tmdb"
import MovieCard from "../components/MovieCard"

const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchMovies = async() => {
            try{
                const fetchedMovies = await tmdb.get("trending/movie/week")
                setMovies(fetchedMovies.data.results)
            }catch(err){
                console.log(err)
            }
        }
        fetchMovies()
    }, [])

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                mt: 10
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {
                    movies.map(movie => (
                        <MovieCard key={movie.title} movie={movie}></MovieCard>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Home