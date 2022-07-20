import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#b9090b",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});

export default theme;
