import React from "react";
import Card from "./ui/Card";
import Row from "./ui/Row";
import SharedNetworkBadges from "./SharedNetworkBadges";
import InfoTooltip from "./ui/InfoToolTip";
import styles from "./RouterInfoCard.module.css";

export default function RouterInfoCard({ data }) {
  return (
    <Card>
      <div className={styles.rows}>
        <Row
          label="Router:"
          value={
            <a className={styles.link} href="#router">
              {data.router}
            </a>
          }
        />
        <Row label="SIM Serial Number:" value={data.simSerial} />

        <SharedNetworkBadges values={data.sharedNetwork} />

        <Row label="Line Status:" value={data.lineStatus} success />
        <Row label="SIM Status:" value={data.simStatus} success />

        <Row
          label="Current Location:"
          value={<span className={styles.pillOk}>{data.currentLocation}</span>}
          success
        />

        <div className={styles.splitRow}>
          <span>
            <span className={styles.muted}>1st Location:</span>{" "}
            {data.firstLocation}
          </span>
          
        </div>

        <div className={styles.splitRow}>
        <span>
            <span className={styles.muted}>2nd Location:</span>{" "}
            {data.secondLocation}
          </span>
          </div>

        <div className={styles.splitRow}>
          <span>
            <span className={styles.muted}>OICK:</span>{" "}
            <span className={styles.highlight}>
              {data.oick}
              <InfoTooltip
                text="Customer needs to go to store"
                label="OICK note"
              />
            </span>
          </span>

          <span>
            <span className={styles.muted}>GPRS:</span>{" "}
            <span className={styles.okText}>{data.gprs}</span>
          </span>
        </div>
      </div>

      <div className={styles.splitRow}>
        <span>
          <span className={styles.muted}>Morning Sites:</span>{" "}
          <span className={styles.okText}>
            {data.morningSites}
            {/* <InfoTooltip
              text="Customer needs to go to store"
              label="OICK note"
            /> */}
          </span>
        </span>
        <span>
          <span className={styles.muted}>Evening Sites:</span>{" "}
          <span className={styles.okText}>
            {data.eveningSites}
            {/* <InfoTooltip
              text="Customer needs to go to store"
              label="OICK note"
            /> */}
          </span>
        </span>
      </div>
      
    </Card>
  );
}
