import React from "react";
import FormHeader from "../FormHeader";
import { useState } from "react";
import { Formik, Form } from "formik";
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

const AddEducation = () => {
  const [isexpand, setIsExpand] = useState(false);

  const submitHandler = () => {
    // console.log(values);
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
            <div className={style["item"]}>
              <span>Education 1</span>
              <RxCross2 />
            </div>
            <div className={style["item"]}>
              <span>Education 2</span>
              <RxCross2 />
            </div>
            <div className={style["new-item"]}>
              <GrFormAdd />
              <span>New</span>
            </div>
          </div>
          <Formik
            initialValues={initialValuefoeEducationInfo}
            onSubmit={submitHandler}
          >
            <Form>
              <Column>
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
