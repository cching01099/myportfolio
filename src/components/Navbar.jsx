import React from "react";
import avatar from "../assets/avatar.png";

const Navbar = ({ onToggleLanguage }) => {
  return (
    <nav id="header">
      <div className="title">
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="info">
          <h2>Ching Yang</h2>
        </div>
      </div>
      <div className="menu">
        <a href="#home" className="home">
          <i class="fa-solid fa-house icon"></i>
          <span className="text">Home</span>
        </a>
        <a href="#about" className="about">
          <i class="fa-solid fa-user"></i>
          <span className="text">About Me</span>
        </a>
        <a href="#projects" className="projects">
          <i class="fa-solid fa-file"></i>
          <span className="text">Projects</span>
        </a>
        <a href="#contact" className="download">
          <i class="fa-solid fa-comment"></i>
          <span className="text">Contact</span>
        </a>
        <a href="#" className="languageChange" onClick={onToggleLanguage}>
          <i class="fa-solid fa-language"></i>
          <span className="text">EN/CN</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
