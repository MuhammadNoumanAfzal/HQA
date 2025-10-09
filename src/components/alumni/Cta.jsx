import React from "react";
import { FaFacebookF, FaInstagram, FaSkype } from "react-icons/fa";

const CTA = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex flex-col pt-40 pb-40 px-10 items-center justify-center text-center font-serif"
      style={{ backgroundImage: "url('/alumni/bg.jpg')" }} // replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div> {/* black overlay */}
      <div className="absolute inset-0 bg-blue-700/10"></div>{" "}
      {/* blue overlay */}
      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl italic text-white mb-6">
          Keep in Touch With Your HQA Family
        </h2>

        {/* Paragraph */}
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-10">
          Whether you’re across the globe or just around the corner, you remain
          an important part of our story. Share your latest news, reconnect with
          classmates, and rediscover the spirit of learning and faith that
          brought us together on the hilltop.
          <br />
          <br />
          Let’s continue this journey — together.
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center justify-center gap-6 text-white text-2xl">
          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            <FaSkype />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
