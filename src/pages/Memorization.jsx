import React from "react";
import Hero from "../components/memorization/Hero";
import Message from "../components/memorization/Message";
import Success from "../components/memorization/Success";
import Leaders from "../components/memorization/Leaders";
import StartSection from "../components/memorization/StartSection";
import Cta from "../components/memorization/Cta";
import Slider from "../components/memorization/Slider";

const Memorization = () => {
  return (
    <div>
      <Hero />
      <Message />
      <Slider />
      <Success />
      <StartSection />

      <Leaders />
      <Cta />
    </div>
  );
};

export default Memorization;
