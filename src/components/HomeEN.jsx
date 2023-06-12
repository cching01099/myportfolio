import React from "react";
import myphoto from "../assets/myphoto.png";

import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const spanText = [
    " A Front-End Web Developer!",
    " A Marketer!",
    " An Adventurer!",
    " A New-things & Bagel lover!",
  ];

  return (
    <div id="home">
      <div className="img_container">
        <img src={myphoto} alt="" />
        <div className="img_container2"></div>
      </div>
      <div className="intro_container">
        <h1>
          I'M <br /> CHING YANG
        </h1>
        <div className="typewriter_container">
          <span
            style={{
              color: "rgb(13, 49, 87)",
              fontWeight: "bold",
              fontSize: "1.8rem",
            }}
          >
            {" "}
            This is me ·
            <Typewriter
              words={spanText}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
