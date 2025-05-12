import React from "react";
import styles from "./ActivitiesSection.module.css";
import activities from "../../Data/Activities";
import ActivityComponent from "../ActivityComponent/ActivityComponent"
function ActivitiesSection() {
  return (
    <div className={styles.activitiesSection}>
      {activities?.map((activity, index) => {
        return <ActivityComponent activity={activity} key={index} />;
      })}
    </div>
  );
}

export default ActivitiesSection;
