import {
  SlideLeft,
  SlideRight,
  SlideButton,
  SlideUp,
} from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Heritage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#FFFDF5] pb-[180px] py-12 px-10 flex flex-col items-center text-center font-serif"
    >
      {/* Divider with logo */}
      <motion.div
        variants={SlideUp(0.6)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative w-[95%] flex items-center justify-center mb-8"
      >
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <span className="relative bg-[#fdfbf7] px-4">
          <img
            src="/logo.png"
            alt="Heritage Logo"
            className="h-12 w-12 mx-auto"
          />
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2
        variants={SlideLeft(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 text-3xl sm:text-4xl font-serif italic mb-6"
      >
        Important Enrolment Notes
        <br />
        <span className="text-[#CF3528]">Houston Quran Academy</span>
      </motion.h2>

      {/* Description as bullet points */}
      <motion.div
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full max-w-2xl space-y-4 text-left"
      >
        <div className="flex items-start">
          <span className=" mr-3 mt-1">•</span>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            Enrolment is first-come, first-served. Prompt action at each step is
            crucial.
          </p>
        </div>

        <div className="flex items-start">
          <span className=" mr-3 mt-1">•</span>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
            For support or clarification, reach out to our Admissions Office at
            <span className="text-[#CF3528]"> skhalid@hquranacademy.org</span>
          </p>
        </div>

        <div className="flex items-start">
          <span className=" mr-3 mt-1">•</span>
          <p className="text-[#CF3528] text-sm sm:text-base leading-relaxed">
            Call us at: 281 717 4622.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Heritage;
