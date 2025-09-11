import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { SlideUp, SlideLeft, SlideRight } from "../../../utility/animation.js";

const Results = () => {
  // Test result data
  const resultsData = [
    {
      id: 1,
      image: "/result1.png",
      alt: "IOWA",
      value: 98,
      suffix: "%",
      title: "IOWA",
      delay: 0.1,
    },
    {
      id: 2,
      image: "/result2.png",
      alt: "ACT",
      value: 28.1,
      suffix: "",
      title: "ACT",
      delay: 0.2,
    },
    {
      id: 3,
      image: "/result3.png",
      alt: "PSAT",
      value: 1400,
      suffix: "",
      title: "PSAT",
      delay: 0.3,
    },
    {
      id: 4,
      image: "/result4.png",
      alt: "SAT",
      value: 1375,
      suffix: "",
      title: "SAT",
      delay: 0.4,
    },
    {
      id: 5,
      image: "/result5.png",
      alt: "SAAR",
      value: 93,
      suffix: "%",
      title: "SAAR",
      delay: 0.5,
    },
  ];

  return (
    <section className="py-16 text-gray-900 font-serif">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h1
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl italic text-red-700 font-semibold mb-16 text-center"
        >
          Standardized Test Results
        </motion.h1>

        {/* Results Grid */}
        <div className="flex flex-wrap justify-center gap-8 cursor-pointer">
          {resultsData.map((result, index) => (
            <motion.div
              key={result.id}
              variants={SlideUp(0.3 + index * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="p-6 w-48 flex flex-col items-center hover:shadow-lg transition-all duration-300 rounded-lg bg-white border border-gray-100"
            >
              <motion.img
                src={result.image}
                alt={result.alt}
                className="w-20 h-20 object-contain mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <motion.p
                className="text-red-700 text-3xl font-bold italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <AnimatedNumber value={result.value} suffix={result.suffix} />
                <span className="text-gray-700 text-base font-medium">
                  {" "}
                  Avg
                </span>
              </motion.p>

              <motion.p
                className="text-lg font-semibold text-[#0B49BD] mt-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {result.title}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * AnimatedNumber
 * - Counts from 0 to `value` once when it scrolls into view.
 * - Fast by default (0.8s), smooth (spring), and memoized for performance.
 * - Preserves decimals (e.g., 28.1) and adds optional suffix.
 */
const AnimatedNumber = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" }); // start a bit before fully in view

  // Determine decimal precision once
  const decimals = useMemo(() => {
    const s = String(value);
    const idx = s.indexOf(".");
    return idx === -1 ? 0 : s.length - idx - 1;
  }, [value]);

  // Motion values
  const base = useMotionValue(0);
  const spring = useSpring(base, { stiffness: 120, damping: 20 }); // smooth & snappy
  const rounded = useTransform(spring, (latest) =>
    decimals > 0
      ? Number(latest).toFixed(decimals)
      : Math.round(latest).toString()
  );

  // Kick off the tween when in view (only once)
  useEffect(() => {
    if (!isInView) return;
    // animate quickly to target
    const target = Number(value) || 0;
    // Use a short duration tween into the spring for speed + smooth finish
    // Directly set the motion value over time
    let raf;
    const start = performance.now();
    const DURATION = 800; // ~0.8s "fast"
    const startVal = 0;

    const step = (t) => {
      const elapsed = t - start;
      const p = Math.min(1, elapsed / DURATION);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      base.set(startVal + (target - startVal) * eased);
      if (p < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, base]);

  return (
    <span ref={ref}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/** Using motion value as text via React state-less transform */}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.span>
    </span>
  );
};

export default Results;
