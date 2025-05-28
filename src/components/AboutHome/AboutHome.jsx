import React from "react";
import styles from "./AboutHome.module.css";
function AboutHome({ btnName, title, description }) {
  return (
    <div className={styles.aboutBox}>
      <div className={styles.homeStyle}>
        <img
          className={styles.imageStyle}
          src="/Task_3/assets/images/Abstract Design About.png"
          alt=""
        />
        <div className={styles.partOne}>
          <div>
            <button className={styles.btnStyle}>{btnName}</button>
          </div>
          <div className={styles.homeTitle}>{title}</div>
        </div>
        <div className={styles.homeDescription}>{description}</div>
      </div>
    </div>
  );
}

export default AboutHome;
