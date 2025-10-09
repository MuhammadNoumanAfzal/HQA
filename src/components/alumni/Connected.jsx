import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Connected = () => {
  const [open, setOpen] = useState("events");

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section className="w-full py-12 px-6 md:px-12 font-serif bg-[#00285E]">
      {/* Two column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left: Accordion + Heading */}
        <div className="flex flex-col space-y-6 h-full">
          {/* Section Heading & Paragraph */}
          <div className="text-white mb-6">
            <h2 className="text-3xl md:text-5xl italic mb-5">Stay Connected</h2>
            <p className="text-lg md:text-2xl italic max-w-2xl">
              Stay close to your HQA family no matter where life takes you.
            </p>
          </div>

          {/* Upcoming Events Card */}
          <div className="border rounded-lg shadow-md overflow-hidden flex flex-col bg-white text-[#252626]">
            <button
              onClick={() => toggle("events")}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg text-[#252626]"
            >
              Upcoming Events
              {open === "events" ? (
                <FaChevronUp className="text-[#252626]" />
              ) : (
                <FaChevronDown className="text-[#252626]" />
              )}
            </button>
            {open === "events" && (
              <div className="px-6 pb-4  text-[#252626] mt-4 space-y-4">
                <p className="border-b pb-2">
                  2025 - 10th Reunion Class of 2015
                </p>
                <p className="border-b pb-2">
                  2025 - 10th Reunion Class of 2015
                </p>
                <p className="border-b pb-2">
                  2025 - 10th Reunion Class of 2015
                </p>
              </div>
            )}
          </div>

          {/* Class Notes Card */}
          <div className="border rounded-lg shadow-md overflow-hidden flex flex-col bg-white text-[#252626]">
            <button
              onClick={() => toggle("notes")}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg text-[#252626]"
            >
              Class Notes
              {open === "notes" ? (
                <FaChevronUp className="text-[#252626]" />
              ) : (
                <FaChevronDown className="text-[#252626]" />
              )}
            </button>
            {open === "notes" && (
              <div className="px-6 pb-4 bg-white text-[#252626] mt-4 space-y-4">
                <p className="border-b pb-2">Notes for your reference 1</p>
                <p className="border-b pb-2">Notes for your reference 2</p>
                <p className="border-b pb-2">Notes for your reference 3</p>
              </div>
            )}
          </div>

          {/* Update Your Information Card */}
          <div className="border rounded-lg shadow-md overflow-hidden flex flex-col bg-white text-[#252626]">
            <button
              onClick={() => toggle("update")}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg text-[#252626]"
            >
              Update Your Information
              {open === "update" ? (
                <FaChevronUp className="text-[#252626]" />
              ) : (
                <FaChevronDown className="text-[#252626]" />
              )}
            </button>
            {open === "update" && (
              <div className="px-6 pb-4 bg-white text-[#252626] mt-4 space-y-4">
                <p className="border-b pb-2">
                  Keep your contact and profile information up to date.
                </p>
                <p className="border-b pb-2">
                  Make sure your email and phone number are correct.
                </p>
                <p className="border-b pb-2">
                  Update your current address or employment info if needed.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full h-full">
          <img
            src="/alumni/connection.jpg" // replace with actual path
            alt="Students learning"
            className="w-full h-140 object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Connected;
