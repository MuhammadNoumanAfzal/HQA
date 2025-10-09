import React from "react";

const Community = () => {
  return (
    <section className="w-full font-serif py-12 px-10">
      {/* FIRST BLOCK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl italic mb-4">
            <span className="text-red-700">Community Involvement</span> & <br />
            <span className="text-[#00285E]">Service Learning</span>
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Our students actively contribute to society through various charity
            drives, volunteering initiatives, and outreach programs. We nurture
            a spirit of giving and a commitment to making a positive difference
            in the world, instilling the importance of being active and
            compassionate members of society. This includes local community
            clean-ups, visits to shelters, and participation in global relief
            efforts.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">
          {/* Blue Background */}
          <div className="bg-[#00285E] rounded-2xl w-[90%] h-full absolute top-2 left-6 sm:top-4 sm:left-10 md:left-20"></div>

          {/* Image */}
          <img
            src="/student/community.jpg"
            alt="Community Involvement"
            className="relative z-10 rounded-2xl shadow-lg w-[90%] object-cover"
          />
        </div>
      </div>

      {/* SECOND BLOCK */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-26 items-center mt-16">
        {/* RIGHT SIDE */}
        <div className="relative flex justify-center order-1 md:order-none">
          {/* Blue Background */}
          <div className="bg-[#00285E] rounded-2xl w-[90%] h-full absolute top-2 left-6 sm:top-4 sm:left-10 md:left-20"></div>

          {/* Image */}
          <img
            src="/student/community.jpg"
            alt="Community Involvement"
            className="relative z-10 rounded-2xl shadow-lg w-[90%] object-cover"
          />
        </div>

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl italic mb-4">
            <span className="text-red-700">Community Involvement</span> & <br />
            <span className="text-[#00285E]">Service Learning</span>
          </h2>
          <p className="text-gray-700 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Our students actively contribute to society through various charity
            drives, volunteering initiatives, and outreach programs. We nurture
            a spirit of giving and a commitment to making a positive difference
            in the world, instilling the importance of being active and
            compassionate members of society. This includes local community
            clean-ups, visits to shelters, and participation in global relief
            efforts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
