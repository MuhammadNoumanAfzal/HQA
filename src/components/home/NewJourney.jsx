import React from "react";
import { FaPlay } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import { SlideUp, SlideLeft, SlideRight } from "../../../utility/animation.js";

const NewJourney = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="py-12 sm:py-16 bg-[#D8EDFF] text-gray-900 font-serif overflow-hidden overflow-x-hidden">
      <div className="px-4 sm:px-2 lg:px-8 text-center">
        {/* Heading with slide-right animation */}
        <motion.h2
          className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 leading-snug"
          variants={SlideRight(0.2)}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Beyond Possibilities,{" "}
          <span className="italic text-gray-800">A New Journey Begins!</span>
        </motion.h2>

        {/* Subheading with slide-left animation */}
        <motion.p
          className="max-w-3xl mx-auto text-gray-800 mb-8 sm:mb-10 text-xl sm:text-base md:text-lg leading-relaxed px-2 sm:px-0"
          variants={SlideLeft(0.4)}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          “ We are thrilled to announce the expansion of HQA with a new campus
          in Richmond! This milestone reflects our commitment to excellence and
          growth, bringing even more opportunities for our students and
          community. ”
        </motion.p>

        {/* Video with Play Button */}
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.25),0_-8px_20px_rgba(0,0,0,0.15)]
 mb-8 sm:mb-10 w-full"
          initial={
            reduceMotion
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.95 }
          }
          whileInView={{ opacity: 1, scale: 1 }}
          transition={reduceMotion ? {} : { duration: 0.7, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <video
            src="/bgVideo2.mp4"
            className="w-full h-56 min-[480px]:h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[550px] object-cover"
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          className="bg-white shadow-md rounded-lg px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full"
          variants={SlideUp(0.8)}
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xl sm:text-lg md:text-xl lg:text-2xl font-medium text-[#0B49BD] text-center sm:text-left">
            Make a difference with your gift.
          </p>
          <motion.button
            type="button"
            className="bg-[#00285E] text-white px-5 sm:px-6 py-2 rounded-lg font-medium hover:bg-red-700 text-xl transition w-full sm:w-auto"
            whileHover={reduceMotion ? undefined : { scale: 1.05 }}
            whileTap={reduceMotion ? undefined : { scale: 0.95 }}
          >
            Donate Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewJourney;
