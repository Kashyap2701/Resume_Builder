/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { useState } from "react";
import {
  AccordianForm,
  FlexWrapContainer,
  Input,
  ListItem,
} from "../../../Utils/FormStyle";
import uuid from "react-uuid";
import { RxCross2 } from "react-icons/rx";
import AccordianHeader from "../AccordianHeader";
import { curResumeActions } from "../../../Store/curResumeSlice";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";

const AddSkills = () => {
  const [isexpand, setIsExpand] = useState(false);
  const skills = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.skills
  );
  const dispatch = useAppDispatch();

  // Handler to add new skill
  const addSkillhandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const skillName = e.target as HTMLInputElement;
    if (e.key === "Enter" && skillName.value.trim() != "") {
      const newskill = {
        id: uuid(),
        name: skillName.value,
      };
      dispatch(curResumeActions.addskill(newskill));
      (e.target as HTMLInputElement).value = "";
    }
  };

  // Handler to delete skill
  const deleteSkillHandler = (e: React.MouseEvent<SVGElement>) => {
    const parentNode = e.currentTarget.parentNode as HTMLDivElement | null;
    dispatch(curResumeActions.deleteSkill(parentNode!.id));
  };

  return (
    <div>
      <AccordianHeader
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
          <FlexWrapContainer className="p-0-5">
            {skills.map((interest) => {
              return (
                <ListItem key={interest.id} id={interest.id}>
                  <span>{interest.name}</span>
                  <RxCross2 onClick={deleteSkillHandler} />
                </ListItem>
              );
            })}
          </FlexWrapContainer>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddSkills;
