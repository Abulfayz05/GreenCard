import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Gtag from "../components/gtag";
import Ads from "../components/ads";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta name="yandex-verification" content="55114251dfe82623" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Ads />
      <Gtag />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
