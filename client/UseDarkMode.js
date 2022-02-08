import { createContext, useEffect, useState } from "react";

export const ThemeModeContext = createContext({});

export function ThemeModeProvider({ isDarkMode, toggleMode, children }) {
  return (
    <ThemeModeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export const useInitializeDarkMode = () => {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // console.log("init", initialColorValue);

    setDarkTheme(initialColorValue === "dark");
  }, []);
  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  return [darkTheme, handleToggle];
};
