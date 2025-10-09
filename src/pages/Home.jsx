import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import CorePillars from "../components/home/CorePillars";
import CorePillarsMobile from "../components/home/CorePillarsMobile";
import Achievements from "../components/home/Achievements";
import Results from "../components/home/Results";
import ProfileCard from "../components/home/ProfileCard";
import AlumniComponent from "../components/home/AlumniComponent";
import FamilySection from "../components/home/FamilySection";
import VoicesSection from "../components/home/VoicesSection";
import SchoolComponent from "../components/home/SchoolComponent";
import NewJourney from "../components/home/NewJourney";
import HQANews from "../components/home/HQANews";
import WriteYourStory from "../components/home/WriteYourStory";
import StackingPolaroidCards from "../components/home/StackingPolaroidCards";
import ProfileCardMobile from "../components/home/ProfileCardMobile";
import PillarTextMbl from "../components/home/PillarTextMbl";
import SliderUni from "../components/home/SliderUni";

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />

      <div className="hidden md:block">
        <CorePillars />
      </div>
      <div className="block md:hidden">
        <PillarTextMbl />
        <CorePillarsMobile />
      </div>

      <StackingPolaroidCards />
      <Achievements />
      <Results />

      <div className="hidden md:block">
        <ProfileCard />
      </div>
      <div className="block md:hidden">
        <ProfileCardMobile />
      </div>

      <AlumniComponent />
      <FamilySection />
      <VoicesSection />
      <SchoolComponent />
      <SliderUni />
      <NewJourney />
      <HQANews />
      <WriteYourStory />
    </div>
  );
};

export default Home;
