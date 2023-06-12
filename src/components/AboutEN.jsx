import React from "react";

const About = () => {
  const data = [
    {
      id: "1",
      period: "2022/11-2023/03",
      company: "Amway Taiwan Co., Ltd.",
      position: "Marketing Specialist",
      desc: "Execution of product launch online activities.",
      desc_2: "Content planning of Brand official website and E-commerce.",
    },
    {
      id: "2",
      period: "2022/01-2022/08",
      company: "Carat Media Taiwan Ltd.",
      position: "Senior Planner",
      desc: "Media planning and budget allocation for APP Performance",
      desc_2:
        "APP interface and material insights for APP Performance optimization suggestions  ",
    },
    {
      id: "3",
      period: "2021/08-2021/12",
      company: "Ogilvy Taiwan Ltd.",
      position: "Senior Account Executive",
      desc: "Manage and Plan monthly social platform for having over 100 creative posts",
      desc_2: "Lead the digital project - AR filter",
    },
    {
      id: "4",
      period: "2020/05-2021/08",
      company: "Agein Media & Communication Ltd.",
      position: "Media Planner",
      desc: "Develop annual media plan for brand",
      desc_2:
        "Develop creative media plan for the brand anniversary, through a campaign website and creative ads.",
    },
  ];
  return (
    <div id="about">
      <div className="section_title">
        <h1>About Me</h1>
      </div>
      <div className="section_container">
        <div className="shape"></div>
        <div className="info">
          <div className="summary">
            <h3>
              <i class="fa-solid fa-face-smile"></i> Summary
            </h3>
            <p>
              {" "}
              With advertising and media background, like to learn new things,
              challenge myself, have my own perspective on aesthetics and user
              experience.
              <br />
              Currently focus on research in the front-end field, through
              self-learning of online courses, I hope to become a front-end web
              developer .
              <br />
              Mainly use React.js, JavaScript, HTML, SCSS for project
              development and page design.{" "}
            </p>
          </div>
          <div className="skills">
            <h3>
              <i class="fa-solid fa-screwdriver-wrench"></i> Skills{" "}
            </h3>
            <ul>
              <li>
                Front-end: HTML、CSS、SCSS、Javascript、 Bootstrap、React.js
                、React Router、 Webpack、Git、Node.js、RWD
              </li>
              <li>Multimedia：GA、iMovie、Adobe PS、Figma</li>
            </ul>
          </div>
          <div className="learning">
            <h3>
              <i class="fa-solid fa-book"></i> Self-Learning
            </h3>
            <ul>
              <li>ALPHA Camp - JavaScript 全端開發</li>
              <li>Udemy - 網頁全端開發、Modern React with Redux</li>
            </ul>
          </div>
        </div>
        <div className="works">
          <h3>
            <i class="fa-solid fa-briefcase"></i> Work Experience{" "}
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
  );
};

export default About;
