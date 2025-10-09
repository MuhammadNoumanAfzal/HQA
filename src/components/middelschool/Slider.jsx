import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/academics/cs1.jpg",
  "/admission/t1.jpg",
  "/academics/cs1.jpg",
  "/admission/t1.jpg",
  "/academics/cs1.jpg",
  "/admission/t1.jpg",
  "/academics/cs1.jpg",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive visible slides
  const updateVisibleSlides = () => {
    if (window.innerWidth < 640) {
      setVisibleSlides(2); // mobile → show 2 tilted images
      setIsMobile(true);
    } else if (window.innerWidth < 1024) {
      setVisibleSlides(2); // tablet
      setIsMobile(false);
    } else {
      setVisibleSlides(4); // desktop
      setIsMobile(false);
    }
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - visibleSlides : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= images.length - visibleSlides ? 0 : prev + 1
    );
  };

  return (
    <section className="py-12 font-serif text-center px-4 sm:px-10">
      <h2 className="text-4xl md:text-5xl text-red-700 mb-6 italic">
        Our Classes
      </h2>

      <div className="relative flex items-center justify-center w-full overflow-hidden">
        {/* Images Row */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleSlides}%)`,
          }}
        >
          {images.map((img, index) => {
            // Tilted effect for all devices
            const tiltClass =
              index % 4 === 0
                ? "rotate-[2deg]"
                : index % 4 === 1
                ? "rotate-[-2deg]"
                : index % 4 === 2
                ? "rotate-[2deg]"
                : "rotate-[-2deg]";

            return (
              <div
                key={index}
                style={{ minWidth: `${100 / visibleSlides}%` }}
                className="flex justify-center items-center"
              >
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className={`w-full h-[220px] sm:h-[300px] lg:h-[420px] object-cover 
                    transition-transform duration-500 mb-12 mt-12 p-1 
                    ${tiltClass} origin-bottom`}
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div
          className={`absolute -bottom-0 sm:bottom-12 flex gap-4 rounded-2xl p-1 
            ${isMobile ? "justify-center w-full" : "bg-gray-200"}`}
        >
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className={`w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition
              ${
                isMobile
                  ? "border-2 border-red-700 text-red-700 bg-transparent"
                  : "border-2 border-blue-900 text-blue-900"
              }`}
          >
            <FaArrowLeft />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className={`w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition
              ${
                isMobile
                  ? "bg-red-600 text-white border-2 border-red-600"
                  : "border-2 border-red-700 text-red-600"
              }`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Slider;
