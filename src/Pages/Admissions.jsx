import React from "react";
import AboutHome from "../components/AboutHome/AboutHome";
import TitleSection from "../components/TitleSection/TitleSection";
import AdmissionsSection from "../components/AdmissionsSection/AdmissionsSection";
import FeaturesTableSection from "../components/FeaturesTableSection/FeaturesTableSection"
function Admissions() {
  return (
    <div className="AdmissionsStyle">
      <AboutHome
        btnName="Admission"
        title="Join Our Family of Young Learners"
        description="At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"
      />
      <TitleSection
        btnName="Process"
        titleSection="Admission Process"
        description="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school"
      />
      <AdmissionsSection />
      <TitleSection
        btnName="Our Features"
        titleSection="Fee Structure"
        description="Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen."
      />
      <FeaturesTableSection />
    </div>
  );
}

export default Admissions;
