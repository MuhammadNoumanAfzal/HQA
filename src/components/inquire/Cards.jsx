import { SlideLeft, SlideRight, SlideUp } from "../../../utility/animation";
import { motion } from "framer-motion";
const Cards = () => {
  const cards = [
    {
      id: 1,
      img: "/inquire/c2.jpg",
      title: "Personalize Your Visit",
      para1:
        "We want your visit to Houston Quran Academy to be meaningful and tailored to your interests. If there’s someone specific you’d like to meet during your time on campus—such as a Qur’an instructor, Islamic Studies teacher, Hifz program coordinator, or one of our youth activity leaders—please let us know when you schedule your visit.",
      para2:
        "We’ll do our best to arrange a personalized meeting so you can get a deeper understanding of the programs and people that will shape your child’s experience at HQA.",
    },
    {
      id: 2,
      img: "/inquire/c1.jpg",
      title: "Virtual Alternatives",
      para1:
        "We want your visit to Houston Quran Academy to be meaningful and tailored to your interests. If there’s someone specific you’d like to meet during your time on campus—such as a Qur’an instructor, Islamic Studies teacher, Hifz program coordinator, or one of our youth activity leaders—please let us know when you schedule your visit.",
      para2:
        "We’ll do our best to arrange a personalized meeting so you can get a deeper understanding of the programs and people that will shape your child’s experience at HQA.",
    },
  ];

  return (
    <section className="w-full py-12 px-10  font-serif">
      {/* Section Heading */}
      <motion.h2
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl text-center  italic text-[#00285E] mb-12"
      >
        Discover What Sets Us Apart
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`bg-white shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden 
              ${index === 0 ? "rounded-tl-[90px]" : ""} 
              ${index === 1 ? "rounded-br-[90px]" : ""}`}
          >
            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-110 object-cover"
            />

            {/* Card Content */}
            <div className="p-6 ">
              {/* Title */}
              <motion.h3
                variants={SlideUp(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl text-center font-semibold italic text-[#00285E] mb-4"
              >
                {card.title}
              </motion.h3>

              {/* Paragraphs */}
              <motion.p
                variants={SlideUp(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-700 text-base leading-relaxed mb-3"
              >
                {card.para1}
              </motion.p>
              <motion.p
                variants={SlideUp(1.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-gray-700 text-base leading-relaxed"
              >
                {card.para2}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
