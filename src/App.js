import { Details } from "./components/Details";
import GallerySection from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";

function App() {
  return (
    <div className="App">
     <HeroSection />
     <ServiceSection/>
     <Details />
     <GallerySection />
    </div>
  );
}

export default App;
