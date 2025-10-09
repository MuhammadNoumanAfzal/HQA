import React from "react";

const Experience = () => {
  const cards = [
    {
      img: "/pre/learn1.jpg",
      title: "Leadership Programs",
      text: "Phonics, early math, vocabulary, reasoning, pre-reading & writing",
    },
    {
      img: "/pre/learn2.jpg",
      title: "Student-Led Jumu'ah Khutbahs",
      text: "Empathy, self-regulation, patience, communication.",
    },
    {
      img: "/pre/learn3.jpg",
      title: "Yearbook & Newsletter Club",
      text: "Cooperation, leadership, sharing, grace & courtesy",
    },
    {
      img: "/pre/learn4.jpg",
      title: "Service Learning Projects",
      text: "Duas, daily adhkar, stories of the Prophets, kindness in action",
    },
    {
      img: "/pre/learn5.jpg",
      title: "College Tours & Career Days",
      text: "Independence, organization, problem-solving",
    },
  ];

  return (
    <section className="py-12 px-10  font-serif">
      {/* Heading + Paragraph Centered */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="italic text-3xl sm:text-4xl lg:text-5xl mb-6 text-[#CF3528]">
          <span className="text-[#00285E]"> Our Academic</span> Framework
        </h2>
        <p className="italic text-lg sm:text-xl text-gray-800 leading-relaxed mb-8">
          We follow a rigorous curriculum aligned with Texas Essential Knowledge
          and Skills (TEKS) and National Standards, ensuring every child is
          equipped with a strong academic foundation while also developing moral
          character through a Qur’anic worldview.
        </p>
        <p className="italic text-2xl text-gray-800 leading-relaxed">
          Subjects Offered
        </p>
      </div>

      {/* Cards Layout */}
      <div>
        {/* Top row (3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {cards.slice(0, 3).map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col transition-transform hover:scale-105 duration-300"
            >
              <div className="w-full flex justify-center mb-4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl italic text-gay-800 mb-3 text-left">
                {card.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Bottom row (2 cards side by side) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {cards.slice(3, 5).map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col transition-transform hover:scale-105 duration-300"
            >
              <div className="w-full flex justify-center mb-4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl italic text-gray-800 mb-3 text-left">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <p className="italic text-2xl text-center max-w-4xl text-gray-800  mt-8 leading-relaxed mx-auto">
        Our instruction emphasizes interactive, student-centered learning that
        builds critical thinking, collaboration, and leadership skills.
      </p>
    </section>
  );
};

export default Experience;
