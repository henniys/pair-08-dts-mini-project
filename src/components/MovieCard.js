import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import * as React from "react";

export default function MovieCard() {
  return (
    <Card sx={{ display: "flex", mt: 20, width: "400px" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://placekitten.com/400"
        alt="Fantastic Beast"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Fantastic Beast
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            2020
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Rating sx={{ mr: 1 }} name="read-only" value={3} readOnly />
        </Box>
      </Box>
    </Card>
  );
}
