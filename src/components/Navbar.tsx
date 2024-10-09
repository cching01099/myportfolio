import React from "react";
import avatar from "../assets/avatar.png";
import {useTranslation} from "react-i18next";

type NavbarProps = {
  onToggleLanguage:() => void
  currentLanguage:string
}
const Navbar:React.FunctionComponent<NavbarProps> = ({
  onToggleLanguage,
  currentLanguage
}) => {
  const { t } = useTranslation();

  return (
    <nav id="header" style={{height:"12%"}}>
      <div className="title">
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="info">
          <h2> {t("name")}</h2>
        </div>
      </div>
      <div className="menu">
        <a href="#home" className="home">
          <i className="fa-solid fa-house icon"></i>
          <span className="text"> {t("home")}</span>
        </a>
        <a href="#about" className="about">
          <i className="fa-solid fa-user"></i>
          <span className="text">{t("about")}</span>
        </a>
        <a href="#projects" className="projects">
          <i className="fa-solid fa-file"></i>
          <span className="text">{t("projects")}</span>
        </a>
        <a href="#contact" className="download">
          <i className="fa-solid fa-comment"></i>
          <span className="text">{t("contact")}</span>
        </a>
        <a href={`#${currentLanguage}`} className="languageChange" onClick={onToggleLanguage}>
          <i className="fa-solid fa-language"></i>
          <span className="text">{t("language")}</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
