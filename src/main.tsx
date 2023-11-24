import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/LightContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <LanguageProvider>
    <ThemeProvider>
      <React.StrictMode>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          theme="colored"
        />
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </LanguageProvider>
);
