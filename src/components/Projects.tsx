import React from "react";
import img1 from "../assets/portfolio.png";
import img3 from "../assets/arcade-game.png";
import img2 from "../assets/img-generator.png";
import ac_img from "../assets/ac-platform.png";
import er_img from "../assets/cems-er.png";
import sdm_img from "../assets/cems-sdm.png";
import node_img from "../assets/cems-node.png";
import appWebview_img from "../assets/app-webview.png";



import {useTranslation} from "react-i18next";

interface Data  {
  id:string
  name:string
  tag1:string
  tag2:string
  tag3:string
  desc:string
  img:string
  demo:string
  repo:string
}

const Projects = () => {
  const { t } = useTranslation();

  const projectDatas:Data[] = [
    {
    id: "1",
          name:  t("projects_project_1_name"),
          tag1: "MUI",
          tag2: "Tailwind",
          tag3: "工作作品",
          desc: t("projects_project_1_desc"),
          img: ac_img,
          demo: "https://drive.google.com/file/d/1J3g9SqI_hpTEeCQ1w_MrdTCVMKN2QVNL/view",
          repo: "",
    },
    {
      id: "2",
      name: t("projects_project_2_name"),
        tag1: "MUI",
        tag2: "Tailwind",
        tag3: "工作作品",
    desc: t("projects_project_2_desc"),
    img: er_img,
        demo: "",
        repo: "",
},
{
  id: "3",
      name: t("projects_project_3_name"),
    tag1: "MUI",
    tag2: "Tailwind",
    tag3: "工作作品",
    desc: t("projects_project_3_desc"),
    img: sdm_img,
    demo: "",
    repo: "",
},
      {
          id: "4",
          name:  t("projects_project_4_name"),
          tag1: "MUI",
          tag2: "Tailwind",
          tag3: "工作作品",
          desc: t("projects_project_4_desc"),
          img: node_img,
          demo: "",
          repo: "",
      },
      {
          id: "5",
          name: t("projects_project_5_name"),
          tag1: "MUI",
          tag2: "Tailwind",
          tag3: "工作作品",
          desc: t("projects_project_5_desc"),
          img: appWebview_img,
          demo: "https://webview-dev.nextdrive.io/tw-webview/sscp-electricity-keeper?hash=6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b",
          repo: "https://webview-dev.nextdrive.io/tw-webview/tpri-eesr-demand-response?hash=4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce",
      },
    {
      id: "6",
      name:  t("projects_project_6_name"),
      tag1: "React",
      tag2: "SCSS",
      tag3: "個人作品",
      desc: t("projects_project_6_desc"),
      img: img1,
      demo: "https://cching01099.github.io/myportfolio/",
      repo: "https://github.com/cching01099/myportfolio",
    },
    {
      id: "7",
      name: t("projects_project_7_name"),
      tag1: "React",
      tag2: "SCSS",
      tag3: "個人作品",
      desc: t("projects_project_7_desc"),
      img: img2,
      demo: "https://cching01099.github.io/ImageGenerator-React/",
      repo: "https://github.com/cching01099/ImageGenerator-React",
    },
    {
      id: "8",
      name: t("projects_project_8_name"),
      tag1: "JS",
      tag2: "SCSS",
      tag3: "個人作品",
      desc: t("projects_project_8_desc"),
      img: img3,
      demo: "https://cching01099.github.io/ArcadeGame/",
      repo: "https://github.com/cching01099/ArcadeGame",
    },
  ];

  return (
    <div id="projects">
      <div className="section_title" style={{ border:"2px solid green"}}>
        <h1>{t("projects")}</h1>
      </div>
      <div className="section_container">
        <div className="project">
          {projectDatas.map((d) => (
              <div className="item" style={{cursor:"auto"}}>
                <div className="info">
                  <h1>
                    0{d.id}.{" "}
                    <div className="tag">
                        <span className="tag1 ">{d.tag1}</span>
                        <span className="tag2">{d.tag2}</span>
                        <span className="tag3">{d.tag3}</span>
                    </div>
                  </h1>

                  <h2>{d.name}</h2>

                  <div className="others">
                    <p>{d.desc}</p>
                      {d.id === "5" ? (
                          <div className="links">
                              <a
                                  href={d.demo}
                                  target="_blank"
                                  className="link"
                                  rel="noopener noreferrer"
                              >
                                  <i className="fa-solid fa-globe"></i>demo1
                              </a>
                              <a
                                  href={d.demo}
                                  target="_blank"
                                  className="link"
                                  rel="noopener noreferrer"
                              >
                                  <i className="fa-solid fa-globe"></i>demo2
                              </a>
                          </div>
                      ) : (
                          (d.demo !== "" && d.repo !== "") ? (
                              <div className="links">
                                  <a
                                      href={d.demo}
                                      target="_blank"
                                      className="link"
                                      rel="noopener noreferrer"
                              >
                                  <i className="fa-solid fa-globe"></i>demo
                              </a>
                              <a
                                  href={d.repo}
                                  target="_blank"
                                  className="link"
                                  rel="noopener noreferrer"
                              >
                                  <i className="fa-brands fa-github"></i>repo
                              </a>
                          </div>
                      ) : (d.demo !== "" && d.repo === "")  ? ( <div className="links">
                          <a
                              href={d.demo}
                              target="_blank"
                              className="link"
                              rel="noopener noreferrer"
                          >
                              <i className="fa-solid fa-globe"></i>demo
                          </a>
                      </div>) : (<div style={{marginTop:"8px"}}><p style={{color:"grey",fontSize:"0.8rem"}}>{t("projects_reminder")}</p></div>))}
                  </div>
                </div>
                  <div className="image">
                      <img src={d.img} alt=""/>
                  </div>
              </div>
          ))}
        </div>
      </div>

        <div className="section_more">
            <a
                href="https://github.com/cching01099?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
            >
                ...{t("projects_seeMore")}
            </a>
        </div>
    </div>
  );
};

export default Projects;
