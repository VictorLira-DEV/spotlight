import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/layoult/Layout";
import SearchPageProvider from "../src/context/searchMovieinput";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SearchPageProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchPageProvider>
  );
}

export default MyApp;
