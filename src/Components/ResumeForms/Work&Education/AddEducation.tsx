import React from "react";
import FormHeader from "../FormHeader";
import { useState } from "react";
import { Formik, Form, FormikConfig, FormikHelpers } from "formik";
import {
  Row,
  Column,
  Divider,
  AccordianForm,
  ButtonRight,
} from "../../../Utils/FormStyle";
import { RxCross2 } from "react-icons/rx";
import { GrFormAdd } from "react-icons/gr";
import InputField from "../../InputField/InputField";
import style from "./Style.module.css";
import { initialValuefoeEducationInfo } from "../../../Utils/ResumeForm";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import {
  degree,
  educationAction,
} from "../../../Store/ResumeFormSlices/educationSlice";
import uuid from "react-uuid";
import { save } from "../../../Utils/Toster";
import { validationschemaforEducation } from "../../../Utils/ValidationSchema";

const AddEducation = () => {
  const [isexpand, setIsExpand] = useState(false);
  const [buttonText, setButtonText] = useState("Save");
  const educations = useAppSelector((state) => state.education.educations);
  const dispatch = useAppDispatch();
  const [currentEducation, setCurrentEducation] = useState<degree>(
    initialValuefoeEducationInfo
  );

  const submitHandler: FormikConfig<degree>["onSubmit"] = (
    values: degree,
    { resetForm }: FormikHelpers<degree>
  ) => {
    if (buttonText == "Save") {
      dispatch(educationAction.addEducation({ ...values, id: uuid() }));
      save("Education Added");
    } else {
      dispatch(educationAction.updateEducation(values));
      save("Education Updated");
      setCurrentEducation(initialValuefoeEducationInfo);
      setButtonText("Save");
    }
    resetForm();
  };

  const editEducationHandler = (e) => {
    const id = e.target.id;
    setButtonText("Update");
    setCurrentEducation(educations.filter((data) => data.id == id)[0]);
  };

  const deleteEducationHandler = (e) => {
    const id = e.target.parentNode.id;
    dispatch(educationAction.deleteEducation(id));
  };

  const newEducationHandler = (e) => {
    setButtonText("Save");
    setCurrentEducation(currentEducation);
  };

  return (
    <div>
      <FormHeader
        title="Education"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <AccordianForm>
          <div className={style["container"]}>
            {educations.map((data) => {
              return (
                <div
                  key={data.id}
                  id={data.id}
                  className={style["item"]}
                  onClick={editEducationHandler}
                >
                  <span>{data.title}</span>
                  <RxCross2 onClick={deleteEducationHandler} />
                </div>
              );
            })}
            {educations.length != 0 && (
              <div className={style["new-item"]} onClick={newEducationHandler}>
                <GrFormAdd />
                <span>New</span>
              </div>
            )}
          </div>
          <Formik
            initialValues={currentEducation}
            onSubmit={submitHandler}
            validationSchema={validationschemaforEducation}
            enableReinitialize={true}
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
                <button className="secondary-button">Save</button>
              </ButtonRight>
            </Form>
          </Formik>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddEducation;
