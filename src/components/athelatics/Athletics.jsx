import React from "react";

const Teams = () => {
  const sports = [
    { id: 1, img: "/athelatics/t1.gif", text: "Soccer (Boys & Girls)" },
    { id: 2, img: "/athelatics/t2.gif", text: "Basketball (Boys & Girls)" },
    { id: 3, img: "/athelatics/t3.gif", text: "Track & Field" },
  ];

  return (
    <section className="w-full px-10 py-12 font-serif">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl  italic mb-6 text-[#00285E]">
        Our Teams
      </h2>

      {/* Intro Paragraph */}
      <p className="text-center max-w-3xl mx-auto mb-10 text-lg text-gray-700">
        From spirited matches to championship-level tournaments, our
        student-athletes at HQA proudly represent our values on the field and
        the court. We offer a focused selection of athletic programs that
        promote physical wellness, teamwork, and leadership:
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {sports.map((sport) => (
          <div
            key={sport.id}
            className="border border-black rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer 
                       hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img
              src={sport.img}
              alt={sport.text}
              className="w-32 h-32 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              {sport.text}
            </h3>
          </div>
        ))}
      </div>

      {/* Closing Paragraph */}
      <p className="text-center max-w-3xl mx-auto mt-12 text-lg text-gray-700">
        Each sport is led by committed coaches who emphasize discipline,
        sportsmanship, and fair play—while supporting students in maintaining
        high academic standards and strong Islamic character.
      </p>
    </section>
  );
};

export default Teams;
