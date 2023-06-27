/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { useState } from "react";
import {
  Input,
  AccordianForm,
  FlexWrapContainer,
  ListItem,
} from "../../../Utils/FormStyle";
import { RxCross2 } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import uuid from "react-uuid";
import { curResumeActions } from "../../../Store/curResumeSlice";
import AccordianHeader from "../AccordianHeader";

const AddLanguages = () => {
  const [isexpand, setIsExpand] = useState(false);
  const languages = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.languages
  );
  const dispatch = useAppDispatch();

  // Handler to add new language
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

  // Handler to delete language
  const deleteLanguageHandler = (e: React.MouseEvent<SVGElement>) => {
    const parentNode = e.currentTarget.parentNode as HTMLDivElement | null;
    dispatch(curResumeActions.deletelanguage(parentNode!.id));
  };

  return (
    <div>
      <AccordianHeader
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
          <FlexWrapContainer className="p-0-5">
            {languages.map((interest) => {
              return (
                <ListItem key={interest.id} id={interest.id}>
                  <span>{interest.name}</span>
                  <RxCross2 onClick={deleteLanguageHandler} />
                </ListItem>
              );
            })}
          </FlexWrapContainer>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddLanguages;
