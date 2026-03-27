import React, { useEffect } from "react";
import styles from "./QuotaModal.module.css";

function formatLine(label, obj) {
  const used = obj?.used ?? 0;
  const total = obj?.total ?? 0;
  const unit = obj?.unit ?? "";
  return { label, used, total, unit };
}

export default function QuotaModal({ open, onClose, quotaDetails, header }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const rows = [
    formatLine("Main quota", quotaDetails?.mainQuota),
    formatLine("Rollover quota", quotaDetails?.rolloverQuota),
    formatLine("Addon quota", quotaDetails?.addonQuota),
    formatLine("Repurchase quota", quotaDetails?.repurchaseQuota),
  ];

  return (
    <div className={styles.backdrop} onMouseDown={onClose} role="presentation">
      <div
        className={styles.modal}
        onMouseDown={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Quota details"
      >
        <div className={styles.header}>
          <div>
            <div className={styles.title}>Quota details</div>
            <div className={styles.sub}>
              GSM: {header?.gsmNumber} • {header?.bundleName} • Renewal:{" "}
              {header?.renewalDate}
            </div>
          </div>

          <button className={styles.closeBtn} onClick={onClose} type="button" aria-label="Close">
            ✕
          </button>
        </div>

        <div className={styles.body}>
          {rows.map((r) => {
            const pct = r.total > 0 ? Math.min(100, Math.round((r.used / r.total) * 100)) : 0;
            return (
              <div className={styles.row} key={r.label}>
                <div className={styles.left}>
                  <div className={styles.label}>{r.label}</div>
                  <div className={styles.value}>
                    {r.used}/{r.total} {r.unit} • {pct}%
                  </div>
                </div>

                <div className={styles.progressOuter} aria-hidden="true">
                  <div className={styles.progressInner} style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.footer}>
          <button className={styles.primaryBtn} onClick={onClose} type="button">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
