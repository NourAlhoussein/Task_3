import React from "react";
import styles from "./TestmonialComponent.module.css";
import { IoIosStar } from "react-icons/io";
function TestmonialComponent({ testmonial}) {
  return (
    <div className={styles.cardStyle}>
      <div className={styles.photoStyle}>
        <img src={testmonial.photoSrc} alt="" />
      </div>
      <div className={styles.nameStyle}>
        {testmonial.name}
      </div>
      <div>
        {[...Array(5)].map((_, starIndex) => {
          return <IoIosStar key={starIndex} className={styles.starStyle} />;
        })}
      </div>
      <div className={styles.descriptionStyle}>{testmonial.description}</div>
    </div>
  );
}

export default TestmonialComponent;