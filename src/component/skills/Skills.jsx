import React from "react";
import "./skills.css";
import Frontend from "./Frontend.jsx";
import Backend from "./Backend.jsx";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My Technical level</span>
      <div className="skills_container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
