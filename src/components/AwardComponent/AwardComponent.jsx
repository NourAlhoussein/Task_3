import React from "react";
import styles from "./AwardComponent.module.css";
function AwardComponent({ award }) {
  return (
    <div className={styles.cardAward}>
      <div className={styles.iconDiv}>{award.icon}</div>
      <div className={styles.title}>{award.title}</div>
      <div className={styles.description}>{award.description}</div>
    </div>
  );
}

export default AwardComponent;
