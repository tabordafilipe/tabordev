import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { IsLogoVisibleContext } from "@/hooks/IsVisible";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLogoVisible, setIsLogoVisible] = useState<boolean | null>(null);

  return (
    <IsLogoVisibleContext.Provider
      value={{
        isLogoVisible,
        setIsLogoVisible: setIsLogoVisible as (visible: boolean | null) => void,
      }}
    >
      <Header></Header>
      <Component {...pageProps} />
      <Footer />
    </IsLogoVisibleContext.Provider>
  );
}
