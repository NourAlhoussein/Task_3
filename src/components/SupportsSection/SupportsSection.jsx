import React from "react";
import styles from "./SupportsSection.module.css";
import supports from "../../Data/Supports";
import SupportComponent from "../SupportComponent/SupportComponent"
function SupportsSection() {
  return (
    <div className={styles.supportsSection}>
      {supports?.map((support, index) => {
        return <SupportComponent support={support} key={index} />;
      })}
    </div>
  );
}

export default SupportsSection;
