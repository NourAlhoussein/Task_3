import React from "react";
import styles from "./EventsSection.module.css";
import events from "../../Data/Events";
import EventComponent from "../EventComponent/EventComponent";
function EventsSection() {
  return (
    <div className={styles.eventsSection}>
      {events?.map((event, index) => {
        return <EventComponent event={event} key={index} />;
      })}
    </div>
  );
}

export default EventsSection;
