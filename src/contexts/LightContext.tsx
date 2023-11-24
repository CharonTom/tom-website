import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

let datas = localStorage.getItem("selectedTheme") || "light";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(datas);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    window.localStorage.setItem("selectedTheme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
