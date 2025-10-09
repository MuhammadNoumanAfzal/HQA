import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Slogan = () => {
  return (
    <section className="flex justify-center items-center py-12 px-10 font-serif">
      {/* Wrapper with 80% width */}
      <div className="relative w-[96%] bg-[#00285E] bg-cover bg-center py-18 flex flex-col items-center justify-center text-center rounded-lg shadow-lg">
        {/* Description */}

        <h1 className=" text-3xl  md:text-5xl italic text-white pb-18 px-1  ">
          Academic Excellence
        </h1>
        <p className="text-white max-w-4xl italic text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-4 md:px-6 mb-4">
          Our Middle School curriculum is designed to challenge, inspire, and
          empower students in Grades 6 through 8. Core subjects are taught by
          passionate, subject-specialist educators who blend high academic
          expectations with moral and spiritual guidance.
        </p>
        <button className="flex items-center gap-2 cursor-pointer bg-white text-red-700 px-6 py-3 rounded-lg shadow-md text-sm sm:text-base md:text-lg transition hover:scale-105 mt-8">
          Student Life <FaArrowRight className="text-red-700" />
        </button>
      </div>
    </section>
  );
};

export default Slogan;
