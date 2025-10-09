import React from "react";

const Programs = () => {
  return (
    <section className="w-full font-serif py-12 px-6 lg:px-16">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl italic text-center mb-12 text-red-700">
        Special Programs & Initiatives{" "}
      </h2>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Side - Text */}
        <div className="space-y-4 text-gray-700 max-w-4xl text-base leading-relaxed">
          {/* Card 1 */}
          <div className="border-2 border-[#BCDDFC] rounded-lg p-3 w-full shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
            <div className="flex gap-2">
              <span className="text-4xl font-bold text-[#00285E]">1.</span>
              <div>
                <h3 className="text-2xl font-semibold text-[#252626]">
                  Mentorship Programs
                </h3>
                <p className="mt-2 text-sm">
                  Connecting students with positive role models for guidance and
                  support.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border-2 border-[#00285E] rounded-lg p-3 w-full shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
            <div className="flex gap-2">
              <span className="text-4xl font-bold text-[#00285E]">2.</span>
              <div>
                <h3 className="text-2xl font-semibold text-[#252626]">
                  Leadership Development Workshops
                </h3>
                <p className="mt-2 text-sm">
                  Equipping students with the skills to become effective leaders
                  within their communities.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border-2 border-[#BCDDFC] rounded-lg p-3 w-full shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
            <div className="flex gap-2">
              <span className="text-4xl font-bold text-[#00285E]">3.</span>
              <div>
                <h3 className="text-2xl font-semibold text-[#252626]">
                  Career Exploration Days
                </h3>
                <p className="mt-2 text-sm">
                  Introducing students to various professions and helping them
                  consider future paths.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border-2 border-[#00285E] rounded-lg p-3 w-full shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
            <div className="flex gap-2">
              <span className="text-4xl font-bold text-[#00285E]">4.</span>
              <div>
                <h3 className="text-2xl font-semibold text-[#252626]">
                  Health & Wellness Programs
                </h3>
                <p className="mt-2 text-sm">
                  Promoting physical and mental well-being through workshops and
                  activities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image with overlap effect */}
        <div className="relative flex justify-center mb-12 mt-14 md:mt-0">
          {/* Blue bordered div (pushed down a bit) */}
          <div className="w-100 h-100 border-4 border-[#00285E] rounded-tr-[80px] translate-y-8 relative">
            {/* Overlapping blue filled div */}
            <div className="absolute -top-6 -left-2 w-86 md:w-96 h-104 bg-[#00285E] rounded-tr-[100px] flex items-center justify-center shadow-lg">
              <img
                src="/academics/growth.png"
                alt="Growth"
                className="w-82 md:w-92 h-142 bottom-0 right-2 absolute object-cover rounded-tr-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
