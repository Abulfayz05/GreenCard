// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

 const res = await fetch("https://admin.nimagap.uz/items/gcguide");
 const gcguide =await res.json();
 let guide: any[] = gcguide.data;

  
  const fields: ISitemapField[] = guide.map((item) => ({
    loc: `https://greenkarta.uz/guide/${item.id}`,
    lastmod: new Date().toISOString(),
  }))

  // console.log(fields)




  return getServerSideSitemap(ctx, fields )

}


// Default export to prevent next.js errors
export default function Sitemap() {}