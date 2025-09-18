import React from "react";
import Navbar from "../components/tution/Navbar";

import Hero from "../components/tution/Hero";
import HeritageSection from "../components/tution/HeritageSection";
import Table1 from "../components/tution/Table1";
import Table2 from "./Table2";
import Table3 from "../components/tution/Table3";
import Learning from "../components/tution/Learning";
import Notes from "../components/tution/Notes";

const Tution = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeritageSection />
      <Table1 />
      <Table2 />
      <Table3 />
      <Learning />
      <Notes />
    </div>
  );
};

export default Tution;
