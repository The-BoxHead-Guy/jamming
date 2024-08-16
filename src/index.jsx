import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/normalize.css";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
