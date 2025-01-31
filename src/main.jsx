import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./providers/ThemeProvider/ThemeProvider.jsx";
import AuthProvider from "./providers/AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  </StrictMode>
);
