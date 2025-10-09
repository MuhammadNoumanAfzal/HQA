import React from "react";
import Hero from "../components/alumni/Hero";
import HeritageSection from "../components/alumni/HeritageSection";
import Message from "../components/alumni/Message";
import Mission from "../components/alumni/Mission";
import StaffSection from "../components/alumni/StaffSection";
import VoicesSection from "../components/alumni/VoicesSection";
import Gallery from "../components/alumni/Gallery";
import Slogan from "../components/alumni/Slogan";
import Cta from "../components/alumni/Cta";
import WhereAreTheyNow from "../components/alumni/WhereAreTheyNow";
import Connected from "../components/alumni/Connected";

const Alumni = () => {
  return (
    <div>
      <Hero />
      <HeritageSection />
      <Message />
      <Mission />
      <StaffSection />
      <VoicesSection />
      <Connected />
      <Gallery />
      <Slogan />
      <WhereAreTheyNow />
      <Cta />
    </div>
  );
};

export default Alumni;
