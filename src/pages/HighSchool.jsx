import Hero from "../components/highschool/Hero";
import Welcome from "../components/highschool/Welcome";
import Slogan from "../components/highschool/Slogan";
import Learning from "../components/highschool/Learning";
import Slogan2 from "../components/highschool/Slogan2";
import Slider from "../components/highschool/Slider";
import Cta from "../components/highschool/Cta";
import Readiness from "../components/highschool/Readiness";
import CurriculumOverview from "../components/preschool/CurriculumOverview";
import Experience from "../components/highschool/Experience";
import CurriculumOverviewMbl from "../components/preschool/CurriculumOverviewMbl";
import AdvancedAcademics from "../components/highschool/AdvancedAcademics";
import Values from "../components/highschool/Values";

const HighSchool = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <Slogan />
      <Values />
      <AdvancedAcademics />
      <Readiness />
      <Experience />
      {/* Show desktop version  */}
      <div className="hidden md:block">
        <CurriculumOverview />
      </div>

      {/* Show mobile version  */}
      <div className="block md:hidden">
        <CurriculumOverviewMbl />
      </div>
      <Learning />
      <Slogan2 />
      <Slider />
      <Cta />
    </div>
  );
};

export default HighSchool;
