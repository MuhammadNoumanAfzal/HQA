import { SlideUp } from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaPlay } from "react-icons/fa";

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col py-10 items-center font-serif overflow-hidden"
    >
      {/* Blue Background only on bottom half */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#00285E] -z-10"></div>

      {/* Heading */}
      <motion.div
        variants={SlideUp(0.6)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full text-center mb-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-5xl italic text-[#00285E] mb-4">
          Events & <span className="text-red-700"> Celebrations </span>
        </h2>
        <p className="text-xl sm:text-2xl italic text-gray-800 max-w-6xl mx-auto">
          Throughout the year, students enjoy a variety of fun, faith-based
          events and vibrant celebrations that foster a deep sense of community:
        </p>
      </motion.div>

      {/* Full-width Image */}
      <div className="relative w-full flex justify-center">
        <img
          src="/middel/uniform.jpg"
          alt="HQA Uniform"
          className="w-[90%] object-cover h-auto rounded-lg"
        />

        {/* Overlay div on bottom of image */}
        <div
          className="absolute bottom-0 md:bottom-3 left-1/2 transform -translate-x-1/2 
                        max-w-4xl w-[90%] bg-[#00285E] text-white 
                        py-2 px-3 md:py-4 md:px-6 rounded-lg 
                        flex items-center justify-between text-sm md:text-base"
        >
          {/* Left Icon & Line */}
          <div className="flex items-center gap-1 md:gap-2 h-full">
            <FaPlay className="text-white md:rotate-180 text-xs md:text-base" />
            <div className="w-[1px] bg-white h-6 md:h-12"></div>
          </div>

          {/* Center Text */}
          <p className="text-center text-sm md:text-xl flex-1 px-2">
            Quran Competitions: Showcasing memorization and recitation skills,
            inspiring excellence.
          </p>

          {/* Right Line & Icon */}
          <div className="flex items-center gap-1 md:gap-2 h-full">
            <div className="w-[1px] bg-white h-6 md:h-12"></div>
            <FaPlay className="text-white md:rotate-0 text-xs md:text-base" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
