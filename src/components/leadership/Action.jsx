import React from "react";

const Action = () => {
  return (
    <section className="w-full px-6 sm:px-8 md:px-10 py-12 font-serif bg-[#00285E]">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left: Text (smaller width on desktop) */}
        <div className="order-2 md:order-1 flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 w-full h-full md:col-span-2">
          {/* Heading */}
          <h2 className="border-l-4 md:border-l-[6px] border-[#FAF1C4] pl-3 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl italic text-white mb-4 md:mb-6 leading-snug">
            Leadership in Action
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4">
            <p className="text-white text-base sm:text-lg md:text-lg leading-relaxed">
              Whether in the boardroom or the classroom, our leaders model
              excellence, faith, and service. Their impact reaches far beyond
              policies — they build culture, set standards, and shape futures.
            </p>
            <p className="text-white text-base sm:text-lg md:text-lg leading-relaxed">
              “Transformational education starts with transformational
              leadership — and ours is rooted in the Prophetic example of
              compassion, justice, and vision.”
            </p>
          </div>
        </div>

        {/* Right: Image (larger width on desktop) */}
        <div className="order-1 md:order-2 w-full h-56 sm:h-64 md:h-80 xl:h-[450px] md:col-span-3">
          <img
            src="/leadership/action.jpg"
            alt="HQA Admissions Team"
            className="w-full h-full rounded-md object-cover shadow-[0_0_25px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Action;
