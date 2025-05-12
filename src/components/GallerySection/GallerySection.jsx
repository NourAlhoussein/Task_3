import React, { useState } from "react";
import styles from "./GallerySection.module.css";
import categories, { items } from "../../Data/GalleryCategory";
import CategoryComponent from "../CategoryComponent/CategoryComponent";
function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div className={styles.GallerySection}>
      <div className={styles.categoryDiv}>
        {categories?.map((category, index) => {
          return (
            <div
              className={`${styles.categoryStyle} ${
                category.type === activeCategory ? styles.activeCategory : ""
              }`}
              key={index}
              onClick={() => {
                setActiveCategory(category.type);
              }}
            >
              {category.type}
            </div>
          );
        })}
      </div>
      <div className={styles.categoryComponent}>
        {items?.map((item, index) => {
          if (activeCategory === "All" || item.category === activeCategory) {
            return (
              <CategoryComponent
                item={item}
                key={index}
                activeCategory={activeCategory}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default GallerySection;
