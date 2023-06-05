import React from "react";
import style from "../Preview.module.css";
import Strip from "../Strip";

const Skills = () => {
  return (
    <>
      <Strip title="SKILLS" />
      <div className={`${style["section"]}`}>
        <ul className={style["skills"]}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Github</li>
          <li>Redux</li>
          <li>AWS</li>
          <li>Git</li>
        </ul>
      </div>
    </>
  );
};

export default Skills;
