import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const universities = [
  "University of Houston",
  "Texas A & M University",
  "University of Texas at Austin",
];

const SliderUni = () => {
  const [duration, setDuration] = useState(8); // default for desktop

  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) {
        setDuration(1); // 🔥 very fast on mobile
      } else if (window.innerWidth < 1024) {
        setDuration(6); // medium speed on tablet
      } else {
        setDuration(8); // normal on desktop
      }
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <div className="overflow-hidden py-4 md:py-8 lg:py-4 font-serif">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: duration,
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
