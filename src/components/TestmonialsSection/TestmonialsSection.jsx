import React, { useState, useEffect } from "react";
import styles from "./TestMonialsSection.module.css";
import TestmonialComponent from "../TestmonialComponent/TestmonialComponent";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import testmonials from "../../Data/TestmonialsData";
function TestmonialsSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideItemNum, setSlideItemNum] = useState(3);
  const nextBtnFunction = () => {
    if (currentSlideIndex === testmonials.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      const current1 = currentSlideIndex + 1;
      setCurrentSlideIndex(current1);
    }
    console.log(currentSlideIndex);
  };
  const prevBtnFunction = () => {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(testmonials.length - 1);
    } else {
      const current2 = currentSlideIndex - 1;
      setCurrentSlideIndex(current2);
    }
    console.log(currentSlideIndex);
  };
  useEffect(() => {
    const numOfSlide = () => {
      const width = window.innerWidth;
      if (width >= 950) {
        return setSlideItemNum(3);
      } else if (width < 950 && width > 600) {
        return setSlideItemNum(2);
      } else if (width < 600) {
        return setSlideItemNum(1);
      }
    };
    numOfSlide();
    window.addEventListener("resize", numOfSlide);
    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", numOfSlide);
  });
  return (
    <div className={styles.cardsDiv}>
      {testmonials
        ?.slice(currentSlideIndex, currentSlideIndex + slideItemNum)
        .map((testmonial, index) => {
          return (
            <TestmonialComponent
              testmonial={testmonial}
              key={index}
              index={index}
            />
          );
        })}
      <button className={styles.rightArrowDiv} onClick={nextBtnFunction}>
        <FaArrowRight />
      </button>
      <button className={styles.leftArrowDiv} onClick={prevBtnFunction}>
        <FaArrowLeft />
      </button>
    </div>
  );
}
export default TestmonialsSection;
