import React from "react";
import AboutHome from "../components/AboutHome/AboutHome";
import TitleSection from "../components/TitleSection/TitleSection";
import Mission_VisionSection from "../components/Mission&VisionSection/Mission_VisionSection";
import AwardsSection from "../components/AwardsSection/AwardsSection";
import OurHistory from "../components/OurHistorySection/OurHistory";
import MembersSection from "../components/MembersSection/MemberSection";
function About() {
  return (
    <div className="aboutStyle">
      <AboutHome
        btnName="Academics"
        title="Welcome to Little Learners Academy"
        description=" A leading kinder garden school dedicated to providing a nurturing and
          stimulating environment for young learners. With a commitment to
          excellence in early education, we believe in shaping curious minds and
          building a strong foundation for a lifelong love of learning. Our
          holistic approach fosters intellectual, social, emotional, and
          physical development, ensuring that each child reaches their full
          potential."
      />
      <TitleSection
        btnName="Mission & Visions"
        titleSection="Our Mission & Visions"
        description="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
      />
      <Mission_VisionSection />
      <TitleSection
        btnName="Our Achievements"
        titleSection="Our Awards and Recognitions"
        description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />
      <AwardsSection />
      <TitleSection
        btnName="Our Progressive Journey"
        titleSection="Our History"
        description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
      />
      <OurHistory />
      <TitleSection
        btnName="Our Teachers With Experties"
        titleSection="Our Team Members"
        description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
      />
      <MembersSection />
    </div>
  );
}

export default About;
