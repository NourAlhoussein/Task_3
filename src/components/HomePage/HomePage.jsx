import React from "react";
import styles from "./HomePage.module.css";
import { IoIosAdd } from "react-icons/io";
import items from "../../Data/HomeData";
function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.HomePhoto}>
        <img className={styles.Photo} src="/Task_3/assets/images/Image Container.png" alt="Home Page" />
      </div>
      <div className={styles.HomeContent}>
        <div className={styles.HelloText}>
          Welcome to Little Learners Academy
        </div>
        <div className={styles.TitleHome}>
          Where Young Minds Blossom and{" "}
          <span className={styles.TitleSpan}>Dreams Take Flight</span>
        </div>
        <div className={styles.DescriptionHome}>
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </div>
        <div className={styles.HomeBox}>
          {items?.map((item, index) => {
            return (
              <div className={styles.BoxItem} key={index}>
                <div className={styles.ItemNum}>
                  <span>
                    <IoIosAdd />
                  </span>
                  {item.number}
                </div>
                <div className={styles.ItemText}>{item.type}</div>
                <div className={styles.Line}></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
