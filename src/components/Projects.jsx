import React from "react";
import img1 from "../assets/portfolio.png";
import img3 from "../assets/arcade-game.png";
import img2 from "../assets/img-generator.png";

const Projects = () => {
  const data = [
    {
      id: "1",
      name: "myPortfolio",
      tag1: "React.js",
      tag2: "SCSS",
      tag3: "Node.js",
      desc: "個人網站，將個人資訊、履歷、作品集，依照個人風格實現於此網站。",
      img: img1,
      demo: "",
      repo: "https://github.com/cching01099/myportfolio",
    },
    {
      id: "2",
      name: "Image Generator",
      tag1: "React.js",
      tag2: "SCSS",
      tag3: "Node.js",
      desc: "圖庫資源網站，串接三種公開且免費的圖片平台資源，可統一於此網站中進行多元風格的圖片資源之搜尋及下載。",
      img: img2,
      demo: "https://cching01099.github.io/ImageGenerator-React/",
      repo: "https://github.com/cching01099/ImageGenerator-React",
    },
    {
      id: "3",
      name: "Arcade Game",
      tag1: "JavaScript",
      tag2: "SCSS",
      tag3: "HTML",
      desc: "集結過往使用 Vanilla JavaScript 所撰寫的有趣小遊戲，除了呈現練習的成果之外，也能HAVE FUN！",
      img: img3,
      demo: "https://cching01099.github.io/ArcadeGame/",
      repo: "https://github.com/cching01099/ArcadeGame",
    },
  ];

  return (
    <div id="projects">
      <div className="section_title">
        <h1>Projects</h1>
      </div>
      <div className="section_container">
        <div className="project">
          {data.map((d) => (
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
                      class="link"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-solid fa-globe"></i>demo
                    </a>
                    <a
                      href={d.repo}
                      target="_blank"
                      class="link"
                      rel="noopener noreferrer"
                    >
                      <i class="fa-brands fa-github"></i>repo
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
          ...see more projects
        </a>
      </div>
    </div>
  );
};

export default Projects;
