import React from "react";
import "./Skills.css";

export default function Skills() {
  const AboutUsInfo = {
    title: "Skills",
    skill_items: [
      {
        logo: "logo fas fa-drafting-compass",
        title: "Front-End",
        description:
          "HTML, CSS, JS, TS, Angular.js, Angular"
      },
      {
        logo: "logo fab fa-connectdevelop",
        title: "Back-End",
        description: "C#, Node.js, Java EE etc."
      },
      {
        logo: "logo fas fa-boxes",
        title: "DB",
        description: "MySQL, MongoDB, Firebase, Google Cloud."
      },
      {
        logo: "logo fas fa-vial",
        title: "DevOps",
        description:
          "Microsoft Azure, Travis CI, Azure Pipelines, Test Unitarios."
      },
      {
        logo: "logo fas fa-globe-americas",
        title: "Tools",
        description:
          "Unix Bash, Powershell, CMD"
      }
    ]
  };

  return (
    <div className="center-txt" data-aos="fade-up">
      <section>
        <div>
          <h2>{AboutUsInfo.title}</h2>
          <div className="line-dv line-blue" />
        </div>
      </section>
      <div className="container mb">
        <div className="row">
          {AboutUsInfo.skill_items.map((item, index) => {
            return (
              <div key={index} className="center-txt col-lg-3 col-md-6">
                <div className="">
                  <div className="icon-container">
                    <i className={item.logo} />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
