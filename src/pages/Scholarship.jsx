import React from "react";
import Navbar from "../components/scholarship/Navbar";
import Hero from "../components/scholarship/Hero";
import ScholarshipSection from "../components/scholarship/ScholarshipSection";
import RashidScholarship from "../components/scholarship/RashidScholarship";
import ScholarshipCriteria from "../components/scholarship/ScholarshipCriteria";
import ApplicantQualifications from "../components/scholarship/ApplicantQualifications";
import LearningInput from "../components/scholarship/LearningInput";
import Slogan from "../components/scholarship/Slogan";
import Notes from "../components/scholarship/Notes";

const Scholarship = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScholarshipSection />
      <RashidScholarship />
      <ScholarshipCriteria />
      <ApplicantQualifications />
      <LearningInput />
      <Slogan />
      <Notes />
    </div>
  );
};

export default Scholarship;
