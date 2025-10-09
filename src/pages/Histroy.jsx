import React from "react";
import Hero from "../components/histroy/Hero";
import Message from "../components/histroy/Message";
import Tilted from "../components/histroy/Tilted";
import Foundation from "../components/histroy/Foundation";
import Cta from "../components/histroy/Cta";
import TiltedMobile from "../components/histroy/TiltedMobile";
import Milestone from "../components/histroy/Milestone";

const Histroy = () => {
  return (
    <div>
      <Hero />
      <Message />
      <Foundation />
      <Milestone />

      {/* Desktop version */}
      <div className="hidden md:block">
        <Tilted />
      </div>

      {/* Mobile version */}
      <div className="block md:hidden">
        <TiltedMobile />
      </div>
      <Cta />
    </div>
  );
};

export default Histroy;
