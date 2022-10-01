import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";

const defaultTheme = "dark";

export function usePrefersDarkMode() {
  const [value, setValue] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setValue(mediaQuery.matches);

    const handler = () => setValue(mediaQuery.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return value;
}

export const useTheme = () => {
  const prefersDarkMode = usePrefersDarkMode();
  const [theme, setTheme] = useLocalStorage(
    "theme",
    prefersDarkMode ? "dark" : defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === "light" ? "dark" : "light");
    root.classList.add(theme);
  }, [theme]);

  return { theme, setTheme };
};
