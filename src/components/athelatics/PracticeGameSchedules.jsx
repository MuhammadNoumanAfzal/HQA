import React from "react";

const PracticeGameSchedules = () => {
  const images = {
    big: "/athelatics/p1.jpg",
    small: [
      "/athelatics/p2.jpg",
      "/athelatics/p3.jpg",
      "/athelatics/p4.jpg",
      "/athelatics/p5.jpg",
    ],
  };

  return (
    <section className="w-full px-5 sm:px-10 py-12 font-serif relative">
      {/* Dark blue background at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-60 bg-[#00285E] -z-20"></div>

      {/* Light strip on top of blue background */}
      <div className="absolute bottom-60 left-0 w-full h-20 bg-[#BCDDFC] -z-10"></div>

      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl italic mb-4 text-[#00285E]">
        Practice & Game Schedules
      </h2>

      {/* Paragraph */}
      <p className="text-center max-w-3xl mx-auto mb-10 text-lg text-gray-700">
        Our athletics department maintains an organized and accessible schedule
        for practices, games, and tournaments. Weekly calendars are posted in
        advance for parents and students. Stay updated through our school app
        and official announcements.
      </p>

      {/* Gallery */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 relative z-10">
        {/* Big Image */}
        <div className="lg:w-2/5 w-full mb-4 lg:mb-0">
          <img
            src={images.big}
            alt="Big Highlight"
            className="w-full h-full rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* 4 Small Images */}
        <div className="lg:w-3/5 w-full grid grid-cols-2 sm:grid-cols-2 gap-4">
          {images.small.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-40 sm:h-78 object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeGameSchedules;
