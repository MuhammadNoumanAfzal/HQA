import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../../utility/animation.js";

const VoicesSection = () => {
  const [active, setActive] = useState(null);
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

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

  // Auto-scroll to show image 2 on left and image 4 on right initially on mobile
  useEffect(() => {
    if (isMobile && scrollContainerRef.current && isInitialLoad) {
      const container = scrollContainerRef.current;
      const scrollContent = container.querySelector(".flex");
      const centerElement = scrollContent.children[centerIndex];

      if (centerElement) {
        // Calculate scroll position to center the middle image (image 3)
        // This will naturally show image 2 on left and image 4 on right
        const scrollLeft =
          centerElement.offsetLeft -
          (container.offsetWidth - centerElement.offsetWidth) / 2;

        // Use setTimeout to ensure DOM is updated
        setTimeout(() => {
          container.scrollTo({
            left: scrollLeft,
            behavior: "instant", // Use instant for initial load
          });
          setIsInitialLoad(false);
        }, 100);
      }
    }
  }, [isMobile, isInitialLoad]);

  // Auto-scroll to active image when active changes on mobile
  useEffect(() => {
    if (
      isMobile &&
      scrollContainerRef.current &&
      !isInitialLoad &&
      active !== null
    ) {
      const container = scrollContainerRef.current;
      const scrollContent = container.querySelector(".flex");
      const activeElement = scrollContent.children[active];

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
  }, [active, isMobile, isInitialLoad]);

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
          Our Jorney<span className="text-red-500"> Our Voices</span>
        </motion.h2>

        {/* Desktop layout - unchanged */}
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
                  <p className="absolute bottom-4 left-4 text-white italic text-base sm:text-lg font-medium">
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
              const isActiveOrCenter =
                isActive || (active === null && isCenter);

              // Size configuration for mobile
              let width = 120; // Smaller for non-active images
              let height = 220; // Smaller for non-active images

              if (active === null && isCenter) {
                width = 200; // Larger for center image when none active
                height = 300; // Larger for center image when none active
              } else if (isActive) {
                width = 200; // Larger for active image
                height = 300; // Larger for active image
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
                        scale: isActiveOrCenter ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                    {/* Active or center image - text at bottom center */}
                    {isActiveOrCenter ? (
                      <p className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-white italic text-sm font-medium text-center w-full px-2">
                        {student.name}
                      </p>
                    ) : (
                      /* Non-active image - vertical text on right side */
                      <div className="absolute right-2   top-40 transform -translate-y-1/2">
                        <p className="text-white italic text-sm font-medium writing-mode-vertical-rl rotate-180 whitespace-nowrap">
                          {student.name}
                        </p>
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Smooth scrolling for mobile */
        @media (max-width: 767px) {
          .hide-scrollbar {
            scroll-behavior: smooth;
          }
        }
      `}</style>

      {/* Inline styles for better mobile experience */}
      <style jsx global>{`
        @media (max-width: 767px) {
          /* Improve touch scrolling */
          .hide-scrollbar {
            -webkit-overflow-scrolling: touch;
          }

          /* Better tap targets */
          .flex-shrink-0 {
            tap-highlight-color: transparent;
            -webkit-tap-highlight-color: transparent;
          }

          /* Vertical text styling for non-active images */
          .writing-mode-vertical-rl {
            writing-mode: vertical-rl;
          }
        }
      `}</style>
    </section>
  );
};

export default VoicesSection;
