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
        Ready to Apply?
      </h2>

      {/* Paragraphs */}
      <p className="max-w-3xl text-base sm:text-2xl md:text-3xl text-[#00285E] leading-relaxed mb-2">
        Begin Your Child’s Journey Today.
      </p>

      <p className="max-w-3xl sm:text-2xl md:text-3xl text-[#252626] leading-relaxed mb-2">
        Have questions? We’re here to help!
      </p>

      <p className="max-w-3xl sm:text-2xl md:text-3xl text-[#252626] leading-relaxed mb-12">
        Call us at <span className="text-[#CF3528]">281-717-4622</span> or Email{" "}
        <span className="text-[#CF3528]">admissions@hqa</span> for personalized
        support.
      </p>

      {/* Button */}
      <button className="flex items-center gap-2 cursor-pointer bg-white text-[#CF3528] px-6 py-3 rounded-lg shadow-md text-sm sm:text-base md:text-lg transition hover:scale-105">
        Apply Now <FaArrowRight className="text-[#CF3528]" />
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
