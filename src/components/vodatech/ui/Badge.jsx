import React from "react";
import styles from "./Badge.module.css";

export default function Badge({ label, value, tone }) {
  return (
    <div className={`${styles.badge} ${styles[tone]}`}>
      <div className={styles.badgeLabel}>{label}</div>
      <div className={styles.badgeValue}>{value}</div>
    </div>
  );
}
