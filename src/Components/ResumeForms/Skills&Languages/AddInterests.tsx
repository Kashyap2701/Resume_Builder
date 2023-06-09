import React from "react";
import { useState } from "react";
import FormHeader from "../FormHeader";
import { AccordianForm, Input, Wrapper } from "../../../Utils/FormStyle";
import { RxCross2 } from "react-icons/rx";
import style from "./Style.module.css";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import { interestActions } from "../../../Store/ResumeSlices/interest";
import uuid from "react-uuid";

const AddInterests = () => {
  const [isexpand, setIsExpand] = useState(false);
  const interests = useAppSelector((state) => state.interest.interests);
  const dispatch = useAppDispatch();

  const addinteresthandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const interestName = e.target as HTMLInputElement;
    if (e.key === "Enter" && interestName.value.trim() != "") {
      const newInterest = {
        id: uuid(),
        name: interestName.value,
      };
      dispatch(interestActions.addinterest(newInterest));
      (e.target as HTMLInputElement).value = "";
    }
  };

  const deleteHandler = (e) => {
    console.log(e.target.parentNode?.id);
    dispatch(interestActions.deleteinterest(e.target.parentNode.id));
  };

  return (
    <div>
      <FormHeader
        title="Interests"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <AccordianForm>
          <Input
            type="text"
            defaultValue=""
            placeholder="Type Your Hobbies or Interest Here & Press 'Enter'"
            onKeyDown={addinteresthandler}
          />
          <Wrapper>
            <div className={style["container"]}>
              {interests.map((interest) => {
                return (
                  <div
                    key={interest.id}
                    id={interest.id}
                    className={style["item"]}
                  >
                    <span className={style["text"]}>{interest.name}</span>
                    <RxCross2
                      className={style["cancel-icon"]}
                      onClick={deleteHandler}
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

export default AddInterests;
