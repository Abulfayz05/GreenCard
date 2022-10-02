import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/News.module.css";
import Image from "next/image";
import { getAssetURL } from '../utils/get-asset-url'
import { NextSeo } from "next-seo";

const News = ({ data }) => {
  const { locale } = useRouter();
  const dataFilter = data.data.filter((p) => p.languages_code === locale)[0];
  return (
    <>
      <NextSeo
        title={dataFilter.meta_name}
        description={dataFilter.content.split(" ", 20).join(" ")}
        // titleTemplate={dataFilter.title}
      />
      <div className={styles.news}>
        <h3>{dataFilter.title}</h3>

        <p className={styles.date}>
          {dataFilter.date.slice(0, 10) +
            " " +
            dataFilter.date.slice(11, 16)}
        </p>

        <div className={styles.image}>
          <Image
            src={getAssetURL(dataFilter.image)}
            layout="responsive"
            width={600}
            height={400}
            alt="Image"
          />
        </div>

        <div className={styles.desc}>
          <p dangerouslySetInnerHTML={{ __html: dataFilter.content }} />
        </div>
      </div>
    </>
  );
};

export default News;

