const Slogan = () => {
  return (
    <section className="bg-[#BCDDFC] py-12  px-10 flex flex-col items-center text-center font-serif">
      {/* Divider with logo */}
      <div className="relative w-full max-w-5xl flex items-center justify-center mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white"></div>
        </div>
        <span className="relative bg-[#fdfbf7] px-4">
          <img
            src="/logo.png"
            alt="Heritage Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 mx-auto"
          />
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-800 max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed px-2">
        “As a working parent, I value the extended care and safe environment—HQA
        goes above and beyond.”
      </p>
      <p className="text-gray-800 max-w-3xl font-bold text-sm sm:text-base md:text-lg leading-relaxed mt-2 px-2">
        — Samir Khan, Class of 2021
      </p>

      {/* Bottom Divider with Logo */}
      <div className="relative w-full max-w-5xl flex items-center justify-center mt-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#00285E]"></div>
        </div>
        <span className="relative bg-[#fdfbf7] px-4">
          <img
            src="/about/comma.png"
            alt="Future Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 mx-auto"
          />
        </span>
      </div>
    </section>
  );
};

export default Slogan;
