import "./App.css";

import React from "react";

import { ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import theme from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home></Home>
      </div>
    </ThemeProvider>
  );
};

export default App;
