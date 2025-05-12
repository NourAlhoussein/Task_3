import React, { useState } from "react";
import styles from "./QuestionComponent.module.css";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
function QuestionComponent({ question }) {
  const [isOpen, setIsOpen] = useState(false);
  const openAccordion = () => {
    setIsOpen(true);
  };
  const closeAccordion = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={isOpen === true ? styles.openAccordion : styles.closeAccordion}
    >
      <div className={styles.titleStyle}>{question.title}</div>
      <div className={isOpen === true ? "" : styles.closeAnswer}>
        <div className={styles.line}></div>
        <div className={styles.answerStyle}>{question.answer}</div>
      </div>
      <div className={styles.btnDiv}>
        <button
          className={
            isOpen === false ? styles.openBtn : styles.openBtnDisplayNone
          }
          onClick={openAccordion}
        >
          <IoIosAdd />
        </button>
        <button
          className={
            isOpen === false ? styles.closeBtnDisplayNone : styles.closeBtn
          }
          onClick={closeAccordion}
        >
          <FiMinus />
        </button>
      </div>
    </div>
  );
}

export default QuestionComponent;
