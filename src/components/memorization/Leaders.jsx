import React from "react";

const Leaders = () => {
  return (
    <section className="w-full py-12 px-10 font-serif">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left: Image */}
        <div className="w-full h-full">
          <img
            src="/memorizaation/leader.jpg" // replace with your actual image path
            alt="Graduates celebrating"
            className="w-full h-full object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Right: Text Card */}
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-5xl italic text-[#00285E] mb-4">
              Shaping Tomorrow’s Leaders
            </h2>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
              This program isn’t just about completing a Hafiz journey—it’s
              about shaping future community leaders, educators, and ambassadors
              of Islamic values. With 84 Huffaz graduated and a team of 10
              expert Huffaz instructors, our mission continues to empower the
              next generation.
            </p>
          </div>
          <button className="bg-[#00285E] text-white px-5 py-2 shadow-md hover:bg-[#001a40] transition self-start">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
