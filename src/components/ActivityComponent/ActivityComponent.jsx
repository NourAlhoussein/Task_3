import React from "react";
import styles from "./ActivityComponent.module.css";
function ActivityComponent({activity}) {
  return (
    <div className={styles.activityBox}>
      <div className={styles.iconDiv}>{activity.icon}</div>
      <div className={styles.title}>{activity.title}</div>
      <div className={styles.description}>{activity.description}</div>
    </div>
  );
}

export default ActivityComponent;
