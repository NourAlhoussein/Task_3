import React from "react";
import styles from "./FeaturesTableSection.module.css";
import types, { items, services } from "../../Data/FeaturesType";

function FeaturesTableSection() {
  return (
    <div>
      <div className={styles.tableSection}>
        <table className={styles.tableTitle}>
          {types?.map((type, index) => {
            return (
              <th className={styles.titleItem} key={index}>
                {type.title}
              </th>
            );
          })}
        </table>
        <table className={styles.tableInfo}>
          {items?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.program}</td>
                <td>{item.AgeGroup} Years</td>
                <td>${item.AnnualTuition}</td>
                <td>${item.RegistrationFee}</td>
                <td>${item.ActivityFee}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className={styles.tableSection}>
        <table className={styles.tableTitle}>
          <th className={styles.titleItem}>Additional Services</th>
        </table>
        <table className={styles.tableServices}>
          {services?.map((service, index) => {
            return (
              <tr key={index}>
                <td>{service.title}</td>
                <td>{service.content} Years</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default FeaturesTableSection;
