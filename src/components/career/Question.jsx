import React from "react";

const Question = () => {
  return (
    <section className=" py-20 px-6 flex flex-col items-center justify-center text-center font-serif">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl italic text-[#CF3528] mb-12">
        Questions?{" "}
      </h2>

      {/* Paragraph 3 */}
      <p className="max-w-3xl text-lg text-gray-800 leading-relaxed mb-12">
        Reach out to our HR department for more information:{" "}
      </p>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl italic text-[#CF3528] mb-6">
        281-717-4877 <br />
        <br />
        hr@hqafund.org
      </h2>
    </section>
  );
};

export default Question;
