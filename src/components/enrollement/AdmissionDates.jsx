import React from "react";

const AdmissionDates = () => {
  return (
    <section className="relative w-full bg-[#BCDDFC] py-12 px-4 sm:px-6 md:px-10 font-serif overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left Side Content */}
        <div className="flex-1 space-y-6 w-full">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#00285E] text-center md:text-left">
            Important Admission <br className="hidden sm:block" /> Dates For
            2026
          </h2>

          {/* Re-Enrolment */}
          <div className="bg-white shadow-md p-4 rounded-md">
            <p className="text-gray-800">
              Re-Enrolment Opens:{" "}
              <span className="font-semibold">February 12, 2026</span>
            </p>
          </div>

          {/* Admission Test Dates */}
          <div className="bg-white shadow-md p-4 rounded-md">
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
        <div className="flex-1 flex justify-center items-center w-full mt-8 md:mt-0">
          <div className="relative w-full max-w-xs h-64 sm:h-80 md:h-96 flex items-center justify-center">
            {/* Left Image (in front of Right) */}
            <img
              src="/enrollement/p1.jpg"
              alt="p1"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full object-cover border-4 border-red-800 shadow-lg absolute left-0 top-1/2 transform -translate-y-1/2 z-20"
            />
            {/* Right Image (behind Left) */}
            <img
              src="/enrollement/p2.jpg"
              alt="p2"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full object-cover border-4 border-orange-500 shadow-lg absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
            />
            {/* Bottom Image (on top of both) */}
            <img
              src="/enrollement/p3.jpg"
              alt="p3"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-600 shadow-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-0 z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionDates;
