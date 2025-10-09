const Slogan = () => {
  return (
    <section
      className="relative bg-cover bg-center py-12  px-10 flex items-center justify-center text-center font-serif"
      style={{ backgroundImage: "url('/admission/slogan.jpg')" }}
    >
      {/* Red Overlay */}
      <div className="absolute inset-0 bg-red-700/70"></div>

      {/* Content */}
      <div className="relative w-full  flex flex-col items-center justify-center">
        {/* Top Divider with logo */}
        <div className="relative w-full flex items-center justify-center mb-16 md:mb-20">
          {/* Logo container */}
          <div className="flex-shrink-0 px-4">
            <img
              src="/logo.png"
              alt="Heritage Logo"
              className="h-20 w-20 mx-auto"
            />
          </div>
        </div>
        <p className="text-white max-w-3xl text-3xl leading-relaxed px-4 md:px-6 mb-4">
          Parent Testimonial
        </p>

        {/* Description */}
        <p className="text-white max-w-5xl text-xl leading-relaxed px-4 md:px-6 mb-4">
          “The open-door policy here makes every voice matter. Administrators,
          teachers, and students engage openly—fostering trust, collaboration,
          and a genuine sense of belonging.”
        </p>
        <p className="text-white max-w-3xl font-bold text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-12 px-4">
          — HQA Parent{" "}
        </p>

        {/* Bottom Divider with comma icon */}
        <div className="relative w-full flex items-center justify-center mt-8">
          {/* Left divider line */}
          <div className="flex-grow h-px bg-white mr-4 max-w-[50%]"></div>

          {/* Comma icon container */}
          <div className="flex-shrink-0 px-4">
            <img
              src="/admission/wcommaa.png"
              alt="Quote Icon"
              className="h-10 w-10 mx-auto"
            />
          </div>

          {/* Right divider line */}
          <div className="flex-grow h-px bg-white ml-4 max-w-[50%]"></div>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
