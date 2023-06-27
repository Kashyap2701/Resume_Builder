/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { useState } from "react";
import { Formik, Form, FormikHelpers, FormikConfig } from "formik";
import {
  Row,
  Column,
  Divider,
  ButtonRight,
  AccordianForm,
  NewItem,
  FlexContainer,
  InfoList,
} from "../../../Utils/FormStyle";
import { RxCross2 } from "react-icons/rx";
import { GrFormAdd } from "react-icons/gr";
import InputField from "../../InputField/InputField";
import { initialValueforWorkInfo } from "../../../Utils/InitialValue";
import uuid from "react-uuid";
import { save } from "../../../Utils/Toster";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import { validationschemaforWork } from "../../../Utils/ValidationSchema";
import { curResumeActions } from "../../../Store/curResumeSlice";
import AccordianHeader from "../AccordianHeader";
import { experience } from "../../../Utils/Types";

const AddWork = () => {
  const experiences = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.experiences
  );
  const dispatch = useAppDispatch();
  const [isexpand, setIsExpand] = useState(false);
  const [buttonText, setButtonText] = useState("Save");
  const [selectedExperience, setSelectedExperience] = useState<experience>(
    initialValueforWorkInfo
  );

  // Handler to save experiences details
  const submitHandler: FormikConfig<experience>["onSubmit"] = (
    values: experience,
    { resetForm }: FormikHelpers<experience>
  ) => {
    if (buttonText == "Save") {
      dispatch(curResumeActions.addExperience({ ...values, id: uuid() }));
      save("Experience Added");
    } else {
      dispatch(curResumeActions.updateExperience(values));
      save("Experience Updated");
      setSelectedExperience(initialValueforWorkInfo);
      setButtonText("Save");
    }
    resetForm();
  };

  // Handler to add new experiences details
  const newExperienceHandler = () => {
    setButtonText("Save");
    setSelectedExperience(initialValueforWorkInfo);
  };

  // Handler to edit single experience details
  const editExperienceHandler = (
    e: React.MouseEvent<HTMLDivElement | null>
  ) => {
    const node = e.target as HTMLDivElement | null;
    const id = node!.id;
    setButtonText("Update");
    setSelectedExperience(experiences.filter((data) => data.id == id)[0]);
  };

  // Handler to delete single experience details
  const deleteExperienceHandler = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    const parentNode = e.target as HTMLDivElement | null;
    const grandParentNode = parentNode?.parentNode as HTMLDivElement;
    const id = grandParentNode!.id;
    dispatch(curResumeActions.deleteExperience(id));
  };

  return (
    <div>
      <AccordianHeader
        title="Work Experience"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />

      {isexpand && (
        <AccordianForm>
          {/* Experiences History Section */}
          <FlexContainer className="p-0-5">
            {experiences.map((data) => {
              return (
                <InfoList
                  key={data.id}
                  id={data.id}
                  onClick={editExperienceHandler}
                >
                  <span>{data.title}</span>
                  <RxCross2 onClick={deleteExperienceHandler} />
                </InfoList>
              );
            })}
            {/* Button for add new experience */}
            {experiences.length != 0 && (
              <NewItem onClick={newExperienceHandler}>
                <GrFormAdd />
                <span>New</span>
              </NewItem>
            )}
          </FlexContainer>

          {/* Experience Editor Section */}
          <Formik
            initialValues={selectedExperience}
            onSubmit={submitHandler}
            validationSchema={validationschemaforWork}
            enableReinitialize={true}
          >
            <Form>
              <Column>
                <InputField
                  id="title"
                  name="title"
                  label="Title"
                  placeholder="ex. Work Experince 1"
                />
                <Row>
                  <InputField id="jobTitle" name="jobTitle" label="Job Title" />
                  <Divider />
                  <InputField
                    id="company name"
                    name="companyName"
                    label="Company Name"
                  />
                </Row>
                <Row>
                  <InputField
                    id="start-date"
                    name="startedYear"
                    label="Start Year"
                  />
                  <Divider />
                  <InputField id="end-year" name="endedYear" label="End Year" />
                </Row>
                <InputField
                  id="desc"
                  name="desc"
                  label="Description"
                  varient="textarea"
                />
              </Column>
              <ButtonRight>
                <button className="secondary-button" type="submit">
                  {buttonText}
                </button>
              </ButtonRight>
            </Form>
          </Formik>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddWork;
