import React from "react";
import {useTranslation} from "react-i18next";

type Data = {
    id:string
    period:string
    company:string
    position:string
    desc:string
    desc_2:string
}

const About:React.FunctionComponent = () => {
  const { t } = useTranslation();

  const data:Data[] = [
    {
      id: "1",
      period: "2022/01-2022/08",
      company:  t("about_work_1_company"),
      position: t("about_work_1_position"),
      desc:  t("about_work_1_desc"),
      desc_2:  t("about_work_1_desc2"),
    },
    {
      id: "2",
      period: "2021/08-2021/12",
      company:  t("about_work_2_company"),
      position: t("about_work_2_position"),
      desc:  t("about_work_2_desc"),
      desc_2:  t("about_work_2_desc2"),
    },
    {
      id: "3",
      period: "2020/05-2021/08",
      company:  t("about_work_3_company"),
      position: t("about_work_3_position"),
      desc:  t("about_work_3_desc"),
      desc_2:  t("about_work_3_desc2"),
    },
  ];
  return (
    <div id="about">
      <div className="section_title">
        <h1>{t("about")}</h1>
      </div>
      <div className="section_container">
        <div className="shape"></div>
        <div className="info">
          <div className="summary">
            <h3>
              <i className="fa-solid fa-face-smile"></i> {t("about_summary")}
            </h3>
            <p>
              {" "}
              {t("about_summary_desc_1")}<br />
              {t("about_summary_desc_2")}</p>
          </div>
          <div className="skills">
            <h3>
              <i className="fa-solid fa-screwdriver-wrench"></i>  {t("about_skills")}
            </h3>
            <ul className="skill">
              <li>
                <span> {t("about_frontEnd")} </span> <br />
                1.  {t("about_frontEnd_desc_1")} <br />
                2. {t("about_frontEnd_desc_2")} <br />
                3. {t("about_frontEnd_desc_3")}
              </li>
              <li>
                <span>{t("about_dataAnalysis")}</span> <br/>
                1. {t("about_dataAnalysis_desc_1")} <br/>
                2. {t("about_dataAnalysis_desc_2")}  <br/>
              </li>
              <li>
                <span>{t("about_languageAbility")} </span>
                <br/>
                1. {t("about_languageAbility_desc")}
              </li>
            </ul>
          </div>
        </div>
        <div className="experience">
       <div className="learning">
                  <h3>
                        <i className="fa-solid fa-book"></i>
                            <span> {t("about_learning")}</span>
            </h3>
                    <div className="details">
                         <p className="description">{t("about_learning_desc")}</p>
                         <span className="period">2022/08-2023/03</span>
            </div>
          </div>
           <div className="works">
             <h3>
             <i className="fa-solid fa-briefcase"></i>
             <span> {t("about_works")}</span>
            </h3>
            {data.map((d) => {
              return (
                        <div className="work">
                  <div className="period">
                    <span>{d.period}</span>
                  </div>
                  <div className="content">
                   <p className="company">
                      {d.company} <span className="position">{d.position}</span>
                    </p>
                    <p className="description">
                      1. {d.desc} <br />
                      2. {d.desc_2}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
