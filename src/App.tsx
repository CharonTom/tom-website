import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// import Skills from "./sections/Skills";
// import Portfolio from "./sections/Portfolio";
// import Contact from "./sections/Contact";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Nav from "./components/Nav";
// import ScrollToTop from "./components/ScrollToTop";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="global-style overflow-hidden">
      <Router>
        <Header />
        <Hero />
        <Nav />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
        <ScrollToTop />
        {/* <Header />
       

        <Hero />
         */}
      </Router>
    </div>
  );
}

export default App;
