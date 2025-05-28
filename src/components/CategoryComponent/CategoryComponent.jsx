import React, { useState, useEffect } from "react";
import styles from "./CategoryComponent.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
function CategoryComponent({ item }) {
  const images = item.images;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slideItemNum, setSlideItemNum] = useState(4);
  const nextBtnFunction = () => {
    if (currentSlideIndex === images.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      const current1 = currentSlideIndex + 1;
      setCurrentSlideIndex(current1);
    }
  };
  const prevBtnFunction = () => {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(images.length - 1);
    } else {
      const current2 = currentSlideIndex - 1;
      setCurrentSlideIndex(current2);
    }
  };
  useEffect(() => {
    const numOfSlide = () => {
      const width = window.innerWidth;
      if (width > 950) {
        return setSlideItemNum(4);
      } else if (width <= 950 && width > 600) {
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
    <div className={styles.categoryCompStyle}>
      <div className={styles.imgDiv}>
        {images
          ?.slice(currentSlideIndex, currentSlideIndex + slideItemNum)
          .map((image, index) => {
            return (
              <img
                className={styles.imgStyle}
                key={index}
                src={image.urlimg}
                alt=""
              />
            );
          })}
      </div>
      <div className={styles.titleDiv}>
        <div className={styles.title}>{item.category}</div>
        <div className={styles.arrowDiv}>
          <button className={styles.leftArrowDiv} onClick={prevBtnFunction}>
            <FaArrowLeft />
          </button>
          <button className={styles.rightArrowDiv} onClick={nextBtnFunction}>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className={styles.description}>{item.description}</div>
    </div>
  );
}

export default CategoryComponent;
