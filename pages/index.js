import Head from "next/head";

import { NextSeo } from "next-seo";
import Hero from "../components/Hero";
import Main from "../components/Main";
import NewsCollection from "../components/NewsCollection";

export default function Home({ data, guide }) {
  return (
    <div>
      <Hero />
      <Main guide={guide.data} />
      <NewsCollection data={data.data} />
      <NextSeo
        title="Green Card DV2024 ro'yxatdan o'tishga yordam beramiz"
        description="Green Card ro'yxatdan o'tish 2024"
        // titleTemplate={dataFilter.title}
      />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://admin.nimagap.uz/items/gcnews_translations");
  const data = await res.json();
  const res2 = await fetch(
    "https://admin.nimagap.uz/items/gcguide_translations"
  );
  const guide = await res2.json();

  return {
    props: {
      data,
      guide,
    },
  };
}
