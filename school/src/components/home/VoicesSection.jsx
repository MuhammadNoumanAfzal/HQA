import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation.js";

const VoicesSection = () => {
  const [active, setActive] = useState(null);

  const students = [
    { id: 1, image: "/student1.jpg", name: "Malik Javed" },
    { id: 2, image: "/student2.jpg", name: "Aisha Khan" },
    { id: 3, image: "/student3.jpg", name: "Omar Hassan" },
    { id: 4, image: "/student4.jpg", name: "Fatima Ahmed" },
    { id: 5, image: "/student5.jpg", name: "Zainab Ali" },
  ];

  return (
    <section className="py-16 bg-white text-gray-900 font-serif">
      <div className="px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-serif italic font-bold mb-12 md:mb-24"
        >
          Voices of <span className="text-red-500">Our District</span>
        </motion.h2>

        {/* Desktop layout */}
        {/* Desktop layout */}
        <div className="hidden md:flex w-full justify-center gap-2 overflow-hidden rounded-xl items-end">
          {students.map((student, index) => {
            const isActive = active === index;
            const isCenter = index === 2;

            let width = 212;
            let height = 508;

            if (active === null && isCenter) {
              width = 396;
              height = 580;
            } else if (isActive) {
              width = 396;
              height = 580;
            }

            return (
              <div
                key={student.id}
                className="flex items-end" // ✅ ensures card always aligns at bottom
              >
                <motion.div
                  className="relative overflow-hidden cursor-pointer rounded-lg shadow-lg flex items-end"
                  onClick={() => setActive(isActive ? null : index)}
                  animate={{
                    width: width,
                    height: height,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.img
                    src={student.image}
                    alt={student.name}
                    className="w-full object-cover"
                    style={{ height: "100%" }}
                    animate={{
                      scale:
                        isActive || (active === null && isCenter) ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-white italic text-base sm:text-lg font-medium">
                    {student.name}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile layout with horizontal scroll */}
        {/* Mobile layout with horizontal scroll */}
        <div className="md:hidden flex overflow-x-auto pb-4 -mx-4 px-4 hide-scrollbar">
          <div className="flex gap-3 min-w-max items-end">
            {students.map((student, index) => {
              const isActive = active === index;
              const isCenter = index === 2;

              let width = 180;
              let height = 280;

              // ✅ Make center card larger initially
              if (active === null && isCenter) {
                width = 280;
                height = 380;
              } else if (isActive) {
                width = 280;
                height = 380;
              }

              return (
                <div key={`mobile-${student.id}`} className="flex items-end">
                  <motion.div
                    className="relative overflow-hidden cursor-pointer rounded-lg shadow-lg flex-shrink-0"
                    onClick={() => setActive(isActive ? null : index)}
                    animate={{
                      width: width,
                      height: height,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <motion.img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover"
                      animate={{
                        scale:
                          isActive || (active === null && isCenter) ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                    <p className="absolute bottom-3 left-3 text-white italic text-sm font-medium">
                      {student.name}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  );
};

export default VoicesSection;
