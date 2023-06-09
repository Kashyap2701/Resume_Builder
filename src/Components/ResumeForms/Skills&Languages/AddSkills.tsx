import React, { MouseEventHandler } from "react";
import { useState } from "react";
import FormHeader from "../FormHeader";
import { AccordianForm, Input, Wrapper } from "../../../Utils/FormStyle";
import { RxCross2 } from "react-icons/rx";
import style from "./Style.module.css";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import { skillActions } from "../../../Store/ResumeFormSlices/skillSlice";
import uuid from "react-uuid";

const AddSkills = () => {
  const [isexpand, setIsExpand] = useState(false);
  const skills = useAppSelector((state) => state.skill.skills);
  const dispatch = useAppDispatch();

  const addSkillhandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const skillName = e.target as HTMLInputElement;
    if (e.key === "Enter" && skillName.value.trim() != "") {
      const newskill = {
        id: uuid(),
        name: skillName.value,
      };
      dispatch(skillActions.addskill(newskill));
      (e.target as HTMLInputElement).value = "";
    }
  };

  const deleteSkillHandler = (e) => {
    dispatch(skillActions.deleteSkill(e.target.parentNode.id));
  };

  return (
    <div>
      <FormHeader
        title="Skills"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <AccordianForm>
          <Input
            type="text"
            defaultValue=""
            placeholder="Type Your Skill Here & Press 'Enter'"
            onKeyDown={addSkillhandler}
          />
          <Wrapper>
            <div className={style["container"]}>
              {skills.map((skill) => {
                return (
                  <div key={skill.id} id={skill.id} className={style["item"]}>
                    <span className={style["text"]}>{skill.name}</span>
                    <RxCross2
                      className={style["cancel-icon"]}
                      onClick={deleteSkillHandler}
                    />
                  </div>
                );
              })}
            </div>
          </Wrapper>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddSkills;
