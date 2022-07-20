import { Box } from "@mui/material";
import Carousel from "../components/Trending";
import Discover from "../components/Discover";
import NowPlaying from "../components/NowPlaying";
import Popular from "../components/Popular";
import Layout from "./Layout";

function Home() {
  return (
    <Layout>
      <NowPlaying />
      <Carousel />
      <Box sx={{ marginTop: "20px" }} />
      <Discover />
      <Popular />
    </Layout>
  );
}

export default Home;
