import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlideButton,
  SlideLeft,
  SlideRight,
} from "../../../utility/animation.js";

const ProfileCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slides = [
    {
      name: "Sarah Clevenger",
      class: "Class of 2015",
      career: "20+",
      patent: 5,
      smallContent: 4,
      socialContent: 175,
      otherStat: "0.8",
      image: "/slider3.png",
    },
    {
      name: "John Doe",
      class: "Class of 2016",
      career: "15+",
      patent: 2,
      smallContent: 3,
      socialContent: 120,
      otherStat: "1.2",
      image: "/slider2.png",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Handle swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipe = 50; // minimum swipe distance

    if (distance > minSwipe) {
      // swipe left
      nextSlide();
    } else if (distance < -minSwipe) {
      // swipe right
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const slide = slides[currentSlide];

  return (
    <div
      className="p-4 sm:p-12 font-serif overflow-visible relative z-20"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-6xl mx-auto overflow-visible relative">
        {/* Header */}
        {/* Header */}
        <div className="px-2 sm:px-12 py-4 sm:py-6 border-b border-blue-200 text-center">
          <motion.h1
            variants={SlideLeft(0)} // slide from left
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl text-[#00285E]"
          >
            Beyond Struggles,
            <span className="text-red-700 italic"> Beyond Stars!</span>
          </motion.h1>

          <motion.p
            variants={SlideRight(0.1)} // slide from right
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="text-sm sm:text-base md:text-lg text-gray-800 mt-6"
          >
            We proudly celebrate our top achievers,
            <br />
            whose dedication and excellence inspire us all
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="bg-[#BCDDFC] rounded-b-xl overflow-visible grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] relative pb-32 md:pb-0">
          {/* Column 1: Image */}
          <div className="order-2 md:order-1 flex justify-start md:justify-start mt-6 md:mt-0 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.name}
                className="absolute -bottom-54 mb-4 md:-top-34 h-64 md:h-[44rem] w-auto md:-left-16 object-contain select-none pointer-events-none z-0"
                variants={SlideRight()}
                initial="hidden"
                animate="visible"
                exit="hidden"
              />
            </AnimatePresence>
          </div>

          {/* Column 2: Profile Info */}
          <div className="order-1 md:order-2 p-4 sm:p-6 flex flex-col justify-center z-10 bg-[#BCDDFC] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.name}
                variants={SlideLeft()}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="mb-4">
                  <p className="text-base sm:text-lg text-gray-800 mb-2">
                    {slide.class}
                  </p>
                  <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                    {slide.name}
                  </h2>
                </div>

                {/* Stats */}
                <div className="space-y-4 sm:space-y-6 mb-6">
                  {/* Row 1 */}
                  <div className="grid grid-cols-2 text-center border-b border-white divide-x divide-white">
                    <div>
                      <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                        {slide.career}
                      </p>
                      <p className="text-sm sm:text-base text-gray-800">
                        Career in Industry
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                        {slide.patent}
                      </p>
                      <p className="text-sm sm:text-base text-gray-800">
                        Patent
                      </p>
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-2 text-center border-b border-white divide-x divide-white">
                    <div>
                      <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                        {slide.smallContent}
                      </p>
                      <p className="text-sm sm:text-base text-gray-800">
                        Small Content
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                        {slide.socialContent}
                      </p>
                      <p className="text-sm sm:text-base text-gray-800">
                        Social Content
                      </p>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-2 text-center divide-x divide-white">
                    <div>
                      <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                        {slide.otherStat}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        Other Stat
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl sm:text-4xl font-bold text-gray-800">
                        {slide.otherStat}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600">
                        Other Stat
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button + Mobile Arrows */}
                <div className="text-center">
                  <motion.button
                    variants={SlideButton(0.2)}
                    initial="hidden"
                    animate="visible"
                    className="text-black px-6 sm:px-8 border border-white py-2 sm:py-3 text-base font-medium transition-colors rounded-lg"
                  >
                    Meet our Community
                  </motion.button>

                  {/* Mobile Arrows */}
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
          </div>

          {/* Desktop Arrows */}
          <div className="absolute top-4 right-4 flex flex-row md:flex-col gap-2 z-10 md:flex">
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
