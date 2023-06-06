import React from "react";
import { useState } from "react";
import FormHeader from "../FormHeader";
import { AccordianForm, Input, Wrapper } from "../../../Utils/FormStyle";
import { RxCross2 } from "react-icons/rx";
import style from "./Style.module.css";

const AddSkills = () => {
  const [isexpand, setIsExpand] = useState(false);

  return (
    <div>
      <FormHeader
        title="Skills"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <AccordianForm>
          <Input type="text" placeholder="Type Your Skill Here" />
          <Wrapper>
            <div className={style["container"]}>
              <div className={style["item"]}>
                <span className={style["text"]}>HTML</span>
                <RxCross2 className={style["cancel-icon"]} />
              </div>
            </div>
          </Wrapper>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddSkills;
