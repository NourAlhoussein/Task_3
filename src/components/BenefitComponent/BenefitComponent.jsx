import React from "react";
import styles from "./BenefitComponent.module.css";
function BenefitComponent({ benefit }) {
  return (
    <div className={styles.BenefitBox}>
      <div className={styles.IconStyle}>{benefit.icon}</div>
      <div className={styles.TitleStyle}>{benefit.title}</div>
      <div className={styles.description}>{benefit.description}</div>
    </div>
  );
}

export default BenefitComponent;
