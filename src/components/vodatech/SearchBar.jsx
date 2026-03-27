import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ label, placeholder }) {
  return (
    <section className={styles.row}>
      <div className={styles.label}>{label}</div>
      <div className={styles.search}>
        <span className={styles.icon} aria-hidden="true">🔍</span>
        <input className={styles.input} placeholder={placeholder} />
      </div>
    </section>
  );
}
