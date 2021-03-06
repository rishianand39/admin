import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DarkModeContextProvider } from "./context/darkModeContest";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <DarkModeContextProvider >
      <App />
    </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
