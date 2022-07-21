import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import tmdb from "../apis/tmdb"
import MovieCard from "../components/MovieCard"
import NavBar from "../components/Navbar"

const Cari = () => {
    let params = useParams()
    let uriCari = `search/movie?query=${params?.keyWord}`
    const [hasil, setHasil] = useState([uriCari])

    useEffect(() => {
        const fetchCari = async () => {
            try {
                const query = await tmdb.get(uriCari)
                setHasil(query.data.results)
            } catch (err) {
                console.log(err)
            }
        }
        fetchCari()
    }, [uriCari])

    return (
        <div className='App'>
            <NavBar />
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
                        hasil.map(movie => (
                            <MovieCard key={movie.id * Math.random()} movie={movie}></MovieCard>
                        ))
                    }
                </Box>
            </Box>
        </div>
    )
}

export default Cari
