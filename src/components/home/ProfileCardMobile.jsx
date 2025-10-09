import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProfileCardMobile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      image: "home/profilem.png",
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
      image: "home/profilem2.png",
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
      image: "home/profilem3.png",
      quote: "“Success is built on the foundation of hard work and faith”",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const slide = slides[currentSlide];

  return (
    <div className="w-full px-4 py-8 font-serif md:hidden">
      {/* Heading + Paragraph ) */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl italic">
          <span className="text-[#00285E]">Beyond Struggles, </span>
          <span className="text-red-600">Beyond Stars!</span>
        </h2>
        <p className="mt-2 text-gray-800 text-xl">
          We proudly celebrate our top achievers, whose dedication and
          excellence inspire us all.
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.name}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x < -100 || velocity.x < -500) {
              nextSlide();
            } else if (offset.x > 100 || velocity.x > 500) {
              prevSlide();
            }
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="bg-[#BCDDFC] rounded-2xl shadow-lg p-6 sm:p-8 pt-10 sm:pt-12 pb-28 sm:pb-32 relative overflow-visible min-h-[500px] sm:min-h-[560px]"
        >
          {/* Header */}
          <p className="text-sm text-red-700">{slide.class}</p>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
            {slide.name}
          </h2>

          {/* Stats Grid  */}
          <div className="mt-8 sm:mt-10 text-gray-900">
            {Array.from({ length: 2 }).map((_, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid grid-cols-2 text-center ${
                  rowIndex < 1 ? "border-b border-white" : ""
                }`}
              >
                {slide.stats
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((stat, idx) => (
                    <div
                      key={idx}
                      className={`py-4 sm:py-6 ${
                        idx % 2 === 0 ? "border-r border-white" : ""
                      }`}
                    >
                      <img
                        src={stat.value}
                        alt={stat.label}
                        className="mx-auto w-12 h-12 object-contain"
                      />
                      <p className="text-lg sm:text-xl mt-2">{stat.label}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Quote */}
          <p className="mt-6 text-center italic text-gray-800">{slide.quote}</p>

          {/* CTA Button */}
          <button className="mt-6 mb-48 sm:mt-8 px-4 py-2 bg-white border border-gray-700 rounded-md text-sm text-gray-900 font-medium hover:bg-gray-100 w-full">
            Meet our Community
          </button>

          {/* Image  */}
          <img
            src={slide.image}
            alt={slide.name}
            className="absolute -bottom-16 sm:-bottom-1 -left-4 sm:-left-6 w-72 sm:w-56 md:w-64 object-contain z-40"
          />

          {/* Mobile Arrows */}
          <div className="absolute bottom-40 sm:bottom-10 right-4 flex flex-col gap-3 z-50">
            <button
              onClick={prevSlide}
              className="bg-red-700 text-white p-2 sm:p-3 rounded-full hover:bg-red-800"
            >
              <FaArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="border border-red-700 text-red-700 p-2 sm:p-3 rounded-full hover:bg-red-100"
            >
              <FaArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProfileCardMobile;
