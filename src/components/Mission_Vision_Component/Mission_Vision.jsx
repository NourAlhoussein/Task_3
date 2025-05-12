import React from "react";
import styles from "./Mission_Vision.module.css";
function Mission_Vision({ item }) {
  return (
    <div className={styles.boxStyle}>
      <div className={styles.partOne}>
        <div className={styles.titleStyle}>{item.title}</div>
        <img className={styles.imgStyle} src={item.iconUrl} alt="" />
      </div>
      <div className={styles.description}>{item.description}</div>
    </div>
  );
}

export default Mission_Vision;
