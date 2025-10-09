import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp, SlideButton } from "../../../utility/animation.js";

const slides = [
  {
    img: "/athelatics/slider.jpg",
    title: "HQA Boys Basketball – Regional Champions 2024",
  },
  {
    img: "/about/campus.jpg",
    title: "HQA Boys Basketball – Regional Champions 2024",
  },
  {
    img: "/about/class.jpg",
    title: "HQA Boys Basketball – Regional Champions 2024",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="font-serif pt-14 px-4 sm:px-10 pb-60 md:pb-24 relative">
      {/* Top Center Heading */}
      <div className="w-full text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-5xl italic text-red-700 mb-4">
          Achievements
        </h2>
        <p className="text-center text-lg sm:text-xl md:text-2xl italic max-w-3xl mx-auto text-gray-700">
          We are proud of our students' accomplishments both on and off the
          field. Recent highlights include:
        </p>
      </div>

      {/* Main Container */}
      <div className="relative w-full">
        {/* Slider Image */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[current].img}
              src={slides[current].img}
              alt="HQA Building"
              className="w-full h-[18rem] sm:h-[28rem] md:h-[34rem] lg:h-[40rem] object-cover rounded-lg"
              variants={SlideUp(0)}
              initial="hidden"
              animate="visible"
              exit="hidden"
            />
          </AnimatePresence>
        </div>

        {/* Slider Card and Arrows */}
        <div className="absolute top-[85%] left-1/2 -translate-x-1/2 md:top-auto md:translate-x-0 md:-bottom-22 md:left-12 w-full max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {/* Slider Card - Centered on mobile, left on desktop */}
            <div className="w-[90%] sm:w-[70%] md:w-[45%] lg:w-[30%] bg-[#E3F1FF] shadow-lg rounded-lg p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[current].title}
                  variants={SlideUp(0.2)}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <h4 className="text-[#00285E] italic font-semibold mb-2 text-lg sm:text-xl md:text-4xl">
                    {slides[current].title}
                  </h4>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrows - Below card on mobile, beside on desktop */}
            <div className="flex space-x-4 md:space-x-0 md:space-y-4  md:-mb-58 md:gap-2">
              <motion.button
                onClick={prevSlide}
                variants={SlideButton(0.3)}
                initial="hidden"
                animate="visible"
                className="bg-white border-2 border-[#CF3528] rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
              >
                <FaArrowLeft className="text-[#CF3528] text-lg" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                variants={SlideButton(0.4)}
                initial="hidden"
                animate="visible"
                className="bg-[#CF3528] text-white rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:bg-[#b52d20] transition-colors"
              >
                <FaArrowRight className="text-lg" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
