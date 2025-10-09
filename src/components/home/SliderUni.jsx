import React from "react";
import { motion } from "framer-motion";

const universities = [
  "University of Houston",
  "Texas A & M university",
  "University of Texas at Austin",
];

const SliderUni = () => {
  return (
    <div className="overflow-hidden py-4 ">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 6,
          ease: "linear",
        }}
      >
        {[...universities, ...universities, ...universities].map(
          (uni, index) => (
            <span
              key={index}
              className="text-2xl font-semibold text-[#0F2C56] italic"
            >
              {uni}
            </span>
          )
        )}
      </motion.div>
    </div>
  );
};

export default SliderUni;
