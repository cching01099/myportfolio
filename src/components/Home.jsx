import React, {useEffect, useState} from "react";
import myphoto from "../assets/myphoto.png";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t,i18n } = useTranslation();
    const [spanText, setSpanText] = useState([
        t("home_typewriter_1"),
        t("home_typewriter_2"),
        t("home_typewriter_3"),
        t("home_typewriter_4"),
    ]);

    useEffect(() => {
        setSpanText([
            t("home_typewriter_1"),
            t("home_typewriter_2"),
            t("home_typewriter_3"),
            t("home_typewriter_4"),
        ]);
    }, [i18n.language, t]);

  return (
    <div id="home">
      <div className="img_container">
        <img src={myphoto} alt="" />
      </div>
      <div className="intro_container">
        <h1>
            {t("home_name")} <br /> {t("name")}
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
              {t("home_span")}  ·
            <Typewriter
              words={spanText}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1500}
            />!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
