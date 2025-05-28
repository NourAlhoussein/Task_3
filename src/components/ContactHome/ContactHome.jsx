import React from "react";
import styles from "./ContactHome.module.css";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { RiTimer2Fill } from "react-icons/ri";
function ContactHome({
  btnName,
  title,
  description,
  email,
  number,
  location,
  time,
}) {
  return (
    <div className={styles.aboutBox}>
      <div className={styles.homeStyle}>
        <img
          className={styles.imageStyle}
          src="/Task_3/assets/images/Abstract Design About.png"
          alt=""
        />
        <div className={styles.partOne}>
          <div>
            <button className={styles.btnStyle}>{btnName}</button>
          </div>
          <div className={styles.homeTitle}>{title}</div>
        </div>
        <div className={styles.partTwo}>
          <div className={styles.homeDescription}>{description}</div>
          <div className={styles.contactPart}>
            <div className={styles.contactRow}>
              <div className={styles.iconStyle}>
                <MdEmail />
              </div>
              <div className={styles.contactText}>{email}</div>
            </div>
            <div className={styles.contactRow}>
              <div className={styles.iconStyle}>
                <BsFillTelephoneFill />
              </div>
              <div className={styles.contactText}>{number}</div>
            </div>

            <div className={styles.contactRow}>
              <div className={styles.iconStyle}>
                <FaLocationDot />
              </div>
              <div className={styles.contactText}>{location}</div>
            </div>
            <div className={styles.contactRow}>
              <div className={styles.iconStyle}>
                <RiTimer2Fill />
              </div>
              <div className={styles.contactText}>{time}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHome;
