import React from "react";

const AdmissionDates = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center py-12 px-10 font-serif"
      style={{ backgroundImage: "url('/enrollement/grid.png')" }}
    >
      <div className=" flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        {/* Left Side Content */}
        <div className="flex-1 space-y-6">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#00285E] ">
            Important Admission <br /> Dates For 2026
          </h2>

          {/* Re-Enrolment */}
          <div className="bg-white shadow-md  p-4 rounded-md">
            <p className="text-gray-800">
              Re-Enrolment Opens:{" "}
              <span className="font-semibold">February 12, 2026</span>
            </p>
          </div>

          {/* Admission Test Dates */}
          <div className="bg-[#EAF3FF] shadow-md  p-4 rounded-md">
            <p className="text-gray-800 font-medium mb-2">
              Admission Test Dates:
            </p>
            <ul className="list-disc list-inside text-[#00285E] space-y-1">
              <li>
                <span className="font-semibold">December 10, 2026</span>
              </li>
              <li>
                <span className="font-semibold">February 8, 2026</span>
              </li>
              <li>
                <span className="font-semibold">March 2, 2026</span>
              </li>
            </ul>
          </div>

          {/* Test Fee */}
          <div className="bg-[#DFF5E1] shadow-md p-4 rounded-md">
            <p className="text-gray-800">
              Admission Test Fee:{" "}
              <span className="font-semibold">$50 per child</span>
            </p>
          </div>

          {/* Note */}
          <div className="bg-[#FFF5E6] shadow-md p-4 rounded-md">
            <p className="text-gray-800">
              Seats are limited. Early applications are strongly encouraged.
            </p>
          </div>
        </div>

        {/* Right Side - Overlapping Circles */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-[280px] h-[280px] flex items-center justify-center mt-28">
            {/* Left Image (in front of Right) */}
            <img
              src="/enrollement/p1.jpg"
              alt="p1"
              className="w-52 h-52 rounded-full object-cover border-4 border-red-800 shadow-lg absolute -left-22 top-1/2 transform -translate-y-1/2 z-20"
            />
            {/* Right Image (behind Left) */}
            <img
              src="/enrollement/p2.jpg"
              alt="p2"
              className="w-52 h-52 rounded-full object-cover border-4 border-orange-500 shadow-lg absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
            />
            {/* Bottom Image (on top of both) */}
            <img
              src="/enrollement/p3.jpg"
              alt="p3"
              className="w-52 h-52 rounded-full object-cover border-4 border-blue-600 shadow-lg absolute bottom-0 left-20 transform -translate-x-1/2 translate-y-1/2 z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionDates;
