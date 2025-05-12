import React from "react";
import styles from "./PagesSection.module.css";
import PageComponent from "../PageComponent/PageComponent";
import pages from "../../Data/PagesData";
function PagesSection() {
  return (
    <div className={styles.PagesSection}>
      {pages?.map((page, index) => {
        return <PageComponent page={page} key={index} />;
      })}
    </div>
  );
}

export default PagesSection;
