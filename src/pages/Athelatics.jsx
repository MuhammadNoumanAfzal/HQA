import React from "react";
import Hero from "../components/athelatics/Hero";
import Hqa from "../components/athelatics/Hqa";
import Pic from "../components/athelatics/Pic";
import Athletics from "../components/athelatics/Athletics";
import PracticeGameSchedules from "../components/athelatics/PracticeGameSchedules";
import Gallery from "../components/athelatics/Gallery";
import Balance from "../components/athelatics/Balance";
import Slider from "../components/athelatics/Slider";

const Athelatics = () => {
  return (
    <div>
      <Hero />
      <Hqa />
      <Pic />
      <Athletics />
      <PracticeGameSchedules />
      <Slider />
      <Balance />
      <Gallery />
    </div>
  );
};

export default Athelatics;
