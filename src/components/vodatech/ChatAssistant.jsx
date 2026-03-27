import React from "react";
import styles from "./ChatAssistant.module.css";
import botAvatar from "../../assets/tobi.png"; // adjust path if needed

export default function ChatAssistant() {
  return (
    <section className={styles.chat}>
      <div className={styles.avatarWrap}>
        <img
          src={botAvatar}
          alt="Assistant avatar"
          className={styles.avatarImg}
        />
      </div>

      <div className={styles.box}>
        <div className={styles.hello}>Hello! How can I help you?</div>
        <input
          className={styles.input}
          placeholder="Type your message..."
        />
      </div>
    </section>
  );
}
