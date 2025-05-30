import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
