import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";
const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((listener) => listener());

// A stored choice wins over the OS preference.
const getSnapshot = (): boolean => {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia(COLOR_SCHEME_QUERY).matches;
};

const getServerSnapshot = () => false;

const subscribe = (listener: () => void) => {
  const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY);
  listeners.add(listener);
  mediaQuery.addEventListener("change", listener);
  window.addEventListener("storage", listener);

  return () => {
    listeners.delete(listener);
    mediaQuery.removeEventListener("change", listener);
    window.removeEventListener("storage", listener);
  };
};

export function useDarkMode() {
  const isDarkMode = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const toggle = useCallback(() => {
    window.localStorage.setItem(STORAGE_KEY, isDarkMode ? "light" : "dark");
    notify();
  }, [isDarkMode]);

  return { isDarkMode, toggle };
}
