import React from "react";
import Navbar from "../components/about/Navbar";
import Hero from "../components/about/Hero";
import Welcome from "../components/about/Welcome";
import WhoWeAre from "../components/about/WhoWeAre";
import HeritageSection from "../components/about/HeritageSection";
import Ethos from "../components/about/Ethos";
import BalanceSection from "../components/about/BalanceSection";
import Vision from "../components/about/Vision";
import StudentGrowth from "../components/about/StudentGrowth";
import Future from "../components/about/Future";
import Connect from "../components/about/Connect";
import Footer from "../components/home/Footer";

const About = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <WhoWeAre />
      <HeritageSection />
      <Ethos />
      <BalanceSection />
      <Vision />
      <StudentGrowth />
      <Future />
      <Connect />
    </div>
  );
};

export default About;
