import React from "react";
import {useTranslation} from "react-i18next";
import nd_logo from "../assets/logo/nd-logo.png"
import carat_logo from "../assets/logo/carat-logo.png"
import ogilvy_logo from "../assets/logo/ogilvy-logo.jpeg"
import agein_logo from "../assets/logo/agein-logo.png"
import astra_logo from "../assets/logo/astra-logo.jpeg"


type Data = {
    id: string
    period: string
    company: string
    position: string
    desc: string[]
    logo: string
}

const About:React.FunctionComponent = () => {
  const { t } = useTranslation();

    const data: Data[] = [
        {
            id: "0",
            period: "2024/11-Now",
            company: t("about_work_4_company"),
            position: t("about_work_4_position"),
            desc: [],
            logo: astra_logo,
        },
        {
            id: "1",
            period: "2023/08-2024/08",
            company: t("about_work_company"),
            position: t("about_work_position"),
            desc: [
                t("about_work_desc"),
                t("about_work_desc2"),
                t("about_work_desc3"),
                t("about_work_desc4"),
                t("about_work_desc5"),
                t("about_work_desc6"),
                t("about_work_desc7"),
            ],
            logo: nd_logo,
        },
        {
            id: "2",
            period: "2022/01-2022/08",
            company: t("about_work_1_company"),
            position: t("about_work_1_position"),
            desc: [t("about_work_1_desc"), t("about_work_1_desc2")],
            logo: carat_logo,
        },
        {
            id: "3",
            period: "2021/08-2022/01",
            company: t("about_work_2_company"),
            position: t("about_work_2_position"),
            desc: [t("about_work_2_desc"), t("about_work_2_desc2")],
            logo: ogilvy_logo,
        },
        {
            id: "4",
            period: "2020/05-2021/08",
            company: t("about_work_3_company"),
            position: t("about_work_3_position"),
            desc: [t("about_work_3_desc"), t("about_work_3_desc2")],
            logo: agein_logo,
        },
    ]

    return (
    <div id="about">
      <div className="section_title">
        <h1>{t("about")}</h1>
      </div>
      <div className="section_container" >
        <div className="shape" style={{width:"8%"}}></div>
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
                  <li style={{marginBottom: "1.5rem"}}>
                      <span> {t("about_react")} </span> <br/>
                      1. {t("about_react_desc_1")} <br/>
                      2. {t("about_react_desc_2")} <br/>
                      3. {t("about_react_desc_3")} <br/>
                      4. {t("Next.js")}
                  </li>
                  <li style={{marginBottom: "1.5rem"}}>
                      <span>{t("about_js")}</span> <br/>
                      1. {t("about_js_desc_1")} <br/>
                      2. {t("about_js_desc_2")} <br/>
                      3. {t("about_js_desc_3")}
                  </li>
                  <li style={{marginBottom: "1.5rem"}}>
                      <span>{t("about_css")}</span> <br/>
                      1. {t("about_css_desc_1")} <br/>
                      2. {t("about_css_desc_2")} <br/>
                      3. {t("about_css_desc_3")} <br/>
                      4. {t("about_css_desc_4")} <br/>
                  </li>
                  <li style={{marginBottom: "1.5rem"}}>
                      <span>{t("about_others")}</span> <br/>
                      1. {t("about_others_desc_1")} <br/>
                      2. {t("about_others_desc_2")} <br/>
                      3. {t("about_others_desc_3")} <br/>
                      4. {t("about_others_desc_4")} <br/>
                      5. {t("about_others_desc_5")} <br/>
                  </li>
              </ul>
          </div>
        </div>
          <div className="experience" style={{padding: "0"}}>
              <div className="learning"
                   style={{padding: "0.6rem 1.2rem 1.2rem 1.2rem", borderBottom: `2px dotted rgb(21, 78, 140)`}}>
                  <h3>
                      <i className="fa-solid fa-book"></i>
                      <span> {t("about_learning")}</span>
                  </h3>
                  <div className="details">
                      <p className="description">{t("about_learning_desc_1")}</p>
                      <span className="period">2022/08-2023/03</span>

                  </div>
                  <div className="details">
                      <p className="description">{t("about_learning_desc_2")}</p>
                      <span className="period">2015/09-2019/06</span>

                  </div>
              </div>
              <div className="works" style={{padding: "0.4rem 1.2rem"}}>
                  <h3>
                      <i className="fa-solid fa-briefcase"></i>
                      <span> {t("about_works")}</span>
                  </h3>
                  {data.map((d) => {
                      return (
                        <div className="work">
                  <div className="period" style={{width:'155px'}}>
                    <span>{d.period}</span>
                  </div>
                            <div style={{ display:"flex",flexDirection:"row-reverse"}}>
                                <div className="content">
                                    <p className="company">
                                        {d.position} <span className="position">{d.company}</span>
                                    </p>
                                    <p className="description">
                                        {d.desc.length > 0 ? (
                                            d.desc.map((item, index) => (
                                                <span key={index}>
                                                {index + 1}. {item} <br/>
                                                </span>
                                            ))
                                        ) : (
                                           <></>
                                        )}
                                    </p>
                                </div>
                                <div style={{padding: "0 0.4rem 0 0"}}><img src={d.logo} alt="company-logo"
                                                                            style={{width: "4rem"}}/></div>
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
