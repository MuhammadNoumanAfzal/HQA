import {
  SlideLeft,
  SlideRight,
  SlideButton,
  SlideUp,
} from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Trustes = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#FFFDF5]  pt-12  pb-3 px-10 flex flex-col items-center text-center font-serif"
    >
      {/* Title */}
      <motion.h2
        variants={SlideLeft(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[#CF3528] text-4xl sm:text-5xl font-serif italic mb-4"
      >
        <span className="text-[#00285E]"> Board of</span> Trustees{" "}
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-4xl mt-6 text-xl md:text-3xl italic leading-relaxed"
      >
        Strategic Visionaries | Stewards of the Mission
      </motion.p>
      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-6xl mt-6 text-xl leading-relaxed"
      >
        Our Board is composed of esteemed professionals, educators, business
        experts, and community leaders.{" "}
        <strong>
          Each member brings a wealth of experience and a heart devoted to
          Islamic education.
        </strong>
      </motion.p>
      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-6xl mt-6 text-xl leading-relaxed"
      >
        They serve not only as decision-makers but as{" "}
        <strong>guardians of our mission</strong> — ensuring every strategic
        move aligns with our Islamic principles and the holistic development of
        our students.
      </motion.p>
    </section>
  );
};

export default Trustes;
