import React from "react";
import styles from "../styles/NewsCollection.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { getAssetURL } from "../utils/get-asset-url";
import { NextSeo } from "next-seo";

export default function NewsCollection({ data }) {
  const { locale } = useRouter();
  return (
    <div className={styles.collection}>
      <NextSeo
        title="Green Card 2024 Yangiliklar"
        description="Green Card DV 2024 yangiliklari biz orqali kuzatib boring"
        // titleTemplate={dataFilter.title}
      />

      <h2>Yangiliklar</h2>
      <div className={styles.section}>
        <div className={styles.grid}>
          {data
            .filter((p) => p.languages_code === locale && p.gcnews_id)
            .map(({ gcnews_id, image, title, content }) => (
              <div key={gcnews_id} className={styles.card}>
                <div className={styles.image}>
                  <Image
                    src={getAssetURL(image)}
                    layout="responsive"
                    width={350}
                    height={210}
                    alt="Image"
                  />
                </div>

                <div className={styles.item}>
                  <Link href={`/news/${gcnews_id}`}>
                    <a>{title}</a>
                  </Link>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content.split(" ", 15).join(" "),
                    }}
                  ></p>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.ads}></div>
      </div>
    </div>
  );
}
