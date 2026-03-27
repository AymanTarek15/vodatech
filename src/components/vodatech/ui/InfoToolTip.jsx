import React from "react";
import styles from "./InfoToolTip.module.css";

export default function InfoToolTip({ text, label = "Info" }) {
  return (
    <span className={styles.wrapper}>
      <button
        type="button"
        className={styles.iconBtn}
        aria-label={label}
      >
        i
      </button>

      <span className={styles.tooltip} role="tooltip">
        {text}
      </span>
    </span>
  );
}
