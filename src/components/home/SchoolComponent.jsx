import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "/home/schol1.jpg",
    numberImg: "home/001.png",
    title:
      "Imagine a School Where Graduates Excel at the Nation's Most Prestigious Universities",
    description:
      "At Houston Quran Academy, we go beyond preparing students for graduation  we empower them to achieve greatness.",
    quote:
      "Our graduates have earned admission into some of the most respected universities in the nation.",
  },
  {
    id: 2,
    image: "/home/schol2.jpg",
    numberImg: "home/001.png",
    title: "Building Leaders of Tomorrow",
    description:
      "Our unique curriculum combines modern education with Islamic values to shape well-rounded individuals.",
    quote: "We prepare students to excel both academically and spiritually.",
  },
  {
    id: 3,
    image: "/home/schol1.jpg",
    numberImg: "home/001.png",
    title: "Empowering Through Knowledge",
    description:
      "Our students gain the skills, confidence, and character to succeed in life and serve their communities.",
    quote: "Education is the foundation of empowerment.",
  },
];

// Animation Variants
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ResponsiveSlider() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // --- Swipe Handlers ---
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

  return (
    <motion.section
      className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16 font-serif"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl  mb-8 lg:text-left font-serif"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <span className="text-[#0F2C56] font-serif">From HQA to </span>
        <span className="text-[#C0392B] italic">Higher Ground</span>
      </motion.h2>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-6">
        {/* Top Card */}
        <motion.div
          className="bg-[#0E2954] text-white p-6 rounded-xl shadow-md"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl  mb-6">{slides[current].title}</h3>
          <p className="text-xl sm:text-xl">{slides[current].description}</p>
        </motion.div>

        {/* Image */}
        <div className="w-full relative flex justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[current].id}
              src={slides[current].image}
              alt={slides[current].title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md h-72 sm:h-80 md:h-96 object-cover rounded-xl shadow-md"
            />
          </AnimatePresence>
        </div>

        {/* Quote Slider */}
        <motion.div
          className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].quote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-4"
            >
              <img
                src={slides[current].numberImg}
                alt={`Slide ${slides[current].id}`}
                className="w-16 h-22"
              />
              <p className="italic text-gray-700 text-xl ">
                "{slides[current].quote}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-700 text-red-700 hover:bg-red-700 transition"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Image */}
        <div className="w-full relative order-1 lg:order-1">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[current].id}
              src={slides[current].image}
              alt={slides[current].title}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6 }}
              className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-xl shadow-md"
            />
          </AnimatePresence>
        </div>

        {/* Right Cards */}
        <motion.div
          className="flex flex-col justify-between gap-6 order-2 lg:order-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#0E2954] text-white p-6 rounded-xl shadow-md">
            <h3 className="text-base mb-6">{slides[current].title}</h3>
            <p className="text-base">{slides[current].description}</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].quote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-4"
              >
                <img
                  src={slides[current].numberImg}
                  alt={`Slide ${slides[current].id}`}
                  className="w-16 h-22"
                />
                <p className="italic text-gray-700 text-xl sm:text-base">
                  "{slides[current].quote}"
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-end gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 transition"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
