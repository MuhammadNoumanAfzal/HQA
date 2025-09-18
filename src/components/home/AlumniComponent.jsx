import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const AlumniComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonials = [
    {
      id: 1,
      quote:
        "From Pre-K to 12th grade, I've never felt so supported in my academic and spiritual journey.",
      name: "Alina, Class of 2023",
      img: "/alumni2.png",
    },
    {
      id: 2,
      quote:
        "The teachers and mentors at HQA have always guided me with care and wisdom.",
      name: "Zara, Class of 2022",
      img: "/alumni2.png",
    },
    {
      id: 3,
      quote:
        "HQA gave me the foundation to excel academically while staying true to my faith.",
      name: "Omar, Class of 2021",
      img: "/alumni2.png",
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Variants for text card
  const cardVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  // Variants for image
  const imgVariants = {
    enter: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  };

  // Handle swipe detection
  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) {
      // Swipe right
      prevSlide();
    } else if (info.offset.x < -100) {
      // Swipe left
      nextSlide();
    }
  };

  return (
    <div className="px-4 sm:pt-12 sm:px-12 py-12 lg:py-24 font-serif overflow-x-hidden relative z-10 bg-white">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl text-indigo-900 mb-4">
          Beyond Memories;{" "}
          <span className="text-red-600">A Future Together!</span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-800 text-sm sm:text-base mb-6">
          Our alumni are making a difference worldwide—leading in their careers
          and serving communities while carrying HQA's values with them. Stay
          connected, inspire, and give back.
        </p>

        {/* Image - positioned to touch the slider card */}
        <div className="w-full flex justify-center mb-0 relative z-20">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={currentSlide}
              src={testimonials[currentSlide].img}
              alt={testimonials[currentSlide].name}
              className="w-full max-w-sm h-auto object-cover rounded-tl-xl rounded-bl-xl"
              variants={imgVariants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>

        {/* Card Slider with swipe - positioned right after the image */}
        <div className="relative min-h-[300px] sm:min-h-[360px] mt-0 -mt-4 relative z-10">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide}
              className="bg-[#00285E] shadow-lg p-4 sm:p-8 border border-indigo-100 text-white flex flex-col justify-between rounded-xl min-h-[300px] sm:min-h-[360px]"
              variants={cardVariants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              <p className="italic text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                "{testimonials[currentSlide].quote}"
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-4 sm:mt-8">
                <button className="rounded-md bg-white px-4 sm:px-6 py-2 sm:py-3 hover:text-[#00285E] transition duration-300 font-medium text-red-700 text-sm sm:text-base">
                  Join the Alumni Network
                </button>
                <span className="font-semibold text-sm sm:text-lg">
                  {testimonials[currentSlide].name}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              onClick={prevSlide}
              className="border border-red-700 text-red-700 p-2 sm:p-3 rounded-full hover:bg-red-100 transition-colors"
            >
              <FaArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-red-700 text-white p-2 sm:p-3 rounded-full hover:bg-red-800 transition-colors"
            >
              <FaArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout (unchanged) */}
      <div className="hidden lg:flex flex-col lg:flex-row items-start lg:items-center lg:gap-0">
        {/* Left Section - Card + Text */}
        <div className="w-full lg:w-3/5 flex flex-col space-y-6 order-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-indigo-900 ">
            Beyond Memories;{" "}
            <span className="text-red-600">A Future Together!</span>
          </h1>
          <p className="text-gray-800 text-sm sm:text-base lg:text-lg">
            Our alumni are making a difference worldwide—leading in their
            careers and serving communities while carrying HQA's values with
            them. Stay connected, inspire, and give back.
          </p>

          {/* Card Slider with swipe */}
          <div className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-[360px] mt-6 order-3 lg:order-1">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSlide}
                className="bg-[#00285E] shadow-lg p-4 sm:p-8 border border-indigo-100 text-white flex flex-col justify-between rounded-xl min-h-[300px] sm:min-h-[360px]"
                variants={cardVariants}
                custom={direction}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
              >
                <p className="italic text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                  "{testimonials[currentSlide].quote}"
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-4 sm:mt-8">
                  <button className="rounded-md bg-white px-4 sm:px-6 py-2 sm:py-3 hover:text-[#00285E] transition duration-300 font-medium text-red-700 text-sm sm:text-base">
                    Join the Alumni Network
                  </button>
                  <span className="font-semibold text-sm sm:text-lg">
                    {testimonials[currentSlide].name}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows (desktop only) */}
            <div className=" flex justify-end lg:justify-end gap-3 mt-4">
              <button
                onClick={prevSlide}
                className="border border-red-700 text-red-700 p-2 sm:p-3 rounded-full hover:bg-red-100 transition-colors"
              >
                <FaArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-red-700 text-white p-2 sm:p-3 rounded-full hover:bg-red-800 transition-colors"
              >
                <FaArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full  lg:w-2/5 flex justify-center lg:justify-end mt-6 order-2 lg:order-2">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={currentSlide}
              src={testimonials[currentSlide].img}
              alt={testimonials[currentSlide].name}
              className="w-full max-w-sm lg:max-w-full h-auto object-cover rounded-tl-xl rounded-bl-xl"
              variants={imgVariants}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AlumniComponent;
