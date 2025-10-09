import React from "react";
import Hero from "../components/academics/Hero";
import Welcome from "../components/academics/Welcome";
import Next from "../components/academics/Next";
import Cta from "../components/academics/Cta";
import Learning from "../components/academics/Learning";
import Slogan from "../components/academics/Slogan";
import SignatureCenters from "../components/academics/SignatureCenters";
import Profile from "../components/academics/Profile";
import Hours from "../components/academics/Hours";
import CardSlider from "../components/academics/CardSlider";
import Foundation from "../components/academics/Foundation";
import FoundationMobile from "../components/academics/FoundationMobile";
import School from "../components/academics/Schools";
import Growth from "../components/academics/Growth";

const Academics = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Hours />
      <School />

      {/* Desktop version */}
      <div className="hidden md:block">
        <Foundation />
      </div>

      {/* Mobile version */}
      <div className="block md:hidden">
        <FoundationMobile />
      </div>
      <Growth />
      <Profile />
      <SignatureCenters />
      <CardSlider />

      <Slogan />
      <Learning />
      <Next />
      <Cta />
    </div>
  );
};

export default Academics;
