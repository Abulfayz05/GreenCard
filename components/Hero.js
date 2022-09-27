import React from "react";
import styles from "../styles/Hero.module.css";
export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.herocontent}>
        <div className={styles.container_page}>
          <h2>Greenkarta.uz bilan Green Card lotereyasini yutib oling</h2>
          <h3>Biz yil davomida anketalarni qabul qilamiz</h3>
        </div>
      </div>
    </div>
  );
}
