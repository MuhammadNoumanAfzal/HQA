import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const MobileFooter = () => {
  return (
    <div className="bg-red-700">
      <footer className="bg-[#00295e] font-serif py-5 px-4 sm:px-10 flex flex-col justify-center items-center space-y-10 rounded-tr-[100px]">
        {/* Logo + Name */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 text-center">
          <img className="h-28" src="logo.png" alt="Logo" />
          <p className="text-white text-lg sm:w-2.5">Houston Quran Academy</p>
        </div>

        {/* Mission */}
        <div className="w-full sm:w-80 text-white text-center px-4 sm:px-0">
          <p className="text-sm sm:text-base">
            At Houston Quran Academy, every child's journey is rooted in faith,
            knowledge, and character.
          </p>
        </div>

        {/* Links */}
        <div className="w-full sm:w-2xs">
          <p className="text-white p-2.5 text-center">Employment</p>
          <hr className="border-white" />
          <p className="text-white p-2.5 text-center">Admissions</p>
          <hr className="border-white" />
          <p className="text-white p-2.5 text-center">Programs</p>
          <hr className="border-white" />
          <p className="text-white p-2.5 text-center">Support Us</p>
          <hr className="border-white" />
        </div>

        {/* Support Text */}
        <div className="text-white text-center px-4 sm:px-0">
          <p className="text-sm sm:text-base">
            Your support transforms lives, fueling a future illuminated by
            knowledge and guided by mercy. Together, we rise to build a world
            where compassion, wisdom, and excellence lead the way.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col justify-center items-center space-y-5 w-full px-4 sm:px-0">
          <button className="bg-white w-full sm:w-40 h-12 rounded-[5px] text-[#cf3527] text-sm sm:text-base">
            Inquire
          </button>
          <button className="bg-white w-full sm:w-40 h-12 rounded-[5px] text-[#cf3527] text-sm sm:text-base">
            Apply Now
          </button>
          <button className="bg-white w-full sm:w-40 h-12 rounded-[5px] text-[#cf3527] text-sm sm:text-base">
            Donate
          </button>
          <button className="bg-[#cf3527] w-full sm:w-40 h-12 rounded-[5px] text-white text-sm sm:text-base">
            Volunteer
          </button>
        </div>

        {/* Address */}
        <div className="text-white text-center px-4 sm:px-0">
          <p className="text-sm sm:text-base">
            Established in 2008, Houston Quran Academy is a nonprofit school for
            PK-12 Grades 1902 Baker Rd, Houston, Texas 77407
          </p>
          <p className="text-white mt-9 text-sm sm:text-base">281-717-4622</p>
        </div>

        {/* Socials */}
        <div className="w-full text-center px-4 sm:px-0">
          <h1 className="text-white mb-2 text-sm sm:text-base">
            Connect with Us
          </h1>
          <div className="flex items-center justify-center gap-4 text-white text-2xl">
            <FaFacebookF className="cursor-pointer hover:text-[#cf3528] transition" />
            <FaInstagram className="cursor-pointer hover:text-[#cf3528] transition" />
            <FaXTwitter className="cursor-pointer hover:text-[#cf3528] transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-[#cf3528] transition" />
          </div>
        </div>

        {/* Copyright + CTA */}
        <div className="flex flex-col justify-center items-center space-y-5 w-full px-4 sm:px-0">
          <p className="text-white text-sm sm:text-base text-center">
            Copyright © 2025 Houston Quran Academy.
          </p>
          <button className="text-white px-10 py-2.5 rounded-[5px] bg-[#cf3527] w-full sm:w-[200px] text-sm sm:text-base">
            Monefaction
          </button>
        </div>
      </footer>
    </div>
  );
};

export default MobileFooter;
