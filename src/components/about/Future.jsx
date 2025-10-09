import React from "react";

const Future = () => {
  return (
    <section className="bg-[#BCDDFC] min-h-[80vh] py-12 px-10 flex flex-col items-center justify-center text-center font-serif">
      <div className="relative w-full flex items-center justify-center mb-12 ">
        {/* Left divider line */}
        <div className="flex-grow h-px bg-white mr-4 max-w-[50%]"></div>

        {/* Comma icon container */}
        <div className="flex-shrink-0 px-4">
          <img
            src="/about/comma.png"
            alt="Quote Icon"
            className="h-10 w-10 mx-auto"
          />
        </div>

        {/* Right divider line */}
        <div className="flex-grow h-px bg-white ml-4 max-w-[50%]"></div>
      </div>

      {/* Title */}
      <h2 className="text-5xl font-serif italic mb-4 text-[#00285E]">
        Our Vision For the Future
      </h2>

      {/* Description */}
      <p className="text-gray-800 max-w-4xl text-xl leading-relaxed">
        At HQA, we’re preparing a generation of leaders who are academically
        equipped, morally grounded, and spiritually aware. We envision a future
        where our students uplift their communities and contribute meaningfully
        to society, rooted in faith and knowledge.
      </p>
      <p className="text-gray-800 max-w-4xl text-xl leading-relaxed mt-10">
        We continuously evolve—embracing innovation, improving our curriculum,
        and expanding opportunities to ensure every student thrives in a
        complex, ever-changing world.
      </p>
    </section>
  );
};

export default Future;
