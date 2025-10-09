import React from "react";
import Hero from "../components/career/Hero";
import WelcomeMsg from "../components/career/WelcomeMsg";
import WhyChooseUs from "../components/career/WhyChooseUs";
import WhyChooseUsMobile from "../components/career/WhyChooseUsMobile";

import Leadership from "../components/career/Leadership";
import Slogan from "../components/career/Slogan";
import Cta from "../components/career/Cta";
import Question from "../components/career/Question";
import JobBoard from "../components/career/JobBoard";

const Career = () => {
  return (
    <div>
      <Hero />
      <WelcomeMsg />
      <JobBoard />
      {/* Show desktop version */}
      <div className="hidden md:block">
        <WhyChooseUs />
      </div>

      {/* Show mobile version  */}
      <div className="block md:hidden">
        <WhyChooseUsMobile />
      </div>
      <Leadership />
      <Question />
      <Slogan />
      <Cta />
    </div>
  );
};

export default Career;
