import { Card, CardActionArea, CardContent, CardMedia, Rating, Typography, Box } from '@mui/material'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import tmdb from "../apis/tmdb"
import NavBar from "../components/Navbar"

const DetailMovie = () => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/original"
    let params = useParams()
    let uri = `movie/${params?.movieId}`
    const [movieDetail, setMovieDetail] = useState(uri)

    useEffect(() => {
        const fetchDetailMovie = async () => {
            try {
                const query = await tmdb.get(uri)
                setMovieDetail(query.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchDetailMovie()
    }, [uri])

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
            </Box>
            <footer>2022 @derict</footer>
        </div>
    )
}

export default DetailMovie