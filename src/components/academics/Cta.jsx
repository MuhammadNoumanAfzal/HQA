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
        Ready to Chart your Path?
      </h2>

      {/* Paragraphs */}
      <p className="max-w-4xl text-base sm:text-2xl md:text-xl mb-10 text-[#00285E] leading-relaxed ">
        Every student’s academic journey at HQA is tailored, interconnected, and
        faith‑infused. Let’s partner to unlock your child’s potential.
      </p>

      {/* Button */}
      <button className="flex items-center gap-2 cursor-pointer bg-white text-[#CF3528] px-6 py-3 rounded-lg shadow-md text-sm sm:text-base md:text-lg transition hover:scale-105">
        Explore Our Curriculum
        <FaArrowRight className="text-[#CF3528]" />
      </button>

      {/* Social Icons */}
      <div className="flex gap-6 mt-8 text-gray-800">
        <a
          href="#"
          aria-label="Facebook"
          className="hover:text-[#00285E] transition"
        >
          <FaFacebookF size={22} />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-[#00285E] transition"
        >
          <FaTwitter size={22} />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-[#00285E] transition"
        >
          <FaInstagram size={22} />
        </a>
      </div>
    </section>
  );
};

export default Cta;
