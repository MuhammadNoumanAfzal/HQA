import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SlideRight } from "../../../utility/animation.js";

const pillars = [
  {
    id: 1,
    title: "Community Builders",
    text: `Deepening faith through Quran memorization (Hifz), Salah, and character-building.
Quranic Foundation: “Allah elevates those who believe and those who are given knowledge.” (Quran 58:11)`,
    img: "/pillars.png",
  },
  {
    id: 2,
    title: "Knowledgeable Scholars",
    text: `Developing scholars who embody Islamic knowledge and modern sciences to guide communities with wisdom and compassion.`,
    img: "/pillars.png",
  },
  {
    id: 3,
    title: "Committed Balanced Muslims",
    text: `Creating Muslims who balance spirituality, character, and worldly excellence while serving humanity with integrity.`,
    img: "/pillars.png",
  },
];

const CorePillars = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.4],
    ["0%", "0%", "-100%", "-100%"]
  );
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.4],
    [1, 1, 1, 0]
  );

  const y2 = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55, 0.7],
    ["100%", "0%", "0%", "-100%"]
  );
  const opacity2 = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55, 0.7],
    [0, 1, 1, 0]
  );

  const y3 = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.85, 1],
    ["100%", "0%", "0%", "0%"]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0.65, 0.75, 0.95, 1],
    [0, 1, 1, 1]
  );

  const dot1Color = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["#CF3528", "#CF3528"]
  );
  const dot2Color = useTransform(
    scrollYProgress,
    [0.35, 0.7],
    ["#fff", "#CF3528"]
  );
  const dot3Color = useTransform(
    scrollYProgress,
    [0.65, 1],
    ["#fff", "#CF3528"]
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[400vh] bg-white font-serif"
    >
      <div className="sticky top-0 h-screen flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 md:gap-12 items-center w-full">
          {/* Left Side */}
          <div className="space-y-6">
            <div>
              <motion.h2
                variants={SlideRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="text-2xl sm:text-3xl md:text-6xl pt-12 text-gray-800 mb-4 mt-3"
              >
                <span className="text-[#CF3528]">Core</span>{" "}
                <span className="text-[#00285E] italic">Pillars</span>
              </motion.h2>
              <motion.p
                variants={SlideRight(0.8)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8"
              >
                At Houston Quran Academy, our mission is more than education. We
                shape balanced Muslims, cultivate scholars, and empower
                compassionate leaders. These core pillars ignite purpose, and
                elevate minds.
              </motion.p>
            </div>

            {/* Timeline */}
            <div className="relative flex flex-col space-y-6 pl-6 border-l-2 border-[#CF3528]">
              {[
                { label: "Community Builders", color: dot1Color },
                { label: "Knowledgeable Scholars", color: dot2Color },
                { label: "Committed Balanced Muslims", color: dot3Color },
              ].map((dot, i) => (
                <div key={i} className="relative flex items-center">
                  <motion.div
                    style={{ backgroundColor: dot.color }}
                    className={`absolute left-0 w-4 h-4 rounded-full border border-[#CF3528] ${
                      i === 0
                        ? "-translate-x-8 -translate-y-4"
                        : i === 1
                        ? "-translate-x-8 -translate-y-1/2 top-1/2"
                        : "-translate-x-8 translate-y-2 mt-6"
                    }`}
                  />
                  <p className="text-gray-800 font-medium text-sm md:text-base">
                    {dot.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 sm:pt-6">
              <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded text-sm md:text-base font-medium transition-colors cursor-pointer">
                Start Your Journey
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] xl:h-[80vh] overflow-hidden rounded-lg">
            {[
              { styleY: y1, opacity: opacity1 },
              { styleY: y2, opacity: opacity2 },
              { styleY: y3, opacity: opacity3 },
            ].map((motionProps, i) => (
              <motion.div
                key={i}
                style={{ y: motionProps.styleY, opacity: motionProps.opacity }}
                transition={{
                  duration: 1.2 + i * 0.6,
                  ease: "easeOut",
                  delay: 0.1 + i * 0.2,
                }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  <img
                    src={pillars[i].img}
                    alt={pillars[i].title}
                    className="w-[95%] h-[90%] sm:h-[70%] object-cover rounded-4xl"
                  />
                  <div className="bg-[#00285EE5] pb-16 text-white p-2 md:p-6 rounded-xl -mt-16 sm:-mt-16 w-[95%] max-w-[400px]">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl mb-2">
                      {pillars[i].title}
                    </h3>
                    <p className="text-sm leading-relaxed">{pillars[i].text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePillars;
