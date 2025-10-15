import React from "react";
import { SlideLeft, SlideUp, SlideRight } from "../../../utility/animation";
import { motion } from "framer-motion";

const Aid = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 px-10 flex items-center justify-center text-center font-serif"
      style={{ backgroundImage: "url('/admission/aid.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#012974]/80"></div>

      {/* Content */}
      <div className="relative w-full max-w-4xl flex flex-col items-center justify-center">
        {/* Title */}
        <motion.h1
          variants={SlideUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic  leading-snug mb-6"
        >
          Tuition & Financial Aid
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={SlideRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white text-xl sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 px-2"
        >
          We are committed to making Islamic education accessible. Need-based
          scholarships and sibling discounts are available.
        </motion.p>
        <motion.p
          variants={SlideLeft(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white text-xl sm:text-base md:text-lg leading-relaxed mb-8 px-2"
        >
          Visit our Tuition & Aid page for details.
        </motion.p>

        {/* Button */}
        <motion.button
          variants={SlideRight(1.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[#CF3528] hover:bg-[#012974] hover:text-white rounded-md  bg-white font-semibold px-6 sm:px-8 py-3  shadow-md transition-all duration-300 text-sm sm:text-base md:text-lg cursor-pointer"
        >
          Tuition & Aid
        </motion.button>
      </div>
    </section>
  );
};

export default Aid;
