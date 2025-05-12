import React from "react";
import styles from "./AdmissionsSection.module.css";
import admissions from "../../Data/Admissions";
import AdmissionComponent from "../AdmissionComponent/AdmissionComponent"
console.log(admissions);
function AdmissionsSection() {
  return (
    <div className={styles.AdmissionsSection}>
      {admissions?.map((admission, index) => {
       return <AdmissionComponent admission={admission} key={index} />;
      })}
    </div>
  );
}

export default AdmissionsSection;
