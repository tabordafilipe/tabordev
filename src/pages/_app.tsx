import "@/styles/globals.scss";

import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Background from "@/components/Background/Background";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { IsLogoVisibleContext } from "@/hooks/IsVisible";
import { useDarkMode } from "@/hooks/DarkMode";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLogoVisible, setIsLogoVisible] = useState<boolean | null>(null);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <IsLogoVisibleContext.Provider
      value={{
        isLogoVisible,
        setIsLogoVisible: setIsLogoVisible as (visible: boolean | null) => void,
      }}
    >
      <Header></Header>
      <Background />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </IsLogoVisibleContext.Provider>
  );
}
