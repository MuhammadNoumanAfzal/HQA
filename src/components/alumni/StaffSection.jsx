import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

const StaffSection = () => {
  const staff = [
    {
      img: "/faculty/t1.jpg",
      name: "John Doe",
      role: "Pre School Teacher",
      type: "Pre School",
    },
    {
      img: "/faculty/t1.jpg",
      name: "Sarah Johnson",
      role: "Middle School Teacher",
      type: "Middle School",
    },
    {
      img: "/faculty/t1.jpg",
      name: "Michael Smith",
      role: "Elementary School Teacher",
      type: "Elementary School",
    },
    {
      img: "/faculty/t1.jpg",
      name: "Emily Davis",
      role: "High School Teacher",
      type: "High School",
    },
    {
      img: "/faculty/t1.jpg",
      name: "Daniel Brown",
      role: "Sports Coach",
      type: "Sports",
    },
    {
      img: "/faculty/t1.jpg",
      name: "Sophia Wilson",
      role: "Music Teacher",
      type: "Arts",
    },
    {
      img: "/faculty/t1.jpg",
      name: "David Clark",
      role: "Art Teacher",
      type: "Arts",
    },
    {
      img: "/faculty/t1.jpg",
      name: "Olivia Martinez",
      role: "Counselor",
      type: "School Administrations",
    },
  ];

  const schoolTypes = [
    "Pre School",
    "Middle School",
    "Elementary School",
    "High School",
    "Quran/Arabic Teachers",
    "School Administrations",
  ];

  const [selectedSchool, setSelectedSchool] = useState("Pre School");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth < 768);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <section className="w-full flex justify-center bg-[#FFFDF2] py-12 font-serif">
      <div className="w-full max-w-6xl px-6 md:px-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl italic text-center text-[#00285E] mb-6">
          SOA Executive <span className="text-red-700"> Committee </span>
        </h2>
        <p className="text-gray-700 text-center text-lg md:text-xl mb-8 max-w-4xl mx-auto">
          Meet the hearts and minds guiding our alumni initiatives. The SOA
          Executive Committee is composed of passionate HQA graduates who lead
          efforts to connect, support, and inspire our global alumni community.
        </p>

        {dropdownOpen && (
          <div className="md:hidden w-full bg-white text-[#00285E] rounded-md mb-6 z-20">
            {schoolTypes.map((type, index) => (
              <p
                key={index}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  setSelectedSchool(type);
                  setDropdownOpen(false);
                }}
              >
                {type}
              </p>
            ))}
          </div>
        )}

        {/* Staff Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {(isMobile ? staff.slice(0, 2) : staff).map((person, index) => (
            <div key={index} className="relative group w-full max-w-xs">
              {/* Red Background Div */}
              <div className="absolute -top-3 -left-3 w-full h-full bg-[#CF3528] rounded-md z-0"></div>

              {/* Card */}
              <div
                className={`relative bg-white rounded-md overflow-hidden z-10 ${
                  isMobile ? "" : "shadow-lg"
                }`}
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-58 object-cover rounded-t-md"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{person.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 italic">
                      {person.role}
                    </p>
                    <div className="w-8 h-8 bg-[#CF3528] text-white flex items-center justify-center rounded-full cursor-pointer">
                      <FaPlus size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StaffSection;
