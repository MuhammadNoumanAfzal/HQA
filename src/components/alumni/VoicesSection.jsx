import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation.js";

const VoicesSection = () => {
  const [active, setActive] = useState(null);
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const students = [
    { id: 1, image: "home/student1.jpg", name: "Malik Javed" },
    { id: 2, image: "home/student2.jpg", name: "Aisha Khan" },
    { id: 3, image: "home/student3.jpg", name: "Omar Hassan" },
    { id: 4, image: "home/student4.jpg", name: "Fatima Ahmed" },
    { id: 5, image: "home/student5.jpg", name: "Zainab Ali" },
  ];

  const centerIndex = 2; // Image 3 (Omar Hassan) as center

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scroll to center image on mobile mount and when active changes
  useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollContent = container.querySelector(".flex");
      const targetIndex = active !== null ? active : centerIndex;
      const activeElement = scrollContent.children[targetIndex];

      if (activeElement) {
        const scrollLeft =
          activeElement.offsetLeft -
          (container.offsetWidth - activeElement.offsetWidth) / 2;

        setTimeout(() => {
          container.scrollTo({
            left: scrollLeft,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [active, isMobile]);

  const handleImageClick = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-16 bg-white text-gray-900 font-serif">
      <div className="px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif italic mb-12 md:mb-24"
        >
          Our Alumni{" "}
        </motion.h2>

        {/* Desktop layout */}
        <div className="hidden md:flex w-full justify-center gap-2 overflow-hidden rounded-xl items-end">
          {students.map((student, index) => {
            const isActive = active === index;
            const isCenter = index === centerIndex;

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
              <div key={student.id} className="flex items-end">
                <motion.div
                  className="relative overflow-hidden cursor-pointer rounded-lg shadow-lg flex items-end"
                  onClick={() => handleImageClick(index)}
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

                  {/* Vertical name text */}
                  <p
                    className="absolute right-2 top-0 bottom-4 flex items-center text-white italic text-base sm:text-lg font-medium"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {student.name}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile layout with horizontal scroll */}
        <div
          ref={scrollContainerRef}
          className="md:hidden flex overflow-x-auto pb-4 -mx-4 px-4 hide-scrollbar"
        >
          <div className="flex gap-4 min-w-max items-end px-8">
            {students.map((student, index) => {
              const isActive = active === index;
              const isCenter = index === centerIndex;

              let width = 100;
              let height = 160;

              if (active === null && isCenter) {
                width = 180;
                height = 260;
              } else if (isActive) {
                width = 180;
                height = 260;
              }

              return (
                <div
                  key={`mobile-${student.id}`}
                  className="flex items-end transition-all duration-300"
                >
                  <motion.div
                    className="relative overflow-hidden cursor-pointer rounded-lg shadow-lg flex-shrink-0"
                    onClick={() => handleImageClick(index)}
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

                    {/* Vertical name text for mobile */}
                    <p
                      className="absolute right-1 top-0 bottom-0 flex items-center text-white italic text-xs sm:text-sm font-medium"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {student.name}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 767px) {
          .hide-scrollbar {
            scroll-behavior: smooth;
          }
        }
      `}</style>
    </section>
  );
};

export default VoicesSection;
