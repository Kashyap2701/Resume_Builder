import React from "react";
import { useAppSelector } from "../../../Store/hooks";
import style from "../Preview.module.css";
import Strip from "../Strip";

const Skills = () => {
  const skills = useAppSelector((state) => state.skill.skills);

  return (
    <>
      {skills.length != 0 && (
        <>
          <Strip title="SKILLS" />
          <div className={`${style["section"]}`}>
            <ul className={style["skills"]}>
              {skills.map((skill) => {
                return <li key={skill.id}>{skill.name}</li>;
              })}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Skills;
