import Navbar from "../components/faqs/Navbar";
import Hero from "../components/faqs/Hero";
import FaqsHead from "../components/faqs/Faqs.Head";
import FAQTabs from "../components/faqs/FAQTabs";
import Slogan from "../components/faqs/Slogan";
import Cards from "../components/faqs/Cards";
import Question from "../components/faqs/Question";
const Faqs = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FaqsHead />
      <FAQTabs />
      <Slogan />
      <Cards />
      <Question />
    </div>
  );
};

export default Faqs;
