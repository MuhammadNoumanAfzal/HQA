import React from "react";

const Rooted = () => {
  return (
    <section className="w-full px-10 py-12 font-serif">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[500px] lg:h-[550px]">
        {/* Left: Image */}
        <div className="order-2 md:order-1 w-full h-full">
          <img
            src="/leadership/msg.jpg"
            alt="HQA Admissions Team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text Card */}
        <div className="order-1 md:order-2 bg-[#00285E] flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full">
          {/* Heading with white border-left */}
          <h2 className="border-l-4 md:border-l-[6px] border-[#FAF1C4] pl-2 md:pl-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl italic text-white mb-4 md:mb-6 leading-snug">
            Rooted in Faith. Driven by Purpose. Leading with Integrity.
          </h2>

          {/* Three paragraphs */}
          <div className="space-y-3 md:space-y-4">
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              At Houston Quran Academy, leadership is more than structure — it’s
              a sacred trust. It is a commitment to nurturing generations
              through academic excellence, strong Islamic values, and moral
              leadership.
            </p>
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              Our Board of Trustees and School Administration operate as a
              united force — blending strategic vision with day-to-day
              dedication to provide a learning environment that inspires,
              empowers, and uplifts.
            </p>
            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed">
              “Great schools are built by great leaders. And we are honored to
              be guided by those who lead with faith, serve with humility, and
              build with vision.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooted;
