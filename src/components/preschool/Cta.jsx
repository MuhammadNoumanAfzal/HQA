import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Cta = () => {
  return (
    <section className="bg-[#BCDDFC] py-20 px-6 flex flex-col items-center justify-center text-center font-serif">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#00285E] italic mb-6 leading-snug">
        Limited <span className="text-[#CF3528]">Seats Available</span>
      </h2>

      {/* Paragraphs */}
      <p className="max-w-4xl text-base sm:text-2xl md:text-xl mb-10 text-[#00285E] leading-relaxed ">
        Don’t wait to secure your child’s place in a faith-driven, academically
        enriching Montessori environment. HQA is where confident learners and
        compassionate leaders begin their journey.
      </p>
      <p className="max-w-4xl text-base sm:text-2xl md:text-2xl mb-10 text-[#00285E] leading-relaxed ">
        Call now: (281) 717-4847
      </p>

      {/* Button */}
      <button className="flex items-center gap-2 cursor-pointer bg-[#00285E] text-white px-6 py-3 rounded-lg shadow-md text-sm sm:text-base md:text-lg transition hover:scale-105">
        Schedule a Tour
        <FaArrowRight className="text-white" />
      </button>
      <button className="flex items-center gap-2 cursor-pointer text-[#00285E]  border-1 border-[#00285E] mt-8  px-6 py-3 rounded-lg shadow-md text-sm sm:text-base md:text-lg transition hover:scale-105">
        Start Admission Process <FaArrowRight />
      </button>
    </section>
  );
};

export default Cta;
