import React from "react";
import ContextProvider from "./context/context.jsx";
import ReactDOM from "react-dom/client";
import App from "./layouts/App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <HashRouter >
    <ContextProvider>
      <App />
    </ContextProvider>
      </HashRouter>
  </React.StrictMode>
);
