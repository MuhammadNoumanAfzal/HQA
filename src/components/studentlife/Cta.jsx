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
        Ready to Experience Life at HQA?
      </h2>

      {/* Paragraphs */}
      <p className="max-w-3xl text-base sm:text-2xl text-[#00285E] leading-relaxed mb-2">
        Come be part of a community where students learn, lead, and live their
        faith with confidence. Explore our Admissions process to learn how to
        join the HQA family.{" "}
      </p>

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
