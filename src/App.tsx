import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";

import Hero from "./components/Hero";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-in" });
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
      </Router>
    </div>
  );
}

export default App;
