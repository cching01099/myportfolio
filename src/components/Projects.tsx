import React from "react";
import img1 from "../assets/portfolio.png";
import img3 from "../assets/arcade-game.png";
import img2 from "../assets/img-generator.png";
import img4 from "../assets/pet.png";
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
      tag1: "React.js",
      tag2: "SCSS",
      tag3: "Node.js",
      desc: t("projects_project_1_desc"),
      img: img1,
      demo: "",
      repo: "https://github.com/cching01099/myportfolio",
    },
    {
      id: "2",
      name: t("projects_project_2_name"),
      tag1: "React.js",
      tag2: "SCSS",
      tag3: "Node.js",
      desc: t("projects_project_2_desc"),
      img: img2,
      demo: "https://cching01099.github.io/ImageGenerator-React/",
      repo: "https://github.com/cching01099/ImageGenerator-React",
    },
    {
      id: "3",
      name: t("projects_project_3_name"),
      tag1: "JavaScript",
      tag2: "SCSS",
      tag3: "HTML",
      desc: t("projects_project_3_desc"),
      img: img3,
      demo: "https://cching01099.github.io/ArcadeGame/",
      repo: "https://github.com/cching01099/ArcadeGame",
    },
    {
      id: "4",
      name: t("projects_project_4_name"),
      tag1: "React.js",
      tag2: "SCSS",
      tag3: "HTML",
      desc: t("projects_project_4_desc"),
      img: img4,
      demo: "https://cching01099.github.io/AdoptaPet/",
      repo: "https://github.com/cching01099/AdoptaPet",
    },
  ];

  return (
    <div id="projects">
      <div className="section_title">
        <h1>{t("projects")}</h1>
      </div>
      <div className="section_container">
        <div className="project">
          {projectDatas.map((d) => (
            <div className="item">
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
                </div>
              </div>
              <div className="image">
                <img src={d.img} alt="" />
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
