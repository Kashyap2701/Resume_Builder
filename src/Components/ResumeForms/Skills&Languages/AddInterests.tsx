import React from "react";
import { useState } from "react";
import FormHeader from "../FormHeader";
import { AccordianForm, Input, Wrapper } from "../../../Utils/FormStyle";
import { RxCross2 } from "react-icons/rx";
import style from "./Style.module.css";

const AddInterests = () => {
  const [isexpand, setIsExpand] = useState(false);

  return (
    <div>
      <FormHeader
        title="Interests"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <AccordianForm>
          <Input type="text" placeholder="Type Your Hobbies or Interest Here" />
          <Wrapper>
            <div className={style["container"]}>
              <div className={style["item"]}>
                <span className={style["text"]}>Music</span>
                <RxCross2 className={style["cancel-icon"]} />
              </div>
              <div className={style["item"]}>
                <span className={style["text"]}>Traveling</span>
                <RxCross2 className={style["cancel-icon"]} />
              </div>
            </div>
          </Wrapper>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddInterests;
