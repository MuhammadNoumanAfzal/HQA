import React from "react";

const Growth = () => {
  return (
    <section className="w-full font-serif py-12 px-6 lg:px-16">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl  italic text-center mb-12 text-[#00285E]">
        Designed for Your Growth
      </h2>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
        {/* Left Side - Image with overlap effect */}
        <div className="relative flex justify-center mb-12">
          {/* Blue bordered div (pushed down a bit) */}
          <div className="w-100 h-100 border-4 border-[#00285E] rounded-tr-[80px] translate-y-8 relative">
            {/* Overlapping blue filled div */}
            <div className="absolute -top-6 -left-2 w-86 md:w-96 h-104 bg-[#00285E] rounded-tr-[100px] flex items-center justify-center shadow-lg">
              <img
                src="/academics/growth.png"
                alt="Growth"
                className=" w-82 md:w-92 h-142 bottom-0 right-2  absolute object-cover rounded-tr-[60px]"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Whether your child is mastering advanced math, progressing through
            Hifz, or exploring subjects that inspire future college and career
            goals, Houston Quran Academy offers a flexible and enriching
            curriculum tailored to each learner.
          </p>
          <p>
            From Qur’anic memorization and Islamic studies to rigorous
            academics—including advanced science, math, and humanities—our
            programs are designed to support your child’s unique strengths and
            aspirations. With dedicated teachers and a values-driven
            environment, your child will be equipped to succeed in high school,
            college, and life—with confidence, faith, and purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Growth;
