import React from "react";
import { useState, useEffect } from "react";
import styles from "./AwardsSection.module.css";
import awards from "../../Data/Awards";
import AwardComponent from "../AwardComponent/AwardComponent";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
function AwardsSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideItemNum, setSlideItemNum] = useState(3);
  const nextBtnFunction = () => {
    if (currentSlideIndex === awards.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      const current1 = currentSlideIndex + 1;
      setCurrentSlideIndex(current1);
    }
    console.log(currentSlideIndex);
  };
  const prevBtnFunction = () => {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(awards.length - 1);
    } else {
      const current2 = currentSlideIndex - 1;
      setCurrentSlideIndex(current2);
    }
    console.log(currentSlideIndex);
  };
  useEffect(() => {
    const numOfSlide = () => {
      const width = window.innerWidth;
      if (width > 950) {
        return setSlideItemNum(3);
      } else if (width <= 950 && width > 600) {
        return setSlideItemNum(2);
      } else if (width < 600) {
        return setSlideItemNum(1);
      }
    };
    window.addEventListener("resize", numOfSlide);
  });
  return (
    <div className={styles.awardsSection}>
      <div className={styles.sliderStyle}>
        {awards
          ?.slice(currentSlideIndex, currentSlideIndex + slideItemNum)
          .map((award, index) => {
            return <AwardComponent award={award} key={index} />;
          })}
      </div>
      <div className={styles.arrowsDiv}>
        <div className={styles.part1}>8 More Awards</div>
        <div className={styles.part2}>
          <button className={styles.leftArrowDiv} onClick={prevBtnFunction}>
            <FaArrowLeft />
          </button>
          <button className={styles.rightArrowDiv} onClick={nextBtnFunction}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AwardsSection;
