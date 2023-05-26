import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/global.css";
import "./assets/styles/reset.css";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
   
    <App />
  </ThemeProvider>
);
