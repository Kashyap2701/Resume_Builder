import React from "react";
import { useState } from "react";
import FormHeader from "../FormHeader";
import { Input, Wrapper, AccordianForm } from "../../../Utils/FormStyle";
import { RxCross2 } from "react-icons/rx";
import style from "./Style.module.css";

const AddLanguages = () => {
  const [isexpand, setIsExpand] = useState(false);

  return (
    <div>
      <FormHeader
        title="Languages"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <AccordianForm>
          <Input type="text" placeholder="Type Languages that you can speak" />
          <Wrapper>
            <div className={style["container"]}>
              <div className={style["item"]}>
                <span className={style["text"]}>Gujarati</span>
                <RxCross2 className={style["cancel-icon"]} />
              </div>
            </div>
          </Wrapper>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddLanguages;
