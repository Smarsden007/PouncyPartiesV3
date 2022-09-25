import { Details } from "./components/Details";
import { HeroSection } from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";

function App() {
  return (
    <div className="App">
     <HeroSection />
     <ServiceSection/>
     <Details />
    </div>
  );
}

export default App;
