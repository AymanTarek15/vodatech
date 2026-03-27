import React from "react";
import styles from "./HeaderBar.module.css";

export default function HeaderBar({ title }) {
  return (
    <header className={styles.header}>
      <div className={styles.title}>{title}</div>
      <button className={styles.avatarBtn} aria-label="Profile">
        <span className={styles.avatarCircle} />
      </button>
    </header>
  );
}
