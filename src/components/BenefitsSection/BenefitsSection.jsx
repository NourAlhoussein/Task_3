import React from "react";
import styles from "./BenefitsSection.module.css";
import BenefitComponent from "../BenefitComponent/BenefitComponent";
import benefits from "../../Data/BenefitsData";
function BenefitsSection() {
  return (
    <div className={styles.BenefitsSection}>
      {benefits?.map((benefit, index) => {
        return <BenefitComponent benefit={benefit} key={index} />;
      })}
    </div>
  );
}

export default BenefitsSection;
