import React from "react";
import Navbar from "../components/inquire/Navbar";
import Hero from "../components/inquire/Hero";
import HeritageSection from "../components/inquire/HeritageSection";
import WhyInquire from "../components/inquire/WhyInquire";
import Cards from "../components/inquire/Cards";
import CampusTours from "../components/inquire/CampusTours";
import Process from "../components/inquire/Process";
import Slogan from "../components/inquire/Slogan";
import Learning from "../components/inquire/Learning";
import Campus from "../components/inquire/Campus";
import Cta from "../components/inquire/Cta";
import InfoSection from "../components/inquire/InfoSection";
import TourSchedule from "../components/inquire/TourSchedule";

const Inquire = () => {
  return (
    <div>
      <Hero />
      <HeritageSection />
      <WhyInquire />
      <Cards />
      <CampusTours />
      <Process />
      <TourSchedule />

      <Slogan />
      <InfoSection />
      <Learning></Learning>
      <Campus />
      <Cta />
    </div>
  );
};

export default Inquire;
