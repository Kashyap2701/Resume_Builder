/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { useState } from "react";
import { Formik, Form, FormikConfig, FormikHelpers } from "formik";
import {
  Row,
  Column,
  Divider,
  AccordianForm,
  ButtonRight,
  FlexContainer,
  NewItem,
  InfoList,
} from "../../../Utils/FormStyle";
import { RxCross2 } from "react-icons/rx";
import { GrFormAdd } from "react-icons/gr";
import InputField from "../../InputField/InputField";
import { initialValuefoeEducationInfo } from "../../../Utils/InitialValue";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import uuid from "react-uuid";
import { save } from "../../../Utils/Toster";
import { validationschemaforEducation } from "../../../Utils/ValidationSchema";
import { curResumeActions } from "../../../Store/curResumeSlice";
import AccordianHeader from "../AccordianHeader";
import { degree } from "../../../Utils/Types";

const AddEducation = () => {
  const [isexpand, setIsExpand] = useState(false);
  const [buttonText, setButtonText] = useState("Save");
  const educations = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.education
  );
  const dispatch = useAppDispatch();
  const [currentEducation, setCurrentEducation] = useState<degree>(
    initialValuefoeEducationInfo
  );

  // Handler to save education details
  const submitHandler: FormikConfig<degree>["onSubmit"] = (
    values: degree,
    { resetForm }: FormikHelpers<degree>
  ) => {
    if (buttonText == "Save") {
      dispatch(curResumeActions.addEducation({ ...values, id: uuid() }));
      save("Education Added");
    } else {
      dispatch(curResumeActions.updateEducation(values));
      save("Education Updated");
      setCurrentEducation(initialValuefoeEducationInfo);
      setButtonText("Save");
    }
    resetForm();
  };

  // Handler to edit eduacation details
  const editEducationHandler = (e: React.MouseEvent<HTMLDivElement | null>) => {
    const node = e.target as HTMLDivElement | null;
    const id = node!.id;
    setButtonText("Update");
    setCurrentEducation(educations.filter((data) => data.id == id)[0]);
  };

  // Handler to delete education details
  const deleteEducationHandler = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    const parentNode = e.target as HTMLDivElement | null;
    const grandParentNode = parentNode?.parentNode as HTMLDivElement;
    const id = grandParentNode!.id;
    dispatch(curResumeActions.deleteEducation(id));
  };

  // Handler to add new education details
  const newEducationHandler = () => {
    setButtonText("Save");
    setCurrentEducation(initialValuefoeEducationInfo);
  };

  return (
    <div>
      <AccordianHeader
        title="Education"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <AccordianForm>
          {/* Education History Section */}
          <FlexContainer className="p-0-5">
            {educations.map((data) => {
              return (
                <InfoList
                  key={data.id}
                  id={data.id}
                  onClick={editEducationHandler}
                >
                  <span>{data.title}</span>
                  <RxCross2 onClick={deleteEducationHandler} />
                </InfoList>
              );
            })}
            {/* Button for add new education */}
            {educations.length != 0 && (
              <NewItem onClick={newEducationHandler}>
                <GrFormAdd />
                <span>New</span>
              </NewItem>
            )}
          </FlexContainer>

          {/* Education Editor Section */}
          <Formik
            initialValues={currentEducation}
            validationSchema={validationschemaforEducation}
            enableReinitialize={true}
            onSubmit={submitHandler}
          >
            <Form>
              <Column>
                <InputField
                  id="title"
                  name="title"
                  label="Title"
                  placeholder="ex. Education 1"
                />
                <Row>
                  <InputField
                    id="course-name"
                    name="courseName"
                    label="Course/Degree"
                  />
                  <Divider />
                  <InputField
                    id="university-name"
                    name="university"
                    label="College/School Name"
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

export default AddEducation;
