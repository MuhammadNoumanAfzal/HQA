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
    img: "/academics/profile.jpg",
    title: "Montessori with a Mission",
    desc: "Our certified teachers follow the American Montessori Society (AMS) model—giving your child the freedom to explore, ask questions, and build real-world skills through hands-on discovery.",
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

const Profile = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="py-12 px-4 sm:px-10">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl italic text-[#00285E] mb-8 font-serif">
        Why Parents Choose{" "}
        <span className="text-[#CF3528]">HQA Pre-School</span>
      </h2>
      <p className="text-center max-w-2xl mx-auto px-4 text-gray-800 text-xl leading-relaxed">
        Our students leave Houston Quran Academy equipped with the faith,
        knowledge, and character to thrive in this world and the next. Here's
        what defines an HQA graduate:
      </p>

      <section className="flex flex-col lg:flex-row font-serif items-center justify-between gap-6 py-12 px-4 sm:px-10 relative">
        {/* Image on Left */}
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

          {/* Card Overlay for Mobile */}
          <div
            className="absolute bottom-[-8rem] sm:bottom-[-2rem] left-1/2 -translate-x-1/2 
            bg-[#012974] shadow-lg rounded-lg p-4 sm:p-6 md:p-8 
            w-[90%] sm:w-[85%] md:w-[75%] 
            lg:hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[current].title}
                variants={SlideUp(0.2)}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h4 className="text-[#FAF1C4] font-serif italic font-semibold mb-2 text-sm sm:text-base md:text-lg">
                  {slides[current].title}
                </h4>
                <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                  {slides[current].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons - Mobile */}
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

        {/* Card for Desktop on Right */}
        <div className="hidden lg:block lg:w-[40%] bg-[#012974] -left-12 shadow-lg rounded-lg p-6 md:p-10  relative translate-y-22">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].title}
              variants={SlideUp(0.2)}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <h4 className="text-[#FAF1C4] font-serif italic font-semibold mb-2 text-lg">
                {slides[current].title}
              </h4>
              <p className="text-white text-base leading-relaxed">
                {slides[current].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Desktop Navigation Arrows */}
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
    </div>
  );
};

export default Profile;
