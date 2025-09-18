import React from "react";

const WhyInquire = () => {
  const cards = [
    {
      id: 1,
      border: "border-[#012974]",
      text: "A customized information packet tailored to your child’s grade level and interests.",
    },
    {
      id: 2,
      border: "border-[#CF3528]",
      text: "Answers to your specific questions about programs, tuition, curriculum, and Islamic values",
    },
    {
      id: 3,
      border: "border-[#012974]",
      text: "Direct guidance from our admissions team to help you plan your child’s enrollment journey.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full font-serif min-h-screen overflow-hidden py-12 px-10 gap-12">
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-[#CF3528] text-4xl sm:text-5xl lg:text-6xl italic ">
          Why Inquire?
        </h1>

        <p className="text-gray-800 leading-relaxed text-xl sm:text-base lg:text-lg">
          By filling out our inquiry form, you open the door to a personalized
          admissions experience. You’ll receive:
        </p>

        {/* Cards */}
        <div className="space-y-6 mt-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`flex items-start gap-4 border-4 bg-white  ${card.border} rounded-xl shadow-2xl p-6`}
            >
              <div className="text-3xl sm:text-4xl font-bold text-gray-700">
                {card.id}
              </div>
              <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* After cards paragraph */}
        <p className="text-[#012974] leading-relaxed mt-8 text-xl sm:2xl font-bold md:text-2xl italic">
          Invitations to open houses, school tours, and community events
        </p>
      </div>
      {/* Right Side */}
      <div className="w-full md:w-1/2 relative flex justify-center">
        {/* Main Image */}
        <img
          src="/about/bg.jpg"
          alt="Graduation caps"
          className="h-64 sm:h-80 lg:h-120 w-full object-cover rounded-4xl"
        />

        {/* Background Shape */}
        <div className="bg-[#eb7f75] w-[120px] sm:w-[200px] h-[80px] sm:h-[150px] rounded-4xl absolute -right-4 sm:-right-8 -bottom-6 sm:-bottom-8 z-[-1]" />

        {/* Circle Decoration */}
        <div className="bg-white w-[80px] sm:w-[150px] h-[80px] sm:h-[150px] absolute -left-4 -bottom-4 flex justify-center items-center rounded-tr-[100px]">
          <div className="bg-[#dfd7d7] h-[40px] sm:h-[100px] w-[40px] sm:w-[100px] rounded-full flex justify-center items-center">
            <div className="bg-blue-600 h-4 sm:h-7 w-4 sm:w-7 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInquire;
