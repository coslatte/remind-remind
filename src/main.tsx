import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/custom-tailwind.css";
import "./styles/scrollbar.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
