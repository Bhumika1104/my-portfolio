import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experince";
import "./App.css";

const App = () => {
  return (
    <div className="portfolio-box">
      <Hero />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Education />
      <div className="section-divider"></div>
      <Experience />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Contact />
    </div>
  );
};

export default App;
