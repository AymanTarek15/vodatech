import React from "react";
import ImportantHistoryCard from "./ImportantHistoryCard";
import GsmInfoCard from "./GsmInfoCard";
import RouterInfoCard from "./RouterInfoCard";
import styles from "./InfoGrid.module.css";

export default function InfoGrid({ data,onOpenQuota }) {
  return (
    <section className={styles.grid}>
      <ImportantHistoryCard items={data.history} />
      <GsmInfoCard data={data} onOpenQuota={onOpenQuota} />
      <RouterInfoCard data={data} />

      <div className={styles.card}>
        {/* <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Quota</h3>
          <button className={styles.linkBtn} onClick={onOpenQuota} type="button">
            View details
          </button>
        </div> */}

        {/* <div className={styles.quotaValue}>{data.quotaUsedText}</div> */}

        {/* optional small sub text */}
        {/* <div className={styles.muted}>
          Bundle: {data.bundleName} • Renewal: {data.renewalDate}
        </div> */}
      </div>
    </section>
  );
}
