import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SlideRight } from "../../../utility/animation";
import { motion } from "framer-motion";

const students = [
  {
    id: 1,
    title: "Faith-Centered Living",
    text: "At HQA, students find strength in faith. Through daily Salah, Quran memorization, and Islamic values, we nurture hearts grounded in purpose and connection to Allah ﷻ.",
    img: "/admission/team.jpg",
  },
  {
    id: 2,
    title: "Achieving Excellence",
    text: "They balance knowledge with wisdom, excelling in both modern sciences and Islamic values.",
    img: "/admission/team.jpg",
  },
  {
    id: 3,
    title: "Leaders of Tomorrow",
    text: "Equipped with skills and morals, our graduates are ready to guide and serve communities.",
    img: "/admission/team.jpg",
  },
];

const Team = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? students.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === students.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full font-serif pt-12 pb-20 md:pb-32 px-6 sm:px-10 md:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-6 md:gap-8 items-start">
        {/* Left Side */}
        <div>
          <motion.h2
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-[#012974] mb-6 md:mb-10"
          >
            Meet Our <span className="text-red-700">Students</span>
          </motion.h2>
          <motion.p
            variants={SlideRight(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 text-sm sm:text-base mb-3 md:mb-4"
          >
            At Houston Quran Academy, every student arrives with a unique
            story—shaped by different cultures, dreams, and talents. Yet they
            are united by shared values: a love for learning, a commitment to
            faith, and a drive to lead with purpose.
          </motion.p>
          <motion.p
            variants={SlideRight(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 text-sm sm:text-base mb-3 md:mb-4"
          >
            Here, students don't just attend school—they become part of a
            vibrant, nurturing family that celebrates diversity, encourages
            excellence, and cultivates character rooted in Islamic tradition.
          </motion.p>
          <motion.p
            variants={SlideRight(1.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-700 text-sm sm:text-base"
          >
            Whether they're excelling in academics, memorizing Quran, or serving
            the community, our students are growing into tomorrow's leaders—with
            hearts full of iman and minds ready to make a difference.
          </motion.p>
        </div>

        {/* Right Side */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh]">
          {/* Image */}
          <div className="w-full h-full overflow-hidden rounded-xl">
            <img
              src={students[current].img}
              alt={students[current].title}
              className="w-full h-full object-cover transition-opacity duration-500"
              key={current}
            />
          </div>

          {/* Mobile Arrows */}
          <div className="md:hidden flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="border-red-700  text-red-700 bg-white p-3 rounded-full border   transition"
              aria-label="Previous slide"
            >
              <FaArrowLeft className="text-sm text-red-700" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#CF3528] text-white p-3 rounded-full border border-white hover:bg-red-700 transition"
              aria-label="Next slide"
            >
              <FaArrowRight className="text-sm" />
            </button>
          </div>

          {/* Overlay Card */}
          <div className="absolute bg-[#00285E] -bottom-8 sm:-bottom-12 md:-bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[600px] md:max-w-[700px] lg:max-w-[500px]  shadow-xl rounded-lg p-4 sm:p-6 md:p-8  mb-6">
            {/* Desktop Arrows  */}
            <div className="hidden md:block">
              <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 border-red-700  p-2 sm:p-3 cursor-pointer rounded-full border text-red-700 bg-white  transition z-10"
                aria-label="Previous slide"
              >
                <FaArrowLeft className="text-xs sm:text-sm md:text-base" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-[#CF3528] text-white p-2 sm:p-3 rounded-full border border-white hover:bg-red-700 transition z-10"
                aria-label="Next slide"
              >
                <FaArrowRight className="text-xs sm:text-sm md:text-base" />
              </button>
            </div>

            {/* Card Content */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
              {students[current].title}
            </h3>
            <p className="text-white text-sm sm:text-base">
              {students[current].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
