import {
  SlideLeft,
  SlideRight,
  SlideButton,
  SlideUp,
} from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hqa = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#FFFDF5]  pt-12  pb-3 px-10 flex flex-col items-center text-center font-serif"
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
        className="text-[#00285E] text-4xl sm:text-5xl font-serif italic mb-4"
      >
        Athletics <span className="text-red-700">at HQA</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-4xl mt-6 text-3xl italic leading-relaxed"
      >
        Building Strength, Teamwork & Character{" "}
      </motion.p>
      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-4xl mt-6 text-sm sm:text-base leading-relaxed"
      >
        At Houston Quran Academy, we believe that athletics are a vital part of
        developing well-rounded students. Our sports program is designed not
        only to promote physical health but also to nurture discipline,
        resilience, teamwork, and leadership—core values rooted in our Islamic
        identity.
      </motion.p>
    </section>
  );
};

export default Hqa;
