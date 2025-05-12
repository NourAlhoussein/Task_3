import React from "react";
import histories from "../../Data/OurHistory";
import styles from "./OurHistory.module.css";
function OurHistory() {
  return (
    <div className={styles.historySection}>
      <span className={styles.mainLine}></span>
      {histories?.map((history, index) => {
        return (
          <div className={styles.SubContainerStyle} key={index}>
            <div className={styles.dateDiv}>
              <span className={styles.lineStyle}></span>
              <img
                className={styles.imgDate}
                src="/assets/images/Abstract DesignAbout.png"
                alt=""
              />
              <div className={styles.yearStyle}>{history.year}</div>
            </div>
            <div className={styles.textDiv}>
              <div className={styles.title}>{history.title}</div>
              <div className={styles.description}>{history.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OurHistory;
