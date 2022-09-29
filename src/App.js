import { Details } from "./components/Details";
import GallerySection from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { OurBouncers } from "./components/OurBouncers";
import { ServiceSection } from "./components/ServiceSection";

function App() {
  return (
    <div className="App">
     <HeroSection />
     <OurBouncers />
     <ServiceSection/>
     <Details />
     <GallerySection />
    </div>
  );
}

export default App;
