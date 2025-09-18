import React from "react";
import Navbar from "../components/inquire/Navbar";
import Hero from "../components/inquire/Hero";
import HeritageSection from "../components/inquire/HeritageSection";
import WhyInquire from "../components/inquire/WhyInquire";
import Cards from "../components/inquire/Cards";
import CampusTours from "../components/inquire/CampusTours";

const Inquire = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeritageSection />
      <WhyInquire />
      <Cards />
      <CampusTours />
    </div>
  );
};

export default Inquire;
