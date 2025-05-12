import React from "react";
import styles from "./SupportComponent.module.css";
function SupportComponent({support}) {
  return (
    <div className={styles.supportBox}>
      <div className={styles.iconDiv}>{support.icon}</div>
      <div className={styles.title}>{support.title}</div>
      <div className={styles.description}>{support.description}</div>
    </div>
  );
}

export default SupportComponent;
