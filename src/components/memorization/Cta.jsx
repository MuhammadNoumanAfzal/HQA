import React from "react";
import { FaArrowRight } from "react-icons/fa"; // react-icon for button

const CTA = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex flex-col pt-40 pb-40 px-10 items-center justify-center text-center font-serif "
      style={{ backgroundImage: "url('/memorizaation/cta.jpg')" }} // replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl italic text-white mb-6">
          Join a Legacy of Excellence
        </h2>

        {/* Paragraph */}
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-10">
          Give your child the opportunity to go beyond memorization. Let them
          live the Quran, understand its message, and grow into someone who
          embodies its light.
        </p>

        {/* Button */}
        <button className="flex rounded-md items-center gap-2 mx-auto cursor-pointer bg-white text-[#CF3528] hover:bg-[#00285E] hover:text-white px-6 py-3  shadow-md text-sm sm:text-base transition">
          Schedule a Tour
        </button>
      </div>
    </section>
  );
};

export default CTA;
