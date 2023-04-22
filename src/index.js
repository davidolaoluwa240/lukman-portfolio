// Modules
import React from "react";
import { createRoot } from "react-dom/client";

// Components
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import App from "./app/App";

// Style
import "./index.styles.scss";

// Mount React To DOM
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>
);
