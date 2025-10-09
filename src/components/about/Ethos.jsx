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
    title: "Holistic Development",
    desc: "We nurture the intellectual, emotional, and spiritual aspects of each student—preparing them to excel in every facet of life.",
  },
  {
    img: "/about/campus.jpg",
    title: "Faith & Knowledge",
    desc: "Our curriculum blends Islamic values with academic excellence, empowering students with a strong foundation.",
  },
  {
    img: "/about/class.jpg",
    title: "Community Engagement",
    desc: "We cultivate leaders who serve with compassion, integrity, and responsibility in their communities.",
  },
];

const Ethos = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="flex flex-col lg:flex-row font-serif items-center justify-between gap-6 py-14 px-2 md:px-10 relative">
      {/* Mobile Heading - Centered */}
      <div className="w-full lg:hidden flex flex-col items-center mb-4 md:mb-6">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-serif italic mb-2 md:mb-3 text-center"
          variants={SlideUp(0.2)}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="text-[#CF3528] inline-block"
            variants={SlideUp(0.4)}
            initial="hidden"
            animate="visible"
          >
            The HQA{" "}
          </motion.span>
          <motion.span
            className="text-blue-900 inline-block"
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
          >
            Ethos
          </motion.span>
        </motion.h2>

        <motion.h3
          className="italic text-gray-800 text-xl text-center"
          variants={SlideLeft(0.8)}
          initial="hidden"
          animate="visible"
        >
          Our Guiding Principles from <br /> Classroom to Community
        </motion.h3>
      </div>

      {/* Left Image with Card Overlay */}
      <div className="w-full lg:w-[60%] relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[current].img}
            src={slides[current].img}
            alt="HQA Building"
            className="w-full h-60 sm:h-96 md:h-[28rem] lg:h-[32rem] object-cover rounded-xl"
            variants={SlideUp(0)}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        </AnimatePresence>

        {/* Card Overlay (Slider) */}
        <div
          className="
    bg-white rounded-lg 
    p-2 sm:p-6 md:p-14 
    w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] 
    relative
    -mt-4   /* only mobile: card overlaps bottom of img */
    sm:mt-0 /* remove overlap on tablet/desktop */
    sm:absolute sm:left-1/2 sm:-translate-x-1/2 
    sm:bottom-[-1.5rem] md:bottom-4 left-6
    lg:left-auto lg:translate-x-0 lg:bottom-12 lg:-right-120
    shadow-[0_0_15px_rgba(0,0,0,0.4)]
  "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].title}
              variants={SlideUp(0.2)}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <h4 className="text-[#CF3528] font-serif italic font-semibold mb-2 text-2xl md:text-2xl">
                {slides[current].title}
              </h4>
              <p className="text-gray-800 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-0">
                {slides[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Mobile */}
          <div className="flex justify-center sm:hidden mt-4 space-x-4">
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

          {/* Desktop Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            variants={SlideButton(0.3)}
            initial="hidden"
            animate="visible"
            className="absolute -left-3 md:-left-4 top-1/2 transform -translate-y-1/2 bg-white border-2 border-[#CF3528] rounded-full h-7 w-7 md:h-8 md:w-8 items-center justify-center shadow-md hidden sm:flex"
          >
            <FaArrowLeft className="text-[#CF3528] text-xs md:text-sm" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            variants={SlideButton(0.4)}
            initial="hidden"
            animate="visible"
            className="absolute -right-3 md:-right-4 top-1/2 transform -translate-y-1/2 bg-[#CF3528] text-white rounded-full h-7 w-7 md:h-8 md:w-8 items-center justify-center shadow-md hidden sm:flex"
          >
            <FaArrowRight className="text-xs md:text-sm" />
          </motion.button>
        </div>
      </div>

      {/* Right Content (40%) - Desktop Only */}
      <div className="w-full lg:w-[40%] flex-col  mb-90 items-start hidden lg:flex">
        {/* Title */}
        <motion.h2
          className="text-4xl lg:text-5xl font-serif italic mb-3 text-left"
          variants={SlideUp(0.2)}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="text-[#CF3528] inline-block"
            variants={SlideUp(0.4)}
            initial="hidden"
            animate="visible"
          >
            The HQA{" "}
          </motion.span>
          <motion.span
            className="text-blue-700 inline-block"
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
          >
            Ethos
          </motion.span>
        </motion.h2>

        <motion.h3
          className="italic text-gray-800 text-xl text-left"
          variants={SlideLeft(0.8)}
          initial="hidden"
          animate="visible"
        >
          Our Guiding Principles from <br /> Classroom to Community
        </motion.h3>
      </div>
    </section>
  );
};

export default Ethos;
