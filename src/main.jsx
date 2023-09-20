import React from "react";
import ContextProvider from "./context/context.jsx";
import ReactDOM from "react-dom/client";
import App from "./layouts/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
