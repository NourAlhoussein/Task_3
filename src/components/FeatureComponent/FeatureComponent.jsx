import React from "react";
import styles from "./FeatureComponent.module.css";
function FeatureComponent({feature}) {
  return (
    <div className={styles.featureBox}>
      <div className={styles.iconDiv}>{feature.icon}</div>
      <div className={styles.title}>{feature.title}</div>
      <div className={styles.description}>{feature.description}</div>
    </div>
  );
}

export default FeatureComponent;
