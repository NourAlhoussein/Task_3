import React from "react";
import ContactHome from "../components/ContactHome/ContactHome";
import TitleSection from "../components/TitleSection/TitleSection";
import ContactForm from "../components/ContactForm/ContactForm";
import contacts from "../Data/Contacts"
function Contact() {
  return (
    <div className="contactStyle">
      <ContactHome
        btnName="Contact Us"
        title="Feel Free To Connect With Us"
        description="We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"
        email="hello@littlelearners.com"
        number="+91 91813 23 2309"
        location="Somewhere in the World"
        time="Office Hours - 9am - 6 pm"
      />
      <TitleSection
        btnName="Contact Form"
        titleSection="Student Information"
        description="If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs"
      />
      <ContactForm contacts={contacts} />
    </div>
  );
}

export default Contact;
