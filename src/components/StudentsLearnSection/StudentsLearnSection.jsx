import React from "react";
import styles from "./StudentsLearnSection.module.css";
import students from "../../Data/Students";
import StudentComponent from "../StudentComponent/StudentComponent";
function StudentsLearnSection() {
  return (
    <div className={styles.studentsSection}>
      {students?.map((student, index) => {
        return <StudentComponent student={student} key={index} />;
      })}
    </div>
  );
}

export default StudentsLearnSection;
