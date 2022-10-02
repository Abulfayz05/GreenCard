import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img
                className={styles.logo}
                src="/logo.png"
                alt="nimgap.uz"
              ></img>{" "}
            </a>
          </Link>
        </div>

        <nav className={styles.menu}>
          <ul>
            <li>
              <Link href="/">
                <a>Bosh sahifa</a>
              </Link>
            </li>
        
            <li>
              <Link href="/news">
                <a>Yangiliklar</a>
              </Link>
            </li>
            <li>
              <Link href="/partner">
                <a>Vakansiya</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Aloqa</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
