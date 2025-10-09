const Slogan = () => {
  return (
    <section
      className="relative bg-cover bg-center py-12 px-10 flex items-center justify-center text-center font-serif"
      style={{ backgroundImage: "url('/enrollement/slogan.jpg')" }}
    >
      {/* Red Overlay */}
      <div className="absolute inset-0 bg-red-700/70"></div>

      {/* Content */}
      <div className="relative w-full  flex flex-col items-center justify-center">
        {/* Top Divider with logo */}
        <div className="relative w-full flex items-center justify-center mb-16 md:mb-20">
          {/* Left divider line */}
          <div className="flex-grow h-px bg-white mr-4 max-w-[50%]"></div>

          {/* Logo container */}
          <div className="flex-shrink-0 px-4">
            <img
              src="/logo.png"
              alt="Heritage Logo"
              className="h-16 w-16 mx-auto"
            />
          </div>

          {/* Right divider line */}
          <div className="flex-grow h-px bg-white ml-4 max-w-[50%]"></div>
        </div>

        {/* Description */}
        <p className="text-white max-w-4xl text-xl leading-relaxed px-4 md:px-6 mb-4">
          "My years at HQA built my confidence to lead projects and advocate for
          my peers. The school's emphasis on public speaking and service shaped
          me into a proactive community member."
        </p>
        <p className="text-white max-w-3xl font-bold text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-12 px-4">
          — Samir Khan, Class of 2021
        </p>

        {/* Bottom Divider with comma icon */}
        <div className="relative w-full flex items-center justify-center mt-8 md:mt-16">
          {/* Left divider line */}
          <div className="flex-grow h-px bg-white mr-4 max-w-[50%]"></div>

          {/* Comma icon container */}
          <div className="flex-shrink-0 px-4">
            <img
              src="/admission/wcommaa.png"
              alt="Quote Icon"
              className="h-16 w-16 mx-auto"
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
