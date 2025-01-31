import { createContext, useState } from "react";

export const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const contextValue = {
    theme,
    toggleTheme,
  };
  return (
    <themeContext.Provider value={contextValue}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
