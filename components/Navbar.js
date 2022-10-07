import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import {FaTelegram} from 'react-icons/fa'


export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  console.log(isNavExpanded);
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img
                className={styles.logo}
                src="/logo.png"
                alt="greenkarta.uz"
              ></img>{" "}
            </a>
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <VscMenu size={30} color="white" />
        </button>

        <nav className={isNavExpanded ? styles.menu_active : styles.menu}>
          <button
            className={styles.hamburger_close}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <VscChromeClose size={30} />
          </button>
          <ul
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <li>
              <Link href="/">
                <a>Bosh sahifa</a>
              </Link>
            </li>

            <li>
              <Link href="/guide">
                <a>Qo&apos;llanma</a>
              </Link>
            </li>

            <li>
              <Link href="/news">
                <a>Yangiliklar</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Vakansiya</a>
              </Link>
            </li>
            <li>
              <Link href="https://t.me/greenkarta_uz_bot">
                <a>@greenkarta_uz_bot</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
