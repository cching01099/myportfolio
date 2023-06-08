import React from "react";
import callme from "../assets/callme.png";

const Contact = () => {
  return (
    <div id="contact">
      <div className="section_title">
        <h1>Contact</h1>
      </div>
      <div className="section_container">
        <div className="shape"></div>
        <div className="info">
          <div className="doc">
            <h2>Download My CV</h2>
            <a
              href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:d1efc6a6-9e09-4757-b27d-dbc428ef2c8c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-download"></i>
              英文版
            </a>
            <a
              href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:b577815b-f44e-42f1-9138-c29ff863938c"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-download"></i>
              中文版
            </a>
          </div>
          <div className="social">
            <h2>Find Me On</h2>

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
          <div className="dm">
            <h2>DM Me</h2>
            <a
              href="mailto: cching01099@gmail.com"
              className="mail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a
              href="tel:+886989976965"
              className="phone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>

        <div className="img">
          <img src={callme} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
