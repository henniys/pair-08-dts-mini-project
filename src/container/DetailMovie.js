import { Card, CardActionArea, CardContent, CardMedia, Rating, Typography, Box } from '@mui/material'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import tmdb from "../apis/tmdb"
import NavBar from "../components/Navbar"

const DetailMovie = () => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/original"
    let params = useParams()
    let uriDetail = `movie/${params?.movieId}`
    let uriTrailer = `movie/${params?.movieId}/videos`
    const [movieDetail, setMovieDetail] = useState(uriDetail)
    const [trailerMovie, setTrailerMovie] = useState(uriTrailer)

    useEffect(() => {
        const fetchDetailMovie = async () => {
            try {
                const query = await tmdb.get(uriDetail)
                setMovieDetail(query.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchDetailMovie()
    }, [uriDetail])

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const query = await tmdb.get(uriTrailer)
                setTrailerMovie(query.data.results)
            } catch (err) {
                console.log(err)
            }
        }
        fetchTrailer()
    }, [uriTrailer])

    return (
        <div className='App'>
            <NavBar />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 10
                }}
            ></Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                <Card
                    id={movieDetail.id}
                    sx={{
                        maxWidth: 250,
                        margin: 0.5
                    }}
                >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            width="250"
                            image={`${IMAGE_URL}${movieDetail.poster_path}`}
                            alt={`${movieDetail.title}`}
                        />
                    </CardActionArea>
                </Card>
                <Card
                    sx={{
                        textAlign: 'left'
                    }}
                >
                    <CardContent>
                        <Typography variant='h4'>
                            {movieDetail.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {new Date(movieDetail.release_date).getFullYear()}
                        </Typography>
                        <Typography>
                            {movieDetail.runtime} minutes
                        </Typography>
                        <Rating
                            precision={0.1}
                            value={movieDetail.vote_average / 2}
                            max={5}
                            readOnly
                        />
                        <Typography>
                            {movieDetail.overview}
                        </Typography>
                    </CardContent>
                </Card>
                <Box
                    width={852}
                >
                    <Typography  variant='h6'>Trailer:</Typography>
                    <CardMedia
                        component="iframe"
                        image={`https://www.youtube.com/embed/${trailerMovie[0].key}`}
                        height={480}

                    />
                </Box>
            </Box>
            <hr />
            <footer>2022 @derict</footer>
        </div>
    )
}

export default DetailMovie