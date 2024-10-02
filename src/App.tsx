import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/style.css";
import {useTranslation} from "react-i18next";

const App:React.FunctionComponent = () => {

    const { i18n } = useTranslation();

    const handleToggleLanguage = () => {
        const newLanguage = i18n.language === "en" ? "zh" : "en";
        i18n.changeLanguage(newLanguage);
    };

  return (
    <div className="app">
      <Navbar onToggleLanguage={handleToggleLanguage} currentLanguage={i18n.language} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
