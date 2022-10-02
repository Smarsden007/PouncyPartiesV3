import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
// import Navigation from './components/navigation/navBar'
import ScrollToTop from './ScollToTop';
import { Faq } from "./pages/Faq";
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
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;