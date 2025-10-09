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
      <footer className=" bg-[#00285E] min-h-screen lg:mr-20 font-serif rounded-tr-[40px] lg:rounded-tr-[70px]">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Column */}
          <div className="px-8 sm:px-12 lg:px-0 flex flex-col">
            <div className="flex flex-row  items-center gap-3 pt-12 lg:pt-24 lg:pl-24 text-center lg:text-left">
              <img src="/logo.png" className="h-20 lg:h-28" alt="logo" />
              <p className="text-white text-lg lg:text-2xl">
                Houston <br /> Quran <br /> Academy
              </p>
            </div>

            <p className="text-white pt-6 text-lg lg:text-xl lg:pl-24">
              <span className="block lg:hidden">
                Established in 2008, Houston Quran Academy is a nonprofit school
                for PK-12 Grades 1902 Baker Rd, Houston, Texas 77407
              </span>
              <span className="hidden lg:block">
                Established in 2008, Houston Quran <br />
                Academy is a nonprofit school for PK-12 <br />
                Grades 1902 Baker Rd, Houston, Texas <br />
                77407
              </span>
            </p>

            <p className="text-white pt-10 lg:pt-16 text-lg lg:text-xl lg:pl-24">
              281-717-4622
            </p>
            <p className="text-white pt-6 text-lg lg:text-xl lg:pl-24">
              Connect with Us
            </p>
            <div className="text-white text-2xl lg:text-3xl pt-3 flex gap-6 lg:pl-24">
              <FaFacebookF className="cursor-pointer hover:text-[#cf3528] transition" />
              <FaInstagram className="cursor-pointer hover:text-[#cf3528] transition" />
              <FaXTwitter className="cursor-pointer hover:text-[#cf3528] transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#cf3528] transition" />
            </div>

            {/* Move Middle Column for Mobile */}
            <div className="mt-8 lg:hidden space-y-5 px-0">
              <p className="text-white text-lg leading-relaxed">
                At Houston Quran Academy, every child’s journey is rooted in
                faith, knowledge, and character.
              </p>
              {["Employment", "Calendar", "Site Map", "Privacy Policy"].map(
                (item, i) => (
                  <p
                    key={i}
                    className="text-white border-b text-lg cursor-pointer hover:text-[#cf3528] transition w-fit"
                  >
                    {item}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Middle Column (Desktop Only) */}
          <div className="mt-12 lg:mt-24 space-y-5 lg:space-y-7 px-8 sm:px-12 lg:px-0 hidden lg:block">
            <p className="text-white text-lg lg:text-xl leading-relaxed">
              At Houston Quran Academy, every <br />
              child’s journey is rooted in faith, <br />
              knowledge, and character.
            </p>
            {["Employment", "Calendar", "Site Map", "Privacy Policy"].map(
              (item, i) => (
                <p
                  key={i}
                  className="text-white border-b text-lg lg:text-xl cursor-pointer hover:text-[#cf3528] transition w-fit"
                >
                  {item}
                </p>
              )
            )}
          </div>

          {/* Right Column */}
          <div className="mt-12 lg:mt-24 space-y-5 lg:space-y-7 px-8 sm:px-12 lg:px-0 lg:mr-20">
            <p className="text-white text-lg lg:text-xl leading-relaxed">
              Your support transforms lives, fueling <br />
              a future illuminated by knowledge <br />
              and guided by mercy. Together, we <br />
              rise to build a world where <br />
              compassion, wisdom, and excellence <br />
              lead the way.
            </p>
            <div className="flex flex-col gap-4">
              {["Inquire", "Visit", "Apply", "Donate"].map((btn, i) => (
                <button
                  key={i}
                  className={`h-12 w-36 lg:h-14 lg:w-40 rounded-lg cursor-pointer text-lg lg:text-xl  transition ${
                    btn === "Donate"
                      ? "bg-[#cf3528]  text-white hover:bg-white hover:text-[#cf3528]"
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
        <div className="mt-10 lg:mt-14 px-8 sm:px-12 lg:px-0 lg:pr-12 lg:pl-12">
          <hr className="border-gray-400" />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 mt-8 pb-4">
          <p className="text-white text-lg lg:text-xl text-center lg:text-left lg:ml-24">
            Copyright © 2025 Houston Quran Academy.
          </p>
          <button className="h-12 w-40 lg:h-14 lg:w-44 bg-[#cf3528] cursor-pointer text-lg lg:text-xl text-center text-white rounded-lg hover:bg-white hover:text-[#cf3528] lg:mr-20 transition ">
            Monefaction
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
