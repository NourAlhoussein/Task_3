import React from "react";
import styles from "./Banner.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";

function GrabSeat() {
  return (
    <>
      <div className={styles.BannerDiv}>
        <div className={styles.BannerText}>
          Admission is Open, Grab your seat now
        </div>
        <AiOutlineArrowRight className={styles.BannerArrow} />
        <img
          className={styles.imageOne}
          src="/Task_3/assets/images/Abstract Design.png"
          alt=""
        />
        <img
          className={styles.imageTwo}
          src="/Task_3/assets/images/Abstract Design2.png"
          alt=""
        />
        <img
          className={styles.imageThree}
          src="/Task_3/assets/images/Group.png"
          alt=""
        />
        <img
          className={styles.imageFour}
          src="/Task_3/assets/images/Group (1).png"
          alt=""
        />
      </div>
    </>
  );
}
export default GrabSeat;
