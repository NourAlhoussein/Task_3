import React from "react";
import styles from "./Mission_VisionSection.module.css";
import items from "../../Data/Mission_VisionData";
import Mission_Vision from "../Mission_Vision_Component/Mission_Vision";
console.log(items);
function Mission_VisionSection() {
  return (
    <div className={styles.sectionStyle}>
      {items?.map((item, index) => {
        return <Mission_Vision item={item} key={index} />;
      })}
    </div>
  );
}

export default Mission_VisionSection;
