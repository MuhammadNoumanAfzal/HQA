import React from "react";

const SignatureCenters = () => {
  const cards = [
    {
      img: "/academics/l1.jpg",
      title: "Hifz Excellence Center",
      text: "Individualized Tajweed instruction, 1:1 mentorship, and surah comprehension tests—ensuring hafiz graduates who live the Quran’s lessons.",
    },
    {
      img: "/academics/l2.jpg",
      title: "STEM & Innovation Hub",
      text: "State-of-the-art labs for robotics, coding, and scientific inquiry—where students prototype solutions to real-world problems.",
    },
    {
      img: "/academics/l3.jpg",
      title: "STEM Robotics Lab",
      text: "Robotics, coding, and engineering challenges designed to inspire problem-solving and teamwork skills.",
    },
    {
      img: "/academics/l4.jpg",
      title: "Language Arts Center",
      text: "Focused development of communication, writing, and public speaking skills in both English and Arabic.",
    },
    {
      img: "/academics/l5.jpg",
      title: "College Counseling Suite",
      text: "Personalized guidance from Day 1: college research, application strategy, scholarship navigation, and alumni mentorship.",
    },
    {
      img: "/academics/l6.jpg",
      title: "Experiential Learning",
      bulletPoints: [
        "Global Study Tours (Umrah, Spain, service in Lebanon)",
        "Academic Competitions (Science fairs, Quran Bees, debate circuits)",
        "In-School Internships with local NGOs and businesses",
      ],
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-[#FFFDF4] font-serif">
      {/* Heading */}
      <h2 className="text-center italic text-3xl sm:text-4xl lg:text-5xl  mb-12 text-[#CF3528]">
        Signature Centers & Labs
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 cursor-pointer sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col transition-transform hover:scale-105 duration-300"
          >
            <div className="w-full flex justify-center mb-4">
              <img
                src={card.img}
                alt={card.title}
                className="w-5/5 h-64 object-cover rounded-lg"
              />
            </div>

            <h3 className="text-2xl italic text-[#00285E] mb-3 text-left">
              {card.title}
            </h3>

            {/* Render bullet points only for the last card */}
            {card.bulletPoints ? (
              <ul className="list-disc list-outside pl-5 text-gray-800 text-sm sm:text-base leading-relaxed text-left space-y-1">
                {card.bulletPoints.map((point, idx) => (
                  <li key={idx} className="pl-1">
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed text-left">
                {card.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SignatureCenters;
