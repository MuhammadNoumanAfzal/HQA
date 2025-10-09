import React from "react";
import { FaArrowRight } from "react-icons/fa"; // react-icon for button

const cta = () => {
  return (
    <section className="bg-[#BCDDFC] mt-10 md:mt-0 pt-30 pb-30 px-10 flex flex-col items-center justify-center text-center font-serif text-white">
      {/* Title */}
      <h2 className="text-3xl text-[#00285E] sm:text-4xl md:text-5xl  italic mb-6">
        Connect with Our <span className="text-red-700">Leadership</span>
      </h2>

      {/* Paragraph */}
      <p className="max-w-3xl text-lg  text-gray-800 leading-relaxed mb-20">
        We believe in open doors and open hearts. Whether you're a parent,
        alumni, community partner, or prospective family — we welcome your
        ideas, feedback, and support.
      </p>

      <button
        className="group flex items-center gap-2 cursor-pointer 
  bg-white text-red-700 px-6 py-3 rounded-lg shadow-md text-sm sm:text-base 
  transition hover:bg-[#00285E] hover:text-white"
      >
        Career
        <FaArrowRight className="text-red-700 transition group-hover:text-white" />
      </button>
    </section>
  );
};

export default cta;
