import React from "react";
import Hero from "../components/studentlife/Hero";
import Life from "../components/studentlife/Life";
import Message from "../components/studentlife/Message";
import Slider from "../components/studentlife/Slider";
import Events from "../components/studentlife/Events";
import Cta from "../components/studentlife/Cta";
import Community from "../components/studentlife/Community";
import Programs from "../components/studentlife/Programs";

const StudentLife = () => {
  return (
    <div>
      <Hero />
      <Life />
      <Message />
      <Slider />
      <Programs />
      <Events />
      <Community />
      <Cta />
    </div>
  );
};

export default StudentLife;
