import React from "react";
import styles from "./StudentComponent.module.css";
function StudentComponent({ student }) {
  return (
    <div className={styles.studentBox}>
      <div>
        <div className={styles.effectPhoto}></div>
        <img className={styles.imgStyle} src={student.photoUrl} alt="" />
      </div>
      <div className={styles.textStyle}>
        <div className={styles.subject}>{student.subject}</div>
        <div className={styles.description}>{student.description}</div>
      </div>
    </div>
  );
}

export default StudentComponent;
