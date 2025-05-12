import React from "react";
import AboutHome from "../components/AboutHome/AboutHome";
import TitleSection from "../components/TitleSection/TitleSection";
import ActivitiesSection from "../components/ActivitiesSection/ActivitiesSection";
import EventsSection from "../components/EventsSection/EventsSection";
import SupportsSection from "../components/SupportsSection/SupportsSection"
function StudentLife() {
  return (
    <div className="studentsLifeStyle">
      <AboutHome
        btnName="Enriching Student Life"
        title="Embracing Learning with Discovery and Joy"
        description="Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
      />
      <TitleSection
        btnName="Our Features"
        titleSection="Extracurricular Activities"
        description="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
      />
      <ActivitiesSection />
      <TitleSection
        btnName="Our Features"
        titleSection="Events & Celebrations"
        description="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
      />
      <EventsSection />
      <TitleSection
        btnName="Our Achievements"
        titleSection="Student Support"
        description="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
      />
      <SupportsSection />
    </div>
  );
}

export default StudentLife;
