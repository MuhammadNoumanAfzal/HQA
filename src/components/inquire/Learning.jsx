import { FaAngleRight } from "react-icons/fa";
const Learning = () => {
  const cards = [
    {
      title: "Student Life",
      text: "Discover who we are and what we stand for.",
      img: "/scholarship/about.jpg", // replace with your image
    },
    {
      title: "Inquire",
      text: "Learn about our mission and long-term goals.",
      img: "/scholarship/addmisiion.jpg", // replace with your image
    },
    {
      title: "Academics",
      text: "Find out how you can join and contribute.",
      img: "/scholarship/acdemic.jpg", // replace with your image
    },
  ];

  return (
    <section className="py-12 px-10 font-serif bg-white">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl italic text-[#00285E]  mb-18 ">
        I’m looking forward to <br />
        <span className="text-[#CF3528]">learning more about...</span>
      </h2>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 h-110 rounded-lg"
          >
            {/* Full Image */}
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

            {/* Text on Image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
              <h3 className="flex items-center justify-center gap-2 text-xl font-semibold underline">
                {card.title} <FaAngleRight />
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Learning;
