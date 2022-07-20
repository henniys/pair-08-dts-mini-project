import "./App.css";

import NavBar from "./components/Navbar";

import React from "react";

import { ThemeProvider } from "@mui/material";
import Home from "./pages/Home";
import theme from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
