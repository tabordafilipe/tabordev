import { useState, useEffect } from "react";

/**
 * @description
 * can be used to get the current system theme (`light` or `dark`).
 * should not be used in combination with `useDarkMode`, is a diffent hook.
 *
 * @returns
 * if the current system theme is `dark`
 */
export default function useSystemThemeDetector(): boolean | undefined {
  const [isSystemDarkTheme, setIsSystemDarkTheme] = useState<
    boolean | undefined
  >();

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
