import React from "react";
import styles from "./PageComponent.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import line from "../../../public/assets/images/Container.png";
function PageComponent({ page }) {
  return (
    <div className={styles.pageDiv}>
      <div className={styles.pageTitle}>{page.title}</div>
      <img className={styles.lineStyle} src={line} alt="" />
      <div className={styles.pageContent}>{page.content}</div>
      <div className={styles.buttonDiv}>
        <button className={styles.btnStyle}>
          <span className={styles.btnText}>Learn more</span>{" "}
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}

export default PageComponent;
