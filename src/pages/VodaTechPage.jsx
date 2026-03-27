import React, { useState } from "react";
import HeaderBar from "../components/vodatech/HeaderBar";
import SearchBar from "../components/vodatech/SearchBar";
import InfoGrid from "../components/vodatech/InfoGrid";
import ActionButtons from "../components/vodatech/ActionButtons";
import TroubleshootingCard from "../components/vodatech/TroubleshootingCard";
import ChatAssistant from "../components/vodatech/ChatAssistant";
import QuotaModal from "../components/vodatech/QuotaModal";
import styles from "./VodaTechPage.module.css";

export default function VodTechPage() {
  const [isQuotaOpen, setIsQuotaOpen] = useState(false);

  const data = {
    gsmNumber: "1065057955",
    quotaUsedPercent: 75,
    quotaUsedText: "75% Used (150GB/200GB)",
    bundleName: "Home Wireless 250",
    renewalDate: "31/01/2026",
    lineType: "Postpaid",
    globalOutage: "Yes",
    networkHealth: "Clear",
    lossOfCoverage: 0,
    lossOfCoverageRate: "0%",
    router: "Huawei 5G CPE Pro 2",
    simSerial: "861234567890123",
    sharedNetwork: { "3G": "0%", "4G": "25%", "5G": "75%" },
    lineStatus: "Active",
    simStatus: "Registered",
    currentLocation: "Defined",
    firstLocation: "57121,53021,35124,41245",
    secondLocation: "11721",
    morningSites: "Up",
    eveningSites: "Up",
    oick: 89,
    gprs: "None",
    history: [
      { date: "03/01/2024", text: "Slow Speed ticket submitted." },
      { date: "27/12/2025", text: "Call received for resetting the check" },
    ],
    troubleshooting:[
    `The connection is clear & stable on the 5G network. The quota is at 75% used (150GB out of 200GB)`,
      "Customer has oick 89 and he needs to go to the store to update his information.",
      "Customer has global outage in his area, please script."],

    quotaDetails: {
      mainQuota: { used: 120, total: 160, unit: "GB" },
      rolloverQuota: { used: 20, total: 20, unit: "GB" },
      addonQuota: { used: 10, total: 15, unit: "GB" },
      repurchaseQuota: { used: 0, total: 5, unit: "GB" },
    },
  };

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <HeaderBar title="VodaTech" />
        <SearchBar label="Search GSM:" placeholder="Search..." />

        <InfoGrid data={data} onOpenQuota={() => setIsQuotaOpen(true)} />

        <ActionButtons />
        <TroubleshootingCard text={data.troubleshooting} />
        <ChatAssistant />

        <QuotaModal
          open={isQuotaOpen}
          onClose={() => setIsQuotaOpen(false)}
          quotaDetails={data.quotaDetails}
          header={{
            gsmNumber: data.gsmNumber,
            bundleName: data.bundleName,
            renewalDate: data.renewalDate,
          }}
        />
      </div>
    </div>
  );
}
