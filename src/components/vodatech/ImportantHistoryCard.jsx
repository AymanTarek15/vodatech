import React from "react";
import Card from "./ui/Card";
import styles from "./ImportantHistoryCard.module.css";

function HistoryItem({ date, text }) {
  return (
    <div className={styles.item}>
      <div className={styles.dot} aria-hidden="true">🟠</div>
      <div>
        <div className={styles.date}>{date}</div>
        <div className={styles.desc}>{text}</div>
      </div>
    </div>
  );
}

export default function ImportantHistoryCard({ items }) {
  return (
    <Card title="Important History">
      <div className={styles.list}>
        {items.map((it, idx) => (
          <HistoryItem key={idx} date={it.date} text={it.text} />
        ))}
      </div>
    </Card>
  );
}
