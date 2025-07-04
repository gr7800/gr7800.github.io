import React, { createContext, useState, useMemo } from "react";
import { data } from "./data/data";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const theme = useMemo(
    () =>
      isDark
        ? data.universal.darkTheme
        : data.universal.lightTheme,
    [isDark]
  );

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
