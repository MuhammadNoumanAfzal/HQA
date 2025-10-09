const Slogan = () => {
  return (
    <section className="flex justify-center items-center py-12  sm:px-10 font-serif">
      {/* Wrapper with responsive width */}
      <div className="relative w-[96%] bg-[#BCDDFC] bg-cover bg-center py-6 flex flex-col items-center justify-center text-center rounded-lg shadow-lg">
        {/* Top Divider with logo */}
        <div className="relative w-full flex items-center justify-center mb-16 md:mb-20">
          <div className="flex-shrink-0 px-4">
            <img
              src="/logo.png"
              alt="Heritage Logo"
              className="h-20 w-20 mx-auto"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-800 max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4 md:px-6 mb-4">
          “Our Board believes that a strong Islamic education doesn’t just
          prepare students for college — it prepares them for life and the
          Hereafter.”
        </p>
        <p className="text-gray-800 max-w-3xl font-bold text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-12 px-4">
          — Chairman of Board
        </p>

        {/* Bottom Divider with comma icon */}
        <div className="relative w-full flex items-center justify-center mt-8">
          <div className="flex-grow h-px bg-white mr-4 max-w-[50%]"></div>
          <div className="flex-shrink-0 px-4">
            <img
              src="/rcommaa.png"
              alt="Quote Icon"
              className="h-10 w-10 mx-auto"
            />
          </div>
          <div className="flex-grow h-px bg-white ml-4 max-w-[50%]"></div>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
