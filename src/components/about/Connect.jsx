import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Connect = ({
  primaryCta = { label: "Discover Our Legacy", href: "#" },
  secondaryCta = { label: "Meet Our Visionaries", href: "#" },
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const titleText = "Connect with Our Story";
  const subtitleText = "Be Part of the HQA Journey";
  const titleLetters = titleText.split("");

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Letter animation
  useEffect(() => {
    if (isInView && textIndex < titleLetters.length) {
      const timer = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [isInView, textIndex, titleLetters.length]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row justify-between items-center w-full font-serif min-h-screen overflow-hidden py-12 px-10"
    >
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        {/* Animated Heading */}
        <h1 className="text-[#CF3528] text-3xl sm:text-4xl lg:text-5xl italic">
          {titleLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={
                isInView ? { opacity: i <= textIndex ? 1 : 0 } : { opacity: 0 }
              }
              transition={{ duration: 0.15 }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.h3
          className="italic text-[#252626] text-xl sm:text-2xl"
          initial={{ opacity: 0 }}
          animate={
            isInView && textIndex >= titleLetters.length
              ? { opacity: 1 }
              : { opacity: 0 }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subtitleText}
        </motion.h3>

        {/* Paragraph */}
        <motion.p
          className="text-gray-800 leading-relaxed text-sm sm:text-base lg:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView && textIndex >= titleLetters.length
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We invite you to be part of the HQA journey. Whether you’re a
          prospective parent, future student, or proud alumnus—your chapter in
          our story is just beginning.
        </motion.p>

        {/* Buttons - stacked on mobile */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 pt-4 justify-center md:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView && textIndex >= titleLetters.length
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href={primaryCta.href}
            className="bg-[#CF3528] px-5 py-2.5 text-sm text-white shadow hover:bg-[#cf4040] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            className="border border-gray-300 bg-transparent px-5 py-2.5 text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            {secondaryCta.label}
          </a>
        </motion.div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 relative flex justify-center">
        {/* Main Image */}
        <motion.img
          src="/about/bg.jpg"
          alt="Graduation caps"
          className="h-64 sm:h-80 lg:h-[28rem] w-full object-cover rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Background Shape - visible on mobile */}
        <motion.div
          className="bg-[#eb7f75] w-[160px] sm:w-[200px] h-[100px] sm:h-[150px] rounded-4xl absolute -right-4 sm:-right-8 -bottom-6 sm:-bottom-8 z-[-1]"
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        />

        {/* Circle Decoration - visible on mobile */}
        <motion.div
          className="flex bg-white w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] absolute -left-4 -bottom-4 justify-center items-center rounded-tr-[100px]"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="bg-[#dfd7d7] h-[70px] sm:h-[100px] w-[70px] sm:w-[100px] rounded-full flex justify-center items-center">
            <motion.div
              className="bg-blue-600 h-5 sm:h-7 w-5 sm:w-7 rounded-full"
              animate={isInView ? { scale: [1, 1.2, 1] } : { scale: 1 }}
              transition={{ repeat: isInView ? Infinity : 0, duration: 2 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
