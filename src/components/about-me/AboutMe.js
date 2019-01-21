import React from "react";
import { Element } from "react-scroll";
import "./AboutMe.css";

export default function AboutMe() {
  const AboutUsInfo = {
    title: "About me",
    paragraph: [
      "...",
      "..."
    ]
  };

  return (
    <Element name="about-me">
      <br />
      <div className="container about-me" data-aos="fade-up">
        <div>
          <div className="center-txt">
            <h2>{AboutUsInfo.title}</h2>
            <div className="line-dv line-blue" />
            <div className="mb">
              {AboutUsInfo.paragraph.map((item, index) => {
                return (
                  <div key={index}>
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
