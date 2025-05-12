import React from "react";
import styles from "./MemberSection.module.css";
import members from "../../Data/Members";
import MemberComponent from "../MemberComponent/MemberComponent";
function MemberSection() {
  return (
    <div className={styles.MembersSection}>
      {members?.map((member, index) => {
        return <MemberComponent member={member} key={index} />;
      })}
    </div>
  );
}

export default MemberSection;
