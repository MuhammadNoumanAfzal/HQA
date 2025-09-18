import React from "react";
import { FaArrowRight } from "react-icons/fa"; // react-icon for button

const cta = () => {
  return (
    <section className="bg-[#BCDDFC] pt-30 pb-30 px-10 flex flex-col items-center justify-center text-center font-serif text-white">
      {/* Title */}
      <h2 className="text-3xl text-[#00285E] sm:text-4xl md:text-5xl  italic mb-6">
        Ready to Learn More?
      </h2>

      {/* Paragraph */}
      <p className="max-w-3xl text-lg  text-gray-800 leading-relaxed mb-20">
        We’d love to get to know your family and help you explore what makes
        Houston Quran Academy the right fit.
      </p>

      {/* Button */}
      <button className="flex items-center gap-2 cursor-pointer bg-[#00285E] hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md text-sm sm:text-base  transition">
        Submit an Inquiry Now <FaArrowRight className="text-white" />
      </button>
    </section>
  );
};

export default cta;
