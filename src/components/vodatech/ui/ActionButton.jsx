import React from "react";
import styles from "./ActionButton.module.css";

export default function ActionButton({ icon, text, onClick }) {
  return (
    <button className={styles.btn} type="button" onClick={onClick}>
      <span className={styles.icon} aria-hidden="true">{icon}</span>
      <span className={styles.text}>{text}</span>
    </button>
  );
}
