import React from "react";
import styles from "./MemberComponent.module.css";
import { MdEmail } from "react-icons/md";
function MemberComponent({ member }) {
  return (
    <div className={styles.memberBox}>
      <div className={styles.part1}>
        <div className={styles.part1Div1}>
          <img className={styles.image} src={member.photoUrl} alt="" />
          <div className={styles.name}>{member.name}</div>
        </div>
        <div className={styles.message}>
          <MdEmail />
        </div>
      </div>
      <div className={styles.part2}>
        <div className={styles.studying}>{member.studying}</div>
        <div className={styles.description}>{member.description}</div>
      </div>
    </div>
  );
}

export default MemberComponent;
