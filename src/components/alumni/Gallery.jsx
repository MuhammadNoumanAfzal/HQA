import React from "react";

const OurGallery = () => {
  const images = [
    "/alumni/1.jpg",
    "/alumni/2.jpg",
    "/alumni/3.jpg",
    "/alumni/4.jpg",
    "/alumni/5.jpg",
    "/alumni/6.jpg",
    "/alumni/7.jpg",
    "/alumni/8.jpg",
    "/alumni/9.jpg",
    "/alumni/10.jpg",
  ];

  return (
    <section className="w-full px-5 sm:px-10 py-12 font-serif">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl italic mb-12 text-[#00285E]">
        Our Gallery
      </h2>

      {/* First row: 1 big + 4 small */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        {/* Big Image */}
        <div className="lg:w-2/5 w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src={images[0]}
            alt="Gallery 1"
            className="w-full h-64 sm:h-80 lg:h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* 4 Small Images */}
        <div className="lg:w-3/5 w-full grid grid-cols-2 sm:grid-cols-2 gap-4">
          {images.slice(1, 5).map((img, index) => (
            <div
              key={index + 1}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={img}
                alt={`Gallery ${index + 2}`}
                className="w-full h-40 sm:h-48 md:h-52 lg:h-78 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second row: 4 small + 1 big (flipped) */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* 4 Small Images */}
        <div className="lg:w-3/5 w-full grid grid-cols-2 sm:grid-cols-2 gap-4 order-2 lg:order-1">
          {images.slice(5, 9).map((img, index) => (
            <div
              key={index + 5}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                src={img}
                alt={`Gallery ${index + 6}`}
                className="w-full h-40 sm:h-48 md:h-52 lg:h-78 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Big Image */}
        <div className="lg:w-2/5 w-full overflow-hidden rounded-2xl shadow-lg order-1 lg:order-2 mb-4 lg:mb-0">
          <img
            src={images[9]}
            alt="Gallery 10"
            className="w-full h-64 sm:h-80 lg:h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <button className="bg-[#00285E] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          View More
        </button>
      </div>
    </section>
  );
};

export default OurGallery;
