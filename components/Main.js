import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Main({ guide }) {
  const { locale } = useRouter();
  console.log(guide);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Qo'llanma</h1>

        <div className={styles.grid}>
          {guide
            .filter((p) => p.languages_code === locale && p.gcguide_id)
            .map(({ gcguide_id, image, title, content }) => (
              <Link key={gcguide_id} href={`/guide/${gcguide_id}`}>
                <a className={styles.card}>
                  <h2>{title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: content.split(" ", 20).join(" "),
                    }}
                  />
                </a>
              </Link>
            ))}
        </div>
      </main>
    </div>
  );
}
