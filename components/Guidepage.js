import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/News.module.css";
import { NextSeo } from "next-seo";
import { getAssetURL } from '../utils/get-asset-url'
import Image from "next/image";

const Guide = ({ data }) => {
  const { locale } = useRouter();
  const dataFilter = data.data[0];
  return (
    <>
      <NextSeo
        title={dataFilter.meta_name}
        description={dataFilter.content.split(" ", 20).join(" ")}
        // titleTemplate={dataFilter.title}
      />
      <div className={styles.news}>
        <h3>{dataFilter.title}</h3>
        <p></p>
        <div className={styles.image}>
          <Image
            src={getAssetURL(dataFilter.image)}
            layout="responsive"
            width={600}
            height={500}
            alt="greencard"
            
          />
        </div>
        <div className={styles.desc}>
          <div dangerouslySetInnerHTML={{ __html: dataFilter.content }} />
        </div>
      </div>
    </>
  );
};

export default Guide;