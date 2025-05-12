import React from "react";
import AboutHome from "../components/AboutHome/AboutHome";
import TitleSection from "../components/TitleSection/TitleSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import StudentsLearnSection from "../components/StudentsLearnSection/StudentsLearnSection";
import GallerySection from "../components/GallerySection/GallerySection"
function Academics() {
  return (
    <div className="academicsStyle">
      <AboutHome
        btnName="Academics"
        title="Nurturing Young Minds for Success"
        description="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
      />
      <TitleSection
        btnName="Features"
        titleSection="Our Special Features"
        description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
      />
      <FeaturesSection />
      <TitleSection
        btnName="Our Features"
        titleSection="What Students Learn"
        description="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
      />
      <StudentsLearnSection />
      <TitleSection
        btnName="Our Gallery"
        titleSection="Our Rooms Gallery"
        description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
      />
      <GallerySection />
    </div>
  );
}

export default Academics;
