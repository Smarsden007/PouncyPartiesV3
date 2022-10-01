import { Details } from "./components/Details";
import { Footer } from "./components/Footer";
import GallerySection from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="App">
     <HeroSection />
     <Tabs />
     <ServiceSection/>
     <Details />
     <GallerySection />
     <Footer/>
    </div>
  );
}

export default App;
