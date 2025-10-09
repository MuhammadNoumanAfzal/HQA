import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = ["/inquire/campus.jpg", "/about/campus.jpg", "/about/class.jpg"];

const Campus = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="py-12">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl italic text-red-700 mb-8 font-serif">
        Our Campus
      </h2>

      {/* Image Wrapper */}
      <div className="relative w-[90%] mx-auto h-[70vh] sm:h-[80vh] overflow-hidden rounded-xl shadow-lg">
        {/* Background Image */}
        <img
          src={slides[current]}
          alt="Campus Slide"
          className="w-full h-full object-cover"
        />

        {/* Navigation Arrows (desktop & tablet only) */}
        {!isMobile && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-gray-200 rounded-2xl p-1">
            {/* Left Button */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition border-2 border-blue-900 text-blue-900 bg-white"
            >
              <FaArrowLeft />
            </button>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition border-2 border-red-700 text-red-600 bg-white"
            >
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>

      {/* Navigation Arrows (mobile only, below image) */}
      {isMobile && (
        <div className="mt-6 flex justify-center gap-6">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition border-2 border-red-700 text-red-700 bg-transparent"
          >
            <FaArrowLeft />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition bg-red-600 text-white border-2 border-red-600"
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Campus;
