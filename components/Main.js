import React from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Main({ guide }) {
  const { locale } = useRouter();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Qo&apos;llanma</h1>

        <div className={styles.grid}>
          {guide.map(({ id, image, title, content }) => (
            <Link key={id} href={`/guide/${id}`}>
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
