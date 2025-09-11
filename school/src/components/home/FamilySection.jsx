import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FamilySection = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cards = [
    { id: 1, img: "/family1.jpg", alt: "Family 1" },
    { id: 2, img: "/family2.jpg", alt: "Family 2" },
    { id: 3, img: "/family3.jpg", alt: "Family 3" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white text-gray-900 font-serif">
      <div className="px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl text-center mb-4 sm:mb-6">
          Beyond Unity,{" "}
          <span className="italic text-red-700">A Family Forever</span>
        </h2>
        <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg max-w-5xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          We are more than just a school—we are a family united by faith,
          learning, and service. Through events, mentorship, and shared
          experiences, our students, parents, and staff create a lifelong bond.
          Join us and be part of something bigger!
        </p>

        {/* Mobile view - images stacked in column */}
        {isMobile ? (
          <div className="flex flex-col space-y-4">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative h-[250px] sm:h-[300px] rounded-xl overflow-hidden"
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute bottom-0 left-0 w-full h-1/2"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,40,94,0.8), transparent)",
                  }}
                />
                <p className="absolute bottom-4 left-4 text-white italic text-base font-medium">
                  Beyond Unity, <span>A Family Forever</span>
                </p>
              </div>
            ))}
          </div>
        ) : (
          /* Desktop view - original hover animation */
          <div className="relative h-[400px] md:h-[453px] rounded-xl overflow-hidden flex">
            {cards.map((card, index) => {
              const isActive = activeCard === card.id;
              const isOtherActive = activeCard && activeCard !== card.id;

              return (
                <motion.div
                  key={card.id}
                  className={`absolute top-0 bottom-0 overflow-hidden cursor-pointer ${
                    isActive ? "z-20" : isOtherActive ? "z-0" : "z-10"
                  }`}
                  onHoverStart={() => setActiveCard(card.id)}
                  onHoverEnd={() => setActiveCard(null)}
                  animate={{
                    left: isActive ? 0 : `${index * 33.33}%`,
                    width: isActive ? "100%" : "33.33%",
                    height: "100%",
                    opacity: isOtherActive ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                >
                  <motion.img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-full object-cover"
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />

                  <motion.div
                    className="absolute bottom-0 left-0 w-full"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isActive ? "50%" : 0,
                      opacity: isActive ? 0.6 : 0,
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,40,94,0.8), transparent)",
                    }}
                  />

                  <motion.p
                    className="absolute bottom-4 left-4 text-white italic text-lg font-medium"
                    animate={{ opacity: isActive ? 1 : 0.8 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    Beyond Unity, <span>A Family Forever</span>
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default FamilySection;
