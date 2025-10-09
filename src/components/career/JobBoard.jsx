import React from "react";
import { FaArrowRight } from "react-icons/fa";

const jobs = [
  { title: "Maths Teacher", location: "Houston" },
  { title: "Physics Teacher", location: "New York" },
  { title: "Chemistry Teacher", location: "Los Angeles" },
  { title: "English Teacher", location: "Chicago" },
  { title: "Biology Teacher", location: "San Francisco" },
  { title: "History Teacher", location: "Boston" },
];

const JobBoard = () => {
  return (
    <section className="w-full p-6 md:p-12 font-sans">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl italic text-gray-800 font-serif mb-12 text-center">
        Job Openings
      </h1>

      {/* Blue div with dropdowns */}
      <div className="bg-[#23335D] p-6 rounded-lg flex flex-col md:flex-row gap-4 mb-12">
        <select className="p-3 rounded-md flex-1 bg-white text-gray-700 font-medium">
          <option>All Job Categories</option>
          <option>Teaching</option>
          <option>Engineering</option>
          <option>Medical</option>
        </select>
        <select className="p-3 rounded-md flex-1 bg-white text-gray-700 font-medium">
          <option>All Job Locations</option>
          <option>Houston</option>
          <option>New York</option>
          <option>Los Angeles</option>
        </select>
        <button className="bg-white text-left font-semibold px-4 py-3 rounded-md flex-1 cursor-pointer hover:bg-gray-100">
          Search
        </button>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] flex justify-between items-center hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] transition-all duration-300 min-h-[150px] md:min-h-[180px]"
          >
            {/* Title and location on left */}
            <div>
              <h2 className="text-xl md:text-2xl  text-gray-700">
                {job.title}
              </h2>
              <p className="text-gray-700 mt-12">{job.location}</p>
            </div>

            {/* Arrow on opposite side (right) */}
            <FaArrowRight className="text-gray-700 text-xl mb-18" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobBoard;
