import React from "react";
import { FaPhoneAlt, FaBuilding } from "react-icons/fa";

const Question = () => {
  return (
    <section className="py-12 px-10 font-serif bg-[#FFFDF5] text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl italic text-[#00285E] mb-6">
        Still Have <span className="text-[#CF3528]">Questions?</span>
      </h2>
      <p className="text-gray-600 mb-10 text-xl">We’re here to help!</p>

      {/* Cards Container */}
      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
        {/* Card 1 */}
        <div className="rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <div className="bg-[#00285E] text-white p-4 rounded-full mb-4">
            <FaPhoneAlt size={24} />
          </div>
          <p className="text-gray-800 text-lg">
            Prefer to speak directly? Call us at <br />
            <span className="text-[#CF3528] font-semibold">281-717-4622</span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <div className="bg-[#00285E] text-white p-4 rounded-full mb-4">
            <FaBuilding size={24} />
          </div>
          <p className="text-gray-800 text-lg">
            Want to visit? <br />
            <span className="text-[#CF3528] font-semibold cursor-pointer hover:underline">
              here
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Question;
