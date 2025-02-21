import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "./routes/routes.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
