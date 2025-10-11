import { FaAngleRight } from "react-icons/fa";
import { SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";

const AdnmTeam = () => {
  const cards = [
    {
      title: "Name Here",
      text: "Discover who we are and what we stand for.",
      img: "/admission/t1.jpg",
    },
    {
      title: "Name Here",
      text: "Learn about our mission and long-term goals.",
      img: "/admission/t2.jpg",
    },
    {
      title: "Name Here",
      text: "Find out how you can join and contribute.",
      img: "/admission/t3.jpg",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 md:px-10 font-serif bg-white">
      {/* Heading */}
      <motion.h2
        variants={SlideUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center text-3xl sm:text-4xl lg:text-5xl italic text-[#00285E] mb-8 md:mb-18"
      >
        Meet the <br />
        <span className="text-[#CF3528]">Admissions Team</span>
      </motion.h2>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-4/5 h-80 relative rounded-lg shadow-lg snap-center"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
              <h3 className="flex items-center justify-center gap-2 text-xl font-semibold underline">
                {card.title} <FaAngleRight />
              </h3>
              <p className="text-sm mt-1">{card.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 h-110 rounded-lg"
          >
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
              <h3 className="flex items-center justify-center gap-2 text-xl font-semibold underline">
                {card.title} <FaAngleRight />
              </h3>
              <p className="text-sm mt-1">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdnmTeam;
