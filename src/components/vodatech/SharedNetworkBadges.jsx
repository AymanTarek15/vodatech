import React from "react";
import Badge from "./ui/Badge";
import styles from "./SharedNetworkBadges.module.css";

export default function SharedNetworkBadges({ values }) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>Shared Network</div>
      <div className={styles.badges}>
        <Badge label="3G" value={values["3G"]} tone="blue" />
        <Badge label="4G" value={values["4G"]} tone="orange" />
        <Badge label="5G" value={values["5G"]} tone="red" />
      </div>
    </div>
  );
}
