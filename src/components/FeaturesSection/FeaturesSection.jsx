import React from "react";
import styles from "./FeaturesSection.module.css";
import features from "../../Data/Features";
import FeatureComponent from "../FeatureComponent/FeatureComponent"
function FeaturesSection() {
  return (
    <div className={styles.FeaturesSection}>
      {features?.map((feature, index) => {
        return <FeatureComponent feature={feature} key={index} />;
      })}
    </div>
  );
}

export default FeaturesSection;
