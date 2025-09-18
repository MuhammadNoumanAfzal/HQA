import NavbarLayout from "../components/home/NavbarLayout";
import HeroText from "../components/home/HeroText";
import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
import CorePillars from "../components/home/CorePillars";
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
import Footer from "../components/home/Footer";
import StackingPolaroidCards from "../components/home/StackingPolaroidCards";

const Home = () => {
  return (
    <div>
      {/* <NavbarLayout /> */}
      <Hero />
      <Welcome />
      <CorePillars />
      <StackingPolaroidCards />
      <Achievements />
      <Results />
      <ProfileCard />
      <AlumniComponent />
      <FamilySection />
      <VoicesSection />
      <SchoolComponent />
      <NewJourney />
      <HQANews />
      <WriteYourStory />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
