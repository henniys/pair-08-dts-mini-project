import { Box, Paper } from "@mui/material";
import Footer from "../components/Footer";

function Layout({ children, ml = "20px", mr = "20px" }) {
  return (
    <>
      <Paper square sx={{ minHeight: "100vh" }}>
        <Box
          sx={{
            marginLeft: ml,
            marginRight: mr,
          }}
        >
          {children}
          <Footer />
        </Box>
      </Paper>
    </>
  );
}

export default Layout;
