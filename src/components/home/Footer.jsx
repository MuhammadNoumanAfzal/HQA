import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-red-700">
      <footer className="bg-[#00285E] min-h-screen lg:mr-20 font-serif rounded-tr-[40px] lg:rounded-tr-[70px]">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-start">
          {/* Left Column */}
          <div className="px-6 sm:px-8 lg:px-0 flex flex-col lg:w-1/3 xl:w-1/4">
            <div className="flex flex-row items-center gap-3 pt-8 lg:pt-20 lg:pl-16 xl:pl-24 text-center lg:text-left">
              <img
                src="/logo.png"
                className="h-16 lg:h-20 xl:h-24"
                alt="logo"
              />
              <p className="text-white text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-tight">
                Houston <br /> Quran <br /> Academy
              </p>
            </div>

            <p className="text-white pt-4 lg:pt-6 text-sm lg:text-base xl:text-lg leading-relaxed lg:pl-16 xl:pl-24">
              <span className="block lg:hidden">
                Established in 2008, Houston Quran Academy is a nonprofit school
                for PK-12 Grades 1902 Baker Rd, Houston, Texas 77407
              </span>
              <span className="hidden lg:block">
                Established in 2008, Houston Quran Academy is a nonprofit school
                for PK-12 Grades 1902 Baker Rd, Houston, Texas 77407
              </span>
            </p>

            <p className="text-white pt-6 lg:pt-10 text-sm lg:text-base xl:text-lg lg:pl-16 xl:pl-24">
              281-717-4622
            </p>
            <p className="text-white pt-4 lg:pt-6 text-sm lg:text-base xl:text-lg lg:pl-16 xl:pl-24">
              Connect with Us
            </p>
            <div className="text-white text-xl lg:text-2xl pt-2 lg:pt-3 flex gap-4 lg:gap-5 lg:pl-16 xl:pl-24">
              <FaFacebookF className="cursor-pointer hover:text-[#cf3528] transition" />
              <FaInstagram className="cursor-pointer hover:text-[#cf3528] transition" />
              <FaXTwitter className="cursor-pointer hover:text-[#cf3528] transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#cf3528] transition" />
            </div>

            {/* Mobile Middle Column */}
            <div className="mt-6 lg:hidden space-y-4">
              <p className="text-white text-sm leading-relaxed">
                At Houston Quran Academy, every child's journey is rooted in
                faith, knowledge, and character.
              </p>
              {["Employment", "Calendar", "Site Map", "Privacy Policy"].map(
                (item, i) => (
                  <p
                    key={i}
                    className="text-white border-b border-gray-400 text-sm cursor-pointer hover:text-[#cf3528] transition w-fit pb-1"
                  >
                    {item}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Middle Column (Desktop Only) */}
          <div className="mt-8 lg:mt-20 space-y-4 lg:space-y-5 px-6 sm:px-8 lg:px-0 hidden lg:block lg:w-1/4">
            <p className="text-white text-sm lg:text-base xl:text-lg leading-relaxed">
              At Houston Quran Academy, every child's journey is rooted in
              faith, knowledge, and character.
            </p>
            {["Employment", "Calendar", "Site Map", "Privacy Policy"].map(
              (item, i) => (
                <p
                  key={i}
                  className="text-white border-b border-gray-400 text-sm lg:text-base xl:text-lg cursor-pointer hover:text-[#cf3528] transition w-fit pb-1"
                >
                  {item}
                </p>
              )
            )}
          </div>

          {/* Right Column */}
          <div className="mt-8 lg:mt-20 space-y-4 lg:space-y-6 px-6 sm:px-8 lg:px-0 lg:pr-8 xl:pr-16 2xl:pr-20 lg:w-1/3 xl:w-1/4">
            <p className="text-white text-sm lg:text-base xl:text-lg leading-relaxed">
              Your support transforms lives, fueling a future illuminated by
              knowledge and guided by mercy. Together, we rise to build a world
              where compassion, wisdom, and excellence lead the way.
            </p>
            <div className="flex flex-col gap-3 lg:gap-4">
              {["Inquire", "Visit", "Apply", "Donate"].map((btn, i) => (
                <button
                  key={i}
                  className={`h-10 lg:h-11 xl:h-12 w-32 lg:w-36 xl:w-40 rounded-lg cursor-pointer text-sm lg:text-base xl:text-lg transition ${
                    btn === "Donate"
                      ? "bg-[#cf3528] text-white hover:bg-white hover:text-[#cf3528]"
                      : "bg-white text-red-700 hover:bg-[#cf3528] hover:text-white"
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 lg:mt-12 px-6 sm:px-8 lg:px-8 xl:px-12 2xl:px-16">
          <hr className="border-gray-400" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0 mt-6 lg:mt-8 pb-4 lg:pb-6 px-6 sm:px-8 lg:px-8 xl:px-12 2xl:px-16">
          <p className="text-white text-sm lg:text-base xl:text-lg text-center lg:text-left">
            Copyright © 2025 Houston Quran Academy.
          </p>
          <button className="h-10 lg:h-11 xl:h-12 w-36 lg:w-40 xl:w-44 bg-[#cf3528] cursor-pointer text-sm lg:text-base xl:text-lg text-center text-white rounded-lg hover:bg-white hover:text-[#cf3528] transition">
            Monefaction
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
