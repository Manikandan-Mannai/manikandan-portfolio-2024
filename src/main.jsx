import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BackgroundColorProvider } from "./context/BackgroundColorContext.jsx";

import "./styles/fonts.css";
import "./styles/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BackgroundColorProvider>
      <App />
    </BackgroundColorProvider>
  </StrictMode>
);
