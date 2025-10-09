import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Values = () => {
  return (
    <section className="w-full font-serif py-12 px-10">
      {/* Top Heading + Paragraph */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl italic">
          <span className="text-[#00285E]">Academic Excellence </span>
          <span className="text-[#CF3528]">with Islamic Values</span>
        </h2>
        <p className="text-gray-800 text-lg sm:text-xl leading-relaxed mt-6 max-w-6xl mx-auto text-center">
          HQA High School offers a powerful blend of college-preparatory
          curriculum and faith-based learning. Our curriculum aligns with Texas
          graduation standards, and all students complete the Distinguished
          Level of Achievement, qualifying them for top-tier college admissions.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Content */}
        <div className="space-y-6 text-gray-800">
          <h3 className="text-2xl text-[#00285E] italic">
            Core Areas of Study (Credits Required):
          </h3>

          <div>
            <h4 className="font-semibold text-[#00285E]">English (4)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>English I–IV</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">Social Studies (3)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                World History, U.S. History, World Geography, Government &
                Economics
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">Math (4)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Algebra I, Algebra II, Geometry, Pre-Calculus</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">Science (4)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Biology, Chemistry, Physics, Earth & Space Science</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">
              Physical Education (1)
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Physical Fitness, Outdoor/Adventure</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">Fine Arts (1)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Art or Digital Art</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">Speech (0.5)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Communication</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">
              Foreign Language (3)
            </h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Arabic I–III</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#00285E]">Electives (7)</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Quran Studies, Religion, Leadership, Yearbook, and more</li>
            </ul>
          </div>

          {/* Button */}
          <button className="mt-6 flex items-center gap-2 border border-[#CF3528] text-[#CF3528] px-6 py-2 rounded-lg bg-white hover:bg-[#CF3528] hover:text-white transition">
            View Detailed Graduation Plan <FaArrowRight />
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center">
          <img
            src="/histroy/img.png" // replace with correct path
            alt="Student"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Values;
