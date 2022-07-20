import { Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";

function DiscoverItem({ movie, height }) {
  const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

  return (
    // <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
    <Box
      sx={{
        color: "white",
        height: height,
        backgroundColor: "black",
        backgroundImage: `url(${BASE_IMAGE_URL}/${movie.poster_path})`,
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "10px",
        overflow: "hidden",
        "&:hover .hidden-play": {
          display: "flex",
        },
      }}
    >
      <Box
        className="hidden-play"
        sx={{
          display: "none",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography fontWeight={"bold"} align="center" mb={2}>
          {movie.title}
        </Typography>
        {/* <Button variant="contained" color="error" sx={{ textTransform: 'capitalize' }}><PlayArrow /> Play</Button> */}
      </Box>
    </Box>
    // </Link>
  );
}

export default DiscoverItem;
