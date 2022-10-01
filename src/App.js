import { Details } from "./components/Details";
import GallerySection from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { OurBouncers } from "./components/OurBouncers";
import { ServiceSection } from "./components/ServiceSection";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
     <HeroSection />
     <Tabs />
     {/* <OurBouncers /> */}
     <ServiceSection/>
     <Details />
     <GallerySection />
    </div>
  );
}

export default App;
