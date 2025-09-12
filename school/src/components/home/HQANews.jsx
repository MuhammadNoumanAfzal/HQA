import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function HQANews() {
  const [activeTab, setActiveTab] = useState("News");

  const tabs = ["News", "Videos", "Social", "Courses"];

  // Cards for each tab
  const tabCards = {
    News: [
      {
        id: 1,
        image: "/family1.jpg",
        title:
          "We are thrilled to announce the expansion of HQA with a new campus in the heart of the city.",
        category: "Campus News",
        readMore: "Read More",
      },
      {
        id: 2,
        image: "/family2.jpg",
        title: "Students shine in national competitions with top honors.",
        category: "Student Life",
        readMore: "Read More",
      },
      {
        id: 3,
        image: "/family3.jpg",
        title: "Our alumni achieve global recognition for innovation.",
        category: "Alumni",
        readMore: "Read More",
      },
    ],
    Videos: [
      {
        id: 4,
        image: "/family2.jpg",
        title: "Watch our latest campus tour and student interviews.",
        category: "Media",
        readMore: "Watch Now",
      },
      {
        id: 5,
        image: "/family1.jpg",
        title: "Experience HQA through student-led video diaries.",
        category: "Media",
        readMore: "Watch Now",
      },
      {
        id: 6,
        image: "/family3.jpg",
        title: "See highlights from our annual Science Fair event.",
        category: "Events",
        readMore: "Watch Now",
      },
    ],
    Social: [
      {
        id: 7,
        image: "/family3.jpg",
        title: "Follow our official Instagram for daily updates.",
        category: "Social Media",
        readMore: "Follow Us",
      },
      {
        id: 8,
        image: "/family1.jpg",
        title: "Stay updated on Twitter with latest announcements.",
        category: "Social Media",
        readMore: "Follow Us",
      },
      {
        id: 9,
        image: "/family2.jpg",
        title: "Join our Facebook community to connect with alumni.",
        category: "Social Media",
        readMore: "Join Now",
      },
    ],
    Courses: [
      {
        id: 10,
        image: "/family1.jpg",
        title: "New AI & Robotics course launching this semester.",
        category: "Academics",
        readMore: "Explore",
      },
      {
        id: 11,
        image: "/family3.jpg",
        title: "Enroll in our advanced programming workshops.",
        category: "Learning",
        readMore: "Enroll",
      },
      {
        id: 12,
        image: "/family2.jpg",
        title: "Discover our leadership development curriculum.",
        category: "Academics",
        readMore: "Explore",
      },
    ],
  };

  // Handle next and back navigation
  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
  };

  const handleBack = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[prevIndex]);
  };

  // Animation for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const currentCards = tabCards[activeTab];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16 font-serif">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#00285E]">
          More <span className="text-[#CF3528]">HQA News</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Navigation Arrows */}
        <div className="flex flex-row lg:flex-col justify-center items-center gap-4 lg:gap-6">
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-700 text-white hover:bg-red-600 transition-colors"
            aria-label="Next tab"
          >
            <FaArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <button
            onClick={handleBack}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-colors"
            aria-label="Previous tab"
          >
            <FaArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-6 md:mb-8 overflow-x-auto">
            <div className="flex space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6 border-b-2 border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm sm:text-base font-medium transition-colors duration-200 border-b-4 whitespace-nowrap ${
                    activeTab === tab
                      ? "text-red-700 border-red-700"
                      : "text-gray-600 border-transparent hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {currentCards.map((card) => (
                <motion.div
                  key={card.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                  {/* Card Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={card.image}
                      alt={card.category}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-6 bg-[#00285E] text-white flex flex-col flex-grow border-t-4 border-red-700">
                    <h3 className="text-sm sm:text-base font-medium mb-3 sm:mb-4 line-clamp-3 flex-grow">
                      {card.title}
                    </h3>
                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-xs sm:text-sm text-gray-300">
                        {card.category}
                      </span>
                      <button className="text-sm sm:text-base font-medium hover:underline text-white">
                        {card.readMore} →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
