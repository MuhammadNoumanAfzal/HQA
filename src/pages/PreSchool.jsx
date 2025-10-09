import React from "react";
import Hero from "../components/preschool/Hero";
import Welcome from "../components/preschool/Welcome";
import CardSlider from "../components/preschool/CardSlider";
import Profile from "../components/preschool/Profile";
import Slogan from "../components/preschool/Slogan";
import Learning from "../components/preschool/Learning";
import Cta from "../components/preschool/Cta";
import Learn from "../components/preschool/Learn";
import FAQs from "../components/preschool/FAQs";
import CurriculumOverview from "../components/preschool/CurriculumOverview";
import CurriculumOverviewMbl from "../components/preschool/CurriculumOverviewMbl";

const PreSchool = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Profile />
      <Learn />
      {/* Show desktop version o */}
      <div className="hidden md:block">
        <CurriculumOverview />
      </div>
      {/* Show mobile version  */}
      <div className="block md:hidden">
        <CurriculumOverviewMbl />
      </div>{" "}
      <FAQs />
      <Slogan />
      <CardSlider />
      <Learning />
      <Cta />
    </div>
  );
};

export default PreSchool;
