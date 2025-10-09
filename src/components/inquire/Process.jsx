import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlideUp,
  SlideLeft,
  SlideRight,
  SlideButton,
} from "../../../utility/animation.js";

const slides = [
  {
    img: "/about/ethos.jpg",
    title: "Step 1: Inquiry Form",
    desc: "Start your journey by filling out our simple Online Inquiry Form. A member of our Admissions team will get in touch to guide you through the next steps.",
  },
  {
    img: "/about/campus.jpg",
    title: "Step 2: Faith & Knowledge",
    desc: "Our curriculum blends Islamic values with academic excellence, empowering students with a strong foundation.",
  },
  {
    img: "/about/class.jpg",
    title: "Step 3: Community Engagement",
    desc: "We cultivate leaders who serve with compassion, integrity, and responsibility in their communities.",
  },
];

const Process = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="py-12 px-4 sm:px-10">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl italic text-[#00285E] mb-8 font-serif">
        Step-by-Step
        <br className="sm:hidden" />
        <span className="text-[#CF3528]"> Admissions Process</span>
      </h2>

      {/* Main Section */}
      <section className="flex flex-col lg:flex-row-reverse font-serif items-center justify-between gap-6 py-12 px-4 sm:px-10 relative">
        {/* Image Section */}
        <div className="w-full lg:w-[65%] relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[current].img}
              src={slides[current].img}
              alt="HQA Building"
              className="w-full h-72 sm:h-96 md:h-[30rem] lg:h-[30rem] object-cover rounded-xl"
              variants={SlideUp(0)}
              initial="hidden"
              animate="visible"
              exit="hidden"
            />
          </AnimatePresence>

          {/* Mobile Card Overlay */}
          <div
            className="absolute bottom-[-8rem] sm:bottom-[-2rem] left-1/2 -translate-x-1/2 
            bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 
            w-[90%] sm:w-[85%] md:w-[75%] 
            lg:hidden pb-20"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].title}
                variants={SlideUp(0.2)}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h4 className="text-red-700 font-serif italic font-semibold mb-2 text-sm sm:text-base md:text-lg">
                  {slides[current].title}
                </h4>
                <p className="text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed">
                  {slides[current].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Mobile Nav Buttons */}
            <div className="flex justify-center mt-4 space-x-4">
              <motion.button
                onClick={prevSlide}
                variants={SlideButton(0.3)}
                initial="hidden"
                animate="visible"
                className="bg-white border-2 border-[#CF3528] rounded-full h-8 w-8 flex items-center justify-center shadow-md"
              >
                <FaArrowLeft className="text-[#CF3528] text-xs" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                variants={SlideButton(0.4)}
                initial="hidden"
                animate="visible"
                className="bg-[#CF3528] text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md"
              >
                <FaArrowRight className="text-xs" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Desktop Card */}
        <div
          className="hidden lg:block lg:w-[35%] bg-white shadow-lg rounded-lg p-6 md:p-14
          relative translate-y-6 translate-x-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].title}
              variants={SlideUp(0.2)}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <h4 className="text-red-700 font-serif italic font-semibold mb-2 text-lg">
                {slides[current].title}
              </h4>
              <p className="text-gray-800 text-base leading-relaxed">
                {slides[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Desktop Arrows */}
          <motion.button
            onClick={prevSlide}
            variants={SlideButton(0.3)}
            initial="hidden"
            animate="visible"
            className="absolute -left-3 md:-left-4 top-1/2 transform -translate-y-1/2 bg-white border-2 border-[#CF3528] rounded-full h-8 w-8 flex items-center justify-center shadow-md"
          >
            <FaArrowLeft className="text-[#CF3528] text-sm" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            variants={SlideButton(0.4)}
            initial="hidden"
            animate="visible"
            className="absolute -right-3 md:-right-4 top-1/2 transform -translate-y-1/2 bg-[#CF3528] text-white rounded-full h-8 w-8 flex items-center justify-center shadow-md"
          >
            <FaArrowRight className="text-sm" />
          </motion.button>
        </div>
      </section>

      {/* Extra spacing only for mobile so overlay doesn't overlap next section */}
      <div className="block lg:hidden mt-20"></div>
    </div>
  );
};

export default Process;
