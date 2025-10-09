import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlideButton,
  SlideLeft,
  SlideRight,
  StaggerChildren,
} from "../../../utility/animation.js";

const ProfileCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slides = [
    {
      name: "Dana Almadi",
      class: "9th Grade Top Achiever",
      stats: [
        { value: "home/p1.gif", label: "Exemplary Honor Roll" },
        { value: "home/p2.gif", label: "Memorization" },
        { value: "home/p3.gif", label: "Spelling Bee Champion" },
        { value: "home/p4.gif", label: "Science Fair" },
      ],
      image: "home/profile.png",
      quote: "Excellence is the result of dedication and hard work",
    },
    {
      name: "Nour Ghoneim",
      class: "10th Grade Top Achiever",
      stats: [
        { value: "home/p1.gif", label: "Excellence Award" },
        { value: "home/hafiz.gif", label: "Hafiz" },
        { value: "home/p3.gif", label: "Meaning" },
        { value: "home/p4.gif", label: "Science Fair" },
      ],
      image: "home/profile2.png",
      quote: "“Excellence is the result of dedication and hard work”",
    },
    {
      name: "Menna Gomaa",
      class: "9th Grade Top Achiever",
      stats: [
        { value: "home/p1.gif", label: "Honor Roll" },
        { value: "home/p2.gif", label: "Memorization" },
        { value: "home/tajweed.gif", label: "Tajweed" },
        { value: "home/p4.gif", label: "Volunteering" },
      ],
      image: "home/profile1.png",
      quote: "“Success is built on the foundation of hard work and faith”",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Swipe handling
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipe = 50;
    if (distance > minSwipe) nextSlide();
    else if (distance < -minSwipe) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const slide = slides[currentSlide];

  return (
    <div
      className="p-4 sm:p-12 font-serif relative z-20 overflow-x-hidden overflow-y-hidden md:overflow-y-visible"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="px-2 sm:px-12 py-4 sm:py-6 border-b border-blue-200 text-center">
          <motion.h1
            variants={SlideLeft(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl text-[#00285E]"
          >
            Beyond Struggles,
            <span className="text-red-700 italic"> Beyond Stars!</span>
          </motion.h1>
          <motion.p
            variants={SlideRight(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="text-sm sm:text-xl text-gray-800 mt-12 mb-18"
          >
            We proudly celebrate our top achievers,
            <br />
            whose dedication and excellence inspire us all
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="bg-[#BCDDFC] rounded-b-xl grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] relative pb-42 md:pb-0">
          {/* Column 1: Image */}
          <motion.div
            className="order-2 md:order-1 flex justify-start mt-6 md:mt-0 relative"
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.name}
                className="absolute -bottom-54 mb-4 md:-top-30 h-64 md:h-[46rem] w-auto md:-left-16 object-contain select-none pointer-events-none z-0"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </motion.div>

          {/* Column 2: Profile Info */}
          <motion.div
            className="order-1 md:order-2 p-4 sm:p-6 flex flex-col justify-center z-10 bg-[#BCDDFC] relative"
            variants={SlideLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.name}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-4">
                  <p className="text-base sm:text-lg text-red-700 mb-2">
                    {slide.class}
                  </p>
                  <h2 className="text-3xl font-semibold text-gray-800 ">
                    {slide.name}
                  </h2>
                </div>

                {/* Stats */}
                <motion.div
                  className="relative w-full max-w-md mx-auto"
                  variants={StaggerChildren(0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="grid grid-cols-2 grid-rows-2 text-center">
                    {slide.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        className="p-4 flex flex-col items-center justify-start min-h-[140px]"
                        variants={SlideLeft(0.1 * idx)}
                      >
                        <div className="w-20 h-20 flex items-center justify-center">
                          <img
                            src={stat.value}
                            alt={stat.label}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <p className="mt-2 text-sm sm:text-base text-gray-800 leading-tight text-center break-words line-clamp-2">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 h-64 w-px bg-white"></div>
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-white"></div>
                </motion.div>

                {/* Quote */}
                <motion.p
                  className="text-center italic text-xl mb-4"
                  variants={SlideLeft(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                >
                  “{slide.quote}”
                </motion.p>

                {/* Button + Mobile Arrows */}
                <div className="text-center">
                  <motion.button
                    variants={SlideButton(0.6)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-black px-6 sm:px-8 border border-white py-2 sm:py-3 text-base font-medium transition-colors rounded-lg"
                  >
                    Meet our Community
                  </motion.button>
                  <div className="flex flex-col items-end gap-4 mt-4 md:hidden">
                    <button
                      onClick={prevSlide}
                      className="bg-red-700 border-white text-white p-2 rounded-full hover:bg-red-800 transition-colors"
                    >
                      <FaArrowRight className="h-4 w-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="border border-red-700 text-red-700 p-2 rounded-full hover:bg-red-100 transition-colors"
                    >
                      <FaArrowLeft className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Desktop Arrows */}
          <div className="absolute top-4 right-4 flex flex-row md:flex-col gap-2 z-10">
            <button
              onClick={prevSlide}
              className="bg-red-700 border-white text-white p-2 sm:p-3 rounded-full hover:bg-red-800 transition-colors"
            >
              <FaArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="border border-red-700 text-red-700 p-2 sm:p-3 rounded-full hover:bg-red-100 transition-colors"
            >
              <FaArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-32 md:h-0"></div>
    </div>
  );
};

export default ProfileCard;
