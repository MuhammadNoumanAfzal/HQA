import React from "react";
import { motion } from "framer-motion";
import { SlideRight } from "../../../utility/animation.js";

const PillarTextMbl = () => {
  return (
    <div className="px-10 ">
      <motion.h2
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-5xl sm:text-3xl md:text-6xl pt-12 text-gray-800 mb-4 mt-3 font-serif"
      >
        <span className="text-[#CF3528]">Core</span>{" "}
        <span className="text-[#00285E] italic">Pillars</span>
      </motion.h2>

      <motion.p
        variants={SlideRight(0.8)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-2xl text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8 font-serif text-gray-700"
      >
        At Houston Quran Academy, our mission is more than education. We shape
        balanced Muslims, cultivate scholars, and empower compassionate leaders.
        These core pillars ignite purpose, and elevate minds.
      </motion.p>
    </div>
  );
};

export default PillarTextMbl;
