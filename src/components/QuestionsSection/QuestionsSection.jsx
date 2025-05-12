import React from "react";
import QuestionComponent from "../QuestionComponent/QuestionComponent";
import styles from "./QuestionsSection.module.css";
import questions from "../../Data/QuestionsData";
function QuestionsSection() {
  const question1 = questions.slice(0, questions.length / 2);
  const question2 = questions.slice(questions.length / 2, questions.length);
  return (
    <div className={styles.questionsSection}>
      <div className={styles.ArrayDiv1}>
        {question1?.map((question, index) => {
          return <QuestionComponent question={question} key={index} />;
        })}
      </div>
      <div className={styles.ArrayDiv2}>
        {question2?.map((question, index) => {
          return <QuestionComponent question={question} key={index} />;
        })}
      </div>
    </div>
  );
}

export default QuestionsSection;
