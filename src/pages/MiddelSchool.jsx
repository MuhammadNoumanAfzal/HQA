import React from "react";

import Hero from "../components/middelschool/Hero";
import Welcome from "../components/middelschool/Welcome";
import Slogan from "../components/middelschool/Slogan";
import Learning from "../components/middelschool/Learning";
import Cta from "../components/middelschool/Cta";
import Subject from "../components/middelschool/Subject";
import Slogan2 from "../components/middelschool/Slogan2";
import Slider from "../components/middelschool/Slider";
import More from "../components/middelschool/More";
import Patnership from "../components/middelschool/patnership";
import CurriculumOverview from "../components/preschool/CurriculumOverview";
import Uniform from "../components/middelschool/Uniform";
import UniformImportance from "../components/middelschool/UniformImportance";
import StateNationalAssessments from "../components/middelschool/StateNationalAssessments";
import ITBSSection from "../components/middelschool/ITBSSection";
import CurriculumOverviewMbl from "../components/preschool/CurriculumOverviewMbl";

const MiddelSchool = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Slogan />
      <Subject />
      <StateNationalAssessments />
      <ITBSSection />
      <More />
      {/* Show desktop version  */}
      <div className="hidden md:block">
        <CurriculumOverview />
      </div>
      {/* Show mobile version */}
      <div className="block md:hidden">
        <CurriculumOverviewMbl />
      </div>{" "}
      <Learning />
      <Uniform />
      <Patnership />
      <UniformImportance />
      <Slogan2 />
      <Slider />
      <Cta />
    </div>
  );
};

export default MiddelSchool;
