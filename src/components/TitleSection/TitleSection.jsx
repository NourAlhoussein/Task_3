import React from "react";
import styles from "./TitleSection.module.css";
function TitleSection({ btnName, titleSection, description }) {
  return (
    <div className={styles.TitleStyle}>
      <button className={styles.BtnStyle}>{btnName}</button>
      <div className={styles.TitleSection}>{titleSection}</div>
      <div className={styles.DescSection}>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}

export default TitleSection;
