const FaqsHead = () => {
  return (
    <section className=" py-12 px-10 flex flex-col items-center text-center font-serif">
      {/* Divider with logo */}
      <div className="relative w-[95%] flex items-center justify-center mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <span className="relative bg-[#fdfbf7] px-4">
          <img
            src="/logo.png"
            alt="Heritage Logo"
            className="h-12 w-12 mx-auto"
          />
        </span>
      </div>

      <h2 className="text-[#CF3528] text-2xl sm:text-3xl font-serif italic mb-4">
        Frequently Asked Questions{" "}
      </h2>

      {/* Description */}
      <p className="text-gray-800 max-w-4xl text-sm sm:text-base text-center mx-auto">
        Welcome to the HQA FAQ page. Here you'll find answers to some of the
        most commonly asked questions by parents and prospective families. If
        you don’t find what you’re looking for, feel free to{" "}
        <span className="font-semibold">Contact Us</span> directly.
      </p>
    </section>
  );
};

export default FaqsHead;
