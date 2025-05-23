import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { AiOutlineAlignRight } from "react-icons/ai";
import logo from "../../../public/assets/images/logo.png";
import items from "../../Data/NavbarData";
import { logoName } from "../../Data/NavbarData";
import { Contact } from "../../Data/NavbarData";
import { NavLink } from "react-router";
function NavBar() {
  const [slideShow, setSlideShow] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const openAndCloseSideBAR = () => {
    setSlideShow(!slideShow);
    console.log(slideShow);
  };
  useEffect(() => {
    const scrollDown = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", scrollDown);
  });
  return (
    <div className={`${styles.NavStyle} ${isScroll ? styles.topNavStyle : ""}`}>
      <div className={styles.LogoStyle}>
        <div>
          <img className={styles.LogoPhoto} src={logo} alt="logo" />
        </div>
        <div>{logoName}</div>
      </div>
      <ul className={styles.UlStyleLarg}>
        {items?.map((item, index) => (
          <li className={styles.NavItemLarg} key={index}>
            <NavLink
              to={item.link}
              className={({ isActive, isPending }) =>
                isPending ? styles.pending : isActive ? styles.active : ""
              }
            >
              {item.content}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavLink className={styles.ContactStyle} to={Contact.link}>
        {Contact.content}
      </NavLink>
      <button className={styles.BtnNavSmall} onClick={openAndCloseSideBAR}>
        <AiOutlineAlignRight />
      </button>
      <ul
        className={`${styles.UlStyleSmall} ${slideShow ? styles.show : ""} ${
          isScroll ? styles.UlStyleSmallTop : ""
        }`}
      >
        {items?.map((item, index) => {
          return (
            <li className={styles.NavItemSmall} key={index}>
              <a href={item.link}>{item.content}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBar;
