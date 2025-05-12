import React from "react";
import styles from "./EventComponent.module.css";
function EventComponent({ event }) {
  return (
    <div className={styles.eventBox}>
      <div>
        <div className={styles.effectPhoto}></div>
        <img className={styles.imgStyle} src={event.photoUrl} alt="" />
      </div>
      <div className={styles.textStyle}>
        <div className={styles.subject}>{event.title}</div>
        <div className={styles.description}>{event.description}</div>
      </div>
    </div>
  );
}

export default EventComponent;
