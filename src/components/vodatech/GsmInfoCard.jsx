import React from "react";
import Card from "./ui/Card";
import Row from "./ui/Row";
import styles from "./GsmInfoCard.module.css";

export default function GsmInfoCard({ data,onOpenQuota }) {
  return (
    <Card>
      <div className={styles.rows}>
        <Row label="GSM Number:" value={data.gsmNumber} strong />

        <div className={styles.quotaRow}>
          <div className={styles.quotaLabel}>Quota</div>
          <div className={styles.quotaWrap}>
            <div className={styles.bar}>
              <div
                className={styles.fill}
                style={{ width: `${data.quotaUsedPercent}%` }}
              />
            </div>
            <div className={styles.quotaText}>{data.quotaUsedText} <span><button className={styles.linkBtn} onClick={onOpenQuota} type="button">
                        View details
                      </button></span></div>
          </div>
        </div>
        <Row label="Bundle Name:" value={data.bundleName} />
        <Row label="Renewal Date:" value={data.renewalDate} />
        <Row label="Line Type:" value={data.lineType} />
        <Row label="Global Outage:" value={data.globalOutage} danger />

        <Row
          label="Network Health:"
          value={
            <span className={styles.pillOk}>
              <span className={styles.dotOk} /> {data.networkHealth}
            </span>
          }
        />

        <Row
          label="Network Health (Real Time):"
          value={
            <span className={styles.pillOk}>
              <span className={styles.dotOk} /> {data.networkHealth}
            </span>
          }
        />

        <Row label="Loss of Coverage:" value={data.lossOfCoverage} />
        <Row label="Loss of Coverage Rate:" value={data.lossOfCoverageRate} />
      </div>
    </Card>
  );
}
