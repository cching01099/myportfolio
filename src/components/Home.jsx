import React from "react";
import myphoto from "../assets/myphoto.png";

import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const spanText = [
    " 前端網頁開發者!",
    " 廣告媒體人!",
    " 愛冒險愛旅行!",
    " 更愛新奇事物!",
  ];

  return (
    <div id="home">
      <div className="img_container">
        <img src={myphoto} alt="" />
        <div className="img_container2"></div>
      </div>
      <div className="intro_container">
        <h1>I'M CHING YANG</h1>
        <div className="typewriter_container">
          <span
            style={{
              color: "rgb(13, 49, 87)",
              fontWeight: "bold",
              fontSize: "1.8rem",
            }}
          >
            {" "}
            我是楊晴晴 ·
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
