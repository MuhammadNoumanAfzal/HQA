import React from "react";
import Hero from "../components/clubs/Hero";
import WelcomeMsg from "../components/clubs/WelcomeMsg";
import Journey from "../components/clubs/Journey";
import Welcome from "../components/clubs/Welcome";
import Learning from "../components/clubs/Learning";

import CardSlider from "../components/clubs/CardSlider";

import Slogan from "../components/clubs/Slogan";
import Cta from "../components/clubs/Cta";
import JourneyMbl from "../components/clubs/JourneyMbl";

const Clubs = () => {
  return (
    <div>
      <Hero />
      <WelcomeMsg />
      <div className="hidden md:block">
        <Journey />
      </div>
      {/* Mobile version */}
      <div className="block md:hidden">
        <JourneyMbl />
      </div>{" "}
      <Welcome />
      <Learning />
      <CardSlider />
      <Slogan />
      <Cta />
    </div>
  );
};

export default Clubs;
