import React from "react";
import styles from "./Row.module.css";

export default function Row({ label, value, strong, success, danger }) {
  const valueCls = [
    styles.value,
    strong ? styles.strong : "",
    success ? styles.success : "",
    danger ? styles.danger : "",
  ].join(" ");

  return (
    <div className={styles.row}>
      <div className={styles.label}>{label}</div>
      <div className={valueCls}>{value}</div>
    </div>
  );
}
