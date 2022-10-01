import Head from "next/head";
import Image from "next/image";

import Hero from "../components/Hero";
import Main from "../components/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Green Card DV2024 uchun anketalar qabul qilamiz</title>
        <meta name="description" content="Green Card ro'yxatdan o'tish 2024" />
      </Head>
      <Hero />
      <Main />
    </div>
  );
}
