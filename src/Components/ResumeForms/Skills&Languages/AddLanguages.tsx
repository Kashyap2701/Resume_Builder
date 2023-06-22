import React from "react";
import { useState } from "react";
import FormHeader from "../FormHeader";
import { Input, Wrapper, AccordianForm } from "../../../Utils/FormStyle";
import { RxCross2 } from "react-icons/rx";
import style from "./Style.module.css";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import uuid from "react-uuid";
import { curResumeActions } from "../../../Store/curResumeSlice";

const AddLanguages = () => {
  const [isexpand, setIsExpand] = useState(false);
  const languages = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.languages
  );
  const dispatch = useAppDispatch();

  const addLanguagehandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const languageName = e.target as HTMLInputElement;
    if (e.key === "Enter" && languageName.value.trim() != "") {
      const newLanguage = {
        id: uuid(),
        name: languageName.value,
      };
      dispatch(curResumeActions.addlanguage(newLanguage));
      (e.target as HTMLInputElement).value = "";
    }
  };

  const deleteLanguageHandler = (e) => {
    console.log(e.target.parentNode?.id);
    dispatch(curResumeActions.deletelanguage(e.target.parentNode.id));
  };

  return (
    <div>
      <FormHeader
        title="Languages"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <AccordianForm>
          <Input
            type="text"
            placeholder="Type Languages that you can speak & Press 'Enter'"
            onKeyDown={addLanguagehandler}
          />
          <Wrapper>
            <div className={style["container"]}>
              {languages.map((data) => {
                return (
                  <div key={data.id} id={data.id} className={style["item"]}>
                    <span className={style["text"]}>{data.name}</span>
                    <RxCross2
                      className={style["cancel-icon"]}
                      onClick={deleteLanguageHandler}
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

export default AddLanguages;
