import React from "react";

const Cta = () => {
  return (
    <section className="bg-[#BCDDFC] py-20 px-6 flex flex-col items-center justify-center text-center font-serif">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl italic text-[#00285E] mb-6">
        How to Apply
      </h2>

      {/* Paragraph 1 */}
      <p className="max-w-3xl text-xl italic text-gray-800 leading-relaxed mb-6 font-bold">
        Ready to take the next step? Please send your resume to:
      </p>

      {/* Paragraph 2 */}
      <p className="max-w-3xl text-xl italic text-gray-800 leading-relaxed mb-6">
        <span className="">Sr. Shamima Khalid</span> <br />
        <a
          href="mailto:skhalid@hquranacademy.org"
          className=" font-medium text-xl hover:underline"
        >
          skhalid@hquranacademy.org
        </a>
      </p>

      {/* Paragraph 3 */}
      <p className="max-w-3xl text-xl text-gray-800 leading-relaxed">
        We will contact you if your qualifications align with our current needs.
      </p>
    </section>
  );
};

export default Cta;
