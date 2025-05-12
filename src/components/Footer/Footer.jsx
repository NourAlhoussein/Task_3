import React from "react";
import styles from "./Footer.module.css";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../../../public/assets/images/logo.png";
function Footer({ logoName, email, number, address }) {
  return (
    <div className={styles.footer}>
      <div className={styles.part1}>
        <div className={styles.firstColumn}>
          <div className={styles.logoTextStyle}>
            <div className={styles.LogoStyle}>
              <div>
                <img className={styles.LogoPhoto} src={logo} alt="logo" />
              </div>
              <div>{logoName}</div>
            </div>
            <div className={styles.textStyle}>
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </div>
          </div>
          <div className={styles.contactType}>
            <div className={styles.contactDiv}>
              <span className={styles.iconStyle}>
                <MdEmail />
              </span>
              <span className={styles.contactText}>{email}</span>
            </div>
            <div className={styles.contactDiv}>
              <span className={styles.iconStyle}>
                <IoCall />
              </span>
              <span className={styles.contactText}>{number}</span>
            </div>
            <div className={styles.contactDiv}>
              <span className={styles.iconStyle}>
                <FaLocationDot />
              </span>
              <span className={styles.contactText}>{address}</span>
            </div>
          </div>
        </div>
        <div className={styles.secondColumn}>
          <div className={styles.groupItems1}>
            <div className={styles.flex_1}>
              <div className={styles.titleType}>Home</div>
              <div className={styles.titleItems}>
                <div>Features</div>
                <div>Our Testimonials</div>
                <div>FAQ</div>
              </div>
            </div>
            <div className={styles.flex_1}>
              <div className={styles.titleType}>About Us</div>
              <div className={styles.titleItems}>
                <div>Our Mission</div>
                <div>Our Vission</div>
                <div>Awards and Recognitions</div>
                <div>History</div>
                <div>Teachers</div>
              </div>
            </div>
          </div>
          <div className={styles.groupItems2}>
            <div className={styles.flex_1}>
              <div className={styles.titleType}>Academics</div>
              <div className={styles.titleItems}>
                <div>Special Features</div>
                <div>Gallery</div>
              </div>
            </div>
            <div className={styles.flex_1}>
              <div className={styles.titleType}>Contact Us</div>
              <div className={styles.titleItems}>
                <div>Information</div>
                <div>Map & Direction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineH}></div>
      <div className={styles.part2}>
        <div className={styles.part2Div1}>
          <div className={styles.part2Text}>Terms of Service</div>
          <div className={styles.lineVDiv}>
            <div className={styles.lineV}></div>
          </div>
          <div className={styles.part2Text}>Privacy Policy</div>
          <div className={styles.lineVDiv}>
            <div className={styles.lineV}></div>
          </div>
          <div className={styles.part2Text}>Cookie Policy</div>
        </div>
        <div className={styles.part2Div2}>
          <div className={styles.iconStyleSocial}>
            <MdFacebook />
          </div>
          <div className={styles.iconStyleSocial}>
            <FaTwitter />
          </div>
          <div className={styles.iconStyleSocial}>
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className={styles.lineH}></div>
      <div className={styles.part3}>
        <div>
          Copyright © [2023] Little Learners Academy. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
