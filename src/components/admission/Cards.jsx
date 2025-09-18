import React from "react";

export default function Cards() {
  const stats = [
    {
      title: "Admission Open:",
      date: "Jan 10",
      bg: "#FFFF", // red
      titleColor: "#CF3528", // light yellow text on blue
      dateColor: "#252626",
    },
    {
      title: "Priority Deadline:",
      date: "March 15th",
      bg: "#E3F1FF", // blue
      titleColor: "#00285E", // light yellow text on blue
      dateColor: "#252626",
    },
    {
      title: "Final Deadline:",
      date: "June 1st",
      bg: "#FFFF", // red
      titleColor: "#CF3528", // light yellow text on blue
      dateColor: "#252626",
    },
    {
      title: "Rolling Admissions:",
      date: "Availability",
      bg: "#E3F1FF", // blue
      titleColor: "#00285E", // light yellow text on blue
      dateColor: "#252626",
    },
  ];

  return (
    <section className="bg-white pt-16 md:pt-24 pb-16 md:pb-30 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10 font-serif">
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl mb-12 md:mb-18 md:text-5xl lg:text-6xl italic leading-snug px-2 text-[#CF3528]">
          Important Dates
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-2 justify-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-xl cursor-pointer md:rounded-2xl shadow-md px-6 py-6 md:px-20 md:py-6 flex flex-col items-center justify-center mx-auto w-full md:max-w-[220px] transition-all border-2 border-gray-300 duration-300 hover:scale-105"
              style={{ backgroundColor: item.bg }}
            >
              <h3
                className="text-xl sm:text-2xl md:text-3xl italic mb-4 md:mb-6 text-center"
                style={{ color: item.titleColor }}
              >
                {item.title}
              </h3>
              <p
                className="text-base sm:text-lg md:text-lg font-medium text-center"
                style={{ color: item.dateColor }}
              >
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
