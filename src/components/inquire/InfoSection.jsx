import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const accordionData = [
  {
    title: "Getting to Houston Quran Academy",
    content: (
      <>
        <p className="mb-2">
          <strong>1901 Baker Rd</strong> <br />
          Houston, TX 77094 <br />
          <strong>Mailing Address:</strong> <br />
          P.O Box 690285 <br />
          Katy, TX 77491
        </p>
        <p className="mb-2">
          Our campus is conveniently located in the heart of West Houston, with
          easy access from I-10 and surrounding areas. Visitor parking is
          available directly in front of the main entrance.
        </p>
        <a
          href="#"
          className="text-red-600 underline hover:text-red-800 transition"
        >
          Get Directions to Houston Quran Academy
        </a>
      </>
    ),
  },
  {
    title: "Contact Us",
    content: (
      <>
        <p className="mb-2">Phone: (281) 123-4567</p>
        <p className="mb-2">Email: info@hqacademy.org</p>
        <a href="#" className="text-red-600 underline hover:text-red-800">
          Send us a message
        </a>
      </>
    ),
  },
  {
    title: "Area Accommodations",
    content: (
      <>
        <p className="mb-2">
          Families visiting from out of town can find several options nearby.
        </p>
        <p className="mb-2">
          From budget motels to luxury stays, all within 10 minutes drive.
        </p>
        <a href="#" className="text-red-600 underline hover:text-red-800">
          Explore Accommodations
        </a>
      </>
    ),
  },
  {
    title: "Nearby Hotels",
    content: (
      <>
        <p className="mb-2">
          Several hotels are located within a 5-mile radius.
        </p>
        <p className="mb-2">
          Perfect for families attending special school events.
        </p>
        <a href="#" className="text-red-600 underline hover:text-red-800">
          View Hotels
        </a>
      </>
    ),
  },
  {
    title: "Nearby Restaurants",
    content: (
      <>
        <p className="mb-2">
          From halal eateries to international cuisine, options abound.
        </p>
        <p className="mb-2">
          Many restaurants are family-friendly and offer takeout.
        </p>
        <a href="#" className="text-red-600 underline hover:text-red-800">
          Discover Restaurants
        </a>
      </>
    ),
  },
];

export default function InfoSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full px-4 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch font-serif">
      {/* Left Column (Accordion) */}
      <motion.div
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white rounded-xl shadow-md border-1 border-gray-200 p-4 sm:p-6 flex flex-col h-full"
      >
        {accordionData.map((item, index) => (
          <div key={index} className="border-b last:border-none">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center gap-2 py-4 text-left font-medium text-gray-800 hover:text-red-600 transition text-lg sm:text-base"
            >
              {/* Icon */}
              <span>
                {openIndex === index ? (
                  <FaMinus className="text-black " />
                ) : (
                  <FaPlus className="text-black " />
                )}
              </span>
              {/* Title */}
              <span>{item.title}</span>
            </button>
            {openIndex === index && (
              <div className="pb-4 text-sm sm:text-base text-gray-600">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {/* Right Column (Image) */}
      <section className="overflow-x-hidden">
        <motion.div
          variants={SlideLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:block w-full h-full overflow-hidden"
        >
          <img
            src="/about/class.jpg"
            alt="Campus"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </motion.div>
      </section>
    </div>
  );
}
