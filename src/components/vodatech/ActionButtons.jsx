import React from "react";
import ActionButton from "./ui/ActionButton";
import styles from "./ActionButtons.module.css";

export default function ActionButtons() {
  return (
    <section className={styles.wrap}>
      <div className={styles.row}>
        <ActionButton icon="📍" text="Reset Location" />
        <ActionButton icon="➕" text="Add Neighbouring Locations" />
        <ActionButton icon="🔄" text="Reset Operations" />
        <ActionButton icon="💳" text="Add Balance" />
      </div>

      <div className={styles.row}>
        <ActionButton icon="🧾" text="Repurchase" />
        <ActionButton icon="🧩" text="Addons" />
        <ActionButton icon="🧰" text="Change rateplan" />
        <ActionButton icon="➖" text="Subtract Balance" />
      </div>
    </section>
  );
}
