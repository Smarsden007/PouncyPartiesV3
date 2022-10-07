import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
// import Navigation from './components/navigation/navBar'
import ScrollToTop from './ScollToTop';
import { Faq } from "./pages/Faq";
import { PouncyPay } from "./pages/PouncyPay";
function App() {
  return (
    <div className="App">
      <Router>
     {/* <NavBar /> */}
    <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/FAQ-placeholder" element={<Faq/>}/>
          <Route path="/weddings-sonoma-county-bouncehouse"  />
          <Route path="/toddler-checkout-pay" element={<PouncyPay />}  />
          <Route path="/classic-castle-pay" element={<PouncyPay />}  />
          <Route path="/bastille-castle-pay" element={<PouncyPay />}  />

        </Routes>
      </Router>
     
    </div>
  );
}

export default App;