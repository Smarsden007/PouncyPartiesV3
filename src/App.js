import { Details } from "./components/Details";
import GallerySection from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { OurBouncers } from "./components/OurBouncers";
import { ServiceSection } from "./components/ServiceSection";
import SimpleTabs from "./components/ServiceTabs";

function App() {
  return (
    <div className="App">
     <HeroSection />
     <SimpleTabs />
     <OurBouncers />
     <ServiceSection/>
     <Details />
     <GallerySection />
    </div>
  );
}

export default App;
