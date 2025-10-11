import Hero from "../components/admission/Hero";
import Message from "../components/admission/Message";
import WhyChooseUs from "../components/admission/WhyChooseUs";
import WhyChooseUsMobile from "../components/admission/WhyChooseUsMobile"; 
import Steps from "../components/admission/Steps";
import Learning from "../components/admission/Learning";
import Slogan from "../components/admission/Slogan";
import Cards from "../components/admission/Cards";
import Team from "../components/admission/Team";
import Aid from "../components/admission/Aid";
import AdnmTeam from "../components/admission/AdmTeam";
import Cta from "../components/admission/Cta";
import AdmissionsRequirements from "../components/admission/AdmissionsRequirements";
import AdmissionsRequirementsMobile from "../components/admission/AdmissionsRequirementsMobile";

const Admission = () => {
  return (
    <div>
      <Hero />
      <Message />

      {/* Desktop version */}
      <div className="hidden md:block">
        <WhyChooseUs />
      </div>

      {/* Mobile version */}
      <div className="block md:hidden">
        <WhyChooseUsMobile />
      </div>

      <Steps />

      {/* Desktop version */}
      <div className="hidden md:block">
        <AdmissionsRequirements />
      </div>

      {/* Mobile version */}
      <div className="block md:hidden">
        <AdmissionsRequirementsMobile />
      </div>

      <Learning />
      <Slogan />
      <Cards />
      <Team />
      <Aid />
      <AdnmTeam />
      <Cta />
    </div>
  );
};

export default Admission;
