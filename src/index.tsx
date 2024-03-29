import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App"
import "./index.css"
import { MovieProvider } from "./contexts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <MovieProvider>
      <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);