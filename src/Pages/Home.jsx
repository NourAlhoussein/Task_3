
import HomePage from "../components/HomePage/HomePage";
import TitleSection from "../components/TitleSection/TitleSection";
import BenefitsSection from "../components/BenefitsSection/BenefitsSection";
import QuestionsSection from "../components/QuestionsSection/QuestionsSection";
import PagesSection from "../components/PagesSection/PagesSection";
import TestmonialsSection from "../components/TestmonialsSection/TestmonialsSection";
import "../index.css";
import React from "react";

const Home = () => {
  return (
    <div className="HomeStyle">
      <HomePage />
      <TitleSection
        btnName="Children Deserve Bright Future"
        titleSection="Our Benefits"
        description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />
      <BenefitsSection />
      <TitleSection
        btnName="Their Happy Words 🤗"
        titleSection="Our Testimonials"
        description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />
      <TestmonialsSection />
      <TitleSection
        btnName="Solutions For The Doubts"
        titleSection="Frequently Asked Questions"
        description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />
      <QuestionsSection />
      <TitleSection
        btnName="Explore More"
        titleSection="Navigate through our Pages"
        description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />
      <PagesSection />
    </div>
  );
};

export default Home;
