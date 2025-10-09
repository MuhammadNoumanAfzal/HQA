import React from "react";

const Milestone = () => {
  return (
    <section className="w-full font-serif py-12 px-10 bg-[#D8ECFF]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side (Text) */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl  italic text-[#00285E] leading-snug">
            Behind Every Milestone <br />
            <span className="text-[#CF3528]">Is a Movement</span>
          </h2>

          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            Our success is written by people—visionary board members, incredible
            teachers, volunteers, and families who believed in the mission.
          </p>

          <p className="italic text-gray-800 text-base sm:text-lg leading-relaxed">
            “Every brick was placed with du’a. Every decision made with the
            future of our Ummah in mind.”
          </p>
        </div>

        {/* Right Side (Image with Background Shape) */}
        <div className="relative flex justify-center mb-12 mt-14 md:mt-0">
          {/* Blue bordered div (pushed down a bit) */}
          <div className="w-100 h-100 border-4 border-[#00285E] rounded-tr-[80px] translate-y-8 relative">
            {/* Overlapping blue filled div */}
            <div className="absolute -top-6 -left-2 w-78 md:w-96 h-104 bg-[#00285E] rounded-tr-[100px] flex items-center justify-center shadow-lg">
              <img
                src="/academics/growth.png"
                alt="Growth"
                className="w-78 md:w-92 h-142 bottom-0 right-2 absolute object-cover rounded-tr-[60px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestone;
