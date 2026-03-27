import React from "react";
import styles from "./TroubleshootingCard.module.css";

export default function TroubleshootingCard({ text }) {
  return (
    <section className={styles.card}>
      <div className={styles.title}>💡 Troubleshooting Steps:</div>
      {/* <div className={styles.body}>{text}</div> */}
      <ul>
        {text.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </section>
  );
}
