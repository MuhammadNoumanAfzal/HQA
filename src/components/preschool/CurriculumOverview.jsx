import React, { useState } from "react";

const tags = [
  "All",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "K",
];
const filters = ["All", "Library", "Mathematics", "Quran", "Science"];

// Example cards with "tag" and "category" properties
const cards = [
  {
    img: "/pre/c1.jpg",
    subject: "Decisions",
    grade: "Grade 1",
    tag: "Grade 1",
    category: "Decisions",
  },
  {
    img: "/pre/c2.jpg",
    subject: "Library",
    grade: "Grade 2",
    tag: "Grade 2",
    category: "Library",
  },
  {
    img: "/pre/c3.jpg",
    subject: "Mathematics",
    grade: "Grade 3",
    tag: "Grade 3",
    category: "Mathematics",
  },
  {
    img: "/pre/c1.jpg",
    subject: "Quran",
    grade: "Grade 4",
    tag: "Grade 4",
    category: "Quran",
  },
  {
    img: "/pre/c1.jpg",
    subject: "Science",
    grade: "Grade 5",
    tag: "Grade 5",
    category: "Science",
  },
  {
    img: "/pre/c2.jpg",
    subject: "Decisions",
    grade: "K",
    tag: "K",
    category: "Decisions",
  },
  {
    img: "/pre/c3.jpg",
    subject: "Library",
    grade: "Grade 1",
    tag: "Grade 1",
    category: "Library",
  },
  {
    img: "/pre/c1.jpg",
    subject: "Mathematics",
    grade: "Grade 2",
    tag: "Grade 2",
    category: "Mathematics",
  },
  {
    img: "/pre/c1.jpg",
    subject: "Quran",
    grade: "Grade 3",
    tag: "Grade 3",
    category: "Quran",
  },
  {
    img: "/pre/c2.jpg",
    subject: "Science",
    grade: "Grade 4",
    tag: "Grade 4",
    category: "Science",
  },
  {
    img: "/pre/c3.jpg",
    subject: "Decisions",
    grade: "Grade 5",
    tag: "Grade 5",
    category: "Decisions",
  },
  {
    img: "/pre/c1.jpg",
    subject: "Library",
    grade: "K",
    tag: "K",
    category: "Library",
  },
  {
    img: "/pre/c1.jpg",
    subject: "Mathematics",
    grade: "Grade 1",
    tag: "Grade 1",
    category: "Mathematics",
  },
  {
    img: "/pre/c2.jpg",
    subject: "Quran",
    grade: "Grade 2",
    tag: "Grade 2",
    category: "Quran",
  },
  {
    img: "/pre/c3.jpg",
    subject: "Science",
    grade: "Grade 3",
    tag: "Grade 3",
    category: "Science",
  },
  {
    img: "/pre/c1.jpg",
    subject: "Decisions",
    grade: "Grade 4",
    tag: "Grade 4",
    category: "Decisions",
  },
];

export default function CurriculumOverview() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Shuffle helper
  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Filter cards based on selected tag and filter
  const filteredCards = cards.filter((card) => {
    const tagMatch = selectedTag === "All" || card.tag === selectedTag;
    const filterMatch =
      selectedFilter === "All" || card.category === selectedFilter;
    return tagMatch && filterMatch;
  });

  // Show all cards for "All" tag, otherwise shuffle
  const displayedCards =
    selectedTag === "All" && selectedFilter === "All"
      ? cards
      : shuffleArray(filteredCards);

  return (
    <div className="bg-[#fffdf4] min-h-screen px-10 py-12 font-serif">
      {/* Heading */}
      <section>
        <p className="text-3xl md:text-5xl  italic text-red-700 text-center">
          Curriculum Overview
        </p>
        <p className=" mt-6 ml-2 md:ml-14">Filters by Tags</p>
      </section>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 mt-5 ml-2 md:ml-14">
        {tags.map((tag, index) => (
          <p
            key={index}
            onClick={() => setSelectedTag(tag)}
            className={`h-[45px] px-4 flex justify-center items-center  text-white rounded-md cursor-pointer transition duration-500 ${
              selectedTag === tag
                ? "bg-[#00285e]"
                : "bg-[#6682b7] hover:bg-[#00285e]"
            }`}
          >
            {tag}
          </p>
        ))}
      </div>

      {/* Search */}
      <div className="mt-5 ml-2 md:ml-14">
        <p className=" border-2 h-[45px] w-full pl-5 pt-2.5 cursor-pointer bg-[#00285e] text-white rounded-lg">
          What are you Looking for?
        </p>
      </div>

      {/* Subject Filters */}
      <div className=" ml-2 md:ml-14 mt-5">
        <p>Filters by Subjects</p>
      </div>

      {/* Layout */}
      <section className="flex flex-col lg:flex-row gap-6 mt-5 ml-2 md:ml-14">
        {/* Left Sidebar */}
        <div className="w-full lg:w-64 bg-white rounded-lg p-4  shadow-lg h-auto lg:h-[550px]">
          <form className="space-y-3">
            {filters.map((filter, index) => (
              <label
                key={index}
                className="flex items-center gap-2 cursor-pointer border-b pb-2"
              >
                <input
                  type="radio"
                  name="category"
                  value={filter}
                  checked={selectedFilter === filter}
                  onChange={() => setSelectedFilter(filter)}
                  className="w-3 h-3 border-gray-300 text-red-600 focus:ring-red-500"
                />
                <span className="text-gray-800">{filter}</span>
              </label>
            ))}
          </form>
        </div>

        {/* Cards Grid */}
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 flex-1">
          {displayedCards.length > 0 ? (
            displayedCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden h-[260px] mb-10 p-4 cursor-pointer flex flex-col"
              >
                <img
                  src={card.img}
                  alt={card.subject}
                  className="w-full h-36 object-cover rounded-lg"
                />
                <div className="flex justify-between items-center px-2 pt-3 mt-auto">
                  <h3 className="text-base font-semibold text-gray-800">
                    {card.subject}
                  </h3>
                  <span className="text-sm text-gray-500">{card.grade}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full mt-20 text-gray-500">
              No results found.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
