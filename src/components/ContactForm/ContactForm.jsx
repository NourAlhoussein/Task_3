import React from "react";
import styles from "./ContactForm.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
function ContactForm({ contacts }) {
  return (
    <div className={styles.contactForm}>
      <div className={styles.iconsDiv}>
        <div className={styles.iconStyle}>
          <FaFacebook />
        </div>
        <div className={styles.iconStyle}>
          <FaTwitter />
        </div>
        <div className={styles.iconStyle}>
          <FaLinkedin />
        </div>
      </div>
      <div className={styles.inputForm}>
        {contacts?.map((contact, index) => {
          return (
            <div className={styles.inputType} key={index}>
              <label htmlFor="">{contact.label}</label>
              <div
                className={`${styles.inputStyle} ${
                  contact.label === "Program of Intrest"
                    ? styles.inputSlideStyle
                    : ""
                }`}
              >
                <input type="text" placeholder={contact.inputType} />
                <div
                  className={`${
                    contact.label === "Program of Intrest"
                      ? styles.slideBlock
                      : styles.slideHidden
                  }`}
                >
                  <IoIosArrowDown />
                </div>
              </div>
            </div>
          );
        })}
        <div className={styles.messageStyle}>
          <label htmlFor="">Message</label>
          <input type="text" placeholder="Enter your Message" />
        </div>
        <button className={styles.submitButton}>Submit</button>
      </div>
    </div>
  );
}

export default ContactForm;
