import {
  SlideLeft,
  SlideRight,
  SlideButton,
  SlideUp,
} from "../../../utility/animation";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Balance = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#FFFDF5]  pt-12 md:mt-12  pb-3 px-10 flex flex-col items-center text-center font-serif"
    >
      {/* Title */}
      <motion.h2
        variants={SlideLeft(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[#00285E] text-4xl sm:text-5xl font-serif italic mb-4"
      >
        <span className="text-red-700">Balance & Commitment</span>
      </motion.h2>

      <motion.p
        variants={SlideRight(1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-gray-800 max-w-4xl mt-6 text-sm sm:text-base leading-relaxe mb-10"
      >
        Participation in sports is encouraged alongside a strong academic and
        spiritual foundation. We emphasize time management, healthy competition,
        and prayer-conscious scheduling, ensuring students thrive in every area
        of life.
      </motion.p>

      <motion.p
        variants={SlideRight(1.2)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-[#00285E] max-w-4xl mt-6 text-2xl italic leading-relaxed"
      >
        "A strong believer is better and more beloved to Allah than a weak
        believer..." – Hadith (Muslim)
      </motion.p>
    </section>
  );
};

export default Balance;
