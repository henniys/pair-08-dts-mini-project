import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  let navigate = useNavigate();

  const detailMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <Card
      id={movie.id}
      sx={{
        maxWidth: 250,
        margin: 0.5,
      }}
      onClick={() => detailMovie(movie.id)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          width="250"
          image={`${IMAGE_URL}${movie.poster_path}`}
          alt={`${movie.title}`}
        />
        <CardContent>
          <Rating
            precision={0.1}
            value={movie.vote_average / 2}
            max={5}
            readOnly
          />
          <Typography variant="subtitle1" color="text.secondary">
            {new Date(movie.release_date).getFullYear()}
          </Typography>
          <Typography variant="h6">{movie.title}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
