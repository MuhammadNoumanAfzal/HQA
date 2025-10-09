const SloganParallax = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1C2955CC]" />

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 w-full max-w-5xl">
        <h2
          className="text-white font-serif italic leading-snug sm:leading-normal md:leading-snug
                     text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Nurturing Faith, Knowledge {""}
          <br className="hidden sm:block" />
          and Tomorrow&apos;s Leaders
        </h2>
      </div>
    </section>
  );
};

export default SloganParallax;
