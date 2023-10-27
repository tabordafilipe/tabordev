import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <header className="absolute">header</header> */}
      <Component {...pageProps} />
      {/* <footer>footer</footer> */}
    </>
  );
}
