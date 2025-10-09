import React from "react";

const Aid = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 px-10 flex items-center justify-center text-center font-serif"
      style={{ backgroundImage: "url('/admission/aid.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#012974]/80"></div>

      {/* Content */}
      <div className="relative w-full max-w-4xl flex flex-col items-center justify-center">
        {/* Title */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic  leading-snug mb-6">
          Tuition & Financial Aid
        </h1>

        {/* Description */}
        <p className="text-white text-xl sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 px-2">
          We are committed to making Islamic education accessible. Need-based
          scholarships and sibling discounts are available.
        </p>
        <p className="text-white text-xl sm:text-base md:text-lg leading-relaxed mb-8 px-2">
          Visit our Tuition & Aid page for details.
        </p>

        {/* Button */}
        <button className="text-[#CF3528] rounded-md  bg-white font-semibold px-6 sm:px-8 py-3  shadow-md transition-all duration-300 text-sm sm:text-base md:text-lg cursor-pointer">
          Tuition & Aid
        </button>
      </div>
    </section>
  );
};

export default Aid;
