import React from "react";

const About = () => {
  const data = [
    {
      id: "1",
      period: "2022/01-2022/08",
      company: "Carat Media Taiwan Ltd.",
      position: "Senior Planner",
      desc: "Media planning and budget allocation for APP Performance",
      desc_2:
        "APP interface and material insights for APP Performance optimization suggestions  ",
    },
    {
      id: "2",
      period: "2021/08-2021/12",
      company: "Ogilvy Taiwan Ltd.",
      position: "Senior Account Executive",
      desc: "Manage and Plan monthly social platform for having over 100 creative posts",
      desc_2: "Lead the digital project - AR filter",
    },
    {
      id: "3",
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
            <ul className="skill">
              <li>
                <span>Front End</span> <br />
                1. Languages： Familiar with JavaScript、 HTML、CSS <br />
                2. Framework/Library： Familiar with React、React
                router、SASS/SCSS、 Bootstrap, Beginner in Vue <br />
                3. Others： Familiar with using axios to get API、Webpack、
                RWD、Git、 Figma
              </li>
              <li>
                <span>Data Analysis </span> <br />
                1. Performance-based advertising analysis、A/B Test
                planning、APP interface and material insights <br />
                2. GA4 analysis、GTM application
                <br />
              </li>
              <li>
                <span>Language ability</span> <br />
                1. TOEIC Gold Certificate (875/990)
              </li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="learning">
            <h3>
              <i class="fa-solid fa-book"></i> Coding Boot Camp
            </h3>
            <div className="details">
              <p className="description">
                ALPHA Camp - Foundation Course of Online Web Development Track,
                specialize in Front-end-Course
              </p>
              <span className="period">2022/08-2023/03</span>
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
    </div>
  );
};

export default About;
