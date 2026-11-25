import Head from "next/head";
import Home from "@/modules/Home/Home";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Filipe Taborda | Senior Frontend Engineer</title>
        <meta
          name="description"
          content="Filipe Taborda, Senior Frontend Engineer based in Lisbon. React, React Native and TypeScript."
        />
      </Head>
      <Home />
    </>
  );
}
