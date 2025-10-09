import React from "react";
import Tilted from "../components/leadership/tilted";
import Hero from "../components/leadership/Hero";
import TiltedMbl from "../components/leadership/TiltedMbl";

import Slogan from "../components/leadership/Slogan";
import Cta from "../components/leadership/Cta";
import Rooted from "../components/leadership/Rooted";
import Trustes from "../components/leadership/Trustes";
import Administeration from "../components/leadership/Administeration";
import Action from "../components/leadership/Action";
import Philposphy from "../components/leadership/Philposphy";
import PhilposphyMbl from "../components/leadership/PhilposphyMbl";
import MobileAdministration from "../components/leadership/MobileAdministration";

const LeaderShip = () => {
  return (
    <div>
      <Hero />
      <Rooted />
      <Trustes />
      {/* Desktop version */}
      <div className="hidden md:block">
        <Tilted />
      </div>
      {/* Mobile version */}
      <div className="block md:hidden">
        <TiltedMbl />
      </div>{" "}
      <Slogan />
      {/* Desktop version */}
      <div className="hidden md:block">
        <Administeration />
      </div>
      {/* Mobile version */}
      <div className="block md:hidden">
        <MobileAdministration />
      </div>{" "}
      <Action />
      {/* Desktop version */}
      <div className="hidden md:block">
        <Philposphy />
      </div>
      {/* Mobile version */}
      <div className="block md:hidden">
        <PhilposphyMbl />
      </div>{" "}
      <Cta />
    </div>
  );
};

export default LeaderShip;
