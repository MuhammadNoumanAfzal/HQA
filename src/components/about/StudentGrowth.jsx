import React, { useEffect, useRef } from "react";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation.js";
import { motion, useInView } from "framer-motion";

// Counter component that animates numbers
const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value.replace("+", ""));
      if (start === end) return;

      let totalDuration = duration * 1000;
      let incrementTime = totalDuration / end;

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return (
    <span ref={ref}>
      {count}
      {value.includes("+") && "+"}
    </span>
  );
};

export default function StudentGrowth() {
  const stats = [
    { number: "500+", label: "Inspired Students", bg: "#E3F1FF" },
    { number: "50+", label: "Dedicated Staff", bg: "#FFFFFF" },
    { number: "15+", label: "Years Excellence", bg: "#E3F1FF" },
    { number: "100+", label: "Successful Graduates", bg: "#FFFFFF" },
    { number: "10+", label: "Programs Offered", bg: "#E3F1FF" },
  ];

  // Container to stagger card animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-white py-12 md:py-18 lg:py-30 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 font-serif overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 leading-snug px-2">
          <motion.span
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[#00285E] inline-block"
          >
            HQA Student Growth -
          </motion.span>{" "}
          <motion.span
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[#CF3528] inline-block"
          >
            Rising by the Numbers
          </motion.span>
        </h2>

        {/* Subheading */}
        <motion.p
          variants={SlideUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-[#252626] italic mb-6 px-2"
        >
          Building knowledge, faith, and excellence together
        </motion.p>

        {/* Paragraph */}
        <motion.p
          variants={SlideUp(0.9)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-12 px-2"
        >
          The success of HQA is not just measured in years—but by the lives
          we've shaped and the futures we've inspired. From our modest start to
          today's thriving campus, our growth reflects the trust of families and
          the strength of our mission.
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 justify-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={SlideUp(0.5)}
              className={`rounded-xl md:rounded-2xl shadow-sm md:shadow-md p-3 sm:p-4 md:p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 mx-auto 
                  w-full max-w-[180px] sm:max-w-[200px]
                  ${
                    index === stats.length - 1
                      ? "col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1"
                      : ""
                  }`}
              style={{ backgroundColor: item.bg }}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#00285E] mb-1 sm:mb-2 md:mb-3">
                <Counter value={item.number} duration={2} />
              </h3>
              <p className="text-gray-800 text-xs sm:text-sm md:text-base font-medium text-center leading-tight">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
