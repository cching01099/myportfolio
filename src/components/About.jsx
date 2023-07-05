import React from "react";

const About = () => {
  const data = [
    {
      id: "1",
      period: "2022/11-2023/03",
      company: "安麗日用品股份有限公司",
      position: "行銷專員",
      desc: "執行產品上市規劃活動",
      desc_2: "品牌官網與電商的內容規劃",
    },
    {
      id: "2",
      period: "2022/01-2022/08",
      company: "凱絡媒體服務股份有限公司",
      position: "資深企劃",
      desc: "品牌APP之成效型媒體規劃與預算控管",
      desc_2: "成效優化建議之APP介面及素材洞察",
    },
    {
      id: "3",
      period: "2021/08-2021/12",
      company: "奧美廣告股份有限公司",
      position: "資深業務執行",
      desc: "品牌社群平台之創意內容經營",
      desc_2: "策劃數位專案 - AR濾鏡",
    },
    {
      id: "4",
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
              樂觀開朗大方，喜歡攝影、旅遊，捕捉人生的瞬間、記錄生活的點滴，不設限挑戰自我、勇於跳脫舒適圈。
              <br />
              廣告媒體背景，擁有近三年的行銷經驗，對於使用者體驗、產品企劃、設計美感有些許涉略及觀點。
              <br />
              透過自學前端程式語言，主要使用React開發專案與頁面設計，喜歡開發side-projects，目前積極轉職欲加入科技/軟體業。
            </p>
          </div>
          <div className="skills">
            <h3>
              <i class="fa-solid fa-screwdriver-wrench"></i> Skills{" "}
              <span>技能</span>
            </h3>
            <ul>
              <li>
                前端技術： JavaScript、 HTML、CSS、React、SCSS、 Bootstrap、
                Node.js、 Webpack、 RWD、Git、 Figma、Adobe PS。
              </li>
              <li>
                專案管理：
                時程/預算/資源控管、跨部門溝通合作、客戶關係、廠商維運。
              </li>
              <li>
                數據分析：成效型廣告分析、A/B
                Test規劃、APP介面與素材洞察、GA4分析、GTM應用。
              </li>
            </ul>
          </div>
          <div className="learning">
            <h3>
              <i class="fa-solid fa-book"></i> Self-Learning <span>學習</span>
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
  );
};

export default About;
