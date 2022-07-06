import Gsap from "./animation/gsap";
import {
  FooterSection,
  HeroSection,
  InfoSection,
  NavSection,
  ProjectSection,
} from "./Components";
function App() {
  return (
    <div className='App'>
      <NavSection />
      <HeroSection />
      <InfoSection />
      <ProjectSection />
      <FooterSection />
      <Gsap />
    </div>
  );
}

export default App;
