import React from "react";
import styles from "./AdmissionComponent.module.css";
function AdmissionComponent({ admission }) {
  return (
    <div className={styles.admissionBox}>
      <div
        className={`${styles.number} ${
          admission.number != "01" ? styles.addLine : ""
        }`}
      >
        {admission.number}
      </div>
      <div>
        <div className={styles.title}>{admission.title}</div>
        <div className={styles.description}>{admission.description}</div>
      </div>
    </div>
  );
}

export default AdmissionComponent;
