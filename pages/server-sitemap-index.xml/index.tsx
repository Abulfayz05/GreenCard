// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const response = await fetch("https://admin.nimagap.uz/items/gcnews_translations");
  const gcnews= await response.json();

 const gcnews2: any[] = gcnews.data;



  const fields: ISitemapField[] = gcnews2.map((datal) => ({
    loc: `https://greenkarta.uz/news/${datal.gcnews_id}`,
    lastmod: new Date().toISOString(),
  }))

//   console.log(fields)



  return getServerSideSitemap(ctx, fields)

}

// Default export to prevent next.js errors
export default function Sitemap() {}