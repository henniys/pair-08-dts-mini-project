import { Box } from "@mui/material";

import MovieCard from "../components/MovieCard";
const MovieList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        mt: 5,
      }}
    >
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </Box>
  );
};

export default MovieList;
