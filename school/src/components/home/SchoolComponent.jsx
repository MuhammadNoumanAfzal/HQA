import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SchoolComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Our graduates have earned admission into most universities.",
    },
    {
      id: 2,
      quote:
        "The guidance I received at HQA was instrumental in my acceptance to Stanford.",
    },
    {
      id: 3,
      quote:
        "The science program at HQA gave me the foundation I needed for MIT.",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section className="py-16 bg-white font-serif">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-indigo-900 mb-8 italic text-center lg:text-left">
          From HQA to <span className="text-red-600">Higher Ground</span>
        </h1>

        {/* Flex layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/slider.jpg"
                alt="Students at Houston Quran Academy"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Info Card */}
            <div className="bg-[#00285E] text-white rounded-xl shadow-lg p-6">
              <p className="text-sm sm:text-base md:text-lg">
                Imagine a School Where Graduates Excel at the Nation’s Most
                Prestigious Universities
              </p>
              <p className="mt-2 text-sm sm:text-base md:text-lg">
                At Houston Quran Academy, we go beyond preparing students for
                graduation — we empower them to achieve greatness.
              </p>
            </div>

            {/* Slider Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
              <div className="overflow-hidden relative min-h-[120px] sm:min-h-[150px] md:min-h-[160px]">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    width: `${testimonials.length * 100}%`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 flex items-center gap-4 sm:gap-6 px-2 sm:px-4 md:px-6"
                    >
                      <img
                        src="1.png"
                        alt={`slide-${index + 1}`}
                        className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain flex-shrink-0"
                      />
                      <p className="text-gray-600 italic text-sm sm:text-base md:text-lg leading-snug break-words">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute bottom-4 right-4 flex gap-3">
                <button
                  onClick={prevSlide}
                  className="border border-red-700 text-red-700 p-2 rounded-full hover:bg-red-100 transition-colors"
                >
                  <FaArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-red-700 text-white p-2 rounded-full hover:bg-red-800 transition-colors"
                >
                  <FaArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolComponent;
