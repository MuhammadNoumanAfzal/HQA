import React from "react";
import Navbar from "../components/enrollement/Navbar";
import Hero from "../components/enrollement/Hero";
import Heritage from "../components/enrollement/HeritageSection";
import Table3 from "../components/enrollement/Table3";
import AdmissionDates from "../components/enrollement/AdmissionDates";
import Notes from "../components/enrollement/Notes";
import Slogan from "../components/enrollement/Slogan";
import ReEnrollment from "../components/enrollement/ReEnrollment";
import Learning from "../components/enrollement/Learning";
import Cta from "../components/enrollement/Cta";
import Steps from "../components/enrollement/Steps";

const Enrollement = () => {
  return (
    <div>
      <Hero />
      <Heritage />
      <Table3 />
      <AdmissionDates />
      <Steps />
      <Notes />
      <Slogan />
      <ReEnrollment />
      <Learning />
      <Cta />
    </div>
  );
};

export default Enrollement;
