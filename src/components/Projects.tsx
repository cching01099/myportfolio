import React from "react";
import img3 from "../assets/webp/arcade-game.webp";
import img2 from "../assets/webp/img-generator.webp";
import ac_img from "../assets/webp/ac-platform.webp";
import er_img from "../assets/webp/cems-er.webp";
import eatsy_img from "../assets/webp/eatsy.webp";




import {useTranslation} from "react-i18next";

interface Data {
    name: string
    tags: string[]
    desc: string
    img: string
    demo: string
    repo: string
}

const Projects = () => {
  const { t } = useTranslation();

    const projectDatas:Data[] = [
        {
            name: t("projects_project_9_name"),
            tags: ["Next.js", "Side Project"],
            desc: t("projects_project_9_desc"),
            img: eatsy_img,
            demo: "https://partners.eatsy.tech/smart-booking-system",
            repo: "",
        },
        {
            name: t("projects_project_1_name"),
            tags: ["React","Tailwind" ,"工作"],
            desc: t("projects_project_1_desc"),
            img: ac_img,
            demo: "https://drive.google.com/file/d/1J3g9SqI_hpTEeCQ1w_MrdTCVMKN2QVNL/view",
            repo: "",
        },
        {
            name: t("projects_project_2_name"),
            tags: ["React","Tailwind","工作"],
            desc: t("projects_project_2_desc"),
            img: er_img,
            demo: "",
            repo: "",
        },
        {
            name: t("projects_project_8_name"),
            tags: ["JS", "SCSS",'個人'],
            desc: t("projects_project_8_desc"),
            img: img3,
            demo: "https://cching01099.github.io/ArcadeGame/",
            repo: "https://github.com/cching01099/ArcadeGame",
        },
        {
            name: t("projects_project_7_name"),
            tags: ["React", "SCSS",'個人'],
            desc: t("projects_project_7_desc"),
            img: img2,
            demo: "https://cching01099.github.io/ImageGenerator-React/",
            repo: "https://github.com/cching01099/ImageGenerator-React",
        },
    ]

    return (
        <div id="projects">
            <div className="section_title">
                <h1>{t("projects")}</h1>
            </div>
            <div className="section_container">
                <div className="project">
                    {projectDatas.map((d, index) => (
                        <div key={index} className="item">
                            <div className="info">
                                <h1>
                                    0{index + 1}.{" "}
                                    <div className="tag">
                                        {d.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className={`tag${tagIndex + 1}`}>
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                </h1>
                                <h2>{d.name}</h2>
                                <div className="others">
                                    <p>{d.desc}</p>
                                    {d.demo || d.repo ? (
                                        <div className="links">
                                            {d.demo && (
                                                <a href={d.demo} target="_blank" className="link" rel="noopener noreferrer">
                                                    <i className="fa-solid fa-globe"></i> demo
                                                </a>
                                            )}
                                            {d.repo && (
                                                <a href={d.repo} target="_blank" className="link" rel="noopener noreferrer">
                                                    <i className="fa-brands fa-github"></i> repo
                                                </a>
                                            )}
                                        </div>
                                    ) : (
                                        <div style={{ marginTop: "8px" }}>
                                            <p style={{ color: "grey", fontSize: "0.8rem" }}>{t("projects_reminder")}</p>
                                        </div>
                                    )}
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
                <a href="https://github.com/cching01099?tab=repositories" target="_blank" rel="noopener noreferrer">
                    ...{t("projects_seeMore")}
                </a>
            </div>
        </div>
    );
};

export default Projects;
