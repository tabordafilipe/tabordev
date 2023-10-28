import { useState, useEffect, createContext } from "react";

interface LogoVisibleContext {
  isLogoVisible: boolean | null;
  setIsLogoVisible: (visible: boolean | null) => void;
}

export const IsLogoVisibleContext = createContext<LogoVisibleContext>({
  isLogoVisible: null,
  setIsLogoVisible: () => null,
});

export function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref?.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
