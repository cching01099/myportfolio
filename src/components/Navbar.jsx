import React from "react";
import avatar from "../assets/avatar.png";

const Navbar = () => {
  return (
    <nav id="header">
      <div className="title">
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <div className="info">
          <h2>Ching Yang</h2>

          <a
            href="mailto: cching01099@gmail.com"
            className="mail"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a
            href="https://github.com/cching01099"
            className="github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ching-yang-b1549923a/"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://medium.com/@cching01099"
            className="medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-medium"></i>
          </a>
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
      </div>
    </nav>
  );
};

export default Navbar;
