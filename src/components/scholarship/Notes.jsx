const Notes = () => {
  return (
    <section className="bg-[#FFFDF5] pb-[180px] py-12 px-10 flex flex-col items-center text-center font-serif">
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

      <h2 className="text-[#252626] text-2xl sm:text-3xl font-serif italic mb-4">
        Important Enrolment Notes
      </h2>

      {/* Description */}
      <ul className="text-gray-800 max-w-4xl text-sm sm:text-base leading-relaxed list-disc pl-6 text-left space-y-2">
        <li>
          Enrolment is first-come, first-served. Prompt action at each step is
          crucial.
        </li>
        <li>
          For support or clarification, reach out to our Admissions Office at{" "}
          <a
            href="mailto:skhalid@hquranacademy.org"
            className="text-blue-600 underline"
          >
            skhalid@hquranacademy.org
          </a>{" "}
          or call <span className="font-semibold">281 717 4622</span>.
        </li>
      </ul>
    </section>
  );
};

export default Notes;
