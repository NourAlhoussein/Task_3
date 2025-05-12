import React from "react";
import styles from "./Banner.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import abstract1 from "../../../public/assets/images/Abstract Design.png";
import abstract2 from "../../../public/assets/images/Abstract Design2.png";
import group from "../../../public/assets/images/Group.png";
import group2 from "../../../public/assets/images/Group (1).png";

function GrabSeat() {
  return (
    <>
      <div className={styles.BannerDiv}>
        <div className={styles.BannerText}>
          Admission is Open, Grab your seat now
        </div>
        <AiOutlineArrowRight className={styles.BannerArrow} />
        <img className={styles.imageOne} src={abstract1} alt="" />
        <img className={styles.imageTwo} src={abstract2} alt="" />
        <img className={styles.imageThree} src={group} alt="" />
        <img className={styles.imageFour} src={group2} alt="" />
      </div>
    </>
  );
}
export default GrabSeat;
