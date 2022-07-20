import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/system";
import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./container/Login";
import Register from "./container/Register";
import NoMatch from "./container/NoMatch";
import ProtectedRoute from "./components/ProtectedRoute";
import DetailMovie from "./container/DetailMovie";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#b9090b",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="login"
            element={
              <ProtectedRoute loginOnly={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute loginOnly={false}>
                <Register />
              </ProtectedRoute>
            }
          />
          <Route
            path="movie/:movieId"
            element={
              <ProtectedRoute loginOnly={true}>
                <DetailMovie />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
