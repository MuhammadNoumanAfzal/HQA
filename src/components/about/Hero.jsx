import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { SlideUp } from "../../../utility/animation.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const headings = [
    { name: "Admissions", link: "/admission" },
    { name: "Academics", link: "/academics" },
    { name: "Tuition Fee", link: "/tution-fee" },
    { name: "Leadership", link: "/leadership" },
    { name: "Scholarship", link: "/scholarship" },
    { name: "Faculty & Staff Directory", link: "/faculty" },
    { name: "Quran Memorization Program", link: "/memorizaton" },
    { name: "Athletics at HQA", link: "/athelatics" },
    { name: "Student Life", link: "/student-life" },
    { name: "History", link: "/histroy" },
    { name: "FAQs", link: "/faqs" },
  ];

  return (
    <div className="w-full flex flex-col items-center px-8 pt-12 font-serif">
      {/* Background Image */}
      <div className="relative w-full rounded-2xl overflow-hidden">
        <img
          src="/about/hero.jpg"
          alt="About"
          className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            variants={SlideUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-white text-4xl sm:text-5xl md:text-6xl italic drop-shadow-lg"
          >
            About Us
          </motion.h1>
        </div>
      </div>

      {/* Subheadings */}
      <div
        className="
          relative mt-[-2rem] w-[90%] sm:w-[80%] md:w-[95%] 
          rounded-2xl shadow-lg p-4 sm:p-6 
          bg-white text-black text-center flex flex-col items-center justify-center
        "
      >
        {/* -------- Mobile View -------- */}
        <div className="flex justify-between items-center md:hidden w-full max-w-4xl">
          {/* Left Side - Menu */}
          <p className="font-semibold cursor-pointer">Menu</p>

          {/* Right Side */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-full hover:bg-red-600 transition"
          >
            <HiDotsVertical className="text-2xl" />
          </button>
        </div>

        {/* Dropdown */}
        {open && (
          <div className="md:hidden mt-2 flex flex-col items-center gap-2 transition-all duration-300 w-full max-w-4xl">
            {headings.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="hover:bg-red-100 p-2 rounded cursor-pointer text-center w-full"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* -------- Desktop View: Grid -------- */}
        {/* -------- Desktop View: Grid -------- */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-center w-full max-w-6xl">
          {headings.map((item, i) => (
            <Link
              key={i}
              to={item.link}
              className="text-black hover:opacity-80 cursor-pointer text-xs sm:text-sm md:text-base w-[150px] text-center"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
