import React from "react";

const Rooted = () => {
  return (
    <section className="w-full px-10 py-12 font-serif">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Left: Image - Order changes on mobile */}
        <div className="order-2 md:order-1 w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[390px]">
          <img
            src="/alumni/msg.jpg"
            alt="HQA Admissions Team"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Right: Text Card - Order changes on mobile */}
        <div className="order-1 md:order-2 bg-[#00285E] flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full ">
          {/* Heading with white border-left */}
          <h2 className="border-l-4 md:border-l-[6px] border-[#FAF1C4] pl-2 md:pl-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl italic text-white mb-4 md:mb-6 leading-snug">
            This is Your Society of <br /> Alumni
          </h2>

          {/* Three paragraphs */}
          <div className="space-y-3 md:space-y-4">
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              The HQA Society of Alumni (SOA) is more than a network — it’s a
              lifelong bond. Whether you were part of our first graduating class
              or just recently received your diploma, you are the living spirit
              of HQA’s mission.
            </p>
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              Together, we honor the past, uplift the present, and shape the
              future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooted;
