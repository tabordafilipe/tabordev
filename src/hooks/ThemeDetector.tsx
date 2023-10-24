import { useState, useEffect } from "react";

export default function useSystemThemeDetector() {
  const [isSystemDarkTheme, setIsSystemDarkTheme] = useState(false);

  const mqListener = (e: any) => {
    setIsSystemDarkTheme(e.matches);
  };

  useEffect(() => {
    setIsSystemDarkTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);

    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, []);

  return isSystemDarkTheme;
}
