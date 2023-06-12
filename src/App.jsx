import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/style.css";
import HomeEN from "./components/HomeEN";
import AboutEN from "./components/AboutEN";
import ProjectsEN from "./components/ProjectsEN";

function App() {
  const [isEnglish, setIsEnglish] = useState(false);

  const handleToggleLanguage = () => {
    setIsEnglish(!isEnglish);
  };

  return (
    <div className="app">
      <Navbar onToggleLanguage={handleToggleLanguage} />
      {!isEnglish ? (
        <>
          <Home />
          <About />
          <Projects />
        </>
      ) : (
        <>
          <HomeEN />
          <AboutEN />
          <ProjectsEN />
        </>
      )}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
