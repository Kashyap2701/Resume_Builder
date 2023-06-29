/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { useState } from "react";
import {
  AccordianForm,
  FlexWrapContainer,
  Input,
  ListItem,
} from "../../../Utils/FormStyle";
import { RxCross2 } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import uuid from "react-uuid";
import { curResumeActions } from "../../../Store/curResumeSlice";
import AccordianHeader from "../AccordianHeader";

const AddInterests = () => {
  const [isexpand, setIsExpand] = useState(false);
  const interests = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.interests
  );
  const dispatch = useAppDispatch();

  // Handler to add new interest
  const addInteresthandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const interestName = e.target as HTMLInputElement;
    if (e.key === "Enter" && interestName.value.trim() != "") {
      const newInterest = {
        id: uuid(),
        name: interestName.value,
      };
      dispatch(curResumeActions.addinterest(newInterest));
      (e.target as HTMLInputElement).value = "";
    }
  };

  // Handler to delete interest
  const deleteInterestHandler = (e: React.MouseEvent<SVGElement>) => {
    const parentNode = e.currentTarget.parentNode as HTMLDivElement | null;
    dispatch(curResumeActions.deleteinterest(parentNode!.id));
  };

  return (
    <div>
      <AccordianHeader
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
            onKeyDown={addInteresthandler}
          />
          <FlexWrapContainer className="p-0-5">
            {interests.map((interest) => {
              return (
                <ListItem key={interest.id} id={interest.id}>
                  <span>{interest.name}</span>
                  <RxCross2 onClick={deleteInterestHandler} />
                </ListItem>
              );
            })}
          </FlexWrapContainer>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddInterests;
