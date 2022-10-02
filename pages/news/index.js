import React from "react";

import NewsCollection from "../../components/NewsCollection";

export default function NewsIndex({data}) {
  return <NewsCollection data={data.data}/>;
}

export async function getServerSideProps() {
    const res2 = await fetch("https://admin.nimagap.uz/items/gcnews_translations");
    const data = await res2.json();
   
    return {
      props: {
        data,
      },
    };
  }
