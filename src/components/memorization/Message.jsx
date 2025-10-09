import React from "react";

const Rooted = () => {
  return (
    <section className="w-full px-10 py-12 font-serif">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Left: Image - Order changes on mobile */}
        <div className="order-2 md:order-1 w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px]">
          <img
            src="/memorizaation/msg.jpg"
            alt="HQA Admissions Team"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Right: Text Card - Order changes on mobile */}
        <div className="order-1 md:order-2 bg-[#00285E] flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full ">
          {/* Heading with white border-left */}
          <h2 className="border-l-4 md:border-l-[6px] border-[#FAF1C4] pl-2 md:pl-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl italic text-white mb-4 md:mb-6 leading-snug">
            More Than Memorization
            <p className="text-2xl">
              A Journey of Understanding, Connection, and Leadership{" "}
            </p>
          </h2>

          {/* Three paragraphs */}
          <div className="space-y-3 md:space-y-4">
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              At Houston Quran Academy, our Quran Memorization Program isn’t
              just about memorizing verses. It’s about nurturing future scholars
              and leaders who live by the Quran’s teachings. Our approach is
              rooted in understanding, reflection, and personal
              development—guiding each student to connect deeply with the words
              of Allah and apply its wisdom in daily life.
            </p>
            <p className="text-red-700  bg-white px-6 py-2 inline-block">
              About Us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooted;
