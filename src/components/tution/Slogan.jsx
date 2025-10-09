const Slogan = () => {
  return (
    <section className="relative bg-[#C8E1F8]  py-12  px-10 flex items-center justify-center text-center font-serif">
      {/* Content */}
      <div className="relative w-full  flex flex-col items-center justify-center">
        {/* Top Divider with logo */}
        <div className="relative w-full flex items-center justify-center mb-16 md:mb-20">
          <div className="flex-grow h-px bg-black mr-4 max-w-[50%]"></div>

          {/* Logo container */}
          <div className="flex-shrink-0 px-4">
            <img
              src="/logo.png"
              alt="Heritage Logo"
              className="h-20 w-20 mx-auto"
            />
          </div>
          <div className="flex-grow h-px bg-black ml-4 max-w-[50%]"></div>
        </div>
        <p className="text-black max-w-3xl text-3xl leading-relaxed px-4 md:px-6 mb-4">
          Parent Testimonial
        </p>

        {/* Description */}
        <p className="text-black max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4 md:px-6 mb-4">
          “As a working parent, I value the extended care and safe
          environment—HQA goes above and beyond.”
        </p>
        <p className="text-[#00285E] max-w-3xl font-bold text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-12 px-4">
          — Mr. Rahim, Parent of Two
        </p>

        {/* Bottom Divider with comma icon */}
        <div className="relative w-full flex items-center justify-center mt-8">
          {/* Left divider line */}
          <div className="flex-grow h-px bg-black mr-4 max-w-[50%]"></div>

          {/* Comma icon container */}
          <div className="flex-shrink-0 px-4">
            <img
              src="/bcommaa.png"
              alt="Quote Icon"
              className="h-10 w-10 mx-auto"
            />
          </div>

          {/* Right divider line */}
          <div className="flex-grow h-px bg-black ml-4 max-w-[50%]"></div>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
