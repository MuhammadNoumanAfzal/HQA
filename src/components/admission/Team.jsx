import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const students = [
  {
    id: 1,
    title: "Inspiring Journeys",
    text: "Our students grow academically and spiritually, building character rooted in faith.",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-[#012974] mb-6 md:mb-10">
            Meet Our Students
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-3 md:mb-4">
            At Houston Quran Academy, every student arrives with a unique
            story—shaped by different cultures, dreams, and talents. Yet they
            are united by shared values: a love for learning, a commitment to
            faith, and a drive to lead with purpose.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-3 md:mb-4">
            Here, students don't just attend school—they become part of a
            vibrant, nurturing family that celebrates diversity, encourages
            excellence, and cultivates character rooted in Islamic tradition.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            Whether they're excelling in academics, memorizing Quran, or serving
            the community, our students are growing into tomorrow's leaders—with
            hearts full of iman and minds ready to make a difference.
          </p>
        </div>

        {/* Right Side */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh]">
          {/* Image */}
          <div className="w-full h-full overflow-hidden rounded-xl">
            <img
              src={students[current].img}
              alt={students[current].title}
              className="w-full h-full object-cover transition-opacity duration-500"
              key={current} // Force re-render to trigger transition
            />
          </div>

          {/* Mobile Arrows — below the slider */}
          <div className="md:hidden flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="border-red-700  text-white p-3 rounded-full border   transition"
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
          <div className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[600px] md:max-w-[700px] lg:max-w-[800px] bg-white shadow-xl rounded-lg p-4 sm:p-6 md:p-8 border border-gray-200 mb-6">
            {/* Desktop Arrows (Inside the card) */}
            <div className="hidden md:block">
              <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 border-red-700  p-2 sm:p-3 cursor-pointer rounded-full border text-red-700  transition z-10"
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
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#00285E] mb-2">
              {students[current].title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              {students[current].text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
