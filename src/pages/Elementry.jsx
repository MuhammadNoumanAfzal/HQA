import React from "react";
import Hero from "../components/elementary/Hero";
import Welcome from "../components/elementary/Welcome";

import Experience from "../components/elementary/Experience";
import CurriculumOverview from "../components/preschool/CurriculumOverview";
import CurriculumOverviewMbl from "../components/preschool/CurriculumOverviewMbl";
import UniformImportance from "../components/elementary/UniformImportance";
import Learning from "../components/elementary/Learning";

import Slogan2 from "../components/elementary/Slogan2";
import Slider from "../components/elementary/Slider";
import Cta from "../components/elementary/Cta";
import Patnership from "../components/elementary/patnership";
import Uniform from "../components/elementary/Uniform";
import Tilted from "../components/elementary/Tilted";
import TiltedMobile from "../components/elementary/TiltedMobile";
import StudentLife from "../components/elementary/StudentLife";

const Elementry = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Experience />

      {/* Desktop version */}
      <div className="hidden md:block">
        <Tilted />
      </div>

      {/* Mobile version */}
      <div className="block md:hidden">
        <TiltedMobile />
      </div>
      <StudentLife />
      {/* Show desktop version  */}
      <div className="hidden md:block">
        <CurriculumOverview />
      </div>
      {/* Show mobile version b*/}
      <div className="block md:hidden">
        <CurriculumOverviewMbl />
      </div>
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

export default Elementry;
