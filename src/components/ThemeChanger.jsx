import useLocalStorage from "use-local-storage";
import { createContext, useState } from "react";
export const ThemeContext = createContext(null);
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  return <ThemeContext.Provider value = {{theme,setTheme}}>{props.children}</ThemeContext.Provider>;
};

