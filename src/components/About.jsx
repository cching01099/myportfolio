import React from "react";

const About = () => {
  const data = [
    {
      id: "1",
      period: "2022/01-2022/08",
      company: "凱絡媒體服務股份有限公司",
      position: "資深企劃",
      desc: "品牌APP之成效型媒體規劃與預算控管",
      desc_2: "成效優化建議之APP介面及素材洞察",
    },
    {
      id: "2",
      period: "2021/08-2021/12",
      company: "奧美廣告股份有限公司",
      position: "資深業務執行",
      desc: "品牌社群平台之創意內容經營",
      desc_2: "策劃數位專案 - AR濾鏡",
    },
    {
      id: "3",
      period: "2020/05-2021/08",
      company: "康瑞行銷顧問股份有限公司",
      position: "媒體企劃",
      desc: "品牌全年度媒體規劃",
      desc_2: "策劃品牌周年活動之活動網站與創意版位的製作",
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
              <i class="fa-solid fa-face-smile"></i> Summary <span>概要</span>
            </h3>
            <p>
              {" "}
              樂觀開朗大方，喜歡攝影、旅遊。廣告媒體背景，擁有近三年的行銷經驗，對於使用者體驗、產品企劃、設計美感有些許涉略及觀點。
              <br />
              透過於Boot
              Camp為期8個月的技術培訓，主攻前端技術，擅使用React開發專案，喜歡開發side-projects，目前積極轉職成為一名前端工程師。
            </p>
          </div>
          <div className="skills">
            <h3>
              <i class="fa-solid fa-screwdriver-wrench"></i> Skills{" "}
              <span>技能</span>
            </h3>
            <ul className="skill">
              <li>
                <span>前端技術</span> <br />
                1. 語言： 熟悉JavaScript、 HTML、CSS。 <br />
                2. 框架/函式庫： 熟悉React、React router、SASS/SCSS、
                Bootstrap；初學Vue(學習中)。 <br />
                3. 其他： 熟悉串接API、Webpack、 RWD、Git、 Figma。
              </li>
              <li>
                <span>數據分析 </span> <br />
                1. 成效型廣告分析、A/B Test規劃、APP介面與素材洞察。 <br />
                2. GA4分析、GTM應用。 <br />
              </li>
              <li>
                <span>語文能力 </span>
                <br />
                1. TOEIC 金色證書 (875/990)。
              </li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="learning">
            <h3>
              <i class="fa-solid fa-book"></i> Coding Boot Camp{" "}
              <span>技術學程</span>
            </h3>
            <div className="details">
              <p className="description">ALPHA Camp - 軟體工程師培訓</p>
              <span className="period">2022/08-2023/03</span>
            </div>
          </div>
          <div className="works">
            <h3>
              <i class="fa-solid fa-briefcase"></i> Work Experience{" "}
              <span> 工作經歷</span>
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
