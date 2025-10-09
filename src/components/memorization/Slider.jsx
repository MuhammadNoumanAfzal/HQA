import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { SlideUp, SlideButton } from "../../../utility/animation.js";

const slides = [
  {
    img: "/memorizaation/slider.jpg",
    title: "Comprehension Before Memorization",
    desc: "Before a single verse is committed to memory, students must first understand its meaning. This builds a solid spiritual and intellectual foundation. Each child is tested on the meaning of the Surah before memorization begins, ensuring true connection—not blind repetition.",
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

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="font-serif pt-14 px-10  pb-60 md:pb-24 relative">
      {/* Top Center Heading */}
      <div className="w-full text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl italic text-[#00285E]">
          What Sets Our Program Apart
        </h2>
      </div>

      {/* Image Full Width */}
      <div className="relative w-full">
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

        {/* Card Slider */}
        <div
          className="
            absolute 
            top-[85%] left-1/2 -translate-x-1/2
            md:top-auto md:left-auto md:translate-x-0 md:-bottom-22 md:right-6
            w-[90%] sm:w-[70%] md:w-[45%] lg:w-[55%]
            bg-[#E3F1FF] shadow-lg rounded-lg p-6 md:p-8
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
              <h4 className="text-[#00285E] italic font-semibold mb-2 text-lg sm:text-xl md:text-2xl">
                {slides[current].title}
              </h4>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                {slides[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <motion.button
            onClick={prevSlide}
            variants={SlideButton(0.3)}
            initial="hidden"
            animate="visible"
            className="absolute top-1/2 -translate-y-1/2 -left-4 bg-white border-2 border-[#CF3528] rounded-full h-10 w-10 flex items-center justify-center shadow-md"
          >
            <FaArrowLeft className="text-[#CF3528]" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={nextSlide}
            variants={SlideButton(0.4)}
            initial="hidden"
            animate="visible"
            className="absolute top-1/2 -translate-y-1/2 -right-4 bg-[#CF3528] text-white rounded-full h-10 w-10 flex items-center justify-center shadow-md"
          >
            <FaArrowRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
