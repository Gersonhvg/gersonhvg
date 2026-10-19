import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import ProjectsSection from "../components/ProjectsSection";
import TechnologiesSection from "../components/TechnologiesSection";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-2 md:px-4">
        <IntroSection />
        <ProjectsSection />
        <TechnologiesSection />
        <ExperienceSection />
        <ContactSection/>
      </div>
      <Footer />
    </>
  );
};

export default Home;