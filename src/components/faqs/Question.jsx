import React from "react";
import { FaPhoneAlt, FaBuilding } from "react-icons/fa";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const Question = () => {
  return (
    <section className="py-12 px-10 font-serif bg-[#FFFDF5] text-center">
      {/* Heading */}
      <motion.h2
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl italic text-[#00285E] mb-6"
      >
        Still Have <span className="text-[#CF3528]">Questions?</span>
      </motion.h2>
      <motion.p
        variants={SlideRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gray-600 mb-10 text-xl"
      >
        We’re here to help!
      </motion.p>

      {/* Cards Container */}
      <motion.div
        variants={SlideUp(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto"
      >
        {/* Card 1 */}
        <div className="rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center text-center">
          <div className="bg-[#00285E] text-white p-4 rounded-full mb-4">
            <FaPhoneAlt size={24} />
          </div>
          <p className="text-gray-800 text-lg">
            Prefer to speak directly? Call us at <br />
            <span className="text-[#CF3528] font-semibold">281-717-4622</span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl border border-gray-200 shadow-lg p-6 flex flex-col items-center text-center">
          <div className="bg-[#00285E] text-white p-4 rounded-full mb-4">
            <FaBuilding size={24} />
          </div>
          <p className="text-gray-800 text-lg">
            Want to visit? Schedule a tour <br />
            <span className="text-[#CF3528] font-semibold cursor-pointer hover:underline">
              Here
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Question;
