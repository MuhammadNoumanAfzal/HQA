import React from "react";
import Hero from "../components/faculty/Hero";
import Staff from "../components/faculty/Staff";
import Slogan from "../components/faculty/Slogan";
import Why from "../components/faculty/why";
import Campus from "../components/faculty/Campus";

import Cta from "../components/faculty/Cta";
import StaffSection from "../components/faculty/StaffSection";
import Family from "../components/faculty/Family";
import FamilyMobile from "../components/faculty/FamilyMobile";
import MobileCampus from "../components/faculty/MobileCampus";

const Faculty = () => {
  return (
    <div>
      <Hero />
      <Staff />
      {/* Desktop version */}
      <div className="hidden md:block">
        <Family />
      </div>
      {/* Mobile version */}
      <div className="block md:hidden">
        <FamilyMobile />
      </div>
      <StaffSection />
      {/* Desktop version */}
      <div className="hidden md:block">
        <Campus />
      </div>
      {/* Mobile version */}
      <div className="block md:hidden">
        <MobileCampus />
      </div>{" "}
      <Slogan />
      <Why />
      <Cta />
    </div>
  );
};

export default Faculty;
